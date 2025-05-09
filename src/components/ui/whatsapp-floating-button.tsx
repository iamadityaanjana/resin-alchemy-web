
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppFloatingButton() {
  return (
    <Button
      onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 shadow-lg"
      size="icon"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
}
