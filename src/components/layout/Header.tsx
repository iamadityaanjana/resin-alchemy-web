
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { OptimizedImage } from "@/components/ui/optimized-image";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Gallery", 
    href: "/gallery",
    submenu: [
      { name: "Rectangle Resin Tables", href: "/gallery?category=rectangle-tables" },
      { name: "Coffee Tables", href: "/gallery?category=coffee-tables" },
      { name: "Dining & Outdoor Sets", href: "/gallery?category=dining-sets" },
      { name: "Bar Tables", href: "/gallery?category=bar-tables" },
      { name: "Workspace Tables", href: "/gallery?category=workspace-tables" },
      { name: "Kitchen Slabs & Units", href: "/gallery?category=kitchen-units" },
      { name: "Resin Wall Art", href: "/gallery?category=wall-art" }
    ]
  },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "Bulk Orders", href: "/bulk-orders" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check scroll position on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname, location.search]);
  
  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "w-full fixed top-0 z-50 transition-all duration-300", 
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <OptimizedImage 
            src="/lovable-uploads/20607f1b-013a-4136-bf31-600a8dec7249.png" 
            alt="Resin Alchemy Logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="ml-2 text-xl font-playfair font-semibold text-[#0d3c54]">
            Resin Alchemy
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <>
                  <button 
                    onClick={() => toggleSubmenu(link.name)}
                    className={cn(
                      "px-3 py-2 flex items-center text-sm font-medium transition-colors",
                      location.pathname === link.href ? "text-[#D4AF37]" :  "text-[#8e7b7b] hover:text-[#888d8e]"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div 
                    className={cn(
                      "absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all",
                      activeSubmenu === link.name ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    )}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.href} 
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === link.href ? "text-[#D4AF37]" : "text-[#8e7b7b] hover:text-[#888d8e]"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <QrCode className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Scan for Catalogue</h4>
                  <p className="text-sm text-muted-foreground">
                    Scan this QR code to download our complete catalogue
                  </p>
                </div>
                <div className="flex justify-center">
                  <OptimizedImage 
                    src="/lovable-uploads/6c124be9-407a-4b86-81b7-457bbd44ea4f.png" 
                    alt="Catalogue QR" 
                    className="max-w-[180px]"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button 
            variant="default" 
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/80"
            onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
          >
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu - Fixed positioning to ensure it stays visible */}
      <div className={cn(
        "fixed inset-x-0 top-[60px] bg-white transform transition-transform duration-300 overflow-y-auto lg:hidden z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
      style={{ 
        maxHeight: "calc(100vh - 60px)",
        overflowY: "auto"
      }}>
        <div className="px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button 
                      onClick={() => toggleSubmenu(link.name)}
                      className="w-full flex justify-between items-center py-2 text-lg font-medium text-[#333333]"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform",
                        activeSubmenu === link.name ? "rotate-180" : ""
                      )} />
                    </button>
                    <div className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all duration-200",
                      activeSubmenu === link.name ? "max-h-96 mt-2" : "max-h-0"
                    )}>
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block py-1 text-gray-600"
                          onClick={closeMobileMenu}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={link.href} 
                    className={cn(
                      "block py-2 text-lg font-medium",
                      location.pathname === link.href ? "text-[#D4AF37]" : "text-[#333333]"
                    )}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <Button 
              className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/80"
              onClick={() => {
                window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank');
                closeMobileMenu();
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
