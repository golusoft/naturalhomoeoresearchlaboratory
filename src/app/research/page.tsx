import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { FlaskConical, BookOpen, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Development - Natural Homeo Research Laboratory",
  description: "NHRL's research-driven approach to homeopathic medicine development. Clinical research, formulation development, and quality innovation.",
};

const researchAreas = [
  {
    icon: Microscope,
    title: "Formulation Research",
    description: "Developing new homeopathic formulations through systematic research and clinical validation.",
    points: ["Novel combination formulas", "Stability optimization", "Bioavailability enhancement", "Synergistic blends"],
  },
  {
    icon: BookOpen,
    title: "Clinical Studies",
    description: "Evidence-based clinical research validating the efficacy of our homeopathic medicines.",
    points: ["Disease-specific studies", "Patient outcome tracking", "Comparative effectiveness", "Safety profiling"],
  },
  {
    icon: FlaskConical,
    title: "Quality Innovation",
    description: "Continuous improvement in manufacturing and testing methodologies.",
    points: ["Advanced analytical methods", "Process optimization", "Contamination prevention", "Shelf-life extension"],
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research & Development"
        subtitle="Science-backed homeopathic medicine development through rigorous research, clinical validation, and continuous quality innovation."
        tag="Our Research"
        breadcrumbs={[{ label: "Research" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto w-fit">Research Focus</div>
            <h2 className="section-title mt-4">Innovation at the <span className="gradient-text">Core</span></h2>
            <p className="section-subtitle mx-auto mt-4 text-center">
              Our research team works continuously to develop better, more effective homeopathic solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="feature-card">
                  <div className="w-14 h-14 bg-gradient-brand rounded-2xl flex items-center justify-center mb-5 shadow-brand">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">{area.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-brand rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Our Commitment to Science
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We invest significantly in research to ensure our products are safe, effective,
              and scientifically validated. Every formula is backed by evidence.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
