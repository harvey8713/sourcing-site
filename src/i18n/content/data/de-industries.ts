import type { IndustryPage } from '@/types';
import { INDUSTRY_META } from '@/lib/constants';

export const industries: IndustryPage[] = [
  {
    slug: 'electronics',
    name: INDUSTRY_META.electronics.name,
    description: 'China ist die Elektronikfabrik der Welt. Wir auditieren PCB-, SMT-, Montage- und Komponentenlieferanten von Shenzhen bis Dongguan.',
    color: INDUSTRY_META.electronics.color,
    heroCopy:
      'Von Shenzhens Huaqiangbei bis zum Dongguaner Präzisionsfertigungsgürtel ist Chinas Elektronik-Lieferkette in Umfang und Geschwindigkeit unübertroffen. Wir helfen Ihnen, sie mit Vertrauen zu navigieren.',
    keyRegions: [
      { name: 'Shenzhen', description: 'Unterhaltungselektronik, IoT-Geräte, PCB-Design und -Montage, Huaqiangbei-Komponentenmärkte.' },
      { name: 'Dongguan', description: 'Präzisionsfertigung, Formenbau, CNC-Bearbeitung, Industrieelektronik.' },
      { name: 'Huizhou', description: 'Batteriefertigung, Solarmodule, EV-Komponenten, New-Energy-Lieferkette.' },
    ],
    whatWeAudit: [
      'PCB-Fertigungs- und Montageeinrichtungen',
      'SMT-Produktionslinien und Qualitätskontrolle',
      'OEM/ODM-Fabriken für Unterhaltungselektronik',
      'Authentizität und Rückverfolgbarkeit von Komponentenlieferanten',
      'Sicherheitszertifizierungen für Batterien und Netzteile',
      'Fähigkeiten und Ausstattung von Elektronikprüflaboren',
    ],
    caseSummary:
      'Im Jahr 2025 auditierten wir 15 Bluetooth-Lautsprecher-Fabriken in Shenzhen für eine europäische Marke. Wir eliminierten 11 aufgrund von Qualitätsproblemen oder Zwischenhändlerstatus, nahmen 4 in die engere Wahl, und der Kunde wählte eine Fabrik, die eine Qualitätsrate von 99,2 % bei ihrer ersten 10.000-Einheiten-Bestellung lieferte — was geschätzte $45.000 im Vergleich zu ihrem vorherigen, über Alibaba bezogenen Lieferanten einsparte.',
    seoKeywords: [
      'China Elektronikhersteller Audit',
      'Shenzhen Fabrikbesuch Service',
      'Elektronik Lieferantenverifizierung China',
      'China PCB-Montage Fabrikinspektion',
    ],
    relatedServices: ['shenzhen-electronics-sprint', 'shenzhen-dongguan-hardware-audit', 'new-energy-supply-chain'],
  },
  {
    slug: 'consumer-goods',
    name: INDUSTRY_META['consumer-goods'].name,
    description: 'Von Yiwus Großhandelsmärkten bis zu Guangzhous Spezialbezirken beschaffen wir in Chinas riesiger Konsumgüterlandschaft.',
    color: INDUSTRY_META['consumer-goods'].color,
    heroCopy:
      'China produziert mehr Konsumgüter als jedes andere Land der Erde. Die Herausforderung besteht nicht darin, Lieferanten zu finden — sondern die richtigen zu finden. Wir filtern das Rauschen.',
    keyRegions: [
      { name: 'Yiwu', description: 'Weltweit größter Großhandelsmarkt — 75.000+ Stände, die jede Konsumgüterkategorie abdecken.' },
      { name: 'Guangzhou', description: 'Spezialisierte Großhandelsbezirke für Taschen, Uhren, Schmuck, Spielzeug und Modeaccessoires.' },
      { name: 'Shantou', description: 'Spielzeug- und Kunststoffprodukt-Fertigungscluster im Osten Guangdongs.' },
    ],
    whatWeAudit: [
      'Fabrik- vs. Wiederverkäufer-Verifizierung',
      'Produktqualität und Konsistenz über Muster hinweg',
      'Verpackungs- und Branding-Fähigkeit',
      'Export-Compliance (CE, FDA, CPSIA usw.)',
      'Produktionskapazität und Zuverlässigkeit der Lieferzeiten',
      'Preiswettbewerbsfähigkeits-Benchmarking',
    ],
    caseSummary:
      'Ein US-Amazon-FBA-Verkäufer benötigte die Beschaffung von 8 Produktkategorien in einer Reise. Unser Guangzhou Multi-Kategorie-Sprint besuchte 22 Lieferanten in 4 Marktbezirken an 3 Tagen, lieferte ein kategorisiertes Lieferantenverzeichnis mit Preisen, und der Kunde platzierte Musterbestellungen bei 6 verifizierten Fabriken — alles innerhalb seines Budgets von $15.000.',
    seoKeywords: [
      'China Konsumgüter Beschaffungsagent',
      'Yiwu Markt Einkaufsleitfaden',
      'China Großhandel Produktbeschaffung',
      'Amazon FBA Lieferantenverifizierung China',
    ],
    relatedServices: ['yiwu-commodity-sprint', 'guangzhou-multi-category-sourcing'],
  },
  {
    slug: 'apparel-textile',
    name: INDUSTRY_META['apparel-textile'].name,
    description: 'Chinas Textilgürtel ist der größte der Welt. Wir auditieren Bekleidungsfabriken, Stoffmühlen und Färbereien von Shaoxing bis Guangzhou.',
    color: INDUSTRY_META['apparel-textile'].color,
    heroCopy:
      'Vom Keqiao-Stoffmarkt (weltgrößter) bis zu Guangzhous Bekleidungswerkstätten bietet Chinas Bekleidungslieferkette unübertroffene Vielfalt und Flexibilität für Modemarken jeder Größe.',
    keyRegions: [
      { name: 'Guangzhou', description: 'Bekleidungsfertigung, Lederwaren, Zhongda-Stoffmarkt, Sanyuanli-Lederbezirk.' },
      { name: 'Shaoxing / Keqiao', description: 'Weltweit größter Stoffgroßhandelsmarkt, Färbereien, Druckereieinrichtungen.' },
      { name: 'Nantong', description: 'Heimtextilien-, Bettwäsche-, Handtuch-Fertigungscluster in der Provinz Jiangsu.' },
    ],
    whatWeAudit: [
      'Produktionslinien und Qualitätssysteme von Bekleidungsfabriken',
      'Fähigkeiten und Mindestbestellmengen von Stoffmühlen',
      'Umwelt-Compliance und Farbkonsistenz von Färbereien',
      'Konstruktionsqualität von Lederwarenwerkstätten',
      'Fähigkeiten von Druckerei- und Stickereieinrichtungen',
      'Ethische Fertigungs- und Arbeitspraktiken-Überprüfung',
    ],
    caseSummary:
      'Eine Londoner Streetwear-Marke benötigte Kleinserienproduktion (100 Stück pro Stil). Wir besuchten 8 Bekleidungsfabriken in Guangzhou, beschafften Stoffe vom Zhongda-Markt, koordinierten die Musterentwicklung und identifizierten eine Fabrik, die bereit war, von 100 auf 1.000 Stück mit dem Wachstum der Marke zu skalieren.',
    seoKeywords: [
      'China Bekleidungsfabrik Audit',
      'China Stoffbeschaffungsagent',
      'Guangzhou Bekleidungshersteller Besuch',
      'China Textillieferkette Inspektion',
    ],
    relatedServices: ['guangzhou-apparel-leather', 'textile-belt-deep-dive'],
  },
  {
    slug: 'furniture',
    name: INDUSTRY_META.furniture.name,
    description: 'Foshan produziert 70 % der chinesischen Möbelexporte. Wir auditieren Fabriken für Massivholz, Platten, Polsterung und Metallmöbel.',
    color: INDUSTRY_META.furniture.color,
    heroCopy:
      'Foshan ist die unbestrittene Hauptstadt der chinesischen Möbelfertigung. Mit Clustern für jedes Material und jeden Stil besteht die Herausforderung darin, die richtige Fabrik für Ihre spezifischen Anforderungen zu finden.',
    keyRegions: [
      { name: 'Lecong', description: 'Weltweit größter Möbelgroßhandelsmarkt — 3 Millionen Quadratmeter Showrooms in über 180 Gebäuden.' },
      { name: 'Longjiang', description: 'Fertigungszentrum für Polstermöbel, Sofas und Matratzen.' },
      { name: 'Shunde', description: 'Massivholzmöbel, maßgefertigte Einbauschränke und hochwertige Wohnmöbelfertigung.' },
    ],
    whatWeAudit: [
      'Echtheitsprüfung von Massivholz (Holzart, Feuchtigkeitsgehalt, Verbindungen)',
      'Rahmenkonstruktion und Schaumdichte von Polsterungen',
      'Beschlagqualität und Montagepräzision von Plattenmöbeln',
      'Oberflächenqualität (Lack, Lasur, Furnier)',
      'Verpackungs- und Containerladepraktiken',
      'Bewertung von Maßanfertigungs- und OEM-Fähigkeiten',
    ],
    caseSummary:
      'Eine Hotelgruppe aus Dubai benötigte maßgefertigte Massivholzmöbel für 120 Zimmer. Wir auditierten 6 Fabriken in Shunde, überprüften ihre Konstruktionsmethoden und Oberflächenqualität, und die ausgewählte Fabrik lieferte pünktlich mit nur 2 % Fehlerquote — weit unter dem Branchendurchschnitt von 8-10 %.',
    seoKeywords: [
      'Foshan Möbelfabrik Besuch',
      'China Möbelqualitätsprüfung',
      'China Massivholzmöbel Beschaffung',
      'Foshan Möbelgroßhandel Leitfaden',
    ],
    relatedServices: ['foshan-furniture-sourcing'],
  },
  {
    slug: 'food-beverage',
    name: INDUSTRY_META['food-beverage'].name,
    description: 'Beschaffen Sie Premium-Lebensmittel und Getränke direkt am Ursprung — von Yunnan-Kaffee über Sichuan-Gewürze bis zu Ningxia-Goji-Beeren.',
    color: INDUSTRY_META['food-beverage'].color,
    heroCopy:
      'Jenseits der "Made in China"-Fertigwaren liegt eine reiche Landschaft von Premium-Lebensmitteln und Getränken. Von Spezialitätenkaffee bis zu alten Teetraditionen verbinden wir Sie direkt mit Produzenten.',
    keyRegions: [
      { name: 'Yunnan', description: 'Chinas Kaffeeursprung (95 % der Produktion), Kernland des Pu\'er-Tees, Wildpilz-Beschaffung.' },
      { name: 'Sichuan / Chongqing', description: 'Sichuan-Pfeffer, Chili-Produkte, Spezialsauce, Hotpot-Grundlagen, eingelegtes Gemüse.' },
      { name: 'Ningxia', description: 'Goji-Beeren-Hauptstadt, aufstrebende Weinregion, Premium-Lamm und landwirtschaftliche Produkte.' },
    ],
    whatWeAudit: [
      'Farm- und Plantagenbesuche für direkte Produzentenbeziehungen',
      'Hygiene- und Lebensmittelsicherheitsstandards von Verarbeitungseinrichtungen',
      'Überprüfung von Bio- und Nachhaltigkeitszertifizierungen',
      'Exportdokumentation und -Compliance (FDA, EU-Bio usw.)',
      'Produktqualitätsbewertung und Verkostungs-/Cupping-Sitzungen',
      'Verpackungs- und Haltbarkeitsbewertung',
    ],
    caseSummary:
      'Ein Spezialitätenkaffee-Röster aus Melbourne wollte Direkthandels-Yunnan-Kaffee. Wir besuchten 8 Farmen in Baoshan und Pu\'er, ermöglichten Cupping-Sitzungen und verbanden sie mit einer Kooperative, die 84-Punkte-Spezialitätenkaffee zu 40 % unter dem Preis ihres vorherigen kolumbianischen Lieferanten produzierte.',
    seoKeywords: [
      'China Lebensmittel Produktbeschaffung',
      'Yunnan Kaffee Direkthandel',
      'Chinesischer Tee Import Lieferant',
      'China Bio-Lebensmittel Verifizierung',
    ],
    relatedServices: ['yunnan-coffee-tea-origin', 'sichuan-spice-cuisine-route', 'ningxia-goji-wine-route'],
  },
  {
    slug: 'monopoly-towns',
    name: INDUSTRY_META['monopoly-towns'].name,
    description: 'Chinas hyperspezialisierte Fertigungsstädte dominieren die globale Produktion bestimmter Güter. Wir navigieren diese versteckten Lieferketten.',
    color: INDUSTRY_META['monopoly-towns'].color,
    heroCopy:
      'Irgendwo in China produziert eine einzelne Stadt wahrscheinlich mehr als 50 % der weltweiten Versorgung mit Ihrem Produkt. Diese Monopol-Fabrikstädte bieten unschlagbare Expertise und Preisgestaltung — wenn Sie wissen, wo Sie suchen müssen.',
    keyRegions: [
      { name: 'Zhuji, Zhejiang', description: 'Produziert 1/3 der Weltsocken. Auch ein bedeutendes Perlenverarbeitungszentrum.' },
      { name: 'Dongyang, Zhejiang', description: 'Über 80 % der globalen Mahjong-Steine und ein dominanter Anteil an Magnetspielzeug.' },
      { name: 'Yongkang, Zhejiang', description: 'Hardware-Hauptstadt — Elektrowerkzeuge, Türbeschläge, Küchenwaren und Thermoskannen.' },
      { name: 'Taizhou, Zhejiang', description: 'Hauptstadt des Formenbaus und Kunststoffspritzgusses. Auch bedeutender Autoteile-Cluster.' },
    ],
    whatWeAudit: [
      'Spezialisierungstiefe und Fertigungsexpertise',
      'Produktionseffizienz im Vergleich zu generalistischen Fabriken',
      'Rohstoffbeschaffung und Kostenstruktur',
      'Qualitätskonsistenz im großen Maßstab',
      'Exporterfahrung und internationale Compliance',
      'Eigentümer-geführte vs. management-geführte Fabriken',
    ],
    caseSummary:
      'Eine europäische Küchenwarenmarke wollte Edelstahl-Thermoskannen. Allgemeine Fabriken boten $4,20/Stück. Wir brachten sie nach Yongkang, der Thermoskannen-Hauptstadt, wo spezialisierte Fabriken mit automatisierten Produktionslinien $2,80/Stück mit besserer Qualität anboten — eine Kostenersparnis von 33 % bei ihrer 50.000-Einheiten-Bestellung.',
    seoKeywords: [
      'China spezialisierte Fabrikstädte',
      'China Fertigungscluster Leitfaden',
      'Zhuji Sockenfabrik Beschaffung',
      'Yongkang Hardware Hersteller',
    ],
    relatedServices: ['monopoly-factory-towns-explorer'],
  },
  {
    slug: 'canton-fair',
    name: INDUSTRY_META['canton-fair'].name,
    description: 'Maximieren Sie Ihren Canton Fair-ROI mit vorgeprüften Ausstellerlisten, geplanten Standterminen und Fabrikbesuchskoordination.',
    color: INDUSTRY_META['canton-fair'].color,
    heroCopy:
      'Die Canton Fair ist die weltweit größte Handelsmesse mit über 25.000 Ausstellern auf 1,18 Millionen Quadratmetern. Die meisten Besucher verschwenden 60 % ihrer Zeit in den falschen Hallen. Wir beheben das.',
    keyRegions: [
      { name: 'Phase 1 (15.-19. April/Okt)', description: 'Elektronik, elektrische Haushaltsgeräte, Maschinen, Hardware, New Energy.' },
      { name: 'Phase 2 (23.-27. April/Okt)', description: 'Konsumgüter, Geschenke, Wohnaccessoires, Baumaterialien.' },
      { name: 'Phase 3 (31. Okt-4. Nov)', description: 'Textilien, Bekleidung, Schuhe, Bürobedarf, Koffer und Taschen, Lebensmittel.' },
    ],
    whatWeAudit: [
      'Vorab-Hintergrundprüfungen von Ausstellern',
      'Standbasierte Lieferantenfähigkeitsbewertung',
      'Überprüfung der Fabrikverbindung von Ausstellern',
      'Echtzeit-Dokumentation von Preisverhandlungen',
      'Koordination von Fabrikbesuchen nach der Messe',
      'Lieferantenvergleich und Kurzlisten-Erstellung',
    ],
    caseSummary:
      'Ein kanadischer Importeur besuchte die Canton Fair 2025 zum ersten Mal mit unserem Navigator-Service. Wir prüften über 300 Aussteller vorab, planten 45 Standtermine über 5 Tage und arrangierten Fabrikbesuche bei den 6 besten Kandidaten. Sie platzierten Bestellungen bei 3 neuen Lieferanten und sparten geschätzt 4 Tage ungeführten Hallenwanderns.',
    seoKeywords: [
      'Canton Fair Beschaffungsleitfaden 2026',
      'Canton Fair Agent Service',
      'Guangzhou Handelsmesse Hilfe',
      'China Handelsmesse Lieferantenverifizierung',
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
