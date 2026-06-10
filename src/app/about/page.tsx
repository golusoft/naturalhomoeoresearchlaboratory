import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us - Natural Homeo Research Laboratory",
  description:
    "Learn about Natural Homeo Research Laboratory - our history, mission, vision, and the leadership team behind India's trusted homeopathic medicine manufacturer.",
  openGraph: {
    title: "About Natural Homeo Research Laboratory",
    description: "15+ years of excellence in homeopathic medicine manufacturing.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Natural Homeo Research Laboratory"
        subtitle="15+ years of research-driven excellence in homeopathic medicine manufacturing and distribution across India."
        tag="About Us"
        breadcrumbs={[{ label: "About Us" }]}
      />
      <AboutContent />
    </>
  );
}
