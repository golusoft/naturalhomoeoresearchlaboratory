"use client";

import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "./Breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  pattern?: boolean;
}

export function PageHero({
  title,
  subtitle,
  tag,
  breadcrumbs,
  className,
  children,
  size = "md",
  pattern = true,
}: PageHeroProps) {
  const heights = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
  };

  return (
    <section
      className={cn(
        "relative bg-gradient-hero overflow-hidden",
        heights[size],
        className
      )}
    >
      {/* Background pattern */}
      {pattern && (
        <>
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-700/20 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
        </>
      )}

      <div className="relative z-10 container-custom">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Breadcrumb
              items={breadcrumbs}
              className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {tag && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 font-medium mb-4">
              <span className="w-1.5 h-1.5 bg-brand-300 rounded-full" />
              {tag}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
