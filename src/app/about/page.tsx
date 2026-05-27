import UnsplashImage from '@/components/ui/UnsplashImage';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import TeamCard from '@/components/cards/TeamCard';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { team } from '@/data/team';
import { testimonials } from '@/data/testimonials';
import { IMAGE_ABOUT_HERO, unsplashUrl } from '@/lib/images';

export const metadata: Metadata = pageMeta(
  'About Us — China Sourcing & Factory Audit Experts',
  'Meet the team behind Supply Chain Due Diligence. 15+ years of on-the-ground China sourcing experience, 1,200+ factories audited across 60+ Chinese cities.',
  ['China sourcing agent', 'China factory audit team', 'supply chain due diligence company'],
  '/about',
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
            ]),
          ),
        }}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
            ]}
          />

          {/* Hero Image */}
          <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden mb-10">
            <UnsplashImage
              src={unsplashUrl(IMAGE_ABOUT_HERO.id, 1200)}
              alt={IMAGE_ABOUT_HERO.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              We&apos;re a team of supply chain professionals who believe that sourcing from
              China shouldn&apos;t be a gamble. We physically visit factories so you don&apos;t have to.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Supply Chain Due Diligence was founded in 2018 after our founder, Michael Chen,
                spent a decade watching international buyers make the same expensive mistakes:
                trusting Alibaba profiles, ordering from unverified suppliers, and discovering
                quality issues only after containers arrived at port.
              </p>
              <p>
                We built a team of bilingual sourcing professionals who combine deep knowledge
                of Chinese manufacturing with rigorous due diligence methodology. Every factory
                we recommend has been physically visited, verified, and documented.
              </p>
              <p>
                Today, we&apos;ve audited over 1,200 factories across 60+ Chinese cities, serving
                500+ clients worldwide — from hardware startups in Silicon Valley to fashion
                brands in London and furniture retailers in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">Radical Transparency</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We show you the real factory — not staged photos or curated tours.
                If a factory has issues, you&apos;ll know about them.
              </p>
            </article>
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">Zero Commission</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We are 100% paid by our clients. We never accept kickbacks, commissions,
                or referral fees from factories. Our only interest is yours.
              </p>
            </article>
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">Boots on the Ground</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                No remote verification. No virtual tours. We believe that supplier
                due diligence requires physical presence — and we deliver it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-surface rounded-xl border border-border p-6">
                <p className="text-text-secondary italic mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-text-secondary text-sm">{t.company}</p>
                  <p className="text-primary text-xs mt-1">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work With Our Team"
        description="Let our experienced sourcing professionals find and verify your next manufacturing partner in China."
        cta={{ label: 'Get Started', href: '/contact' }}
      />
    </>
  );
}
