"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
} from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-brand text-white text-sm">
        <div className="container-custom py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-1.5 hover:text-brand-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-1.5 hover:text-brand-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon-Sat: 9AM - 6PM</span>
              </div>
              <div className="flex items-center gap-2">
                {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label={platform}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-medium"
            : "bg-white shadow-soft"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <div className="w-full h-full bg-gradient-brand rounded-xl flex items-center justify-center shadow-brand">
                  <span className="text-white font-bold text-lg md:text-xl font-heading">N</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-primary-700 text-sm md:text-base font-heading leading-tight">
                  Natural Homeo
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Research Laboratory
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                        pathname === item.href ||
                          item.children.some((c) => pathname === c.href)
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      )}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-strong border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-2.5 text-sm transition-colors duration-150",
                                  pathname === child.href
                                    ? "text-primary bg-primary/10 font-medium"
                                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/become-distributor"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Become Distributor
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-40 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="font-bold text-primary-700 text-sm font-heading">
                    NHRL
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <nav className="p-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/become-distributor"
                  className="btn-primary w-full text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become Distributor
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="p-4 bg-gray-50 space-y-2">
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.contact.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[0];
  pathname: string;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={cn(
          "block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors",
          pathname === item.href
            ? "text-primary bg-primary/10"
            : "text-gray-700 hover:text-primary hover:bg-primary/5"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-xl transition-colors",
          isOpen ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-primary/5"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 mt-1 space-y-1">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-lg transition-colors",
                    pathname === child.href
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const size = "w-3 h-3";
  switch (platform) {
    case "facebook":
      return (
        <svg className={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return null;
  }
}
