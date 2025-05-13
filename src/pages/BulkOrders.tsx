
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { BulkOrderForm } from "@/components/forms/BulkOrderForm";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BulkOrders = () => {
  return (
    <Layout>
      {/* Hero Section with last image */}
      <HeroSection
        title="Bulk Orders"
        subtitle="Premium resin furniture solutions for commercial spaces, hospitality venues, and residential projects"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Bulk Order Information</h2>
                <p className="text-gray-600 mb-6">
                  Resin Alchemy offers premium bulk order services for businesses, designers, and large-scale residential projects. Our team works closely with you to deliver consistent quality and timely execution.
                </p>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Restaurants & Cafés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hotels & Resorts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Corporate Offices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Interior Design Firms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Property Developers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Multi-Unit Residential Projects</span>
                  </li>
                </ul>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-medium mb-4">Benefits of Bulk Orders</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cost-effective pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Consistent quality across all pieces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Customized to your project's needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated project manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexible production timeline</span>
                  </li>
                </ul>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium mb-2">Still Have Questions?</h3>
                  <p className="text-gray-600 text-sm">
                    For immediate assistance with your bulk order, contact us directly:
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
                <h2 className="text-2xl font-bold mb-6 font-playfair">Bulk Order Inquiry</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to start your bulk order process. Our team will review your requirements and contact you with a detailed quote.
                </p>
                
                <BulkOrderForm />
                
              </div>
            </div>
          </div>
          
          {/* Case Studies - Updated with workspace tables images */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 font-playfair text-center">Our Bulk Order Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
              We've had the pleasure of working with numerous businesses to create custom resin furniture for their spaces. Here are some of our featured projects:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <OptimizedImage 
                    src="/lovable-uploads/b58de193-7363-4890-8b6f-d53a6dfb83f4.png"
                    alt="Corporate Minimalist Consoles" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Corporate Office Consoles</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Created 15 matching minimalist console desks with black resin detail for a corporate headquarters in Delhi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Corporate</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Console Desks</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <OptimizedImage 
                    src="/lovable-uploads/29383c99-5232-46df-9434-46c62cb50d50.png"
                    alt="Executive Desks" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Executive Office Suite</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Designed and produced 12 premium executive desks with distinctive black resin pattern for a financial firm in Mumbai.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Executive</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Office Desks</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <OptimizedImage 
                    src="/lovable-uploads/3ff7d57d-733e-435d-a396-6097c5bb7f89.png"
                    alt="Designer Workspace Tables" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Creative Agency Workspaces</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Supplied 20 teal resin river desks for a creative agency's new office in Bangalore.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Creative</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Designer Desks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BulkOrders;
