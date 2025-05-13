
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";

const TermsConditions = () => {
  return (
    <Layout>
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading 
            title="Terms and Conditions" 
            subtitle="Last Updated: May 8, 2025"
          />
          
          <div className="prose prose-lg max-w-none">
            <h2>1. General</h2>
            <p>1.1. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.</p>
            <p>1.2. These terms apply to all visitors, customers, and others who access or use our services.</p>
            
            <h2>2. Products</h2>
            <p>2.1. All products are custom-made to order, and the designs are subject to the customer's specifications.</p>
            <p>2.2. Due to the unique nature of custom resin products, slight variations in colour, texture, and finish may occur. These variations are not considered defects.</p>
            <p>2.3. We use high-quality, sustainably sourced materials. However, the availability of specific materials may vary.</p>
            
            <h2>3. Orders</h2>
            <p>3.1. Orders are confirmed only upon receipt of full or agreed-upon partial payment.</p>
            <p>3.2. Once an order is placed, changes can only be made within 24 hours. After this period, changes may not be possible or may incur additional charges.</p>
            <p>3.3. Bulk orders or special requests must be communicated in advance, and the lead time for such orders will be determined on a case-by-case basis.</p>
            
            <h2>4. Pricing</h2>
            <p>4.1. Prices for custom pieces vary based on design complexity, size, and materials used. Quotes will be provided after the design is finalised.</p>
            <p>4.2. Any additional costs, such as for custom designs, expedited shipping, or special materials, will be communicated before order confirmation.</p>
            
            <h2>5. Payment Terms</h2>
            <p>5.1. Payment methods accepted include UPI, credit/debit cards, bank transfers, and other methods as available on our website.</p>
            <p>5.2. For custom orders, a deposit is required at the time of order confirmation, with the balance due before shipping.</p>
            
            <h2>6. Shipping and Delivery</h2>
            <p>6.1. Delivery timelines will be provided at the time of order confirmation, depending on the complexity of the order and shipping destination.</p>
            <p>6.2. We are not responsible for delays caused by shipping carriers or customs clearance.</p>
            <p>6.3. Shipping costs will be calculated based on the size, weight, and destination of the order.</p>
            
            <h2>7. Returns and Refunds</h2>
            <p>7.1. Due to the custom nature of our products, all sales are final. We do not accept returns or offer refunds unless the product is defective or damaged upon arrival.</p>
            <p>7.2. In the case of damage during shipping, you must notify us within 48 hours of receiving the product with photographic evidence.</p>
            <p>7.3. If a product is deemed defective or damaged, we will offer a repair, replacement, or refund at our discretion.</p>
            
            <h2>8. Warranty and Maintenance</h2>
            <p>8.1. We provide a 1-year warranty on all resin furniture against manufacturing defects. This does not cover wear and tear, misuse, or damage caused by improper care.</p>
            <p>8.2. Maintenance guidelines will be provided with your order. Failure to follow these guidelines may void the warranty.</p>
            
            <h2>9. Intellectual Property</h2>
            <p>9.1. All designs, images, and content on our website are the intellectual property of Resin Alchemy and may not be used without our written permission.</p>
            
            <h2>10. Liability</h2>
            <p>10.1. We are not liable for any indirect, incidental, or consequential damages arising from the use of our products.</p>
            <p>10.2. Our liability is limited to the purchase price of the product.</p>
            
            <h2>11. Governing Law</h2>
            <p>11.1. These terms and conditions are governed by and construed in accordance with the laws of Indian Jurisdiction.</p>
            
            <h2>12. Changes to Terms</h2>
            <p>12.1. We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on our website.</p>
            
            <h2>13. Contact Information</h2>
            <p>13.1. If you have any questions or concerns regarding these terms, please contact us at +91 7275928964.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
