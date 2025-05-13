
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <HeroSection
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading 
            title="Privacy Policy" 
            subtitle="Last Updated: May 8, 2025"
          />
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>Resin Alchemy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
            <p>Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.</p>
            
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register on our website</li>
              <li>Place an order</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us with inquiries</li>
              <li>Participate in promotions or surveys</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Shipping and billing address</li>
              <li>Payment information</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <p>When you access our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed</li>
              <li>Time spent on pages</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Improve our website, products, and customer service</li>
              <li>Respond to your inquiries</li>
              <li>Send newsletters and marketing communications</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>4. Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist us in operating our website and conducting business (e.g., payment processors, shipping companies)</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties in the event of a business transfer or acquisition</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2>6. Your Choices</h2>
            <p>You have choices regarding the personal information you provide to us:</p>
            <ul>
              <li>You can unsubscribe from our marketing communications at any time</li>
              <li>You can request access to, correction of, or deletion of your personal information</li>
              <li>You can opt-out of cookies through your browser settings</li>
            </ul>
            
            <h2>7. Children's Privacy</h2>
            <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p>Email: resinalchemy1@gmail.com<br />
            Phone: +91 7275928964<br />
            Address: Karol Bagh, Delhi, India</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
