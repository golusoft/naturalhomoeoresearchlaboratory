"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="section-tag">FAQ</div>
              <h2 className="section-title mt-4">
                Frequently Asked
                <span className="block gradient-text">Questions</span>
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Everything you need to know about homeopathic medicines,
                our products, and business opportunities.
              </p>

              <div className="mt-8 p-6 bg-gradient-light rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 font-heading">
                    Still have questions?
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help. Contact us for personalized assistance.
                </p>
                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-3"
          >
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-200",
                  openIndex === index
                    ? "border-primary/30 shadow-soft bg-primary/[0.02]"
                    : "border-gray-100 bg-white hover:border-gray-200"
                )}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={cn(
                      "font-semibold text-sm md:text-base font-heading leading-snug",
                      openIndex === index ? "text-primary" : "text-gray-900"
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-500"
                    )}
                  >
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="w-full h-px bg-gray-100 mb-4" />
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
