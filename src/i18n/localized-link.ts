import { DEFAULT_LOCALE } from './types';

/**
 * Build a locale-aware href.
 * Examples:
 *   localizedHref('en', '/services')     → '/en/services'
 *   localizedHref('fr', '/services/sh')  → '/fr/services/sh'
 *   localizedHref('en', '')              → '/en'
 */
export function localizedHref(locale: string, path: string): string {
  const safePath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${safePath === '/' ? '' : safePath}`;
}

/** Strip locale prefix from a pathname, returning the bare route. */
export function stripLocale(pathname: string): { locale: string; path: string } {
  const parts = pathname.split('/').filter(Boolean);
  const maybeLocale = parts[0];
  const supportedLocales = ['en', 'fr', 'de', 'it', 'ko', 'ru'];
  if (maybeLocale && supportedLocales.includes(maybeLocale)) {
    return {
      locale: maybeLocale,
      path: '/' + parts.slice(1).join('/'),
    };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || '/' };
}
