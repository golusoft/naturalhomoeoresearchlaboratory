import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathic Distributor Bihar | Natural Homeo Research Laboratory",
  description:
    "NHRL - leading homeopathic medicine distributor in Bihar. Quality medicines delivered across Patna, Gaya, Muzaffarpur, Bhagalpur and all Bihar districts.",
  keywords: [
    "homeopathic distributor Bihar",
    "homeopathic medicine Bihar",
    "homeopathy distributor Patna",
    "NHRL Bihar",
    "homeopathic medicine dealer Bihar",
  ],
};

const biharCities = [
  "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Arrah",
  "Begusarai", "Katihar", "Munger", "Purnia", "Saharsa", "Sitamarhi",
  "Hajipur", "Chapra", "Bettiah", "Motihari", "Samastipur", "Bihar Sharif",
];

export default function HomeopathicDistributorBiharPage() {
  return (
    <main>
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="badge-primary mb-4 bg-white/20 text-white border-white/30">Bihar Distribution</div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Homeopathic Medicine Distributor in Bihar
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Natural Homeo Research Laboratory — headquartered in Patna, Bihar.
              Serving all 38 districts of Bihar with quality homeopathic medicines.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/become-distributor" className="btn-primary bg-white text-primary">Become Distributor in Bihar</Link>
              <Link href="/contact" className="text-white border-2 border-white/40 rounded-xl px-6 py-3 hover:bg-white/10 transition-colors font-semibold">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
            NHRL's Bihar Distribution Network
          </h2>
          <p className="text-gray-600 mb-6">
            As a Bihar-based homeopathic medicine manufacturer, NHRL has an extensive
            distribution network across the state. We supply to pharmacies, medical stores,
            hospitals, and homeopathic clinics across all major cities and districts in Bihar.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Largest homeopathic distributor in Bihar",
              "Same-day delivery in Patna",
              "2-3 day delivery across Bihar",
              "100+ active dealers in Bihar",
              "Dedicated Bihar sales team",
              "Competitive distributor margins",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Cities We Serve in Bihar
            </h3>
            <div className="flex flex-wrap gap-2">
              {biharCities.map((city) => (
                <span key={city} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-light rounded-2xl p-6 border border-primary/10">
            <h3 className="font-bold text-gray-900 font-heading mb-2">Become Our Bihar Distributor</h3>
            <p className="text-gray-600 text-sm mb-4">
              Excellent opportunity to distribute quality homeopathic medicines in Bihar's growing healthcare market.
            </p>
            <Link href="/become-distributor" className="btn-primary inline-flex">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
