"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingCart, Eye, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

// Mock featured products (will come from WordPress API)
const featuredProducts = [
  {
    id: 1,
    name: "Arnica Montana 30C",
    slug: "arnica-montana-30c",
    category: "Dilutions",
    shortDescription: "For bruises, injuries, muscle soreness and shock",
    mrp: 85,
    image: null,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    packSize: "30ml",
  },
  {
    id: 2,
    name: "Ashwagandha Q",
    slug: "ashwagandha-q",
    category: "Mother Tinctures",
    shortDescription: "Adaptogen for stress, fatigue and vitality",
    mrp: 120,
    image: null,
    rating: 4.9,
    reviews: 98,
    badge: "Top Rated",
    packSize: "30ml",
  },
  {
    id: 3,
    name: "Bio Combination No. 5",
    slug: "bio-combination-5",
    category: "Bio Combinations",
    shortDescription: "For cough and bronchitis",
    mrp: 75,
    image: null,
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
    packSize: "25g",
  },
  {
    id: 4,
    name: "NHRL Hair Growth Oil",
    slug: "nhrl-hair-growth-oil",
    category: "Hair Care",
    shortDescription: "Natural homeopathic hair oil for growth and strength",
    mrp: 195,
    image: null,
    rating: 4.6,
    reviews: 87,
    badge: "New",
    packSize: "100ml",
  },
  {
    id: 5,
    name: "Calcarea Carbonica 200C",
    slug: "calcarea-carbonica-200c",
    category: "Dilutions",
    shortDescription: "Constitutional remedy for metabolism and bone health",
    mrp: 90,
    image: null,
    rating: 4.8,
    reviews: 73,
    badge: null,
    packSize: "30ml",
  },
  {
    id: 6,
    name: "Immunoboost Syrup",
    slug: "immunoboost-syrup",
    category: "Syrups",
    shortDescription: "Herbal-homeopathic immunity booster for all ages",
    mrp: 150,
    image: null,
    rating: 4.7,
    reviews: 211,
    badge: "Featured",
    packSize: "200ml",
  },
];

export function FeaturedProducts() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Featured products"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="section-tag">Featured Products</div>
            <h2 className="section-title mt-4">
              Our Best{" "}
              <span className="gradient-text">Homeopathic Medicines</span>
            </h2>
            <p className="section-subtitle mt-3">
              Premium quality medicines trusted by doctors and patients across India
            </p>
          </div>
          <Link
            href="/products"
            className="btn-secondary flex-shrink-0 self-start md:self-auto"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {/* Placeholder product image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary/40"
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

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.badge && (
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold text-white rounded-full shadow-sm ${
                        product.badge === "Bestseller"
                          ? "bg-orange-500"
                          : product.badge === "Top Rated"
                          ? "bg-yellow-500"
                          : product.badge === "New"
                          ? "bg-green-500"
                          : "bg-primary"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Quick actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    aria-label="View product"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <a
                    href={getWhatsAppLink(
                      SITE_CONFIG.contact.whatsapp,
                      `I'm interested in ${product.name}. Please share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
                    aria-label="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Category */}
                <div className="badge-primary text-xs mb-2">{product.category}</div>

                {/* Name */}
                <h3 className="font-bold text-gray-900 font-heading mb-1.5 line-clamp-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">MRP</div>
                    <div className="text-lg font-bold text-primary-700">
                      ₹{product.mrp}
                      <span className="text-xs font-normal text-gray-400 ml-1">
                        / {product.packSize}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-3 py-2 text-xs font-semibold text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                    <a
                      href={getWhatsAppLink(
                        SITE_CONFIG.contact.whatsapp,
                        `I want to order ${product.name} (${product.packSize}). Please share availability and pricing.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#25D366] text-white rounded-xl hover:bg-[#22c55e] transition-colors"
                      aria-label="Order on WhatsApp"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link href="/products" className="btn-primary">
            View Complete Product Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
