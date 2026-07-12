'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '@/i18n/types';
import { stripLocale } from '@/i18n/localized-link';

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

interface LanguageSwitcherProps {
  currentLocale: string;
  variant?: 'desktop' | 'mobile';
  onSelect?: () => void;
}

export function LanguageSwitcher({ currentLocale, variant = 'desktop', onSelect }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { path: barePath } = stripLocale(pathname);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (variant === 'mobile') {
    return (
      <div className="py-2">
        <span className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary/60">
          Language
        </span>
        {SUPPORTED_LOCALES.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}${barePath}`}
            onClick={onSelect}
            className={`block px-4 py-2 text-sm hover:bg-surface transition ${
              locale === currentLocale
                ? 'font-bold text-primary bg-primary/5'
                : 'text-text-secondary'
            }`}
          >
            {LOCALE_LABELS[locale]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Switch language"
      >
        <GlobeIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{LOCALE_LABELS[currentLocale]}</span>
        <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white border border-border rounded-lg shadow-lg z-50 py-1 min-w-[140px]">
          {SUPPORTED_LOCALES.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${barePath}`}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm hover:bg-surface transition ${
                locale === currentLocale
                  ? 'font-bold text-primary bg-primary/5'
                  : 'text-text-secondary'
              }`}
            >
              {LOCALE_LABELS[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
