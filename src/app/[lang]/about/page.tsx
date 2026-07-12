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
import { localizedHref } from '@/i18n/localized-link';
import { loadDictionary, t } from '@/i18n/server';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES } from '@/i18n/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await loadDictionary(lang as Locale);
  return pageMeta(
    t(dict, 'about_page.meta_title'),
    t(dict, 'about_page.meta_description'),
    ['China sourcing agent', 'China factory audit team', 'supply chain due diligence company'],
    '/about',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await loadDictionary(lang as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD(
              [
                { name: t(dict, 'about_page.breadcrumb_home'), url: '/' },
                { name: t(dict, 'about_page.breadcrumb_about'), url: '/about' },
              ],
              lang,
            ),
          ),
        }}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: t(dict, 'about_page.breadcrumb_home'), href: localizedHref(lang, '/') },
              { name: t(dict, 'about_page.breadcrumb_about'), href: localizedHref(lang, '/about') },
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
            <h1 className="text-4xl font-bold mb-6">{t(dict, 'about_page.hero_title')}</h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t(dict, 'about_page.hero_subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t(dict, 'about_page.story_heading')}</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>{t(dict, 'about_page.story_p1')}</p>
              <p>{t(dict, 'about_page.story_p2')}</p>
              <p>{t(dict, 'about_page.story_p3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t(dict, 'about_page.team_heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t(dict, 'about_page.values_heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'about_page.value_1_title')}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t(dict, 'about_page.value_1_desc')}</p>
            </article>
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'about_page.value_2_title')}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t(dict, 'about_page.value_2_desc')}</p>
            </article>
            <article className="text-center">
              <div className="text-accent text-3xl mb-4">&#10003;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'about_page.value_3_title')}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t(dict, 'about_page.value_3_desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t(dict, 'about_page.testimonials_heading')}</h2>
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
        title={t(dict, 'about_page.cta_title')}
        description={t(dict, 'about_page.cta_description')}
        cta={{ label: t(dict, 'about_page.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
