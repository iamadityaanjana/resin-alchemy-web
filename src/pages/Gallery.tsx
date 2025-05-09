
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Azure Ocean Coffee Table",
    description: "A stunning piece featuring deep blue resin waves reminiscent of ocean depths.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "coffee-tables",
    href: "/gallery/azure-ocean-coffee-table",
  },
  {
    id: 2,
    title: "Emerald Forest Dining Table",
    description: "8-seater rectangular dining table with emerald resin inlays mimicking a forest stream.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "rectangle-tables",
    href: "/gallery/emerald-forest-dining-table",
  },
  {
    id: 3,
    title: "Amber Glow Bar Counter",
    description: "A conversation-starting bar counter with warm amber resin that catches and refracts light.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "bar-tables",
    href: "/gallery/amber-glow-bar-counter",
  },
  {
    id: 4,
    title: "Desert Sunset Kitchen Island",
    description: "Kitchen island top with gradient resin work inspired by desert sunset hues.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    category: "kitchen-units",
    href: "/gallery/desert-sunset-kitchen-island",
  },
  {
    id: 5,
    title: "Turquoise Dream End Table",
    description: "Compact end table with vibrant turquoise resin detail perfect for small spaces.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "coffee-tables",
    href: "/gallery/turquoise-dream-end-table",
  },
  {
    id: 6,
    title: "Midnight Galaxy Dining Set",
    description: "Complete 6-seater dining set with tables and chairs featuring dark resin with metallic accents.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "dining-sets",
    href: "/gallery/midnight-galaxy-dining-set",
  },
  {
    id: 7,
    title: "Sunset Boulevard Workspace Desk",
    description: "Productive and inspiring workspace table with sunset-inspired resin flows.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "workspace-tables",
    href: "/gallery/sunset-boulevard-workspace-desk",
  },
  {
    id: 8,
    title: "Forest Stream Conference Table",
    description: "Large conference table with green and blue resin mimicking a forest stream.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    category: "rectangle-tables",
    href: "/gallery/forest-stream-conference-table",
  },
  {
    id: 9,
    title: "Ocean Waves Wall Art",
    description: "Stunning resin wall art with ocean wave patterns in deep blue and teal colors.",
    image: "/lovable-uploads/11abd606-210d-445f-b44d-1015f0be9069.png",
    category: "wall-art",
    href: "/gallery/ocean-waves-wall-art",
  },
  {
    id: 10,
    title: "Autumn Forest Wall Panel",
    description: "Beautiful wall art capturing the essence of autumn forests with amber and gold resin details.",
    image: "/lovable-uploads/a0f11d4b-2456-4b53-98a9-0a35db5d8172.png",
    category: "wall-art",
    href: "/gallery/autumn-forest-wall-panel",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "rectangle-tables", label: "Rectangle Tables" },
  { id: "coffee-tables", label: "Coffee Tables" },
  { id: "dining-sets", label: "Dining & Outdoor Sets" },
  { id: "bar-tables", label: "Bar Tables" },
  { id: "workspace-tables", label: "Workspace Tables" },
  { id: "kitchen-units", label: "Kitchen Units" },
  { id: "wall-art", label: "Resin Wall Art" },
];

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  useEffect(() => {
    // Get category from URL query parameter
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [location.search]);
  
  useEffect(() => {
    // Filter products based on active category
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    // Update URL with new category
    navigate(`/gallery${category === "all" ? "" : `?category=${category}`}`);
  };

  return (
    <Layout>
      <HeroSection
        title="Our Gallery"
        subtitle="Explore our collection of custom resin furniture creations"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Browse Our Collection" 
            subtitle="Filter by category to find the perfect inspiration for your custom piece"
          />
          
          <Tabs 
            defaultValue={activeCategory} 
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="w-full"
          >
            <div className="mb-8 overflow-x-auto pb-4">
              <TabsList className="h-auto flex flex-nowrap min-w-max mx-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-4 py-2 whitespace-nowrap"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent 
                key={category.id} 
                value={category.id}
                className="mt-0 animate-fade-in"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      description={product.description}
                      category={categories.find(cat => cat.id === product.category)?.label}
                      href={product.href}
                    />
                  ))}
                </div>
                
                {filteredProducts.length === 0 && (
                  <div className="text-center py-20">
                    <h3 className="text-2xl font-bold mb-4">No products found</h3>
                    <p className="text-gray-600 mb-8">
                      We couldn't find any products in this category. Please try another category or contact us for custom requests.
                    </p>
                    <Button 
                      onClick={() => handleCategoryChange("all")}
                      className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
                    >
                      View All Projects
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in custom designs tailored to your specific needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
            >
              <a href="/custom-orders">Request Custom Design</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37]"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
