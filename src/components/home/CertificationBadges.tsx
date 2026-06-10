"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

export function CertificationBadges() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Certifications and compliance"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag mx-auto w-fit">Certifications</div>
          <h2 className="section-title mt-4">
            Certified Quality &{" "}
            <span className="gradient-text">Compliance</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Our products and facility are certified by leading regulatory authorities,
            ensuring the highest quality standards.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cert-badge group"
            >
              {/* Cert Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-brand-200/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>

              {/* Cert Info */}
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm font-heading">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 leading-tight">
                  {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/5 to-brand-100/50 rounded-3xl p-6 md:p-8 border border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-brand">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-heading mb-1">
                  Fully Compliant with Indian Pharmaceutical Regulations
                </h3>
                <p className="text-sm text-gray-600">
                  All our products comply with the Homoeopathic Pharmacopoeia of
                  India (HPI), Drugs and Cosmetics Act, and AYUSH regulations.
                </p>
              </div>
            </div>
            <Link
              href="/certifications"
              className="btn-primary flex-shrink-0"
            >
              View Certificates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
