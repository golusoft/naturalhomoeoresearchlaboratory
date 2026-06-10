import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ManufacturingContent } from "@/components/manufacturing/ManufacturingContent";

export const metadata: Metadata = {
  title: "Manufacturing Facility - Natural Homeo Research Laboratory",
  description:
    "Tour our state-of-the-art GMP certified homeopathic medicine manufacturing facility. Modern machinery, quality control, and AYUSH compliant production.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Excellence"
        subtitle="State-of-the-art GMP certified facility producing world-class homeopathic medicines with modern technology and strict quality protocols."
        tag="Our Facility"
        breadcrumbs={[{ label: "Manufacturing" }]}
      />
      <ManufacturingContent />
    </>
  );
}
