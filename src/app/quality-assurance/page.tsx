import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Quality Assurance - Natural Homeo Research Laboratory",
  description: "Our comprehensive quality assurance process ensures every homeopathic medicine meets the highest standards.",
};

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        title="Quality Assurance"
        subtitle="Rigorous quality testing at every stage of manufacturing to ensure safe, potent, and effective homeopathic medicines."
        tag="Quality Standards"
        breadcrumbs={[{ label: "Quality Assurance" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "Raw Material Testing", desc: "Every batch of raw material undergoes identity, purity, and microbial testing before approval.", points: ["TLC and HPTLC testing", "Heavy metal analysis", "Microbial limit testing", "Moisture content"] },
              { title: "In-Process Quality Control", desc: "Continuous monitoring during production to ensure consistent potency and quality.", points: ["pH monitoring", "Organoleptic testing", "Refractive index", "Specific gravity"] },
              { title: "Finished Product Testing", desc: "Comprehensive testing of every batch before release to market.", points: ["Stability testing", "Potency verification", "Packaging integrity", "Label compliance"] },
              { title: "Stability Studies", desc: "Long-term stability studies to determine shelf life and storage conditions.", points: ["Real-time stability", "Accelerated stability", "Photostability", "Thermal stress testing"] },
            ].map((item) => (
              <div key={item.title} className="feature-card">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
