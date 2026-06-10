import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathic Medicine Manufacturer India | Natural Homeo Research Laboratory",
  description:
    "Natural Homeo Research Laboratory - leading homeopathic medicine manufacturer in India. GMP certified, AYUSH approved. 500+ products. Distributors welcome.",
  keywords: [
    "homeopathic medicine manufacturer India",
    "best homeopathic company India",
    "GMP certified homeopathy manufacturer",
    "AYUSH approved homeopathic manufacturer",
  ],
};

export default function HomeopathicManufacturerIndiaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              #1 Homeopathic Medicine Manufacturer in India
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Natural Homeo Research Laboratory — GMP certified, AYUSH approved
              homeopathic medicine manufacturer with 500+ products.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/products" className="btn-primary bg-white text-primary hover:bg-gray-100">View Products</Link>
              <Link href="/become-distributor" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">Become Distributor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">
            Why NHRL is India's Trusted Homeopathic Manufacturer
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Natural Homeo Research Laboratory (NHRL) is a premier homeopathic medicine manufacturing
            company based in Patna, Bihar. With 15+ years of experience, we have established ourselves
            as one of India's most trusted manufacturers of homeopathic medicines.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "GMP Certified Manufacturing Facility",
              "AYUSH & Drug License Compliant",
              "ISO 9001:2015 Quality Management",
              "500+ Homeopathic Products",
              "FSSAI Certified",
              "Pan-India Distribution Network",
              "In-house Quality Control Lab",
              "15+ Years of Manufacturing Excellence",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-primary inline-flex">
            Learn More About NHRL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
