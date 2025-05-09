
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";

const bulkOrderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  product_type: z.string().optional(),
  quantity: z.number().optional(),
  dimensions: z.string().optional(),
  design_ideas: z.string().optional(),
  additional_comments: z.string().optional()
});

type BulkOrderFormData = z.infer<typeof bulkOrderSchema>;

export function BulkOrderForm() {
  const [formData, setFormData] = useState<BulkOrderFormData>({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    product_type: '',
    quantity: undefined,
    dimensions: '',
    design_ideas: '',
    additional_comments: ''
  });
  
  const [projectDeadline, setProjectDeadline] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'quantity') {
      const numValue = value ? parseInt(value, 10) : undefined;
      setFormData(prev => ({ ...prev, [name]: numValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
      const validData = bulkOrderSchema.parse(formData);
      
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
      
      // Include file info and project deadline in the submission
      const submissionData = {
        ...validData,
        project_deadline: projectDeadline ? format(projectDeadline, 'yyyy-MM-dd') : null,
        files_info: filesInfo.length > 0 ? filesInfo : null
      };
      
      // Submit to Supabase
      const { error } = await supabase
        .from('bulk_orders')
        .insert([submissionData]);
      
      if (error) {
        console.error("Error submitting bulk order:", error);
        toast.error("Something went wrong. Please try again later.");
        return;
      }
      
      toast.success("Your bulk order request has been submitted successfully!");
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        product_type: '',
        quantity: undefined,
        dimensions: '',
        design_ideas: '',
        additional_comments: ''
      });
      setProjectDeadline(undefined);
      setFiles(null);
      
      // Reset file input
      const fileInput = document.getElementById('bulk-file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        error.errors.forEach(err => {
          toast.error(err.message);
        });
      } else {
        console.error("Bulk order form error:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const productTypes = [
    "Coffee Tables",
    "Dining Tables",
    "Kitchen Countertops",
    "Bar Tables",
    "Conference Tables",
    "Desks",
    "Wall Art",
    "Custom Design"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Contact Name *</label>
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
          <label htmlFor="company_name" className="text-sm font-medium">Company Name</label>
          <Input
            id="company_name"
            name="company_name"
            placeholder="Company name (if applicable)"
            value={formData.company_name || ''}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        
        <div className="space-y-2">
          <label htmlFor="quantity" className="text-sm font-medium">Quantity</label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Number of items needed"
            value={formData.quantity || ''}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="dimensions" className="text-sm font-medium">Dimensions</label>
          <Input
            id="dimensions"
            name="dimensions"
            placeholder="Approximate dimensions needed"
            value={formData.dimensions || ''}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="project_deadline" className="text-sm font-medium">Project Deadline</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !projectDeadline && "text-muted-foreground"
                )}
                disabled={isSubmitting}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {projectDeadline ? format(projectDeadline, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={projectDeadline}
                onSelect={setProjectDeadline}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="design_ideas" className="text-sm font-medium">Design Requirements</label>
        <Textarea
          id="design_ideas"
          name="design_ideas"
          placeholder="Describe your design requirements and ideas..."
          value={formData.design_ideas || ''}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="bulk-file-upload" className="text-sm font-medium">Upload Reference Images or Documents</label>
        <Input
          id="bulk-file-upload"
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
        <p className="text-xs text-gray-500">You can upload multiple reference files (optional)</p>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="additional_comments" className="text-sm font-medium">Additional Comments</label>
        <Textarea
          id="additional_comments"
          name="additional_comments"
          placeholder="Any additional information or requirements for your bulk order..."
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
        {isSubmitting ? "Submitting..." : "Submit Bulk Order Request"}
      </Button>
    </form>
  );
}
