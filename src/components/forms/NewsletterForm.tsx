
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate email
      const validEmail = emailSchema.parse(email);
      
      // Send to Supabase
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: validEmail
        });
      
      if (error) {
        console.error("Error subscribing to newsletter:", error);
        if (error.code === '23505') {
          toast.info("You're already subscribed to our newsletter!");
        } else {
          toast.error("Failed to subscribe. Please try again later.");
        }
        return;
      }
      
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Please enter a valid email address");
      } else {
        console.error("Newsletter submission error:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleNewsletterSubmit} className="flex">
      <Input 
        type="email" 
        placeholder="Your email address" 
        className="rounded-r-none bg-white/10 border-white/20 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <Button 
        type="submit" 
        className="rounded-l-none bg-[#D4AF37] hover:bg-[#D4AF37]/80"
        disabled={isSubmitting}
      >
        <Send size={16} />
      </Button>
    </form>
  );
}
