"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  ShieldCheck,
  Truck,
  IndianRupee,
  LayoutGrid,
  Zap,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  "shield-check": ShieldCheck,
  truck: Truck,
  "indian-rupee": IndianRupee,
  grid: LayoutGrid,
  zap: Zap,
};

const colorMap: Record<string, string> = {
  teal: "bg-teal-50 text-teal-600 border-teal-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-green-50 text-green-600 border-green-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  orange: "bg-orange-50 text-orange-600 border-orange-100",
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-label="Why choose us">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto w-fit">Why Choose Us</div>
          <h2 className="section-title mt-4">
            The NHRL{" "}
            <span className="gradient-text">Advantage</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            We combine research, quality manufacturing, and comprehensive distribution
            support to deliver the best homeopathic medicines in India.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            const colorClass =
              colorMap[item.color] || "bg-gray-50 text-gray-600 border-gray-100";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="feature-card group cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="mt-4 h-0.5 w-0 bg-gradient-brand rounded-full transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 mb-4">
            Ready to experience the NHRL difference?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/products" className="btn-primary">
              Explore Products
            </a>
            <a href="/about" className="btn-secondary">
              Learn About Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
