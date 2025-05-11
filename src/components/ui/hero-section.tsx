
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
  backgroundImage?: string;
  primaryCta?: CallToAction;
  secondaryCta?: CallToAction;
  showQrCode?: boolean;
  overlay?: boolean;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage = "/lovable-uploads/8e853f09-f459-484b-ba3b-360a73565bc0.png", // Updated to the new image
  primaryCta,
  secondaryCta,
  overlay = true,
  className
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[50vh] flex items-center justify-center pt-16 bg-cover bg-center", // Reduced height from min-h-screen to min-h-[50vh]
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center 30%" // Adjusted to always show important content
      }}
    >
      {/* Overlay for better text readability */}
      {overlay && <div className="absolute inset-0 bg-black/50"></div>}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              {subtitle}
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
