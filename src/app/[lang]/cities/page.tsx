import type { Metadata } from 'next';
import Link from 'next/link';
import CityGrid from '@/components/sections/CityGrid';
import CTASection from '@/components/sections/CTASection';
import { getCities } from '@/i18n/content';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/types';
import { localizedHref } from '@/i18n/localized-link';
import { loadDictionary, t } from '@/i18n/server';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  return pageMeta(
    t(dict, 'cities_page.meta_title'),
    t(dict, 'cities_page.meta_description'),
    [
      'China manufacturing cities',
      'China factory cities guide',
      'Shenzhen electronics hub',
      'Yiwu wholesale market',
      'China sourcing destinations',
    ],
    '/cities',
    lang,
  );
}

const FUN_FACTS = [
  {
    icon: '\u{1F9E6}',
    title: '1/3 of the world\'s socks',
    description: 'From one town: Zhuji, Zhejiang.',
  },
  {
    icon: '\u{1F004}',
    title: '80% of mahjong tiles',
    description: 'Dongyang dominates global production.',
  },
  {
    icon: '\u{1F50C}',
    title: '60,000+ electronics stalls',
    description: 'Huaqiangbei > Akihabara + Yongsan.',
  },
  {
    icon: '\u{1FA91}',
    title: '3 million sqm of furniture',
    description: 'Lecong, Foshan — 180+ showroom buildings.',
  },
  {
    icon: '\u{1F3EA}',
    title: '5 months to see it all',
    description: 'Yiwu: 75,000+ booths × 1 min each.',
  },
  {
    icon: '\u{2615}',
    title: '95% of Chinese coffee',
    description: 'Grown in Yunnan — 14th largest globally.',
  },
  {
    icon: '\u{1F4B0}',
    title: '30-40% cheaper',
    description: 'Specialty towns beat generalist factories.',
  },
  {
    icon: '\u{1F30F}',
    title: '50%+ global share',
    description: 'Some towns produce half the world\'s supply.',
  },
];

export default async function CitiesPage({ params }: Props) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  const cities = getCities(lang as Locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-white py-20 lg:py-24">
        {/* Wave decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full">
            <path
              fill="white"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {t(dict, 'cities_page.hero_badge', { count: cities.length })}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            {t(dict, 'cities_page.hero_title')}
          </h1>
          <p className="text-white/60 text-lg max-w-[520px] leading-relaxed">
            {t(dict, 'cities_page.hero_subtitle')}
          </p>
        </div>
      </section>

      {/* City Grid with filters */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CityGrid cities={cities} showFilters />
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.15em] mb-3 inline-block">
              {t(dict, 'cities_page.fun_facts_heading')}
            </span>
            <h2 className="text-3xl font-bold">
              {t(dict, 'cities_page.fun_facts_subtitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FUN_FACTS.map((fact, i) => (
              <div
                key={i}
                className="bg-bg rounded-xl border border-border p-6 transition-all hover:shadow-sm hover:border-transparent hover:-translate-y-0.5"
              >
                <div className="text-2xl mb-3">{fact.icon}</div>
                <h5 className="font-bold text-sm mb-2">{fact.title}</h5>
                <p className="text-text-secondary text-xs leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary text-white text-center rounded-2xl py-16 px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t(dict, 'cities_page.recommend_cta_title')}
            </h2>
            <p className="text-white/60 max-w-[520px] mx-auto mb-8 text-lg leading-relaxed">
              {t(dict, 'cities_page.recommend_cta_desc')}
            </p>
            <Link
              href={localizedHref(lang, '/contact')}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-hover transition"
            >
              {t(dict, 'cities_page.recommend_cta_button')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={t(dict, 'cities_page.cta_title')}
        description={t(dict, 'cities_page.cta_description')}
        cta={{ label: t(dict, 'cities_page.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
