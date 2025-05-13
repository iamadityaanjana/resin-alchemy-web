
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AboutUs = () => {
  return (
    <Layout>
      <HeroSection
        title="About Resin Alchemy"
        subtitle="Where Art Meets Functionality"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png"
      />

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Welcome to Resin Alchemy" 
              subtitle="Where Art Meets Functionality"
            />
            
            <p className="text-lg text-center mb-10">
              At Resin Alchemy, we believe furniture should be more than functional—it should tell a story, evoke emotion, and transform spaces. Our bespoke resin creations blend artistry with practicality to create conversation pieces that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Craftsmanship Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-resin-blue opacity-10"></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-600 mb-6 relative z-10">
                  We aspire to be the leading bespoke resin furniture provider, creating sustainable, unique designs that transform ordinary spaces into extraordinary environments. Every piece we create is a step toward realizing this vision.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Craftsmanship</h2>
                <p className="text-gray-600 relative z-10">
                  Each piece is meticulously hand-crafted by our team of skilled artisans, ensuring that no two creations are ever exactly alike. We combine traditional woodworking techniques with innovative resin applications to create truly one-of-a-kind pieces.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <OptimizedImage 
                src="/lovable-uploads/0ff33cf4-2703-4c3b-8c94-0bbd1a527396.png" 
                alt="Craftsmanship in resin furniture"
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <OptimizedImage 
                src="/lovable-uploads/259375d5-63bb-4c1a-be27-08bf75e2cf58.png" 
                alt="Sustainable materials for resin furniture"
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
            
            <div>
              <div className="glass-card p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-resin-green opacity-10"></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Sustainability</h2>
                <p className="text-gray-600 mb-6 relative z-10">
                  We're committed to eco-friendly practices, using sustainable materials like reclaimed wood and eco-friendly resin. Our production processes minimize waste, and we continuously explore innovative ways to reduce our environmental footprint.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
                <p className="text-gray-600 relative z-10">
                  We believe in co-creation. From initial consultation to final delivery, we involve our clients at every step. This collaborative journey ensures that the final piece not only meets but exceeds expectations, resulting in furniture that truly reflects your personality and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-resin-amber opacity-10"></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Clients</h2>
                <p className="text-gray-600 mb-6 relative z-10">
                  Our clients are visionaries who value rarity and meaning in their surroundings. From homeowners seeking statement pieces to businesses creating memorable environments, we serve those who appreciate the extraordinary.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us?</h2>
                <ul className="text-gray-600 list-disc pl-5 space-y-2 relative z-10">
                  <li>Bespoke designs tailored to your specific needs and space</li>
                  <li>Premium materials and exceptional craftsmanship</li>
                  <li>Sustainable practices and eco-friendly options</li>
                  <li>Personalized service throughout the creation process</li>
                  <li>Limited production ensuring exclusivity of your piece</li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <OptimizedImage 
                src="/lovable-uploads/f8ec4bff-6896-465a-8910-3c3bbbe58654.png" 
                alt="Elegant resin dining table"
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-resin-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Bespoke Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards owning a unique piece of functional art.
          </p>
          <Button 
            asChild
            size="lg"
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-resin-blue"
          >
            <a href="/contact">Contact Us Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
