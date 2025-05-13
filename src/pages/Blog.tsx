
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, getCategories } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const categories = getCategories();

  useEffect(() => {
    // Filter posts based on activeCategory and searchQuery
    let posts = [...blogPosts];
    
    // Filter by category
    if (activeCategory !== "All") {
      posts = posts.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    setFilteredPosts(posts);
  }, [activeCategory, searchQuery]);

  return (
    <Layout>
      <Helmet>
        <title>Blog - Insights on Resin Furniture Design and Craftsmanship</title>
        <meta name="description" content="Explore our blog for the latest insights, tips, and stories about resin furniture craftsmanship, design trends, and sustainable luxury." />
        <meta name="keywords" content="resin furniture blog, custom resin tables, resin art, furniture design, sustainable luxury, interior design tips" />
      </Helmet>

      <HeroSection
        title="Blog"
        subtitle="Insights, tips, and stories about resin furniture craftsmanship"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png" // Last image
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Stay informed about the latest trends, care tips, and inspiration for resin furniture"
          />
          
          {/* Add contextual image for Blog */}
          <div className="mb-8">
            <OptimizedImage 
              src="/lovable-uploads/8ea13bf5-6e17-4378-aa45-0c419d0dbc73.png" // 6th image for Blog
              alt="Blog Contextual Image"
              className="w-full h-auto max-h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
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
          
          {/* Blog Posts Grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-44 overflow-hidden">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-resin-blue hover:bg-resin-blue">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 font-playfair">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Button variant="link" className="text-resin-blue p-0 h-auto font-medium" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
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
          
          {/* Show pagination if there are many posts */}
          {filteredPosts.length > 9 && (
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="default" size="sm" className="bg-resin-blue">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          )}
          
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
