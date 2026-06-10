"use client";

import React from "react";
import Link from "next/link";
import { Star, Eye, MessageCircle, ShoppingCart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink, cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  mrp: number;
  packSize: string;
  availability: string;
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

export function ProductCard({ product, view = "grid" }: ProductCardProps) {
  const badge = product.isNew
    ? { label: "New", color: "bg-green-500" }
    : product.isBestseller
    ? { label: "Bestseller", color: "bg-orange-500" }
    : product.isFeatured
    ? { label: "Featured", color: "bg-primary" }
    : null;

  if (view === "list") {
    return (
      <div className="flex gap-4 bg-white rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium transition-shadow p-4 group">
        {/* Image */}
        <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-primary/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              {badge && (
                <span className={`inline-block px-2 py-0.5 text-xs font-medium text-white rounded mb-1 ${badge.color}`}>
                  {badge.label}
                </span>
              )}
              <h3 className="font-bold text-gray-900 font-heading">
                <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                  {product.name}
                </Link>
              </h3>
              <div className="badge-primary text-xs mt-1">{product.category}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs text-gray-400">MRP</div>
              <div className="text-lg font-bold text-primary-700">₹{product.mrp}</div>
              <div className="text-xs text-gray-400">{product.packSize}</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-2">{product.shortDescription}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
                />
              ))}
              <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
            </div>
            <Link href={`/products/${product.slug}`} className="text-sm text-primary hover:underline">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-10 h-10 text-primary/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
        </div>

        {badge && (
          <div className="absolute top-2.5 left-2.5">
            <span className={`px-2.5 py-1 text-xs font-semibold text-white rounded-full ${badge.color}`}>
              {badge.label}
            </span>
          </div>
        )}

        {/* Quick actions */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            href={`/products/${product.slug}`}
            className="w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center text-gray-600 hover:text-primary"
            aria-label="View"
          >
            <Eye className="w-3.5 h-3.5" />
          </Link>
          <a
            href={getWhatsAppLink(
              SITE_CONFIG.contact.whatsapp,
              `I'm interested in ${product.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center text-gray-600 hover:text-green-600"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="badge-primary text-xs mb-2">{product.category}</div>
        <h3 className="font-bold text-gray-900 font-heading text-sm mb-1 line-clamp-1">
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-gray-500 mb-2.5 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn("w-3 h-3", i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">MRP</div>
            <div className="text-base font-bold text-primary-700">
              ₹{product.mrp}
              <span className="text-xs font-normal text-gray-400 ml-1">/{product.packSize}</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <Link
              href={`/products/${product.slug}`}
              className="px-3 py-1.5 text-xs font-semibold text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-colors"
            >
              Details
            </Link>
            <a
              href={getWhatsAppLink(
                SITE_CONFIG.contact.whatsapp,
                `Order: ${product.name} (${product.packSize}) - ₹${product.mrp}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#25D366] text-white rounded-xl hover:bg-[#22c55e] transition-colors"
              aria-label="Order"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
