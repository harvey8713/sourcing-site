import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import { IMAGE_HERO, unsplashUrl } from '@/lib/images';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageId?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  secondaryCta,
  imageId,
  imageAlt,
}: HeroSectionProps) {
  const bgImageId = imageId || IMAGE_HERO.id;
  const bgAlt = imageAlt || IMAGE_HERO.alt;

  return (
    <section className="relative w-full bg-secondary text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <UnsplashImage
          src={unsplashUrl(bgImageId, 1920)}
          alt={bgAlt}
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      <div className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-lg text-white/80 mt-6 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          {(cta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 mt-8">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition bg-primary hover:bg-primary-hover text-white"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition border border-white/30 text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
