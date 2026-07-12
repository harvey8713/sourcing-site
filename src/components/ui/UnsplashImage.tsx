import type { ImageProps } from 'next/image';
import Image from 'next/image';

/**
 * Wrapper around next/image for Unsplash images.
 * In development, we skip Next.js optimization to avoid issues with
 * external image resolution. In production, Next.js handles optimization
 * (WebP/AVIF conversion, responsive resizing, CDN caching).
 */
export default function UnsplashImage(props: Omit<ImageProps, 'unoptimized'>) {
  return <Image {...props} unoptimized={process.env.NODE_ENV === 'development'} />;
}
