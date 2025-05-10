
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { BulkOrderForm } from "@/components/forms/BulkOrderForm";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const BulkOrders = () => {
  return (
    <Layout>
      {/* Hero Section without QR code */}
      <HeroSection
        title="Bulk Orders"
        subtitle="Premium resin furniture solutions for commercial spaces, hospitality venues, and residential projects"
        backgroundImage="/lovable-uploads/b07860e4-dc0e-4ce8-8685-08e8989f11b6.png"
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
          
          {/* Case Studies - Updated with new images */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 font-playfair text-center">Our Bulk Order Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
              We've had the pleasure of working with numerous businesses to create custom resin furniture for their spaces. Here are some of our featured projects:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/0ff33cf4-2703-4c3b-8c94-0bbd1a527396.png" 
                    alt="Luxury Hotel Project" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Luxury Hotel Project</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Created 25 custom dining tables for a five-star hotel in Mumbai, featuring ocean-inspired blue resin designs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Hospitality</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Dining Tables</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/f6668249-2887-4fb2-b9aa-7e1672a95583.png" 
                    alt="Corporate Office" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Corporate Office</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Designed and produced 12 conference tables and 30 desk units for a tech company in Bangalore.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Corporate</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Conference Tables</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/8ea13bf5-6e17-4378-aa45-0c419d0dbc73.png" 
                    alt="Residential Complex" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Residential Complex</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Supplied 40 matching coffee tables for a luxury apartment complex in Delhi NCR.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Residential</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">Coffee Tables</span>
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
