import { notFound } from 'next/navigation';
import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuides, getGuideBySlug } from '@/i18n/content';
import { getAllGuideSlugs } from '@/data/guides';
import { pageMeta } from '@/lib/seo';
import { breadcrumbLD } from '@/lib/structured-data';
import { SITE } from '@/lib/constants';
import { getGuideImage, unsplashUrl } from '@/lib/images';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CTASection from '@/components/sections/CTASection';
import type { Locale } from '@/i18n/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/types';
import { localizedHref } from '@/i18n/localized-link';
import { loadDictionary, t } from '@/i18n/server';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
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
  const guide = getGuideBySlug(slug, lang as Locale);
  if (!guide) return {};
  return pageMeta(guide.title, guide.excerpt, guide.seoKeywords, `/guides/${slug}`, lang);
}

// Simple markdown to JSX renderer
function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Heading ## or ###
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h2Match) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4">
          {renderInline(h2Match[1])}
        </h2>,
      );
      i++;
      continue;
    }
    if (h3Match) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold mt-8 mb-3">
          {renderInline(h3Match[1])}
        </h3>,
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.match(/^-\s+.+$/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^-\s+.+$/)) {
        items.push(lines[i].replace(/^-\s+/, '').trim());
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 text-text-secondary mb-4 ml-4">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s+.+$/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+.+$/)) {
        items.push(lines[i].replace(/^\d+\.\s+/, '').trim());
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-2 text-text-secondary mb-4 ml-4">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // Table
    if (line.trim().startsWith('|') && lines[i + 1] && lines[i + 1].trim().match(/^\|?\s*-+\s*\|/)) {
      const header = line.split('|').filter(Boolean).map((c) => c.trim());
      const rows: string[][] = [];
      i += 2; // skip separator
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].split('|').filter(Boolean).map((c) => c.trim()));
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-border text-sm">
            <thead className="bg-surface">
              <tr>
                {header.map((cell, idx) => (
                  <th key={idx} className="border border-border px-4 py-2 font-semibold text-left">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="border border-border px-4 py-2 text-text-secondary">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={key++} className="text-text-secondary leading-relaxed mb-4">
        {renderInline(line)}
      </p>,
    );
    i++;
  }

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default async function GuideDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (SUPPORTED_LOCALES as readonly string[]).includes(lang)
    ? (lang as Locale)
    : DEFAULT_LOCALE;
  const dict = await loadDictionary(locale);
  const guide = getGuideBySlug(slug, lang as Locale);
  if (!guide) notFound();

  const allGuides = getGuides(lang as Locale);
  const relatedGuides = allGuides.filter((g) => g.category === guide.category && g.slug !== guide.slug);
  const image = getGuideImage(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLD([
              { name: t(dict, 'guides_page.breadcrumb_home'), url: '/' },
              { name: t(dict, 'guides_page.breadcrumb_guides'), url: '/guides' },
              { name: guide.title, url: `/guides/${slug}` },
            ], lang),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.excerpt,
            datePublished: guide.date,
            author: { '@type': 'Organization', name: SITE.name },
          }),
        }}
      />

      <article>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb
            items={[
              { name: t(dict, 'guides_page.breadcrumb_home'), href: localizedHref(lang, '/') },
              { name: t(dict, 'guides_page.breadcrumb_guides'), href: localizedHref(lang, '/guides') },
              { name: guide.title, href: localizedHref(lang, `/guides/${slug}`) },
            ]}
          />
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative h-56 md:h-72 w-full rounded-xl overflow-hidden">
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

        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            {guide.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>{guide.readTime}</span>
            <span>{guide.date}</span>
          </div>
        </header>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <MarkdownContent content={guide.content} />
        </section>

        {relatedGuides.length > 0 && (
          <footer className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-bold mb-6 pt-10 border-t border-border">
              {t(dict, 'guide_detail.more_in', { category: guide.category })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={localizedHref(lang, `/guides/${related.slug}`)}
                  className="bg-surface rounded-xl border border-border p-5 hover:shadow-md transition group"
                >
                  <h3 className="font-semibold group-hover:text-primary">{related.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 line-clamp-2">{related.excerpt}</p>
                  <p className="text-xs text-text-secondary mt-3">{related.readTime}</p>
                </Link>
              ))}
            </div>
          </footer>
        )}
      </article>

      <CTASection
        title={t(dict, 'guide_detail.cta_title')}
        description={t(dict, 'guide_detail.cta_description')}
        cta={{ label: t(dict, 'guide_detail.cta_button'), href: localizedHref(lang, '/contact') }}
      />
    </>
  );
}
