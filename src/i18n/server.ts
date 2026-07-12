/**
 * Server-side i18n utilities.
 * Use these in layouts, pages, and server components to load dictionaries.
 */
import type { Locale } from './types';
import { DEFAULT_LOCALE } from './types';

interface Dictionary {
  [key: string]: string | Dictionary;
}

const dictionaryCache = new Map<string, Dictionary>();

export async function loadDictionary(locale: string = DEFAULT_LOCALE): Promise<Dictionary> {
  // Return from cache if available (build-time only)
  const cacheKey = locale;
  if (dictionaryCache.has(cacheKey)) {
    return dictionaryCache.get(cacheKey)!;
  }

  try {
    const dict = (await import(`./dictionaries/${locale}.json`)).default as Dictionary;
    dictionaryCache.set(cacheKey, dict);
    return dict;
  } catch {
    // Fallback to English
    if (locale !== 'en') {
      return loadDictionary('en');
    }
    return {};
  }
}

/**
 * Look up a translation by dot-separated key.
 * Falls back to key if not found.
 */
export function t(
  dict: Dictionary,
  key: string,
  replacements?: Record<string, string | number>
): string {
  const keys = key.split('.');
  let value: string | Dictionary | undefined = dict;
  for (const k of keys) {
    if (value == null || typeof value !== 'object') {
      value = undefined;
      break;
    }
    value = (value as Dictionary)[k];
  }

  const result = typeof value === 'string' ? value : key;
  if (replacements) {
    return result.replace(/\{(\w+)\}/g, (_, k) => String(replacements[k] ?? `{${k}}`));
  }
  return result;
}
