'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getServices } from '@/i18n/content';
import Breadcrumb from '@/components/layout/Breadcrumb';
import IndustryFilter from '@/components/sections/IndustryFilter';
import ServiceCard from '@/components/cards/ServiceCard';
import { localizedHref } from '@/i18n/localized-link';
import { useT } from '@/i18n/dictionary-context';
import type { Locale } from '@/i18n/types';

export default function ServicesPage() {
  const t = useT();
  const { lang } = useParams() as { lang: string };
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const services = getServices(lang as Locale);
  const filteredServices = selectedIndustry
    ? services.filter((s) => s.industry === selectedIndustry)
    : services;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { name: t('services_list_page.breadcrumb_home'), href: localizedHref(lang, '/') },
          { name: t('services_list_page.breadcrumb_services'), href: localizedHref(lang, '/services') },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">{t('services_list_page.title')}</h1>
        <p className="text-lg text-text-secondary max-w-2xl">
          {t('services_list_page.subtitle')}
        </p>
      </div>

      <div className="mb-10">
        <IndustryFilter selectedIndustry={selectedIndustry} onSelect={setSelectedIndustry} />
      </div>

      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-lg text-text-secondary mb-4">
            {t('services_list_page.no_services')}
          </p>
          <button
            onClick={() => setSelectedIndustry(null)}
            className="text-primary font-medium hover:underline"
          >
            {t('services_list_page.view_all')}
          </button>
        </div>
      )}
    </div>
  );
}
