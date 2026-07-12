import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import TrustBar from '@/components/sections/TrustBar';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CTASection from '@/components/sections/CTASection';
import CityCard from '@/components/cards/CityCard';
import { getServices, getFeaturedCities } from '@/i18n/content';
import { STATS, TRUST_SIGNALS } from '@/data/site-config';
import { PROCESS_STEPS } from '@/lib/constants';
import { localizedHref } from '@/i18n/localized-link';
import type { Locale } from '@/i18n/types';
import { loadDictionary, t } from '@/i18n/server';
import Link from 'next/link';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await loadDictionary(locale);
  const featuredServices = getServices(locale).slice(0, 6);
  const featuredCities = getFeaturedCities(locale).slice(0, 4);
  const cityCount = getFeaturedCities(locale).length;

  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        <HeroSection
          title={t(dict, 'home.hero_title')}
          tagline={t(dict, 'home.hero_tagline')}
          subtitle={t(dict, 'home.hero_subtitle')}
          cta={{ label: t(dict, 'home.hero_cta_explore'), href: localizedHref(lang, '/services') }}
          secondaryCta={{ label: t(dict, 'home.hero_cta_how'), href: localizedHref(lang, '/how-it-works') }}
        />
        <StatsBar stats={STATS} />
      </div>

      {/* Cities Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.15em] mb-3 inline-block">
              {t(dict, 'home.explore_china_label')}
            </span>
            <h2 className="text-3xl font-bold mb-3">{t(dict, 'home.cities_heading')}</h2>
            <p className="text-text-secondary max-w-[520px] mx-auto text-lg">
              {t(dict, 'home.cities_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredCities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>

          <div className="text-center mt-7">
            <Link
              href={localizedHref(lang, '/cities')}
              className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-2.5 hover:underline transition-all"
            >
              {t(dict, 'home.cities_link', { count: cityCount })}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.15em] mb-3 inline-block">
              {t(dict, 'home.services_label')}
            </span>
            <h2 className="text-3xl font-bold mb-3">{t(dict, 'home.services_heading')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t(dict, 'home.services_subtitle')}
            </p>
          </div>
          <ServiceGrid services={featuredServices} />
          <div className="text-center mt-10">
            <Link
              href={localizedHref(lang, '/services')}
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
            >
              {t(dict, 'home.services_cta')}
            </Link>
          </div>
        </div>
      </section>

      <TrustBar signals={TRUST_SIGNALS} />

      <ProcessTimeline
        steps={PROCESS_STEPS}
        title={t(dict, 'home.process_heading')}
        subtitle={t(dict, 'home.process_subtitle')}
      />

      <CTASection
        title={t(dict, 'home.cta_title')}
        description={t(dict, 'home.cta_description')}
        cta={{ label: t(dict, 'home.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
