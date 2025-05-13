
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    category: "Orders & Customization",
    questions: [
      {
        question: "How do I place an order for a custom piece?",
        answer: "You can place a custom order by filling out our Custom Orders form, sending us an email, or visiting our showroom. We'll schedule a consultation to discuss your vision, requirements, and preferences in detail."
      },
      {
        question: "How long does it take to create a custom piece?",
        answer: "Production times vary based on complexity, size, and our current workload. On average, custom pieces take 4-6 weeks from design approval to completion. Larger or more complex projects may require 8-12 weeks."
      },
      {
        question: "Can I provide my own design ideas?",
        answer: "Absolutely! We encourage clients to share inspiration images, sketches, or specific color preferences. Our design team will work with you to refine these ideas into a beautiful, functional piece."
      },
      {
        question: "Do you offer design consultation services?",
        answer: "Yes, we provide comprehensive design consultation services. Our experts can help you choose the right design, materials, colors, and dimensions to perfectly match your space and aesthetic preferences."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide. International shipping costs and timelines vary by destination. Please contact us for a shipping quote to your specific location."
      },
      {
        question: "How are items packaged for shipping?",
        answer: "All our pieces are carefully packaged in custom-built crates with multiple layers of protection to ensure they arrive in perfect condition. Our packaging is designed to withstand the rigors of transportation."
      },
      {
        question: "Do you offer white glove delivery service?",
        answer: "Yes, we offer white glove delivery service for an additional fee. This includes delivery to your room of choice, unpacking, installation, and removal of all packaging materials."
      },
      {
        question: "What if my item arrives damaged?",
        answer: "In the rare event that your item arrives damaged, please document the damage with photographs and contact us within 48 hours. We'll work quickly to resolve the issue through repair or replacement."
      }
    ]
  },
  {
    category: "Care & Maintenance",
    questions: [
      {
        question: "How do I clean and maintain my resin furniture?",
        answer: "Clean your resin furniture with a soft, damp cloth and mild soap. Avoid abrasive cleaners, solvents, and excessive moisture. For regular maintenance, dust with a soft cloth and use a specialized furniture polish every 3-6 months."
      },
      {
        question: "Is resin furniture heat resistant?",
        answer: "While our resin has moderate heat resistance, we recommend using coasters or trivets for hot items. Prolonged exposure to high temperatures can potentially damage the resin surface."
      },
      {
        question: "Can resin furniture be used outdoors?",
        answer: "We offer specially formulated outdoor resin furniture that can withstand weather conditions. Standard indoor pieces should not be placed outdoors as they may deteriorate from UV exposure and moisture."
      },
      {
        question: "How do I remove scratches from resin surfaces?",
        answer: "For minor scratches, we provide a care kit with specific instructions. For deeper scratches, please contact us for professional restoration options."
      }
    ]
  },
  {
    category: "Warranty & Returns",
    questions: [
      {
        question: "What warranty do you offer?",
        answer: "All our pieces come with a one-year warranty against manufacturing defects. This covers structural integrity issues but does not include damage from improper use, accidents, or natural wear and tear."
      },
      {
        question: "Can I return my custom furniture?",
        answer: "Since all our pieces are custom-made to your specifications, we do not accept returns unless there is a manufacturing defect. We work diligently during the design phase to ensure you'll be completely satisfied with the final product."
      },
      {
        question: "Do you offer repairs for damaged items?",
        answer: "Yes, we offer repair services for both in-warranty and out-of-warranty items. Repair costs for out-of-warranty items depend on the extent of damage and required work."
      }
    ]
  },
  {
    category: "Bulk Orders",
    questions: [
      {
        question: "Do you offer discounts for bulk orders?",
        answer: "Yes, we offer tiered discounts based on order quantity. Please contact our bulk orders department for a customized quote based on your specific requirements."
      },
      {
        question: "What's the minimum quantity for a bulk order?",
        answer: "Our minimum quantity for bulk pricing starts at 5 identical or similar items. For larger commercial projects, we can accommodate orders of any size."
      },
      {
        question: "Can you create custom designs for commercial spaces?",
        answer: "Absolutely! We specialize in creating custom furniture for restaurants, hotels, offices, and other commercial spaces. Our team can work with your interior designers to create pieces that align with your brand aesthetic."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <Layout>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products, processes, and services"
        backgroundImage="/lovable-uploads/ca8b310e-1143-40ef-a0e2-ba0cb1813938.png" // Last image
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="How Can We Help You?" 
            subtitle="Browse our comprehensive FAQ section or contact us if you can't find what you're looking for"
          />
          
          <div className="max-w-3xl mx-auto mb-12">
            {/* Add contextual image for FAQ page */}
            <OptimizedImage 
              src="/lovable-uploads/f6668249-2887-4fb2-b9aa-7e1672a95583.png"
              alt="FAQ Contextual Image"
              className="w-full h-auto rounded-lg shadow-lg mb-10"
            />
            
            {faqItems.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${index}-${itemIndex}`}>
                      <AccordionTrigger className="px-6 hover:bg-gray-50">{item.question}</AccordionTrigger>
                      <AccordionContent className="px-6 pt-0">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us directly and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="bg-resin-blue hover:bg-resin-blue/80"
            >
              <a href="/contact">Contact Us</a>
            </Button>
            <Button 
              asChild
              variant="outline"
            >
              <a href="mailto:info@resinalchemy.com">Email Support</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
