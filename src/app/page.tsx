import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { ManufacturingExcellence } from "@/components/home/ManufacturingExcellence";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CertificationBadges } from "@/components/home/CertificationBadges";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BusinessCTA } from "@/components/home/BusinessCTA";
import { BlogPreview } from "@/components/home/BlogPreview";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Natural Homeo Research Laboratory | Homeopathic Medicine Manufacturer India",
  description:
    "Trusted homeopathic medicine manufacturer and distributor in India. GMP certified, research-driven quality medicines. 500+ products, 25+ states, 1000+ dealers. Distributors welcome.",
  keywords: [
    "homeopathic medicine manufacturer India",
    "homeopathic distributor",
    "natural homeo research laboratory",
    "GMP certified homeopathy",
    "mother tincture manufacturer Bihar",
  ],
  openGraph: {
    title: "Natural Homeo Research Laboratory | Homeopathic Medicine Manufacturer",
    description: "Research-driven homeopathic medicines. GMP certified manufacturer.",
    url: SITE_CONFIG.url,
    images: [{ url: `${SITE_CONFIG.url}/images/og-home.jpg` }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <FeaturedCategories />
      <FeaturedProducts />
      <ManufacturingExcellence />
      <CertificationBadges />
      <TestimonialsSection />
      <BlogPreview />
      <FaqSection />
      <BusinessCTA />
    </>
  );
}
