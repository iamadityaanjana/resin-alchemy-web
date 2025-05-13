
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  centered = false, // Added centered prop with default false
}: HeroSectionProps) {
  // Use imageUrl if provided, otherwise use backgroundImage
  const bgImage = imageUrl || backgroundImage;
  
  return (
    <section
      className={cn(
        "relative min-h-[25vh] flex items-center justify-center pt-16 bg-cover bg-center",
        className
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center 30%"
      }}
    >
      {/* Overlay for better text readability */}
      {overlay && <div className="absolute inset-0 bg-black/50"></div>}

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-3xl text-white",
          centered ? "mx-auto text-center" : ""
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
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
                  className="border-white text-white hover:bg-white/20"
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
