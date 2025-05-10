
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, ArrowRight } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Art and Science of Resin Furniture: A Deep Dive",
    excerpt: "Explore the fascinating intersection of artistic expression and scientific precision that goes into creating stunning resin furniture pieces.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: "Sophia Chen",
    date: "May 2, 2025",
    category: "Craftsmanship",
    readTime: 5,
  },
  {
    id: 2,
    title: "Maintenance Tips: Keeping Your Resin Furniture Looking New",
    excerpt: "Learn essential care techniques to ensure your resin furniture maintains its beauty and luster for years to come.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    author: "Raj Patel",
    date: "April 28, 2025",
    category: "Care & Maintenance",
    readTime: 7,
  },
  {
    id: 3,
    title: "Sustainable Practices in Resin Furniture Manufacturing",
    excerpt: "Discover how eco-friendly materials and responsible production methods are shaping the future of resin furniture.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    author: "Emma Thompson",
    date: "April 15, 2025",
    category: "Sustainability",
    readTime: 6,
  },
  {
    id: 4,
    title: "Color Psychology: Choosing the Right Resin Hues for Your Space",
    excerpt: "Understand the emotional impact of color choices in your resin furniture and how to select shades that enhance your living environment.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    author: "Marcus Johnson",
    date: "April 10, 2025",
    category: "Design Tips",
    readTime: 4,
  },
  {
    id: 5,
    title: "Client Spotlight: A Mountain Retreat Transformed",
    excerpt: "See how custom resin tables and countertops brought natural elegance to a rustic mountain home renovation project.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: "Priya Sharma",
    date: "March 29, 2025",
    category: "Case Studies",
    readTime: 8,
  },
  {
    id: 6,
    title: "The History of Resin Art: From Ancient Practices to Modern Furniture",
    excerpt: "Trace the fascinating evolution of resin as an artistic medium through the centuries to today's contemporary furniture designs.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    author: "David Wilson",
    date: "March 22, 2025",
    category: "Education",
    readTime: 10,
  },
];

const categories = [
  "All",
  "Craftsmanship",
  "Care & Maintenance",
  "Sustainability",
  "Design Tips",
  "Case Studies",
  "Education",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category
    const categoryMatch = activeCategory === "All" || post.category === activeCategory;
    
    // Filter by search query
    const queryMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && queryMatch;
  });

  return (
    <Layout>
      <HeroSection
        title="Blog"
        subtitle="Insights, tips, and stories about resin furniture craftsmanship"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png" // Last image
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Stay informed about the latest trends, care tips, and inspiration for resin furniture"
          />
          
          {/* Add contextual image for Blog */}
          <div className="mb-10">
            <img 
              src="/lovable-uploads/8ea13bf5-6e17-4378-aa45-0c419d0dbc73.png" // 6th image for Blog
              alt="Blog Contextual Image"
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-resin-blue" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-resin-blue hover:bg-resin-blue">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Button variant="link" className="text-resin-blue p-0 h-auto font-medium">
                        Read More <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl">No articles found matching your search.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {setActiveCategory("All"); setSearchQuery("");}} 
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Newsletter Section */}
          <div className="mt-16 bg-neutral-color p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest articles, tips, and exclusive offers by subscribing to our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="flex-grow"
                />
                <Button className="bg-resin-blue hover:bg-resin-blue/80">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
