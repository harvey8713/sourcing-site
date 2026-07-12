// ─── Industry Tag ──────────────────────────────────────────
export type IndustrySlug =
  | 'electronics'
  | 'consumer-goods'
  | 'apparel-textile'
  | 'furniture'
  | 'food-beverage'
  | 'monopoly-towns'
  | 'canton-fair';

export interface Industry {
  slug: IndustrySlug;
  name: string;
  description: string;
  color: string;       // hex
  bgColor: string;     // light bg
  textColor: string;   // text on light bg
  icon: string;        // emoji (keep simple, no icon lib)
}

// ─── Service ──────────────────────────────────────────────
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceTier {
  slug: 'lite' | 'standard' | 'premium';
  name: string;          // "LITE"
  label: string;         // "Basic guided access"
  price: string;         // "$4,999"
  includes: string[];    // tier-specific what's included
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  category: string;          // short label e.g. "Electronics Sprint"
  industry: IndustrySlug;
  location: string;
  cities: string[];
  durationDays: number;
  durationLabel: string;      // e.g. "5 days"
  price: string;              // STANDARD tier price (backward compat)
  tiers: [ServiceTier, ServiceTier, ServiceTier]; // LITE | STANDARD | PREMIUM
  description: string;        // SEO meta (155-160 chars)
  longDescription: string;    // hero/marketing copy
  whatIsIncluded: string[];   // STANDARD tier inclusions (backward compat)
  process: { step: number; title: string; description: string }[];
  highlights: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  seoKeywords: string[];
  faq: ServiceFAQ[];
  imageColor: string;         // placeholder bg colour (Tailwind class)
}

// ─── Guide ────────────────────────────────────────────────
export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string;           // markdown
  category: string;
  readTime: string;          // e.g. "8 min read"
  date: string;              // ISO date
  seoKeywords: string[];
}

// ─── Industry Page Data ───────────────────────────────────
export interface IndustryPage {
  slug: IndustrySlug;
  name: string;
  description: string;
  color: string;
  icon?: string;
  heroCopy: string;
  keyRegions: { name: string; description: string }[];
  whatWeAudit: string[];
  caseSummary: string;
  seoKeywords: string[];
  relatedServices: string[]; // service slugs
}

// ─── FAQ ──────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ─── Team ─────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string; // avatar placeholder
}

// ─── Site Config ──────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TrustSignal {
  title: string;
  description: string;
}

// ─── City ────────────────────────────────────────────────
export interface CityHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface City {
  slug: string;
  name: string;
  region: string;
  subtitle: string;
  description: string;
  longDescription: string;
  industries: string[];
  serviceCount: number;
  gradient: string;         // CSS gradient for card background
  badge: string;            // badge text on card
  categories: string[];     // filter categories e.g. 'electronics', 'textile'
  highlights: CityHighlight[];
  suitableFor: string[];
  notSuitableFor: string[];
  faq: CityFAQ[];
}
