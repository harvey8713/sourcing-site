import type { Metadata } from 'next';
import { SITE } from './constants';
import { SUPPORTED_LOCALES } from '@/i18n/types';
const LOCALE_OG_MAP: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  ko: 'ko_KR',
  ru: 'ru_RU',
};

export function baseMetadata(
  locale: string = 'en',
  overrides: Partial<Metadata> = {}
): Metadata {
  return {
    metadataBase: new URL(SITE.domain),
    title: {
      default: `${SITE.name} — ${SITE.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description:
      'OnSite — your eyes inside Chinese factories. Factory audits, supplier verification, and guided sourcing trips across China.',
    keywords: [
      'China sourcing agent',
      'China factory audit',
      'supplier verification China',
      'China sourcing trip',
      'on-site factory inspection',
      'China factory tour',
      'sourcing trip China',
    ],
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: LOCALE_OG_MAP[locale] || 'en_US',
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
  locale: string = 'en',
): Metadata {
  const localizedPath = `/${locale}${path}`;

  return baseMetadata(locale, {
    title,
    description,
    keywords,
    openGraph: { title, description, url: localizedPath },
    twitter: { title, description },
    alternates: {
      canonical: localizedPath,
      languages: Object.fromEntries(
        SUPPORTED_LOCALES.map((l) => [l, `/${l}${path}`])
      ),
    },
  });
}
