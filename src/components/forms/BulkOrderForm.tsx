
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  businessType: z.string({
    required_error: "Please select a business type.",
  }),
  projectDescription: z.string().min(10, {
    message: "Project description must be at least 10 characters.",
  }),
  quantity: z.string().min(1, {
    message: "Please enter the quantity.",
  }),
  targetDeliveryDate: z.string().optional(),
  additionalRequirements: z.string().optional(),
});

export const BulkOrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      projectDescription: "",
      quantity: "",
      targetDeliveryDate: "",
      additionalRequirements: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      await handleFormSubmit(values, 'bulk-order', () => {
        // Reset form on success
        form.reset();
      });
    } catch (error) {
      console.error("Error submitting bulk order form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Business Information</h3>
          
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hotel">Hotel/Hospitality</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="corporate">Corporate Office</SelectItem>
                      <SelectItem value="interior-design">Interior Design Firm</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="furniture-reseller">Furniture Reseller</SelectItem>
                      <SelectItem value="event-management">Event Management</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="contact@yourcompany.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (234) 567-8901" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-medium">Order Details</h3>
          
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe the type of furniture you're interested in, including any specific requirements." 
                    className="resize-none min-h-[120px]"
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
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="Number of pieces" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="targetDeliveryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Delivery Date (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="e.g., Q3 2023, July 2023, etc." 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="additionalRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Requirements (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Delivery information, budget constraints, etc." 
                    className="resize-none min-h-[80px]"
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
          {isSubmitting ? "Submitting..." : "Submit Bulk Order Inquiry"}
        </Button>
      </form>
    </Form>
  );
};
