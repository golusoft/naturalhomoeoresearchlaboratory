import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { DistributorContent } from "@/components/distributor/DistributorContent";

export const metadata: Metadata = {
  title: "Become a Distributor - Natural Homeo Research Laboratory",
  description:
    "Join NHRL's pan-India distribution network. Attractive profit margins, marketing support, and comprehensive training. Apply for distributorship today.",
  keywords: [
    "homeopathic medicine distributor",
    "homeopathy distributorship India",
    "become homeopathic distributor",
    "NHRL distributor",
  ],
};

export default function BecomeDistributorPage() {
  return (
    <>
      <PageHero
        title="Become a Distributor"
        subtitle="Join India's growing homeopathic medicine distribution network. Excellent profit margins, full support, and a trusted product range."
        tag="Business Opportunity"
        breadcrumbs={[{ label: "Become Distributor" }]}
      />
      <DistributorContent />
    </>
  );
}
