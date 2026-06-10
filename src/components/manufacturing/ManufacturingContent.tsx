"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, CheckCircle, Award, Factory, Package, Thermometer, Building2, Settings, Microscope } from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    icon: FlaskConical,
    title: "Raw Material Lab",
    description: "Identity, purity, and potency testing of all incoming raw materials before production begins.",
    stats: "100% tested",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Factory,
    title: "Production Unit",
    description: "GMP compliant cleanroom manufacturing for mother tinctures, dilutions, and specialty medicines.",
    stats: "100K units/month",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Settings,
    title: "Automated Machinery",
    description: "Semi-automated filling, sealing and labeling equipment for consistent output quality.",
    stats: "12 production lines",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Microscope,
    title: "Quality Control Lab",
    description: "In-house NABL quality laboratory for physical, chemical and microbiological testing.",
    stats: "50+ test parameters",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Package,
    title: "Packaging Unit",
    description: "Tamper-proof sealing and packaging with serialized batch tracking for all products.",
    stats: "Zero defect policy",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Storage",
    description: "Temperature controlled warehouse maintaining 15-25°C for sensitive homeopathic medicines.",
    stats: "5000 sq.ft. area",
    color: "bg-red-50 text-red-600",
  },
];

const process = [
  { step: "01", title: "Raw Material Sourcing", desc: "Sourcing certified raw materials from approved vendors worldwide" },
  { step: "02", title: "Quality Testing", desc: "Comprehensive testing before approval for production use" },
  { step: "03", title: "Mother Tincture Preparation", desc: "Maceration and percolation as per Homeopathic Pharmacopoeia" },
  { step: "04", title: "Potency Preparation", desc: "Serial dilution and succussion at prescribed potencies" },
  { step: "05", title: "Quality Control", desc: "Physical, chemical, and microbiological testing of final product" },
  { step: "06", title: "Filling & Packaging", desc: "Automated filling and tamper-proof packaging in cleanroom" },
  { step: "07", title: "Final QA Approval", desc: "Batch release only after QA head approval and documentation" },
  { step: "08", title: "Distribution", desc: "Temperature-controlled dispatch through approved logistics partners" },
];

export function ManufacturingContent() {
  return (
    <div>
      {/* Facility Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="section-tag">Facility Overview</div>
              <h2 className="section-title mt-4">GMP Certified <span className="gradient-text">Manufacturing Plant</span></h2>
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                Our 20,000 sq. ft. manufacturing facility in Patna, Bihar is designed to meet the
                strictest homeopathic manufacturing standards. Every production area is built to GMP
                specifications with controlled environment systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Facility Area", value: "20,000 sq.ft." },
                  { label: "Production Capacity", value: "1 Lakh units/month" },
                  { label: "Quality Tests/Batch", value: "50+ parameters" },
                  { label: "GMP Certified", value: "Since 2015" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <div className="text-xl font-bold text-primary-700 font-heading">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/certifications" className="btn-primary">View Certifications</Link>
                <Link href="/quality-assurance" className="btn-secondary">Quality Standards</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-gradient-to-br from-primary/10 to-brand-200/20 rounded-3xl p-10 flex items-center justify-center min-h-80">
                <div className="text-center">
                  <Building2 className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                  <div className="text-gray-500">Manufacturing Facility Image</div>
                  <div className="text-xs text-gray-400 mt-1">Replace with actual facility photos</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Facilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div key={facility.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="feature-card">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${facility.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="badge-primary text-xs mb-2">{facility.stats}</div>
                  <h3 className="font-bold text-gray-900 font-heading mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="section-tag mx-auto w-fit">Manufacturing Process</div>
            <h2 className="section-title mt-4">From <span className="gradient-text">Raw Material to Medicine</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 relative">
                <div className="text-4xl font-bold text-primary/10 font-heading mb-3">{step.step}</div>
                <h4 className="font-bold text-gray-900 font-heading text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
