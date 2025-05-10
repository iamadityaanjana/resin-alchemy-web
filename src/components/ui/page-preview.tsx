
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
  const pages = [
    {
      title: "Gallery",
      description: "Explore our collection of custom resin furniture",
      imageSrc: "/lovable-uploads/22f3d297-f4cd-4644-9055-cbcbb559b907.png",
      link: "/gallery"
    },
    {
      title: "Custom Orders",
      description: "Create your own unique piece of resin furniture",
      imageSrc: "/lovable-uploads/23387a9e-efe9-44c2-a089-6d7ec1424cad.png",
      link: "/custom-orders"
    },
    {
      title: "Bulk Orders",
      description: "Special pricing for commercial and larger orders",
      imageSrc: "/lovable-uploads/4f27e518-67de-4d86-bd7f-10dbcb3a381b.png",
      link: "/bulk-orders"
    },
    {
      title: "About Us",
      description: "Learn about our craftsmanship and commitment to quality",
      imageSrc: "/lovable-uploads/b7a8cbed-92a4-4709-9b0f-9b83579944ab.png",
      link: "/about-us"
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our products",
      imageSrc: "/lovable-uploads/43281c7b-9159-428d-8cdd-04e20884fed4.png",
      link: "/faq"
    },
    {
      title: "Blog",
      description: "Read about latest trends and tips in resin furniture",
      imageSrc: "/lovable-uploads/a0316765-b5d1-44f5-a3cb-cec183618c6c.png",
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
