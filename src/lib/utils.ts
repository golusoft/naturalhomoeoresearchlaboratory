import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function getWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function getGoogleMapsLink(address: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ""));
}

export function generateMetaTitle(title: string, siteName?: string): string {
  const site = siteName || "Natural Homeo Research Laboratory";
  return `${title} | ${site}`;
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.naturalhomeoresearch.com";
  return `${baseUrl}${path}`;
}

export function debounce<T extends (...args: string[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function getProductImagePlaceholder(category: string): string {
  const placeholders: Record<string, string> = {
    "mother-tinctures": "/images/placeholders/mother-tincture.jpg",
    dilutions: "/images/placeholders/dilution.jpg",
    "bio-combination": "/images/placeholders/bio-combination.jpg",
    syrups: "/images/placeholders/syrup.jpg",
    drops: "/images/placeholders/drops.jpg",
    "hair-care": "/images/placeholders/hair-care.jpg",
    "personal-care": "/images/placeholders/personal-care.jpg",
    ointments: "/images/placeholders/ointment.jpg",
    tablets: "/images/placeholders/tablet.jpg",
    "special-medicines": "/images/placeholders/special.jpg",
  };
  return placeholders[category] || "/images/placeholders/product.jpg";
}

export function buildQueryString(params: Record<string, string | number | boolean | undefined>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });
  const qs = searchParams.toString();
  return qs ? `?${qs}` : "";
}

export function parseQueryString(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(search);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
