import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface CallToAction {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string; // Added description prop
  backgroundImage?: string;
  imageUrl?: string; // Added imageUrl prop as alternative to backgroundImage
  primaryCta?: CallToAction;
  secondaryCta?: CallToAction;
  showQrCode?: boolean;
  overlay?: boolean;
  className?: string;
  centered?: boolean; // Added centered prop
}

export function HeroSection({
  title,
  subtitle,
  description, // Added description prop
  backgroundImage = "/lovable-uploads/8e853f09-f459-484b-ba3b-360a73565bc0.png",
  imageUrl, // Added imageUrl prop
  primaryCta,
  secondaryCta,
  overlay = true,
  className,
  centered = true, // Added centered prop with default false
}: HeroSectionProps) {
  const [imageSrc, setImageSrc] = useState<string>(imageUrl || backgroundImage);
  const [imageError, setImageError] = useState<boolean>(false);
  
  // Default fallback images to try if the primary image fails to load
  const fallbackImages = [
    "/lovable-uploads/8e853f09-f459-484b-ba3b-360a73565bc0.png", // Default hero image
    "/images/gallery-fallback.jpg",
    "/images/default-background.jpg"
  ];
  
  useEffect(() => {
    // Reset error state when props change
    setImageError(false);
    setImageSrc(imageUrl || backgroundImage);
  }, [imageUrl, backgroundImage]);

  const handleImageError = () => {
    console.log("Image failed to load:", imageSrc);
    setImageError(true);
    
    // Try to find a fallback that isn't the current failed image
    const nextFallback = fallbackImages.find(img => img !== imageSrc);
    if (nextFallback) {
      console.log("Trying fallback image:", nextFallback);
      setImageSrc(nextFallback);
    }
  };
  
  return (
    <section
      className={cn(
        "relative min-h-[25vh] flex items-center justify-center pt-16 overflow-hidden",
        className
      )}
    >
      {/* Background image with proper positioning */}
      <div className="absolute inset-0 z-0">
        {!imageError && imageSrc.endsWith('.png') && imageSrc.includes('lovable-uploads') ? (
          <picture>
            <source srcSet={`${imageSrc.replace('.png', '.avif')}`} type="image/avif" />
            <source srcSet={`${imageSrc.replace('.png', '.webp')}`} type="image/webp" />
            <img 
              src={imageSrc} 
              alt="Background" 
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              onError={handleImageError}
            />
          </picture>
        ) : (
          <img 
            src={imageSrc} 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            onError={handleImageError}
          />
        )}
      </div>
      
      {/* Enhanced overlay for better text readability with gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-3xl text-white",
          centered ? "mx-auto text-center" : ""
        )}>
          <h1 className="text-4xl mt-10 md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
                >
                  <Link to={primaryCta.href}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:bg-white/20 mb-10"
                >
                  <Link to={secondaryCta.href}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
