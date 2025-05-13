
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section with updated image */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or custom design consultations"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png" // Last image
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Add contextual image for Contact */}
          <div className="mb-10 max-w-4xl mx-auto">
            <OptimizedImage 
              src="/lovable-uploads/de6da137-a790-4b37-8359-c385e19bb3ee.png" // 7th image for Contact
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:resinalchemy1@gmail.com" className="text-gray-600 hover:text-[#D4AF37]">resinalchemy1@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+917275928964" className="text-gray-600 hover:text-[#D4AF37]">+91 7275928964</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-[#D4AF37] mt-0.5" />
                    <div>
                      <p className="font-medium">Workshop & Showroom</p>
                      <p className="text-gray-600">Karol Bagh, Delhi, India</p>
                      <p className="text-gray-500 text-sm mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>11:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/resin__alchemy?igsh=MW4wdnNtaGtsY3E2ZA==" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/share/1DREGaXDYh/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://pin.it/VCOnhjwrR" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M2 12c0 5.5 4.5 10 10 10s10 -4.5 10 -10s-4.5 -10 -10 -10s-10 4.5 -10 10" />
                        <path d="M9 15l3 -3l3 3" />
                        <path d="M12 9l0 6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Have a question about our products or services? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <ContactForm />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
