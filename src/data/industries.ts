import type { IndustryPage } from '@/types';
import { INDUSTRY_META } from '@/lib/constants';

export const industries: IndustryPage[] = [
  {
    slug: 'electronics',
    name: INDUSTRY_META.electronics.name,
    description: 'China is the world\'s electronics factory. We audit PCB, SMT, assembly, and component suppliers from Shenzhen to Dongguan.',
    color: INDUSTRY_META.electronics.color,
    heroCopy:
      'From Shenzhen\'s Huaqiangbei to Dongguan\'s precision manufacturing belt, China\'s electronics supply chain is unmatched in scale and speed. We help you navigate it with confidence.',
    keyRegions: [
      { name: 'Shenzhen', description: 'Consumer electronics, IoT devices, PCB design and assembly, Huaqiangbei component markets.' },
      { name: 'Dongguan', description: 'Precision manufacturing, mold-making, CNC machining, industrial electronics.' },
      { name: 'Huizhou', description: 'Battery manufacturing, solar panels, EV components, new energy supply chain.' },
    ],
    whatWeAudit: [
      'PCB fabrication and assembly facilities',
      'SMT production lines and quality control',
      'Consumer electronics OEM/ODM factories',
      'Component supplier authenticity and traceability',
      'Battery and power supply safety certifications',
      'Electronics testing lab capability and equipment',
    ],
    caseSummary:
      'In 2025, we audited 15 Bluetooth speaker factories across Shenzhen for a European brand. We eliminated 11 due to quality issues or middleman status, shortlisted 4, and the client chose a factory that delivered 99.2% quality rate on their first 10,000-unit order — saving an estimated $45,000 compared to their previous Alibaba-sourced supplier.',
    seoKeywords: [
      'China electronics manufacturer audit',
      'Shenzhen factory visit service',
      'electronics supplier verification China',
      'China PCB assembly factory inspection',
    ],
    relatedServices: ['shenzhen-electronics-sprint', 'shenzhen-dongguan-hardware-audit', 'new-energy-supply-chain'],
  },
  {
    slug: 'consumer-goods',
    name: INDUSTRY_META['consumer-goods'].name,
    description: 'From Yiwu\'s wholesale markets to Guangzhou\'s specialty districts, we source across China\'s vast consumer goods landscape.',
    color: INDUSTRY_META['consumer-goods'].color,
    heroCopy:
      'China produces more consumer goods than any country on Earth. The challenge isn\'t finding suppliers — it\'s finding the right ones. We cut through the noise.',
    keyRegions: [
      { name: 'Yiwu', description: 'World\'s largest wholesale market — 75,000+ booths spanning every consumer category.' },
      { name: 'Guangzhou', description: 'Specialty wholesale districts for bags, watches, jewelry, toys, and fashion accessories.' },
      { name: 'Shantou', description: 'Toy and plastic product manufacturing cluster in eastern Guangdong.' },
    ],
    whatWeAudit: [
      'Factory vs. reseller verification',
      'Product quality and consistency across samples',
      'Packaging and branding capability',
      'Export compliance (CE, FDA, CPSIA, etc.)',
      'Production capacity and lead time reliability',
      'Price competitiveness benchmarking',
    ],
    caseSummary:
      'A US Amazon FBA seller needed 8 product categories sourced in one trip. Our Guangzhou Multi-Category Sprint visited 22 suppliers across 4 market districts in 3 days, delivered a categorized supplier directory with pricing, and the client placed sample orders with 6 verified factories — all within their $15,000 budget.',
    seoKeywords: [
      'China consumer goods sourcing agent',
      'Yiwu market buying guide',
      'China wholesale product sourcing',
      'Amazon FBA supplier verification China',
    ],
    relatedServices: ['yiwu-commodity-sprint', 'guangzhou-multi-category-sourcing'],
  },
  {
    slug: 'apparel-textile',
    name: INDUSTRY_META['apparel-textile'].name,
    description: 'China\'s textile belt is the world\'s largest. We audit garment factories, fabric mills, and dye houses from Shaoxing to Guangzhou.',
    color: INDUSTRY_META['apparel-textile'].color,
    heroCopy:
      'From the Keqiao fabric market (world\'s largest) to Guangzhou\'s garment workshops, China\'s apparel supply chain offers unmatched variety and flexibility for fashion brands of all sizes.',
    keyRegions: [
      { name: 'Guangzhou', description: 'Garment manufacturing, leather goods, Zhongda fabric market, Sanyuanli leather district.' },
      { name: 'Shaoxing / Keqiao', description: 'World\'s largest fabric wholesale market, dye houses, printing facilities.' },
      { name: 'Nantong', description: 'Home textiles, bedding, towel manufacturing cluster in Jiangsu province.' },
    ],
    whatWeAudit: [
      'Garment factory production lines and quality systems',
      'Fabric mill capability and minimum order quantities',
      'Dye house environmental compliance and color consistency',
      'Leather goods workshop construction quality',
      'Printing and embroidery facility capability',
      'Ethical manufacturing and labor practice verification',
    ],
    caseSummary:
      'A London-based streetwear brand needed small-batch production (100 pieces per style). We visited 8 Guangzhou garment factories, sourced fabrics from Zhongda market, coordinated sample development, and identified a factory willing to scale from 100 to 1,000 pieces with the brand\'s growth.',
    seoKeywords: [
      'China garment factory audit',
      'China fabric sourcing agent',
      'Guangzhou apparel manufacturer visit',
      'China textile supply chain inspection',
    ],
    relatedServices: ['guangzhou-apparel-leather', 'textile-belt-deep-dive'],
  },
  {
    slug: 'furniture',
    name: INDUSTRY_META.furniture.name,
    description: 'Foshan produces 70% of China\'s furniture exports. We audit factories across solid wood, panel, upholstery, and metal furniture.',
    color: INDUSTRY_META.furniture.color,
    heroCopy:
      'Foshan is the undisputed capital of Chinese furniture manufacturing. With clusters for every material and style, the challenge is finding the right factory for your specific requirements.',
    keyRegions: [
      { name: 'Lecong', description: 'World\'s largest furniture wholesale market — 3 million sqm of showrooms across 180+ buildings.' },
      { name: 'Longjiang', description: 'Manufacturing hub for upholstered furniture, sofas, and mattresses.' },
      { name: 'Shunde', description: 'Solid wood furniture, custom cabinetry, and high-end residential furniture manufacturing.' },
    ],
    whatWeAudit: [
      'Solid wood authenticity verification (species, moisture content, joinery)',
      'Upholstery frame construction and foam density',
      'Panel furniture hardware quality and assembly precision',
      'Finishing quality (paint, lacquer, veneer)',
      'Packaging and container-loading practices',
      'Custom and OEM capability assessment',
    ],
    caseSummary:
      'A Dubai-based hotel group needed custom solid wood furniture for 120 rooms. We audited 6 factories in Shunde, verified their construction methods and finishing quality, and the selected factory delivered on time with only 2% defect rate — well below the industry average of 8-10%.',
    seoKeywords: [
      'Foshan furniture factory visit',
      'China furniture quality inspection',
      'China solid wood furniture sourcing',
      'Foshan furniture wholesale guide',
    ],
    relatedServices: ['foshan-furniture-sourcing'],
  },
  {
    slug: 'food-beverage',
    name: INDUSTRY_META['food-beverage'].name,
    description: 'Source premium food and beverage products at origin — from Yunnan coffee to Sichuan spices and Ningxia goji berries.',
    color: INDUSTRY_META['food-beverage'].color,
    heroCopy:
      'Beyond "Made in China" manufactured goods lies a rich landscape of premium food and beverage products. From specialty coffee to ancient tea traditions, we connect you directly with producers.',
    keyRegions: [
      { name: 'Yunnan', description: 'China\'s coffee origin (95% of production), Pu\'er tea heartland, wild mushroom sourcing.' },
      { name: 'Sichuan / Chongqing', description: 'Sichuan pepper, chili products, specialty sauces, hot pot bases, pickled vegetables.' },
      { name: 'Ningxia', description: 'Goji berry capital, emerging wine region, premium lamb and agricultural products.' },
    ],
    whatWeAudit: [
      'Farm and plantation visits for direct producer relationships',
      'Processing facility hygiene and food safety standards',
      'Organic and sustainability certification verification',
      'Export documentation and compliance (FDA, EU organic, etc.)',
      'Product quality grading and tasting/cupping sessions',
      'Packaging and shelf-life assessment',
    ],
    caseSummary:
      'A specialty coffee roaster in Melbourne wanted direct-trade Yunnan coffee. We visited 8 farms in Baoshan and Pu\'er, facilitated cupping sessions, and connected them with a cooperative producing 84-point specialty-grade coffee at 40% below their previous Colombian supplier\'s price.',
    seoKeywords: [
      'China food product sourcing',
      'Yunnan coffee direct trade',
      'Chinese tea import supplier',
      'China organic food verification',
    ],
    relatedServices: ['yunnan-coffee-tea-origin', 'sichuan-spice-cuisine-route', 'ningxia-goji-wine-route'],
  },
  {
    slug: 'monopoly-towns',
    name: INDUSTRY_META['monopoly-towns'].name,
    description: 'China\'s hyper-specialized manufacturing towns dominate global production of specific goods. We navigate these hidden supply chains.',
    color: INDUSTRY_META['monopoly-towns'].color,
    heroCopy:
      'Somewhere in China, a single town probably makes 50%+ of the world\'s supply of your product. These monopoly factory towns offer unbeatable expertise and pricing — if you know where to look.',
    keyRegions: [
      { name: 'Zhuji, Zhejiang', description: 'Produces 1/3 of the world\'s socks. Also a major pearl processing center.' },
      { name: 'Dongyang, Zhejiang', description: '80%+ of global mahjong tiles and a dominant share of magnetic toys.' },
      { name: 'Yongkang, Zhejiang', description: 'Hardware capital — power tools, door fittings, kitchenware, and thermos flasks.' },
      { name: 'Taizhou, Zhejiang', description: 'Mold-making and plastic injection molding capital. Also major auto parts cluster.' },
    ],
    whatWeAudit: [
      'Product specialization depth and manufacturing expertise',
      'Production efficiency compared to generalist factories',
      'Raw material sourcing and cost structure',
      'Quality consistency at scale',
      'Export experience and international compliance',
      'Owner-operators vs. management-run factories',
    ],
    caseSummary:
      'A European kitchenware brand wanted stainless steel thermos flasks. General factories quoted $4.20/unit. We took them to Yongkang, the thermos capital, where specialized factories using automated production lines quoted $2.80/unit with better quality — a 33% cost saving on their 50,000-unit order.',
    seoKeywords: [
      'China specialized factory towns',
      'China manufacturing cluster guide',
      'Zhuji sock factory sourcing',
      'Yongkang hardware manufacturer',
    ],
    relatedServices: ['monopoly-factory-towns-explorer'],
  },
  {
    slug: 'canton-fair',
    name: INDUSTRY_META['canton-fair'].name,
    description: 'Maximize your Canton Fair ROI with pre-screened exhibitor lists, scheduled booth meetings, and factory visit coordination.',
    color: INDUSTRY_META['canton-fair'].color,
    heroCopy:
      'The Canton Fair is the world\'s largest trade show with 25,000+ exhibitors across 1.18 million square meters. Most attendees waste 60% of their time in the wrong halls. We fix that.',
    keyRegions: [
      { name: 'Phase 1 (April/Oct 15-19)', description: 'Electronics, household electrical appliances, machinery, hardware, new energy.' },
      { name: 'Phase 2 (April/Oct 23-27)', description: 'Consumer goods, gifts, home decorations, building materials.' },
      { name: 'Phase 3 (April/Oct 31-Nov 4)', description: 'Textiles, garments, footwear, office supplies, cases and bags, food.' },
    ],
    whatWeAudit: [
      'Pre-fair exhibitor background checks',
      'Booth-based supplier capability assessment',
      'Exhibitor factory connection verification',
      'Real-time price negotiation documentation',
      'Post-fair factory visit coordination',
      'Supplier comparison and shortlisting',
    ],
    caseSummary:
      'A Canadian importer attended the Canton Fair for the first time in 2025 with our Navigator service. We pre-screened 300+ exhibitors, scheduled 45 booth meetings across 5 days, and arranged factory visits to the top 6 candidates. They placed orders with 3 new suppliers and saved an estimated 4 days of unguided hall-walking.',
    seoKeywords: [
      'Canton Fair sourcing guide 2026',
      'Canton Fair agent service',
      'Guangzhou trade show help',
      'China trade fair supplier verification',
    ],
    relatedServices: ['canton-fair-navigator'],
  },
];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
