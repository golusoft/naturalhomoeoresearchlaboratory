"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, UserCircle } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Doctors", value: "doctor" },
  { label: "Distributors", value: "distributor" },
  { label: "Dealers", value: "dealer" },
  { label: "Pharmacy", value: "pharmacy" },
];

export function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    activeFilter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.type === activeFilter);

  const next = () => setCurrentIndex((prev) => (prev + 1) % filtered.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
      aria-label="Customer testimonials"
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
          <div className="section-tag mx-auto w-fit">Testimonials</div>
          <h2 className="section-title mt-4">
            What Our{" "}
            <span className="gradient-text">Partners Say</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Trusted by doctors, distributors, dealers, and pharmacies across India
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setCurrentIndex(0);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter.value
                  ? "bg-primary text-white shadow-brand"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200"
                    )}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role} · {testimonial.location}
                  </div>
                </div>
                <div className="ml-auto">
                  <span
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-full font-medium",
                      testimonial.type === "doctor"
                        ? "bg-blue-100 text-blue-700"
                        : testimonial.type === "distributor"
                        ? "bg-green-100 text-green-700"
                        : testimonial.type === "pharmacy"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-orange-100 text-orange-700"
                    )}
                  >
                    {testimonial.type.charAt(0).toUpperCase() +
                      testimonial.type.slice(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Slider - Mobile */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            {filtered.length > 0 && (
              <motion.div
                key={`${activeFilter}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="testimonial-card"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  &quot;{filtered[currentIndex]?.text}&quot;
                </p>
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < (filtered[currentIndex]?.rating || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200"
                      )}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {filtered[currentIndex]?.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {filtered[currentIndex]?.role} ·{" "}
                      {filtered[currentIndex]?.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {filtered.length > 1 && (
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-gray-300"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 py-6 border-t border-gray-100"
        >
          {[
            { value: "4.8/5", label: "Average Rating" },
            { value: "50,000+", label: "Happy Customers" },
            { value: "1,000+", label: "Verified Reviews" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-primary-700 font-heading">
                {item.value}
              </div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
