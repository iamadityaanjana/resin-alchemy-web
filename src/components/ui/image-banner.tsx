
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
  height = "15vh", // Increased from 10vh to 15vh
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
