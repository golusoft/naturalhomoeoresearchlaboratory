"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { formatDateShort, cn } from "@/lib/utils";

const mockPosts = [
  {
    id: 1,
    title: "Understanding Mother Tinctures: A Complete Guide",
    slug: "understanding-mother-tinctures",
    excerpt: "Mother tinctures form the foundation of homeopathic medicine preparation. Learn about their preparation, quality, and clinical uses.",
    category: "Homeopathy",
    author: "Dr. Rajesh Singh",
    publishedAt: "2024-12-10",
    readingTime: 8,
    tags: ["Mother Tinctures", "Basics"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Top 10 Homeopathic Remedies for Respiratory Problems",
    slug: "homeopathic-remedies-respiratory",
    excerpt: "Discover the most effective homeopathic treatments for cough, cold, bronchitis and other respiratory conditions.",
    category: "Health Tips",
    author: "Dr. Priya Sharma",
    publishedAt: "2024-12-05",
    readingTime: 6,
    tags: ["Respiratory", "Remedies"],
    isFeatured: false,
  },
  {
    id: 3,
    title: "Homeopathic Distribution Business: A Growing Opportunity",
    slug: "homeopathic-distribution-opportunity",
    excerpt: "The homeopathic medicine market in India is growing at 15% annually. Here's how to capitalize on this opportunity.",
    category: "Research",
    author: "NHRL Team",
    publishedAt: "2024-11-28",
    readingTime: 5,
    tags: ["Business", "Market"],
    isFeatured: false,
  },
  {
    id: 4,
    title: "Biochemic Salts: Nature's Mineral Therapy",
    slug: "biochemic-salts-mineral-therapy",
    excerpt: "Explore the 12 tissue salts and their therapeutic applications in treating common ailments naturally.",
    category: "Homeopathy",
    author: "Dr. Amit Kumar",
    publishedAt: "2024-11-20",
    readingTime: 7,
    tags: ["Biochemic", "Minerals"],
    isFeatured: false,
  },
  {
    id: 5,
    title: "Stress Management with Homeopathy",
    slug: "stress-management-homeopathy",
    excerpt: "Modern life stress affects health in numerous ways. Learn how homeopathic remedies address stress and its consequences.",
    category: "Wellness",
    author: "Dr. Priya Sharma",
    publishedAt: "2024-11-15",
    readingTime: 5,
    tags: ["Stress", "Wellness"],
    isFeatured: false,
  },
  {
    id: 6,
    title: "Child Health and Homeopathy: Safe Treatment Options",
    slug: "child-health-homeopathy",
    excerpt: "Homeopathy offers safe, effective treatments for children without side effects. Discover the best remedies for common childhood ailments.",
    category: "Health Tips",
    author: "Dr. Rajesh Singh",
    publishedAt: "2024-11-10",
    readingTime: 6,
    tags: ["Children", "Safety"],
    isFeatured: false,
  },
];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const filtered = mockPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = !searchValue || post.title.toLowerCase().includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search articles..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="form-input pl-10 py-2.5"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-brand"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="blog-card group"
            >
              <div className="relative h-44 bg-gradient-to-br from-primary/5 to-brand-100/30 flex items-center justify-center">
                <Tag className="w-12 h-12 text-primary/20" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  {post.isFeatured && (
                    <span className="px-2.5 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDateShort(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} min
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 font-heading mb-2 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No articles found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
