
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  imageSrc: string;
  className?: string;
  alt?: string;
  height?: string;
  objectPosition?: string;
}

export function ImageBanner({ 
  imageSrc, 
  className, 
  alt = "Banner Image", 
  height = "60vh", 
  objectPosition = "center center" 
}: ImageBannerProps) {
  return (
    <div className={cn("w-full overflow-hidden mb-8 relative", className)}>
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-full object-cover rounded-lg shadow-md"
        style={{ 
          maxHeight: height,
          objectFit: "cover", 
          objectPosition 
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>
    </div>
  );
}
