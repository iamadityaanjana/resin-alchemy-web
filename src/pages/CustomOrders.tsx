
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
import { Send, Upload } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  productType: z.string().min(1, { message: "Please select a product type." }),
  dimensions: z.string().min(2, { message: "Please provide dimensions." }),
  colorPreferences: z.string().optional(),
  designIdeas: z.string().optional(),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CustomOrders = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productType: "",
      dimensions: "",
      colorPreferences: "",
      designIdeas: "",
      comments: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    toast.success("Your custom order request has been submitted! We'll contact you soon.");
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <HeroSection
        title="Custom Orders"
        subtitle="Create a unique piece of resin furniture tailored to your specifications"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Process Information */}
            <div>
              <SectionHeading 
                title="Our Custom Design Process" 
                subtitle="From concept to creation, we'll work with you every step of the way"
                align="left"
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-resin-blue text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Consultation</h3>
                    <p className="text-gray-600">
                      Share your vision with us, and we'll collaborate to design the perfect piece for your space.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-resin-gold text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Design & Approval</h3>
                    <p className="text-gray-600">
                      Our designers will create detailed sketches and mockups for your approval before we begin crafting.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-resin-blue text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
                    <p className="text-gray-600">
                      Our skilled artisans bring your design to life using the finest sustainable materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-resin-gold text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-2">Delivery</h3>
                    <p className="text-gray-600">
                      Receive your bespoke masterpiece, ready to transform your home.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Pricing Information</h3>
                <p className="text-gray-600 mb-4">
                  Custom orders start from ₹25,000. Exact pricing depends on size, materials, and design complexity. We'll provide a detailed quote after reviewing your submission.
                </p>
                <h3 className="text-lg font-semibold mb-2">Lead Time</h3>
                <p className="text-gray-600">
                  Custom pieces typically take 3-4 weeks to complete. Delivery estimates will be provided once your order is confirmed.
                </p>
              </div>
            </div>
            
            {/* Custom Order Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 font-playfair">Create Your Custom Resin Furniture</h2>
              <p className="text-gray-600 mb-6">
                Design a one-of-a-kind piece that fits your space and style perfectly. Please fill out the form below with your custom order details, and we'll get in touch to bring your vision to life!
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
                      name="productType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Type</FormLabel>
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size/Dimensions</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter specific dimensions (e.g., 48in x 24in)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="colorPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color/Resin Preferences (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter any specific color or resin preferences (e.g., deep blue with gold accents)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="designIdeas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Ideas (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your design ideas or preferences" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="border border-dashed border-gray-300 rounded-md p-6">
                    <div className="flex items-center justify-center flex-col">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <h3 className="font-medium">Upload Reference Images or Videos</h3>
                      <p className="text-sm text-gray-500 text-center mt-1">
                        Attach any images or videos to help us understand your vision (Max. 5 files)
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
                            placeholder="Add any additional information or requests" 
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
                          Submit Your Custom Request
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
      
      {/* Gallery Preview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Explore Our Previous Custom Projects</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Get inspired by browsing through our gallery of custom pieces we've created for other clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg bg-white shadow-md">
                <img 
                  src={`https://images.unsplash.com/photo-148631233821${item}-ce68d2c6f44d`} 
                  alt={`Custom project ${item}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          <Button asChild className="mt-10 bg-resin-gold hover:bg-resin-gold/80">
            <a href="/gallery">View Full Gallery</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CustomOrders;
