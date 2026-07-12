/**
 * Process i18n data files into overlay format for insertion into
 * service-translations.ts and guide-translations.ts.
 *
 * Handles:
 * - service data (ko, ru) with helper variables and spread operators
 * - guide data (de, it, ko, ru) in array format
 *
 * Outputs: scripts/out/ko-services.txt, ru-services.txt, guides.txt
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'i18n', 'content', 'data');
const OUT_DIR = join(__dirname, 'out');

mkdirSync(OUT_DIR, { recursive: true });

// ─── RAW TEXT EXTRACTION HELPERS ────────────────────────────────

/** Extract string value from a key in a block of text */
function extractStr(block, key) {
  const re = new RegExp(key + ":\\s*(['\`])([\\s\\S]*?)\\1\\s*,", 'm');
  const m = block.match(re);
  if (m) return m[2].replace(/\\'/g, "'").replace(/\\`/g, "`");
  return null;
}

/** Extract a string array from a key in a block */
function extractArr(block, key) {
  const re = new RegExp(key + ":\\s*\\[([\\s\\S]*?)\\]\\s*,", 'm');
  const m = block.match(re);
  if (!m) return null;
  const items = [];
  const arrStr = m[1];
  const regex = /['\`]([^'\`]*)['\`]/g;
  let match;
  while ((match = regex.exec(arrStr)) !== null) {
    items.push(match[1].replace(/\\'/g, "'").replace(/\\`/g, "`"));
  }
  return items.length > 0 ? items : null;
}

/** Extract process steps from a service block */
function extractProcess(block) {
  const re = /process:\s*\[([\s\S]*?)\]\s*,/;
  const procMatch = block.match(re);
  if (!procMatch) return [];
  const steps = [];
  const stepRegex = /\{\s*(?:step:\s*\d+\s*,)?\s*title:\s*['\`]([\s\S]*?)['\`]\s*,\s*description:\s*['\`]([\s\S]*?)['\`]\s*\}/g;
  let m;
  while ((m = stepRegex.exec(procMatch[1])) !== null) {
    steps.push({ title: m[1].replace(/\\'/g, "'"), description: m[2].replace(/\\'/g, "'") });
  }
  return steps;
}

/** Extract FAQ from a service block */
function extractFAQ(block) {
  // Find faq: [...] with possible trailing comma or newline
  const faqRe = /faq:\s*\[([\s\S]*?)\]\s*,?\s*\n/;
  const faqMatch = block.match(faqRe);
  if (!faqMatch) return [];
  const entries = [];
  const entryRegex = /\{\s*question:\s*['\`]([\s\S]*?)['\`]\s*,\s*answer:\s*['\`]([\s\S]*?)['\`]\s*\}/g;
  let m;
  while ((m = entryRegex.exec(faqMatch[1])) !== null) {
    entries.push({ question: m[1].replace(/\\'/g, "'"), answer: m[2].replace(/\\'/g, "'") });
  }
  return entries;
}

/** Extract helper arrays (LITE_COMMON, etc.) from file content */
function extractHelpers(fileContent) {
  const helpers = {};

  const names = ['LITE_COMMON', 'STANDARD_COMMON', 'PREMIUM_COMMON_WITH_WELCOME', 'PREMIUM_COMMON_NO_WELCOME'];
  for (const name of names) {
    const re = new RegExp("const\\s+" + name + "\\s*=\\s*\\[([\\s\\S]*?)\\];");
    const m = fileContent.match(re);
    if (!m) continue;
    const items = [];
    const strRegex = /['\`]([^'\`]*)['\`]/g;
    let match;
    while ((match = strRegex.exec(m[1])) !== null) {
      items.push(match[1]);
    }
    helpers[name] = items;
  }

  return helpers;
}

/** Resolve a tier's includes - handle spreads and direct strings */
function resolveIncludes(content, helpers, premiumCommonFn) {
  const results = [];
  const lines = content.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === ',' || trimmed === ']' || trimmed === '[') continue;

    if (trimmed.startsWith('...')) {
      const rest = trimmed.slice(3).trim();

      // Check if there's a .map() call
      const mapMatch = rest.match(/^(\w+)\.map\(\s*\w+\s*=>\s*\w+\.replace\(\s*['\`]([\s\S]*?)['\`]\s*,\s*['\`]([\s\S]*?)['\`]\s*\)\s*\)\s*,?\s*$/);
      if (mapMatch) {
        const varName = mapMatch[1];
        const from = mapMatch[2];
        const to = mapMatch[3];
        const arr = helpers[varName] || [];
        for (const item of arr) {
          results.push(item.replace(from, to));
        }
        continue;
      }

      // Check if it's premiumCommon(n)
      const pcMatch = rest.match(/^premiumCommon\(\s*(\d+)\s*\)\s*,?\s*$/);
      if (pcMatch) {
        const days = parseInt(pcMatch[1], 10);
        const arr = premiumCommonFn(days);
        results.push(...arr);
        continue;
      }

      // Plain spread: ...SOME_VAR
      const plainMatch = rest.match(/^(\w+)\s*,?\s*$/);
      if (plainMatch && helpers[plainMatch[1]]) {
        results.push(...helpers[plainMatch[1]]);
        continue;
      }
    }

    // Handle direct string
    const strMatch = trimmed.match(/^['\`]([\s\S]*?)['\`]\s*,?\s*$/);
    if (strMatch) {
      results.push(strMatch[1].replace(/\\'/g, "'"));
      continue;
    }
  }

  return results;
}

// ─── SERVICE DATA PROCESSING ────────────────────────────────────

function processServiceFile(locale, filePath) {
  console.log('Processing ' + locale + ' services...');
  const content = readFileSync(filePath, 'utf-8');

  const helpers = extractHelpers(content);
  const hasPremium = helpers['PREMIUM_COMMON_WITH_WELCOME'] && helpers['PREMIUM_COMMON_NO_WELCOME'];
  function premiumCommonFn(days) {
    return days >= 5 ? helpers['PREMIUM_COMMON_WITH_WELCOME'] : helpers['PREMIUM_COMMON_NO_WELCOME'];
  }

  const serviceBlocks = content.split(/\/\* *=+ */);
  const overlays = {};

  for (const block of serviceBlocks) {
    const slugMatch = block.match(/slug:\s*['\`]([\w-]+)['\`]/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];

    const title = extractStr(block, 'title');
    const subtitle = extractStr(block, 'subtitle');
    const category = extractStr(block, 'category');
    const location = extractStr(block, 'location');
    const durationLabel = extractStr(block, 'durationLabel');
    const description = extractStr(block, 'description');
    const longDescription = extractStr(block, 'longDescription');

    const whatIsIncluded = extractArr(block, 'whatIsIncluded');
    const highlights = extractArr(block, 'highlights');
    const suitableFor = extractArr(block, 'suitableFor');
    const notSuitableFor = extractArr(block, 'notSuitableFor');
    const seoKeywords = extractArr(block, 'seoKeywords');

    const process = extractProcess(block);
    const faq = extractFAQ(block);

    // Extract tiers array content
    const tiersRe = /tiers:\s*\[([\s\S]*?)\]\s*,?\s*\n/;
    const tiersMatch = block.match(tiersRe);
    if (!tiersMatch) {
      console.warn('  No tiers for ' + slug);
      continue;
    }

    // Parse individual tier objects
    const tierBlocks = [];
    const tcontent = tiersMatch[1];
    let idx = 0;
    while (idx < tcontent.length) {
      const tierStart = tcontent.indexOf('{', idx);
      if (tierStart === -1) break;
      let depth = 1;
      let pos = tierStart + 1;
      while (depth > 0 && pos < tcontent.length) {
        if (tcontent[pos] === '{') depth++;
        else if (tcontent[pos] === '}') depth--;
        pos++;
      }
      const tierBlock = tcontent.slice(tierStart, pos);
      tierBlocks.push(tierBlock);
      idx = pos;
    }

    const tiers = {};
    for (const tb of tierBlocks) {
      const tsM = tb.match(/slug:\s*['\`](lite|standard|premium)['\`]/);
      if (!tsM) continue;
      const ts = tsM[1];
      const name = extractStr(tb, 'name');
      const label = extractStr(tb, 'label');

      const incRe = /includes:\s*\[([\s\S]*?)\]\s*,?\s*\n?\s*\}/;
      const incMatch = tb.match(incRe);
      if (incMatch) {
        const includes = resolveIncludes(incMatch[1], helpers, premiumCommonFn);
        tiers[ts] = { name, label, includes };
      }
    }

    overlays[slug] = {
      title, subtitle, category, location, durationLabel,
      description, longDescription, whatIsIncluded,
      process, highlights: highlights || [],
      suitableFor: suitableFor || [],
      notSuitableFor: notSuitableFor || [],
      seoKeywords: seoKeywords || [],
      faq: faq || [],
      tiers,
    };
  }

  return overlays;
}

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function formatStrArr(arr) {
  if (!arr || arr.length === 0) return '[]';
  let out = '[\n';
  for (const item of arr) {
    const esc = item.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    out += "        '" + esc + "',\n";
  }
  out += '      ]';
  return out;
}

function formatServiceOverlay(locale, overlays) {
  // Note: ko and ru data files use these slugs (guangzhou-multi-category-sourcing, not guangzhou-wholesale-multi-category)
  const slugOrder = [
    'shenzhen-electronics-sprint',
    'shenzhen-dongguan-hardware-audit',
    'new-energy-supply-chain',
    'yiwu-commodity-sprint',
    'guangzhou-multi-category-sourcing',
    'guangzhou-apparel-leather',
    'textile-belt-deep-dive',
    'foshan-furniture-sourcing',
    'yunnan-coffee-tea-origin',
    'sichuan-spice-cuisine-route',
    'ningxia-goji-wine-route',
    'monopoly-factory-towns-explorer',
    'canton-fair-navigator',
  ];

  let out = '  ' + locale + ': {\n';

  for (const slug of slugOrder) {
    const s = overlays[slug];
    if (!s) {
      console.warn('  Missing slug: ' + slug);
      continue;
    }

    out += "    '" + slug + "': {\n";
    out += "      title: '" + escapeStr(s.title) + "',\n";
    out += "      subtitle: '" + escapeStr(s.subtitle) + "',\n";
    out += "      category: '" + escapeStr(s.category) + "',\n";
    out += "      location: '" + escapeStr(s.location) + "',\n";
    out += "      durationLabel: '" + escapeStr(s.durationLabel) + "',\n";
    out += "      description: '" + escapeStr(s.description) + "',\n";
    const ld = s.longDescription || s.description;
    out += "      longDescription: '" + escapeStr(ld) + "',\n";
    out += '      whatIsIncluded: ' + formatStrArr(s.whatIsIncluded) + ',\n';

    if (s.process && s.process.length > 0) {
      out += '      process: [\n';
      for (const p of s.process) {
        const pt = escapeStr(p.title);
        const pd = escapeStr(p.description);
        out += "        { title: '" + pt + "', description: '" + pd + "' },\n";
      }
      out += '      ],\n';
    }

    out += '      highlights: ' + formatStrArr(s.highlights) + ',\n';
    out += '      suitableFor: ' + formatStrArr(s.suitableFor) + ',\n';
    out += '      notSuitableFor: ' + formatStrArr(s.notSuitableFor) + ',\n';
    out += '      seoKeywords: ' + formatStrArr(s.seoKeywords) + ',\n';

    if (s.faq && s.faq.length > 0) {
      out += '      faq: [\n';
      for (const f of s.faq) {
        const fq = escapeStr(f.question);
        const fa = escapeStr(f.answer);
        out += "        { question: '" + fq + "', answer: '" + fa + "' },\n";
      }
      out += '      ],\n';
    }

    if (s.tiers) {
      out += '      tiers: {\n';
      for (const tierSlug of ['lite', 'standard', 'premium']) {
        const t = s.tiers[tierSlug];
        if (!t) continue;
        out += '        ' + tierSlug + ': {\n';
        out += "          name: '" + escapeStr(t.name) + "',\n";
        out += "          label: '" + escapeStr(t.label) + "',\n";
        out += '          includes: ' + formatStrArr(t.includes) + ',\n';
        out += '        },\n';
      }
      out += '      },\n';
    }

    out += '    },\n\n';
  }

  out += '  },\n';
  return out;
}

// ─── GUIDE DATA PROCESSING ──────────────────────────────────────

function processGuideFile(locale, filePath) {
  console.log('Processing ' + locale + ' guides...');
  const content = readFileSync(filePath, 'utf-8');

  // Check if French format (slug-keyed)
  if (content.includes('const data:')) {
    // Extract the data object content
    const start = content.indexOf('{');
    const end = content.lastIndexOf('};');
    const dataStr = content.slice(start, end + 1);

    const overlays = {};
    // Match each slug entry
    const slugRe = /'([\w-]+)':\s*\{/g;
    let slugMatch;
    while ((slugMatch = slugRe.exec(dataStr)) !== null) {
      const slug = slugMatch[1];
      // Find the matching closing brace for this entry
      const entryStart = slugMatch.index + slugMatch[0].length;
      let depth = 1;
      let pos = entryStart;
      while (depth > 0 && pos < dataStr.length) {
        if (dataStr[pos] === '{') depth++;
        else if (dataStr[pos] === '}') depth--;
        pos++;
      }
      const block = dataStr.slice(entryStart, pos - 1);

      const title = extractStr(block, 'title');
      const excerpt = extractStr(block, 'excerpt');
      const category = extractStr(block, 'category');
      const readTime = extractStr(block, 'readTime');
      const contentMatch = block.match(/content:\s*`([\s\S]*?)`\s*,/);
      const contentStr = contentMatch ? contentMatch[1] : '';
      const seoKeywords = extractArr(block, 'seoKeywords');

      overlays[slug] = { title, excerpt, category, readTime, content: contentStr, seoKeywords };
    }
    return overlays;
  }

  // Array format - use brace matching
  const arrayStart = content.indexOf('[');
  const arrayEnd = content.lastIndexOf(']');
  const arrayContent = content.slice(arrayStart + 1, arrayEnd);

  const overlays = {};
  let idx = 0;
  while (idx < arrayContent.length) {
    const objStart = arrayContent.indexOf('{', idx);
    if (objStart === -1) break;
    let depth = 1;
    let pos = objStart + 1;
    while (depth > 0 && pos < arrayContent.length) {
      if (arrayContent[pos] === '{') depth++;
      else if (arrayContent[pos] === '}') depth--;
      pos++;
    }
    const objBlock = arrayContent.slice(objStart, pos);

    const slugMatch = objBlock.match(/slug:\s*['\`]([\w-]+)['\`]/);
    if (slugMatch) {
      const slug = slugMatch[1];
      const title = extractStr(objBlock, 'title');
      const excerpt = extractStr(objBlock, 'excerpt');
      const category = extractStr(objBlock, 'category');
      const readTime = extractStr(objBlock, 'readTime');
      const contentMatch = objBlock.match(/content:\s*`([\s\S]*?)`\s*,/);
      const contentStr = contentMatch ? contentMatch[1] : '';
      const seoKeywords = extractArr(objBlock, 'seoKeywords');
      overlays[slug] = { title, excerpt, category, readTime, content: contentStr, seoKeywords };
    }

    idx = pos;
  }

  return overlays;
}

function formatGuideOverlay(locale, overlays) {
  const slugOrder = [
    'how-to-visit-chinese-factories',
    'china-sourcing-cost-breakdown',
    'canton-fair-survival-guide',
    'yiwu-market-buying-guide',
    'how-to-verify-chinese-suppliers',
    'china-electronics-manufacturing-hubs',
    'china-food-beverage-sourcing',
  ];

  let out = '  ' + locale + ': {\n';
  for (const slug of slugOrder) {
    const g = overlays[slug];
    if (!g) {
      console.warn('  Missing guide slug: ' + slug);
      continue;
    }

    out += "    '" + slug + "': {\n";
    out += "      title: '" + escapeStr(g.title) + "',\n";
    out += "      excerpt: '" + escapeStr(g.excerpt) + "',\n";
    out += "      category: '" + escapeStr(g.category) + "',\n";
    out += "      readTime: '" + escapeStr(g.readTime) + "',\n";
    out += '      content: `' + g.content + '`,\n';
    out += '      seoKeywords: ' + formatStrArr(g.seoKeywords) + ',\n';
    out += '    },\n\n';
  }
  out += '  },\n';
  return out;
}

// ─── MAIN ───────────────────────────────────────────────────────

// Process service files
console.log('=== SERVICE TRANSLATIONS ===');
try {
  const koServices = processServiceFile('ko', join(DATA_DIR, 'ko-services.ts'));
  const koFormatted = formatServiceOverlay('ko', koServices);
  writeFileSync(join(OUT_DIR, 'ko-services.txt'), koFormatted);
  console.log('  Written: ko-services.txt (' + Object.keys(koServices).length + ' services)');

  const ruServices = processServiceFile('ru', join(DATA_DIR, 'ru-services.ts'));
  const ruFormatted = formatServiceOverlay('ru', ruServices);
  writeFileSync(join(OUT_DIR, 'ru-services.txt'), ruFormatted);
  console.log('  Written: ru-services.txt (' + Object.keys(ruServices).length + ' services)');
} catch(e) {
  console.error('  Error processing services:', e.message);
  console.error(e.stack);
}

// Process guide files
console.log('\n=== GUIDE TRANSLATIONS ===');
try {
  const allGuides = {};

  const localeFiles = {
    fr: 'fr-guides.ts',
    de: 'de-guides.ts',
    it: 'it-guides.ts',
    ko: 'ko-guides.ts',
    ru: 'ru-guides.ts',
  };

  for (const [locale, filename] of Object.entries(localeFiles)) {
    const data = processGuideFile(locale, join(DATA_DIR, filename));
    if (data) {
      allGuides[locale] = data;
      console.log('  ' + locale + ': ' + Object.keys(data).length + ' guides parsed');
    }
  }

  let guideOut = 'const translations: LocaleTranslations = {\n';
  for (const locale of ['fr', 'de', 'it', 'ko', 'ru']) {
    if (allGuides[locale]) {
      guideOut += formatGuideOverlay(locale, allGuides[locale]);
    }
  }
  guideOut += '};\n';

  writeFileSync(join(OUT_DIR, 'guides.txt'), guideOut);
  console.log('  Written: guides.txt');
} catch(e) {
  console.error('  Error processing guides:', e.message);
  console.error(e.stack);
}

console.log('\nDone. Output files in scripts/out/');
