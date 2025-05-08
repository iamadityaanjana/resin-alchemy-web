
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Upload, FileCheck, BarChart3, Truck, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  productType: z.string().min(1, { message: "Please select a product type." }),
  quantity: z.string().min(1, { message: "Please enter a quantity." }),
  dimensions: z.string().optional(),
  specifications: z.string().optional(),
  deadline: z.string().optional(),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BulkOrders = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      productType: "",
      quantity: "",
      dimensions: "",
      specifications: "",
      deadline: "",
      comments: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    toast.success("Your bulk order enquiry has been submitted! We'll contact you soon.");
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <HeroSection
        title="Bulk Orders"
        subtitle="Special pricing for commercial spaces and large projects"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading 
            title="Bulk Order Benefits" 
            subtitle="Discover the advantages of placing a bulk order with Resin Alchemy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-resin-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Volume Pricing</h3>
              <p className="text-gray-600">
                Enjoy significant discounts based on order quantity, with tiered pricing structures for larger projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-resin-gold rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every piece undergoes rigorous quality control to ensure consistency across your entire order.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-resin-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Streamlined Logistics</h3>
              <p className="text-gray-600">
                Coordinated production and delivery schedules to align with your project timeline and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-playfair">Perfect for Commercial Projects</h2>
              <p className="text-gray-600 mb-6">
                Our bulk order service is ideal for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-resin-blue text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="ml-3">Hotels and resorts requiring matching furniture sets</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-resin-blue text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="ml-3">Restaurants and cafés looking for distinctive dining tables</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-resin-blue text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="ml-3">Office spaces requiring coordinated workspace furniture</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-resin-blue text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="ml-3">Property developers furnishing multiple residential units</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-resin-blue text-white flex items-center justify-center text-sm">
                    ✓
                  </div>
                  <span className="ml-3">Interior designers working on large-scale projects</span>
                </li>
              </ul>
              
              <div className="mt-10 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-resin-gold mr-3" />
                  <h3 className="text-lg font-semibold">Typical Timeline</h3>
                </div>
                <p className="mt-3 text-gray-600">
                  Lead times for bulk orders typically range from 4-8 weeks, depending on the scope of the project. We will confirm delivery timelines after reviewing your order.
                </p>
              </div>
              
              <div className="mt-6">
                <Button 
                  onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
                  className="bg-[#25D366] hover:bg-[#25D366]/80 mt-4"
                >
                  Discuss Your Project on WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Bulk Order Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 font-playfair">Bulk Order Enquiry</h2>
              <p className="text-gray-600 mb-6">
                Looking to place a bulk order for resin furniture? Whether you're furnishing a commercial space or collaborating on a large project, we're happy to accommodate. Please fill out the form below, and we'll be in touch with pricing and lead times for bulk orders.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="productType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Type(s)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select product type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="coffee-table">Coffee Table</SelectItem>
                              <SelectItem value="dining-table">Dining Table</SelectItem>
                              <SelectItem value="desk">Desk</SelectItem>
                              <SelectItem value="shelving">Shelving Unit</SelectItem>
                              <SelectItem value="side-table">Side Table</SelectItem>
                              <SelectItem value="custom">Custom Furniture</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Pieces Required</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" placeholder="Enter the quantity" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size/Dimensions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide dimensions or sizes required for the order" 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="specifications"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Specifications or Requirements (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Include any specific design preferences or customizations" 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Deadline (Optional)</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="border border-dashed border-gray-300 rounded-md p-6">
                    <div className="flex items-center justify-center flex-col">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <h3 className="font-medium">Upload Reference Files</h3>
                      <p className="text-sm text-gray-500 text-center mt-1">
                        Attach any project briefs or design files (Max. 5 files)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Comments (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Add any additional requests or comments about your bulk order" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between items-center pt-2">
                    <Button 
                      type="submit" 
                      className="bg-resin-blue hover:bg-resin-blue/80"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin mr-2">◌</span>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Submit Bulk Order Enquiry
                        </span>
                      )}
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => window.open('https://wa.me/message/S5YOTMXSYWR7N1', '_blank')}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BulkOrders;
