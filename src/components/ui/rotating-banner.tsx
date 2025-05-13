
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "./optimized-image";

interface RotatingBannerProps {
  images: string[];
  interval?: number;
  className?: string;
  height?: string;
  objectPosition?: string;
}

export function RotatingBanner({
  images,
  interval = 5000,
  className,
  height = "40vh", // Maintained at 40vh for visibility
  objectPosition = "center 30%" // Default position
}: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>([]);

  // Handle image preloading
  useEffect(() => {
    // Initialize loading state for all images
    setIsLoaded(images.map(() => false));
    
    // Preload all images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, [images]);

  useEffect(() => {
    // Only setup rotation if there's more than one image
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden rounded-lg shadow-lg", 
        className
      )}
      style={{ 
        height: height,
        minHeight: "300px" // Maintained for impact
      }}
    >
      {/* All images are in the DOM but only the current one is visible */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          aria-hidden={currentIndex !== index}
        >
          <OptimizedImage
            src={image}
            alt={`Banner image ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-[1]"></div>
        </div>
      ))}
      
      {/* Optional: Add dots for navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 mx-1 rounded-full transition-all",
                currentIndex === index 
                  ? "bg-white w-4" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
