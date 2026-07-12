import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import UnsplashImage from '@/components/ui/UnsplashImage';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import ServiceCard from '@/components/cards/ServiceCard';
import { getCities, getServices, getCityBySlug } from '@/i18n/content';
import { cities as baseCities, getCityServiceMatchNames } from '@/data/cities';
import { getCityImage, unsplashUrl } from '@/lib/images';
import { PROCESS_STEPS } from '@/lib/constants';
import { pageMeta } from '@/lib/seo';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES } from '@/i18n/types';
import { localizedHref } from '@/i18n/localized-link';
import { loadDictionary, t } from '@/i18n/server';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const entries: { lang: Locale; slug: string }[] = [];
  for (const lang of SUPPORTED_LOCALES) {
    for (const city of baseCities) {
      entries.push({ lang, slug: city.slug });
    }
  }
  return entries;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const city = getCityBySlug(slug, lang as Locale);
  if (!city) return { title: 'City Not Found' };
  return pageMeta(
    `${city.name} Manufacturing Guide — SourcingSite`,
    city.description,
    [`${city.name} manufacturing`, `${city.name} factories`, `source products in ${city.name}`],
    `/cities/${slug}`,
    lang,
  );
}

export default async function CityDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const city = getCityBySlug(slug, lang as Locale);
  if (!city) notFound();

  const dict = await loadDictionary(lang);

  const image = getCityImage(slug);
  const matchNames = getCityServiceMatchNames(slug, city.name);
  const allServices = getServices(lang as Locale);
  const relatedServices = allServices.filter((s) =>
    s.cities.some((c) => matchNames.some((m) => c.toLowerCase().includes(m.toLowerCase()))),
  );

  const allCities = getCities(lang as Locale);
  const nearbyCities = allCities
    .filter((c) => c.slug !== slug && c.region === city.region)
    .slice(0, 3);

  return (
    <article>
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
        <Breadcrumb
          items={[
            { name: t(dict, 'common.breadcrumb_home'), href: localizedHref(lang, '/') },
            { name: t(dict, 'nav.links.cities'), href: localizedHref(lang, '/cities') },
            { name: city.name, href: localizedHref(lang, `/cities/${slug}`) },
          ]}
        />
      </div>

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-10">
        <div className="relative rounded-[20px] overflow-hidden h-[300px] md:h-[420px] flex items-end">
          <UnsplashImage
            src={unsplashUrl(image.id, 1200)}
            alt={image.alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/5" />
          <div className="relative z-10 p-8 md:p-12 w-full">
            <div className="flex gap-2.5 mb-4 flex-wrap">
              <span className="backdrop-blur-sm bg-white/[0.15] text-white text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-full">
                {city.badge}
              </span>
              <span className="backdrop-blur-sm bg-white/[0.15] text-white text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-full">
                {city.region}
              </span>
              <span className="backdrop-blur-sm bg-white/[0.15] text-white text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-full">
                {t(dict, 'city_detail.hero_industries_badge', { count: city.industries.length })}
              </span>
            </div>
            <h1 className="text-[2rem] md:text-[2.6rem] font-extrabold text-white leading-tight mb-3">
              {city.name}
            </h1>
            <p className="text-white/70 text-base md:text-[1.05rem] max-w-[600px]">
              {city.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">

          {/* ═══ LEFT COLUMN ═══ */}
          <div className="[&>section]:mb-10">
            {/* ── Overview ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.overview')}
              </h2>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed">
                {city.description}
              </p>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed mt-3">
                {city.longDescription}
              </p>
            </section>

            {/* ── Key Industries ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.key_industries')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {city.industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-start gap-2.5 px-4 py-3 bg-white border border-border rounded-lg text-[0.9rem]"
                  >
                    <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                    {industry}
                  </div>
                ))}
              </div>
            </section>

            {/* ── How We Source Here ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.how_we_source', { city: city.name })}
              </h2>
              <div className="flex flex-col gap-0">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.step}
                    className={`flex gap-5 py-5 ${i < PROCESS_STEPS.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <div className="w-[42px] h-[42px] bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-[1.1rem] shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1">{step.title}</h4>
                      <p className="text-[0.9rem] text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Key Highlights ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.key_highlights')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {city.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-[18px] sm:p-5 bg-[#FDF6E8] border border-primary/[0.15] rounded-lg"
                  >
                    <div className="text-xl mb-1.5">{h.icon}</div>
                    <h5 className="text-[0.9rem] font-bold mb-1">{h.title}</h5>
                    <p className="text-[0.82rem] text-text-secondary">{h.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Who This Is For ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.who_this_is_for')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#E8F5E9] border border-accent/20">
                  <h5 className="text-[0.9rem] font-bold mb-3 flex items-center gap-2">
                    ✓ {t(dict, 'city_detail.great_for')}
                  </h5>
                  <ul className="list-none flex flex-col gap-2">
                    {city.suitableFor.map((item, i) => (
                      <li key={i} className="text-[0.88rem] text-text-secondary leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-[#FDEDEC] border border-red-500/20">
                  <h5 className="text-[0.9rem] font-bold mb-3 flex items-center gap-2">
                    ✗ {t(dict, 'city_detail.not_ideal_for')}
                  </h5>
                  <ul className="list-none flex flex-col gap-2">
                    {city.notSuitableFor.map((item, i) => (
                      <li key={i} className="text-[0.88rem] text-text-secondary leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 className="text-[1.35rem] font-bold mb-4 pb-2.5 border-b-2 border-primary inline-block">
                {t(dict, 'city_detail.faq')}
              </h2>
              <FAQAccordion items={city.faq} />
            </section>
          </div>

          {/* ═══ SIDEBAR ═══ */}
          <aside className="bg-white border border-border rounded-[20px] p-7 shadow-lg sticky top-[90px]">
            <div className="text-[1.8rem] font-extrabold text-text mb-1">{city.name}</div>
            <div className="text-[0.85rem] text-text-secondary mb-5">
              {t(dict, 'city_detail.sidebar_region_info', { region: city.region, count: city.industries.length })}
            </div>

            <div className="h-px bg-border my-4" />

            <div className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-text-secondary">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <strong className="text-text font-semibold">{city.region}</strong>
            </div>
            <div className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-text-secondary">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <strong className="text-text font-semibold">{t(dict, 'city_detail.sidebar_key_industries', { count: city.industries.length })}</strong>
            </div>
            <div className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-text-secondary">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t(dict, 'city_detail.sidebar_multiday')}
            </div>
            <div className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-text-secondary">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {t(dict, 'city_detail.sidebar_bilingual')}
            </div>

            <Link
              href={localizedHref(lang, '/contact')}
              className="block w-full text-center bg-primary text-white px-8 py-4 rounded-[10px] font-semibold text-base hover:bg-primary-hover transition mt-4"
            >
              {t(dict, 'city_detail.book_trip')}
            </Link>
            <p className="text-center text-[0.78rem] text-text-secondary mt-3.5">
              {t(dict, 'city_detail.free_consultation')}
            </p>

            {nearbyCities.length > 0 && (
              <>
                <div className="h-px bg-border my-4" />
                <div className="pt-3">
                  <div className="text-[0.9rem] font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {t(dict, 'city_detail.also_explore')}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {nearbyCities.map((c) => (
                      <Link
                        key={c.slug}
                        href={localizedHref(lang, `/cities/${c.slug}`)}
                        className="bg-[#FDF6E8] border border-primary/[0.15] text-primary text-[0.78rem] font-semibold px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="h-px bg-border my-4" />

            <div className="flex flex-col gap-2 text-[0.9rem] text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span> {t(dict, 'city_detail.sidebar_stat_1')}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span> {t(dict, 'city_detail.sidebar_stat_2')}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span> {t(dict, 'city_detail.sidebar_stat_3')}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.15em] mb-3 inline-block">
                {t(dict, 'city_detail.service_badge', { city: city.name })}
              </span>
              <h2 className="text-3xl font-bold mb-3">
                {t(dict, 'city_detail.service_heading', { city: city.name })}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {t(dict, 'city_detail.service_subtitle', { city: city.name })}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={t(dict, 'city_detail.cta_title', { city: city.name })}
        description={t(dict, 'city_detail.cta_description', { city: city.name })}
        cta={{ label: t(dict, 'common.cta_book_call'), href: localizedHref(lang, '/contact') }}
      />
    </article>
  );
}
