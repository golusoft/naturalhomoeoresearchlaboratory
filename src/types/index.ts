// ==================== Product Types ====================
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  composition: string;
  benefits: string[];
  dosage: string;
  precautions: string;
  storageInstructions: string;
  images: ProductImage[];
  packSizes: PackSize[];
  mrp: number;
  availability: "in-stock" | "out-of-stock" | "coming-soon";
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  brochureUrl?: string;
  relatedProducts?: number[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  isMain: boolean;
}

export interface PackSize {
  size: string;
  mrp: number;
  sku?: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image?: string;
  productCount?: number;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sort?: "name-asc" | "name-desc" | "price-asc" | "price-desc" | "featured" | "newest";
  page?: number;
  limit?: number;
  availability?: string;
  featured?: boolean;
}

// ==================== Blog Types ====================
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  author: Author;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  isFeatured: boolean;
  status: "published" | "draft";
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  tableOfContents?: TocItem[];
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  postCount?: number;
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  designation: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

// ==================== Lead / Form Types ====================
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  recaptchaToken?: string;
}

export interface DistributorFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  state: string;
  district: string;
  city: string;
  address: string;
  pincode: string;
  gstNumber: string;
  drugLicense: string;
  businessType: string;
  currentBrands?: string;
  annualTurnover?: string;
  investmentCapacity: string;
  warehouseArea?: string;
  salesForce?: string;
  message?: string;
  recaptchaToken?: string;
}

export interface DealerFormData {
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  city: string;
  address: string;
  pincode: string;
  gstNumber?: string;
  drugLicense: string;
  businessType: string;
  message?: string;
  recaptchaToken?: string;
}

export interface ProductInquiryFormData {
  productName: string;
  productId?: number;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message?: string;
  inquiryType: "wholesale" | "retail" | "sample" | "distribution";
  recaptchaToken?: string;
}

export interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  qualification: string;
  currentCompany?: string;
  currentCTC?: string;
  expectedCTC?: string;
  noticePeriod?: string;
  location: string;
  resumeUrl?: string;
  coverLetter?: string;
  recaptchaToken?: string;
}

// ==================== Team Types ====================
export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  department: string;
  order: number;
}

// ==================== Testimonial Types ====================
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  location: string;
  image?: string;
  rating: number;
  text: string;
  type: "doctor" | "distributor" | "dealer" | "pharmacy" | "customer";
  isVerified: boolean;
  createdAt: string;
}

// ==================== Career Types ====================
export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: string;
  qualification: string;
  salary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  deadline?: string;
  postedAt: string;
  isActive: boolean;
}

// ==================== Certificate Types ====================
export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  certificateNumber?: string;
  image: string;
  pdfUrl?: string;
  description: string;
  type: "gmp" | "iso" | "ayush" | "fssai" | "drug-license" | "other";
}

// ==================== Distributor Types ====================
export interface Distributor {
  id: number;
  name: string;
  city: string;
  state: string;
  phone: string;
  email?: string;
  coverageArea: string;
  isActive: boolean;
  tier: "master" | "regional" | "district";
}

// ==================== API Response Types ====================
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// ==================== SEO Types ====================
export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

// ==================== FAQ Types ====================
export interface Faq {
  id: number;
  question: string;
  answer: string;
  category?: string;
  order: number;
  isActive: boolean;
}

// ==================== Menu / Navigation Types ====================
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
  icon?: string;
}
