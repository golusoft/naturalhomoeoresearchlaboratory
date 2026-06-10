"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Shield,
  Award,
  Users,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

const trustBadges = [
  { icon: Shield, label: "GMP Certified" },
  { icon: Award, label: "ISO 9001:2015" },
  { icon: Users, label: "1000+ Distributors" },
];

const heroFeatures = [
  "500+ Homeopathic Products",
  "25+ States Coverage",
  "Research-Driven Formulations",
  "AYUSH Approved",
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-700/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-300/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white pt-20 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-brand-300 rounded-full animate-pulse" />
              Trusted Homeopathic Manufacturer Since {SITE_CONFIG.founded}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold font-heading leading-tight mb-6"
            >
              Trusted Homeopathic
              <span className="block text-brand-300">Manufacturing</span>
              <span className="block text-2xl md:text-3xl xl:text-4xl font-semibold text-white/80 mt-1">
                & Distribution Company
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed"
            >
              Research-driven homeopathic medicines for better healthcare.
              GMP certified, AYUSH approved, delivering quality across India.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-2.5 mb-8"
            >
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <CheckCircle className="w-4 h-4 text-brand-300 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-brand-50 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/become-distributor"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Become Distributor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white/90"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-300" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="relative w-[480px] h-[480px] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Lab image placeholder - will be replaced with real image */}
                <div className="w-full h-full bg-gradient-to-br from-brand-700/50 to-brand-900/80 flex items-center justify-center">
                  <div className="text-center text-white/80 p-8">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-2">
                      Natural Homeo
                    </h3>
                    <p className="text-white/60 text-sm">
                      Research Laboratory
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[
                        { value: "500+", label: "Products" },
                        { value: "15+", label: "Years" },
                        { value: "1000+", label: "Dealers" },
                        { value: "25+", label: "States" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-white/10 rounded-xl p-3"
                        >
                          <div className="text-xl font-bold text-brand-300">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/60">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-strong w-44"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">GMP Certified</span>
                </div>
                <div className="text-xs text-gray-500">Ministry of AYUSH</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-strong w-48"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Quality Assured</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                  <div className="bg-green-500 h-1.5 rounded-full w-[95%]" />
                </div>
                <div className="text-xs text-gray-500 mt-1">95% Quality Score</div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-14 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-strong"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-xs text-gray-500">Customers</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1"
      >
        <span className="text-xs">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>

      {/* WhatsApp Quick Contact */}
      <a
        href={getWhatsAppLink(SITE_CONFIG.contact.whatsapp, "Hello, I'm interested in your products.")}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-6 flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-10"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat Now
      </a>
    </section>
  );
}
