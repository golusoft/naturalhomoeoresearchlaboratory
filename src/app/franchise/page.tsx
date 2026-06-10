import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import Link from "next/link";
import { CheckCircle, TrendingUp, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunity - Natural Homeo Research Laboratory",
  description: "Own an exclusive NHRL franchise outlet. Complete support, brand identity, and training provided.",
};

export default function FranchisePage() {
  return (
    <>
      <PageHero
        title="Franchise Opportunity"
        subtitle="Own an exclusive branded homeopathic outlet with full support from Natural Homeo Research Laboratory."
        tag="Franchise"
        breadcrumbs={[{ label: "Franchise" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="section-tag">Franchise Model</div>
              <h2 className="section-title mt-4">Start Your Own <span className="gradient-text">NHRL Outlet</span></h2>
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                The NHRL franchise model allows entrepreneurs to establish an exclusive
                homeopathic medicine outlet under our trusted brand with complete backend support.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Exclusive territory rights",
                  "Complete brand identity setup",
                  "Product supply at distributor prices",
                  "Training and certification",
                  "Marketing and promotional support",
                  "Digital presence included",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Inquire About Franchise</Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: TrendingUp, title: "Investment", value: "₹5 - 15 Lakhs", desc: "Depending on location and outlet size" },
                { icon: MapPin, title: "Space Required", value: "200-500 sq.ft.", desc: "Retail space in commercial area" },
                { icon: Phone, title: "ROI Timeline", value: "12-18 Months", desc: "Expected return on investment" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="feature-card flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{item.title}</div>
                      <div className="font-bold text-primary-700 font-heading">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
