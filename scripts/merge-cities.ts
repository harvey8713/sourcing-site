/**
 * Regenerate city-translations.ts from locale data files.
 * Re-adds icon properties to highlights (from English base data).
 *
 * Run: npx tsx scripts/merge-cities.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'i18n', 'content', 'data');
const CITY_FILE = join(ROOT, 'src', 'i18n', 'content', 'city-translations.ts');

const LOCALES = ['de', 'it', 'ko', 'ru'] as const;

// English base icons - keyed by city slug, position index → icon
function getEnglishIcons(): Record<string, Record<number, string>> {
  const icons: Record<string, Record<number, string>> = {};
  try {
    // Read English base cities to extract icons
    const src = readFileSync(join(ROOT, 'src', 'data', 'cities.ts'), 'utf-8');
    // Extract city blocks by slug
    const citySlugs = [
      'shenzhen', 'guangzhou', 'dongguan', 'yiwu', 'foshan', 'yunnan',
      'zhongda', 'yongkang', 'sichuan-chongqing', 'ningbo',
      'suzhou-wuxi-changzhou', 'xiamen-fuzhou-quanzhou',
    ];
    for (const slug of citySlugs) {
      const cityStart = src.indexOf(`slug: '${slug}'`);
      if (cityStart === -1) continue;
      const highlightsStart = src.indexOf('highlights:', cityStart);
      if (highlightsStart === -1) continue;
      const bracketStart = src.indexOf('[', highlightsStart);
      if (bracketStart === -1) continue;

      // Find the closing bracket by counting depth
      let depth = 1;
      let pos = bracketStart + 1;
      const cityIcons: Record<number, string> = {};
      let iconIndex = 0;
      while (depth > 0 && pos < src.length) {
        if (src[pos] === '[') depth++;
        else if (src[pos] === ']') depth--;
        // Extract icon from icon: '...'
        else if (depth === 1) {
          const iconMatch = src.slice(pos).match(/icon:\s*'([^']+)'/);
          if (iconMatch && src.slice(pos).startsWith('icon:')) {
            cityIcons[iconIndex] = iconMatch[1];
            iconIndex++;
          }
        }
        pos++;
      }
      icons[slug] = cityIcons;
    }
  } catch (err) {
    console.error('Could not read English base:', err);
  }
  return icons;
}

function serializeString(s: string): string {
  if (s.includes('\n') || s.includes("'")) {
    let escaped = s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return '`' + escaped + '`';
  }
  let escaped = s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return "'" + escaped + "'";
}

function serializeCityOverlay(
  city: Record<string, unknown>,
  englishIcons: Record<number, string>,
  indent: number,
): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);

  // Build fields in order
  const parts: string[] = [`${pad}{`];

  for (const field of ['subtitle', 'description', 'longDescription', 'badge']) {
    const val = city[field];
    if (typeof val === 'string' && val.length > 0) {
      parts.push(`${innerPad}${field}: ${serializeString(val)},`);
    }
  }

  // Highlights - add icons from English base
  const highlights = city.highlights as Record<string, unknown>[] | undefined;
  if (highlights && highlights.length > 0) {
    parts.push(`${innerPad}highlights: [`);
    highlights.forEach((h, i) => {
      const icon = englishIcons[i] || '📍';
      const title = typeof h.title === 'string' ? h.title : '';
      const description = typeof h.description === 'string' ? h.description : '';
      parts.push(
        `${innerPad}  { icon: '${icon}', title: ${serializeString(title)}, description: ${serializeString(description)} },`,
      );
    });
    parts.push(`${innerPad}],`);
  }

  // String arrays
  for (const field of ['suitableFor', 'notSuitableFor']) {
    const arr = city[field] as string[] | undefined;
    if (arr && arr.length > 0) {
      const items = arr.map(
        (v: string) => `${innerPad}  ${serializeString(v)},`,
      );
      parts.push(`${innerPad}${field}: [\n${items.join('\n')}\n${innerPad}],`);
    }
  }

  // FAQ
  const faq = city.faq as Record<string, unknown>[] | undefined;
  if (faq && faq.length > 0) {
    parts.push(`${innerPad}faq: [`);
    for (const f of faq) {
      const q = typeof f.question === 'string' ? f.question : '';
      const a = typeof f.answer === 'string' ? f.answer : '';
      parts.push(
        `${innerPad}  { question: ${serializeString(q)}, answer: ${serializeString(a)} },`,
      );
    }
    parts.push(`${innerPad}],`);
  }

  parts.push(`${pad}}`);
  return parts.join('\n');
}

function serializeLocaleMap(
  map: Record<string, Record<string, unknown>>,
  englishIcons: Record<string, Record<number, string>>,
  indent: number,
): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  const lines: string[] = ['{'];

  for (const [slug, data] of Object.entries(map)) {
    if (!data || typeof data !== 'object') continue;
    const cityIcons = englishIcons[slug] || {};
    lines.push(
      `${innerPad}${slug}: ${serializeCityOverlay(data as Record<string, unknown>, cityIcons, indent + 1)},`,
    );
  }

  lines.push(`${pad}}`);
  return lines.join('\n');
}

async function main() {
  console.log('=== Getting English base icons ===');
  const englishIcons = getEnglishIcons();
  console.log(`  Found icons for ${Object.keys(englishIcons).length} cities`);

  // Import French data (overlay format, no icons in source)
  const frMod = await import(join(DATA_DIR, 'fr-cities.ts'));
  const frData: Record<string, unknown> = frMod.default || {};
  console.log(`  French: ${Object.keys(frData).length} cities`);
  const frKeys = Object.keys(frData);
  console.log(`  French keys: ${JSON.stringify(frKeys)}`);
  const nonStringKeys = frKeys.filter(k => typeof frData[k] !== 'object' || frData[k] === null);
  if (nonStringKeys.length > 0) {
    console.log(`  WARNING: Non-object values at keys: ${JSON.stringify(nonStringKeys)}`);
  }

  // Import all other locales
  const allTranslations: Record<string, Record<string, Record<string, unknown>>> = {};
  allTranslations.fr = frData as Record<string, Record<string, unknown>>;

  for (const locale of LOCALES) {
    console.log(`  Processing ${locale}...`);
    try {
      const mod = await import(join(DATA_DIR, `${locale}-cities.ts`));
      const cities: Record<string, unknown>[] = mod.cities || [];
      const localeMap: Record<string, Record<string, unknown>> = {};

      for (const city of cities) {
        if (typeof city.slug !== 'string') continue;
        const overlay: Record<string, unknown> = {};

        for (const field of ['subtitle', 'description', 'longDescription', 'badge'] as const) {
          if (typeof city[field] === 'string') overlay[field] = city[field];
        }

        // Highlights (might already have icons from City type, but we preserve position order)
        const highlights = city.highlights as { icon?: string; title: string; description: string }[] | undefined;
        if (highlights && highlights.length > 0) {
          overlay.highlights = highlights.map((h) => ({
            title: h.title,
            description: h.description,
          }));
        }

        for (const field of ['suitableFor', 'notSuitableFor'] as const) {
          const arr = city[field] as string[] | undefined;
          if (arr && arr.length > 0) overlay[field] = arr;
        }

        const faq = city.faq as { question: string; answer: string }[] | undefined;
        if (faq && faq.length > 0) overlay.faq = faq;

        if (Object.keys(overlay).length > 0) {
          localeMap[city.slug] = overlay;
        }
      }

      allTranslations[locale] = localeMap;
      console.log(`    -> ${Object.keys(localeMap).length} cities`);
    } catch (err) {
      console.error(`    Error processing ${locale}:`, err);
    }
  }

  // Read existing file to get header and infrastructure
  const existing = readFileSync(CITY_FILE, 'utf-8');
  const lines = existing.split('\n');

  let translationsStartLine = -1;
  let infrastructureLine = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const translations: LocaleTranslations = {')) {
      translationsStartLine = i;
    }
    if (lines[i].includes('export function setCityTranslations')) {
      infrastructureLine = i;
      break;
    }
  }

  if (translationsStartLine === -1 || infrastructureLine === -1) {
    console.error('ERROR: Could not find translations/infrastructure boundaries');
    process.exit(1);
  }

  const header = lines.slice(0, translationsStartLine).join('\n');
  const infrastructure = lines.slice(infrastructureLine).join('\n');

  // Build new translations
  const outputLines: string[] = [
    header,
    'const translations: LocaleTranslations = {',
  ];

  const allLocales = ['fr', 'de', 'it', 'ko', 'ru'];
  for (const locale of allLocales) {
    const data = allTranslations[locale];
    if (data && Object.keys(data).length > 0) {
      outputLines.push(
        `  ${locale}: ${serializeLocaleMap(data, englishIcons, 1)},`,
      );
    }
  }

  outputLines.push('};');
  outputLines.push('');
  outputLines.push(infrastructure);

  const newContent = outputLines.join('\n');
  writeFileSync(CITY_FILE, newContent);
  console.log(`  Wrote ${newContent.split('\n').length} lines`);
  console.log('=== Done ===');
}

main().catch(console.error);
