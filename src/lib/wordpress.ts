/**
 * WordPress REST API Integration
 * Connects to headless WordPress CMS for products, blogs, and other content
 */

const WP_API = process.env.WORDPRESS_API_URL || "https://cms.naturalhomeoresearch.com/wp-json";

interface WPRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
}

async function wpFetch<T>(endpoint: string, options: WPRequestOptions = {}): Promise<T> {
  const {
    method = "GET",
    body,
    cache = "force-cache",
    revalidate = 3600,
    tags = [],
  } = options;

  const url = `${WP_API}${endpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (process.env.WORDPRESS_AUTH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}`;
  }

  const fetchOptions: RequestInit = {
    method,
    headers,
    ...(method === "GET"
      ? {
          next: {
            revalidate,
            ...(tags.length > 0 ? { tags } : {}),
          },
        }
      : { cache: "no-store" }),
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText} for ${url}`);
  }

  return response.json();
}

// ==================== Products ====================

export async function getProducts(params?: {
  page?: number;
  per_page?: number;
  category?: string;
  search?: string;
  featured?: boolean;
  orderby?: string;
  order?: "asc" | "desc";
}) {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.category) searchParams.set("product_category", params.category);
  if (params?.search) searchParams.set("search", params.search);
  if (params?.featured) searchParams.set("featured", "true");
  if (params?.orderby) searchParams.set("orderby", params.orderby);
  if (params?.order) searchParams.set("order", params.order);

  const qs = searchParams.toString();
  return wpFetch(`/wp/v2/products${qs ? `?${qs}` : ""}`, {
    revalidate: 1800,
    tags: ["products"],
  });
}

export async function getProductBySlug(slug: string) {
  return wpFetch(`/wp/v2/products?slug=${slug}&_embed=1`, {
    revalidate: 3600,
    tags: [`product-${slug}`],
  });
}

export async function getProductCategories() {
  return wpFetch("/wp/v2/product_categories?per_page=50", {
    revalidate: 86400,
    tags: ["product-categories"],
  });
}

export async function getFeaturedProducts(limit = 6) {
  return wpFetch(`/wp/v2/products?per_page=${limit}&featured=true&_embed=1`, {
    revalidate: 3600,
    tags: ["featured-products"],
  });
}

// ==================== Blog Posts ====================

export async function getPosts(params?: {
  page?: number;
  per_page?: number;
  category?: string;
  search?: string;
  tag?: string;
}) {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.per_page) searchParams.set("per_page", String(params.per_page));
  if (params?.category) searchParams.set("categories", params.category);
  if (params?.search) searchParams.set("search", params.search);
  if (params?.tag) searchParams.set("tags", params.tag);
  searchParams.set("_embed", "1");

  const qs = searchParams.toString();
  return wpFetch(`/wp/v2/posts?${qs}`, {
    revalidate: 3600,
    tags: ["posts"],
  });
}

export async function getPostBySlug(slug: string) {
  return wpFetch(`/wp/v2/posts?slug=${slug}&_embed=1`, {
    revalidate: 3600,
    tags: [`post-${slug}`],
  });
}

export async function getPostCategories() {
  return wpFetch("/wp/v2/categories?per_page=20", {
    revalidate: 86400,
    tags: ["post-categories"],
  });
}

// ==================== Testimonials ====================

export async function getTestimonials(limit = 10) {
  return wpFetch(`/wp/v2/testimonials?per_page=${limit}`, {
    revalidate: 86400,
    tags: ["testimonials"],
  });
}

// ==================== Team ====================

export async function getTeamMembers() {
  return wpFetch("/wp/v2/team?per_page=20&orderby=menu_order&order=asc", {
    revalidate: 86400,
    tags: ["team"],
  });
}

// ==================== FAQs ====================

export async function getFaqs(category?: string) {
  const qs = category ? `?faq_category=${category}` : "";
  return wpFetch(`/wp/v2/faqs${qs}`, {
    revalidate: 86400,
    tags: ["faqs"],
  });
}

// ==================== Certificates ====================

export async function getCertificates() {
  return wpFetch("/wp/v2/certificates?per_page=20", {
    revalidate: 86400,
    tags: ["certificates"],
  });
}

// ==================== Career Openings ====================

export async function getJobOpenings() {
  return wpFetch("/wp/v2/careers?per_page=20&status=publish", {
    revalidate: 3600,
    tags: ["careers"],
  });
}

// ==================== Distributors ====================

export async function getDistributors(state?: string) {
  const qs = state ? `?state=${state}` : "";
  return wpFetch(`/wp/v2/distributors${qs}`, {
    revalidate: 3600,
    tags: ["distributors"],
  });
}

// ==================== Helper functions ====================

export function getWPImageUrl(media: {
  media_details?: { sizes?: { full?: { source_url?: string }; large?: { source_url?: string }; medium?: { source_url?: string } } };
  source_url?: string;
} | null, size: "full" | "large" | "medium" = "large"): string {
  if (!media) return "/images/placeholders/product.jpg";
  const sizeUrl = media.media_details?.sizes?.[size]?.source_url;
  return sizeUrl || media.source_url || "/images/placeholders/product.jpg";
}

export function getWPExcerpt(post: { excerpt?: { rendered?: string } } | null): string {
  if (!post?.excerpt?.rendered) return "";
  return post.excerpt.rendered.replace(/<[^>]+>/g, "").trim();
}

export function getWPContent(post: { content?: { rendered?: string } } | null): string {
  if (!post?.content?.rendered) return "";
  return post.content.rendered;
}

export function getWPTitle(post: { title?: { rendered?: string } } | null): string {
  if (!post?.title?.rendered) return "";
  return post.title.rendered.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export function getACFField<T = string>(
  post: { acf?: Record<string, unknown> } | null,
  field: string
): T | null {
  if (!post?.acf) return null;
  return (post.acf[field] as T) ?? null;
}
