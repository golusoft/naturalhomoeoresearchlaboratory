import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy - Natural Homeo Research Laboratory",
  description: "Privacy policy of Natural Homeo Research Laboratory.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        tag="Legal"
        breadcrumbs={[{ label: "Privacy Policy" }]}
        size="sm"
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or apply for distributorship. This may include your name, email address, phone number, and business details.</p>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, process applications, send newsletters (with consent), improve our services, and comply with legal obligations.</p>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting business.</p>
            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2>5. Cookies</h2>
            <p>We use cookies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>
            <h2>6. Contact Us</h2>
            <p>For privacy-related questions, contact us at {SITE_CONFIG.contact.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
