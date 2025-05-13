
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Instagram, Play } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Sample reels data
const reels = [
  {
    id: 1,
    title: "Creating a Blue Ocean Resin Table",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    likes: 2456,
    views: "15.5K",
  },
  {
    id: 2,
    title: "Behind the Scenes: Gold Flake Dining Table",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    likes: 1872,
    views: "12.3K",
  },
  {
    id: 3,
    title: "Resin Pouring Technique: Advanced Patterns",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    likes: 3204,
    views: "21.7K",
  },
  {
    id: 4,
    title: "From Wood to Masterpiece: Full Process",
    thumbnail: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    likes: 5641,
    views: "32.9K",
  },
  {
    id: 5,
    title: "Custom Kitchen Island Creation",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    likes: 1895,
    views: "14.2K",
  },
  {
    id: 6,
    title: "Metallic Resin Effects Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    likes: 2187,
    views: "18.6K",
  },
];

const Reels = () => {
  return (
    <Layout>
      <HeroSection
        title="Resin Alchemy Reels"
        subtitle="Watch our craftsmanship in action through our latest Instagram reels"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading 
            title="Popular Reels" 
            subtitle="Get a behind-the-scenes look at our creative process and craftsmanship"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <div key={reel.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative group">
                  <OptimizedImage
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-resin-blue ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 font-playfair">{reel.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>❤️ {reel.likes}</span>
                    <span>👁️ {reel.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-[#E1306C] hover:bg-[#E1306C]/80"
              onClick={() => window.open('https://www.instagram.com/resin__alchemy?igsh=MW4wdnNtaGtsY3E2ZA==', '_blank')}
            >
              <Instagram className="mr-2 h-4 w-4" />
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-neutral-color">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Share Your Resin Alchemy</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Tag us @resin__alchemy and use #ResinAlchemy on your posts to be featured on our page and website.
          </p>
          <Button 
            className="bg-resin-gold hover:bg-resin-gold/80"
            onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
          >
            Contact Us for Collaborations
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Reels;
