import { notFound } from 'next/navigation';
import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { getServiceBySlug as getLocalizedService } from '@/i18n/content';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLD, serviceLD } from '@/lib/structured-data';
import { generateServiceSchema } from '@/schema/service-schema';
import { INDUSTRY_META } from '@/lib/constants';
import { getServiceImage, unsplashUrl } from '@/lib/images';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES } from '@/i18n/types';
import { localizedHref } from '@/i18n/localized-link';
import { loadDictionary, t } from '@/i18n/server';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const entries: { lang: Locale; slug: string }[] = [];
  for (const lang of SUPPORTED_LOCALES) {
    for (const slug of slugs) {
      entries.push({ lang, slug });
    }
  }
  return entries;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const service = getLocalizedService(slug, lang as Locale);
  if (!service) return { title: 'Service Not Found' };
  return pageMeta(service.title, service.description, service.seoKeywords, `/services/${slug}`, lang);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const service = getLocalizedService(slug, lang as Locale);
  if (!service) notFound();

  const industryMeta = INDUSTRY_META[service.industry];
  const image = getServiceImage(service.slug);
  const dict = await loadDictionary(lang as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: t(dict, 'common.breadcrumb_home'), url: '/' },
              { name: t(dict, 'services_list_page.breadcrumb_services'), url: '/services' },
              { name: service.title, url: `/services/${service.slug}` },
            ], lang),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceLD(service.title, service.description, `/services/${service.slug}`, lang)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />

      <article>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb
            items={[
              { name: t(dict, 'common.breadcrumb_home'), href: localizedHref(lang, '/') },
              { name: t(dict, 'services_list_page.breadcrumb_services'), href: localizedHref(lang, '/services') },
              { name: service.title, href: localizedHref(lang, `/services/${service.slug}`) },
            ]}
          />
        </div>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
            <UnsplashImage
              src={unsplashUrl(image.id, 1200)}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Two-column layout: left content + right sticky sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Left Column: Content ── */}
            <div className="lg:col-span-2">
              {/* Industry badge */}
              {industryMeta && (
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4"
                  style={{ backgroundColor: industryMeta.bgColor, color: industryMeta.color }}
                >
                  {industryMeta.icon} {industryMeta.name}
                </span>
              )}

              <h1 className="text-3xl lg:text-4xl font-bold mb-3">{service.title}</h1>
              <p className="text-lg text-text-secondary mb-6">{service.subtitle}</p>

              {/* Location + Duration */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-8">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {service.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.durationLabel}
                </span>
              </div>

              {/* Color bar */}
              <div className={`h-2 w-full rounded-full mb-10 ${service.imageColor}`} />

              {/* Long Description */}
              {service.longDescription && (
                <section className="pb-12">
                  <p className="text-text-secondary leading-relaxed text-lg">{service.longDescription}</p>
                </section>
              )}

              {/* What's Included */}
              <section className="pb-12">
                <h2 className="text-2xl font-bold mb-6">{t(dict, 'service_detail.whats_included')}</h2>
                <div className="bg-surface rounded-xl border border-border p-6 lg:p-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.whatIsIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Our Process */}
              <section className="pb-12">
                <h2 className="text-2xl font-bold mb-6">{t(dict, 'service_detail.our_process')}</h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 bg-surface rounded-xl border border-border p-5">
                      <span className="w-9 h-9 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-text-secondary">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section className="pb-12">
                <h2 className="text-2xl font-bold mb-6">{t(dict, 'service_detail.highlights')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="bg-surface rounded-xl border border-border p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Suitable For / Not Suitable For */}
              <section className="pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface rounded-xl border border-border p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t(dict, 'service_detail.suitable_for')}
                    </h2>
                    <ul className="space-y-2">
                      {service.suitableFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <span className="text-accent font-bold">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.notSuitableFor.length > 0 && (
                    <div className="bg-surface rounded-xl border border-border p-6">
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t(dict, 'service_detail.not_suitable_for')}
                      </h2>
                      <ul className="space-y-2">
                        {service.notSuitableFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-secondary">
                            <span className="text-red-400 font-bold">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              {/* Service FAQ */}
              {service.faq.length > 0 && (
                <section className="pb-12">
                  <h2 className="text-2xl font-bold mb-6">{t(dict, 'service_detail.faq')}</h2>
                  <div className="space-y-4">
                    {service.faq.map((item, i) => (
                      <div key={i} className="bg-surface rounded-xl border border-border p-5">
                        <h3 className="font-semibold mb-2">{item.question}</h3>
                        <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* ── Right Column: Tier Pricing Sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Tier comparison cards */}
                <div className="space-y-3">
                  {service.tiers.map((tier, i) => {
                    const isRecommended = tier.slug === 'standard';
                    const isPremium = tier.slug === 'premium';
                    return (
                      <div
                        key={tier.slug}
                        className={`rounded-xl border p-5 ${
                          isRecommended
                            ? 'border-primary ring-2 ring-primary/20 bg-primary/[0.02]'
                            : 'border-border bg-white'
                        }`}
                      >
                        {isRecommended && (
                          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 inline-block">
                            {t(dict, 'service_detail.most_popular')}
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-base font-bold">{tier.name}</h3>
                          <span className="text-[0.78rem] text-text-secondary ml-2 text-right shrink-0">
                            {tier.label}
                          </span>
                        </div>
                        <div className="mb-4">
                          <span className="text-2xl font-extrabold text-text">{tier.price}</span>
                          <span className="text-sm text-text-secondary ml-1">{t(dict, 'service_detail.per_trip')}</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {tier.includes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-[0.82rem] text-text-secondary leading-snug">
                              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={localizedHref(lang, '/contact')}
                          className={`block w-full text-center px-6 py-2.5 rounded-lg text-sm font-semibold transition ${
                            isRecommended
                              ? 'bg-primary text-white hover:bg-primary-hover'
                              : isPremium
                                ? 'bg-text text-white hover:bg-text/80'
                                : 'bg-border text-text-secondary hover:bg-border/70'
                          }`}
                        >
                          {isRecommended ? t(dict, 'service_detail.book_discovery') : t(dict, 'service_detail.get_started')}
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Why book with us */}
                <div className="bg-bg rounded-xl border border-border p-5">
                  <h4 className="font-semibold text-sm mb-3">{t(dict, 'service_detail.why_book_us')}</h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-xs text-text-secondary">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t(dict, 'service_detail.sidebar_stat_1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-text-secondary">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t(dict, 'service_detail.sidebar_stat_2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-text-secondary">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t(dict, 'service_detail.sidebar_stat_3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-text-secondary">
                      <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t(dict, 'service_detail.sidebar_stat_4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTASection
        title={t(dict, 'home.cta_title')}
        description={t(dict, 'home.cta_description')}
        cta={{ label: t(dict, 'common.cta_book_call'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
