'use client';

import { INDUSTRY_META } from '@/lib/constants';

interface IndustryFilterProps {
  selectedIndustry: string | null;
  onSelect: (industry: string | null) => void;
}

export default function IndustryFilter({ selectedIndustry, onSelect }: IndustryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          selectedIndustry === null
            ? 'bg-primary text-white'
            : 'border border-border text-text-secondary hover:border-primary/40 hover:text-text'
        }`}
      >
        All
      </button>
      {Object.entries(INDUSTRY_META).map(([key, meta]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedIndustry === key
              ? 'bg-primary text-white'
              : 'border border-border text-text-secondary hover:border-primary/40 hover:text-text'
          }`}
        >
          {meta.icon} {meta.name}
        </button>
      ))}
    </div>
  );
}
