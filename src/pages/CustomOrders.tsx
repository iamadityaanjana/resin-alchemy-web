
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { CustomOrderForm } from "@/components/forms/CustomOrderForm";
import { Separator } from "@/components/ui/separator";
import { OptimizedImage } from "@/components/ui/optimized-image";

const CustomOrders = () => {
  return (
    <Layout>
      {/* Hero Section with updated image */}
      <HeroSection
        title="Custom Orders"
        subtitle="Create your own unique resin furniture piece tailored specifically for your space"
        backgroundImage="/lovable-uploads/4378aba4-5c03-4826-899f-bf9d479d58f0.png" // Updated image
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Create Your Masterpiece</h2>
                <p className="text-gray-600 mb-6">
                  At Resin Alchemy, we specialize in bringing your vision to life through custom-crafted resin furniture. Each piece is meticulously designed to meet your specific requirements and aesthetic preferences.
                </p>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-4">Our Custom Process</h3>
                <ol className="space-y-8">
                  <li className="flex">
                    <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                    <div>
                      <h4 className="font-medium">Initial Consultation</h4>
                      <p className="text-gray-600 text-sm mt-1">Submit your requirements using the form. Our design team will reach out to discuss your vision.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                    <div>
                      <h4 className="font-medium">Design & Proposal</h4>
                      <p className="text-gray-600 text-sm mt-1">We'll create detailed designs and provide a quote based on your specifications.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                    <div>
                      <h4 className="font-medium">Crafting Process</h4>
                      <p className="text-gray-600 text-sm mt-1">Our artisans will handcraft your piece with meticulous attention to detail.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                    <div>
                      <h4 className="font-medium">Delivery & Installation</h4>
                      <p className="text-gray-600 text-sm mt-1">We'll deliver and set up your finished piece in your space.</p>
                    </div>
                  </li>
                </ol>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium mb-2">Have Questions?</h3>
                  <p className="text-gray-600 text-sm">
                    Contact us directly if you need more information before submitting your custom order request.
                  </p>
                  <div className="text-sm text-gray-700">
                    <p><span className="font-medium">Email:</span> resinalchemy1@gmail.com</p>
                    <p><span className="font-medium">Phone:</span> +91 7275928964</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Custom Order Request</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below with your requirements and preferences. Fields marked with * are required.
                </p>
                
                <CustomOrderForm />
                
              </div>
            </div>
          </div>
          
          {/* Inspiration Gallery - Updated with contextual images */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 font-playfair text-center">Inspiration Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OptimizedImage 
                src="/lovable-uploads/af7c5e1e-1e91-487d-9997-07263135a0b2.png"
                alt="River-Inspired Dining Table" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-auto object-cover aspect-square"
              />
              <OptimizedImage 
                src="/lovable-uploads/4378aba4-5c03-4826-899f-bf9d479d58f0.png"
                alt="Golden Geode Table" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-auto object-cover aspect-square"
              />
              <OptimizedImage 
                src="/lovable-uploads/86236631-f0fa-4820-aa2b-363014a7ad0f.png"
                alt="Ocean Blue Coffee Table" 
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomOrders;
