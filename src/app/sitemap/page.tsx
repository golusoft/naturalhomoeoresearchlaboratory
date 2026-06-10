import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sitemap - Natural Homeo Research Laboratory",
  description: "Complete sitemap of Natural Homeo Research Laboratory website.",
  robots: { index: false },
};

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      ...PRODUCT_CATEGORIES.map((c) => ({ label: c.name, href: `/products?category=${c.slug}` })),
    ],
  },
  {
    title: "About NHRL",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Research", href: "/research" },
      { label: "Quality Assurance", href: "/quality-assurance" },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Distributor Network", href: "/distributor-network" },
      { label: "Become a Distributor", href: "/become-distributor" },
      { label: "Become a Dealer", href: "/become-dealer" },
      { label: "Franchise Opportunity", href: "/franchise" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main>
      <div className="bg-gradient-hero py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-white font-heading">Sitemap</h1>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-gray-900 font-heading text-lg mb-4 pb-2 border-b border-primary/20">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors text-sm">
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
