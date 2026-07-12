import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import GuideCard from '@/components/cards/GuideCard';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { getGuides } from '@/i18n/content';
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
    t(dict, 'guides_page.meta_title'),
    t(dict, 'guides_page.meta_description'),
    [
      'China sourcing guide',
      'China factory visit tips',
      'China supplier verification guide',
      'Canton Fair guide',
    ],
    '/guides',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  const localizedGuides = getGuides(lang as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD(
              [
                { name: t(dict, 'guides_page.breadcrumb_home'), url: '/' },
                { name: t(dict, 'guides_page.breadcrumb_guides'), url: '/guides' },
              ],
              lang,
            ),
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { name: t(dict, 'guides_page.breadcrumb_home'), href: localizedHref(lang, '/') },
            { name: t(dict, 'guides_page.breadcrumb_guides'), href: localizedHref(lang, '/guides') },
          ]}
        />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">{t(dict, 'guides_page.title')}</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {t(dict, 'guides_page.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {localizedGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>

      <CTASection
        title={t(dict, 'guides_page.cta_title')}
        description={t(dict, 'guides_page.cta_description')}
        cta={{ label: t(dict, 'guides_page.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
