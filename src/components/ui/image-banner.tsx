
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  imageSrc: string;
  className?: string;
  alt?: string;
}

export function ImageBanner({ imageSrc, className, alt = "Banner Image" }: ImageBannerProps) {
  return (
    <div className={cn("w-full overflow-hidden mb-8", className)}>
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-auto object-cover object-center rounded-lg shadow-md"
        style={{ maxHeight: "60vh", objectPosition: "center" }}
      />
    </div>
  );
}
