/**
 * Extract translation overlay data from data files using pure text parsing.
 * No TypeScript compilation required.
 *
 * fr-* files: const data: Record<string, any> = { ... }; export default data;
 * de/it/ko/ru-* files: export const {type}: FullEntity[] = [ ... ];
 *
 * Strategy:
 * - For fr files: extract the object literal from "const data... = {"
 * - For de/it/ko/ru: extract the array, then for each entity pull only overlay fields
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(process.cwd(), 'src/i18n/content/data');
const CONTENT_DIR = path.resolve(process.cwd(), 'src/i18n/content');

const LOCALES = ['fr', 'de', 'it', 'ko', 'ru'];
const TYPES = ['services', 'cities', 'industries', 'guides', 'faqs'];

// Overlay field sets for each type
const OVERLAY_FIELDS = {
  services: [
    'title', 'subtitle', 'category', 'location', 'durationLabel',
    'description', 'longDescription', 'whatIsIncluded', 'highlights',
    'suitableFor', 'notSuitableFor', 'process', 'faq', 'tiers', 'seoKeywords',
  ],
  cities: [
    'subtitle', 'description', 'longDescription', 'badge', 'highlights',
    'suitableFor', 'notSuitableFor', 'faq',
  ],
  industries: [
    'name', 'description', 'heroCopy', 'keyRegions', 'whatWeAudit',
    'caseSummary', 'seoKeywords',
  ],
  guides: [
    'title', 'excerpt', 'category', 'readTime', 'content', 'seoKeywords',
  ],
  faqs: [
    'question', 'answer',
  ],
};

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.error(`Failed to read ${filePath}:`, e.message);
    return null;
  }
}

/**
 * Extract FR overlay data (which is already in the right format).
 * FR files pattern: const data: Record<string, any> = { ... }; export default data;
 */
function extractFrOverlay(contents) {
  // Find the object literal assigned to `const data`
  // Pattern: const data[: TypeAnnotation]? = { ... };
  const match = contents.match(/const\s+data\b[^=]*=\s*(\{[^]*?\n\});\s*\n\s*export\s+default\s+data/);
  if (!match) {
    console.error('  FR: Could not find data object');
    return null;
  }

  try {
    // eval the object literal
    return eval('(' + match[1] + ')');
  } catch (e) {
    console.error('  FR: Failed to eval object:', e.message);
    return null;
  }
}

/**
 * Extract overlay fields from full entity arrays (de/it/ko/ru).
 * Pattern: export const {name}[{: TypeAnnotation}]? = [ ... ];
 */
function extractEntityOverlay(contents, type) {
  // Find the exported const array
  // Pattern: export const Xxx[: TypeAnnotation]? = [ ... ];
  const match = contents.match(/export\s+const\s+\w+\s*(?::\s*[^\]]*\])?\s*=\s*(\[[^]*\n\]);/);
  if (!match) {
    console.error(`  Could not find exported array for ${type}`);
    return null;
  }

  try {
    const entities = eval('(' + match[1] + ')');
    return entitiesToOverlay(entities, type);
  } catch (e) {
    console.error(`  Failed to eval array:`, e.message);
    return null;
  }
}

function entitiesToOverlay(entities, type) {
  const overlayFields = OVERLAY_FIELDS[type];
  const result = {};

  for (const entity of entities) {
    // Key can be slug, id, or for guides sometimes slug
    const key = entity.slug || entity.id || '';
    if (!key) {
      console.warn(`  WARNING: entity without slug/id found`);
      continue;
    }

    const overlay = {};
    for (const field of overlayFields) {
      if (entity[field] !== undefined) {
        let val = entity[field];
        // Strip icon from city highlights for DE/IT/KO/RU locales
        if (type === 'cities' && field === 'highlights' && Array.isArray(val)) {
          val = val.map(h => {
            const { icon, ...rest } = h;
            return rest;
          });
        }
        overlay[field] = val;
      }
    }

    if (Object.keys(overlay).length > 0) {
      result[key] = overlay;
    }
  }

  return result;
}

/**
 * Read the original main module file to get its structure (imports, type defs, exports).
 */
function getModuleStructure(type) {
  const filePath = path.join(CONTENT_DIR, `${type}-translations.ts`);
  const contents = fs.readFileSync(filePath, 'utf-8');

  // Split at "const translations:"
  const parts = contents.split('const translations:');
  const prefix = parts[0];

  // Extract suffix after translations closing
  const suffixMatch = parts[1]?.match(/\};([\s\S]*)/);
  const suffix = suffixMatch ? suffixMatch[1] : '';

  return { prefix, suffix };
}

function formatObject(obj, indent = 2) {
  if (obj === null || obj === undefined) return 'null';
  if (typeof obj !== 'object') return JSON.stringify(obj);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    // Check if items are simple (strings) or complex
    const allSimple = obj.every(item => typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean');
    if (allSimple && obj.every(item => typeof item === 'string')) {
      // Compact array of strings
      const items = obj.map(s => JSON.stringify(s)).join(', ');
      if (items.length < 80) return `[${items}]`;
    }
    // Multi-line array
    const innerIndent = ' '.repeat(indent + 2);
    const items = obj.map(item => `${innerIndent}${formatObject(item, indent + 2)}`);
    return `[\n${items.join(',\n')},\n${' '.repeat(indent)}]`;
  }

  // Object
  const keys = Object.keys(obj);
  if (keys.length === 0) return '{}';

  const innerIndent = ' '.repeat(indent + 2);
  const outerIndent = ' '.repeat(indent);
  const pairs = keys.map(key => `${innerIndent}${JSON.stringify(key)}: ${formatObject(obj[key], indent + 2)}`);
  return `{\n${pairs.join(',\n')},\n${outerIndent}}`;
}

function generateMainModule(type, translations) {
  const { prefix, suffix } = getModuleStructure(type);

  const localeEntries = LOCALES.map(locale => {
    const data = translations[locale];
    if (!data || Object.keys(data).length === 0) {
      return `  ${locale}: {},`;
    }
    return `  ${locale}: ${formatObject(data)},`;
  });

  return `${prefix}const translations: LocaleTranslations = {
${localeEntries.join('\n')}
} as const;${suffix}`;
}

// Main
function main() {
  const typeArg = process.argv[2] || 'all';
  const typesToProcess = typeArg === 'all' ? [...TYPES] : [typeArg];

  for (const type of typesToProcess) {
    console.log(`\n=== Processing ${type} ===`);
    const translations = {};

    for (const locale of LOCALES) {
      const filePath = path.join(DATA_DIR, `${locale}-${type}.ts`);
      console.log(`  ${locale}-${type}...`);
      const contents = readFileContent(filePath);
      if (!contents) continue;

      let data;
      if (locale === 'fr') {
        data = extractFrOverlay(contents);
      } else {
        data = extractEntityOverlay(contents, type);
      }

      if (data) {
        translations[locale] = data;
        console.log(`    -> ${Object.keys(data).length} entries`);
      } else {
        translations[locale] = {};
      }
    }

    // Generate and write the main module
    const moduleContent = generateMainModule(type, translations);
    const outputPath = path.join(CONTENT_DIR, `${type}-translations.ts`);
    fs.writeFileSync(outputPath, moduleContent, 'utf-8');
    console.log(`  Written to ${outputPath}`);
  }

  console.log('\nDone!');
}

main();
