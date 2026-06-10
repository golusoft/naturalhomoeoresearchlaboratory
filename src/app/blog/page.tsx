import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog - Health Tips & Homeopathy Research | Natural Homeo Research Laboratory",
  description: "Latest homeopathy research, health tips, disease awareness, and wellness articles from Natural Homeo Research Laboratory's experts.",
  keywords: ["homeopathy blog", "health tips", "homeopathic research", "wellness articles"],
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Health Insights & Research"
        subtitle="Expert articles on homeopathy, health tips, disease awareness, and wellness from our team of professionals."
        tag="Blog"
        breadcrumbs={[{ label: "Blog" }]}
      />
      <BlogList />
    </>
  );
}
