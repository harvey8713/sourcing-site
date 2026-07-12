/**
 * Content i18n — locale-aware accessor functions.
 * All accessors accept a Locale parameter and return translated content,
 * falling back to English for untranslated fields.
 */
export { getServices, getServiceBySlug, getServicesByIndustry } from './service-translations';
export type { ServiceTranslationOverlay } from './service-translations';

export { getCities, getCityBySlug, getFeaturedCities, getCitiesByCategory, getCityServiceMatchNames } from './city-translations';
export type { CityTranslationOverlay } from './city-translations';

export { getIndustries, getIndustryBySlug } from './industry-translations';
export type { IndustryTranslationOverlay } from './industry-translations';

export { getGuides, getGuideBySlug } from './guide-translations';
export type { GuideTranslationOverlay } from './guide-translations';

export { getFAQs, getFAQsByCategory } from './faq-translations';
export type { FAQTranslationOverlay } from './faq-translations';

export { getCommonTranslations, loadCommonTranslations } from './common-translations';
export type { CommonTranslations } from './common-translations';
