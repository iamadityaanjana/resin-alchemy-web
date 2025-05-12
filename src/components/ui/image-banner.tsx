
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
  height = "10vh", // Reduced from 12vh to 10vh (even smaller size)
  objectPosition = "center 30%" 
}: ImageBannerProps) {
  return (
    <div className={cn("w-full overflow-hidden mb-6 relative", className)}>
      <div 
        className="w-full h-full rounded-lg shadow-md relative"
        style={{ 
          maxHeight: height,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: objectPosition,
          aspectRatio: "21/9"
        }}
        aria-label={alt}
      >
        {/* Background overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/20 z-[1] rounded-lg"></div>
      </div>
    </div>
  );
}
