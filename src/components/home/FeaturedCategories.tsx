"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, TestTube, Pill, FlaskConical, Sparkles, Heart, Wind } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  droplets: Droplets,
  "test-tube": TestTube,
  atom: FlaskConical,
  bottle: FlaskConical,
  droplet: Droplets,
  sparkles: Sparkles,
  heart: Heart,
  tube: Wind,
  pill: Pill,
  star: Sparkles,
};

const colorSchemes: Record<string, { bg: string; icon: string; badge: string }> = {
  teal: { bg: "bg-teal-50 hover:bg-teal-100", icon: "text-teal-600 bg-teal-100", badge: "bg-teal-600" },
  blue: { bg: "bg-blue-50 hover:bg-blue-100", icon: "text-blue-600 bg-blue-100", badge: "bg-blue-600" },
  purple: { bg: "bg-purple-50 hover:bg-purple-100", icon: "text-purple-600 bg-purple-100", badge: "bg-purple-600" },
  orange: { bg: "bg-orange-50 hover:bg-orange-100", icon: "text-orange-600 bg-orange-100", badge: "bg-orange-600" },
  cyan: { bg: "bg-cyan-50 hover:bg-cyan-100", icon: "text-cyan-600 bg-cyan-100", badge: "bg-cyan-600" },
  amber: { bg: "bg-amber-50 hover:bg-amber-100", icon: "text-amber-600 bg-amber-100", badge: "bg-amber-600" },
  pink: { bg: "bg-pink-50 hover:bg-pink-100", icon: "text-pink-600 bg-pink-100", badge: "bg-pink-600" },
  green: { bg: "bg-green-50 hover:bg-green-100", icon: "text-green-600 bg-green-100", badge: "bg-green-600" },
  indigo: { bg: "bg-indigo-50 hover:bg-indigo-100", icon: "text-indigo-600 bg-indigo-100", badge: "bg-indigo-600" },
  yellow: { bg: "bg-yellow-50 hover:bg-yellow-100", icon: "text-yellow-600 bg-yellow-100", badge: "bg-yellow-600" },
};

export function FeaturedCategories() {
  const displayCategories = PRODUCT_CATEGORIES.slice(0, 8);

  return (
    <section
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
      aria-label="Product categories"
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
            <div className="section-tag">Product Range</div>
            <h2 className="section-title mt-4">
              Our Product{" "}
              <span className="gradient-text">Categories</span>
            </h2>
            <p className="section-subtitle mt-3">
              Comprehensive range of homeopathic medicines covering all therapeutic needs
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

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {displayCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Droplets;
            const colors = colorSchemes[category.color] || colorSchemes.teal;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link
                  href={`/products?category=${category.slug}`}
                  className={`block p-5 rounded-2xl border border-transparent transition-all duration-300 group ${colors.bg} hover:shadow-medium hover:-translate-y-1`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${colors.icon}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 text-sm md:text-base font-heading mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 hidden sm:block">
                    {category.description}
                  </p>

                  {/* Product count */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium text-white px-2 py-0.5 rounded-full ${colors.badge}`}
                    >
                      {category.count}+ Products
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-4">
            Explore our complete range of{" "}
            <strong className="text-primary">500+ homeopathic products</strong>
          </p>
          <Link href="/products" className="btn-primary">
            Browse Full Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
