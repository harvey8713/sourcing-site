'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import Breadcrumb from '@/components/layout/Breadcrumb';
import IndustryFilter from '@/components/sections/IndustryFilter';
import ServiceCard from '@/components/cards/ServiceCard';

export default function ServicesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const filteredServices = selectedIndustry
    ? services.filter((s) => s.industry === selectedIndustry)
    : services;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Sourcing Services</h1>
        <p className="text-lg text-text-secondary max-w-2xl">
          On-the-ground factory audits and sourcing trips across China&apos;s key
          manufacturing regions. Every service includes physical factory visits,
          supplier verification, and a comprehensive report.
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
            No services found for the selected industry.
          </p>
          <button
            onClick={() => setSelectedIndustry(null)}
            className="text-primary font-medium hover:underline"
          >
            View all services
          </button>
        </div>
      )}
    </div>
  );
}
