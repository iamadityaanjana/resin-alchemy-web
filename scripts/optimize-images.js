import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

// Configuration
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const LOVABLE_UPLOADS_DIR = path.resolve(PUBLIC_DIR, 'lovable-uploads');
const BACKUP_DIR = path.resolve(process.cwd(), 'public/lovable-uploads-backup');
const TARGET_SIZE_KB = 150; // Default max size in KB for PNG
const QUALITY_WEBP = 80;    // WebP quality (0-100)
const QUALITY_AVIF = 65;    // AVIF quality (0-100)

// Create backup directory if it doesn't exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  console.log(`Created backup directory: ${BACKUP_DIR}`);
}

// Function to get all png files
function findAllPngFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findAllPngFiles(filePath));
    } else if (path.extname(file).toLowerCase() === '.png') {
      results.push(filePath);
    }
  }
  
  return results;
}

// Function to convert file size to KB
function fileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024;
}

// Function to process single image
async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const dirName = path.dirname(filePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  const fileSize = fileSizeInKB(filePath);
  
  // Backup original image
  const backupPath = path.join(BACKUP_DIR, fileName);
  fs.copyFileSync(filePath, backupPath);
  
  console.log(`Processing ${fileName} (${fileSize.toFixed(2)} KB)...`);

  try {
    // Create WebP version
    const webpPath = path.join(dirName, `${fileNameWithoutExt}.webp`);
    await sharp(filePath)
      .webp({ quality: QUALITY_WEBP })
      .toFile(webpPath);
      
    const webpSize = fileSizeInKB(webpPath);
    console.log(`  WebP: ${webpSize.toFixed(2)} KB (${(100 - webpSize / fileSize * 100).toFixed(2)}% reduction)`);

    // Create AVIF version (higher compression but slower to encode/decode)
    const avifPath = path.join(dirName, `${fileNameWithoutExt}.avif`);
    await sharp(filePath)
      .avif({ quality: QUALITY_AVIF })
      .toFile(avifPath);
      
    const avifSize = fileSizeInKB(avifPath);
    console.log(`  AVIF: ${avifSize.toFixed(2)} KB (${(100 - avifSize / fileSize * 100).toFixed(2)}% reduction)`);
    
    // Optimize original PNG
    if (fileSize > TARGET_SIZE_KB) {
      await sharp(filePath)
        .png({ 
          quality: 80,
          compressionLevel: 9, // Maximum compression (0-9)
          palette: true        // Use palette-based quantization for smaller files
        })
        .toFile(`${filePath}.tmp`);
      
      // Replace original with optimized version
      fs.unlinkSync(filePath);
      fs.renameSync(`${filePath}.tmp`, filePath);
      
      const newFileSize = fileSizeInKB(filePath);
      console.log(`  Optimized PNG: ${newFileSize.toFixed(2)} KB (${(100 - newFileSize / fileSize * 100).toFixed(2)}% reduction)`);
    }
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  // Find all PNG files
  const pngFiles = findAllPngFiles(PUBLIC_DIR);
  console.log(`Found ${pngFiles.length} PNG files to optimize`);
  
  // Process each file
  for (const filePath of pngFiles) {
    await optimizeImage(filePath);
  }
  
  console.log('\nImage optimization complete.');
  console.log(`Original images backed up to ${BACKUP_DIR}`);
  console.log('\nNote: To use optimized images in your app:');
  console.log('1. Update your image loading to use picture tag with srcset');
  console.log('2. Example:');
  console.log(`
  <picture>
    <source srcset="/path/to/image.avif" type="image/avif" />
    <source srcset="/path/to/image.webp" type="image/webp" />
    <OptimizedImage src="/path/to/image.png" alt="Description" loading="lazy" />
  </picture>
  `);
}

main().catch(console.error);
