import type { Metadata } from 'next';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { organizationLD } from '@/lib/structured-data';
import { loadDictionary } from '@/i18n/server';
import { DictionaryProvider } from '@/i18n/dictionary-context';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? lang
    : DEFAULT_LOCALE;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://onsite-sourcing.com'),
    title: {
      default: 'OnSite Sourcing — Factory Audits & Supplier Verification in China',
      template: '%s | OnSite Sourcing',
    },
    description:
      'OnSite provides on-the-ground factory audits, supplier verification, and sourcing trips across 60+ manufacturing cities in China.',
    openGraph: {
      type: 'website',
      siteName: 'OnSite Sourcing',
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
    icons: {
      icon: '/icon.svg',
      apple: '/apple-icon.svg',
    },
    alternates: {
      languages: Object.fromEntries(SUPPORTED_LOCALES.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? lang
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationLD()),
        }}
      />
      <DictionaryProvider dictionary={dict}>
        <Navbar lang={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} dict={dict} />
      </DictionaryProvider>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
