'use client';

import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Guide } from '@/types';
import { getGuideImage, unsplashUrl } from '@/lib/images';
import { localizedHref } from '@/i18n/localized-link';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const { lang } = useParams();
  const formattedDate = new Date(guide.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const image = getGuideImage(guide.slug);

  return (
    <Link href={localizedHref(lang as string, `/guides/${guide.slug}`)}>
      <article className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm transition hover:shadow-md">
        {/* Image thumbnail */}
        <div className="relative h-44 w-full bg-secondary/5">
          <UnsplashImage
            src={unsplashUrl(image.id, 600)}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          {/* Category badge */}
          <span className="inline-block rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary">
            {guide.category}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-lg font-semibold text-text">{guide.title}</h3>

          {/* Excerpt */}
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {guide.excerpt}
          </p>

          {/* Read time + date */}
          <div className="mt-4 flex items-center justify-between text-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {guide.readTime}
            </span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
