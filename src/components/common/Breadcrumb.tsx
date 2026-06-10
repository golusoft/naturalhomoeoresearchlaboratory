import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-sm", className)}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
              >
                {index === 0 && <Home className="w-3.5 h-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "flex items-center gap-1",
                  isLast ? "text-gray-900 font-medium" : "text-gray-500"
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {index === 0 && <Home className="w-3.5 h-3.5" />}
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: item.href
                ? `${process.env.NEXT_PUBLIC_SITE_URL}${item.href}`
                : undefined,
            })),
          }),
        }}
      />
    </nav>
  );
}
