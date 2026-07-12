import type { Locale } from './types';

interface Dictionary {
  [key: string]: string | Dictionary;
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
  de: () => import('./dictionaries/de.json').then((m) => m.default),
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  ko: () => import('./dictionaries/ko.json').then((m) => m.default),
  ru: () => import('./dictionaries/ru.json').then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale];
  if (!loader) {
    console.warn(`No dictionary for locale "${locale}", falling back to English`);
    return dictionaries.en();
  }
  return loader();
}

export function t(dict: Dictionary, key: string, fallback?: string): string {
  const keys = key.split('.');
  let value: string | Dictionary = dict;
  for (const k of keys) {
    if (value == null || typeof value !== 'object') break;
    value = (value as Dictionary)[k];
  }
  if (typeof value === 'string') return value;
  if (fallback !== undefined) return fallback;
  return key;
}
