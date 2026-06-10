import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions - Natural Homeo Research Laboratory",
  description: "Terms and conditions for using Natural Homeo Research Laboratory website.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before using our website." tag="Legal" breadcrumbs={[{ label: "Terms" }]} size="sm" />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms and Conditions.</p>
            <h2>2. Medical Disclaimer</h2>
            <p>The information on this website is for educational purposes only and is not intended as medical advice. Consult a qualified healthcare professional before starting any homeopathic treatment.</p>
            <h2>3. Intellectual Property</h2>
            <p>All content on this website including text, graphics, logos, and images is the property of Natural Homeo Research Laboratory and is protected by copyright laws.</p>
            <h2>4. Product Information</h2>
            <p>Product information, prices, and availability are subject to change without notice. Always verify with our sales team for current pricing.</p>
            <h2>5. Limitation of Liability</h2>
            <p>Natural Homeo Research Laboratory shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our products.</p>
            <h2>6. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Patna, Bihar.</p>
          </div>
        </div>
      </section>
    </>
  );
}
