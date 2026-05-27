import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import TrustBar from '@/components/sections/TrustBar';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { STATS, TRUST_SIGNALS } from '@/data/site-config';
import { PROCESS_STEPS } from '@/lib/constants';

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      <HeroSection
        title="On-the-Ground Factory Audits &amp; Sourcing Trips Across China"
        subtitle="We physically visit factories, verify suppliers, and build your supply chain in China — so you don't have to fly 6,000 miles to find out you picked the wrong partner."
        cta={{ label: 'Explore Services', href: '/services' }}
        secondaryCta={{ label: 'How It Works', href: '/how-it-works' }}
      />

      <StatsBar stats={STATS} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Services</h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            From Shenzhen electronics to Yunnan coffee origins — our sourcing trips cover every major
            Chinese manufacturing region and industry.
          </p>
          <ServiceGrid services={featuredServices} />
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-hover transition"
            >
              View All 13 Services
            </a>
          </div>
        </div>
      </section>

      <TrustBar signals={TRUST_SIGNALS} />

      <ProcessTimeline
        steps={PROCESS_STEPS}
        title="How We Work"
        subtitle="Our 5-step process ensures every factory is thoroughly vetted before you commit a single dollar."
      />

      <CTASection
        title="Ready to Find Your Factory?"
        description="Book a free 30-minute discovery call. Tell us what you're sourcing, and we'll design a trip that fits your timeline and budget."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
