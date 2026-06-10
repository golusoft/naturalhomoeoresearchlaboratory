import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/common/PageHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Homeopathic Medicine Products - Natural Homeo Research Laboratory",
  description:
    "Browse 500+ homeopathic medicine products from Natural Homeo Research Laboratory. Mother tinctures, dilutions, bio combinations, syrups, drops, and more.",
  keywords: [
    "homeopathic medicines India",
    "mother tincture",
    "homeopathic dilutions",
    "bio combination medicines",
    "homeopathic syrups",
    "homeopathic drops",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Homeopathic Medicine Products"
        subtitle="500+ research-driven homeopathic medicines across all major categories. Quality assured, GMP certified."
        tag="Product Catalog"
        breadcrumbs={[{ label: "Products" }]}
      />
      <Suspense fallback={<div className="container-custom py-16 text-center">Loading products...</div>}>
        <ProductCatalog />
      </Suspense>
    </>
  );
}
