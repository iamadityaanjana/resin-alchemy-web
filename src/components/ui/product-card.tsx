
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ProductCardProps {
  imageSrc: string; // Changed from 'image' to 'imageSrc' to match usage in Gallery.tsx
  title: string;
  description?: string;
  price?: string;
  category?: string;
  href: string;
  className?: string;
}

export function ProductCard({
  imageSrc, // Changed from 'image' to 'imageSrc'
  title,
  description,
  price,
  category,
  href,
  className,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        isHovered ? "shadow-xl scale-[1.02]" : "shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <OptimizedImage
          src={imageSrc} // Changed from 'image' to 'imageSrc'
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        {category && (
          <span className="text-xs text-white/80 uppercase tracking-wider mb-2">
            {category}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        {description && (
          <p className="text-sm text-white/90 mb-4 line-clamp-2">{description}</p>
        )}
        
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-white font-medium">{price}</span>
          )}
          
          <Button 
            asChild
            size="sm" 
            className="bg-resin-blue hover:bg-resin-blue/80 text-white"
          >
            <a href="https://api.whatsapp.com/message/S5YOTMXSYWR7N1">Enquire Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
