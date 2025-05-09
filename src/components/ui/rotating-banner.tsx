
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
  objectPosition = "center top"
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
        "relative w-full overflow-hidden", 
        className
      )}
      style={{ height }}
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
            transform: "scale(1.02)",
          }}
        />
      ))}
    </div>
  );
}
