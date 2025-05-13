
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle,
  description,
  className,
  centered = false 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-8",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold font-playfair">{title}</h2>
      
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
      
      {description && (
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
