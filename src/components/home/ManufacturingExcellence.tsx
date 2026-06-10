"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Building2,
  Settings,
  CheckCircle,
  Package,
  Thermometer,
  ArrowRight,
  Play,
} from "lucide-react";
import { MANUFACTURING_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  flask: FlaskConical,
  building: Building2,
  settings: Settings,
  "check-circle": CheckCircle,
  package: Package,
  thermometer: Thermometer,
};

const qualityPoints = [
  "ISO 9001:2015 Certified Quality Management",
  "GMP Compliant Manufacturing Process",
  "100% Raw Material Testing Before Use",
  "In-house Quality Control Laboratory",
  "AYUSH Approved Manufacturing Facility",
  "Automated Filling & Packaging Lines",
];

export function ManufacturingExcellence() {
  return (
    <section
      className="section-padding bg-gray-50"
      aria-label="Manufacturing excellence"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">Manufacturing Excellence</div>
            <h2 className="section-title mt-4">
              State-of-the-Art{" "}
              <span className="gradient-text">Manufacturing Facility</span>
            </h2>
            <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
              Our GMP-certified manufacturing facility is equipped with modern
              machinery and follows stringent quality protocols to ensure every
              product meets the highest homeopathic standards.
            </p>

            {/* Quality Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/manufacturing" className="btn-primary">
                View Facility
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/quality-assurance" className="btn-secondary">
                Quality Standards
              </Link>
            </div>
          </motion.div>

          {/* Right - Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main visual */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large card */}
              <div className="col-span-2 bg-gradient-brand rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold font-heading mb-1">100K+</div>
                    <div className="text-brand-200">Units/Month Capacity</div>
                    <div className="text-sm text-brand-300 mt-2">
                      State-of-the-art production lines
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Feature cards */}
              {MANUFACTURING_FEATURES.slice(0, 4).map((feature, index) => {
                const Icon = iconMap[feature.icon] || FlaskConical;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm font-heading mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Video play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Link
                href="/manufacturing"
                className="pointer-events-auto w-16 h-16 bg-white rounded-full shadow-strong flex items-center justify-center hover:scale-110 transition-transform group"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
