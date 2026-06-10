"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { formatDateShort } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Mother Tinctures: A Complete Guide for Homeopathic Practitioners",
    slug: "understanding-mother-tinctures-guide",
    excerpt:
      "Mother tinctures are the backbone of homeopathic medicine. Learn about their preparation, potency, and clinical applications in this comprehensive guide.",
    category: "Homeopathy",
    author: "Dr. Rajesh Singh",
    publishedAt: "2024-12-10",
    readingTime: 8,
    image: null,
    tags: ["Mother Tinctures", "Homeopathy Basics"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Homeopathic Treatment for Seasonal Allergies: Top Remedies",
    slug: "homeopathic-treatment-seasonal-allergies",
    excerpt:
      "Discover the most effective homeopathic remedies for seasonal allergies and hay fever, backed by clinical research and traditional practice.",
    category: "Health Tips",
    author: "Dr. Priya Sharma",
    publishedAt: "2024-12-05",
    readingTime: 6,
    image: null,
    tags: ["Allergies", "Natural Treatment"],
    isFeatured: false,
  },
  {
    id: 3,
    title: "Growing Opportunity: Homeopathic Distribution Business in Rural India",
    slug: "homeopathic-distribution-business-rural-india",
    excerpt:
      "The homeopathic medicine market in rural India is booming. Here's why becoming a distributor for quality brands like NHRL can be a profitable venture.",
    category: "Research",
    author: "NHRL Editorial Team",
    publishedAt: "2024-11-28",
    readingTime: 5,
    image: null,
    tags: ["Business", "Distribution"],
    isFeatured: false,
  },
];

export function BlogPreview() {
  return (
    <section
      className="section-padding bg-gray-50"
      aria-label="Latest from blog"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="section-tag">Latest Articles</div>
            <h2 className="section-title mt-4">
              Health Insights &{" "}
              <span className="gradient-text">Research Updates</span>
            </h2>
            <p className="section-subtitle mt-3">
              Stay informed about homeopathy, health tips, and business news
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-secondary flex-shrink-0 self-start md:self-auto"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="blog-card group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-brand-100/50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Tag className="w-8 h-8 text-primary/40" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {post.isFeatured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDateShort(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} min read
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 font-heading mb-2 line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    By <span className="font-medium text-gray-700">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
