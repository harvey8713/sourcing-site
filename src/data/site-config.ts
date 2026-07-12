import type { NavLink, StatItem, TrustSignal } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Explore China', href: '/cities' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'Guides', href: '/guides' },
  { label: 'About', href: '/about' },
];

export const STATS: StatItem[] = [
  { value: '1,200+', label: 'Factories Audited' },
  { value: '60+', label: 'Chinese Cities Visited' },
  { value: '500+', label: 'Clients Worldwide' },
  { value: '98%', label: 'Client Satisfaction' },
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: 'On-the-Ground',
    description: 'We actually visit every factory. No remote verification, no virtual tours — boots on the ground.',
  },
  {
    title: 'Bilingual Team',
    description: 'Native Mandarin and English fluency. No lost-in-translation moments with factory management.',
  },
  {
    title: 'Structured Methodology',
    description: 'Our 5-step process is based on 15+ years of supply chain auditing experience.',
  },
  {
    title: 'Full Transparency',
    description: 'You receive raw photos, videos, and unedited factory assessments — not curated marketing.',
  },
];

export const CONTACT = {
  email: 'contact@onsite-sourcing.com',
  wechat: 'OnSiteSourcing',
  whatsapp: '+8613918318713',
};
