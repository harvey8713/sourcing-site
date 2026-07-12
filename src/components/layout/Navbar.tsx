'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/site-config';
import { localizedHref } from '@/i18n/localized-link';
import { useT } from '@/i18n/dictionary-context';

interface Dictionary {
  [key: string]: unknown;
}

interface NavbarProps {
  lang?: string;
  dict?: Dictionary;
}

function getString(dict: Dictionary | undefined, key: string, fallback: string): string {
  const keys = key.split('.');
  let value: unknown = dict;
  for (const k of keys) {
    if (value == null || typeof value !== 'object') {
      return fallback;
    }
    value = (value as Record<string, unknown>)[k];
  }
  return typeof value === 'string' ? value : fallback;
}

export default function Navbar({ lang = 'en', dict }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctxT = useT();

  function t(key: string): string {
    const ctxVal = ctxT(key);
    if (ctxVal !== key) return ctxVal;
    return getString(dict, key, {
      'nav.get_started': 'Get Started',
      'nav.toggle_menu': 'Toggle menu',
    }[key] ?? key);
  }

  const getStarted = t('nav.get_started');
  const toggleMenu = t('nav.toggle_menu');

  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={localizedHref(lang, '/')} className="shrink-0 flex items-baseline" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span style={{ fontWeight: 200, fontSize: '1.25rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-text)' }}>On</span>
            <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px', color: 'var(--color-text)', marginLeft: '2px' }}>Site</span>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', marginLeft: '4px', display: 'inline-block', position: 'relative', top: '-14px' }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={localizedHref(lang, link.href)}
                className="text-sm font-medium text-text-secondary hover:text-primary transition"
              >
                {t('nav.links.' + link.href.replace('/', '').replace(/-/g, '_'))}
              </Link>
            ))}
            <Link
              href={localizedHref(lang, '/contact')}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition"
            >
              {getStarted}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary"
            aria-label={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={localizedHref(lang, link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-text-secondary hover:text-primary transition py-1"
                >
                  {t('nav.links.' + link.href.replace('/', '').replace(/-/g, '_'))}
                </Link>
              ))}
              <Link
                href={localizedHref(lang, '/contact')}
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition text-center"
              >
                {getStarted}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
