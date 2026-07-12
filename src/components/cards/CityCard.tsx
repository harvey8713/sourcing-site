'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import UnsplashImage from '@/components/ui/UnsplashImage';
import { getCityImage, unsplashUrl } from '@/lib/images';
import { localizedHref } from '@/i18n/localized-link';
import type { City } from '@/types';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const { lang } = useParams();
  const image = getCityImage(city.slug);

  return (
    <Link
      href={localizedHref(lang as string, `/cities/${city.slug}`)}
      className="group relative block h-80 lg:h-[380px] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.025] hover:shadow-xl"
    >
      {/* Unsplash background image */}
      <UnsplashImage
        src={unsplashUrl(image.id, 800)}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-all group-hover:from-black/65 group-hover:via-black/20" />

      {/* Industry badge */}
      <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-text text-[0.72rem] font-bold px-3.5 py-1.5 rounded-full">
        {city.badge}
      </span>

      {/* City info */}
      <div className="absolute bottom-7 left-7 right-7 z-10">
        <h3 className="text-[1.75rem] font-extrabold text-white leading-tight mb-1 drop-shadow-sm">
          {city.name}
        </h3>
        <p className="text-white/85 text-[0.95rem] leading-relaxed">
          {city.subtitle}
        </p>
        <p className="text-white/60 text-xs mt-2">
          {city.serviceCount > 0
            ? `${city.serviceCount} service${city.serviceCount > 1 ? 's' : ''}`
            : 'Coming soon'}
        </p>
      </div>
    </Link>
  );
}
