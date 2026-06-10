"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Building2, Stethoscope } from "lucide-react";

const opportunities = [
  {
    icon: TrendingUp,
    title: "Become a Distributor",
    description:
      "Join our pan-India distribution network. Attractive profit margins, marketing support, and dedicated sales assistance.",
    cta: "Apply Now",
    href: "/become-distributor",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: Building2,
    title: "Become a Dealer",
    description:
      "Retail dealership for pharmacies and medical stores. Low investment, high returns with our trusted product range.",
    cta: "Register",
    href: "/become-dealer",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Users,
    title: "Franchise Opportunity",
    description:
      "Exclusive franchise for establishing a branded homeopathic outlet in your city. Complete support provided.",
    cta: "Explore",
    href: "/franchise",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Stethoscope,
    title: "For Doctors",
    description:
      "Sample kits, clinical literature, and product consultations for homeopathic practitioners.",
    cta: "Learn More",
    href: "/contact?type=doctor",
    color: "text-orange-600 bg-orange-50",
  },
];

export function BusinessCTA() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Business opportunities"
    >
      <div className="container-custom">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-hero rounded-3xl p-8 md:p-14 mb-14 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-40 translate-x-40" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-30 -translate-x-30" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full text-white/80 text-sm font-medium mb-4 border border-white/20">
                <span className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" />
                Business Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">
                Grow Your Business
                <span className="block text-brand-300">With NHRL</span>
              </h2>
              <p className="text-white/80 text-lg max-w-lg">
                Join India&apos;s growing homeopathic medicine market. Partner with us as
                a distributor, dealer, or franchise owner.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <Link
                href="/become-distributor"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-brand-50 transition-all hover:scale-105 shadow-lg"
              >
                Become Distributor
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/25 transition-all hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Opportunity Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="section-title">
              Business{" "}
              <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3 text-center">
              Multiple ways to partner with Natural Homeo Research Laboratory
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon;
              return (
                <motion.div
                  key={opp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card flex flex-col group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${opp.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading mb-2">
                    {opp.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow mb-5">
                    {opp.description}
                  </p>
                  <Link
                    href={opp.href}
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    {opp.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
