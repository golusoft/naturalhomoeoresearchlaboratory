import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us - Natural Homeo Research Laboratory",
  description:
    "Get in touch with Natural Homeo Research Laboratory. Contact us for product inquiries, distributor inquiries, dealer registration, or any other business queries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="We're here to help. Reach out to us for product inquiries, business opportunities, or any questions."
        tag="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 h-64 md:h-80 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-2">Our Location</div>
          <div className="font-semibold text-gray-700">{SITE_CONFIG.address.full}</div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-primary text-sm font-medium hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
