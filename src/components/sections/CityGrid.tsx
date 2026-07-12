'use client';

import { useState } from 'react';
import CityCard from '@/components/cards/CityCard';
import type { City } from '@/types';

const FILTER_TABS = [
  { key: 'all', label: 'All Cities' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'textile', label: 'Apparel & Textile' },
  { key: 'consumer', label: 'Consumer Goods' },
  { key: 'furniture', label: 'Furniture' },
  { key: 'food', label: 'Food & Beverage' },
  { key: 'specialty', label: 'Specialty Towns' },
];

interface CityGridProps {
  cities: City[];
  showFilters?: boolean;
}

export default function CityGrid({ cities, showFilters = true }: CityGridProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? cities
      : cities.filter((c) => c.categories.includes(activeFilter));

  return (
    <div>
      {/* Filter tabs */}
      {showFilters && (
        <div className="flex gap-2 overflow-x-auto pb-1 justify-center flex-wrap mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-5 py-2.5 rounded-full text-[0.84rem] font-semibold whitespace-nowrap transition-all cursor-pointer border-1.5 ${
                activeFilter === tab.key
                  ? 'bg-primary text-white border-primary'
                  : 'bg-surface text-text-secondary border-border hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* City cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((city) => (
          <CityCard key={city.slug} city={city} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-secondary py-12">
          No cities found for this filter.
        </p>
      )}
    </div>
  );
}
