/**
 * Image assets — all sourced from Unsplash via the Unsplash API.
 * Format: https://images.unsplash.com/photo-{id}?w={W}&q=80&auto=format&fit=crop
 */

const base = 'https://images.unsplash.com/photo-';
const q = 'q=80&auto=format&fit=crop';

function img(id: string, w = 1200) {
  return `${base}${id}?w=${w}&${q}`;
}

/** Build a srcSet for responsive images */
export function imgSrcSet(id: string, widths = [400, 800, 1200]) {
  return widths.map((w) => `${base}${id}?w=${w}&${q} ${w}w`).join(', ');
}

// ─── Hero & Landing ───────────────────────────────────────
export const IMAGE_HERO = {
  id: '1496247749665-49cf5b1022e9',
  src: img('1496247749665-49cf5b1022e9'),
  alt: 'Interior of a large industrial factory with machinery',
};

// ─── Service Hero Images (mapped by service slug) ─────────
export const SERVICE_IMAGES: Record<string, { id: string; alt: string }> = {
  'shenzhen-electronics-sprint': {
    id: '1562408590-e32931084e23',
    alt: 'Blue circuit board electronics manufacturing',
  },
  'shenzhen-dongguan-hardware-audit': {
    id: '1647427060118-4911c9821b82',
    alt: 'Factory filled with industrial machines and equipment',
  },
  'new-energy-supply-chain': {
    id: '1509391366360-2e959784a276',
    alt: 'Solar panels on green field renewable energy',
  },
  'yiwu-commodity-sprint': {
    id: '1759800805389-d9cdce780529',
    alt: 'Busy indoor market with people and stalls',
  },
  'guangzhou-multi-category-sourcing': {
    id: '1578916171728-46686eac8d58',
    alt: 'Consumer goods displayed on retail shelves',
  },
  'guangzhou-apparel-leather': {
    id: '1741176506261-73218298e4d8',
    alt: 'Textile workers sorting fabric in a factory',
  },
  'textile-belt-deep-dive': {
    id: '1741176505800-caaa3a52631a',
    alt: 'Workers sew textiles in a large factory setting',
  },
  'foshan-furniture-sourcing': {
    id: '1631396326838-de37e5f8bcbc',
    alt: 'Man working on a piece of wood in a workshop',
  },
  'yunnan-coffee-tea-origin': {
    id: '1774405071758-c75f4ec6fd54',
    alt: 'Bowls of spices and dried goods displayed in a market',
  },
  'sichuan-spice-cuisine-route': {
    id: '1764332688812-f6ac09a687bb',
    alt: 'Bowls of spicy chili paste and seasonings',
  },
  'ningxia-goji-wine-route': {
    id: '1774405071758-c75f4ec6fd54',
    alt: 'Agricultural produce display',
  },
  'monopoly-factory-towns-explorer': {
    id: '1610891015188-5369212db097',
    alt: 'Industrial textile factory with machinery and pipes',
  },
  'canton-fair-navigator': {
    id: '1762028892701-692dc360db08',
    alt: 'Man in suit presenting equipment at a trade show',
  },
};

export function getServiceImage(slug: string) {
  return SERVICE_IMAGES[slug] || {
    id: IMAGE_HERO.id,
    alt: 'Manufacturing and sourcing in China',
  };
}

// ─── Industry Images ──────────────────────────────────────
export const INDUSTRY_IMAGES: Record<string, { id: string; alt: string }> = {
  electronics: {
    id: '1518770660439-4636190af475',
    alt: 'Macro photography of black circuit board',
  },
  'consumer-goods': {
    id: '1515706886582-54c73c5eaf41',
    alt: 'Consumer products on retail display shelves',
  },
  'apparel-textile': {
    id: '1741176505800-caaa3a52631a',
    alt: 'Workers sewing textiles in a large factory',
  },
  furniture: {
    id: '1659930087003-2d64e33181f7',
    alt: 'Craftsman cutting a piece of wood in a workshop',
  },
  'food-beverage': {
    id: '1710508787399-e3dc878838a8',
    alt: 'Stir fried vegetables dish',
  },
  'monopoly-towns': {
    id: '1610891015188-5369212db097',
    alt: 'Industrial factory with machinery and pipes',
  },
  'canton-fair': {
    id: '1761195689615-9469b65dac01',
    alt: 'People at a business exhibition interacting with a booth',
  },
};

export function getIndustryImage(slug: string) {
  return INDUSTRY_IMAGES[slug] || {
    id: IMAGE_HERO.id,
    alt: 'China manufacturing industry',
  };
}

// ─── Guide Images ─────────────────────────────────────────
export const GUIDE_IMAGES: Record<string, { id: string; alt: string }> = {
  'how-to-visit-chinese-factories': {
    id: '1700727448575-6f1680cd7d75',
    alt: 'Inspector holding a clipboard in a factory',
  },
  'china-sourcing-cost-breakdown': {
    id: '1587293852726-70cdb56c2866',
    alt: 'Brown cardboard boxes on white metal rack warehouse',
  },
  'canton-fair-survival-guide': {
    id: '1727714961875-d06e84a09ff7',
    alt: 'Crowd of people at an exhibition event',
  },
  'yiwu-market-buying-guide': {
    id: '1759800805389-d9cdce780529',
    alt: 'Busy indoor wholesale market with people and stalls',
  },
  'how-to-verify-chinese-suppliers': {
    id: '1748347084012-075796185d56',
    alt: 'Man inspecting equipment in a modern factory',
  },
  'china-electronics-manufacturing-hubs': {
    id: '1555664424-778a1e5e1b48',
    alt: 'Flat lay photography of a circuit board',
  },
  'china-food-beverage-sourcing': {
    id: '1764332688812-f6ac09a687bb',
    alt: 'Bowls of spicy chili paste and seasonings',
  },
};

export function getGuideImage(slug: string) {
  return GUIDE_IMAGES[slug] || {
    id: IMAGE_HERO.id,
    alt: 'China sourcing guide illustration',
  };
}

// ─── About / Team / Contact ──────────────────────────────
export const IMAGE_ABOUT_HERO = {
  id: '1622675363311-3e1904dc1885',
  alt: 'Diverse team collaborating in a board meeting',
};

export const IMAGE_CONTACT = {
  id: '1758518726869-01aff69a56e3',
  alt: 'Three professionals in business attire conversing indoors',
};

export const IMAGE_HOW_IT_WORKS = {
  id: '1606185540834-d6e7483ee1a4',
  alt: 'Cargo ship on water global logistics',
};

export const IMAGE_CHINA_CITY = {
  id: '1596126753191-6f70d03fd80d',
  alt: 'Aerial view of modern city skyline',
};

// ─── Utility for Next.js Image component ─────────────────
export function unsplashUrl(id: string, width = 1200) {
  return img(id, width);
}
