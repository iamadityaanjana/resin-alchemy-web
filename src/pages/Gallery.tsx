
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
  // Coffee tables
  {
    id: 1,
    title: "Azure Ocean Coffee Table",
    description: "A stunning piece featuring deep blue resin waves reminiscent of ocean depths.",
    image: "/lovable-uploads/2298da00-a213-4b1b-8b87-fe32a440d71c.png",
    category: "coffee-tables",
    href: "/gallery/azure-ocean-coffee-table",
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
    id: 23,
    title: "Turquoise Collection",
    description: "Set of turquoise resin tables with natural wood, perfect for modern interiors.",
    image: "/lovable-uploads/e135c701-eaea-44b6-97bc-4d25368f02c5.png",
    category: "coffee-tables",
    href: "/gallery/turquoise-collection",
  },
  
  // Wall Art
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
  
  // Rectangle Tables
  {
    id: 2,
    title: "Emerald Forest Dining Table",
    description: "8-seater rectangular dining table with emerald resin inlays mimicking a forest stream.",
    image: "/lovable-uploads/af7c5e1e-1e91-487d-9997-07263135a0b2.png",
    category: "rectangle-tables",
    href: "/gallery/emerald-forest-dining-table",
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
  
  // Dining sets
  {
    id: 101,
    title: "Outdoor Wooden Dining Set",
    description: "Natural wood outdoor dining table with matching benches, perfect for garden gatherings.",
    image: "/lovable-uploads/7b0339f5-0aaa-4c5d-9e52-dd2350282ae7.png",
    category: "dining-sets",
    href: "/gallery/outdoor-wooden-dining-set",
  },
  {
    id: 102,
    title: "Modern Resin Dining Collection",
    description: "Contemporary dining set featuring sleek wood with resin accents and coordinated seating.",
    image: "/lovable-uploads/b5aee2ad-1a45-40bf-8e18-8ecfc2a6e2bc.png",
    category: "dining-sets",
    href: "/gallery/modern-resin-dining-collection",
  },
  {
    id: 103,
    title: "Rustic Outdoor Table Set",
    description: "Handcrafted wooden outdoor dining set with bench seating for casual al fresco dining.",
    image: "/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png",
    category: "dining-sets",
    href: "/gallery/rustic-outdoor-table-set",
  },
  {
    id: 104,
    title: "Blue Lake Dining Ensemble",
    description: "Stunning dining set with blue resin 'lake' center and matching wooden benches.",
    image: "/lovable-uploads/dc52b9cf-689c-421c-8d41-65b42b2543cb.png",
    category: "dining-sets",
    href: "/gallery/blue-lake-dining-ensemble",
  },
  {
    id: 105,
    title: "Natural Wood Bench Set",
    description: "Minimalist dining collection with natural wood finish and comfortable bench seating.",
    image: "/lovable-uploads/70b91f96-438e-4e5e-9bc4-0599f1d248ed.png",
    category: "dining-sets",
    href: "/gallery/natural-wood-bench-set",
  },
  {
    id: 106,
    title: "Outdoor Epoxy Table Collection",
    description: "Weather-resistant outdoor dining set with epoxy-protected wood and matching seating.",
    image: "/lovable-uploads/ca5df8d8-243a-4d09-a016-7e4d701b246d.png",
    category: "dining-sets",
    href: "/gallery/outdoor-epoxy-table-collection",
  },
  {
    id: 107,
    title: "Garden Dining Experience",
    description: "Complete outdoor dining experience with resin-sealed wood perfect for garden parties.",
    image: "/lovable-uploads/43281c7b-9159-428d-8cdd-04e20884fed4.png",
    category: "dining-sets",
    href: "/gallery/garden-dining-experience",
  },
  {
    id: 108,
    title: "Rustic Patio Set",
    description: "Charming rustic outdoor dining set with bench seating ideal for cozy patio gatherings.",
    image: "/lovable-uploads/ef48942c-59fd-47db-be16-cfa98c0db444.png",
    category: "dining-sets",
    href: "/gallery/rustic-patio-set",
  },
  
  // Update bar tables section with new images
  {
    id: 3,
    title: "Purple LED Bar Counter",
    description: "A conversation-starting bar counter with purple LED lighting embedded in the wood design.",
    image: "/lovable-uploads/f8b4b021-5355-4dbf-b626-5cec94e8c7c6.png", // New image
    category: "bar-tables",
    href: "/gallery/purple-led-bar-counter",
  },
  {
    id: 301,
    title: "Glowing Aqua Conference Table",
    description: "Stunning conference table with glowing blue resin that illuminates patterns across the surface.",
    image: "/lovable-uploads/51c8dee7-d624-4bbd-a8cd-87e42f4f7597.png", // New image
    category: "bar-tables",
    href: "/gallery/glowing-aqua-conference-table",
  },
  {
    id: 302,
    title: "Ocean Wave Bar Counter",
    description: "Beautiful curved bar counter featuring a stunning blue ocean wave design in resin.",
    image: "/lovable-uploads/feee3db3-ad55-4660-b77c-52f4fff642de.png", // New image
    category: "bar-tables",
    href: "/gallery/ocean-wave-bar-counter",
  },
  {
    id: 303,
    title: "Natural Edge Bar Top",
    description: "Elegant bar top made from natural wood with polished edges and glass shelf display.",
    image: "/lovable-uploads/2deb2cbc-11ef-4845-a2e6-98414a3a6f77.png", // New image
    category: "bar-tables",
    href: "/gallery/natural-edge-bar-top",
  },
  {
    id: 304,
    title: "Live Edge Coffee Table",
    description: "Stunning live edge coffee table with natural wood grain and modern metal base.",
    image: "/lovable-uploads/2f387035-ee41-4db0-9dec-70074fd318a9.png", // New image
    category: "bar-tables",
    href: "/gallery/live-edge-coffee-table",
  },
  
  // Kitchen units with new images
  {
    id: 201,
    title: "Modern Kitchen Island with Resin Countertop",
    description: "Sleek kitchen island featuring a stunning resin countertop with dramatic black and white marbling.",
    image: "/lovable-uploads/f6668249-2887-4fb2-b9aa-7e1672a95583.png",
    category: "kitchen-units",
    href: "/gallery/modern-kitchen-island",
  },
  {
    id: 202,
    title: "Marble Effect Resin Kitchen Counter",
    description: "Elegant kitchen counter with sophisticated marble-effect resin top and modern cabinetry.",
    image: "/lovable-uploads/5ca2b50e-80a1-4682-8723-1939d0448c2e.png",
    category: "kitchen-units",
    href: "/gallery/marble-effect-resin-counter",
  },
  {
    id: 203,
    title: "Luxury Resin Kitchen Worktop",
    description: "Premium kitchen worktop featuring stunning resin detail and coordinated cabinetry design.",
    image: "/lovable-uploads/0e079e63-5b8b-4caa-b566-4424ed5f344b.png",
    category: "kitchen-units",
    href: "/gallery/luxury-resin-kitchen-worktop",
  },
  {
    id: 204,
    title: "Contemporary Kitchen Installation",
    description: "Full modern kitchen installation with resin countertops and integrated appliances.",
    image: "/lovable-uploads/bd247dcf-3dcd-444f-bff4-81199eaa1a36.png",
    category: "kitchen-units",
    href: "/gallery/contemporary-kitchen-installation",
  },
  {
    id: 205,
    title: "Premium Kitchen Design",
    description: "High-end kitchen design featuring custom resin countertops and premium finishes throughout.",
    image: "/lovable-uploads/6a327655-e4d2-4a4e-b9ef-a28275b3faba.png",
    category: "kitchen-units",
    href: "/gallery/premium-kitchen-design",
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
    navigate(`/gallery?category=${category}`);
  };
  
  return (
    <Layout>
      <HeroSection
        title="Our Gallery"
        description="Explore our collection of handcrafted resin furniture and art pieces"
        imageUrl="/lovable-uploads/096d7f0b-cf84-4135-a7b0-5f7d869d968f.png"
        centered
      />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start gap-1 sm:justify-center mb-8 pb-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-3 py-2 text-sm whitespace-nowrap"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-10">
            <SectionHeading
              title={currentCategoryDesc.title}
              description={currentCategoryDesc.description}
              centered
            />
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    imageSrc={product.image}
                    href={product.href}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Gallery;
