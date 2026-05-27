import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import type { IndustryPage } from '@/types';
import { getIndustryImage, unsplashUrl } from '@/lib/images';

interface IndustryCardProps {
  industry: IndustryPage;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const image = getIndustryImage(industry.slug);

  return (
    <Link href={`/industries/${industry.slug}`}>
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
          {/* Header with icon and name */}
          <div className="mb-3">
            <div className="flex items-center gap-3">
              {industry.icon && (
                <span className="text-2xl">{industry.icon}</span>
              )}
              <h3 className="text-lg font-semibold text-text">{industry.name}</h3>
            </div>
            {/* Colored underline */}
            <div
              className="mt-2 h-1 w-12 rounded-full"
              style={{ backgroundColor: industry.color }}
            />
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-text-secondary">
            {industry.description}
          </p>

          {/* Link hint */}
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
            Explore industries
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
