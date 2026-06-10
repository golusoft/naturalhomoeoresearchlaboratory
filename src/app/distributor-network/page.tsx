import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Distributor Network - Natural Homeo Research Laboratory",
  description: "Find NHRL distributors and dealers near you. Pan-India distribution network covering 25+ states.",
};

const stateData = [
  { state: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"], dealers: 120 },
  { state: "Jharkhand", cities: ["Ranchi", "Dhanbad", "Jamshedpur", "Bokaro"], dealers: 80 },
  { state: "Uttar Pradesh", cities: ["Lucknow", "Varanasi", "Agra", "Kanpur", "Allahabad"], dealers: 150 },
  { state: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Siliguri"], dealers: 90 },
  { state: "Delhi", cities: ["New Delhi", "Noida", "Gurgaon", "Faridabad"], dealers: 60 },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior"], dealers: 70 },
];

export default function DistributorNetworkPage() {
  return (
    <>
      <PageHero
        title="Distributor Network"
        subtitle="Our pan-India distribution network ensures NHRL medicines are available across 25+ states through 1000+ dealers and distributors."
        tag="Distribution"
        breadcrumbs={[{ label: "Distributor Network" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stateData.map((item) => (
              <div key={item.state} className="feature-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading">{item.state}</h3>
                    <div className="badge-primary text-xs">{item.dealers}+ Dealers</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.cities.map((city) => (
                    <span key={city} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-light rounded-3xl p-8 border border-primary/10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-3">Want to Become a Distributor?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">If we don't have a distributor in your area yet, this is your opportunity to establish an exclusive territory.</p>
            <a href="/become-distributor" className="btn-primary">Apply for Distributorship</a>
          </div>
        </div>
      </section>
    </>
  );
}
