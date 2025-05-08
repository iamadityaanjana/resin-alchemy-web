
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  overlay?: boolean;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
  overlay = true,
  children,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center w-full min-h-[70vh] py-20 px-4",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      )}

      <div className="container mx-auto relative z-[2] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8 animate-fade-in" 
             style={{ animationDelay: "200ms" }}>
            {subtitle}
          </p>
        )}
        
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" 
               style={{ animationDelay: "400ms" }}>
            {primaryCta && (
              <Button
                asChild
                size="lg"
                className="bg-resin-blue hover:bg-resin-blue/80 text-white px-8"
              >
                <a href={primaryCta.href}>{primaryCta.text}</a>
              </Button>
            )}
            
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}
