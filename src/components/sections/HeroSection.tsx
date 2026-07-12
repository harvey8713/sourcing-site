import UnsplashImage from '@/components/ui/UnsplashImage';
import Link from 'next/link';
import { IMAGE_HERO, unsplashUrl } from '@/lib/images';

interface HeroSectionProps {
  title: string;
  tagline?: string;
  subtitle: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageId?: string;
  imageAlt?: string;
}

export default function HeroSection({
  title,
  tagline,
  subtitle,
  cta,
  secondaryCta,
  imageId,
  imageAlt,
}: HeroSectionProps) {
  const bgImageId = imageId || IMAGE_HERO.id;
  const bgAlt = imageAlt || IMAGE_HERO.alt;

  return (
    <section className="relative w-full bg-secondary text-white overflow-hidden flex-1 flex flex-col">
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
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Line 1: big question — sized for ~2 lines */}
          <h1 className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.7rem] font-black leading-[1.15] tracking-[-0.02em] text-balance mb-6">
            {title}
          </h1>

          {/* Line 2: OnSite tagline with logo treatment */}
          {tagline && (
            <div className="text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] flex items-baseline justify-center flex-wrap gap-y-1 mb-6">
              <span style={{ fontWeight: 200, letterSpacing: '0.08em', textTransform: 'uppercase' }}>On</span>
              <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="ml-[2px]">Site</span>
              <span className="mx-2 text-primary">·</span>
              <span style={{ fontWeight: 250, fontStyle: 'italic' }}>On the ground. On your side.</span>
            </div>
          )}

          {/* Line 3: action line */}
          <p className="text-[1.05rem] md:text-[1.25rem] text-white/70 max-w-[520px] mx-auto leading-[1.7] tracking-wide font-medium">
            {subtitle}
          </p>
          <p className="mt-2 text-[0.85rem] md:text-[0.95rem] text-white/35 tracking-[0.2em] uppercase">12 cities · zero middlemen</p>

          {(cta || secondaryCta) && (
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition bg-primary hover:bg-primary-hover text-white text-base"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition border border-white/30 text-white hover:bg-white/10 text-base"
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
