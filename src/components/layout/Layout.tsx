
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className={`sticky top-0 z-50 ${scrolled ? "bg-white shadow-md" : ""}`}>
        <Header />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
