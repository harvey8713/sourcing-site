/**
 * Merge translated service & guide data files into the translation modules.
 *
 * This script uses tsx to import TypeScript data files at runtime,
 * properly resolving helper variables, spread operators, and function calls
 * that regex-based parsers cannot handle.
 *
 * Run: npx tsx scripts/merge-translations.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'i18n', 'content', 'data');
const CONTENT_DIR = join(ROOT, 'src', 'i18n', 'content');

const LOCALES = ['de', 'it', 'ko', 'ru'] as const;
type Locale = (typeof LOCALES)[number];

// --- Type helpers ---
interface ServiceOverlay {
  title?: string;
  subtitle?: string;
  category?: string;
  location?: string;
  durationLabel?: string;
  description?: string;
  longDescription?: string;
  whatIsIncluded?: string[];
  highlights?: string[];
  suitableFor?: string[];
  notSuitableFor?: string[];
  process?: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
  tiers?: {
    lite?: { name?: string; label?: string; price?: string; includes?: string[] };
    standard?: { name?: string; label?: string; price?: string; includes?: string[] };
    premium?: { name?: string; label?: string; price?: string; includes?: string[] };
  };
  seoKeywords?: string[];
}

interface GuideOverlay {
  title?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  content?: string;
  seoKeywords?: string[];
}

// --- Stringify helpers ---

function serializeValue(val: unknown, indent: number): string {
  const pad = '  '.repeat(indent);
  if (val === null || val === undefined) return 'undefined';
  if (typeof val === 'string') return serializeString(val, indent);
  if (typeof val === 'number') return String(val);
  if (typeof val === 'boolean') return String(val);
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map((v) => `${pad}  ${serializeValue(v, indent + 1)}`);
    return `[\n${items.join(',\n')},\n${pad}]`;
  }
  if (typeof val === 'object') {
    return serializeObject(val as Record<string, unknown>, indent);
  }
  return 'undefined';
}

function serializeString(s: string, _indent: number): string {
  // Escape backticks, dollar signs, and backslashes for template literals
  // Use template literals for multiline strings, single quotes for single-line
  if (s.includes('\n') || s.includes("'")) {
    // Template literal
    let escaped = s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return '`' + escaped + '`';
  }
  // Single-quoted string, escape single quotes
  let escaped = s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return "'" + escaped + "'";
}

function serializeObject(obj: Record<string, unknown>, indent: number): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  const keys = Object.keys(obj);
  if (keys.length === 0) return '{}';

  const lines: string[] = ['{'];
  for (const key of keys) {
    const val = obj[key];
    if (val === undefined || val === null) continue;
    lines.push(`${innerPad}${key}: ${serializeValue(val, indent + 1)},`);
  }
  lines.push(`${pad}}`);
  return lines.join('\n');
}

function serializeStringArray(arr: string[], indent: number): string {
  const pad = '  '.repeat(indent);
  if (arr.length === 0) return '[]';
  const items = arr.map((s) => `${pad}  ${serializeString(s, indent + 1)}`);
  return `[\n${items.join(',\n')},\n${pad}]`;
}

function serializeProcess(
  steps: { title: string; description: string }[],
  indent: number,
): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  if (steps.length === 0) return '[]';
  const items = steps.map(
    (s) =>
      `${pad}  { title: ${serializeString(s.title, indent + 2)}, description: ${serializeString(s.description, indent + 2)} }`,
  );
  return `[\n${items.join(',\n')},\n${pad}]`;
}

function serializeFaq(
  faq: { question: string; answer: string }[],
  indent: number,
): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  if (faq.length === 0) return '[]';
  const items = faq.map(
    (f) =>
      `${pad}  { question: ${serializeString(f.question, indent + 2)}, answer: ${serializeString(f.answer, indent + 2)} }`,
  );
  return `[\n${items.join(',\n')},\n${pad}]`;
}

// --- Service conversion ---

function serviceToOverlay(svc: Record<string, unknown>): ServiceOverlay | null {
  if (!svc || !svc.slug) return null;

  const overlay: ServiceOverlay = {};

  // Simple string fields
  for (const field of ['title', 'subtitle', 'category', 'location', 'durationLabel', 'description', 'longDescription'] as const) {
    const v = svc[field];
    if (typeof v === 'string') overlay[field] = v;
  }

  // String array fields (from the service object directly)
  for (const field of ['whatIsIncluded', 'highlights', 'suitableFor', 'notSuitableFor', 'seoKeywords'] as const) {
    const v = svc[field];
    if (Array.isArray(v) && v.length > 0) {
      overlay[field] = v.filter((x): x is string => typeof x === 'string');
    }
  }

  // Process steps - strip "step" number
  const process = svc.process;
  if (Array.isArray(process) && process.length > 0) {
    overlay.process = process
      .filter((s): s is Record<string, unknown> => s != null && typeof s === 'object')
      .map((s) => ({
        title: typeof s.title === 'string' ? s.title : '',
        description: typeof s.description === 'string' ? s.description : '',
      }))
      .filter((s) => s.title || s.description);
  }

  // FAQ
  const faq = svc.faq;
  if (Array.isArray(faq) && faq.length > 0) {
    overlay.faq = faq
      .filter((f): f is Record<string, unknown> => f != null && typeof f === 'object')
      .map((f) => ({
        question: typeof f.question === 'string' ? f.question : '',
        answer: typeof f.answer === 'string' ? f.answer : '',
      }))
      .filter((f) => f.question || f.answer);
  }

  // Tiers - convert array to object
  const tiers = svc.tiers;
  if (Array.isArray(tiers) && tiers.length > 0) {
    overlay.tiers = {};
    for (const t of tiers) {
      if (!t || typeof t !== 'object') continue;
      const tObj = t as Record<string, unknown>;
      const slug = tObj.slug;
      if (typeof slug !== 'string') continue;
      const tierObj: { name?: string; label?: string; price?: string; includes?: string[] } = {};
      if (typeof tObj.name === 'string') tierObj.name = tObj.name;
      if (typeof tObj.label === 'string') tierObj.label = tObj.label;
      if (typeof tObj.price === 'string') tierObj.price = tObj.price;
      if (Array.isArray(tObj.includes)) {
        tierObj.includes = (tObj.includes as unknown[]).filter(
          (x): x is string => typeof x === 'string',
        );
      }
      overlay.tiers[slug as 'lite' | 'standard' | 'premium'] = tierObj;
    }
  }

  return Object.keys(overlay).length > 0 ? overlay : null;
}

// --- Guide conversion ---

function guideToOverlay(guide: Record<string, unknown>): GuideOverlay | null {
  if (!guide || !guide.slug) return null;

  const overlay: GuideOverlay = {};

  for (const field of ['title', 'excerpt', 'category', 'readTime', 'content'] as const) {
    const v = guide[field];
    if (typeof v === 'string') overlay[field] = v;
  }

  const seoKeywords = guide.seoKeywords;
  if (Array.isArray(seoKeywords) && seoKeywords.length > 0) {
    overlay.seoKeywords = seoKeywords.filter(
      (x): x is string => typeof x === 'string',
    );
  }

  return Object.keys(overlay).length > 0 ? overlay : null;
}

// --- Main ---

async function main() {
  // ===================== SERVICES =====================

  console.log('=== Processing services ===');

  // Process French data first (already in overlay format, just need to extract the Record)
  console.log('  Reading French service data...');

  // Dynamic imports need to use absolute paths with tsx
  const frServicesMod = await import(join(DATA_DIR, 'fr-services.ts'));
  const frServices: Record<string, unknown> = frServicesMod.default || {};

  // Process de/it/ko/ru
  const allServiceTranslations: Record<string, Record<string, ServiceOverlay>> = {};

  // French data is already a Record<string, any> - just pass it through
  allServiceTranslations.fr = {};
  for (const [slug, data] of Object.entries(frServices)) {
    if (typeof data === 'object' && data !== null) {
      allServiceTranslations.fr[slug] = data as ServiceOverlay;
    }
  }

  for (const locale of LOCALES) {
    console.log(`  Processing ${locale} services...`);
    try {
      const mod = await import(join(DATA_DIR, `${locale}-services.ts`));
      const services: Record<string, unknown>[] = mod.services || [];
      const localeTranslations: Record<string, ServiceOverlay> = {};

      for (const svc of services) {
        const overlay = serviceToOverlay(svc);
        if (overlay && typeof svc.slug === 'string') {
          localeTranslations[svc.slug] = overlay;
        }
      }

      allServiceTranslations[locale] = localeTranslations;
      console.log(`    -> ${Object.keys(localeTranslations).length} services`);
    } catch (err) {
      console.error(`    Error processing ${locale} services:`, err);
    }
  }

  // Generate service output
  console.log('  Generating service-translations.ts...');

  // Read existing file to preserve infrastructure code
  const existingServiceFile = readFileSync(
    join(CONTENT_DIR, 'service-translations.ts'),
    'utf-8',
  );

  // Find the translations object start and the infrastructure code after it
  const translationsMatch = existingServiceFile.match(
    /(const translations: LocaleTranslations = \{[\s\S]*)(export function getServices)/,
  );

  if (!translationsMatch) {
    console.error('ERROR: Could not find translations object in service-translations.ts');
    process.exit(1);
  }

  const [, _translationsBlock, infrastructureServices] = translationsMatch;

  // Build new translations object
  const serviceTranslationsLines: string[] = [
    "const translations: LocaleTranslations = {",
  ];

  const serviceLocales: Locale[] = [...LOCALES];
  const allServiceLocales = ['fr', ...serviceLocales];

  const frContent = extractFrenchServiceContent(existingServiceFile);

  let first = true;
  for (const locale of allServiceLocales) {
    if (first) {
      serviceTranslationsLines.push(`  ${locale}: ${serializeObject(allServiceTranslations[locale] as unknown as Record<string, unknown>, 1)},`);
      first = false;
    } else {
      serviceTranslationsLines.push(`  ${locale}: ${serializeObject(allServiceTranslations[locale] as unknown as Record<string, unknown>, 1)},`);
    }
  }

  serviceTranslationsLines.push("};");

  const newServiceFile = serviceTranslationsLines.join('\n') + '\n\n' + infrastructureServices;

  writeFileSync(join(CONTENT_DIR, 'service-translations.ts'), newServiceFile);
  console.log(`  Wrote ${newServiceFile.split('\n').length} lines`);

  // ===================== GUIDES =====================

  console.log('=== Processing guides ===');

  const frGuidesMod = await import(join(DATA_DIR, 'fr-guides.ts'));
  const frGuides: Record<string, unknown> = frGuidesMod.default || {};

  const allGuideTranslations: Record<string, Record<string, GuideOverlay>> = {};

  allGuideTranslations.fr = {};
  for (const [slug, data] of Object.entries(frGuides)) {
    if (typeof data === 'object' && data !== null) {
      allGuideTranslations.fr[slug] = data as GuideOverlay;
    }
  }

  for (const locale of LOCALES) {
    console.log(`  Processing ${locale} guides...`);
    try {
      const mod = await import(join(DATA_DIR, `${locale}-guides.ts`));
      const guides: Record<string, unknown>[] = mod.guides || [];
      const localeTranslations: Record<string, GuideOverlay> = {};

      for (const guide of guides) {
        const overlay = guideToOverlay(guide);
        if (overlay && typeof guide.slug === 'string') {
          localeTranslations[guide.slug] = overlay;
        }
      }

      allGuideTranslations[locale] = localeTranslations;
      console.log(`    -> ${Object.keys(localeTranslations).length} guides`);
    } catch (err) {
      console.error(`    Error processing ${locale} guides:`, err);
    }
  }

  // Read existing guide file and rebuild
  const existingGuideFile = readFileSync(
    join(CONTENT_DIR, 'guide-translations.ts'),
    'utf-8',
  );

  const guideMatch = existingGuideFile.match(
    /([\s\S]*)(const translations: LocaleTranslations = \{\})([\s\S]*)/,
  );

  if (!guideMatch) {
    console.error('ERROR: Could not find empty translations in guide-translations.ts');
    process.exit(1);
  }

  const [, guideHeader, , guideFooter] = guideMatch;

  const guideTranslationLines: string[] = [
    `${guideHeader}const translations: LocaleTranslations = {`,
  ];

  for (const locale of allServiceLocales) {
    guideTranslationLines.push(`  ${locale}: ${serializeObject(allGuideTranslations[locale] as unknown as Record<string, unknown>, 1)},`);
  }

  guideTranslationLines.push(`};${guideFooter}`);

  writeFileSync(join(CONTENT_DIR, 'guide-translations.ts'), guideTranslationLines.join('\n'));
  console.log(`  Wrote ${guideTranslationLines.join('\n').split('\n').length} lines`);

  console.log('\n=== Done ===');
}

function extractFrenchServiceContent(fileContent: string): string {
  // Extract just the French data from the existing file
  const match = fileContent.match(/  fr: \{\n([\s\S]*?)\n  \},/);
  return match ? match[0] : '';
}

main().catch(console.error);
