import { notFound } from 'next/navigation';
import UnsplashImage from '@/components/ui/UnsplashImage';
import type { Metadata } from 'next';
import { getIndustryBySlug, getAllIndustrySlugs } from '@/data/industries';
import { getServicesByIndustry } from '@/data/services';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLD } from '@/lib/structured-data';
import { getIndustryImage, unsplashUrl } from '@/lib/images';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ServiceCard from '@/components/cards/ServiceCard';
import CTASection from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ industry: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);
  if (!data) return {};
  return pageMeta(data.name, data.description, data.seoKeywords, `/industries/${industry}`);
}

export default async function IndustryDetailPage({ params }: Props) {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);
  if (!data) notFound();

  const relatedServices = getServicesByIndustry(industry);
  const image = getIndustryImage(industry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'Industries', url: '/industries' },
              { name: data.name, url: `/industries/${industry}` },
            ]),
          ),
        }}
      />

      <article>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Industries', href: '/industries' },
              { name: data.name, href: `/industries/${industry}` },
            ]}
          />
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden">
            <UnsplashImage
              src={unsplashUrl(image.id, 1200)}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>

        {/* Hero */}
        <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold" style={{ color: data.color }}>
              {data.name}
            </h1>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">{data.heroCopy}</p>
        </header>

        {/* Key Regions */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold mb-6">Key Manufacturing Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.keyRegions.map((region) => (
              <div
                key={region.name}
                className="bg-surface rounded-xl border border-border p-5"
                style={{ borderLeftWidth: '4px', borderLeftColor: data.color }}
              >
                <h3 className="font-semibold mb-2">{region.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{region.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Audit */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold mb-6">What We Audit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.whatWeAudit.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="h-5 w-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        {data.caseSummary && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <h2 className="text-2xl font-bold mb-6">Case Study</h2>
            <div className="bg-surface rounded-xl border border-border p-6 lg:p-8">
              <p className="text-text-secondary leading-relaxed">{data.caseSummary}</p>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </section>
        )}
      </article>

      <CTASection
        title={`Ready to Source ${data.name} Products?`}
        description="Book a free discovery call and we'll design a trip to the right manufacturing regions for your product."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
