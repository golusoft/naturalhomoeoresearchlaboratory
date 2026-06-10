"use client";

import React, { useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  Grid,
  List,
  ArrowUpDown,
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { ProductCard } from "./ProductCard";
import { cn, debounce } from "@/lib/utils";

// Mock products data (will come from WordPress API)
const mockProducts = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: [
    "Arnica Montana 30C",
    "Ashwagandha Q",
    "Belladonna 200C",
    "Calendula Q",
    "Nux Vomica 30C",
    "Rhus Tox 200C",
    "Pulsatilla 30C",
    "Sulphur 200C",
    "Lycopodium 30C",
    "Phosphorus 30C",
    "NHRL Hair Growth Oil",
    "Immunoboost Syrup",
    "Bio Combination No. 5",
    "Echinacea Q",
    "Gelsemium 30C",
    "Bryonia 30C",
    "Calcarea Carbonica 200C",
    "Ferrum Phos 6X",
    "Natrum Mur 6X",
    "Kali Phos 6X",
    "Cough Relief Syrup",
    "Liver Care Drops",
    "Anti-Dandruff Hair Oil",
    "Burn Ointment",
  ][i],
  slug: `product-${i + 1}`,
  category: PRODUCT_CATEGORIES[i % PRODUCT_CATEGORIES.length].name,
  categorySlug: PRODUCT_CATEGORIES[i % PRODUCT_CATEGORIES.length].slug,
  shortDescription: "Premium quality homeopathic medicine for effective treatment",
  mrp: 75 + Math.floor(Math.random() * 200),
  packSize: ["30ml", "30g", "100ml", "200ml", "25g"][i % 5],
  availability: "in-stock" as const,
  isFeatured: i < 6,
  isNew: i >= 18,
  isBestseller: i >= 6 && i < 12,
  rating: 4.5 + Math.random() * 0.5,
  reviews: Math.floor(50 + Math.random() * 200),
}));

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
];

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const handleSearch = useCallback(
    debounce((value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      router.push(`/products?${params.toString()}`);
    }, 400),
    [searchParams, router]
  );

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.categorySlug === selectedCategory;
    const matchesSearch =
      !searchValue ||
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.category.toLowerCase().includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.mrp - b.mrp;
      case "price-desc":
        return b.mrp - a.mrp;
      default:
        return a.isFeatured ? -1 : 1;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              "lg:w-64 flex-shrink-0",
              showFilters ? "block" : "hidden lg:block"
            )}
          >
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-soft p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-900 font-heading">Filters</h3>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchValue("");
                  }}
                  className="text-xs text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Category
                </div>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setCurrentPage(1);
                    }}
                    className={cn(
                      "w-full text-left text-sm px-3 py-2 rounded-xl transition-colors",
                      selectedCategory === "all"
                        ? "bg-primary text-white font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    All Categories
                    <span className="ml-1 text-xs opacity-70">
                      ({mockProducts.length})
                    </span>
                  </button>
                  {PRODUCT_CATEGORIES.map((cat) => {
                    const count = mockProducts.filter(
                      (p) => p.categorySlug === cat.slug
                    ).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "w-full text-left text-sm px-3 py-2 rounded-xl transition-colors",
                          selectedCategory === cat.slug
                            ? "bg-primary text-white font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        {cat.name}
                        <span className="ml-1 text-xs opacity-70">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Availability
                </div>
                <div className="space-y-2">
                  {["In Stock", "All Products"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary"
                        defaultChecked={opt === "All Products"}
                      />
                      <span className="text-sm text-gray-600">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    handleSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="form-input pl-10 py-2.5"
                />
                {searchValue && (
                  <button
                    onClick={() => {
                      setSearchValue("");
                      handleSearch("");
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-input pl-3 pr-8 py-2.5 appearance-none cursor-pointer min-w-40"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View Toggle */}
              <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setView("grid")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    view === "grid" ? "bg-white shadow-sm text-primary" : "text-gray-500"
                  )}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    view === "list" ? "bg-white shadow-sm text-primary" : "text-gray-500"
                  )}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <strong className="text-gray-900">
                  {Math.min(paginatedProducts.length, ITEMS_PER_PAGE)}
                </strong>{" "}
                of <strong className="text-gray-900">{filteredProducts.length}</strong>{" "}
                products
                {selectedCategory !== "all" && (
                  <span>
                    {" "}
                    in{" "}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="text-primary font-medium hover:underline"
                    >
                      {PRODUCT_CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                      <X className="inline w-3 h-3 ml-0.5" />
                    </button>
                  </span>
                )}
              </p>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div
                className={cn(
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "space-y-4"
                )}
              >
                {paginatedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} view={view} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchValue("");
                    setSelectedCategory("all");
                  }}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "w-10 h-10 rounded-xl text-sm font-medium transition-colors",
                      currentPage === page
                        ? "bg-primary text-white shadow-brand"
                        : "border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                    )}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
