// Site Constants
export const SITE_CONFIG = {
  name: "Natural Homeo Research Laboratory",
  shortName: "NHRL",
  tagline: "Trusted Homeopathic Manufacturing & Distribution",
  description:
    "Research-driven homeopathic medicines for better healthcare. Manufacturer and distributor of quality homeopathic medicines across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.naturalhomeoresearch.com",
  logo: "/images/logo.png",
  logoWhite: "/images/logo-white.png",
  favicon: "/favicon.ico",
  ogImage: "/images/og-image.jpg",
  founded: 2010,
  gstin: "XXXXXXXXXXXXXXXXX",
  drugLicense: "XXXXXXXXXXXXXXXXX",
  address: {
    street: "Industrial Area, Sector XX",
    city: "Patna",
    state: "Bihar",
    pincode: "800001",
    country: "India",
    full: "Industrial Area, Sector XX, Patna, Bihar - 800001, India",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91-XXXXXXXXXX",
    phone2: "+91-XXXXXXXXXX",
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@naturalhomeoresearch.com",
    emailSales: "sales@naturalhomeoresearch.com",
    emailSupport: "support@naturalhomeoresearch.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX",
  },
  social: {
    facebook: "https://facebook.com/naturalhomeolab",
    instagram: "https://instagram.com/naturalhomeolab",
    twitter: "https://twitter.com/naturalhomeolab",
    linkedin: "https://linkedin.com/company/naturalhomeolab",
    youtube: "https://youtube.com/@naturalhomeolab",
  },
  hours: {
    weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
    sunday: "Sunday: Closed",
  },
};

// Stats
export const COMPANY_STATS = [
  { label: "Years Experience", value: 15, suffix: "+", icon: "calendar" },
  { label: "Product Range", value: 500, suffix: "+", icon: "package" },
  { label: "Dealers & Distributors", value: 1000, suffix: "+", icon: "users" },
  { label: "States Covered", value: 25, suffix: "+", icon: "map" },
  { label: "Happy Customers", value: 50000, suffix: "+", icon: "heart" },
  { label: "Manufacturing Capacity (Units/Month)", value: 100000, suffix: "+", icon: "factory" },
];

// Product Categories
export const PRODUCT_CATEGORIES = [
  {
    id: "mother-tinctures",
    name: "Mother Tinctures",
    slug: "mother-tinctures",
    description: "Pure herbal extracts prepared through the homeopathic process",
    icon: "droplets",
    color: "teal",
    count: 120,
    image: "/images/categories/mother-tinctures.jpg",
  },
  {
    id: "dilutions",
    name: "Dilutions",
    slug: "dilutions",
    description: "Classical homeopathic dilutions in various potencies",
    icon: "test-tube",
    color: "blue",
    count: 150,
    image: "/images/categories/dilutions.jpg",
  },
  {
    id: "bio-combination",
    name: "Bio Combinations",
    slug: "bio-combination",
    description: "Combinations of biochemic salts for targeted therapy",
    icon: "atom",
    color: "purple",
    count: 28,
    image: "/images/categories/bio-combinations.jpg",
  },
  {
    id: "syrups",
    name: "Syrups",
    slug: "syrups",
    description: "Pleasant-tasting homeopathic liquid formulations",
    icon: "bottle",
    color: "orange",
    count: 45,
    image: "/images/categories/syrups.jpg",
  },
  {
    id: "drops",
    name: "Drops",
    slug: "drops",
    description: "Concentrated homeopathic drops for quick relief",
    icon: "droplet",
    color: "cyan",
    count: 60,
    image: "/images/categories/drops.jpg",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    slug: "hair-care",
    description: "Natural hair care products with homeopathic principles",
    icon: "sparkles",
    color: "amber",
    count: 20,
    image: "/images/categories/hair-care.jpg",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    slug: "personal-care",
    description: "Natural personal care products with homeopathic formulations",
    icon: "heart",
    color: "pink",
    count: 25,
    image: "/images/categories/personal-care.jpg",
  },
  {
    id: "ointments",
    name: "Ointments",
    slug: "ointments",
    description: "Topical homeopathic ointments and creams",
    icon: "tube",
    color: "green",
    count: 35,
    image: "/images/categories/ointments.jpg",
  },
  {
    id: "tablets",
    name: "Tablets",
    slug: "tablets",
    description: "Convenient homeopathic tablets and pellets",
    icon: "pill",
    color: "indigo",
    count: 80,
    image: "/images/categories/tablets.jpg",
  },
  {
    id: "special-medicines",
    name: "Special Medicines",
    slug: "special-medicines",
    description: "Proprietary special homeopathic formulations",
    icon: "star",
    color: "yellow",
    count: 40,
    image: "/images/categories/special-medicines.jpg",
  },
];

// Navigation
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Research", href: "/research" },
      { label: "Quality Assurance", href: "/quality-assurance" },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Mother Tinctures", href: "/products?category=mother-tinctures" },
      { label: "Dilutions", href: "/products?category=dilutions" },
      { label: "Bio Combinations", href: "/products?category=bio-combination" },
      { label: "Syrups", href: "/products?category=syrups" },
      { label: "Drops", href: "/products?category=drops" },
      { label: "Hair Care", href: "/products?category=hair-care" },
      { label: "Ointments", href: "/products?category=ointments" },
    ],
  },
  {
    label: "Business",
    href: "/become-distributor",
    children: [
      { label: "Distributor Network", href: "/distributor-network" },
      { label: "Become a Distributor", href: "/become-distributor" },
      { label: "Become a Dealer", href: "/become-dealer" },
      { label: "Franchise Opportunity", href: "/franchise" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: "GMP Certified",
    full: "Good Manufacturing Practices",
    icon: "/images/certs/gmp.png",
    issuer: "Ministry of AYUSH",
    year: "2015",
  },
  {
    name: "ISO 9001:2015",
    full: "Quality Management System",
    icon: "/images/certs/iso.png",
    issuer: "Bureau Veritas",
    year: "2018",
  },
  {
    name: "AYUSH License",
    full: "Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy",
    icon: "/images/certs/ayush.png",
    issuer: "Ministry of AYUSH, Govt. of India",
    year: "2012",
  },
  {
    name: "FSSAI Certified",
    full: "Food Safety and Standards Authority of India",
    icon: "/images/certs/fssai.png",
    issuer: "FSSAI",
    year: "2016",
  },
  {
    name: "Drug License",
    full: "Manufacturing License",
    icon: "/images/certs/drug.png",
    issuer: "Central Drugs Standard Control Organisation",
    year: "2010",
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    icon: "microscope",
    title: "Research Based Products",
    description:
      "Every product is developed with scientific research and clinical validation",
    color: "teal",
  },
  {
    icon: "shield-check",
    title: "Quality Manufacturing",
    description:
      "GMP certified facility with state-of-the-art manufacturing equipment",
    color: "blue",
  },
  {
    icon: "truck",
    title: "Trusted Distribution",
    description:
      "Pan-India distribution network with reliable logistics partners",
    color: "green",
  },
  {
    icon: "indian-rupee",
    title: "Affordable Pricing",
    description:
      "Premium quality homeopathic medicines at competitive market prices",
    color: "amber",
  },
  {
    icon: "grid",
    title: "Wide Product Range",
    description: "500+ products covering all major homeopathic medicine categories",
    color: "purple",
  },
  {
    icon: "zap",
    title: "Fast Delivery",
    description: "Quick order processing and delivery across all states in India",
    color: "orange",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Homeopathic Doctor",
    location: "Patna, Bihar",
    image: "/images/testimonials/t1.jpg",
    rating: 5,
    text: "I have been using Natural Homeo Research Laboratory's products for the past 5 years. The quality is consistently excellent and my patients show remarkable improvement. Highly recommended.",
    type: "doctor",
  },
  {
    id: 2,
    name: "Suresh Enterprises",
    role: "Authorized Distributor",
    location: "Ranchi, Jharkhand",
    image: "/images/testimonials/t2.jpg",
    rating: 5,
    text: "Being a distributor of NHRL products for 3 years, I can confidently say their support system and profit margins are the best in the homeopathic industry.",
    type: "distributor",
  },
  {
    id: 3,
    name: "Medico Pharmacy",
    role: "Medical Store Owner",
    location: "Varanasi, UP",
    image: "/images/testimonials/t3.jpg",
    rating: 5,
    text: "NHRL products sell very well in our pharmacy. Customers keep coming back because the medicines are effective and the packaging is professional.",
    type: "pharmacy",
  },
  {
    id: 4,
    name: "Dr. Priya Sharma",
    role: "Homeopathic Consultant",
    location: "Delhi",
    image: "/images/testimonials/t4.jpg",
    rating: 5,
    text: "The mother tinctures from NHRL are exceptionally pure and potent. I prescribe them regularly and have seen excellent therapeutic results.",
    type: "doctor",
  },
  {
    id: 5,
    name: "Agarwal Medical Agency",
    role: "Regional Dealer",
    location: "Lucknow, UP",
    image: "/images/testimonials/t5.jpg",
    rating: 5,
    text: "Excellent product quality, timely delivery, and great customer support. The NHRL team is always responsive to our queries and requirements.",
    type: "dealer",
  },
];

// FAQ
export const FAQS = [
  {
    question: "What is Homeopathy?",
    answer:
      "Homeopathy is a natural medical system developed in the 18th century by German physician Dr. Samuel Hahnemann. It's based on the principle that 'like cures like' – a substance that causes symptoms in healthy people can cure similar symptoms in sick people when prepared in diluted form.",
  },
  {
    question: "Are homeopathic medicines safe?",
    answer:
      "Yes, homeopathic medicines are generally considered very safe. They are prepared through a process of dilution and succussion, making them non-toxic and free from side effects. They are safe for people of all ages including children, pregnant women, and the elderly.",
  },
  {
    question: "How long does it take for homeopathic treatment to show results?",
    answer:
      "The time varies depending on the condition being treated. Acute conditions like colds or infections may show improvement within hours to days. Chronic conditions may take weeks to months of treatment. Homeopathy treats the root cause, not just symptoms.",
  },
  {
    question: "Can homeopathic medicines be taken with allopathic medicines?",
    answer:
      "Generally, homeopathic medicines can be taken alongside conventional medicines. However, it's always advisable to consult with a qualified homeopathic doctor who can provide guidance based on your specific health condition.",
  },
  {
    question: "How should homeopathic medicines be stored?",
    answer:
      "Store homeopathic medicines away from direct sunlight, heat, strong odors, and electromagnetic fields. Keep them in a cool, dry place. Avoid storing near strong-smelling substances like camphor, eucalyptus, or coffee. Keep away from children.",
  },
  {
    question: "What is the difference between Mother Tincture and Dilutions?",
    answer:
      "Mother Tincture (Q) is the base preparation made from the original substance before any dilution. Dilutions (potencies like 6C, 30C, 200C) are preparations where the mother tincture has been diluted and succussed multiple times, making them more powerful energetically.",
  },
  {
    question: "How can I become a distributor of NHRL products?",
    answer:
      "You can apply for distributorship by filling out our online application form on the 'Become a Distributor' page, or by contacting our sales team directly. We require a valid drug license and GST registration for the distributorship.",
  },
  {
    question: "Do you provide training and marketing support to distributors?",
    answer:
      "Yes, we provide comprehensive support to our distributors including product training, marketing materials, promotional support, and dedicated sales assistance. We believe in growing together with our distribution partners.",
  },
];

// Blog Categories
export const BLOG_CATEGORIES = [
  "All",
  "Homeopathy",
  "Health Tips",
  "Research",
  "Disease Awareness",
  "Lifestyle",
  "Wellness",
];

// States of India
export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli",
  "Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry",
];

// Manufacturing Features
export const MANUFACTURING_FEATURES = [
  {
    title: "Raw Material Testing",
    description: "All raw materials are tested for purity, potency, and quality before use",
    icon: "flask",
  },
  {
    title: "GMP Compliant Facility",
    description: "Manufacturing done in GMP certified cleanroom environments",
    icon: "building",
  },
  {
    title: "Advanced Machinery",
    description: "State-of-the-art manufacturing equipment for consistent quality",
    icon: "settings",
  },
  {
    title: "Quality Control",
    description: "Multiple quality checks at every stage of production",
    icon: "check-circle",
  },
  {
    title: "Packaging Unit",
    description: "Modern packaging facility with tamper-proof sealing",
    icon: "package",
  },
  {
    title: "Cold Chain Storage",
    description: "Temperature-controlled warehousing for sensitive products",
    icon: "thermometer",
  },
];
