/**
 * Merge guide translation data files into guide-translations.ts.
 * Handles the case where French data already exists in the file.
 *
 * Run: npx tsx scripts/merge-guides.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'i18n', 'content', 'data');
const GUIDE_FILE = join(ROOT, 'src', 'i18n', 'content', 'guide-translations.ts');

const LOCALES = ['de', 'it', 'ko', 'ru'] as const;

function serializeString(s: string): string {
  if (s.includes('\n') || s.includes("'")) {
    let escaped = s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return '`' + escaped + '`';
  }
  let escaped = s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return "'" + escaped + "'";
}

function serializeGuideOverlay(guide: Record<string, unknown>, indent: number): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  const lines: string[] = ['{'];

  const fields: ('title' | 'excerpt' | 'category' | 'readTime' | 'content' | 'seoKeywords')[] = [
    'title', 'excerpt', 'category', 'readTime', 'content', 'seoKeywords',
  ];

  for (const field of fields) {
    const val = guide[field];
    if (val === undefined || val === null) continue;

    if (Array.isArray(val)) {
      if (val.length === 0) continue;
      const items = val.map((v: unknown) => `${innerPad}  ${serializeString(v as string)},`);
      lines.push(`${innerPad}${field}: [\n${items.join('\n')}\n${innerPad}],`);
    } else if (typeof val === 'string') {
      lines.push(`${innerPad}${field}: ${serializeString(val)},`);
    }
  }

  lines.push(`${pad}}`);
  return lines.join('\n');
}

/**
 * Serialize a locale's translations map (slug → overlay).
 * The map is Record<string, Record<string, unknown>> but the outer Record
 * values are the overlay objects (not double-nested).
 */
function serializeTranslationsMap(map: Record<string, unknown>, indent: number): string {
  const pad = '  '.repeat(indent);
  const innerPad = '  '.repeat(indent + 1);
  const lines: string[] = ['{'];

  for (const [slug, data] of Object.entries(map)) {
    if (!data || typeof data !== 'object') continue;
    lines.push(`${innerPad}'${slug}': ${serializeGuideOverlay(data as Record<string, unknown>, indent + 1)},`);
  }

  lines.push(`${pad}}`);
  return lines.join('\n');
}

async function main() {
  console.log('=== Processing guides ===');

  // Import French data (already in overlay format)
  const frMod = await import(join(DATA_DIR, 'fr-guides.ts'));
  const frData: Record<string, unknown> = frMod.default || {};
  console.log(`  French: ${Object.keys(frData).length} guides`);

  // Import all other locale data (Guide[] format, needs conversion)
  const allTranslations: Record<string, Record<string, unknown>> = { fr: frData };

  for (const locale of LOCALES) {
    console.log(`  Processing ${locale}...`);
    try {
      const mod = await import(join(DATA_DIR, `${locale}-guides.ts`));
      const guides: Record<string, unknown>[] = mod.guides || [];
      const localeMap: Record<string, unknown> = {};

      for (const guide of guides) {
        if (typeof guide.slug !== 'string') continue;
        const overlay: Record<string, unknown> = {};

        for (const field of ['title', 'excerpt', 'category', 'readTime', 'content'] as const) {
          if (typeof guide[field] === 'string') overlay[field] = guide[field];
        }

        if (Array.isArray(guide.seoKeywords) && (guide.seoKeywords as unknown[]).length > 0) {
          overlay.seoKeywords = (guide.seoKeywords as unknown[]).filter(
            (x): x is string => typeof x === 'string',
          );
        }

        if (Object.keys(overlay).length > 0) {
          localeMap[guide.slug] = overlay;
        }
      }

      allTranslations[locale] = localeMap;
      console.log(`    -> ${Object.keys(localeMap).length} guides`);
    } catch (err) {
      console.error(`    Error processing ${locale}:`, err);
    }
  }

  // Read existing file
  const existingContent = readFileSync(GUIDE_FILE, 'utf-8');
  const lines = existingContent.split('\n');

  // Find translations object start and infrastructure start
  let translationsStartLine = -1;
  let infrastructureLine = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const translations: LocaleTranslations = {')) {
      translationsStartLine = i;
    }
    if (lines[i].includes('export function setGuideTranslations')) {
      infrastructureLine = i;
      break;
    }
  }

  if (translationsStartLine === -1 || infrastructureLine === -1) {
    console.error('ERROR: Could not find translations or infrastructure boundaries');
    process.exit(1);
  }

  // Keep header (before translations start) and infrastructure (from export function)
  const header = lines.slice(0, translationsStartLine).join('\n');
  const infrastructure = lines.slice(infrastructureLine).join('\n');

  // Build new translations object
  const outputLines: string[] = [
    header,
    'const translations: LocaleTranslations = {',
  ];

  const allLocales = ['fr', 'de', 'it', 'ko', 'ru'];
  for (const locale of allLocales) {
    const data = allTranslations[locale];
    if (data && Object.keys(data).length > 0) {
      outputLines.push(`  ${locale}: ${serializeTranslationsMap(data, 1)},`);
    }
  }

  outputLines.push('};');
  outputLines.push('');
  outputLines.push(infrastructure);

  const newContent = outputLines.join('\n');
  writeFileSync(GUIDE_FILE, newContent);
  console.log(`  Wrote ${newContent.split('\n').length} lines`);
  console.log('\n=== Done ===');
}

main().catch(console.error);
