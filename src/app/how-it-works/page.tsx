import UnsplashImage from '@/components/ui/UnsplashImage';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { PROCESS_STEPS } from '@/lib/constants';
import { IMAGE_HOW_IT_WORKS, unsplashUrl } from '@/lib/images';

export const metadata: Metadata = pageMeta(
  'How Our Sourcing Process Works',
  'Our 5-step due diligence process for China factory audits and supplier verification. From discovery call to negotiation handoff — see how we protect your supply chain.',
  [
    'China factory audit process',
    'supplier due diligence methodology',
    'China sourcing agent process',
    'factory verification steps',
  ],
  '/how-it-works',
);

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'How It Works', url: '/how-it-works' },
            ]),
          ),
        }}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'How It Works', href: '/how-it-works' },
            ]}
          />

          {/* Hero Image */}
          <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden mb-12">
            <UnsplashImage
              src={unsplashUrl(IMAGE_HOW_IT_WORKS.id, 1200)}
              alt={IMAGE_HOW_IT_WORKS.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">How Our Sourcing Process Works</h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our methodology is based on 15+ years of supply chain auditing experience.
              We don&apos;t just find factories — we verify them, document them, and help
              you build lasting supply chain relationships.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
                    {step.step}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Process Is Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-4">&#128269;</div>
              <h3 className="text-lg font-semibold mb-2">Beyond Alibaba</h3>
              <p className="text-white/70 text-sm">
                We use Chinese-language databases, trade networks, and local government
                registries to find factories that don&apos;t list on English platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">&#127970;</div>
              <h3 className="text-lg font-semibold mb-2">Physical Verification</h3>
              <p className="text-white/70 text-sm">
                We walk every production floor, inspect equipment, interview management,
                and document everything with photos and video.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">&#129309;</div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-white/70 text-sm">
                We don&apos;t disappear after the report. We support negotiations,
                facilitate introductions, and provide 30 days of post-trip communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Sourcing Journey?"
        description="Book a free discovery call. We'll learn about your product, budget, and timeline — then design a trip that fits."
        cta={{ label: 'Book a Discovery Call', href: '/contact' }}
      />
    </>
  );
}
