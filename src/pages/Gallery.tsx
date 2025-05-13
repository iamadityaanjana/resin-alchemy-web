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
    id: 9,
    title: "Golden Waves Wall Art",
    description: "Stunning resin wall art with golden wave patterns in warm brown and white colors.",
    image: "/lovable-uploads/fa145c3c-bea1-4a78-a6bf-9dc6d72d5abc.png",
    category: "wall-art",
    href: "/gallery/golden-waves-wall-art",
  },
  {
    id: 10,
    title: "Gold Crystal Geode Wall Panel",
    description: "Beautiful wall art capturing the essence of geodes with gold and crystal resin details.",
    image: "/lovable-uploads/b4033e46-655e-4288-b5cc-43a0ff560249.png",
    category: "wall-art",
    href: "/gallery/gold-crystal-geode-wall-panel",
  },
  {
    id: 11,
    title: "Crystalline Diptych Panel",
    description: "Two-piece wall art with striking black and white design featuring crystal embellishments.",
    image: "/lovable-uploads/9cd32064-d572-4f9a-98c0-620e725c317d.png",
    category: "wall-art",
    href: "/gallery/crystalline-diptych-panel",
  },
  {
    id: 12,
    title: "Onyx & Crystal Wall Art",
    description: "Modern wall art with deep black resin complemented by crystal and gold accents.",
    image: "/lovable-uploads/17c8daac-9845-4292-8272-5c4e56373151.png",
    category: "wall-art",
    href: "/gallery/onyx-crystal-wall-art",
  },
  {
    id: 13,
    title: "Arabic Calligraphy Resin Art",
    description: "Elegant black and gold calligraphy art featuring crystal embellishments and intricate details.",
    image: "/lovable-uploads/d6d5efab-e76e-4a45-8e85-3fe0bcb34ae4.png",
    category: "wall-art",
    href: "/gallery/arabic-calligraphy-resin-art",
  },
  {
    id: 14,
    title: "Blue Waves Calligraphy Panel",
    description: "Contemporary calligraphy art with blue resin waves and elegant gold detailing.",
    image: "/lovable-uploads/b7ce7c71-672b-41a4-a0b8-335b5811324a.png",
    category: "wall-art",
    href: "/gallery/blue-waves-calligraphy-panel",
  },
  {
    id: 15,
    title: "Marble & Gold Scripture Art",
    description: "Round scripture art with stunning white marble effect and gold crystal accents.",
    image: "/lovable-uploads/48ea1a3c-ba41-47a1-8413-50d3a06a781f.png",
    category: "wall-art",
    href: "/gallery/marble-gold-scripture-art",
  },
  {
    id: 16,
    title: "Teal & Gold Calligraphy Collection",
    description: "Set of elegant calligraphy pieces with teal resin, gold accents and crystal details.",
    image: "/lovable-uploads/9ce6f34b-2701-49f0-bffb-352e1be7e5dc.png",
    category: "wall-art",
    href: "/gallery/teal-gold-calligraphy-collection",
  },
  {
    id: 17,
    title: "Lime Leaf Coffee Table",
    description: "Small creative table with transparent green resin featuring preserved leaves and natural wood edges.",
    image: "/lovable-uploads/e292399d-3418-4202-93fe-de8e0fe52439.png",
    category: "coffee-tables",
    href: "/gallery/lime-leaf-coffee-table",
  },
  {
    id: 18,
    title: "Ebony River Coffee Table",
    description: "Contemporary black resin table with natural wood grain and streamlined metal frame.",
    image: "/lovable-uploads/583ddc28-bd66-477a-9f4a-cfb511b0c735.png",
    category: "coffee-tables",
    href: "/gallery/ebony-river-coffee-table",
  },
  {
    id: 19,
    title: "Aqua Lagoon Center Table",
    description: "Round coffee table with striking teal resin and natural wood pattern reminiscent of a lagoon.",
    image: "/lovable-uploads/8ac60485-ec45-48b5-a00d-95ba57095d24.png",
    category: "coffee-tables",
    href: "/gallery/aqua-lagoon-center-table",
  },
  {
    id: 20,
    title: "Coastal Paradise Side Table",
    description: "Beach-inspired side table with stunning turquoise resin resembling ocean waves meeting the shore.",
    image: "/lovable-uploads/2298da00-a213-4b1b-8b87-fe32a440d71c.png", 
    category: "coffee-tables",
    href: "/gallery/coastal-paradise-side-table",
  },
  {
    id: 21,
    title: "Royal Blue Dining Table",
    description: "Elegant rectangular dining table with deep blue resin flowing through natural wood grains.",
    image: "/lovable-uploads/4378aba4-5c03-4826-899f-bf9d479d58f0.png",
    category: "rectangle-tables",
    href: "/gallery/royal-blue-dining-table",
  },
  {
    id: 22,
    title: "Golden River Executive Desk",
    description: "Luxurious executive desk with golden resin river flowing through exotic hardwood.",
    image: "/lovable-uploads/86236631-f0fa-4820-aa2b-363014a7ad0f.png",
    category: "rectangle-tables",
    href: "/gallery/golden-river-executive-desk",
  },
  {
    id: 23,
    title: "Turquoise Collection",
    description: "Set of turquoise resin tables with natural wood, perfect for modern interiors.",
    image: "/lovable-uploads/e135c701-eaea-44b6-97bc-4d25368f02c5.png",
    category: "coffee-tables",
    href: "/gallery/turquoise-collection",
  },
  {
    id: 24,
    title: "Natural Edge Live Edge Dining Table",
    description: "A beautiful wooden dining table with natural edge and subtle finish for elegant dining spaces.",
    image: "/lovable-uploads/08de09b0-a133-45a6-8696-3ce4dbe9e633.png",
    category: "rectangle-tables",
    href: "/gallery/natural-edge-dining-table",
  },
  {
    id: 25,
    title: "Clear Epoxy River Dining Table",
    description: "Stunning live edge table with transparent resin river creating a striking visual effect.",
    image: "/lovable-uploads/d2217fe4-1e6d-4e08-82bf-695c7ee2a737.png",
    category: "rectangle-tables",
    href: "/gallery/clear-epoxy-river-table",
  },
  {
    id: 26,
    title: "Ebony River Conference Table",
    description: "Dramatic black resin river table with natural wood edges perfect for executive meetings.",
    image: "/lovable-uploads/e52c516e-39c7-4f87-96a5-21ad3216f5ea.png",
    category: "rectangle-tables",
    href: "/gallery/ebony-river-conference-table",
  },
  {
    id: 27,
    title: "Luxury Brown Resin River Dining Table",
    description: "Opulent dining table featuring rich brown resin flowing between exotic hardwood slabs.",
    image: "/lovable-uploads/acededbf-1316-4540-9eeb-61408774b16c.png",
    category: "rectangle-tables",
    href: "/gallery/luxury-brown-river-table",
  },
  {
    id: 28,
    title: "Turquoise River Dining Table",
    description: "Bright turquoise resin creates a stunning river effect between natural wood planks.",
    image: "/lovable-uploads/105aded9-1e99-4aa8-b425-d91857dd1967.png",
    category: "rectangle-tables",
    href: "/gallery/turquoise-river-dining-table",
  },
  {
    id: 29,
    title: "Blue Glow Dining Table",
    description: "Sleek modern dining table with blue resin inlay and minimalist metal base.",
    image: "/lovable-uploads/766bc44c-0679-498b-a778-d614d65fc2ab.png",
    category: "rectangle-tables",
    href: "/gallery/blue-glow-dining-table",
  },
  {
    id: 30,
    title: "Royal Blue Resin Centerpiece Table",
    description: "Spectacular centerpiece dining table with vibrant blue resin flowing through wooden planks.",
    image: "/lovable-uploads/561fecb6-4891-466b-beac-79c70ec71574.png",
    category: "rectangle-tables",
    href: "/gallery/royal-blue-centerpiece",
  },
  {
    id: 31,
    title: "Walnut Glass Dining Table",
    description: "Contemporary dining table with glass and walnut featuring an artistic center cutout.",
    image: "/lovable-uploads/d85126a9-a115-4e90-9dac-d4517b03bd94.png",
    category: "rectangle-tables",
    href: "/gallery/walnut-glass-dining-table",
  },
  {
    id: 32,
    title: "Coastal Blue River Table",
    description: "Elegant dining table with turquoise resin mimicking coastal waters through natural wood.",
    image: "/lovable-uploads/aeaa8dac-5b6d-4638-a8f1-f457ccaef080.png",
    category: "rectangle-tables",
    href: "/gallery/coastal-blue-river-table",
  },
  {
    id: 33,
    title: "Azure Edge Dining Table",
    description: "Unique azure blue resin table with natural wooden edges for a modern dining space.",
    image: "/lovable-uploads/a32b1c8d-5553-460a-87a9-08774dcdabaf.png",
    category: "rectangle-tables",
    href: "/gallery/azure-edge-dining-table",
  },
  {
    id: 34,
    title: "Modern Blue River Table",
    description: "Contemporary dining table featuring a sleek design with blue resin river and metal base.",
    image: "/lovable-uploads/46b64deb-3121-494f-99aa-5e4df407e2b4.png",
    category: "rectangle-tables",
    href: "/gallery/modern-blue-river-table",
  },
  {
    id: 35,
    title: "Aqua Flow Dining Set",
    description: "Aqua blue resin flows through natural wood creating a stunning centerpiece for any home.",
    image: "/lovable-uploads/83b52d2e-4e12-4558-bfda-c1205e7be7d9.png",
    category: "rectangle-tables",
    href: "/gallery/aqua-flow-dining-set",
  },
  {
    id: 36,
    title: "Black River Dining Table",
    description: "Sophisticated dining table with black resin river and warm natural wood tones.",
    image: "/lovable-uploads/1b959cb2-e7f8-4c14-8692-e2342a0734a2.png",
    category: "rectangle-tables",
    href: "/gallery/black-river-dining-table",
  },
  {
    id: 37,
    title: "Electric Blue Table",
    description: "Vibrant blue epoxy resin table with metallic base for a truly modern dining experience.",
    image: "/lovable-uploads/22977ebd-1d23-4c97-816b-e2368e723fe0.png",
    category: "rectangle-tables",
    href: "/gallery/electric-blue-table",
  },
  {
    id: 38,
    title: "Blue Haven Dining Table",
    description: "Luxurious blue resin dining table with plush seating for elegant dining experiences.",
    image: "/lovable-uploads/dff33f83-6798-4549-a63c-798e41605e2b.png",
    category: "rectangle-tables",
    href: "/gallery/blue-haven-dining-table",
  },
  {
    id: 39,
    title: "Mountain Cabin Dining Table",
    description: "Rustic wooden dining table with dark resin inlay perfect for mountain retreats.",
    image: "/lovable-uploads/2b4b49f4-7b84-4511-ba1e-3f3c9bc59d1d.png",
    category: "rectangle-tables",
    href: "/gallery/mountain-cabin-table",
  },
  {
    id: 40,
    title: "Grey Marble Resin Table",
    description: "Modern coffee table with grey marble-effect resin flowing through light wood.",
    image: "/lovable-uploads/695a9a15-dbde-4f1a-b74a-631e0d15a1ce.png",
    category: "rectangle-tables",
    href: "/gallery/grey-marble-resin-table",
  },
  {
    id: 41,
    title: "Walnut Live Edge Conference Table",
    description: "Impressive walnut live edge table with natural flow, perfect for executive settings.",
    image: "/lovable-uploads/7b0339f5-0aaa-4c5d-9e52-dd2350282ae7.png",
    category: "rectangle-tables",
    href: "/gallery/walnut-live-edge-conference",
  },
  {
    id: 42,
    title: "White Striped River Table",
    description: "Unique dining table with white and wood striped pattern with resin accents.",
    image: "/lovable-uploads/42acaa2d-6256-433f-8e2b-bfb5068611a8.png",
    category: "rectangle-tables",
    href: "/gallery/white-striped-river-table",
  },
  {
    id: 43,
    title: "Honeycomb Pattern Dining Table",
    description: "Artistic dining table featuring honeycomb wood pattern with resin filling.",
    image: "/lovable-uploads/d2070be8-feca-47aa-9f4f-42f4eb103e17.png",
    category: "rectangle-tables",
    href: "/gallery/honeycomb-pattern-table",
  },
  {
    id: 101,
    title: "Blue Circle Dining Set",
    description: "Natural wood dining table with circular blue resin center and matching bench.",
    image: "/lovable-uploads/174c3286-d510-4679-bceb-61db411e8934.png",
    category: "dining-sets",
    href: "/gallery/blue-circle-dining-set",
  },
  {
    id: 102,
    title: "Glass River Dining Set",
    description: "Elegant dining set featuring live edge wood with glass river center and matching benches.",
    image: "/lovable-uploads/4d7cf703-e4c4-4f43-8afe-b6e395db5db3.png",
    category: "dining-sets",
    href: "/gallery/glass-river-dining-set",
  },
  {
    id: 103,
    title: "Turquoise Outdoor Set",
    description: "Stunning outdoor table and bench with turquoise resin highlights, perfect for patios.",
    image: "/lovable-uploads/1d9927c0-df6b-4d8c-8b70-f222f33186f9.png",
    category: "dining-sets",
    href: "/gallery/turquoise-outdoor-set",
  },
  {
    id: 104,
    title: "Walnut Stream Dining Set",
    description: "Rich walnut dining table with dark resin stream and matching bench for compact dining.",
    image: "/lovable-uploads/f5ec5d7a-262d-402b-ba37-2e81297a638b.png",
    category: "dining-sets",
    href: "/gallery/walnut-stream-dining-set",
  },
  {
    id: 105,
    title: "Blue Lagoon Dining Collection",
    description: "Vibrant blue resin dining table with coordinating bench, bringing ocean vibes to your dining space.",
    image: "/lovable-uploads/4d779443-18bc-49ec-95a2-861a1d87ef26.png",
    category: "dining-sets",
    href: "/gallery/blue-lagoon-dining-collection",
  },
  {
    id: 106,
    title: "Black River Dining Ensemble",
    description: "Sophisticated dining set with black resin river flowing through natural wood with matching seats.",
    image: "/lovable-uploads/8cae1f6d-359e-4c4a-ae26-8c5985dd7b06.png",
    category: "dining-sets",
    href: "/gallery/black-river-dining-ensemble",
  },
  {
    id: 107,
    title: "Clear Glass River Dining Set",
    description: "Contemporary dining set with clear resin river flowing through natural wood edges with matching bench.",
    image: "/lovable-uploads/58c950e7-1fef-445a-b948-1916bdfc4ab1.png",
    category: "dining-sets",
    href: "/gallery/clear-glass-river-dining-set",
  },
  {
    id: 108,
    title: "Blue Channel Dining Set",
    description: "Modern dining table featuring blue resin channel through natural wood with coordinated bench.",
    image: "/lovable-uploads/3689bb7a-5b2b-4910-82e9-7d90656a3cb8.png",
    category: "dining-sets",
    href: "/gallery/blue-channel-dining-set",
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
    description: "Make a bold statement with our striking resin wall art pieces. From abstract designs to calligraphy-inspired pieces with gold and crystal embellishments, our wall art adds dimension, color, and texture to any room. Each piece is a unique creation that captures light and imagination."
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
