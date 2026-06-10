import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { CERTIFICATIONS } from "@/lib/constants";
import { ShieldCheck, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications - Natural Homeo Research Laboratory",
  description: "NHRL holds GMP, ISO 9001:2015, AYUSH, and FSSAI certifications ensuring quality and compliance.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Our Certifications"
        subtitle="Recognized by leading regulatory authorities. Our certifications reflect our commitment to quality, safety, and compliance."
        tag="Certifications"
        breadcrumbs={[{ label: "Certifications" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="feature-card">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div className="badge-primary text-xs mb-2">{cert.name}</div>
                <h3 className="font-bold text-gray-900 font-heading text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{cert.full}</p>
                <div className="text-xs text-gray-400 mb-4">Issued by: {cert.issuer} | Year: {cert.year}</div>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-light rounded-3xl p-8 border border-primary/10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-3">
              Fully Compliant with Indian Regulations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our products comply with the Homoeopathic Pharmacopoeia of India (HPI),
              Drugs & Cosmetics Act 1940, and Ministry of AYUSH guidelines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
