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

interface CategoryDescription {
  id: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Azure Ocean Coffee Table",
    description: "A stunning piece featuring deep blue resin waves reminiscent of ocean depths.",
    image: "/lovable-uploads/2298da00-a213-4b1b-8b87-fe32a440d71c.png",
    category: "coffee-tables",
    href: "/gallery/azure-ocean-coffee-table",
  },
  {
    id: 2,
    title: "Emerald Forest Dining Table",
    description: "8-seater rectangular dining table with emerald resin inlays mimicking a forest stream.",
    image: "/lovable-uploads/af7c5e1e-1e91-487d-9997-07263135a0b2.png",
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
    image: "/lovable-uploads/cc142cbd-7f4a-45cb-94e9-0f954f7284ed.png",
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
    image: "/lovable-uploads/11abd606-210d-445f-b44d-1015f0be9069.png",
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
  {
    id: 11,
    title: "Ruby & Cedar Side Table",
    description: "Circular coffee table with vibrant red resin and cedar wood slices in a stunning arrangement.",
    image: "/lovable-uploads/bd247dcf-3dcd-444f-bff4-81199eaa1a36.png",
    category: "coffee-tables",
    href: "/gallery/ruby-cedar-side-table",
  },
  {
    id: 12,
    title: "Purple & Gold Accent Table",
    description: "Modern accent table with striking purple and yellow resin complementing natural wood discs.",
    image: "/lovable-uploads/9c4bbdee-6b81-428a-a8f8-486bd34af9dc.png",
    category: "coffee-tables",
    href: "/gallery/purple-gold-accent-table",
  },
  {
    id: 13,
    title: "Lime Leaf Coffee Table",
    description: "Small creative table with transparent green resin featuring preserved leaves and natural wood edges.",
    image: "/lovable-uploads/e292399d-3418-4202-93fe-de8e0fe52439.png",
    category: "coffee-tables",
    href: "/gallery/lime-leaf-coffee-table",
  },
  {
    id: 14,
    title: "Ebony River Coffee Table",
    description: "Contemporary black resin table with natural wood grain and streamlined metal frame.",
    image: "/lovable-uploads/583ddc28-bd66-477a-9f4a-cfb511b0c735.png",
    category: "coffee-tables",
    href: "/gallery/ebony-river-coffee-table",
  },
  {
    id: 15,
    title: "Aqua Lagoon Center Table",
    description: "Round coffee table with striking teal resin and natural wood pattern reminiscent of a lagoon.",
    image: "/lovable-uploads/8ac60485-ec45-48b5-a00d-95ba57095d24.png",
    category: "coffee-tables",
    href: "/gallery/aqua-lagoon-center-table",
  },
  {
    id: 16,
    title: "Coastal Paradise Side Table",
    description: "Beach-inspired side table with stunning turquoise resin resembling ocean waves meeting the shore.",
    image: "/lovable-uploads/2298da00-a213-4b1b-8b87-fe32a440d71c.png", 
    category: "coffee-tables",
    href: "/gallery/coastal-paradise-side-table",
  },
  {
    id: 17,
    title: "Royal Blue Dining Table",
    description: "Elegant rectangular dining table with deep blue resin flowing through natural wood grains.",
    image: "/lovable-uploads/4378aba4-5c03-4826-899f-bf9d479d58f0.png",
    category: "rectangle-tables",
    href: "/gallery/royal-blue-dining-table",
  },
  {
    id: 18,
    title: "Golden River Executive Desk",
    description: "Luxurious executive desk with golden resin river flowing through exotic hardwood.",
    image: "/lovable-uploads/86236631-f0fa-4820-aa2b-363014a7ad0f.png",
    category: "rectangle-tables",
    href: "/gallery/golden-river-executive-desk",
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

const categoryDescriptions: CategoryDescription[] = [
  {
    id: "all",
    title: "All Resin Furniture Projects",
    description: "Explore our complete collection of handcrafted resin furniture pieces, each one uniquely designed to bring elegance and character to your space. From tables to wall art, discover the perfect addition for your home or office."
  },
  {
    id: "rectangle-tables",
    title: "Rectangle Resin Tables",
    description: "Our rectangular tables combine solid wood with stunning resin inlays to create functional art pieces for your dining room, conference room, or workspace. Each table is meticulously crafted to ensure strength and longevity while showcasing the natural beauty of wood and resin."
  },
  {
    id: "coffee-tables",
    title: "Coffee Tables",
    description: "Make a statement in your living room with our eye-catching resin coffee tables. These conversation pieces feature unique designs ranging from riverbed patterns to ocean waves, all crafted to be the perfect centerpiece for your seating area."
  },
  {
    id: "dining-sets",
    title: "Dining & Outdoor Sets",
    description: "Transform your dining experience with our complete dining sets that include matching tables and chairs. Our outdoor sets are specially crafted to withstand the elements while maintaining their stunning appearance for years to come."
  },
  {
    id: "bar-tables",
    title: "Bar Tables",
    description: "Elevate your entertaining space with our custom bar tables and counters. These showstopping pieces can be designed to fit your specific measurements and style preferences, creating the perfect spot for gatherings and celebrations."
  },
  {
    id: "workspace-tables",
    title: "Workspace Tables",
    description: "Find inspiration every day with our designer workspace tables. Combining functionality with artistic design, these desks and tables create a productive environment that reflects your personal style and creativity."
  },
  {
    id: "kitchen-units",
    title: "Kitchen Units",
    description: "Add a touch of luxury to your kitchen with our resin countertops, islands, and cabinetry accents. These durable, food-safe surfaces are as practical as they are beautiful, making meal preparation a joy."
  },
  {
    id: "wall-art",
    title: "Resin Wall Art",
    description: "Make a bold statement with our striking resin wall art pieces. From abstract designs to nature-inspired scenes, our wall art adds dimension, color, and texture to any room. Each piece is a unique creation that captures light and imagination."
  },
];

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentCategoryDesc, setCurrentCategoryDesc] = useState(categoryDescriptions[0]);
  
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
    
    // Set current category description
    const categoryDesc = categoryDescriptions.find(cat => cat.id === activeCategory) || categoryDescriptions[0];
    setCurrentCategoryDesc(categoryDesc);
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
            
            {/* Category Description */}
            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <h3 className="text-2xl font-bold font-playfair mb-3">{currentCategoryDesc.title}</h3>
              <p className="text-gray-700">{currentCategoryDesc.description}</p>
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
          <h2 className="text-3xl font-bold mb-6 font-playfair">Don't See What You're Looking For?</h2>
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
