# Image Optimization for Resin Alchemy Website

This document outlines the image optimization strategy implemented in the Resin Alchemy website to improve loading performance.

## Overview

We've implemented a comprehensive image optimization solution that:

1. Optimizes existing PNG images in the `public/lovable-uploads/` directory
2. Generates WebP and AVIF versions of each image for better compression
3. Creates a React component system for serving the most efficient image format based on browser support

## Optimized Formats

For each PNG image, we created:
- Optimized PNG (reduced file size by up to 70% in some cases)
- WebP version (typically 60-90% smaller than original PNG)
- AVIF version (typically 65-95% smaller than original PNG)

## Components

### OptimizedImage Component

The `OptimizedImage` component (`src/components/ui/optimized-image.tsx`) provides a simple way to use the optimized images in your React components. It automatically serves:

1. AVIF format to browsers that support it (best compression)
2. WebP format to browsers that support it but not AVIF (good compression)
3. PNG as a fallback for all other browsers

Usage:

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

// In your component
<OptimizedImage 
  src="/lovable-uploads/your-image.png" 
  alt="Description" 
  className="your-classes-here"
/>
```

### Updated Existing Components

The following components have been updated to use the optimized image formats:

- `ImageBanner` - Now uses OptimizedImage for background images
- `RotatingBanner` - Now uses OptimizedImage for rotating banner images
- Various page components

## Script for Image Optimization

A script has been created at `scripts/optimize-images.js` that can be run to optimize new images added to the `public/lovable-uploads/` directory.

To use:

```bash
npm run optimize-images
```

This script will:
1. Create backup copies of original images in `public/lovable-uploads-backup/`
2. Generate WebP versions of all images
3. Generate AVIF versions of all images
4. Optimize the original PNG images

## Performance Improvements

The optimization provides several benefits:

- **Smaller file sizes**: 40-95% reduction in file size depending on the format
- **Faster loading**: Quicker initial page load and improved LCP (Largest Contentful Paint)
- **Better UX**: Less waiting time for users, especially on mobile networks
- **Lower bandwidth usage**: Reduced data consumption for users
- **Better SEO**: Page speed is a ranking factor for search engines

## When Adding New Images

When adding new images to the website:

1. Place them in the `public/lovable-uploads/` directory
2. Run `npm run optimize-images` to generate optimized versions
3. Use the `OptimizedImage` component in your React components
4. For background images in CSS, consider using multiple formats with `image-set()` or update the component to use the `OptimizedImage`

## Future Improvements

Potential future optimizations:

1. Implement lazy loading for images below the fold
2. Add responsive image sizes with srcset for different viewport sizes
3. Consider an image CDN for dynamic resizing and additional optimizations
