import type { Metadata } from 'next';
import { SITE } from './constants';

export function baseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE.domain),
    title: {
      default: `${SITE.name} — ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description:
      'On-the-ground factory audits, supplier verification, and sourcing trips across China. We visit factories in Shenzhen, Guangzhou, Yiwu, and beyond so you don’t have to.',
    keywords: [
      'China sourcing agent',
      'China factory audit',
      'supplier verification China',
      'China sourcing trip',
      'on-site factory inspection',
    ],
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}

export function pageMeta(
  title: string,
  description: string,
  keywords: string[],
  path: string,
): Metadata {
  return baseMetadata({
    title,
    description,
    keywords,
    openGraph: { title, description, url: path },
    twitter: { title, description },
    alternates: { canonical: path },
  });
}
