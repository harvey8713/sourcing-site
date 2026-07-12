import UnsplashImage from '@/components/ui/UnsplashImage';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import { breadcrumbLD } from '@/lib/structured-data';
import { pageMeta } from '@/lib/seo';
import { PROCESS_STEPS } from '@/lib/constants';
import { IMAGE_HOW_IT_WORKS, unsplashUrl } from '@/lib/images';
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
    t(dict, 'how_it_works_page.meta_title'),
    t(dict, 'how_it_works_page.meta_description'),
    [
      'China factory audit process',
      'supplier due diligence methodology',
      'China sourcing agent process',
      'factory verification steps',
    ],
    '/how-it-works',
    lang,
  );
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function HowItWorksPage({
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
                { name: t(dict, 'how_it_works_page.breadcrumb_home'), url: '/' },
                { name: t(dict, 'how_it_works_page.breadcrumb_how'), url: '/how-it-works' },
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
              { name: t(dict, 'how_it_works_page.breadcrumb_home'), href: localizedHref(lang, '/') },
              { name: t(dict, 'how_it_works_page.breadcrumb_how'), href: localizedHref(lang, '/how-it-works') },
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
            <h1 className="text-4xl font-bold mb-6">{t(dict, 'how_it_works_page.hero_title')}</h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t(dict, 'how_it_works_page.hero_subtitle')}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t(dict, 'how_it_works_page.why_different_heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-4">&#128269;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'how_it_works_page.why_different_point_1_title')}</h3>
              <p className="text-white/70 text-sm">{t(dict, 'how_it_works_page.why_different_point_1_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">&#127970;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'how_it_works_page.why_different_point_2_title')}</h3>
              <p className="text-white/70 text-sm">{t(dict, 'how_it_works_page.why_different_point_2_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">&#129309;</div>
              <h3 className="text-lg font-semibold mb-2">{t(dict, 'how_it_works_page.why_different_point_3_title')}</h3>
              <p className="text-white/70 text-sm">{t(dict, 'how_it_works_page.why_different_point_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t(dict, 'how_it_works_page.cta_title')}
        description={t(dict, 'how_it_works_page.cta_description')}
        cta={{ label: t(dict, 'how_it_works_page.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
