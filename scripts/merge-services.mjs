/**
 * Script to merge translated service data from locale-specific files
 * into the service-translations.ts module.
 *
 * Reads de/it/ko/ru service arrays (with helper vars) and converts
 * them to the ServiceTranslationOverlay slug-keyed format.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'i18n', 'content', 'data');

const LOCALES = ['de', 'it', 'ko', 'ru'];

// Read the existing service-translations.ts to get the French data and infrastructure
function readExisting() {
  return readFileSync(join(ROOT, 'src', 'i18n', 'content', 'service-translations.ts'), 'utf-8');
}

/**
 * Read a service data file and parse out helper variables + service array.
 * We handle:
 * - const LITE_COMMON = [...]
 * - const STANDARD_COMMON = [...]
 * - const PREMIUM_COMMON_WITH_WELCOME = [...]
 * - const PREMIUM_COMMON_NO_WELCOME = [...]
 * - function premiumCommon(n) { ... }
 * - export const services: Service[] = [...] OR const data = { ... }
 */
function parseServiceFile(locale) {
  const filePath = join(DATA_DIR, `${locale}-services.ts`);
  const content = readFileSync(filePath, 'utf-8');

  // Extract helper arrays
  const helpers = {};

  // Match const NAME = [...]
  const constRegex = /const\s+(\w+)\s*[=:]\s*(\[[\s\S]*?\]);/g;
  let match;
  while ((match = constRegex.exec(content)) !== null) {
    const name = match[1];
    // Basic array extraction - find matching bracket
    try {
      helpers[name] = eval(match[2]);
    } catch(e) {
      // skip if eval fails
    }
  }

  // Extract premiumCommon function
  const funcMatch = content.match(/function\s+premiumCommon\s*\(\s*n\s*\)\s*\{([\s\S]*?)\n\}/);
  if (funcMatch) {
    // Parse the function to understand the logic
    const funcBody = funcMatch[1];
    const hasWelcomeDinner = funcBody.includes('PREMIUM_COMMON_WITH_WELCOME');
    const welcomeDinnerItem = funcBody.match(/['"](.*?)['"]/);

    // Create a function that resolves includes
    helpers.resolvedPremiums = {};
  }

  // Parse the service data
  // For fr: const data: Record<string, any> = { slug: {...} }; export default data;
  // For de/it/ko/ru: export const services: Service[] = [ {...}, ... ];

  let servicesData;

  if (locale === 'fr') {
    // Extract the data object
    const dataMatch = content.match(/const\s+data\s*:\s*Record\s*<\s*string\s*,\s*any\s*>\s*=\s*(\{[\s\S]*\});\s*export\s+default\s+data;/);
    servicesData = null; // We don't need to parse fr - it's already in the file
  } else {
    // Extract the services array - handle the full Service[] format
    // The services array starts after all constants and functions, with "export const services ... = ["
    const arrayStart = content.match(/export\s+(const|var)\s+services\s*(:\s*Service\[\]\s*)?=\s*\[/);
    if (arrayStart) {
      const startIdx = arrayStart.index + arrayStart[0].length;
      // Find the matching closing bracket
      let depth = 1;
      let endIdx = startIdx;
      while (depth > 0 && endIdx < content.length) {
        if (content[endIdx] === '[') depth++;
        else if (content[endIdx] === ']') depth--;
        endIdx++;
      }
      const arrayContent = content.slice(startIdx, endIdx - 1);

      // Now we need to parse individual service objects from this array
      // This is complex - each object is separated by commas
      servicesData = extractServiceObjects(arrayContent, helpers, content);
    }
  }

  return servicesData;
}

/**
 * Extract individual service objects from the array content string.
 * This is a heuristic approach since the data uses spread operators.
 */
function extractServiceObjects(arrayContent, helpers, fullContent) {
  // We know the services slugs and their order from the fr file
  const slugs = [
    'shenzhen-electronics-sprint',
    'guangzhou-wholesale-multi-category',
    'shenzhen-dongguan-hardware-audit',
    'yiwu-market-navigator',
    'guangzhou-wholesale-mix',
    'guangzhou-apparel-leather',
    'textile-belt-deep-dive',
    'foshan-furniture-sourcing',
    'yunnan-coffee-tea-origin',
    'sichuan-spice-cuisine-route',
    'ningxia-goji-wine-route',
    'monopoly-factory-towns-explorer',
    'canton-fair-navigator',
  ];

  const result = {};

  // Extract each service as a raw text block
  // Services are separated by "/* ======" or similar comment blocks
  const serviceBlocks = fullContent.split(/\/\*\s*={2,}\s*/);

  for (const block of serviceBlocks) {
    // Find the slug
    const slugMatch = block.match(/slug:\s*['"]([\w-]+)['"]/);
    if (!slugMatch || !slugs.includes(slugMatch[1])) continue;

    const slug = slugMatch[1];
    const overlay = extractOverlayFromServiceBlock(block, slug);
    if (overlay) {
      result[slug] = overlay;
    }
  }

  return result;
}

/**
 * Extract a ServiceTranslationOverlay from a raw service block text.
 * We look for specific field patterns.
 */
function extractOverlayFromServiceBlock(block, slug) {
  const overlay = {};

  // Extract string fields
  const stringFields = ['title', 'subtitle', 'category', 'location', 'durationLabel', 'description', 'longDescription'];
  for (const field of stringFields) {
    const match = block.match(new RegExp(`${field}:\\s*['\`]([\\s\\S]*?)['\`](,)`, 'm'));
    if (match) {
      // Handle escaped quotes in the value
      let val = match[1].replace(/\\'/g, "'").replace(/\\`/g, '`');
      overlay[field] = val;
    }
  }

  // Extract string arrays
  const arrayFields = ['whatIsIncluded', 'highlights', 'suitableFor', 'notSuitableFor', 'seoKeywords'];
  for (const field of arrayFields) {
    const match = block.match(new RegExp(`${field}:\\s*\\[([\\s\\S]*?)\\](,)`, 'm'));
    if (match) {
      const items = match[1].match(/['"]([\s\S]*?)['"]/g);
      if (items) {
        overlay[field] = items.map(i => i.slice(1, -1).replace(/\\'/g, "'").replace(/\\`/g, '`'));
      }
    }
  }

  // Extract process steps (with or without step numbers)
  if (block.includes('process:')) {
    const processMatch = block.match(/process:\s*\[([\s\S]*?)\](,|\s*faq|$)/);
    if (processMatch) {
      const steps = processMatch[1].match(/\{\s*(?:step:\s*\d+\s*,)?\s*title:\s*['"]([\s\S]*?)['"]\s*,\s*description:\s*['"]([\s\S]*?)['"]\s*\}/g);
      if (steps) {
        overlay.process = steps.map(s => {
          const tMatch = s.match(/title:\s*['"]([\s\S]*?)['"]/);
          const dMatch = s.match(/description:\s*['"]([\s\S]*?)['"]/);
          return {
            title: tMatch ? tMatch[1].replace(/\\'/g, "'") : '',
            description: dMatch ? dMatch[1].replace(/\\'/g, "'") : '',
          };
        });
      }
    }
  }

  // Extract FAQ
  if (block.includes('faq:')) {
    const faqMatch = block.match(/faq:\s*\[([\s\S]*?)\](,|\s*seoKeywords|$)/);
    if (faqMatch) {
      const entries = faqMatch[1].match(/\{\s*question:\s*['"]([\s\S]*?)['"]\s*,\s*answer:\s*['"]([\s\S]*?)['"]\s*\}/g);
      if (entries) {
        overlay.faq = entries.map(e => {
          const qMatch = e.match(/question:\s*['"]([\s\S]*?)['"]/);
          const aMatch = e.match(/answer:\s*['"]([\s\S]*?)['"]/);
          if (qMatch && aMatch) {
            return {
              question: qMatch[1].replace(/\\'/g, "'"),
              answer: aMatch[1].replace(/\\'/g, "'"),
            };
          }
          return null;
        }).filter(Boolean);
      }
    }
  }

  // Extract tiers - this is the complex part
  if (block.includes('tiers:')) {
    const tiersMatch = block.match(/tiers:\s*\[([\s\S]*?)\](,|$)/);
    if (!tiersMatch) {
      // Also try object format like in fr
      const tiersObjMatch = block.match(/tiers:\s*\{([\s\S]*?)\}(,|\s*seoKeywords|$)/);
      if (tiersObjMatch) {
        overlay.tiers = {};
        const liteMatch = tiersObjMatch[1].match(/lite:\s*\{([\s\S]*?)\}/);
        const standardMatch = tiersObjMatch[1].match(/standard:\s*\{([\s\S]*?)\}/);
        const premiumMatch = tiersObjMatch[1].match(/premium:\s*\{([\s\S]*?)\}/);

        if (liteMatch) overlay.tiers.lite = extractTierFromBlock(liteMatch[1]);
        if (standardMatch) overlay.tiers.standard = extractTierFromBlock(standardMatch[1]);
        if (premiumMatch) overlay.tiers.premium = extractTierFromBlock(premiumMatch[1]);
      }
    } else {
      // Array format with .slug
      overlay.tiers = {};
      const tierRegex = /\{\s*slug:\s*['"](lite|standard|premium)['"]([\s\S]*?)\}/g;
      let tMatch;
      while ((tMatch = tierRegex.exec(tiersMatch[1])) !== null) {
        overlay.tiers[tMatch[1]] = extractTierFromBlock(tMatch[2]);
      }
    }
  }

  return Object.keys(overlay).length > 0 ? overlay : null;
}

function extractTierFromBlock(block) {
  const tier = {};
  const nameMatch = block.match(/name:\s*['"]([\s\S]*?)['"]/);
  const labelMatch = block.match(/label:\s*['"]([\s\S]*?)['"]/);
  const priceMatch = block.match(/price:\s*['"]([\s\S]*?)['"]/);

  if (nameMatch) tier.name = nameMatch[1];
  if (labelMatch) tier.label = labelMatch[1];
  if (priceMatch) tier.price = priceMatch[1];

  // Handle includes - may use spread operators like ...LITE_COMMON
  const includesMatch = block.match(/includes:\s*\[([\s\S]*?)\]/);
  if (includesMatch) {
    const includesText = includesMatch[1];
    // Replace spread operators with actual content
    const resolvedIncludes = resolveIncludes(includesText);
    if (resolvedIncludes.length > 0) {
      tier.includes = resolvedIncludes;
    }
  }

  return tier;
}

function resolveIncludes(includesText) {
  const items = [];
  const lines = includesText.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines and commas
    if (!trimmed || trimmed === ',') continue;

    // Handle spread operator
    if (trimmed.startsWith('...')) {
      continue; // We'll skip spread - these are handled separately
    }

    // Extract string value
    const strMatch = trimmed.match(/^['"]([\s\S]*?)['"]\s*,?\s*$/);
    if (strMatch) {
      items.push(strMatch[1].replace(/\\'/g, "'"));
    }
  }
  return items;
}

// --- MAIN ---
console.log('Reading existing file...');
const existing = readExisting();

// Check: is French already populated?
if (!existing.includes('fr:')) {
  console.error('ERROR: French data not found in file. The previous agent may not have written it.');
  process.exit(1);
}

// Extract French data and infrastructure from existing file
// Find where 'fr:' starts and where the main infrastructure begins
const frStart = existing.indexOf('fr:');
const infraStart = existing.indexOf('export function getServices');

// We need to insert de/it/ko/ru data before the infrastructure functions
const header = existing.slice(0, frStart - 2); // up to "const translations: LocaleTranslations = {"
const frenchDataEnd = existing.lastIndexOf('},', infraStart - 50);
const frenchSection = existing.slice(frStart - 2, frenchDataEnd + 3); // "fr: { ... },"
const infrastructure = existing.slice(frenchDataEnd + 3);

console.log('Parsing data files...');
const allTranslations = {
  fr: null, // Already in the file
};

for (const locale of LOCALES) {
  console.log(`  Processing ${locale}...`);
  const data = parseServiceFile(locale);
  if (data) {
    allTranslations[locale] = data;
  }
}

// Generate the locale sections
let output = `const translations: LocaleTranslations = {\n  fr: {\n`;

// Extract French content from existing file
const frContentMatch = existing.match(/fr:\s*\{([\s\S]*?)\}(?=\s*,\s*$|\s*[a-z]{2}:|\s*$)/m);
if (frContentMatch) {
  // Parse the French data from the existing file
  const frContent = frContentMatch[1];
  // Reconstruct by slug
  const frSlugs = frContent.split(/\n\s+'[\w-]+':\s*\{/).filter(s => s.trim());
  // This is getting complex. Let me just preserve the existing fr data.
  output = existing.substring(0, existing.indexOf('const translations: LocaleTranslations = {'));
  output += `const translations: LocaleTranslations = {\n  fr: {`;
  // Extract French entries
  const frEntries = frContent.split(/\n\s+'[\w-]+':\s*\{/);
  output += frContent;
  output += `\n  },\n`;
}

console.log('Generating final output...');

// For the remaining locales, generate the code
// This is getting too complex for the regex approach.
// Let me take a completely different approach and write the TS file directly.

console.log('Script approach: Writing complete merged file...');
// Since the heuristic parsing is too complex for the spread/dynamic format,
// let me write a different approach.

writeFileSync(
  join(ROOT, 'src', 'i18n', 'content', '.merge-progress.log'),
  `TODO: Need to generate merged service-translations.ts\nFrench data already in file (1894 lines)\nNeed to add: de, it, ko, ru\n`
);

console.log('Done. See .merge-progress.log');
