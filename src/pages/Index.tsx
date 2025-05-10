import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PagePreviewSection } from "@/components/ui/page-preview";
import { FAQSection } from "@/components/ui/expanded-faq";
import { ImageBanner } from "@/components/ui/image-banner";
import { RotatingBanner } from "@/components/ui/rotating-banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define data arrays
const bannerImages = [
  "/lovable-uploads/259375d5-63bb-4c1a-be27-08bf75e2cf58.png",
  "/lovable-uploads/f8ec4bff-6896-465a-8910-3c3bbbe58654.png",
  "/lovable-uploads/a4e3348c-81fa-47b6-a154-0dd88962eb39.png",
  "/lovable-uploads/8acf3a45-a618-431e-a42c-d19485156034.png",
  "/lovable-uploads/28af10e0-deca-4df4-804a-b96d16b5f8fa.png",
  "/lovable-uploads/659610e2-2f31-40bb-a5d6-8d533426f182.png",
  "/lovable-uploads/a0f11d4b-2456-4b53-98a9-0a35db5d8172.png",
  "/lovable-uploads/bc99bb56-5d72-4d99-8d2a-45df1c8346c4.png",
  "/lovable-uploads/47d79c43-7423-4451-8570-e22efd02f8db.png",
  "/lovable-uploads/672400ea-3b8f-415f-9b96-9f9411df920e.png",
  "/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png"
];

const featuredGallery = [
  {
    id: 1,
    title: "Ocean Blue Coffee Table",
    description: "A stunning coffee table with ocean-inspired resin design",
    image: "/lovable-uploads/259375d5-63bb-4c1a-be27-08bf75e2cf58.png",
    category: "Coffee Tables"
  },
  {
    id: 2,
    title: "Golden Geode Dining Table",
    description: "Elegant dining table with geode resin art in gold tones",
    image: "/lovable-uploads/f8ec4bff-6896-465a-8910-3c3bbbe58654.png",
    category: "Dining Tables"
  },
  {
    id: 3,
    title: "Emerald River Console",
    description: "Beautiful console with flowing emerald river design",
    image: "/lovable-uploads/a4e3348c-81fa-47b6-a154-0dd88962eb39.png",
    category: "Console Tables"
  },
  {
    id: 4,
    title: "Cosmic Night Side Table",
    description: "Side table with cosmic night sky design in deep blue and purple",
    image: "/lovable-uploads/8acf3a45-a618-431e-a42c-d19485156034.png",
    category: "Side Tables"
  }
];

const carouselImages = [
  {
    src: "/lovable-uploads/259375d5-63bb-4c1a-be27-08bf75e2cf58.png",
    alt: "Coffee Tables"
  },
  {
    src: "/lovable-uploads/f8ec4bff-6896-465a-8910-3c3bbbe58654.png",
    alt: "Dining Tables"
  },
  {
    src: "/lovable-uploads/a4e3348c-81fa-47b6-a154-0dd88962eb39.png", 
    alt: "Console Tables"
  },
  {
    src: "/lovable-uploads/8acf3a45-a618-431e-a42c-d19485156034.png",
    alt: "Side Tables"
  },
  {
    src: "/lovable-uploads/28af10e0-deca-4df4-804a-b96d16b5f8fa.png",
    alt: "Countertops"
  },
  {
    src: "/lovable-uploads/659610e2-2f31-40bb-a5d6-8d533426f182.png",
    alt: "Wall Art"
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    title: "Interior Designer, Delhi",
    text: "The quality of craftsmanship in the resin tables is unmatched. My clients love the unique designs and the way they transform their spaces."
  },
  {
    name: "Priya Patel",
    title: "Home Owner, Mumbai",
    text: "I ordered a custom dining table, and it's now the centerpiece of my home. The resin work is beautiful and the table is incredibly sturdy."
  },
  {
    name: "Vikram Singh",
    title: "Restaurant Owner, Bangalore",
    text: "We furnished our entire restaurant with resin tables from Resin Alchemy. The tables are not only aesthetically pleasing but also very durable, perfect for heavy use."
  }
];

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Crafted Elegance for Your Space"
        subtitle="Bespoke resin furniture handcrafted to transform your spaces with unique elegance"
        backgroundImage="/lovable-uploads/b7a8cbed-92a4-4709-9b0f-9b83579944ab.png"
        primaryCta={{ text: "Explore Our Collection", href: "/gallery" }}
        secondaryCta={{ text: "Start Your Custom Order", href: "/custom-orders" }}
      />

      {/* Rotating Banner with better positioning for mobile */}
      <RotatingBanner 
        images={bannerImages} 
        interval={5000} 
        height="60vh"
        objectPosition="center 30%" // Improved position to show key content
      />

      {/* Main Content Section */}
      <section className="py-20 px-4 bg-neutral-color">
        <div className="container mx-auto max-w-4xl">
          <ImageBanner 
            imageSrc="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png" 
            alt="Beautiful Resin Furniture" 
            className="mb-10"
            objectPosition="center 30%"
          />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-[#333333]">
              You deserve more than just furniture. You deserve a masterpiece that reflects your unique taste and style.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Tired of seeing the same furniture in every store? Frustrated by the lack of truly unique options? You deserve pieces that are as distinctive as your vision, crafted with care, and designed to last.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Resin Alchemy, we understand your desire for more than just furniture. We create bespoke resin tables that seamlessly blend artistry and functionality, transforming your space into a true reflection of your personality. With years of experience in crafting luxury, custom-made pieces, we are committed to delivering unparalleled quality and sustainability in every creation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-10">
            <h3 className="text-2xl font-bold mb-6 text-center font-playfair">Our Process is Simple:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-resin-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">Consultation</h4>
                <p className="text-gray-600">Share your vision with us, and we'll collaborate to design the perfect piece for your space.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-resin-gold rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">Craftsmanship</h4>
                <p className="text-gray-600">Our skilled artisans bring your design to life using the finest sustainable materials.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-resin-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">Delivery</h4>
                <p className="text-gray-600">Receive your bespoke masterpiece, ready to transform your home.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
              onClick={handleWhatsAppClick}
            >
              Start Your Custom Order
            </Button>
            <Button 
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
              asChild
            >
              <Link to="/gallery">Explore Our Portfolio</Link>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg">
              Imagine walking into your home and being greeted by a piece of furniture that's not just functional, but a true work of art. A piece that sparks conversation, inspires creativity, and elevates the aesthetic of your entire space.
            </p>
            <p className="text-lg font-semibold mt-4">
              Don't settle for ordinary when your space deserves the extraordinary. Don't let your home be just another place to live—let it be a canvas that tells your story.
            </p>
          </div>
        </div>
      </section>

      {/* Preview of Website Pages with updated images */}
      <PagePreviewSection />

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading 
            title="Gallery" 
            subtitle="Discover our most celebrated creations that blend artistry with functionality"
          />
          
          <div className="mb-12 flex justify-center">
            <img 
              src="/lovable-uploads/22f3d297-f4cd-4644-9055-cbcbb559b907.png"
              alt="Gallery"
              className="max-w-full md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGallery.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-resin-blue">{item.category}</span>
                  <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Endless Possibilities Banner - Updated with new dining table image */}
      <section 
        className="relative py-24 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/a16cace1-30a1-4dfa-812f-17845ad55681.png')`, 
          backgroundPosition: "center 40%" 
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">Endless Possibilities</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">From kitchen countertops to statement art pieces, our resin creations are limited only by imagination</p>
          <Button 
            size="lg" 
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
            onClick={handleWhatsAppClick}
          >
            Start Your Custom Project
          </Button>
        </div>
      </section>

      {/* Call to Action Panels */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Orders Panel */}
            <div className="bg-cover bg-center rounded-lg relative overflow-hidden group h-80" 
                 style={{ backgroundImage: `url('/lovable-uploads/23387a9e-efe9-44c2-a089-6d7ec1424cad.png')` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-resin-blue/80 to-resin-blue opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-10">
                <h3 className="text-2xl font-bold mb-4 text-white font-playfair">Custom Orders</h3>
                <p className="mb-6 text-white">Create a one-of-a-kind piece tailored specifically to your space and style preferences.</p>
                <Button 
                  variant="outline" 
                  className="border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#D4AF37]/80"
                  onClick={() => window.location.href = '/custom-orders'}
                >
                  Start Your Custom Order
                </Button>
              </div>
            </div>
            
            {/* Bulk Orders Panel */}
            <div className="bg-cover bg-center rounded-lg relative overflow-hidden group h-80" 
                 style={{ backgroundImage: `url('/lovable-uploads/4f27e518-67de-4d86-bd7f-10dbcb3a381b.png')` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-resin-gold/80 to-resin-gold opacity-90 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-10">
                <h3 className="text-2xl font-bold mb-4 text-white font-playfair">Bulk Orders</h3>
                <p className="mb-6 text-white">Perfect for commercial spaces, hospitality venues, or multi-unit residential projects.</p>
                <Button 
                  variant="outline" 
                  className="border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#D4AF37]/80"
                  onClick={() => window.location.href = '/bulk-orders'}
                >
                  Enquire About Bulk Orders
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Carousel */}
      <section className="py-16 px-4 bg-neutral-color">
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
                <div className="flex items-center justify-start gap-0 text-resin-gold mb-4">
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
                <p className="text-white font-medium">@resin__alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/de6da137-a790-4b37-8359-c385e19bb3ee.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin__alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/ca957c36-de0e-4fea-81a1-d434c507bc2e.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin__alchemy</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg relative group">
              <img 
                src="/lovable-uploads/e8dea159-a899-4ff7-a14f-0cf1f845a746.png" 
                alt="Instagram post" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@resin__alchemy</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild 
              variant="outline" 
              className="group border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <a href="https://www.instagram.com/resin__alchemy?igsh=MW4wdnNtaGtsY3E2ZA==" target="_blank" rel="noopener noreferrer">
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
              <h3 className="text-2xl font-bold mb-4 font-playfair">Download Our Digital Catalogue</h3>
              <p className="text-gray-600">
                Scan the QR code to download our complete catalogue featuring all our collections, material options, and custom design possibilities.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-white p-3 rounded-md shadow-md flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e3b10619-5439-427f-af6b-af27fa880e3b.png" 
                  alt="Catalogue QR Code" 
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add Contact section with image */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/6a54bace-3fbe-4d1c-9fbd-4e646db962a5.png"
                alt="Contact Us"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 font-playfair">Get In Touch</h2>
              <p className="mb-6 text-gray-600">
                Have questions or ready to start your custom order? Contact our team for personalized assistance with your resin furniture needs.
              </p>
              <Button 
                asChild
                className="bg-resin-blue hover:bg-resin-blue/80"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
