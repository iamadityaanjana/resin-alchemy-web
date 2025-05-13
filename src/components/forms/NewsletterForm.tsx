
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  handleFormSubmit
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      await handleFormSubmit(values, 'newsletter', () => {
        // Reset form on success
        form.reset();
      });
    } catch (error) {
      console.error("Error submitting newsletter form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-white/80" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          variant="secondary"
          className="bg-white text-gray-800 hover:bg-white/90" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
};
