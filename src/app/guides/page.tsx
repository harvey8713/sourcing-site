import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import GuideCard from '@/components/cards/GuideCard';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { guides } from '@/data/guides';

export const metadata: Metadata = pageMeta(
  'China Sourcing Guides & Resources',
  'Practical guides on visiting Chinese factories, navigating trade shows, verifying suppliers, and sourcing products from China\'s key manufacturing regions.',
  [
    'China sourcing guide',
    'China factory visit tips',
    'China supplier verification guide',
    'Canton Fair guide',
  ],
  '/guides',
);

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'Guides', url: '/guides' },
            ]),
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Guides', href: '/guides' },
          ]}
        />

        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">China Sourcing Guides</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Practical, actionable guides based on 15+ years of on-the-ground China sourcing
            experience. From factory visit checklists to Canton Fair strategies — everything
            you need to source with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>

      <CTASection
        title="Need Hands-On Help?"
        description="Our guides cover the theory. Our sourcing trips handle the execution. Book a call to discuss your specific needs."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
