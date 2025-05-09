
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const customOrderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  product_type: z.string().optional(),
  dimensions: z.string().optional(),
  color_preferences: z.string().optional(),
  design_ideas: z.string().optional(),
  additional_comments: z.string().optional()
});

type CustomOrderFormData = z.infer<typeof customOrderSchema>;

export function CustomOrderForm() {
  const [formData, setFormData] = useState<CustomOrderFormData>({
    name: '',
    email: '',
    phone: '',
    product_type: '',
    dimensions: '',
    color_preferences: '',
    design_ideas: '',
    additional_comments: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate the form data
      const validData = customOrderSchema.parse(formData);
      
      // Process files if any
      const filesInfo = [];
      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          filesInfo.push({
            name: file.name,
            size: file.size,
            type: file.type
          });
        }
      }
      
      // Include file info in the submission
      const submissionData = {
        ...validData,
        files_info: filesInfo.length > 0 ? filesInfo : null
      };
      
      // Submit to Supabase - changed to pass a single object instead of an array
      const { error } = await supabase
        .from('custom_orders')
        .insert(submissionData);
      
      if (error) {
        console.error("Error submitting custom order:", error);
        toast.error("Something went wrong. Please try again later.");
        return;
      }
      
      toast.success("Your custom order request has been submitted successfully!");
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        product_type: '',
        dimensions: '',
        color_preferences: '',
        design_ideas: '',
        additional_comments: ''
      });
      setFiles(null);
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        error.errors.forEach(err => {
          toast.error(err.message);
        });
      } else {
        console.error("Custom order form error:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const productTypes = [
    "Coffee Table",
    "Dining Table",
    "Kitchen Countertop",
    "Bar Table",
    "Desk",
    "Wall Art",
    "Other"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name *</label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <Input
            id="phone"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone || ''}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="product_type" className="text-sm font-medium">Product Type</label>
          <Select
            value={formData.product_type || ''}
            onValueChange={(value) => handleSelectChange('product_type', value)}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent>
              {productTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="dimensions" className="text-sm font-medium">Dimensions</label>
        <Input
          id="dimensions"
          name="dimensions"
          placeholder="Approximate dimensions (e.g., 120cm x 80cm x 45cm)"
          value={formData.dimensions || ''}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="color_preferences" className="text-sm font-medium">Color Preferences</label>
        <Input
          id="color_preferences"
          name="color_preferences"
          placeholder="Your color preferences"
          value={formData.color_preferences || ''}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="design_ideas" className="text-sm font-medium">Design Ideas</label>
        <Textarea
          id="design_ideas"
          name="design_ideas"
          placeholder="Share your design ideas or inspirations..."
          value={formData.design_ideas || ''}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="file-upload" className="text-sm font-medium">Upload Reference Images</label>
        <Input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
          disabled={isSubmitting}
          className="file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#D4AF37] file:text-white
                    hover:file:bg-[#D4AF37]/80"
        />
        <p className="text-xs text-gray-500">You can upload multiple reference images (optional)</p>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="additional_comments" className="text-sm font-medium">Additional Comments</label>
        <Textarea
          id="additional_comments"
          name="additional_comments"
          placeholder="Any additional information or requirements..."
          value={formData.additional_comments || ''}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={4}
        />
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Custom Order Request"}
      </Button>
    </form>
  );
}
