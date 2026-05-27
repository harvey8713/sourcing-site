import { notFound } from 'next/navigation';
import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLD, serviceLD } from '@/lib/structured-data';
import { generateServiceSchema } from '@/schema/service-schema';
import { INDUSTRY_META } from '@/lib/constants';
import { getServiceImage, unsplashUrl } from '@/lib/images';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return pageMeta(service.title, service.description, service.seoKeywords, `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const industryMeta = INDUSTRY_META[service.industry];
  const image = getServiceImage(service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: service.title, url: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceLD(service.title, service.description, `/services/${service.slug}`)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
        }}
      />

      <article>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: service.title, href: `/services/${service.slug}` },
            ]}
          />
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
            <UnsplashImage
              src={unsplashUrl(image.id, 1200)}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Hero */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className={`h-3 w-full rounded-full mb-8 ${service.imageColor}`} />

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

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-6">
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

          <div className="flex items-end gap-4">
            <div>
              <span className="text-sm text-text-secondary block mb-0.5">Starting from</span>
              <span className="text-3xl font-bold text-primary">{service.price}</span>
            </div>
            {service.premiumPrice && (
              <div className="pb-1">
                <span className="text-sm text-text-secondary block mb-0.5">
                  {service.premiumLabel || 'Premium'}
                </span>
                <span className="text-xl font-semibold text-text-secondary">{service.premiumPrice}</span>
              </div>
            )}
          </div>
        </header>

        {/* Long Description */}
        {service.longDescription && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <p className="text-text-secondary leading-relaxed text-lg">{service.longDescription}</p>
          </section>
        )}

        {/* What's Included */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
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
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
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
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold mb-6">Highlights</h2>
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
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Suitable For
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
                  Not Suitable For
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
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
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

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-surface rounded-xl border border-border p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Interested in this service?</h2>
            <p className="text-text-secondary mb-6">
              Book a free discovery call and we&apos;ll design a trip tailored to your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
            >
              Get Started
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </article>

      <CTASection
        title="Ready to Find Your Supplier?"
        description="Book a free discovery call. We'll learn about your product and design a trip that fits."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
