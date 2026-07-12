'use client';

import { createContext, useContext } from 'react';

interface Dictionary {
  [key: string]: string | Dictionary;
}

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary | null {
  return useContext(DictionaryContext);
}

/**
 * Look up a translation by dot-separated key.
 * Falls back to the key itself (or a default) if not found.
 * Supports template replacement: t('home.cities_link', { count: 12 })
 */
export function useT() {
  const dict = useDictionary();

  return function t(key: string, replacements?: Record<string, string | number>): string {
    if (!dict) return replacements ? interpolate(key, replacements) : key;

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
    return replacements ? interpolate(result, replacements) : result;
  };
}

function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}
