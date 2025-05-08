
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-resin-brown text-white">
      <div className="container mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/20607f1b-013a-4136-bf31-600a8dec7249.png" 
                alt="Resin Alchemy Logo" 
                className="h-12 w-auto object-contain bg-white rounded-full p-1"
              />
              <span className="ml-2 text-xl font-playfair font-semibold">
                Resin Alchemy
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Where Art Meets Functionality. Handcrafted custom resin furniture that transforms spaces with unique elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-resin-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-resin-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-resin-blue transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-resin-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/custom-orders" className="text-gray-300 hover:text-white transition-colors">Custom Orders</Link>
              </li>
              <li>
                <Link to="/bulk-orders" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-playfair">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium text-white">Email:</span> info@resinalchemy.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-300">
                <span className="font-medium text-white">Address:</span> 123 Artisan Way, Design District, CA 90210
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-playfair">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for exclusive offers, design inspiration, and updates.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="rounded-r-none bg-white/10 border-white/20 text-white"
              />
              <Button type="submit" className="rounded-l-none bg-resin-blue hover:bg-resin-blue/80">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Resin Alchemy. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
