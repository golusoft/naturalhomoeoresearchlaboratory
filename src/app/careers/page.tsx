import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { CareersContent } from "@/components/careers/CareersContent";

export const metadata: Metadata = {
  title: "Careers - Join Natural Homeo Research Laboratory",
  description: "Build your career with NHRL. Explore exciting opportunities in pharmaceutical manufacturing, sales, research, and more.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Build a meaningful career in India's growing homeopathic medicine industry. We value talent, innovation, and dedication."
        tag="Careers"
        breadcrumbs={[{ label: "Careers" }]}
      />
      <CareersContent />
    </>
  );
}
