import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import IndustryCard from '@/components/cards/IndustryCard';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { industries } from '@/data/industries';

export const metadata: Metadata = pageMeta(
  'Industries We Serve',
  'Expert factory audits and supplier verification across electronics, consumer goods, apparel, furniture, food & beverage, and specialized manufacturing in China.',
  [
    'China industry sourcing',
    'electronics factory audit China',
    'China manufacturing industries',
    'China supplier verification by industry',
  ],
  '/industries',
);

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'Industries', url: '/industries' },
            ]),
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Industries', href: '/industries' },
          ]}
        />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We cover every major Chinese manufacturing vertical — from Shenzhen electronics
            to Yunnan specialty coffee. Each industry page details our audit methodology,
            key manufacturing regions, and relevant services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </div>

      <CTASection
        title="Not Sure Which Industry Fits?"
        description="Book a free discovery call and we'll help you identify the right manufacturing region and suppliers for your product."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
