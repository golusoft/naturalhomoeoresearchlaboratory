"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle, Users, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const values = [
  {
    icon: CheckCircle,
    title: "Quality First",
    description:
      "Uncompromising commitment to product quality at every stage from raw material sourcing to final dispatch.",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: Users,
    title: "Customer Centric",
    description:
      "Building long-term relationships with doctors, distributors, and patients through excellent service.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Award,
    title: "Research Driven",
    description:
      "Continuous research and development to improve formulations and develop new homeopathic solutions.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Heart,
    title: "Ethical Practices",
    description:
      "Transparent business practices, honest pricing, and full compliance with all regulatory requirements.",
    color: "text-pink-600 bg-pink-50",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Foundation",
    description:
      "Natural Homeo Research Laboratory founded in Patna, Bihar with a vision to provide quality homeopathic medicines.",
  },
  {
    year: "2012",
    title: "AYUSH License",
    description:
      "Received AYUSH manufacturing license and began commercial production of homeopathic medicines.",
  },
  {
    year: "2015",
    title: "GMP Certification",
    description:
      "Achieved GMP certification, ensuring manufacturing compliance with international quality standards.",
  },
  {
    year: "2018",
    title: "ISO Certification",
    description:
      "Obtained ISO 9001:2015 certification for our quality management system.",
  },
  {
    year: "2020",
    title: "Pan-India Expansion",
    description:
      "Expanded distribution network to 20+ states with 500+ active dealers and distributors.",
  },
  {
    year: "2023",
    title: "Product Range 500+",
    description:
      "Launched 500+ products across all major homeopathic medicine categories.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Launched digital platform for dealers and distributors with online ordering and tracking.",
  },
];

export function AboutContent() {
  return (
    <div>
      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "bg-primary text-white",
                text: "To provide research-driven, affordable, and high-quality homeopathic medicines that improve the health and wellbeing of people across India through scientific manufacturing and a trusted distribution network.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "bg-secondary text-white",
                text: "To become India's most trusted homeopathic medicine company, recognized for innovation, quality, and positive impact on healthcare — making homeopathy accessible to every household.",
              },
              {
                icon: Heart,
                title: "Our Purpose",
                color: "bg-green-600 text-white",
                text: "We believe in the healing power of homeopathy. Our purpose is to harness this ancient science through modern manufacturing to create medicines that heal gently, safely, and effectively.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md ${item.color}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Company Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag">Company Overview</div>
              <h2 className="section-title mt-4">
                A Legacy of{" "}
                <span className="gradient-text">Healing Excellence</span>
              </h2>
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                Natural Homeo Research Laboratory was established in{" "}
                {SITE_CONFIG.founded} with a singular vision: to make high-quality
                homeopathic medicines accessible across India. Over 15 years, we have
                grown from a small research lab to a full-scale GMP-certified
                manufacturing facility.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our manufacturing facility in Patna, Bihar is equipped with modern
                quality control labs, automated production lines, and cold-chain
                storage — all compliant with AYUSH and GMP regulations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we serve 1000+ dealers and distributors across 25+ states,
                offering 500+ homeopathic products trusted by thousands of doctors
                and patients.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2010", label: "Year Founded" },
                  { value: "500+", label: "Products" },
                  { value: "25+", label: "States Covered" },
                  { value: "1000+", label: "Partners" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-primary/5 rounded-xl border border-primary/10"
                  >
                    <div className="text-2xl font-bold text-primary-700 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-primary/10 to-brand-200/30 rounded-3xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-brand rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brand-lg">
                    <span className="text-white text-5xl font-bold font-heading">N</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-700 font-heading">
                    Natural Homeo
                  </div>
                  <div className="text-gray-500">Research Laboratory</div>
                  <div className="text-sm text-primary mt-2">Est. {SITE_CONFIG.founded}</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-strong border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">GMP Certified</div>
                <div className="text-sm font-bold text-primary">Since 2015</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto w-fit">Our Values</div>
            <h2 className="section-title mt-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto w-fit">Our Journey</div>
            <h2 className="section-title mt-4">
              From Vision to <span className="gradient-text">Excellence</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-dot" />
                <div className="flex items-start gap-4">
                  <div className="badge-primary flex-shrink-0">{item.year}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
