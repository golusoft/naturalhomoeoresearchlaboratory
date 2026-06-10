"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  Calendar,
  Package,
  Users,
  MapPin,
  Heart,
  Factory,
} from "lucide-react";
import { COMPANY_STATS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  package: Package,
  users: Users,
  map: MapPin,
  heart: Heart,
  factory: Factory,
};

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-gray-50"
      aria-label="Company statistics"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag mx-auto w-fit">
            Our Achievements
          </div>
          <h2 className="section-title mt-4">
            Trusted by Thousands
            <span className="block gradient-text">Across India</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            15+ years of excellence in homeopathic medicine manufacturing and distribution
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {COMPANY_STATS.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Package;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card text-center group"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-brand">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary-700 font-heading">
                  {isInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={index * 0.1}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 py-6 px-8 bg-gradient-to-r from-primary-700 to-primary-600 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="text-center md:text-left">
              <div className="text-lg font-bold font-heading">
                Expanding Distribution Network
              </div>
              <div className="text-primary-200 text-sm">
                Join 1000+ dealers and distributors across 25+ states
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Bihar", "Jharkhand", "UP", "MP", "Delhi", "Maharashtra", "+20 States"].map(
                (state) => (
                  <span
                    key={state}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                  >
                    {state}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
