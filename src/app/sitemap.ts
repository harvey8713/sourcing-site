import type { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/data/services';
import { getAllIndustrySlugs } from '@/data/industries';
import { getAllGuideSlugs } from '@/data/guides';
import { getAllCitySlugs } from '@/data/cities';
import { SITE } from '@/lib/constants';
import { SUPPORTED_LOCALES } from '@/i18n/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.domain;

  const staticPaths = [
    '',
    '/services',
    '/how-it-works',
    '/industries',
    '/guides',
    '/about',
    '/faq',
    '/contact',
    '/cities',
  ];

  const dynamicPaths = [
    ...getAllServiceSlugs().map((slug) => `/services/${slug}`),
    ...getAllIndustrySlugs().map((slug) => `/industries/${slug}`),
    ...getAllGuideSlugs().map((slug) => `/guides/${slug}`),
    ...getAllCitySlugs().map((slug) => `/cities/${slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  // Generate entries for all locale × path combinations
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    for (const path of allPaths) {
      const priority =
        path === '' ? 1 :
        path.startsWith('/services/') ? 0.9 :
        path === '/services' ? 0.9 :
        path.startsWith('/cities/') ? 0.85 :
        path === '/cities' ? 0.85 :
        path.startsWith('/industries/') ? 0.8 :
        path === '/industries' ? 0.8 :
        path.startsWith('/guides/') ? 0.8 :
        path === '/how-it-works' ? 0.8 :
        path === '/guides' ? 0.8 :
        path === '/faq' ? 0.6 :
        path === '/about' ? 0.6 :
        path === '/contact' ? 0.7 :
        0.8;

      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: (
          path === '' || path === '/services' ? 'weekly' :
          path.startsWith('/guides/') ? 'monthly' : 'monthly'
        ) as 'weekly' | 'monthly',
        priority,
      });
    }
  }

  return entries;
}
