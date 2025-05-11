
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PagePreviewProps {
  title: string;
  description?: string;
  imageSrc: string;
  link: string;
  className?: string;
  animationDelay?: string;
}

export function PagePreview({
  title,
  description,
  imageSrc,
  link,
  className,
  animationDelay,
}: PagePreviewProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up",
        className
      )}
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            asChild
            variant="outline" 
            size="sm"
            className="border-white text-white hover:bg-white hover:text-resin-blue"
          >
            <Link to={link}>
              Visit Page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-100">
        <h3 className="font-playfair font-semibold text-lg mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
}

export function PagePreviewSection() {
  // Updated with the new contextual images provided by the user
  const pages = [
    {
      title: "Gallery",
      description: "Explore our collection of custom resin furniture",
      imageSrc: "/lovable-uploads/80c11314-acb5-43ee-b322-af58e7456bc0.png", // Gallery image
      link: "/gallery"
    },
    {
      title: "Custom Orders",
      description: "Create your own unique piece of resin furniture",
      imageSrc: "/lovable-uploads/6a327655-e4d2-4a4e-b9ef-a28275b3faba.png", // Custom Orders image
      link: "/custom-orders"
    },
    {
      title: "Bulk Orders",
      description: "Special pricing for commercial and larger orders",
      imageSrc: "/lovable-uploads/ef48942c-59fd-47db-be16-cfa98c0db444.png", // Bulk Orders image
      link: "/bulk-orders"
    },
    {
      title: "About Us",
      description: "Learn about our craftsmanship and commitment to quality",
      imageSrc: "/lovable-uploads/a857819f-4cd6-4096-adc5-60e65135771a.png", // About Us image
      link: "/about-us"
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our products",
      imageSrc: "/lovable-uploads/ed7b37e5-1e55-41fd-8843-4adcc7f0bc91.png", // FAQ image
      link: "/faq"
    },
    {
      title: "Blog",
      description: "Read about latest trends and tips in resin furniture",
      imageSrc: "/lovable-uploads/ade7342b-98fd-49d6-ae1c-1f9761f88201.png", // Blog image
      link: "/blog"
    }
  ];

  return (
    <section className="py-16 px-4 bg-neutral-color">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">Explore Our Website</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <PagePreview
              key={index}
              title={page.title}
              description={page.description}
              imageSrc={page.imageSrc}
              link={page.link}
              className=""
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
