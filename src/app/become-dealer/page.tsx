import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { DealerForm } from "@/components/dealer/DealerForm";

export const metadata: Metadata = {
  title: "Become a Dealer - Natural Homeo Research Laboratory",
  description: "Register as a dealer for NHRL homeopathic medicines. Low investment, high returns. Apply for dealership today.",
};

export default function BecomeDealerPage() {
  return (
    <>
      <PageHero
        title="Become a Dealer"
        subtitle="Register your pharmacy or medical store as an authorized dealer for NHRL homeopathic medicines."
        tag="Dealer Registration"
        breadcrumbs={[{ label: "Become Dealer" }]}
      />
      <DealerForm />
    </>
  );
}
