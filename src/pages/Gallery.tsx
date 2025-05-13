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
  
  // Rectangle Tables - Removing first 3 images (IDs: 2, 21, 22)
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
  
  // Updated Dining sets with images from previous prompt (keeping IDs)
  {
    id: 101,
    title: "Glass & Wood Edge Dining Table",
    description: "Beautiful dining table with glass top and natural wood live edge, perfect for elegant dining spaces.",
    image: "/lovable-uploads/152ced57-9091-4112-9465-e45b21a7a5c0.png",
    category: "dining-sets",
    href: "/gallery/glass-wood-edge-dining-table",
  },
  {
    id: 102,
    title: "Blue Conference Table",
    description: "Striking conference table with blue resin center perfect for professional meeting spaces.",
    image: "/lovable-uploads/531ec820-10b9-4127-a28c-46c9e2d00adf.png",
    category: "dining-sets",
    href: "/gallery/blue-conference-table",
  },
  {
    id: 103,
    title: "Turquoise Accent Coffee Table",
    description: "Stunning coffee table with vibrant turquoise resin flowing through solid wood.",
    image: "/lovable-uploads/10ea8268-068b-4ff9-83b1-e62d204462ce.png", 
    category: "dining-sets",
    href: "/gallery/turquoise-accent-table",
  },
  {
    id: 104,
    title: "Black & Gold Accent Table",
    description: "Elegant accent table with bold black resin and golden wood grain pattern.",
    image: "/lovable-uploads/33c495bf-1070-4b2c-a346-522115ffd9d2.png",
    category: "dining-sets",
    href: "/gallery/black-gold-accent-table",
  },
  {
    id: 105,
    title: "Live Edge Coffee Table",
    description: "Natural wood coffee table with stunning live edge and elegant detailing.",
    image: "/lovable-uploads/e8728b06-bf24-464c-87e1-d9a78b7163f0.png",
    category: "dining-sets",
    href: "/gallery/live-edge-coffee-table",
  },
  
  // Updated Bar tables with new images
  {
    id: 3,
    title: "Minimalist Console with Black Resin",
    description: "Elegant console with light wood and sleek black resin inlay perfect for entryway or home office.",
    image: "/lovable-uploads/b58de193-7363-4890-8b6f-d53a6dfb83f4.png",
    category: "bar-tables",
    href: "/gallery/minimalist-console-black-resin",
  },
  {
    id: 301,
    title: "Black Pattern Office Desk",
    description: "Modern office desk with striking black resin pattern and wooden base, perfect for a stylish workspace.",
    image: "/lovable-uploads/29383c99-5232-46df-9434-46c62cb50d50.png", 
    category: "bar-tables",
    href: "/gallery/black-pattern-office-desk",
  },
  {
    id: 302,
    title: "Teal Wave Desk",
    description: "Stunning workspace desk featuring a teal blue resin wave flowing through beautiful natural wood.",
    image: "/lovable-uploads/3ff7d57d-733e-435d-a396-6097c5bb7f89.png",
    category: "bar-tables",
    href: "/gallery/teal-wave-desk",
  },
  {
    id: 303,
    title: "Glass Accent Dining Table",
    description: "Live edge dining table with glass accent and natural wood, perfect for modern dining spaces.",
    image: "/lovable-uploads/152ced57-9091-4112-9465-e45b21a7a5c0.png",
    category: "bar-tables",
    href: "/gallery/glass-accent-dining-table",
  },
  
  // Updated Kitchen units with new images
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
  
  // Updated Workspace Tables with new images
  {
    id: 401,
    title: "Minimalist Wood Console",
    description: "Sleek minimalist console with light wood and black resin inlay, perfect for entry or office spaces.",
    image: "/lovable-uploads/b58de193-7363-4890-8b6f-d53a6dfb83f4.png",
    category: "workspace-tables",
    href: "/gallery/minimalist-wood-console",
  },
  {
    id: 402,
    title: "Dark Pattern Office Desk",
    description: "Executive desk with striking dark resin pattern flowing through natural wood grain.",
    image: "/lovable-uploads/29383c99-5232-46df-9434-46c62cb50d50.png",
    category: "workspace-tables",
    href: "/gallery/dark-pattern-office-desk",
  },
  {
    id: 403,
    title: "Teal Resin Computer Desk",
    description: "Beautiful workspace desk with teal blue resin river and natural live edge design.",
    image: "/lovable-uploads/3ff7d57d-733e-435d-a396-6097c5bb7f89.png",
    category: "workspace-tables",
    href: "/gallery/teal-resin-computer-desk",
  },
  {
    id: 404,
    title: "Natural Edge Glass Desk",
    description: "Stunning desk featuring natural wood edge with glass and resin accents.",
    image: "/lovable-uploads/152ced57-9091-4112-9465-e45b21a7a5c0.png",
    category: "workspace-tables",
    href: "/gallery/natural-edge-glass-desk",
  },
  {
    id: 405,
    title: "Blue Conference Table",
    description: "Premium conference table with blue resin river flowing through natural wood planks.",
    image: "/lovable-uploads/531ec820-10b9-4127-a28c-46c9e2d00adf.png",
    category: "workspace-tables",
    href: "/gallery/blue-conference-table-workspace",
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
