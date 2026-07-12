export type Locale = 'en' | 'fr' | 'de' | 'it' | 'ko' | 'ru';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'fr', 'de', 'it', 'ko', 'ru'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ko: '한국어',
  ru: 'Русский',
};

export const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  ko: 'Korean',
  ru: 'Russian',
};
