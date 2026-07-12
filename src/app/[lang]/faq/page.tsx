import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { localizedHref } from '@/i18n/localized-link';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES } from '@/i18n/types';
import FAQPageClient from './FAQPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(
    'Frequently Asked Questions',
    'Everything you need to know about our sourcing and factory audit services. Pricing, process, regions covered, and more.',
    [
      'China sourcing FAQ',
      'factory audit questions',
      'sourcing trip FAQ',
      'China supplier verification FAQ',
    ],
    '/faq',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <FAQPageClient lang={lang} />;
}
