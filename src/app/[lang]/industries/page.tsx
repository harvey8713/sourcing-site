import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import IndustryCard from '@/components/cards/IndustryCard';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { getIndustries } from '@/i18n/content';
import { localizedHref } from '@/i18n/localized-link';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/types';
import { loadDictionary, t } from '@/i18n/server';

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
    t(dict, 'industries_page.meta_title'),
    t(dict, 'industries_page.meta_description'),
    [
      'China industry sourcing',
      'electronics factory audit China',
      'China manufacturing industries',
      'China supplier verification by industry',
    ],
    '/industries',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  const localizedIndustries = getIndustries(lang as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD(
              [
                { name: t(dict, 'industries_page.breadcrumb_home'), url: '/' },
                { name: t(dict, 'industries_page.breadcrumb_industries'), url: '/industries' },
              ],
              lang,
            ),
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { name: t(dict, 'industries_page.breadcrumb_home'), href: localizedHref(lang, '/') },
            { name: t(dict, 'industries_page.breadcrumb_industries'), href: localizedHref(lang, '/industries') },
          ]}
        />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">{t(dict, 'industries_page.title')}</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {t(dict, 'industries_page.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {localizedIndustries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </div>

      <CTASection
        title={t(dict, 'industries_page.cta_title')}
        description={t(dict, 'industries_page.cta_description')}
        cta={{ label: t(dict, 'industries_page.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
