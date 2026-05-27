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
  price: string;              // e.g. "$2,800"
  premiumPrice?: string;
  premiumLabel?: string;
  description: string;        // SEO meta (155-160 chars)
  longDescription: string;    // hero/marketing copy
  whatIsIncluded: string[];
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
