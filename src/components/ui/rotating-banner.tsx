
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
  height = "70vh",
  objectPosition = "center 30%" // Default to more visible position
}: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        "relative w-full overflow-hidden rounded-lg", 
        className
      )}
      style={{ 
        height: height,
        minHeight: "350px" // Ensure minimum height on mobile
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
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: objectPosition,
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Improved overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        </div>
      ))}
    </div>
  );
}
