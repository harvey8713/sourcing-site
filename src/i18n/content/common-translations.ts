/**
 * Translations for site-config, constants, team, testimonials, and other shared data.
 * Each locale has its own overlay object that maps content IDs to translated strings.
 */
import type { Locale } from '../types';

// ─── Types ────────────────────────────────────────────────────────

export interface CommonTranslations {
  nav_links: Record<string, string>;
  stats: Record<string, { label: string }>;
  trust_signals: Record<number, { title: string; description: string }>;
  process_steps: Record<number, { title: string; description: string }>;
  team: Record<
    string,
    { role: string; bio: string }
  >;
  testimonials: Record<
    string,
    { quote: string }
  >;
  image_alt: Record<string, string>;
}

// ─── Translation data (populated in Phase 3) ──────────────────────

const translations: Partial<Record<Locale, CommonTranslations>> = {};

export function getCommonTranslations(locale: Locale): CommonTranslations | undefined {
  return translations[locale];
}

/**
 * Helper: load common translations lazily.
 * In development, this dynamically imports locale-specific files.
 */
const loadedTranslations = new Map<Locale, CommonTranslations>();

export async function loadCommonTranslations(
  locale: Locale
): Promise<CommonTranslations | null> {
  if (loadedTranslations.has(locale)) return loadedTranslations.get(locale)!;

  try {
    // Dynamic import for locale-specific translations
    const mod = (await import(
      `./translations/common/${locale}.json`
    )) as { default: CommonTranslations };
    loadedTranslations.set(locale, mod.default);
    return mod.default;
  } catch {
    return null;
  }
}
