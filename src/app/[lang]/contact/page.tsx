import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/types';
import { loadDictionary, t } from '@/i18n/server';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  return pageMeta(
    t(dict, 'contact_page.meta_title'),
    t(dict, 'contact_page.meta_description'),
    [
      'contact China sourcing agent',
      'hire China factory auditor',
      'China sourcing trip inquiry',
    ],
    '/contact',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ContactPageClient lang={lang} />;
}
