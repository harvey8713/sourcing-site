import { readFileSync, writeFileSync } from 'fs';

const c = readFileSync('src/i18n/content/service-translations.ts', 'utf-8');

const SLUGS = [
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

const lines = c.split('\n');
const result = [];
let slugIdx = 0;

for (const line of lines) {
  if (line.trim() === '+ name + : {') {
    const indent = line.match(/^\s*/)[0];
    const slug = SLUGS[slugIdx % 13];
    result.push(indent + "'" + slug + "': {");
    slugIdx++;
  } else {
    result.push(line);
  }
}

console.log('Replaced ' + slugIdx + ' occurrences');

// Remove the truncated "export function getServices" at the end
let content = result.join('\n');
content = content.replace(/\nexport function getServices$/, '');

// Check if we need to add the allTranslations declaration
if (!content.includes('const allTranslations')) {
  // Find the end of the translations object
  // It should be: };\n at the end (before the truncated function)
  content += '\n\nconst allTranslations = {};\n';

  content += `
export function setServiceTranslations(locale, data) {
  allTranslations[locale] = data;
}

function applyTranslation(svc, t) {
  if (!t) return svc;
  return {
    ...svc,
    title: t.title ?? svc.title,
    subtitle: t.subtitle ?? svc.subtitle,
    category: t.category ?? svc.category,
    location: t.location ?? svc.location,
    durationLabel: t.durationLabel ?? svc.durationLabel,
    description: t.description ?? svc.description,
    longDescription: t.longDescription ?? svc.longDescription,
    whatIsIncluded: t.whatIsIncluded ?? svc.whatIsIncluded,
    highlights: t.highlights ?? svc.highlights,
    suitableFor: t.suitableFor ?? svc.suitableFor,
    notSuitableFor: t.notSuitableFor ?? svc.notSuitableFor,
    process: t.process ? t.process.map((p, i) => ({ step: i + 1, ...p })) : svc.process,
    faq: t.faq ?? svc.faq,
    tiers: svc.tiers.map((tier) => {
      const tt = t.tiers?.[tier.slug];
      if (!tt) return tier;
      return { ...tier, name: tt.name, label: tt.label, includes: tt.includes };
    }),
    seoKeywords: t.seoKeywords ?? svc.seoKeywords,
  };
}

export function getServices(locale) {
  const overlay = allTranslations[locale];
  if (!overlay) return baseServices;
  return baseServices.map((s) => applyTranslation(s, overlay[s.slug]));
}

export function getServiceBySlug(slug, locale) {
  const svc = baseGetBySlug(slug);
  if (!svc) return undefined;
  const overlay = allTranslations[locale];
  return applyTranslation(svc, overlay?.[slug]);
}
`;
}

writeFileSync('src/i18n/content/service-translations.ts', content);
console.log('Written. Verifying...');

const v = readFileSync('src/i18n/content/service-translations.ts', 'utf-8');
const remaining = (v.match(/\+ name \+/g) || []).length;
console.log('Remaining + name +:', remaining);
console.log('Total lines:', v.split('\n').length);
