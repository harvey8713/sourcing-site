import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import type { Service } from '@/types';
import { INDUSTRY_META } from '@/lib/constants';
import { getServiceImage, unsplashUrl } from '@/lib/images';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const industryMeta = INDUSTRY_META[service.industry];
  const image = getServiceImage(service.slug);

  return (
    <Link href={`/services/${service.slug}`}>
      <article className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm transition hover:shadow-md">
        {/* Image thumbnail */}
        <div className="relative h-48 w-full bg-secondary/5">
          <UnsplashImage
            src={unsplashUrl(image.id, 600)}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5 space-y-3">
          {/* Industry badge */}
          {industryMeta && (
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: industryMeta.bgColor,
                color: industryMeta.color,
              }}
            >
              {industryMeta.name}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-text">{service.title}</h3>

          {/* Subtitle */}
          <p className="text-sm text-text-secondary line-clamp-2">
            {service.subtitle}
          </p>

          {/* Location + Duration */}
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            {service.location && (
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {service.location}
              </span>
            )}
            {service.durationLabel && (
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {service.durationLabel}
              </span>
            )}
          </div>

          {/* Price */}
          {service.price && (
            <p className="text-lg font-bold text-primary">{service.price}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
