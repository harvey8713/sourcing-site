import type { City } from '@/types';

export const cities: City[] = [
  {
    slug: 'shenzhen',
    name: 'Shenzhen',
    region: 'Guangdong',
    subtitle: 'The Silicon Valley of hardware — Huaqiangbei, IoT, PCBs',
    description:
      "Shenzhen is the global capital of electronics manufacturing. From Huaqiangbei's legendary component markets to the factories that build IoT devices and consumer electronics, this city powers the world's hardware supply chain.",
    longDescription:
      "This city moves faster than anywhere else on earth. Prototypes that take weeks elsewhere happen overnight here. For hardware startups, product managers, and electronics importers, Shenzhen isn't just a sourcing destination — it's a competitive advantage. Our bilingual team knows which factories are legit, which component stalls carry genuine parts, and how to navigate a manufacturing ecosystem that makes anywhere else look slow.",
    industries: ['Electronics', 'IoT', 'PCB Manufacturing'],
    serviceCount: 4,
    gradient: 'linear-gradient(135deg, #1a3a4a, #2980b9)',
    badge: 'Electronics',
    categories: ['electronics'],
    highlights: [
      { icon: '🏭', title: 'Hidden Factory Access', description: 'Factories not findable on Alibaba or trade platforms — discovered through 15 years of industry relationships in Guangdong.' },
      { icon: '💡', title: 'Component Cost Breakdown', description: 'Huaqiangbei floor-by-floor sourcing with an engineer who knows the price of every resistor, PCB, and connector.' },
      { icon: '🛡️', title: 'Certification Verification', description: 'CE, FCC, RoHS compliance checks at every factory on your shortlist — no fake certs, no surprises.' },
      { icon: '📊', title: 'PCB Partner Evaluation', description: 'Technical assessment of PCB fabrication and assembly partners with production capacity analysis and defect rate audits.' },
    ],
    suitableFor: [
      'Hardware startups prototyping electronics',
      'Importers sourcing consumer electronics',
      'IoT and smart home product brands',
      'Companies seeking PCB assembly partners',
      'First-time China sourcers with technical products',
    ],
    notSuitableFor: [
      'Buyers of fully finished, low-complexity goods',
      'Those looking for a single factory visit',
      'Non-electronics product categories',
      'Same-day turnaround expectations',
    ],
    faq: [
      { question: 'Do I need to speak Mandarin?', answer: 'No. Our bilingual team handles all communication with factory management and component vendors. You focus on evaluating the product.' },
      { question: 'Can I visit Huaqiangbei on my own?', answer: 'Yes, but you\'ll get lost. Huaqiangbei spans multiple buildings with thousands of stalls. Our sourcing engineer knows exactly which floors and stalls carry what you need — saving you days of walking.' },
      { question: 'How many factories will we visit?', answer: 'Typically 5-8 factories over 5 days, plus dedicated time in Huaqiangbei. We pre-screen 50+ candidates before selecting the shortlist you\'ll actually visit.' },
      { question: 'Can you help with prototyping?', answer: 'Absolutely. We can connect you with rapid prototyping services, from 3D-printed enclosures to small-batch PCB fabrication and assembly.' },
    ],
  },
  {
    slug: 'guangzhou',
    name: 'Guangzhou',
    region: 'Guangdong',
    subtitle: 'Canton Fair, Zhongda fabric market, global garment hub',
    description:
      "Guangzhou is China's trade and textile capital. Home to the Canton Fair and the massive Zhongda fabric market, it's where fashion brands, leather goods designers, and multi-category importers come to source.",
    longDescription:
      "Guangzhou is China's original open door to global trade. The biannual Canton Fair brings 200,000+ buyers from 200 countries, and the Zhongda fabric market is where fashion trends get their start — thousands of stalls selling every textile, trim, and accessory you can imagine. Whether you're launching a clothing line or sourcing consumer goods across categories, Guangzhou's supply chain infrastructure is unmatched.",
    industries: ['Textile', 'Garment', 'Leather Goods', 'Trade'],
    serviceCount: 3,
    gradient: 'linear-gradient(135deg, #3d1f5e, #8e44ad)',
    badge: 'Textile & Trade',
    categories: ['textile', 'consumer'],
    highlights: [
      { icon: '🏛️', title: 'Canton Fair Navigation', description: 'Skip the chaos. We pre-screen exhibitors, map your route through 60,000+ booths, and schedule factory visits during the fair window.' },
      { icon: '🧵', title: 'Zhongda Fabric Deep Dive', description: 'Floor-by-floor access to the world\'s largest fabric market. Source textiles, trims, buttons, zippers, and accessories from verified stalls.' },
      { icon: '👜', title: 'Leather Goods Cluster', description: 'Access Guangzhou\'s leather goods manufacturing cluster in Huadu and Baiyun districts — where global fashion brands produce handbags and accessories.' },
      { icon: '🚢', title: 'Multi-Category Coordination', description: 'When you need 5 product categories in one trip, our Guangzhou logistics team coordinates across industries without losing focus.' },
    ],
    suitableFor: [
      'Fashion brands and apparel startups',
      'Leather goods and accessories designers',
      'Multi-category importers attending Canton Fair',
      'Textile and fabric wholesalers',
      'Buyers who need to see products in person before committing',
    ],
    notSuitableFor: [
      'Buyers focused exclusively on electronics',
      'Those who only need one specific factory visit',
      'Tight 2-3 day turnaround schedules',
    ],
    faq: [
      { question: 'Should I attend the Canton Fair?', answer: 'Yes, but not alone. With 60,000+ booths, the Fair is overwhelming. We pre-screen exhibitors and schedule supplier meetings so you spend time with qualified factories, not wandering.' },
      { question: 'What is the Zhongda fabric market like?', answer: 'It\'s massive — thousands of stalls across multiple buildings, each specializing in different textiles, from silk to denim. We guide you to the right stalls for your specific fabric needs.' },
      { question: 'Can I source multiple product categories in one trip?', answer: 'Yes. Guangzhou\'s strength is multi-category sourcing. Our multi-category trip covers textiles, leather, consumer goods, and more — all coordinated through a single itinerary.' },
      { question: 'How is Guangzhou different from Shenzhen?', answer: 'Shenzhen is electronics. Guangzhou is everything else — textiles, leather, consumer goods, and trade. The cities are 30 minutes apart by high-speed rail, so combined trips are common.' },
    ],
  },
  {
    slug: 'dongguan',
    name: 'Dongguan',
    region: 'Guangdong',
    subtitle: 'Mold-making, CNC machining, injection molding',
    description:
      'Dongguan is the precision manufacturing engine of the Pearl River Delta. It excels in mold-making, CNC machining, and injection molding — serving industries from automotive to consumer electronics.',
    longDescription:
      "If Shenzhen is the brain of Chinese manufacturing, Dongguan is the hands. This is where ideas become physical objects — where precision molds, CNC-machined components, and injection-molded parts are produced at scale. Dongguan's factories serve global automotive, medical device, and consumer electronics brands. The engineering talent here is world-class, and the supply chain for raw materials is immediate.",
    industries: ['Precision Mfg', 'Mold Making', 'CNC Machining'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #1a1a2e, #2c3e50)',
    badge: 'Precision Mfg',
    categories: ['electronics', 'specialty'],
    highlights: [
      { icon: '🔧', title: 'Mold Maker Vetting', description: 'Not all mold makers are equal. We evaluate tooling shops based on past projects, lead times, and workshop quality — not just price quotes.' },
      { icon: '⚙️', title: 'CNC Capacity Analysis', description: 'On-site assessment of CNC machine fleets: brands, ages, tolerances, and real production capacity (not claimed capacity).' },
      { icon: '🏗️', title: 'Injection Molding Audits', description: 'Production floor walkthroughs at injection molding facilities, checking mold maintenance, material handling, and quality control systems.' },
      { icon: '📐', title: 'Component Cost Modeling', description: 'Line-by-line should-cost analysis for precision components, benchmarking your quotes against factory floor reality.' },
    ],
    suitableFor: [
      'Hardware companies needing custom molds',
      'CNC-machined component buyers',
      'Automotive parts importers',
      'Medical device manufacturers',
      'Plastic injection-molded product buyers',
    ],
    notSuitableFor: [
      'Buyers of simple off-the-shelf goods',
      'Those without technical product specifications',
      'Traders looking for finished consumer products',
    ],
    faq: [
      { question: 'What\'s the minimum order for molds?', answer: 'It depends on complexity, but most Dongguan mold shops can handle single-cavity prototype molds starting around $500-$2,000. Production molds scale from there.' },
      { question: 'How long do molds take to produce?', answer: 'Simple molds: 10-15 days. Complex multi-cavity molds: 4-6 weeks. Rush orders are possible at premium pricing.' },
      { question: 'Can you help with product design for manufacturing (DFM)?', answer: 'Yes. Our sourcing engineers provide DFM feedback before mold fabrication begins, catching issues that would cause delays or quality problems later.' },
      { question: 'What tolerances can Dongguan factories achieve?', answer: 'Top-tier shops achieve ±0.005mm. We verify tolerance claims on-site with measurement equipment, not just from spec sheets.' },
    ],
  },
  {
    slug: 'yiwu',
    name: 'Yiwu',
    region: 'Zhejiang',
    subtitle: "World's largest wholesale market — 75,000+ booths",
    description:
      "Yiwu International Trade City spans 4 million square meters with over 75,000 booths. It's the world's largest wholesale market for consumer goods — from toys and gifts to home decor and seasonal items.",
    longDescription:
      "If it's sold in a dollar store, gift shop, or supermarket aisle, it probably passed through Yiwu. This single market covers 26 product categories across 5 connected districts — it would take 5 months to spend just 1 minute at every booth. For importers of consumer goods, seasonal items, toys, jewelry, and home products, Yiwu isn't optional — it's ground zero. The challenge isn't finding products. It's finding quality suppliers among 75,000 options.",
    industries: ['Consumer Goods', 'Commodities', 'Wholesale'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #7a3800, #e67e22)',
    badge: 'Commodities',
    categories: ['consumer'],
    highlights: [
      { icon: '🏬', title: 'District-by-District Route', description: 'Pre-planned route through the 5 districts, hitting only the booths that match your product categories. No aimless walking.' },
      { icon: '📦', title: 'Supplier Pre-Screening', description: 'We vette booth owners before you arrive — checking export licenses, factory certifications, and trade history so you only meet qualified sellers.' },
      { icon: '💰', title: 'Price Benchmarking', description: 'Real-time price comparison across multiple booths for the same product, ensuring you get the true wholesale price, not the foreigner price.' },
      { icon: '🔍', title: 'Factory Behind the Booth', description: "The booth is just a showroom. We arrange visits to the actual factories behind the stalls — where you'll see real production capability." },
    ],
    suitableFor: [
      'Dollar store and discount retail buyers',
      'Amazon and e-commerce sellers',
      'Gift and promotional product importers',
      'Seasonal and holiday product buyers',
      'Home decor and kitchenware importers',
    ],
    notSuitableFor: [
      'Buyers of highly technical products',
      'Those needing custom manufacturing (visit factories, not the market)',
      'Single-SKU, large-quantity buyers (direct factory sourcing is cheaper)',
    ],
    faq: [
      { question: 'How many booths can I visit in a day?', answer: 'Realistically, 30-40 booths if you\'re focused. Our pre-screening means every booth you visit is relevant — you\'re not wasting time on dead ends.' },
      { question: 'Are Yiwu suppliers the actual manufacturers?', answer: 'Sometimes yes, sometimes no. Many booths are trading companies. We verify factory ownership and arrange separate factory visits for serious buyers.' },
      { question: 'How do MOQs work in Yiwu?', answer: 'MOQs in Yiwu are generally lower than factory-direct. Many booths start at 500-1,000 units per SKU. Custom packaging and branding usually require higher MOQs.' },
      { question: 'Is it better to source from Yiwu or go direct to factories?', answer: 'Yiwu is best for variety and low-MOQ testing. If you\'re doing 10,000+ units of one product, factory-direct is usually cheaper. We help you decide.' },
    ],
  },
  {
    slug: 'foshan',
    name: 'Foshan',
    region: 'Guangdong',
    subtitle: "Global furniture capital — Lecong's 3M sqm market",
    description:
      "Foshan produces 70% of China's furniture exports. The Lecong furniture wholesale market spans 3 million square meters across 180+ showroom buildings — the largest furniture market in the world.",
    longDescription:
      "Foshan isn't just a furniture city — it's the furniture city. Every major international furniture brand sources components or finished products here. The Lecong market alone has 180+ showroom buildings stretching 5 kilometers, displaying everything from $50 flat-pack desks to $50,000 luxury sofas. Beyond the showrooms, thousands of factories produce furniture, lighting, ceramics, and home decor. If it belongs in a home, Foshan makes it.",
    industries: ['Furniture', 'Home Decor', 'Interior Design'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #641e16, #c0392b)',
    badge: 'Furniture',
    categories: ['furniture'],
    highlights: [
      { icon: '🪑', title: 'Lecong Market Mastery', description: 'Skip the tourist traps. We take you to showrooms that match your price point, style, and quality requirements — across 180+ buildings.' },
      { icon: '🪵', title: 'Material & Finish Verification', description: 'On-site inspection of wood types, joinery, finishes, and hardware — ensuring what you order is what gets shipped.' },
      { icon: '🏗️', title: 'Factory Floor Audits', description: 'Behind-the-showroom visits to production facilities: capacity checks, quality control systems, and export packaging standards.' },
      { icon: '🚚', title: 'Freight & Logistics Planning', description: 'Furniture shipping is complex. We connect you with specialized freight forwarders who handle FCL, LCL, and consolidation shipping.' },
    ],
    suitableFor: [
      'Furniture retailers and importers',
      'Interior designers and hospitality buyers',
      'Home decor brands and e-commerce sellers',
      'Custom furniture and OEM buyers',
      'Restaurant and hotel furniture purchasers',
    ],
    notSuitableFor: [
      'Buyers looking for low-cost disposable furniture',
      'Those wanting to buy single pieces (showrooms sell in volume)',
      'ULTRA-tight timeline projects (custom furniture takes 4-8 weeks)',
    ],
    faq: [
      { question: 'How long does custom furniture take?', answer: 'Standard production: 4-6 weeks. Complex custom designs: 8-12 weeks. Rush orders available at premium pricing. Add 4-6 weeks for sea freight.' },
      { question: 'Can you help with furniture design?', answer: 'Yes. We work with in-house designers at Foshan factories who can adapt your designs or create new ones based on reference images and specifications.' },
      { question: 'What about quality control for furniture?', answer: 'We inspect at three stages: raw materials, mid-production, and pre-shipment. Every inspection includes photos, measurements, and a detailed report.' },
      { question: 'How does shipping furniture from China work?', answer: 'Most buyers use FCL (full container load) or LCL (less than container load) sea freight. A 40HQ container fits roughly 50-60 pieces of typical furniture. We coordinate the entire logistics chain.' },
    ],
  },
  {
    slug: 'yunnan',
    name: 'Yunnan',
    region: 'Yunnan Province',
    subtitle: "95% of China's coffee, Pu'er tea heartland",
    description:
      "Yunnan produces 95% of China's coffee and is the birthplace of Pu'er tea. From specialty coffee farms in Baoshan to ancient tea plantations, it's an origin destination for food and beverage buyers.",
    longDescription:
      "Most people don't think of China for coffee — but Yunnan is the world's 14th largest coffee producer, and its specialty coffee scene is exploding. The same province is the spiritual home of Pu'er tea, with ancient tea trees over 1,000 years old still producing harvestable leaves. For food and beverage buyers, Yunnan is an origin story waiting to be discovered — direct relationships with farmers, processing facilities, and exporters who are only beginning to serve international markets.",
    industries: ['Coffee', 'Tea', 'Agriculture'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #145a32, #27ae60)',
    badge: 'Coffee & Tea',
    categories: ['food'],
    highlights: [
      { icon: '☕', title: 'Coffee Farm Visits', description: 'Walk specialty coffee farms in Baoshan and Pu\'er, meet growers, taste micro-lots, and evaluate processing methods from cherry to green bean.' },
      { icon: '🍵', title: 'Tea Plantation Sourcing', description: 'Visit ancient tea gardens and modern plantations. Learn to grade Pu\'er, black, and green teas by leaf quality, age, and processing technique.' },
      { icon: '🏔️', title: 'Processing Facility Audits', description: 'Inspect washing stations, drying patios, and milling facilities. Verify organic certifications and food safety standards on-site.' },
      { icon: '📋', title: 'Direct Trade Relationships', description: 'Skip the middlemen. We facilitate direct relationships with farm cooperatives and processors — better prices, better traceability.' },
    ],
    suitableFor: [
      'Specialty coffee roasters and importers',
      'Tea brands and tea house operators',
      'Health food and superfood companies',
      'Buyers seeking organic certified products',
      'Agriculture and food ingredient importers',
    ],
    notSuitableFor: [
      'Large-volume commodity coffee buyers (go to Brazil or Vietnam)',
      'Buyers looking for instant or low-grade products',
      'Those who can\'t handle seasonal harvest schedules',
    ],
    faq: [
      { question: 'What coffee varieties grow in Yunnan?', answer: 'Primarily Catimor and various Arabica varieties. Specialty-grade lots (80+ points) are increasingly available as processing methods improve. Some farms now produce Gesha and other premium varieties.' },
      { question: 'What\'s the harvest season?', answer: 'Coffee: November to March. Spring tea: March to May. Autumn tea: September to October. We recommend visiting during harvest to see processing in action.' },
      { question: 'How do I export coffee or tea from China?', answer: 'We connect you with licensed export agents who handle phytosanitary certificates, customs documentation, and freight forwarding. The process is straightforward once you have supplier relationships.' },
      { question: 'Can I combine a coffee and tea sourcing trip?', answer: 'Yes. Our 5-day Yunnan trip covers both — coffee farms in Baoshan/Pu\'er and tea plantations in the same regions, with travel coordinated so you maximize your time on the ground.' },
    ],
  },
  {
    slug: 'shaoxing',
    name: 'Shaoxing',
    region: 'Zhejiang',
    subtitle: "World's largest fabric market — 30,000+ stalls",
    description:
      "Shaoxing's Keqiao district is the world's largest fabric wholesale market with over 30,000 stalls. It's the go-to source for textile importers, fashion brands, and home textile companies.",
    longDescription:
      "Before a garment becomes a garment, the fabric comes from Shaoxing. The Keqiao (China Textile City) market is where fashion brands, fabric wholesalers, and garment manufacturers source their raw materials — from basic cotton and polyester to high-end silks, jacquards, and technical textiles. With 30,000+ stalls organized by fabric type, it's the most efficient textile sourcing destination on earth. The surrounding area also houses dyeing, printing, and finishing facilities.",
    industries: ['Textile', 'Fabric', 'Garment Manufacturing'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #4a235a, #af7ac5)',
    badge: 'Textile',
    categories: ['textile'],
    highlights: [
      { icon: '🧶', title: 'Fabric Market Navigation', description: 'Navigate 30,000+ stalls efficiently. We pre-identify suppliers matching your fabric type, weight, composition, and price range before you arrive.' },
      { icon: '🎨', title: 'Color & Finish Matching', description: 'On-site color matching, hand-feel evaluation, and finish assessment. We collect fabric swatches and arrange lab dip testing.' },
      { icon: '🏭', title: 'Mill & Finishing Audits', description: 'Factory visits to weaving mills, dye houses, and finishing facilities. Verify production capacity, quality systems, and environmental compliance.' },
      { icon: '📏', title: 'Quality & Compliance Testing', description: 'Arrange third-party testing for colorfastness, shrinkage, tensile strength, and chemical compliance (OEKO-TEX, REACH) at accredited labs.' },
    ],
    suitableFor: [
      'Fashion brands and apparel manufacturers',
      'Fabric wholesalers and distributors',
      'Home textile and bedding companies',
      'Technical and performance fabric buyers',
      'Buyers seeking custom dyeing and printing',
    ],
    notSuitableFor: [
      'Buyers looking for finished garments (go to Guangzhou)',
      'Those who can\'t evaluate fabric quality by touch',
      'Small-quantity buyers (most mills have MOQs of 1,000+ meters)',
    ],
    faq: [
      { question: 'What\'s the minimum order quantity (MOQ) for fabrics?', answer: 'Typically 1,000-3,000 meters per color for woven fabrics, 500-1,000 kg for knitted fabrics. Some stalls offer sample quantities (10-50 meters) at higher per-meter prices.' },
      { question: 'Can I get custom colors and prints?', answer: 'Yes. Lab dips for color matching take 3-5 days. Custom prints require screen or digital print setup — lead times vary from 7-15 days for sampling.' },
      { question: 'How do I verify fabric composition?', answer: 'We arrange burn tests and third-party lab testing for fiber content verification. Certifications (OEKO-TEX, GOTS) are verified against factory records.' },
      { question: 'What\'s the difference between Keqiao and Zhongda (Guangzhou)?', answer: 'Keqiao is mill-direct — you\'re buying from fabric producers. Zhongda is a wholesale market for garment manufacturers. Keqiao has lower prices and better consistency; Zhongda has more variety and lower MOQs.' },
    ],
  },
  {
    slug: 'yongkang',
    name: 'Yongkang',
    region: 'Zhejiang',
    subtitle: 'Hardware capital — thermos, power tools, kitchenware',
    description:
      "Yongkang is China's hardware capital, dominating global production of thermos flasks, power tools, kitchenware, and door hardware. It's a classic Chinese monopoly factory town.",
    longDescription:
      "Yongkang is the definition of a Chinese monopoly factory town — a single city that dominates global production of specific product categories. If you've ever used a stainless steel thermos, chances are it came from Yongkang. The same goes for many power tools, non-stick pans, and door locks. The entire supply chain — from raw steel to finished packaging — exists within a 20-kilometer radius. This concentration creates efficiency and price advantages that are impossible to match elsewhere.",
    industries: ['Hardware', 'Kitchenware', 'Power Tools'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #2c3e50, #34495e)',
    badge: 'Hardware',
    categories: ['specialty'],
    highlights: [
      { icon: '🔩', title: 'Supply Chain Concentration', description: 'Every component — steel, gaskets, plastic parts, packaging — is made within 20km. This means faster samples, lower material costs, and instant supply chain visibility.' },
      { icon: '🫖', title: 'Thermos & Vacuum Flasks', description: 'Visit factories producing 80% of the world\'s vacuum flasks. Evaluate insulation performance, lid mechanisms, and custom branding options.' },
      { icon: '🔨', title: 'Power Tool Factories', description: 'Assess factories making angle grinders, drills, and saws. Compare OEM vs. ODM capabilities, motor quality, and safety certifications.' },
      { icon: '🍳', title: 'Kitchenware Production', description: 'Non-stick coating inspection, material thickness verification, and heat distribution testing at cookware factories serving global brands.' },
    ],
    suitableFor: [
      'Hardware store and home improvement retailers',
      'Kitchen and houseware brands',
      'Power tool importers and distributors',
      'Promotional product companies',
      'Buyers seeking private label manufacturing',
    ],
    notSuitableFor: [
      'High-end premium brand buyers (most factories focus on volume)',
      'Buyers needing UL/ETL certification (verify factory by factory)',
      'Those seeking extremely custom, one-off designs (molds are expensive)',
    ],
    faq: [
      { question: 'Are Yongkang factories good quality?', answer: 'Quality varies enormously. We separate tier-1 factories (serving global brands) from tier-3 workshops (local market only). Our audits focus on factories with export-grade quality systems.' },
      { question: 'What certifications can I expect?', answer: 'Many top factories hold ISO 9001, BSCI, and product-specific certs like LFGB (food contact) or GS (German safety). We verify all certifications on-site.' },
      { question: 'What MOQs are typical?', answer: 'Thermos flasks: 1,000-3,000 units per SKU. Power tools: 500-1,000 units. Kitchenware: 2,000+ units. Custom logo printing usually starts at 1,000 units.' },
      { question: 'Can I combine Yongkang with a Yiwu visit?', answer: 'Definitely. Yongkang is just 1.5 hours from Yiwu by car. Many buyers visit Yiwu for variety and Yongkang for factory-direct hardware and kitchenware.' },
    ],
  },
  {
    slug: 'ningxia',
    name: 'Ningxia',
    region: 'Ningxia Province',
    subtitle: 'Goji berry capital & emerging wine region',
    description:
      "Ningxia is China's goji berry capital and its most exciting wine region. Visit organic goji farms, processing facilities, and award-winning wineries producing internationally recognized vintages.",
    longDescription:
      "Ningxia is China's best-kept secret in food and beverage. The Helan Mountain foothills produce wines that are winning international competitions — Decanter awards, not just domestic praise. Meanwhile, Zhongning county produces the vast majority of the world's goji berries, with organic and EU-certified farms expanding rapidly. For health food brands, wine importers, and superfood companies, Ningxia offers origin-level pricing and direct farm-to-brand relationships that aren't possible through intermediaries.",
    industries: ['Superfoods', 'Wine', 'Agriculture'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #7d6608, #d4a853)',
    badge: 'Superfoods',
    categories: ['food'],
    highlights: [
      { icon: '🍷', title: 'Winery Tours & Tasting', description: 'Visit award-winning wineries in the Helan Mountain foothills. Taste vintages, tour cellars, and negotiate direct import agreements with producers.' },
      { icon: '🫐', title: 'Goji Farm Sourcing', description: 'Walk organic goji farms in Zhongning, evaluate drying and processing methods, and verify EU organic and food safety certifications.' },
      { icon: '🧪', title: 'Processing & Testing', description: 'Inspect freeze-drying, spray-drying, and sorting facilities. Arrange third-party lab testing for pesticide residues and heavy metals.' },
      { icon: '📦', title: 'Export-Ready Packaging', description: 'Source in retail-ready packaging or bulk formats. Ningxia suppliers increasingly offer white-label and private-label options for international markets.' },
    ],
    suitableFor: [
      'Specialty wine importers and distributors',
      'Health food and superfood brands',
      'Organic product companies',
      'Tea and herbal product buyers',
      'Buyers seeking EU/US organic certified products',
    ],
    notSuitableFor: [
      'Mass-market wine buyers (Ningxia is boutique, not bulk)',
      'Buyers looking for instant supply (agriculture follows harvest cycles)',
      'Those who need year-round fresh product (goji is seasonal)',
    ],
    faq: [
      { question: 'Is Ningxia wine actually good?', answer: "Yes — and getting better every year. Ningxia wines have won multiple Decanter World Wine Awards and International Wine Challenge medals. The region is often called China's Napa Valley." },
      { question: 'When is the best time to visit?', answer: 'Goji harvest: July to September. Wine harvest: September to October. Spring (April-May) is pleasant for general sourcing trips when both industries are active.' },
      { question: 'What certifications are available?', answer: 'Many Ningxia farms hold EU Organic, USDA Organic, and China Green Food certifications. We verify certificates on-site and arrange third-party testing for any concerns.' },
      { question: 'How does goji berry pricing work?', answer: 'Pricing depends on grade (size, color, drying method), organic certification, and quantity. Direct-from-farm pricing is typically 40-60% below what you\'d pay through a trading company.' },
    ],
  },
  {
    slug: 'sichuan-chongqing',
    name: 'Sichuan / Chongqing',
    region: 'Sichuan & Chongqing',
    subtitle: 'Pepper, sauces, hot pot bases — flavor engine of Chinese cuisine',
    description:
      "The Sichuan-Chongqing region is the flavor engine of Chinese cuisine. From premium Sichuan peppercorns to fermented bean pastes and hot pot bases, it's the source for authentic Asian food ingredients.",
    longDescription:
      "This region doesn't just produce food — it produces flavor. Sichuan peppercorns from Hanyuan are the world's most prized, commanding premium prices in specialty food markets globally. Pixian doubanjiang (fermented broad bean paste) is the soul of Sichuan cooking, aged for years in clay pots. Chongqing's hot pot base industry alone is worth billions. For food importers, restaurant suppliers, and specialty food brands, this region provides ingredients with Protected Designation of Origin status that carry genuine authenticity — not factory-made imitations.",
    industries: ['Spices', 'Sauces', 'Food Ingredients'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #a93226, #e74c3c)',
    badge: 'Spice Route',
    categories: ['food'],
    highlights: [
      { icon: '🌶️', title: 'Peppercorn Origin Sourcing', description: 'Visit Hanyuan peppercorn farms. Learn to grade Sichuan pepper by numbing intensity, aroma, and seed content — and buy direct from growers.' },
      { icon: '🫘', title: 'Doubanjiang Fermentation', description: 'Tour traditional doubanjiang workshops where bean paste ages in clay pots for 1-3 years. Verify production methods and arrange export packaging.' },
      { icon: '🍲', title: 'Hot Pot Base Manufacturing', description: 'Inspect hot pot base factories producing for restaurant chains worldwide. Evaluate spice blends, oil quality, and shelf-life testing procedures.' },
      { icon: '🧄', title: 'Specialty Sauce Production', description: 'Source chili oils, pickled vegetables, fermented tofu, and regional sauces. Factory audits with focus on food safety and HACCP compliance.' },
    ],
    suitableFor: [
      'Asian grocery and specialty food importers',
      'Restaurant chains and food service buyers',
      'Hot pot restaurant operators',
      'Sauce and condiment brands',
      'Private label Asian food companies',
    ],
    notSuitableFor: [
      'Buyers seeking bland, mass-market products',
      'Those who can\'t handle spicy food tastings',
      'Buyers looking for EU organic certification (rare in this region)',
    ],
    faq: [
      { question: 'What makes Sichuan peppercorn special?', answer: 'It\'s not actually pepper — it\'s the husk of the prickly ash tree, producing a unique numbing sensation (má) that\'s fundamental to Sichuan cuisine. Quality varies enormously by region, harvest time, and processing.' },
      { question: 'Can I visit doubanjiang factories?', answer: 'Yes. The Pixian region has both large-scale producers and traditional workshops. The best doubanjiang is still made the old way — fermented in clay pots under sunlight for 1-3 years.' },
      { question: 'What export documentation do food products need?', answer: 'Typically: Certificate of Origin, Health Certificate, phytosanitary certificate for plant products, and FDA prior notice for US imports. We coordinate with licensed export agents.' },
      { question: 'How does the hot pot base supply chain work?', answer: 'Major brands produce in Chongqing and Chengdu. MOQs range from 500-2,000 units for private label to 5,000+ for custom formulations. Shelf life is typically 12-18 months.' },
    ],
  },
  {
    slug: 'ningbo',
    name: 'Ningbo',
    region: 'Zhejiang',
    subtitle: 'Plastics, hardware, home appliances — major export port',
    description:
      "Ningbo is a major manufacturing and export hub specializing in plastics, hardware, and home appliances. Its deep-water port is one of the busiest in the world for container shipping.",
    longDescription:
      "Ningbo-Zhoushan port is the world's busiest port by cargo tonnage — and the manufacturing base behind it is equally impressive. The city and surrounding areas are dense with factories producing plastic products, small home appliances, hardware, and automotive parts. For importers, the proximity of factories to the port means faster shipping, lower inland logistics costs, and a manufacturing ecosystem that understands export requirements. Ningbo is also the gateway to dozens of Zhejiang province's specialty manufacturing towns.",
    industries: ['Plastics', 'Home Appliances', 'Hardware'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #154360, #2471a3)',
    badge: 'Plastics & Port',
    categories: ['specialty'],
    highlights: [
      { icon: '🏗️', title: 'Plastics Manufacturing Hub', description: 'Injection molding, blow molding, and extrusion factories producing everything from household goods to industrial components.' },
      { icon: '🔌', title: 'Small Home Appliances', description: 'Factories producing blenders, rice cookers, electric kettles, and other small kitchen appliances for global brands and private labels.' },
      { icon: '🚢', title: 'Port-Side Logistics', description: 'Factories minutes from the world\'s busiest cargo port. Direct container loading, consolidated shipping, and freight-forwarder coordination.' },
      { icon: '🗺️', title: 'Gateway to Zhejiang', description: 'Ningbo is the ideal base for exploring Zhejiang\'s specialty towns — Shaoxing, Yiwu, Yongkang, and Zhuji are all within a 2-hour radius.' },
    ],
    suitableFor: [
      'Home appliance importers and brands',
      'Plastic product buyers',
      'Hardware and tool distributors',
      'Companies seeking port-proximate suppliers',
      'Multi-city Zhejiang province sourcing trips',
    ],
    notSuitableFor: [
      'Buyers seeking highly specialized manufacturing (see Dongguan or Shenzhen)',
      'Textile and garment buyers (see Shaoxing or Guangzhou)',
      'Those wanting factory visits only (we recommend combining with nearby cities)',
    ],
    faq: [
      { question: 'Does Ningbo have its own services?', answer: 'Not yet — we currently use Ningbo as a logistics hub and gateway to nearby manufacturing cities. Custom trips can be arranged on request.' },
      { question: 'What makes Ningbo different from Shanghai?', answer: 'Ningbo\'s port handles more cargo tonnage, and its manufacturing is more focused on plastics and hardware. It\'s also closer to Zhejiang\'s specialty manufacturing towns.' },
      { question: 'Can I ship through Ningbo port?', answer: 'Absolutely. Ningbo-Zhoushan is connected to 600+ ports in 200+ countries. We coordinate container loading, customs clearance, and freight forwarding.' },
      { question: 'Should I visit Ningbo or Shanghai?', answer: 'If you\'re sourcing plastics, hardware, or home appliances, Ningbo is closer to the factories. If you need a wider range of services and English-speaking infrastructure, Shanghai is more convenient.' },
    ],
  },
  {
    slug: 'zhuji',
    name: 'Zhuji',
    region: 'Zhejiang',
    subtitle: "1/3 of the world's socks — plus pearl processing",
    description:
      "Zhuji is the world's sock capital, producing one-third of all socks globally. It's also a major center for freshwater pearl processing — a classic example of China's hyper-specialized factory towns.",
    longDescription:
      "Zhuji embodies Chinese manufacturing specialization at its most extreme. The Datang district alone produces roughly one-third of the world's socks — billions of pairs annually — with an integrated supply chain that starts with yarn spinning and ends with packaging and export. The Shanxiahu pearl market is the world's largest freshwater pearl trading center, where pearls are sorted, drilled, strung, and sold to jewelry brands worldwide. In Zhuji, the entire industry from raw material to finished product happens within a few square kilometers.",
    industries: ['Socks', 'Hosiery', 'Pearls'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #5b2c6f, #8e44ad)',
    badge: 'Sock Capital',
    categories: ['specialty', 'textile'],
    highlights: [
      { icon: '🧦', title: 'Sock Production at Scale', description: 'Walk through Datang\'s integrated sock supply chain — from yarn spinning and knitting to dyeing, boarding, and packaging — all within one industrial zone.' },
      { icon: '💎', title: 'Freshwater Pearl Market', description: 'Visit Shanxiahu, the world\'s largest freshwater pearl market. Source loose pearls, strands, and finished jewelry direct from processors.' },
      { icon: '🧵', title: 'Specialized Supply Chain', description: 'Everything — yarn, elastic, packaging, machinery — is made locally. This vertical integration means unmatched efficiency and responsiveness.' },
      { icon: '📊', title: 'Hyper-Specialized Expertise', description: "When a city does one thing for 30+ years, the expertise runs deep. Zhuji's sock factories understand every yarn blend, knitting technique, and quality standard." },
    ],
    suitableFor: [
      'Sock and hosiery brands',
      'Apparel and accessories companies',
      'Pearl jewelry retailers and wholesalers',
      'Private label and OEM buyers',
      'Buyers interested in China\'s specialty manufacturing towns',
    ],
    notSuitableFor: [
      'Buyers of diverse product categories (Zhuji is highly specialized)',
      'Those needing very small MOQs (hosiery MOQs start at 1,000+ pairs per style)',
      'Buyers seeking electronics or non-textile products',
    ],
    faq: [
      { question: 'Does Zhuji have its own services?', answer: 'Not yet — we\'re exploring Zhuji as part of our specialty factory towns coverage. Custom trips available on request, or combined with Yiwu/Yongkang visits.' },
      { question: 'What kinds of socks can I source?', answer: 'Everything — athletic, dress, casual, compression, diabetic, children\'s, bamboo fiber, merino wool, custom designs. The variety is staggering.' },
      { question: 'What MOQs should I expect?', answer: 'Basic socks: 1,000-3,000 pairs per style/color. Custom designs: 3,000-5,000 pairs. Premium and specialty fibers may have higher minimums.' },
      { question: 'Is pearl sourcing accessible to small buyers?', answer: 'Yes, much more than you\'d think. You can buy strands starting at $5-10 per strand at wholesale. Loose pearls for custom jewelry start at even lower quantities.' },
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByCategory(category: string): City[] {
  if (category === 'all') return cities;
  return cities.filter((c) => c.categories.includes(category));
}

export function getFeaturedCities(): City[] {
  return cities.slice(0, 6);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

/** Maps city slugs to the exact names used in service.cities[] for matching */
const CITY_SERVICE_MATCH: Record<string, string[]> = {
  yunnan: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
  'sichuan-chongqing': ['Chengdu', 'Chongqing'],
  ningxia: ['Yinchuan', 'Zhongwei'],
};

export function getCityServiceMatchNames(slug: string, cityName: string): string[] {
  if (CITY_SERVICE_MATCH[slug]) return CITY_SERVICE_MATCH[slug];
  return [cityName];
}
