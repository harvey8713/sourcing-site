/**
 * Extract translation overlay data from data files and generate main module files.
 *
 * fr-* files: already in overlay format (Record<string, any>)
 * de/it/ko/ru-* files: full entity arrays, need overlay fields extracted
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const DATA_DIR = resolve(process.cwd(), 'src/i18n/content/data');
const CONTENT_DIR = resolve(process.cwd(), 'src/i18n/content');

const LOCALES = ['fr', 'de', 'it', 'ko', 'ru'] as const;
const TYPES = ['services', 'cities', 'industries', 'guides', 'faqs'] as const;

// Map from full entity fields to overlay fields for each type
// For fr files, the data is already in the right format, we just extract it.
// For de/it/ko/ru files, we need to pull specific fields.

async function extractData(filePath: string, type: string, locale: string): Promise<Record<string, any>> {
  const fullPath = `${DATA_DIR}/${locale}-${type}.ts`;
  let contents: string;
  try {
    contents = readFileSync(fullPath, 'utf-8');
  } catch (e) {
    console.error(`Failed to read ${fullPath}:`, e);
    return {};
  }

  if (locale === 'fr') {
    // FR files: const data: Record<string, any> = { ... }
    // They're already in overlay format, just strip the wrapper
    return extractObjectLiteral(contents);
  }

  // For de/it/ko/ru: they're full entity arrays
  // We need to dynamically import them
  // Try to transform and eval
  return extractOverlayFromFullEntities(contents, type, locale);
}

function extractObjectLiteral(contents: string): Record<string, any> {
  // Extract the object literal between "const data" and "};"
  // Handles: const data: Record<string, any> = { ... };
  // Or: const data = { ... };

  const dataMatch = contents.match(/const\s+data\b[^=]*=\s*(\{[\s\S]*?\n\});/);
  if (!dataMatch) {
    console.error('Could not find data object in file');
    return {};
  }

  try {
    // Use eval in a controlled context
    const obj = eval(`(${dataMatch[1]})`);
    return obj;
  } catch (e) {
    console.error('Failed to parse object:', e);
    return {};
  }
}

function extractOverlayFromFullEntities(contents: string, type: string, locale: string): Record<string, any> {
  // For full entity arrays, we dynamically import the module
  // This function will be replaced by manual extraction below
  return {};
}

// Main extraction logic using dynamic imports
async function extractOverlayViaImport(filePath: string, type: string, locale: string): Promise<Record<string, any>> {
  try {
    // fr files export default data directly
    if (locale === 'fr') {
      const mod = await import(`./data/${locale}-${type}.ts`);
      return mod.default || {};
    }

    // de/it/ko/ru files export named consts: services/cities/industries/guides/faqs
    const mod = await import(`./data/${locale}-${type}.ts`);
    const entities = mod.services || mod.cities || mod.industries || mod.guides || mod.faqs || mod[type] || [];

    if (!Array.isArray(entities)) {
      console.error(`Expected array for ${locale}-${type}, got:`, typeof entities);
      return {};
    }

    return extractOverlayFields(entities, type);
  } catch (e) {
    console.error(`Failed to import ${locale}-${type}:`, e);
    return {};
  }
}

function extractOverlayFields(entities: any[], type: string): Record<string, any> {
  const result: Record<string, any> = {};

  for (const entity of entities) {
    const key = entity.slug || entity.id || '';
    if (!key) continue;

    switch (type) {
      case 'services':
        result[key] = {
          ...(entity.title && { title: entity.title }),
          ...(entity.subtitle && { subtitle: entity.subtitle }),
          ...(entity.category && { category: entity.category }),
          ...(entity.location && { location: entity.location }),
          ...(entity.durationLabel && { durationLabel: entity.durationLabel }),
          ...(entity.description && { description: entity.description }),
          ...(entity.longDescription && { longDescription: entity.longDescription }),
          ...(entity.whatIsIncluded && { whatIsIncluded: entity.whatIsIncluded }),
          ...(entity.highlights && { highlights: entity.highlights }),
          ...(entity.suitableFor && { suitableFor: entity.suitableFor }),
          ...(entity.notSuitableFor && { notSuitableFor: entity.notSuitableFor }),
          ...(entity.process && { process: entity.process }),
          ...(entity.faq && { faq: entity.faq }),
          ...(entity.tiers && { tiers: entity.tiers }),
          ...(entity.seoKeywords && { seoKeywords: entity.seoKeywords }),
        };
        break;

      case 'cities':
        result[key] = {
          ...(entity.subtitle && { subtitle: entity.subtitle }),
          ...(entity.description && { description: entity.description }),
          ...(entity.longDescription && { longDescription: entity.longDescription }),
          ...(entity.badge && { badge: entity.badge }),
          ...(entity.highlights && { highlights: entity.highlights }),
          ...(entity.suitableFor && { suitableFor: entity.suitableFor }),
          ...(entity.notSuitableFor && { notSuitableFor: entity.notSuitableFor }),
          ...(entity.faq && { faq: entity.faq }),
        };
        break;

      case 'industries':
        result[key] = {
          ...(entity.name && { name: entity.name }),
          ...(entity.description && { description: entity.description }),
          ...(entity.heroCopy && { heroCopy: entity.heroCopy }),
          ...(entity.keyRegions && { keyRegions: entity.keyRegions }),
          ...(entity.whatWeAudit && { whatWeAudit: entity.whatWeAudit }),
          ...(entity.caseSummary && { caseSummary: entity.caseSummary }),
          ...(entity.seoKeywords && { seoKeywords: entity.seoKeywords }),
        };
        break;

      case 'guides':
        result[key] = {
          ...(entity.title && { title: entity.title }),
          ...(entity.excerpt && { excerpt: entity.excerpt }),
          ...(entity.category && { category: entity.category }),
          ...(entity.readTime && { readTime: entity.readTime }),
          ...(entity.content && { content: entity.content }),
          ...(entity.seoKeywords && { seoKeywords: entity.seoKeywords }),
        };
        break;

      case 'faqs':
        result[key] = {
          ...(entity.question && { question: entity.question }),
          ...(entity.answer && { answer: entity.answer }),
        };
        break;
    }
  }

  return result;
}

// Generate the main module file
function generateMainModule(type: string, translations: Record<string, Record<string, any>>): string {
  const typeNameMap: Record<string, string> = {
    services: 'ServiceTranslationOverlay',
    cities: 'CityTranslationOverlay',
    industries: 'IndustryTranslationOverlay',
    guides: 'GuideTranslationOverlay',
    faqs: 'FAQTranslationOverlay',
  };

  const localizedTypeName = typeNameMap[type];

  // Read original file to get imports and type definitions
  const originalPath = `${CONTENT_DIR}/${type}-translations.ts`;
  const originalContent = readFileSync(originalPath, 'utf-8');

  // Extract everything before "const translations:"
  const parts = originalContent.split('const translations:');
  const prefix = parts[0];

  // Extract everything after the closing of translations
  const suffixMatch = parts[1]?.match(/\};([\s\S]*)/);
  const suffix = suffixMatch ? suffixMatch[1] : '';

  // Build the translations object
  const localeEntries = LOCALES.map(locale => {
    if (translations[locale] && Object.keys(translations[locale]).length > 0) {
      const objStr = JSON.stringify(translations[locale], null, 2);
      return `  ${locale}: ${objStr},`;
    }
    return `  ${locale}: {},`;
  });

  return `${prefix}const translations: LocaleTranslations = {
${localeEntries.join('\n')}
} as const;${suffix}`;
}

async function main() {
  // Process services first
  const type = process.argv[2] || 'all';
  const typesToProcess = type === 'all' ? [...TYPES] : [type as typeof TYPES[number]];

  for (const t of typesToProcess) {
    console.log(`\n=== Processing ${t} ===`);
    const translations: Record<string, Record<string, any>> = {};

    for (const locale of LOCALES) {
      console.log(`  ${locale}-${t}...`);
      const data = await extractOverlayViaImport(`${DATA_DIR}/${locale}-${t}.ts`, t, locale);
      translations[locale] = data;
      console.log(`    -> ${Object.keys(data).length} entries`);
    }

    // Generate and write the main module
    const moduleContent = generateMainModule(t, translations);
    const outputPath = `${CONTENT_DIR}/${t}-translations.ts`;
    writeFileSync(outputPath, moduleContent, 'utf-8');
    console.log(`  Written to ${outputPath}`);
  }
}

main().catch(console.error);
