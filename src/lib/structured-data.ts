import { SITE } from './constants';
// Locale type removed — params are typed as string by Next.js

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbLD(items: BreadcrumbItem[], locale?: string) {
  const prefix = locale ? `/${locale}` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.domain}${prefix}${item.url}`,
    })),
  };
}

export function organizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    description: SITE.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@onsite-sourcing.com',
    },
  };
}

export function serviceLD(
  name: string,
  description: string,
  path: string,
  locale?: string,
) {
  const prefix = locale ? `/${locale}` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: SITE.name },
    areaServed: { '@type': 'Country', name: 'China' },
    url: `${SITE.domain}${prefix}${path}`,
  };
}

export function faqPageLD(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
