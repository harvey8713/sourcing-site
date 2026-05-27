import type { ImageProps } from 'next/image';
import Image from 'next/image';

/**
 * Wrapper around next/image for Unsplash images.
 * Unsplash CDN already optimizes images, so we skip Next.js optimization
 * to avoid private IP resolution issues in development.
 */
export default function UnsplashImage(props: Omit<ImageProps, 'unoptimized'>) {
  return <Image {...props} unoptimized />;
}
