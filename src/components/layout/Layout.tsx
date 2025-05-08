
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
