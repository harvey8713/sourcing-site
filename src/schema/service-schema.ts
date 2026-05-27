import type { Service } from '@/types';
import { SITE } from '@/lib/constants';

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Supply Chain Due Diligence',
      url: SITE.domain,
      description: SITE.tagline,
    },
    areaServed: {
      '@type': 'Country',
      name: 'China',
    },
    serviceArea: {
      '@type': 'State',
      name: service.location,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.domain}/services/${service.slug}`,
    },
    offers: {
      '@type': 'Offer',
      price: service.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}
