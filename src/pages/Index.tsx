
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredProducts = [
  {
    id: 1,
    title: "Azure Ocean Coffee Table",
    description: "A stunning piece featuring deep blue resin waves reminiscent of ocean depths.",
    image: "/lovable-uploads/3b797268-7f27-4b5a-b801-bc1e74c3531d.png",
    category: "Coffee Tables",
    href: "/gallery/azure-ocean-coffee-table",
  },
  {
    id: 2,
    title: "Black Elegance Dining Table",
    description: "Sophisticated dining table with black resin inlays creating a bold statement piece.",
    image: "/lovable-uploads/f9f7b58e-6521-43a1-8887-b01a01caadf0.png",
    category: "Dining Tables",
    href: "/gallery/black-elegance-dining-table",
  },
  {
    id: 3,
    title: "Turquoise L-Shaped Kitchen Counter",
    description: "Custom kitchen counter with vibrant turquoise resin that brings life to any kitchen space.",
    image: "/lovable-uploads/ca5df8d8-243a-4d09-a016-7e4d701b246d.png",
    category: "Kitchen Units",
    href: "/gallery/turquoise-kitchen-counter",
  },
  {
    id: 4,
    title: "Live Edge River Coffee Table",
    description: "Natural wood with flowing turquoise resin creating a river-like effect through the center.",
    image: "/lovable-uploads/70b91f96-438e-4e5e-9bc4-0599f1d248ed.png",
    category: "Coffee Tables",
    href: "/gallery/river-coffee-table",
  },
];

const testimonials = [
  {
    text: "The coffee table I commissioned has become the centerpiece of my living room. The craftsmanship is impeccable and the colors are even more vibrant in person.",
    name: "Sarah Johnson",
    title: "Interior Designer"
  },
  {
    text: "We ordered custom dining tables for our restaurant, and they've completely transformed the space. Our customers constantly ask about them. Worth every penny.",
    name: "Michael Chen",
    title: "Restaurant Owner"
  },
  {
    text: "From the consultation to delivery, the entire process was smooth and professional. The final product exceeded all expectations. Truly a work of art.",
    name: "Emma Thompson",
    title: "Homeowner"
  }
];

const carouselImages = [
  {
    src: "/lovable-uploads/3bd16592-ae95-45f8-85da-a60b35e9a0fc.png",
    alt: "Modern resin coffee table"
  },
  {
    src: "/lovable-uploads/8b964770-b7ba-48c0-9ab9-d6dc666dc145.png",
    alt: "Elegant resin dining table"
  },
  {
    src: "/lovable-uploads/b5aee2ad-1a45-40bf-8e18-8ecfc2a6e2bc.png",
    alt: "Contemporary resin table design"
  },
  {
    src: "/lovable-uploads/26314bbf-c88a-411c-9f99-766b5c4b5244.png",
    alt: "Unique resin furniture piece"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Crafted Elegance for Your Space"
        subtitle="Bespoke resin furniture handcrafted to transform your spaces with unique elegance"
        backgroundImage="/lovable-uploads/c5f2f8d3-bdbc-4b42-a0b4-db92455e837f.png"
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

      {/* Endless Possibilities Banner */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: `url('/lovable-uploads/a867d262-7e37-4d50-9024-685ebc9b4239.png')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Endless Possibilities</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">From kitchen countertops to statement art pieces, our resin creations are limited only by imagination</p>
          <Button asChild size="lg" className="bg-resin-amber hover:bg-resin-amber/80">
            <a href="/custom-orders">Start Your Custom Project</a>
          </Button>
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

      {/* Product Categories Carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Collection"
            subtitle="Browse through our diverse range of handcrafted resin furniture"
            align="left"
          />
          
          <div className="relative px-10">
            <Carousel>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0" />
              <CarouselNext className="absolute right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Call to Action Panels */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Orders Panel */}
            <div className="bg-cover bg-center rounded-lg relative overflow-hidden group h-80" 
                 style={{ backgroundImage: `url('/lovable-uploads/b079772f-6257-40a4-a0c3-049875c8c287.png')` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-resin-blue/80 to-resin-blue opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Custom Orders</h3>
                <p className="mb-6 text-white">Create a one-of-a-kind piece tailored specifically to your space and style preferences.</p>
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
            <div className="bg-cover bg-center rounded-lg relative overflow-hidden group h-80" 
                 style={{ backgroundImage: `url('/lovable-uploads/fb5ca7f3-3726-49fa-8fa8-f3923761b61d.png')` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-resin-amber/80 to-resin-amber opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Bulk Orders</h3>
                <p className="mb-6 text-white">Perfect for commercial spaces, hospitality venues, or multi-unit residential projects.</p>
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

      {/* Tagline Banner */}
      <section className="py-16 px-4 bg-resin-brown text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">You deserve more than just furniture.<br />You deserve a masterpiece.</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Tired of seeing the same furniture in every store? Our bespoke resin tables seamlessly blend artistry and functionality, 
            transforming your space into a true reflection of your personality.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Hear from our satisfied clients who have transformed their spaces with our resin furniture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-start gap-0 text-yellow-500 mb-4">
                  {'★★★★★'}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <Separator className="my-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Follow Our Journey" 
            subtitle="Get inspired by following us on social media for behind-the-scenes content and latest creations"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/91794f7b-efc7-4767-a4f6-349ed3be5318.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin_alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/de6da137-a790-4b37-8359-c385e19bb3ee.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin_alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/ca957c36-de0e-4fea-81a1-d434c507bc2e.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin_alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/e8dea159-a899-4ff7-a14f-0cf1f845a746.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin_alchemy</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="group">
              <a href="https://instagram.com/resin_alchemy" target="_blank" rel="noopener noreferrer">
                Follow Us on Instagram
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
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
