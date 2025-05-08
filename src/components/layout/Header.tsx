
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, ChevronDown, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
      { name: "Kitchen Slabs & Units", href: "/gallery?category=kitchen-units" }
    ]
  },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "Bulk Orders", href: "/bulk-orders" },
  { name: "About Us", href: "/about-us" },
  { name: "Reels", href: "/reels" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);
  
  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header className={cn(
      "w-full fixed top-0 z-50 transition-all duration-300", 
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/20607f1b-013a-4136-bf31-600a8dec7249.png" 
            alt="Resin Alchemy Logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="ml-2 text-xl font-playfair font-semibold text-[#0A4D68]">
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
                      location.pathname === link.href ? "text-[#D4AF37]" : "text-[#333333] hover:text-[#0A4D68]"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div 
                    className={cn(
                      "absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all",
                      activeSubmenu === link.name ? "opacity-100 visible" : "opacity-0 invisible"
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
                    location.pathname === link.href ? "text-[#D4AF37]" : "text-[#333333] hover:text-[#0A4D68]"
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
                  <img 
                    src="/lovable-uploads/20607f1b-013a-4136-bf31-600a8dec7249.png" 
                    alt="Catalogue QR" 
                    className="max-w-[180px]"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button 
            variant="default" 
            className="bg-[#0A4D68] hover:bg-[#0A4D68]/80"
            onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
          >
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )} style={{ top: '60px' }}>
        <div className="px-4 py-6 h-full overflow-y-auto">
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
                      <ChevronDown className="h-5 w-5" />
                    </button>
                    {activeSubmenu === link.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block py-1 text-gray-600"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.href} 
                    className={cn(
                      "block py-2 text-lg font-medium",
                      location.pathname === link.href ? "text-[#D4AF37]" : "text-[#333333]"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <Button variant="outline" className="w-full">
              <Search className="h-5 w-5 mr-2" /> Search
            </Button>
            <Button variant="outline" className="w-full">
              <ShoppingCart className="h-5 w-5 mr-2" /> Cart
            </Button>
            <Button 
              className="w-full bg-[#0A4D68] hover:bg-[#0A4D68]/80"
              onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
