
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
  FormLabel,
  FormMessage,
  handleFormSubmit
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  dimensions: z.string().min(2, {
    message: "Please provide approximate dimensions.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  timeline: z.string({
    required_error: "Please select a timeline.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  attachDesign: z.boolean().optional(),
  inspiration: z.string().optional(),
});

export const CustomOrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      dimensions: "",
      budget: "",
      timeline: "",
      description: "",
      attachDesign: false,
      inspiration: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      await handleFormSubmit(values, 'custom-order', () => {
        // Reset form on success
        form.reset();
      });
    } catch (error) {
      console.error("Error submitting custom order form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (234) 567-8901" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-medium">Project Details</h3>
          
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="coffee-table">Coffee Table</SelectItem>
                    <SelectItem value="dining-table">Dining Table</SelectItem>
                    <SelectItem value="conference-table">Conference Table</SelectItem>
                    <SelectItem value="desk">Desk</SelectItem>
                    <SelectItem value="kitchen-unit">Kitchen Unit/Countertop</SelectItem>
                    <SelectItem value="wall-art">Wall Art</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="dimensions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Approximate Dimensions</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g., 60in x 36in (L x W) or as detailed as possible" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Budget Range</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="under-1000" />
                        </FormControl>
                        <FormLabel className="font-normal">Under ₹50,000</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1000-3000" />
                        </FormControl>
                        <FormLabel className="font-normal">₹50,000 - ₹1,00,000</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="3000-5000" />
                        </FormControl>
                        <FormLabel className="font-normal">₹1,00,000 - ₹2,00,000</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="5000-plus" />
                        </FormControl>
                        <FormLabel className="font-normal">₹2,00,000+</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Desired Timeline</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="asap" />
                        </FormControl>
                        <FormLabel className="font-normal">As soon as possible</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="1-3-months" />
                        </FormControl>
                        <FormLabel className="font-normal">Within 1-3 months</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="3-6-months" />
                        </FormControl>
                        <FormLabel className="font-normal">3-6 months</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="flexible" />
                        </FormControl>
                        <FormLabel className="font-normal">Flexible</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe your project, including any specific colors, styles, or features you'd like." 
                    className="resize-none min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="attachDesign"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I would like to upload design ideas later</FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="inspiration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inspiration URLs (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Links to Pinterest boards, Instagram posts, etc." 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-white" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Custom Order Request"}
        </Button>
      </form>
    </Form>
  );
};
