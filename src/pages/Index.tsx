
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    title: "Azure Ocean Coffee Table",
    description: "A stunning piece featuring deep blue resin waves reminiscent of ocean depths.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Coffee Tables",
    href: "/gallery/azure-ocean-coffee-table",
  },
  {
    id: 2,
    title: "Emerald Forest Dining Table",
    description: "8-seater rectangular dining table with emerald resin inlays mimicking a forest stream.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "Dining Tables",
    href: "/gallery/emerald-forest-dining-table",
  },
  {
    id: 3,
    title: "Amber Glow Bar Counter",
    description: "A conversation-starting bar counter with warm amber resin that catches and refracts light.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Bar Furniture",
    href: "/gallery/amber-glow-bar-counter",
  },
  {
    id: 4,
    title: "Desert Sunset Kitchen Island",
    description: "Kitchen island top with gradient resin work inspired by desert sunset hues.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    category: "Kitchen Units",
    href: "/gallery/desert-sunset-kitchen-island",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Where Art Meets Functionality"
        subtitle="Bespoke resin furniture handcrafted to transform your spaces with unique elegance"
        backgroundImage="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        primaryCta={{ text: "Explore Our Collection", href: "/gallery" }}
        secondaryCta={{ text: "Start Your Custom Order", href: "/custom-orders" }}
      />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Discover our most celebrated creations that blend artistry with functionality"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                category={product.category}
                href={product.href}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <a href="/gallery">
                View All Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Crafting Process" 
            subtitle="From concept to creation, witness the journey of your bespoke resin piece"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-resin-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation & Design</h3>
              <p className="text-gray-600">We begin with understanding your vision, space constraints, and aesthetic preferences, before creating detailed design concepts.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-resin-amber rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Material Selection</h3>
              <p className="text-gray-600">Select from premium wood types and exclusive resin colors, with our guidance on combinations that will create stunning results.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-resin-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Artisan Crafting</h3>
              <p className="text-gray-600">Our master craftsmen meticulously create your piece, sending progress updates throughout the 2-4 week production process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Panels */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Orders Panel */}
            <div className="bg-resin-blue text-white p-10 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-resin-blue/80 to-resin-blue opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Custom Orders</h3>
                <p className="mb-6">Create a one-of-a-kind piece tailored specifically to your space and style preferences.</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-resin-blue"
                >
                  <a href="/custom-orders">Start Your Custom Order</a>
                </Button>
              </div>
            </div>
            
            {/* Bulk Orders Panel */}
            <div className="bg-resin-amber text-white p-10 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-resin-amber/80 to-resin-amber opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Bulk Orders</h3>
                <p className="mb-6">Perfect for commercial spaces, hospitality venues, or multi-unit residential projects.</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-resin-amber"
                >
                  <a href="/bulk-orders">Enquire About Bulk Orders</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Hear from our satisfied clients who have transformed their spaces with our resin furniture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-start gap-0 text-yellow-500 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-600 italic mb-4">"The coffee table I commissioned has become the centerpiece of my living room. The craftsmanship is impeccable and the colors are even more vibrant in person."</p>
              <Separator className="my-4" />
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Interior Designer</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-start gap-0 text-yellow-500 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-600 italic mb-4">"We ordered custom dining tables for our restaurant, and they've completely transformed the space. Our customers constantly ask about them. Worth every penny."</p>
              <Separator className="my-4" />
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-gray-500">Restaurant Owner</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-start gap-0 text-yellow-500 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-600 italic mb-4">"From the consultation to delivery, the entire process was smooth and professional. The final product exceeded all expectations. Truly a work of art."</p>
              <Separator className="my-4" />
              <div>
                <p className="font-semibold">Emma Thompson</p>
                <p className="text-sm text-gray-500">Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg p-8">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Download Our Digital Catalogue</h3>
              <p className="text-gray-600">
                Scan the QR code to download our complete catalogue featuring all our collections, material options, and custom design possibilities.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              {/* Replace with actual QR code */}
              <div className="w-40 h-40 bg-white p-3 rounded-md shadow-md flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-gray-500">QR Code Placeholder</p>
                  <p className="text-sm font-medium mt-2">Scan to Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
