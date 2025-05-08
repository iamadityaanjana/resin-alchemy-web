
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  items: FAQItem[];
}

export function FAQCategory({ title, items }: FAQCategoryProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 font-playfair text-resin-blue">{title}</h2>
      <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="px-6 hover:bg-gray-50 text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-0">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function FAQSection() {
  const basicFAQItems = [
    {
      question: "What is resin furniture?",
      answer: "Resin furniture is crafted from durable synthetic resin, designed to mimic the look of natural materials like wood or stone. It's known for its strength, versatility, and suitability for both indoor and outdoor spaces."
    },
    {
      question: "What are the benefits of resin furniture?",
      answer: "Resin furniture offers excellent weather, UV, and moisture resistance. It's lightweight, easy to clean, available in various colors and styles, and requires minimal maintenance compared to traditional wood or metal."
    },
    {
      question: "Is resin furniture suitable for outdoor use?",
      answer: "Yes — resin furniture is perfect for outdoor use, as it resists rain, sun, and humidity without warping, fading, or cracking."
    },
    {
      question: "How do I clean and maintain resin furniture?",
      answer: "Simply wipe it down with a damp cloth and mild soap. Avoid abrasive brushes or harsh chemicals, which could scratch the surface."
    },
    {
      question: "Is resin furniture environmentally friendly?",
      answer: "Many resin products are recyclable, and some are even made from recycled materials, making them a more eco-friendly option."
    },
    {
      question: "Is it resistant to stains and scratches?",
      answer: "Resin resists most stains and scratches, but it's wise to avoid placing sharp objects directly on it and clean spills promptly."
    },
    {
      question: "Are there special care instructions for extreme weather?",
      answer: "While designed for outdoor use, we recommend covering or storing pieces during harsh winters or extreme heat to prolong their lifespan."
    },
  ];

  return (
    <section className="py-16 px-4 bg-neutral-color">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">Frequently Asked Questions</h2>
        <FAQCategory title="About Resin Furniture" items={basicFAQItems} />
        <div className="text-center mt-8">
          <p className="mb-4">Have more questions? Visit our FAQ page for detailed information.</p>
          <a href="/faq" className="inline-flex items-center text-resin-blue hover:text-resin-gold transition-colors font-medium">
            View All FAQs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
