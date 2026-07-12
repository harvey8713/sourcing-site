import type { Service } from '@/types';

/* ------------------------------------------------------------------ */
/*  Common tier includes (used as base, customised per service below)  */
/* ------------------------------------------------------------------ */

const LITE_COMMON = [
  'Pre-trip factory shortlist (5–8 vetted suppliers)',
  'Bilingual interpreter + private car + supply chain liaison + platform supervisor',
  'Guided factory visits with management introductions',
  'Airport pickup & drop-off',
  '10-page trip summary with factory profiles & photos',
  '14-day post-trip WeChat / email support',
];

const STANDARD_COMMON = [
  'Deep supplier screening (50+ factories vetted pre-trip)',
  'Bilingual interpreter + private car + supply chain liaison + platform supervisor',
  'On-site factory audits at 5–8 facilities — photos, videos, QC documentation',
  'Farewell dinner with liaison & supervisor',
  'Airport pickup & drop-off',
  '30–40 page due diligence report — supplier scoring matrix, pricing analysis, quality assessment',
  '30-day dedicated WeChat group — negotiation & contract review support',
];

const PREMIUM_COMMON_WITH_WELCOME = [
  'Elite supplier screening (80–120 factories, credit & litigation checks)',
  'Full team + industry specialist advisor',
  'On-site audits at 8–12 facilities — financial health & capacity assessments',
  'Welcome dinner + executive farewell dinner with factory owners',
  'Airport pickup & drop-off + full-itinerary business vehicle',
  '50–60 page deep-dive report — cost breakdown, risk map, strategy',
  '60-day priority support — direct line to supply chain lead',
  'Free sample consolidation & shipping (first 5 kg)',
];

const PREMIUM_COMMON_NO_WELCOME = [
  'Elite supplier screening (80–120 factories, credit & litigation checks)',
  'Full team + industry specialist advisor',
  'On-site audits at 8–12 facilities — financial health & capacity assessments',
  'Executive farewell dinner with factory owners',
  'Airport pickup & drop-off + full-itinerary business vehicle',
  '50–60 page deep-dive report — cost breakdown, risk map, strategy',
  '60-day priority support — direct line to supply chain lead',
  'Free sample consolidation & shipping (first 5 kg)',
];

/* Helper – returns the right premium common list based on days */
function premiumCommon(days: number) {
  return days >= 5 ? PREMIUM_COMMON_WITH_WELCOME : PREMIUM_COMMON_NO_WELCOME;
}

/* ------------------------------------------------------------------ */
/*  Services                                                            */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  /* ================================================================ */
  /*  1. Shenzhen Electronics Sprint                                   */
  /* ================================================================ */
  {
    slug: 'shenzhen-electronics-sprint',
    title: 'Shenzhen Electronics Sprint',
    subtitle:
      '5-day deep dive into Huaqiangbei, OEM factories, and the Shenzhen hardware ecosystem',
    category: 'Electronics Sprint',
    industry: 'electronics',
    location: 'Shenzhen, Guangdong',
    cities: ['Shenzhen'],
    durationDays: 5,
    durationLabel: '5 days',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$5,199',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('5–8 vetted suppliers', '5–8 Shenzhen electronics factories')),
          'Brief Huaqiangbei market walkthrough',
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Huaqiangbei component market guided tour with sourcing engineer',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'PCB reverse-engineering analysis report',
        ],
      },
    ],
    description:
      'Visit Shenzhen electronics factories and Huaqiangbei markets with an experienced sourcing agent. Factory audits, supplier verification, and component sourcing in China’s hardware capital.',
    longDescription:
      'Shenzhen is the world’s electronics manufacturing capital. In 5 days, we take you inside the factories that build everything from IoT devices to consumer electronics. You’ll walk Huaqiangbei’s legendary component markets, audit potential manufacturing partners, and leave with a verified shortlist of suppliers ready to produce.',
    whatIsIncluded: [
      'Pre-trip supplier shortlist (10-15 factories)',
      'On-site factory audits at 5-8 facilities',
      'Huaqiangbei market guided tour',
      'Sample collection and shipping coordination',
      '30+ page due diligence report with photos & videos',
      'Post-trip supplier negotiation support',
    ],
    process: [
      { step: 1, title: 'Requirement Brief', description: 'We document your product specs, BOM, target price, and certification needs.' },
      { step: 2, title: 'Supplier Vetting', description: 'Our team screens 50+ factories using trade data, certifications, and sample reviews to create a shortlist.' },
      { step: 3, title: 'On-Site Sprint', description: '5 days of back-to-back factory visits, production line inspections, and management interviews.' },
      { step: 4, title: 'Huaqiangbei Deep Dive', description: 'Component sourcing at the world’s largest electronics market with a sourcing engineer.' },
      { step: 5, title: 'Report & Handoff', description: 'Detailed report with supplier rankings, pricing analysis, and contract negotiation support.' },
    ],
    highlights: [
      'Access to factories not findable on Alibaba',
      'Component-level cost breakdown',
      'PCB manufacturing partner evaluation',
      'Certification compliance check (CE, FCC, RoHS)',
    ],
    suitableFor: [
      'Hardware startups prototyping electronics',
      'Importers sourcing consumer electronics',
      'IoT / smart home brands',
      'Companies needing PCB assembly partners',
    ],
    notSuitableFor: [
      'Buyers of fully finished, low-complexity goods',
      'Those looking for a single factory visit (this is a sprint)',
    ],
    seoKeywords: [
      'Shenzhen electronics factory audit',
      'Huaqiangbei sourcing guide',
      'China electronics manufacturing visit',
      'Shenzhen PCB supplier verification',
      'electronics sourcing agent China',
    ],
    faq: [
      { question: 'Do I need to speak Mandarin?', answer: 'No. Our bilingual team handles all communication. We interpret during meetings and translate all documents.' },
      { question: 'Can you help with small MOQs?', answer: 'Yes. Shenzhen has many factories that accept small batch orders (100-500 units). We specifically target these for startups.' },
      { question: 'What certifications can you verify?', answer: 'We check CE, FCC, RoHS, UL, ISO 9001, and other common certifications. We can also verify factory-specific certifications on-site.' },
    ],
    imageColor: 'bg-blue-900',
  },

  /* ================================================================ */
  /*  2. Shenzhen-Dongguan Hardware Audit                             */
  /* ================================================================ */
  {
    slug: 'shenzhen-dongguan-hardware-audit',
    title: 'Shenzhen-Dongguan Hardware Audit',
    subtitle:
      '5-day industrial hardware, mold-making, and precision manufacturing due diligence',
    category: 'Hardware Audit',
    industry: 'electronics',
    location: 'Shenzhen & Dongguan, Guangdong',
    cities: ['Shenzhen', 'Dongguan'],
    durationDays: 5,
    durationLabel: '5 days',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Mold-making and CNC machining facility deep-dives',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Mold flow analysis & material traceability assessment',
        ],
      },
    ],
    description:
      'Audit precision manufacturing, mold-making, and industrial hardware suppliers across Shenzhen and Dongguan. Detailed facility inspections and financial health checks.',
    longDescription:
      'The Shenzhen-Dongguan corridor is the backbone of China’s precision manufacturing. From injection molds to CNC machining, this 5-day audit covers the industrial hardware supply chain. We inspect factories, review quality systems, and verify financial health so you can source with confidence.',
    whatIsIncluded: [
      'Pre-trip factory vetting (8-12 facilities)',
      'On-site mold-making facility inspections',
      'CNC machining and tooling audits',
      'Quality management system review',
      'Financial health assessment',
      '30+ page report with factory comparison matrix',
    ],
    process: [
      { step: 1, title: 'Requirement Mapping', description: 'Define material specs, tolerances, production volume, and quality standards.' },
      { step: 2, title: 'Factory Screening', description: 'Vet 40+ factories, shortlist 8-12 for on-site visits based on capability match.' },
      { step: 3, title: 'On-Site Audits', description: 'Visit factories, inspect production lines, review QC processes, and interview management.' },
      { step: 4, title: 'Quality Deep Dive', description: 'Review sample parts, test reports, and quality management documentation.' },
      { step: 5, title: 'Comparative Report', description: 'Side-by-side factory comparison with pricing, capability, and risk assessments.' },
    ],
    highlights: [
      'Mold flow analysis review',
      'Material traceability verification',
      'Precision tolerance capability assessment',
      'Supply chain financial stability check',
    ],
    suitableFor: [
      'Industrial equipment buyers',
      'Companies needing precision metal/plastic parts',
      'Mold and tooling importers',
      'Automotive parts sourcing',
    ],
    notSuitableFor: [
      'Consumer electronics prototyping (see Electronics Sprint)',
      'Simple commodity products',
    ],
    seoKeywords: [
      'Dongguan mold factory audit',
      'China precision manufacturing inspection',
      'Shenzhen hardware supplier verification',
      'CNC machining factory audit China',
    ],
    faq: [
      { question: 'Can you audit ISO-certified factories?', answer: 'Yes. We verify ISO 9001, IATF 16949, and other certifications during our on-site visits.' },
      { question: 'Do you review financial records?', answer: 'We conduct a financial health assessment including registered capital verification, export history, and credit checks through Chinese business databases.' },
      { question: 'What tolerances can you verify?', answer: 'We can assess facilities producing parts down to ±0.01mm tolerance. We bring measurement tools and review factory QC equipment.' },
    ],
    imageColor: 'bg-blue-800',
  },

  /* ================================================================ */
  /*  3. New Energy Supply Chain                                      */
  /* ================================================================ */
  {
    slug: 'new-energy-supply-chain',
    title: 'New Energy Supply Chain',
    subtitle:
      '3-day audit of lithium battery, solar, and EV component suppliers in the Pearl River Delta',
    category: 'New Energy',
    industry: 'electronics',
    location: 'Shenzhen & Pearl River Delta',
    cities: ['Shenzhen', 'Dongguan', 'Huizhou'],
    durationDays: 3,
    durationLabel: '3 days',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Safety certification verification (UN38.3, IEC, UL)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Supply chain conflict mineral compliance audit',
        ],
      },
    ],
    description:
      'Specialized due diligence for lithium battery, solar panel, and EV component suppliers. Safety certification verification and production capability assessment.',
    longDescription:
      'China dominates the global new energy supply chain. From lithium battery cells to solar panel components, we audit the factories that power the energy transition. Our 3-day intensive audit covers safety certifications, production capability, and supply chain traceability.',
    whatIsIncluded: [
      'Supplier pre-screening (battery, solar, EV components)',
      'On-site factory inspections (3-5 facilities)',
      'Safety certification verification (UN38.3, IEC, UL)',
      'Production line and testing lab audit',
      'Raw material traceability check',
      '25+ page report with compliance assessment',
    ],
    process: [
      { step: 1, title: 'Product Specification Review', description: 'Define chemistry, capacity, form factor, and certification requirements.' },
      { step: 2, title: 'Supplier Identification', description: 'Identify qualified manufacturers through industry databases and trade networks.' },
      { step: 3, title: 'Factory Audits', description: '3-day intensive visits covering production, testing, and safety systems.' },
      { step: 4, title: 'Compliance Verification', description: 'Cross-check certifications, test reports, and regulatory compliance.' },
      { step: 5, title: 'Risk Assessment Report', description: 'Detailed findings with recommendations on supplier readiness and compliance gaps.' },
    ],
    highlights: [
      'Battery cell safety certification checks',
      'Supply chain conflict mineral compliance',
      'Factory testing lab capability assessment',
      'Export licensing verification',
    ],
    suitableFor: [
      'EV component buyers',
      'Solar energy equipment importers',
      'Battery and power bank distributors',
      'Energy storage system companies',
    ],
    notSuitableFor: [
      'Small-scale consumer electronics batteries',
      'Non-certified product buyers',
    ],
    seoKeywords: [
      'China lithium battery supplier audit',
      'solar panel factory inspection China',
      'EV component supplier verification',
      'China new energy supply chain due diligence',
    ],
    faq: [
      { question: 'Do you verify UN38.3 certification?', answer: 'Yes. We verify UN38.3, MSDS, IEC 62133, and other relevant safety certifications during our factory audits.' },
      { question: 'Can you check for conflict minerals?', answer: 'We review supplier mineral sourcing documentation and can trace cobalt, lithium, and other material supply chains.' },
    ],
    imageColor: 'bg-green-800',
  },

  /* ================================================================ */
  /*  4. Yiwu Commodity Sprint                                        */
  /* ================================================================ */
  {
    slug: 'yiwu-commodity-sprint',
    title: 'Yiwu Commodity Sprint',
    subtitle:
      '3-day guided sourcing through the world’s largest wholesale market for consumer goods',
    category: 'Commodity Sprint',
    industry: 'consumer-goods',
    location: 'Yiwu, Zhejiang',
    cities: ['Yiwu'],
    durationDays: 3,
    durationLabel: '3 days',
    price: '$4,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$3,599',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('factory', 'market booth')),
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$4,799',
        includes: [
          ...STANDARD_COMMON.map((s) => s.replace('factory', 'supplier')),
          'District-by-district market route optimization',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$7,999',
        includes: [
          ...premiumCommon(3),
          'Factory-behind-the-booth verification visits',
        ],
      },
    ],
    description:
      'Navigate Yiwu International Trade City with a bilingual sourcing guide. Find verified suppliers, negotiate prices, and ship samples from the world’s largest wholesale market.',
    longDescription:
      'Yiwu International Trade City spans 4 million square meters with over 75,000 booths. It’s overwhelming and riddled with middlemen. We cut through the noise: our guide walks you to verified manufacturers (not resellers), negotiates MOQs and pricing, and arranges sample consolidation and shipping.',
    whatIsIncluded: [
      'Pre-trip category research and booth mapping',
      '2 days of guided market navigation',
      'Supplier verification (factory vs. reseller check)',
      'Price negotiation support',
      'Sample collection and shipping coordination',
      'Post-trip communication support (14 days)',
    ],
    process: [
      { step: 1, title: 'Category Research', description: 'We map your product categories to the correct Yiwu districts and identify manufacturer booths.' },
      { step: 2, title: 'Day 1: Zone Navigation', description: 'Guided walkthrough of relevant market zones, collecting supplier cards and samples.' },
      { step: 3, title: 'Day 2: Deep Dive', description: 'Return to top candidates, negotiate pricing, verify factory credentials, and place sample orders.' },
      { step: 4, title: 'Day 3: Consolidation', description: 'Sample quality check, shipping coordination, and supplier summary documentation.' },
      { step: 5, title: 'Post-Trip Support', description: '14 days of email/WeChat follow-up with suppliers to confirm sample orders and production timelines.' },
    ],
    highlights: [
      'Save days of aimless wandering',
      'Access manufacturer booths not resellers',
      'Real-time price negotiation',
      'Sample consolidation and shipping',
    ],
    suitableFor: [
      'First-time Yiwu buyers',
      'Amazon FBA sellers sourcing consumer goods',
      'General merchandise importers',
      'Gift and promotional product buyers',
    ],
    notSuitableFor: [
      'High-spec electronics (see Shenzhen Electronics Sprint)',
      'Custom manufactured products (see Guangzhou Multi-Category)',
    ],
    seoKeywords: [
      'Yiwu market sourcing guide',
      'Yiwu wholesale market agent',
      'Yiwu International Trade City guide',
      'China wholesale market sourcing trip',
    ],
    faq: [
      { question: 'Is Yiwu only for cheap products?', answer: 'No. While Yiwu is known for low-cost commodities, there are quality tiers. We help you find the right quality level for your market.' },
      { question: 'How do I handle shipping from Yiwu?', answer: 'We coordinate with freight forwarders to consolidate your samples and ship via air or sea. We can also recommend trusted logistics partners.' },
    ],
    imageColor: 'bg-teal-700',
  },

  /* ================================================================ */
  /*  5. Guangzhou Multi-Category Sourcing                            */
  /* ================================================================ */
  {
    slug: 'guangzhou-multi-category-sourcing',
    title: 'Guangzhou Multi-Category Sourcing',
    subtitle:
      '3-day multi-category sourcing across Guangzhou’s wholesale markets and factories',
    category: 'Multi-Category',
    industry: 'consumer-goods',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 3,
    durationLabel: '3 days',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Multi-market coordination (Sanyuanli, Zhanxi Road, Liwan Plaza)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Custom factory visits arranged for each product category',
        ],
      },
    ],
    description:
      'Source across multiple product categories in Guangzhou: bags, watches, jewelry, toys, gifts, and fashion accessories with verified supplier connections.',
    longDescription:
      'Guangzhou is the hub for diverse consumer goods — bags, watches, jewelry, toys, fashion accessories, and more. In 3 days, we take you through the key wholesale markets and connect you with verified factories for each category. One trip, multiple product lines.',
    whatIsIncluded: [
      'Category-specific market mapping',
      '2 days of guided market and factory visits',
      'Supplier verification across categories',
      'Price comparison and negotiation support',
      'Sample procurement and consolidation',
      'Post-trip sourcing recommendations',
    ],
    process: [
      { step: 1, title: 'Category Mapping', description: 'Map your target product categories to Guangzhou’s specialized markets.' },
      { step: 2, title: 'Market Visits', description: 'Visit wholesale markets for each category: bags (Sanyuanli), watches (Zhanxi Road), jewelry (Liwan Plaza).' },
      { step: 3, title: 'Factory Connections', description: 'Arrange visits to nearby factories for categories requiring custom manufacturing.' },
      { step: 4, title: 'Comparison & Selection', description: 'Compare suppliers across categories, evaluate samples, and document pricing.' },
      { step: 5, title: 'Handoff Package', description: 'Organized supplier directory, pricing summary, and shipping coordination.' },
    ],
    highlights: [
      'Multi-category efficiency in one trip',
      'Factory-direct connections for each category',
      'Market price benchmarking',
      'Sample consolidation service',
    ],
    suitableFor: [
      'Multi-product Amazon / Shopify sellers',
      'General merchandise importers',
      'Gift and promotional product companies',
      'First-time China sourcers with diverse needs',
    ],
    notSuitableFor: [
      'Single-category, high-volume sourcing (see specialized sprints)',
      'Highly regulated products (medical devices, etc.)',
    ],
    seoKeywords: [
      'Guangzhou wholesale market sourcing',
      'China multi-category product sourcing',
      'Guangzhou factory agent',
      'China wholesale market guide',
    ],
    faq: [
      { question: 'Can I source products from different categories in one trip?', answer: 'Absolutely. This service is designed exactly for that. We map your categories to Guangzhou’s specialized markets and maximize efficiency.' },
      { question: 'How many suppliers will we visit?', answer: 'Typically 15-25 suppliers across your target categories over 2-3 days, depending on distance between markets.' },
    ],
    imageColor: 'bg-red-800',
  },

  /* ================================================================ */
  /*  6. Guangzhou Apparel & Leather Sprint                           */
  /* ================================================================ */
  {
    slug: 'guangzhou-apparel-leather',
    title: 'Guangzhou Apparel & Leather Sprint',
    subtitle:
      '4-day deep dive into Guangzhou’s garment, textile, and leather goods supply chain',
    category: 'Apparel Sprint',
    industry: 'apparel-textile',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 4,
    durationLabel: '4 days',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Zhongda fabric market sourcing + sample collection',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Sample-making coordination with selected factories',
        ],
      },
    ],
    description:
      'Source apparel, textiles, and leather goods from Guangzhou’s specialized wholesale markets and factories. Quality inspection and supplier verification included.',
    longDescription:
      'Guangzhou is China’s fashion and textile trading capital. From Sanyuanli leather to Zhongda fabric market, we guide you through the complete apparel supply chain. Includes factory visits, fabric sourcing, sample making, and quality inspection at every stage.',
    whatIsIncluded: [
      'Pre-trip fabric and style briefing',
      'Guided visits to fabric markets (Zhongda) and leather districts (Sanyuanli)',
      'Garment factory audits (3-5 facilities)',
      'Sample making coordination',
      'Quality inspection checklist',
      'Supplier comparison report with pricing',
    ],
    process: [
      { step: 1, title: 'Design & Fabric Brief', description: 'Document your designs, fabric requirements, target price points, and quality standards.' },
      { step: 2, title: 'Fabric Sourcing', description: 'Visit Zhongda fabric market to source materials and collect swatches.' },
      { step: 3, title: 'Factory Visits', description: 'Audit garment and leather goods factories for capability, capacity, and quality systems.' },
      { step: 4, title: 'Sample Development', description: 'Coordinate sample making with selected factories, review quality, and document specifications.' },
      { step: 5, title: 'Production Planning', description: 'Finalize factory selection, negotiate production terms, and establish quality checkpoints.' },
    ],
    highlights: [
      'Direct access to China’s largest fabric market',
      'Factory audits for garment and leather workshops',
      'Sample making and quality inspection',
      'MOQ negotiation for small brands',
    ],
    suitableFor: [
      'Fashion brands launching new collections',
      'Leather goods and bag designers',
      'Streetwear and apparel startups',
      'Textile importers',
    ],
    notSuitableFor: [
      'Ultra-high-volume commodity basics (T-shirts, socks)',
      'Shoes/footwear (separate supply chain)',
    ],
    seoKeywords: [
      'Guangzhou apparel factory sourcing',
      'China garment manufacturer audit',
      'Sanyuanli leather market guide',
      'China fashion supply chain visit',
    ],
    faq: [
      { question: 'Can you help with small MOQ fashion brands?', answer: 'Yes. Guangzhou has many factories that work with emerging brands. Typical MOQs start at 50-100 pieces per style.' },
      { question: 'Do you source fabrics separately?', answer: 'Yes. We can source fabrics from Zhongda market and connect you with fabric suppliers even if you manufacture elsewhere.' },
    ],
    imageColor: 'bg-red-700',
  },

  /* ================================================================ */
  /*  7. Textile Belt Deep Dive                                       */
  /* ================================================================ */
  {
    slug: 'textile-belt-deep-dive',
    title: 'Textile Belt Deep Dive',
    subtitle:
      '5-day comprehensive tour of China’s textile manufacturing corridor: Keqiao, Shaoxing, Nantong',
    category: 'Textile Deep Dive',
    industry: 'apparel-textile',
    location: 'Zhejiang & Jiangsu',
    cities: ['Shaoxing', 'Keqiao', 'Nantong'],
    durationDays: 5,
    durationLabel: '5 days',
    price: '$6,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$4,999',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$6,799',
        includes: [
          ...STANDARD_COMMON,
          'Keqiao fabric market navigation + mill audits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$11,499',
        includes: [
          ...premiumCommon(5),
          'Third-party fabric testing coordination (colorfastness, shrinkage, composition)',
        ],
      },
    ],
    description:
      'Tour China’s textile manufacturing heartland. Visit fabric mills, dye houses, and garment factories in Keqiao, Shaoxing, and Nantong.',
    longDescription:
      'China’s textile belt stretches from Zhejiang to Jiangsu, home to the world’s largest concentration of fabric mills, dye houses, and garment factories. This 5-day deep dive takes you inside the supply chain — from yarn to finished garment — with expert guidance at every stop.',
    whatIsIncluded: [
      'Textile supply chain mapping',
      'Visits to fabric mills, dye houses, and printing facilities',
      'Garment factory audits (5-8 facilities)',
      'Fabric sample collection and testing coordination',
      'Sustainability and compliance assessment',
      '40+ page report with supplier rankings',
    ],
    process: [
      { step: 1, title: 'Textile Brief', description: 'Define fabric types, weights, finishes, prints, and sustainability requirements.' },
      { step: 2, title: 'Mill Vetting', description: 'Identify and pre-screen fabric mills and dye houses matching your specifications.' },
      { step: 3, title: 'On-Site Visits', description: '5 days of mill and factory visits across the Zhejiang-Jiangsu textile corridor.' },
      { step: 4, title: 'Sample & Test', description: 'Collect fabric samples, coordinate 3rd-party testing (colorfastness, shrinkage, composition).' },
      { step: 5, title: 'Supply Chain Design', description: 'Map your complete textile supply chain with recommended partners at each stage.' },
    ],
    highlights: [
      'China’s largest fabric wholesale market (Keqiao)',
      'Mill-direct pricing benchmarks',
      'Dye house environmental compliance checks',
      'Full textile supply chain mapping',
    ],
    suitableFor: [
      'Fashion brands scaling production',
      'Home textile importers',
      'Technical textile buyers',
      'Companies needing sustainable fabric sourcing',
    ],
    notSuitableFor: [
      'Small-batch fashion startups (see Guangzhou Apparel)',
      'Non-textile product categories',
    ],
    seoKeywords: [
      'China textile factory tour',
      'Keqiao fabric market sourcing',
      'China textile supply chain audit',
      'Shaoxing fabric mill visit',
    ],
    faq: [
      { question: 'Can you verify sustainable/organic certifications?', answer: 'Yes. We verify GOTS, OEKO-TEX, BCI, and other sustainability certifications during factory visits.' },
      { question: 'What’s the minimum fabric order from Chinese mills?', answer: 'Typically 500-1000 meters per color/design, but this varies by mill. We can negotiate lower MOQs for sampling purposes.' },
    ],
    imageColor: 'bg-orange-800',
  },

  /* ================================================================ */
  /*  8. Foshan Furniture Sourcing                                    */
  /* ================================================================ */
  {
    slug: 'foshan-furniture-sourcing',
    title: 'Foshan Furniture Sourcing',
    subtitle:
      '4-day guided sourcing in China’s furniture manufacturing capital',
    category: 'Furniture Sprint',
    industry: 'furniture',
    location: 'Foshan, Guangdong',
    cities: ['Foshan'],
    durationDays: 4,
    durationLabel: '4 days',
    price: '$5,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$4,299',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$5,799',
        includes: [
          ...STANDARD_COMMON,
          'Lecong showroom navigation + factory audits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$9,799',
        includes: [
          ...premiumCommon(4),
          'Pre-shipment material & build quality inspection',
        ],
      },
    ],
    description:
      'Source furniture directly from factories in Foshan, the world’s largest furniture manufacturing hub. Quality inspection, material verification, and logistics support.',
    longDescription:
      'Foshan produces 70% of China’s furniture exports. From solid wood to modern minimalist, we take you inside the factories and showrooms. You’ll see production lines, inspect materials, test build quality, and negotiate directly with factory owners.',
    whatIsIncluded: [
      'Pre-trip style and material briefing',
      'Guided visits to 8-15 factories and showrooms',
      'Material and build quality inspection',
      'Price negotiation support',
      'Logistics and shipping coordination',
      'Quality control checkpoint setup',
    ],
    process: [
      { step: 1, title: 'Design Brief', description: 'Document furniture styles, materials, dimensions, target pricing, and target market requirements.' },
      { step: 2, title: 'Factory Selection', description: 'Match your requirements to specialized Foshan factories (solid wood, panel, upholstery, metal).' },
      { step: 3, title: 'Showroom & Factory Visits', description: '4-day intensive tour of factories and showrooms across Lecong, Longjiang, and Shunde.' },
      { step: 4, title: 'Quality Assessment', description: 'Inspect construction methods, material quality, finishing standards, and packaging.' },
      { step: 5, title: 'Order & QC Setup', description: 'Finalize factory selection, negotiate terms, and establish quality control inspection points.' },
    ],
    highlights: [
      'Access to factories behind the showrooms',
      'Material authenticity verification (solid wood vs. veneer)',
      'Furniture-specific QC checklist',
      'Container loading supervision option',
    ],
    suitableFor: [
      'Furniture retailers and wholesalers',
      'Interior design firms',
      'Hotel and hospitality furniture buyers',
      'E-commerce furniture sellers',
    ],
    notSuitableFor: [
      'Custom one-off furniture pieces (cost-prohibitive)',
      'Buyers not ready for container-volume orders',
    ],
    seoKeywords: [
      'Foshan furniture factory tour',
      'China furniture sourcing guide',
      'Foshan furniture wholesale market',
      'China furniture manufacturer audit',
    ],
    faq: [
      { question: 'Can I mix different furniture types in one container?', answer: 'Yes. Many Foshan factories specialize in mixed-container orders. We help coordinate across multiple factories to fill one container.' },
      { question: 'Do you inspect furniture before shipping?', answer: 'We offer pre-shipment inspection as an add-on service. This includes checking for defects, verifying quantities, and supervising container loading.' },
    ],
    imageColor: 'bg-purple-800',
  },

  /* ================================================================ */
  /*  9. Yunnan Coffee & Tea Origin                                   */
  /* ================================================================ */
  {
    slug: 'yunnan-coffee-tea-origin',
    title: 'Yunnan Coffee & Tea Origin',
    subtitle:
      '5-day origin visit to Yunnan’s coffee farms, tea plantations, and processing facilities',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Yunnan Province',
    cities: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
    durationDays: 5,
    durationLabel: '5 days',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Cupping & tasting sessions with producers',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$11,799',
        includes: [
          ...premiumCommon(5),
          'Q-grader certified cupping session + detailed origin report',
        ],
      },
    ],
    description:
      'Visit Yunnan coffee farms and tea plantations. Meet producers, inspect processing facilities, and source specialty coffee and Pu’er tea at origin.',
    longDescription:
      'Yunnan produces 95% of China’s coffee and is the birthplace of Pu’er tea. This 5-day origin trip takes you to coffee farms in Baoshan and tea plantations in Pu’er. You’ll meet producers, cup coffees, taste teas, and build direct relationships with growers.',
    whatIsIncluded: [
      'Pre-trip origin research and producer vetting',
      'Visits to coffee farms and wet/dry mills',
      'Tea plantation and processing facility tours',
      'Cupping and tasting sessions',
      'Sample collection and export documentation review',
      'Producer relationship facilitation',
    ],
    process: [
      { step: 1, title: 'Product Brief', description: 'Define coffee grade (specialty/commercial), tea type, volume, and quality parameters.' },
      { step: 2, title: 'Producer Vetting', description: 'Research and pre-screen coffee farms, cooperatives, and tea producers.' },
      { step: 3, title: 'Origin Visit', description: '5-day tour of farms, mills, and processing facilities across Yunnan.' },
      { step: 4, title: 'Quality Assessment', description: 'Cupping, tasting, grading, and quality documentation.' },
      { step: 5, title: 'Direct Trade Setup', description: 'Facilitate direct producer relationships, sample shipment, and export process initiation.' },
    ],
    highlights: [
      'Direct producer relationships (no middlemen)',
      'Specialty coffee cupping sessions',
      'Pu’er tea aging facility visits',
      'Export documentation guidance',
    ],
    suitableFor: [
      'Specialty coffee roasters',
      'Tea importers and retailers',
      'Coffee chains seeking direct trade',
      'Food and beverage brands',
    ],
    notSuitableFor: [
      'Commodity-grade coffee traders (this is specialty-focused)',
      'Instant coffee or tea bag producers',
    ],
    seoKeywords: [
      'Yunnan coffee farm visit',
      'China coffee sourcing trip',
      'Pu’er tea origin tour',
      'China specialty coffee supplier',
    ],
    faq: [
      { question: 'Can I buy green coffee beans directly from farms?', answer: 'Yes. We facilitate direct trade relationships. Yunnan coffee farms typically sell green beans in 60kg bags, with minimum orders from 1-5 bags per lot.' },
      { question: 'What tea varieties can I source in Yunnan?', answer: 'Pu’er (raw and ripe), Yunnan black tea (Dianhong), green tea, and white tea. We visit producers for each variety based on your requirements.' },
    ],
    imageColor: 'bg-orange-700',
  },

  /* ================================================================ */
  /*  10. Sichuan Spice & Cuisine Route                               */
  /* ================================================================ */
  {
    slug: 'sichuan-spice-cuisine-route',
    title: 'Sichuan Spice & Cuisine Route',
    subtitle:
      '4-day sourcing trip for Sichuan pepper, chili, specialty sauces, and food ingredients',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Sichuan & Chongqing',
    cities: ['Chengdu', 'Chongqing'],
    durationDays: 4,
    durationLabel: '4 days',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Spice market tour + production facility visits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Custom recipe development session with local chefs',
        ],
      },
    ],
    description:
      'Source authentic Sichuan pepper, chili products, specialty sauces, and Chinese food ingredients directly from producers in Sichuan and Chongqing.',
    longDescription:
      'Sichuan cuisine is taking the world by storm. From premium Sichuan peppercorns to fermented bean pastes and hot pot bases, this 4-day trip connects you directly with producers. Visit spice markets, tour production facilities, and taste your way through China’s most flavorful province.',
    whatIsIncluded: [
      'Product category research and producer mapping',
      'Visits to spice wholesale markets and producers',
      'Sauce and condiment factory tours',
      'Ingredient tasting and quality assessment',
      'Export compliance and documentation review',
      'Producer contact directory and pricing summary',
    ],
    process: [
      { step: 1, title: 'Product List', description: 'Define target products: pepper grades, chili types, sauce categories, and volume requirements.' },
      { step: 2, title: 'Producer Research', description: 'Identify quality producers for each category through trade networks and market research.' },
      { step: 3, title: 'Market & Factory Visits', description: '4-day tour of Chengdu spice markets and Chongqing food processing facilities.' },
      { step: 4, title: 'Quality & Compliance', description: 'Taste testing, quality grading, and export documentation verification.' },
      { step: 5, title: 'Sourcing Handoff', description: 'Organized supplier directory with pricing, MOQs, and export readiness assessment.' },
    ],
    highlights: [
      'Direct access to Sichuan pepper producers',
      'Factory tours for packaged sauces and condiments',
      'Quality grading education (pepper grades, chili heat levels)',
      'Export food safety compliance guidance',
    ],
    suitableFor: [
      'Asian grocery importers',
      'Restaurant supply chains',
      'Hot sauce and condiment brands',
      'Specialty food retailers',
    ],
    notSuitableFor: [
      'Fresh produce importers (separate cold chain)',
      'Non-food product categories',
    ],
    seoKeywords: [
      'Sichuan pepper sourcing China',
      'Chinese spice supplier visit',
      'Chengdu food ingredient tour',
      'China specialty food import',
    ],
    faq: [
      { question: 'Can you help with FDA/USDA export compliance?', answer: 'We review supplier export documentation and can connect you with 3rd-party labs for product testing and FDA registration support.' },
      { question: 'What’s the shelf life of Sichuan pepper?', answer: 'Premium Sichuan pepper retains potency for 12-18 months when properly stored. We help you identify producers using nitrogen-flush packaging for extended shelf life.' },
    ],
    imageColor: 'bg-red-800',
  },

  /* ================================================================ */
  /*  11. Ningxia Goji & Wine Route                                   */
  /* ================================================================ */
  {
    slug: 'ningxia-goji-wine-route',
    title: 'Ningxia Goji & Wine Route',
    subtitle:
      '3-day origin visit to Ningxia’s goji berry farms and emerging wine region',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Ningxia Province',
    cities: ['Yinchuan', 'Zhongwei'],
    durationDays: 3,
    durationLabel: '3 days',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Winery tasting sessions + goji farm quality audits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Wine import documentation & label compliance review',
        ],
      },
    ],
    description:
      'Visit Ningxia’s goji berry farms, processing facilities, and award-winning wineries. Source premium goji products and Chinese wines at origin.',
    longDescription:
      'Ningxia is China’s goji berry capital and its most exciting wine region. In 3 days, you’ll visit organic goji farms, tour processing facilities, and taste wines at award-winning estates. Build direct relationships with producers in this rapidly growing agricultural region.',
    whatIsIncluded: [
      'Goji berry farm visits and organic certification review',
      'Processing and packaging facility tours',
      'Winery visits and tasting sessions',
      'Sample collection and quality testing coordination',
      'Export documentation guidance',
      'Producer relationship facilitation',
    ],
    process: [
      { step: 1, title: 'Product Specification', description: 'Define goji grades (organic, conventional), wine types, volume, and certification requirements.' },
      { step: 2, title: 'Producer Identification', description: 'Research and vet goji farms, processing facilities, and wineries.' },
      { step: 3, title: 'Farm & Winery Visits', description: '3-day tour of goji farms, processing plants, and vineyards.' },
      { step: 4, title: 'Quality Assessment', description: 'Product sampling, certification review, and quality grading.' },
      { step: 5, title: 'Sourcing Setup', description: 'Facilitate direct relationships, sample shipments, and export process.' },
    ],
    highlights: [
      'Organic goji berry farm visits',
      'Wine tasting at China’s top wineries',
      'Processing facility quality audits',
      'Export-ready producer connections',
    ],
    suitableFor: [
      'Health food and superfood brands',
      'Wine importers exploring Chinese wines',
      'Organic product retailers',
      'Nutraceutical companies',
    ],
    notSuitableFor: [
      'Bulk commodity goji traders (this is premium-focused)',
      'Non-food product categories',
    ],
    seoKeywords: [
      'Ningxia goji berry supplier',
      'China organic goji farm visit',
      'Ningxia wine region tour',
      'Chinese wine import sourcing',
    ],
    faq: [
      { question: 'Can you verify organic certification?', answer: 'Yes. We verify China Organic, EU Organic, and USDA Organic certifications during our farm visits.' },
      { question: 'What’s the minimum order for Ningxia wine?', answer: 'Most wineries can accommodate orders from 100 cases. We can negotiate smaller trial orders for market testing.' },
    ],
    imageColor: 'bg-red-900',
  },

  /* ================================================================ */
  /*  12. Monopoly Factory Towns Explorer                             */
  /* ================================================================ */
  {
    slug: 'monopoly-factory-towns-explorer',
    title: 'Monopoly Factory Towns Explorer',
    subtitle:
      '6-day custom route through China’s hyper-specialized manufacturing towns',
    category: 'Factory Towns',
    industry: 'monopoly-towns',
    location: 'Zhejiang & Jiangsu',
    cities: ['Zhuji', 'Dongyang', 'Yongkang', 'Taizhou'],
    durationDays: 6,
    durationLabel: '6 days',
    price: '$7,699',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$5,799',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$7,699',
        includes: [
          ...STANDARD_COMMON,
          '4–5 specialized factory town visits with optimized route',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$12,999',
        includes: [
          ...premiumCommon(6),
          'Custom town selection + factory owner executive dinners at each stop',
        ],
      },
    ],
    description:
      'Explore China’s monopoly factory towns: Zhuji (socks), Dongyang (mahjong/magnets), Yongkang (hardware), Taizhou (molds). One trip, multiple niche categories.',
    longDescription:
      'China’s monopoly factory towns are a sourcing secret. Entire cities specialize in one product: Zhuji makes 1/3 of the world’s socks, Yongkang dominates hardware. This 6-day explorer tour takes you to 4-5 specialized towns, each a deep dive into a niche supply chain.',
    whatIsIncluded: [
      'Custom route planning based on your product interests',
      'Factory visits in 4-5 specialized manufacturing towns',
      'Supplier verification and capability assessment',
      'Price benchmarking across manufacturers',
      'Sample collection and logistics coordination',
      'Comprehensive report with supplier directory',
    ],
    process: [
      { step: 1, title: 'Product Selection', description: 'Choose 4-5 product categories from our factory town map and define specifications.' },
      { step: 2, title: 'Route Planning', description: 'Design an efficient 6-day route connecting your selected towns, with pre-vetted factory shortlists.' },
      { step: 3, title: 'Town Visits', description: 'Visit 2-3 factories per town, meeting owners and inspecting production lines.' },
      { step: 4, title: 'Comparison Analysis', description: 'Cross-town comparison of pricing, quality, and capability for each product category.' },
      { step: 5, title: 'Consolidated Report', description: 'Single report covering all towns with supplier rankings and recommendations.' },
    ],
    highlights: [
      'Access to factories with 70%+ world market share',
      'Deep specialization = better quality and pricing',
      'Multi-category efficiency in one extended trip',
      'Factory owner introductions (not sales reps)',
    ],
    suitableFor: [
      'Experienced importers expanding product lines',
      'Brands seeking specialized manufacturers',
      'Product developers exploring manufacturing possibilities',
      'Sourcing agents building factory networks',
    ],
    notSuitableFor: [
      'First-time China sourcers (start with a single-category sprint)',
      'Buyers with only one product category',
    ],
    seoKeywords: [
      'China monopoly factory towns',
      'specialized manufacturing China tour',
      'Zhuji sock factory visit',
      'Yongkang hardware supplier',
    ],
    faq: [
      { question: 'How specialized are these towns really?', answer: 'Dongyang produces 80%+ of the world’s mahjong tiles and magnetic toys. Zhuji makes 1/3 of the world’s socks. The specialization is real and creates unbeatable pricing.' },
      { question: 'Can I customize which towns we visit?', answer: 'Absolutely. We have a map of 50+ factory towns. You pick the categories you’re interested in, and we design the optimal route.' },
    ],
    imageColor: 'bg-indigo-800',
  },

  /* ================================================================ */
  /*  13. Canton Fair Navigator                                       */
  /* ================================================================ */
  {
    slug: 'canton-fair-navigator',
    title: 'Canton Fair Navigator',
    subtitle:
      '5 or 10-day guided Canton Fair experience with supplier verification and factory visits',
    category: 'Fair Navigator',
    industry: 'canton-fair',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 5,
    durationLabel: '5 or 10 days',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basic guided access',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Full-service factory audit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Pre-fair exhibitor shortlisting + optimized booth visit schedule',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'White-glove concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Post-fair factory visits arranged to top 5 candidates',
          '10-day option available (both fair phases + extended factory tours)',
        ],
      },
    ],
    description:
      'Navigate the Canton Fair with an experienced guide. Pre-screen exhibitors, schedule booth visits, and arrange factory tours for verified suppliers.',
    longDescription:
      'The Canton Fair is the world’s largest trade show with 25,000+ exhibitors. It’s overwhelming. Our Navigator service pre-screens exhibitors based on your requirements, schedules booth meetings, and arranges factory visits to top candidates during the fair. Maximize your trip efficiency.',
    whatIsIncluded: [
      'Pre-fair exhibitor research and shortlisting',
      'Daily booth visit schedule (optimized by hall)',
      'Bilingual guide for all meetings',
      'Supplier background checks (business license, export history)',
      'Post-fair factory visit coordination',
      'Exhibitor comparison spreadsheet',
    ],
    process: [
      { step: 1, title: 'Pre-Fair Research', description: 'Analyze exhibitor lists, identify top candidates, and conduct background checks.' },
      { step: 2, title: 'Fair Schedule', description: 'Design an optimized booth visit schedule by hall, phase, and product category.' },
      { step: 3, title: 'Guided Fair Days', description: 'Bilingual guide accompanies you to booth meetings, translating and documenting.' },
      { step: 4, title: 'Supplier Vetting', description: 'Quick-turn background checks and on-site quality assessment of top candidates.' },
      { step: 5, title: 'Factory Follow-Up', description: 'Arrange factory visits to verified suppliers after the fair.' },
    ],
    highlights: [
      'Save days of aimless hall-walking',
      'Pre-vetted exhibitor shortlist',
      'Real-time price negotiation in Mandarin',
      'Factory visit coordination during or after fair',
    ],
    suitableFor: [
      'First-time Canton Fair attendees',
      'Buyers with broad product categories',
      'Importers seeking new suppliers annually',
      'Companies evaluating China sourcing strategy',
    ],
    notSuitableFor: [
      'Buyers with a single, already-vetted supplier (lighter support available)',
      'Those attending for market research only (not sourcing)',
    ],
    seoKeywords: [
      'Canton Fair sourcing guide',
      'Canton Fair agent',
      'Guangzhou trade fair navigator',
      'China trade show supplier verification',
    ],
    faq: [
      { question: 'When is the Canton Fair held?', answer: 'The Canton Fair is held twice a year: Spring (April 15 – May 5) and Autumn (October 15 – November 4). Each fair has three phases covering different product categories.' },
      { question: 'Can you help with my Canton Fair badge?', answer: 'Yes. We can guide you through the registration process and help with the invitation letter if needed.' },
      { question: 'What if I can’t attend? Can you represent me?', answer: 'Yes, we offer a remote representation service where we attend on your behalf, visit your target booths, collect information, and report back.' },
    ],
    imageColor: 'bg-indigo-900',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByIndustry(industry: string): Service[] {
  return services.filter((s) => s.industry === industry);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
