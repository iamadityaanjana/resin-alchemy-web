
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { OptimizedImage } from "./optimized-image";

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
  height = "25vh", // Increased from 20vh to 25vh
  objectPosition = "center 30%" 
}: ImageBannerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setImageLoaded(true);
  }, [imageSrc]);

  return (
    <div className={cn("w-full overflow-hidden mb-6 relative", className)}>
      <div 
        className={cn(
          "w-full h-full rounded-lg shadow-md relative transition-opacity duration-500",
          imageLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ 
          maxHeight: height,
          aspectRatio: "21/9",
          position: "relative"
        }}
      >
        {/* Use OptimizedImage for better performance */}
        <OptimizedImage
          src={imageSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          style={{ objectPosition }}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Enhanced gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30 z-[1] rounded-lg"></div>
      </div>
    </div>
  );
}
