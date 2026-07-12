import type { Service } from '@/types';

/* ------------------------------------------------------------------ */
/*  Gemeinsame Leistungsumfänge nach Tier (als Basis, unten pro       */
/*  Service individuell angepasst)                                     */
/* ------------------------------------------------------------------ */

const LITE_COMMON = [
  'Vorab-Kurzliste der Fabriken (5–8 geprüfte Lieferanten)',
  'Zweisprachiger Dolmetscher + Privatwagen + Supply-Chain-Koordinator + Plattform-Supervisor',
  'Geführte Fabrikbesichtigungen mit Einführung durch das Management',
  'Flughafentransfer (Abholung & Rückfahrt)',
  '10-seitige Reisezusammenfassung mit Fabrikprofilen & Fotos',
  '14 Tage Nachbetreuung per WeChat / E-Mail',
];

const STANDARD_COMMON = [
  'Tiefgehende Lieferantenprüfung (50+ Fabriken vor der Reise geprüft)',
  'Zweisprachiger Dolmetscher + Privatwagen + Supply-Chain-Koordinator + Plattform-Supervisor',
  'Vor-Ort-Fabrikaudits bei 5–8 Einrichtungen — Fotos, Videos, QS-Dokumentation',
  'Abschiedsessen mit Koordinator & Supervisor',
  'Flughafentransfer (Abholung & Rückfahrt)',
  '30–40-seitiger Due-Diligence-Bericht — Lieferantenbewertungsmatrix, Preisanalyse, Qualitätsbewertung',
  '30-tägige dedizierte WeChat-Gruppe — Unterstützung bei Verhandlung & Vertragsprüfung',
];

const PREMIUM_COMMON_WITH_WELCOME = [
  'Elite-Lieferantenprüfung (80–120 Fabriken, Bonitäts- & Rechtsstreitprüfungen)',
  'Vollständiges Team + Spezialberater der Branche',
  'Vor-Ort-Audits bei 8–12 Einrichtungen — Bewertung der finanziellen Lage & Kapazität',
  'Begrüßungsessen + exekutives Abschiedsessen mit Fabrikbesitzern',
  'Flughafentransfer + Geschäftsfahrzeug für die gesamte Reiseroute',
  '50–60-seitiger Tiefenbericht — Kostenaufschlüsselung, Risikokarte, Strategie',
  '60 Tage Premium-Support — Direktzugang zum Supply-Chain-Leiter',
  'Kostenlose Musterkonsolidierung & Versand (erste 5 kg)',
];

const PREMIUM_COMMON_NO_WELCOME = [
  'Elite-Lieferantenprüfung (80–120 Fabriken, Bonitäts- & Rechtsstreitprüfungen)',
  'Vollständiges Team + Spezialberater der Branche',
  'Vor-Ort-Audits bei 8–12 Einrichtungen — Bewertung der finanziellen Lage & Kapazität',
  'Exekutives Abschiedsessen mit Fabrikbesitzern',
  'Flughafentransfer + Geschäftsfahrzeug für die gesamte Reiseroute',
  '50–60-seitiger Tiefenbericht — Kostenaufschlüsselung, Risikokarte, Strategie',
  '60 Tage Premium-Support — Direktzugang zum Supply-Chain-Leiter',
  'Kostenlose Musterkonsolidierung & Versand (erste 5 kg)',
];

/* Hilfsfunktion – gibt die richtige Premium-Common-Liste je nach Tagen zurück */
function premiumCommon(days: number) {
  return days >= 5 ? PREMIUM_COMMON_WITH_WELCOME : PREMIUM_COMMON_NO_WELCOME;
}

/* ------------------------------------------------------------------ */
/*  Dienstleistungen                                                    */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  /* ================================================================ */
  /*  1. Shenzhen Electronics Sprint                                   */
  /* ================================================================ */
  {
    slug: 'shenzhen-electronics-sprint',
    title: 'Shenzhen Elektronik-Sprint',
    subtitle:
      '5-tägiger Tiefeneinblick in Huaqiangbei, OEM-Fabriken und das Shenzhen-Hardware-Ökosystem',
    category: 'Elektronik-Sprint',
    industry: 'electronics',
    location: 'Shenzhen, Guangdong',
    cities: ['Shenzhen'],
    durationDays: 5,
    durationLabel: '5 Tage',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$5,199',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('5–8 geprüfte Lieferanten', '5–8 Shenzhen-Elektronikfabriken')),
          'Kurze Huaqiangbei-Marktführung',
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Geführte Tour durch den Huaqiangbei-Komponentenmarkt mit Beschaffungsingenieur',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'PCB-Reverse-Engineering-Analysebericht',
        ],
      },
    ],
    description:
      'Besuchen Sie Shenzhener Elektronikfabriken und die Huaqiangbei-Märkte mit einem erfahrenen Beschaffungsagenten. Fabrikaudits, Lieferantenverifizierung und Komponentenbeschaffung in Chinas Hardware-Hauptstadt.',
    longDescription:
      'Shenzhen ist die Welthauptstadt der Elektronikfertigung. In 5 Tagen bringen wir Sie in die Fabriken, die alles von IoT-Geräten bis hin zu Unterhaltungselektronik herstellen. Sie durchstreifen die legendären Komponentenmärkte von Huaqiangbei, prüfen potenzielle Fertigungspartner und reisen mit einer verifizierten Kurzliste produktionsbereiter Lieferanten ab.',
    whatIsIncluded: [
      'Lieferanten-Kurzliste vor der Reise (10-15 Fabriken)',
      'Vor-Ort-Fabrikaudits in 5-8 Einrichtungen',
      'Geführte Tour durch den Huaqiangbei-Markt',
      'Mustersammlung und Versandkoordination',
      '30+ seitiger Due-Diligence-Bericht mit Fotos & Videos',
      'Unterstützung bei Lieferantenverhandlungen nach der Reise',
    ],
    process: [
      { step: 1, title: 'Anforderungsbriefing', description: 'Wir dokumentieren Ihre Produktspezifikationen, Stückliste, Zielpreis und Zertifizierungsanforderungen.' },
      { step: 2, title: 'Lieferantenprüfung', description: 'Unser Team prüft 50+ Fabriken anhand von Handelsdaten, Zertifizierungen und Musterbewertungen, um eine Kurzliste zu erstellen.' },
      { step: 3, title: 'Vor-Ort-Sprint', description: '5 Tage mit aufeinanderfolgenden Fabrikbesuchen, Produktionslinieninspektionen und Managementgesprächen.' },
      { step: 4, title: 'Huaqiangbei Tiefeneinblick', description: 'Komponentenbeschaffung auf dem weltweit größten Elektronikmarkt mit einem Beschaffungsingenieur.' },
      { step: 5, title: 'Bericht & Übergabe', description: 'Detaillierter Bericht mit Lieferantenranking, Preisanalyse und Unterstützung bei Vertragsverhandlungen.' },
    ],
    highlights: [
      'Zugang zu Fabriken, die auf Alibaba nicht auffindbar sind',
      'Kostenaufschlüsselung auf Komponentenebene',
      'Bewertung von PCB-Fertigungspartnern',
      'Zertifizierungskonformitätsprüfung (CE, FCC, RoHS)',
    ],
    suitableFor: [
      'Hardware-Startups mit Prototyping von Elektronik',
      'Importeure von Unterhaltungselektronik',
      'IoT- / Smart-Home-Marken',
      'Unternehmen, die PCB-Montagepartner suchen',
    ],
    notSuitableFor: [
      'Käufer von fertigen Produkten mit geringer Komplexität',
      'Personen, die einen einzelnen Fabrikbesuch suchen (dies ist ein Sprint)',
    ],
    seoKeywords: [
      'Shenzhen Elektronikfabrik Audit',
      'Huaqiangbei Beschaffungsleitfaden',
      'China Elektronikfertigung Besuch',
      'Shenzhen PCB-Lieferantenverifizierung',
      'Elektronik Beschaffungsagent China',
    ],
    faq: [
      { question: 'Muss ich Mandarin sprechen?', answer: 'Nein. Unser zweisprachiges Team übernimmt die gesamte Kommunikation. Wir dolmetschen während Besprechungen und übersetzen alle Dokumente.' },
      { question: 'Können Sie bei kleinen MOQs helfen?', answer: 'Ja. In Shenzhen gibt es viele Fabriken, die Kleinserienaufträge (100-500 Stück) annehmen. Wir suchen gezielt nach diesen für Startups.' },
      { question: 'Welche Zertifizierungen können Sie prüfen?', answer: 'Wir prüfen CE, FCC, RoHS, UL, ISO 9001 und andere gängige Zertifizierungen. Wir können auch fabrikspezifische Zertifizierungen vor Ort überprüfen.' },
    ],
    imageColor: 'bg-blue-900',
  },

  /* ================================================================ */
  /*  2. Shenzhen-Dongguan Hardware Audit                             */
  /* ================================================================ */
  {
    slug: 'shenzhen-dongguan-hardware-audit',
    title: 'Shenzhen-Dongguan Hardware-Audit',
    subtitle:
      '5-tägige Due Diligence für industrielle Hardware, Formenbau und Präzisionsfertigung',
    category: 'Hardware-Audit',
    industry: 'electronics',
    location: 'Shenzhen & Dongguan, Guangdong',
    cities: ['Shenzhen', 'Dongguan'],
    durationDays: 5,
    durationLabel: '5 Tage',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Tiefeneinblicke in Formenbau- und CNC-Bearbeitungseinrichtungen',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Formfließanalyse & Materialrückverfolgbarkeitsprüfung',
        ],
      },
    ],
    description:
      'Auditieren Sie Präzisionsfertigung, Formenbau und industrielle Hardware-Lieferanten in Shenzhen und Dongguan. Detaillierte Einrichtungsinspektionen und Finanzprüfungen.',
    longDescription:
      'Der Shenzhen-Dongguan-Korridor ist das Rückgrat der chinesischen Präzisionsfertigung. Von Spritzgussformen bis zur CNC-Bearbeitung deckt dieses 5-tägige Audit die industrielle Hardware-Lieferkette ab. Wir inspizieren Fabriken, überprüfen Qualitätssysteme und verifizieren die finanzielle Gesundheit, damit Sie mit Vertrauen beschaffen können.',
    whatIsIncluded: [
      'Fabrikprüfung vor der Reise (8-12 Einrichtungen)',
      'Vor-Ort-Inspektionen von Formenbaueinrichtungen',
      'CNC-Bearbeitungs- und Werkzeugbau-Audits',
      'Überprüfung des Qualitätsmanagementsystems',
      'Bewertung der finanziellen Gesundheit',
      '30+ seitiger Bericht mit Fabrikvergleichsmatrix',
    ],
    process: [
      { step: 1, title: 'Anforderungskartierung', description: 'Definieren Sie Materialspezifikationen, Toleranzen, Produktionsvolumen und Qualitätsstandards.' },
      { step: 2, title: 'Fabrikauswahl', description: 'Prüfen Sie 40+ Fabriken, erstellen Sie eine Kurzliste von 8-12 für Vor-Ort-Besuche basierend auf der Fähigkeitsübereinstimmung.' },
      { step: 3, title: 'Vor-Ort-Audits', description: 'Besuchen Sie Fabriken, inspizieren Sie Produktionslinien, überprüfen Sie QS-Prozesse und führen Sie Managementgespräche.' },
      { step: 4, title: 'Qualitäts-Tiefenprüfung', description: 'Überprüfen Sie Musterteile, Prüfberichte und Qualitätsmanagement-Dokumentation.' },
      { step: 5, title: 'Vergleichsbericht', description: 'Direkter Fabrikvergleich mit Preis-, Fähigkeits- und Risikobewertungen.' },
    ],
    highlights: [
      'Formfließanalyse-Überprüfung',
      'Materialrückverfolgbarkeitsprüfung',
      'Bewertung der Präzisionstoleranzfähigkeit',
      'Finanzstabilitätsprüfung der Lieferkette',
    ],
    suitableFor: [
      'Käufer von Industrieausrüstung',
      'Unternehmen, die Präzisionsmetall-/Kunststoffteile benötigen',
      'Importeure von Formen und Werkzeugen',
      'Beschaffung von Automobilteilen',
    ],
    notSuitableFor: [
      'Prototyping von Unterhaltungselektronik (siehe Elektronik-Sprint)',
      'Einfache Massenprodukte',
    ],
    seoKeywords: [
      'Dongguan Formenbau Audit',
      'China Präzisionsfertigung Inspektion',
      'Shenzhen Hardware-Lieferantenverifizierung',
      'CNC-Bearbeitung Fabrikaudit China',
    ],
    faq: [
      { question: 'Können Sie ISO-zertifizierte Fabriken auditieren?', answer: 'Ja. Wir überprüfen ISO 9001, IATF 16949 und andere Zertifizierungen bei unseren Vor-Ort-Besuchen.' },
      { question: 'Prüfen Sie Finanzunterlagen?', answer: 'Wir führen eine Finanzprüfung durch, einschließlich der Überprüfung des registrierten Kapitals, der Exportgeschichte und Bonitätsprüfungen über chinesische Unternehmensdatenbanken.' },
      { question: 'Welche Toleranzen können Sie prüfen?', answer: 'Wir können Einrichtungen bewerten, die Teile bis zu ±0,01mm Toleranz produzieren. Wir bringen Messwerkzeuge mit und überprüfen die QS-Ausrüstung der Fabrik.' },
    ],
    imageColor: 'bg-blue-800',
  },

  /* ================================================================ */
  /*  3. New Energy Supply Chain                                      */
  /* ================================================================ */
  {
    slug: 'new-energy-supply-chain',
    title: 'New-Energy-Lieferkette',
    subtitle:
      '3-tägiges Audit von Lithium-Batterie-, Solar- und EV-Komponentenlieferanten im Perlflussdelta',
    category: 'New Energy',
    industry: 'electronics',
    location: 'Shenzhen & Perlflussdelta',
    cities: ['Shenzhen', 'Dongguan', 'Huizhou'],
    durationDays: 3,
    durationLabel: '3 Tage',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Sicherheitszertifizierungsprüfung (UN38.3, IEC, UL)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Konfliktmineral-Compliance-Audit der Lieferkette',
        ],
      },
    ],
    description:
      'Spezialisierte Due Diligence für Lithium-Batterie-, Solarmodul- und EV-Komponentenlieferanten. Überprüfung von Sicherheitszertifizierungen und Bewertung der Produktionsfähigkeit.',
    longDescription:
      'China dominiert die globale New-Energy-Lieferkette. Von Lithium-Batteriezellen bis zu Solarmodulkomponenten auditieren wir die Fabriken, die die Energiewende antreiben. Unser 3-tägiges Intensivaudit deckt Sicherheitszertifizierungen, Produktionsfähigkeit und Lieferkettenrückverfolgbarkeit ab.',
    whatIsIncluded: [
      'Lieferantenvorprüfung (Batterie, Solar, EV-Komponenten)',
      'Vor-Ort-Fabrikinspektionen (3-5 Einrichtungen)',
      'Überprüfung von Sicherheitszertifizierungen (UN38.3, IEC, UL)',
      'Audit von Produktionslinie und Prüflabor',
      'Rückverfolgbarkeitsprüfung der Rohstoffe',
      '25+ seitiger Bericht mit Compliance-Bewertung',
    ],
    process: [
      { step: 1, title: 'Produktspezifikationsprüfung', description: 'Definieren Sie Chemie, Kapazität, Formfaktor und Zertifizierungsanforderungen.' },
      { step: 2, title: 'Lieferantenidentifikation', description: 'Identifizieren Sie qualifizierte Hersteller über Branchendatenbanken und Handelsnetzwerke.' },
      { step: 3, title: 'Fabrikaudits', description: '3-tägige Intensivbesuche zu Produktion, Prüfung und Sicherheitssystemen.' },
      { step: 4, title: 'Compliance-Überprüfung', description: 'Gegenprüfung von Zertifizierungen, Prüfberichten und behördlicher Konformität.' },
      { step: 5, title: 'Risikobewertungsbericht', description: 'Detaillierte Ergebnisse mit Empfehlungen zur Lieferantenbereitschaft und Compliance-Lücken.' },
    ],
    highlights: [
      'Sicherheitszertifizierungsprüfungen für Batteriezellen',
      'Konfliktmineral-Compliance der Lieferkette',
      'Bewertung der Fähigkeiten des Fabrikprüflabors',
      'Überprüfung der Exportlizenzierung',
    ],
    suitableFor: [
      'Käufer von EV-Komponenten',
      'Importeure von Solarenergieausrüstung',
      'Händler von Batterien und Powerbanks',
      'Unternehmen für Energiespeichersysteme',
    ],
    notSuitableFor: [
      'Kleinserien-Batterien für Unterhaltungselektronik',
      'Käufer nicht zertifizierter Produkte',
    ],
    seoKeywords: [
      'China Lithium-Batterie Lieferanten-Audit',
      'Solarmodul Fabrikinspektion China',
      'EV-Komponenten Lieferantenverifizierung',
      'China New Energy Lieferkette Due Diligence',
    ],
    faq: [
      { question: 'Prüfen Sie die UN38.3-Zertifizierung?', answer: 'Ja. Wir überprüfen UN38.3, MSDS, IEC 62133 und andere relevante Sicherheitszertifizierungen während unserer Fabrikaudits.' },
      { question: 'Können Sie auf Konfliktmineralien prüfen?', answer: 'Wir überprüfen die Dokumentation der Mineralienbeschaffung der Lieferanten und können Kobalt-, Lithium- und andere Materiallieferketten zurückverfolgen.' },
    ],
    imageColor: 'bg-green-800',
  },

  /* ================================================================ */
  /*  4. Yiwu Commodity Sprint                                        */
  /* ================================================================ */
  {
    slug: 'yiwu-commodity-sprint',
    title: 'Yiwu Waren-Sprint',
    subtitle:
      '3-tägige geführte Beschaffung im weltweit größten Großhandelsmarkt für Konsumgüter',
    category: 'Waren-Sprint',
    industry: 'consumer-goods',
    location: 'Yiwu, Zhejiang',
    cities: ['Yiwu'],
    durationDays: 3,
    durationLabel: '3 Tage',
    price: '$4,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$3,599',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('Fabrik', 'Marktstand')),
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$4,799',
        includes: [
          ...STANDARD_COMMON.map((s) => s.replace('Fabrik', 'Lieferant')),
          'Bezirksweise Marktroutenoptimierung',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$7,999',
        includes: [
          ...premiumCommon(3),
          'Verifizierungsbesuche bei Fabriken hinter den Marktständen',
        ],
      },
    ],
    description:
      'Navigieren Sie durch die Yiwu International Trade City mit einem zweisprachigen Beschaffungsführer. Finden Sie verifizierte Lieferanten, verhandeln Sie Preise und versenden Sie Muster vom weltweit größten Großhandelsmarkt.',
    longDescription:
      'Die Yiwu International Trade City erstreckt sich über 4 Millionen Quadratmeter mit über 75.000 Ständen. Sie ist überwältigend und von Zwischenhändlern durchsetzt. Wir filtern das Rauschen: Unser Führer bringt Sie zu verifizierten Herstellern (keine Wiederverkäufer), verhandelt MOQs und Preise und organisiert die Musterkonsolidierung und den Versand.',
    whatIsIncluded: [
      'Kategorierecherche und Standkartierung vor der Reise',
      '2 Tage geführte Marktnavigation',
      'Lieferantenverifizierung (Prüfung Fabrik vs. Wiederverkäufer)',
      'Unterstützung bei Preisverhandlungen',
      'Mustersammlung und Versandkoordination',
      'Kommunikationsunterstützung nach der Reise (14 Tage)',
    ],
    process: [
      { step: 1, title: 'Kategorierecherche', description: 'Wir ordnen Ihre Produktkategorien den richtigen Yiwu-Bezirken zu und identifizieren Herstellerstände.' },
      { step: 2, title: 'Tag 1: Zonennavigation', description: 'Geführter Rundgang durch relevante Marktzonen, Sammeln von Lieferantenkarten und Mustern.' },
      { step: 3, title: 'Tag 2: Vertiefung', description: 'Rückkehr zu den besten Kandidaten, Preisverhandlung, Überprüfung der Fabriknachweise und Musterbestellungen aufgeben.' },
      { step: 4, title: 'Tag 3: Konsolidierung', description: 'Musterqualitätsprüfung, Versandkoordination und Lieferanten-Zusammenfassungsdokumentation.' },
      { step: 5, title: 'Nachbetreuung', description: '14 Tage E-Mail-/WeChat-Nachverfolgung mit Lieferanten zur Bestätigung von Musterbestellungen und Produktionszeitplänen.' },
    ],
    highlights: [
      'Sparen Sie Tage ziellosen Umherwanderns',
      'Zugang zu Herstellerständen, nicht Wiederverkäufern',
      'Echtzeit-Preisverhandlung',
      'Musterkonsolidierung und Versand',
    ],
    suitableFor: [
      'Erstmalige Yiwu-Käufer',
      'Amazon FBA-Verkäufer, die Konsumgüter beschaffen',
      'Importeure von allgemeinen Handelswaren',
      'Käufer von Geschenk- und Werbeartikeln',
    ],
    notSuitableFor: [
      'Hochspezifizierte Elektronik (siehe Shenzhen Elektronik-Sprint)',
      'Maßgefertigte Produkte (siehe Guangzhou Multi-Kategorie)',
    ],
    seoKeywords: [
      'Yiwu Markt Beschaffungsleitfaden',
      'Yiwu Großhandelsmarkt Agent',
      'Yiwu International Trade City Führer',
      'China Großhandelsmarkt Beschaffungsreise',
    ],
    faq: [
      { question: 'Ist Yiwu nur für billige Produkte?', answer: 'Nein. Während Yiwu für preiswerte Waren bekannt ist, gibt es Qualitätsstufen. Wir helfen Ihnen, das richtige Qualitätsniveau für Ihren Markt zu finden.' },
      { question: 'Wie organisiere ich den Versand von Yiwu aus?', answer: 'Wir koordinieren mit Spediteuren, um Ihre Muster zu konsolidieren und per Luft- oder Seefracht zu versenden. Wir können auch vertrauenswürdige Logistikpartner empfehlen.' },
    ],
    imageColor: 'bg-teal-700',
  },

  /* ================================================================ */
  /*  5. Guangzhou Multi-Category Sourcing                            */
  /* ================================================================ */
  {
    slug: 'guangzhou-multi-category-sourcing',
    title: 'Guangzhou Multi-Kategorie-Beschaffung',
    subtitle:
      '3-tägige Multi-Kategorie-Beschaffung in Guangzhous Großhandelsmärkten und Fabriken',
    category: 'Multi-Kategorie',
    industry: 'consumer-goods',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 3,
    durationLabel: '3 Tage',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Multi-Markt-Koordination (Sanyuanli, Zhanxi Road, Liwan Plaza)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Maßgeschneiderte Fabrikbesuche für jede Produktkategorie',
        ],
      },
    ],
    description:
      'Beschaffen Sie über mehrere Produktkategorien in Guangzhou: Taschen, Uhren, Schmuck, Spielzeug, Geschenke und Modeaccessoires mit verifizierten Lieferantenverbindungen.',
    longDescription:
      'Guangzhou ist das Zentrum für vielfältige Konsumgüter — Taschen, Uhren, Schmuck, Spielzeug, Modeaccessoires und mehr. In 3 Tagen führen wir Sie durch die wichtigsten Großhandelsmärkte und verbinden Sie mit verifizierten Fabriken für jede Kategorie. Eine Reise, mehrere Produktlinien.',
    whatIsIncluded: [
      'Kategoriespezifische Marktkartierung',
      '2 Tage geführte Markt- und Fabrikbesuche',
      'Lieferantenverifizierung über Kategorien hinweg',
      'Preisvergleich und Verhandlungsunterstützung',
      'Musterbeschaffung und -konsolidierung',
      'Beschaffungsempfehlungen nach der Reise',
    ],
    process: [
      { step: 1, title: 'Kategoriekartierung', description: 'Ordnen Sie Ihre Zielproduktkategorien den spezialisierten Märkten Guangzhous zu.' },
      { step: 2, title: 'Marktbesuche', description: 'Besuchen Sie Großhandelsmärkte für jede Kategorie: Taschen (Sanyuanli), Uhren (Zhanxi Road), Schmuck (Liwan Plaza).' },
      { step: 3, title: 'Fabrikverbindungen', description: 'Organisieren Sie Besuche in nahegelegenen Fabriken für Kategorien, die kundenspezifische Fertigung erfordern.' },
      { step: 4, title: 'Vergleich & Auswahl', description: 'Vergleichen Sie Lieferanten über Kategorien hinweg, bewerten Sie Muster und dokumentieren Sie die Preisgestaltung.' },
      { step: 5, title: 'Übergabepaket', description: 'Organisiertes Lieferantenverzeichnis, Preiszusammenfassung und Versandkoordination.' },
    ],
    highlights: [
      'Multi-Kategorie-Effizienz in einer Reise',
      'Direkte Fabrikverbindungen für jede Kategorie',
      'Marktpreis-Benchmarking',
      'Musterkonsolidierungsservice',
    ],
    suitableFor: [
      'Multi-Produkt Amazon- / Shopify-Verkäufer',
      'Importeure von allgemeinen Handelswaren',
      'Geschenk- und Werbeartikelunternehmen',
      'Erstmalige China-Beschaffer mit vielfältigen Anforderungen',
    ],
    notSuitableFor: [
      'Beschaffung einzelner Kategorien mit hohem Volumen (siehe spezialisierte Sprints)',
      'Stark regulierte Produkte (Medizinprodukte usw.)',
    ],
    seoKeywords: [
      'Guangzhou Großhandelsmarkt Beschaffung',
      'China Multi-Kategorie Produktbeschaffung',
      'Guangzhou Fabrikagent',
      'China Großhandelsmarkt Leitfaden',
    ],
    faq: [
      { question: 'Kann ich Produkte aus verschiedenen Kategorien in einer Reise beschaffen?', answer: 'Absolut. Dieser Service ist genau dafür konzipiert. Wir ordnen Ihre Kategorien den spezialisierten Märkten Guangzhous zu und maximieren die Effizienz.' },
      { question: 'Wie viele Lieferanten werden wir besuchen?', answer: 'Typischerweise 15-25 Lieferanten über Ihre Zielkategorien hinweg in 2-3 Tagen, abhängig von der Entfernung zwischen den Märkten.' },
    ],
    imageColor: 'bg-red-800',
  },

  /* ================================================================ */
  /*  6. Guangzhou Apparel & Leather Sprint                           */
  /* ================================================================ */
  {
    slug: 'guangzhou-apparel-leather',
    title: 'Guangzhou Bekleidung & Leder Sprint',
    subtitle:
      '4-tägiger Tiefeneinblick in Guangzhous Bekleidungs-, Textil- und Lederwaren-Lieferkette',
    category: 'Bekleidungs-Sprint',
    industry: 'apparel-textile',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 4,
    durationLabel: '4 Tage',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Zhongda Stoffmarkt-Beschaffung + Mustersammlung',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Koordination der Musteranfertigung mit ausgewählten Fabriken',
        ],
      },
    ],
    description:
      'Beschaffen Sie Bekleidung, Textilien und Lederwaren von Guangzhous spezialisierten Großhandelsmärkten und Fabriken. Qualitätsprüfung und Lieferantenverifizierung inklusive.',
    longDescription:
      'Guangzhou ist Chinas Hauptstadt für Mode- und Textilhandel. Vom Sanyuanli-Leder bis zum Zhongda-Stoffmarkt führen wir Sie durch die komplette Bekleidungslieferkette. Inklusive Fabrikbesuchen, Stoffbeschaffung, Musteranfertigung und Qualitätsprüfung in jeder Phase.',
    whatIsIncluded: [
      'Vorab-Briefing zu Stoff und Stil',
      'Geführte Besuche von Stoffmärkten (Zhongda) und Lederbezirken (Sanyuanli)',
      'Bekleidungsfabrik-Audits (3-5 Einrichtungen)',
      'Koordination der Musteranfertigung',
      'Qualitätsprüfungs-Checkliste',
      'Lieferantenvergleichsbericht mit Preisgestaltung',
    ],
    process: [
      { step: 1, title: 'Design- & Stoffbriefing', description: 'Dokumentieren Sie Ihre Designs, Stoffanforderungen, Zielpreise und Qualitätsstandards.' },
      { step: 2, title: 'Stoffbeschaffung', description: 'Besuchen Sie den Zhongda-Stoffmarkt, um Materialien zu beschaffen und Stoffmuster zu sammeln.' },
      { step: 3, title: 'Fabrikbesuche', description: 'Auditieren Sie Bekleidungs- und Lederwarenfabriken auf Fähigkeit, Kapazität und Qualitätssysteme.' },
      { step: 4, title: 'Musterentwicklung', description: 'Koordinieren Sie die Musteranfertigung mit ausgewählten Fabriken, überprüfen Sie die Qualität und dokumentieren Sie Spezifikationen.' },
      { step: 5, title: 'Produktionsplanung', description: 'Finalisieren Sie die Fabrikauswahl, verhandeln Sie Produktionsbedingungen und legen Sie Qualitätskontrollpunkte fest.' },
    ],
    highlights: [
      'Direkter Zugang zu Chinas größtem Stoffmarkt',
      'Fabrikaudits für Bekleidungs- und Lederwerkstätten',
      'Musteranfertigung und Qualitätsprüfung',
      'MOQ-Verhandlung für kleine Marken',
    ],
    suitableFor: [
      'Modemarken, die neue Kollektionen einführen',
      'Lederwaren- und Taschendesigner',
      'Streetwear- und Bekleidungs-Startups',
      'Textilimporteure',
    ],
    notSuitableFor: [
      'Basisware mit extrem hohem Volumen (T-Shirts, Socken)',
      'Schuhe (separate Lieferkette)',
    ],
    seoKeywords: [
      'Guangzhou Bekleidungsfabrik Beschaffung',
      'China Bekleidungshersteller Audit',
      'Sanyuanli Ledermarkt Leitfaden',
      'China Mode-Lieferkette Besuch',
    ],
    faq: [
      { question: 'Können Sie bei Modemarken mit kleinen MOQs helfen?', answer: 'Ja. In Guangzhou gibt es viele Fabriken, die mit aufstrebenden Marken arbeiten. Typische MOQs beginnen bei 50-100 Stück pro Stil.' },
      { question: 'Beschaffen Sie Stoffe separat?', answer: 'Ja. Wir können Stoffe vom Zhongda-Markt beschaffen und Sie mit Stofflieferanten verbinden, auch wenn Sie anderswo fertigen lassen.' },
    ],
    imageColor: 'bg-red-700',
  },

  /* ================================================================ */
  /*  7. Textile Belt Deep Dive                                       */
  /* ================================================================ */
  {
    slug: 'textile-belt-deep-dive',
    title: 'Textilgürtel Tiefeneinblick',
    subtitle:
      '5-tägige umfassende Tour durch Chinas Textilfertigungskorridor: Keqiao, Shaoxing, Nantong',
    category: 'Textil-Tiefeneinblick',
    industry: 'apparel-textile',
    location: 'Zhejiang & Jiangsu',
    cities: ['Shaoxing', 'Keqiao', 'Nantong'],
    durationDays: 5,
    durationLabel: '5 Tage',
    price: '$6,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$4,999',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$6,799',
        includes: [
          ...STANDARD_COMMON,
          'Keqiao Stoffmarkt-Navigation + Mühlenaudits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$11,499',
        includes: [
          ...premiumCommon(5),
          'Koordination von externen Stofftests (Farbechtheit, Einlaufen, Zusammensetzung)',
        ],
      },
    ],
    description:
      'Bereisen Sie das Kernland der chinesischen Textilfertigung. Besuchen Sie Stoffmühlen, Färbereien und Bekleidungsfabriken in Keqiao, Shaoxing und Nantong.',
    longDescription:
      'Chinas Textilgürtel erstreckt sich von Zhejiang bis Jiangsu, Heimat der weltweit größten Konzentration von Stoffmühlen, Färbereien und Bekleidungsfabriken. Dieser 5-tägige Tiefeneinblick führt Sie in die Lieferkette — vom Garn bis zum fertigen Kleidungsstück — mit fachkundiger Führung an jeder Station.',
    whatIsIncluded: [
      'Kartierung der Textillieferkette',
      'Besuche von Stoffmühlen, Färbereien und Druckereieinrichtungen',
      'Bekleidungsfabrik-Audits (5-8 Einrichtungen)',
      'Stoffmustersammlung und Testkoordination',
      'Nachhaltigkeits- und Compliance-Bewertung',
      '40+ seitiger Bericht mit Lieferantenrankings',
    ],
    process: [
      { step: 1, title: 'Textil-Briefing', description: 'Definieren Sie Stoffarten, Gewichte, Ausrüstungen, Drucke und Nachhaltigkeitsanforderungen.' },
      { step: 2, title: 'Mühlenprüfung', description: 'Identifizieren und prüfen Sie Stoffmühlen und Färbereien, die Ihren Spezifikationen entsprechen.' },
      { step: 3, title: 'Vor-Ort-Besuche', description: '5 Tage Mühlen- und Fabrikbesuche entlang des Zhejiang-Jiangsu-Textilkorridors.' },
      { step: 4, title: 'Muster & Test', description: 'Sammeln Sie Stoffmuster, koordinieren Sie externe Tests (Farbechtheit, Einlaufen, Zusammensetzung).' },
      { step: 5, title: 'Lieferkettendesign', description: 'Kartieren Sie Ihre komplette Textillieferkette mit empfohlenen Partnern für jede Phase.' },
    ],
    highlights: [
      'Chinas größter Stoffgroßhandelsmarkt (Keqiao)',
      'Direkte Mühlenpreis-Benchmarks',
      'Umwelt-Compliance-Prüfungen von Färbereien',
      'Vollständige Kartierung der Textillieferkette',
    ],
    suitableFor: [
      'Modemarken, die die Produktion skalieren',
      'Heimtextil-Importeure',
      'Käufer von technischen Textilien',
      'Unternehmen, die nachhaltige Stoffbeschaffung benötigen',
    ],
    notSuitableFor: [
      'Kleinserien-Mode-Startups (siehe Guangzhou Bekleidung)',
      'Nicht-Textil-Produktkategorien',
    ],
    seoKeywords: [
      'China Textilfabrik Tour',
      'Keqiao Stoffmarkt Beschaffung',
      'China Textillieferkette Audit',
      'Shaoxing Stoffmühle Besuch',
    ],
    faq: [
      { question: 'Können Sie nachhaltige/biologische Zertifizierungen prüfen?', answer: 'Ja. Wir überprüfen GOTS, OEKO-TEX, BCI und andere Nachhaltigkeitszertifizierungen während der Fabrikbesuche.' },
      { question: 'Was ist die Mindestbestellmenge für Stoffe von chinesischen Mühlen?', answer: 'Typischerweise 500-1000 Meter pro Farbe/Design, aber dies variiert je nach Mühle. Wir können niedrigere MOQs für Bemusterungszwecke aushandeln.' },
    ],
    imageColor: 'bg-orange-800',
  },

  /* ================================================================ */
  /*  8. Foshan Furniture Sourcing                                    */
  /* ================================================================ */
  {
    slug: 'foshan-furniture-sourcing',
    title: 'Foshan Möbel-Beschaffung',
    subtitle:
      '4-tägige geführte Beschaffung in Chinas Möbelhauptstadt',
    category: 'Möbel-Sprint',
    industry: 'furniture',
    location: 'Foshan, Guangdong',
    cities: ['Foshan'],
    durationDays: 4,
    durationLabel: '4 Tage',
    price: '$5,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$4,299',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$5,799',
        includes: [
          ...STANDARD_COMMON,
          'Lecong Showroom-Navigation + Fabrikaudits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$9,799',
        includes: [
          ...premiumCommon(4),
          'Vorversand-Inspektion von Material- & Verarbeitungsqualität',
        ],
      },
    ],
    description:
      'Beschaffen Sie Möbel direkt von Fabriken in Foshan, dem weltweit größten Möbelfertigungszentrum. Qualitätsprüfung, Materialverifizierung und Logistikunterstützung.',
    longDescription:
      'Foshan produziert 70 % der chinesischen Möbelexporte. Von Massivholz bis modern minimalistisch bringen wir Sie in die Fabriken und Showrooms. Sie sehen Produktionslinien, inspizieren Materialien, testen die Verarbeitungsqualität und verhandeln direkt mit den Fabrikbesitzern.',
    whatIsIncluded: [
      'Vorab-Briefing zu Stil und Material',
      'Geführte Besuche in 8-15 Fabriken und Showrooms',
      'Material- und Verarbeitungsqualitätsprüfung',
      'Unterstützung bei Preisverhandlungen',
      'Logistik- und Versandkoordination',
      'Einrichtung von Qualitätskontrollpunkten',
    ],
    process: [
      { step: 1, title: 'Design-Briefing', description: 'Dokumentieren Sie Möbelstile, Materialien, Abmessungen, Zielpreise und Zielmarktanforderungen.' },
      { step: 2, title: 'Fabrikauswahl', description: 'Ordnen Sie Ihre Anforderungen spezialisierten Foshan-Fabriken zu (Massivholz, Platten, Polsterung, Metall).' },
      { step: 3, title: 'Showroom- & Fabrikbesuche', description: '4-tägige Intensivtour durch Fabriken und Showrooms in Lecong, Longjiang und Shunde.' },
      { step: 4, title: 'Qualitätsbewertung', description: 'Inspizieren Sie Konstruktionsmethoden, Materialqualität, Veredelungsstandards und Verpackung.' },
      { step: 5, title: 'Auftrag & QS-Einrichtung', description: 'Finalisieren Sie die Fabrikauswahl, verhandeln Sie Konditionen und legen Sie Qualitätskontrollpunkte fest.' },
    ],
    highlights: [
      'Zugang zu Fabriken hinter den Showrooms',
      'Materialauthentizitätsprüfung (Massivholz vs. Furnier)',
      'Möbelspezifische QS-Checkliste',
      'Option zur Container-Beladungsüberwachung',
    ],
    suitableFor: [
      'Möbeleinzelhändler und -großhändler',
      'Innenarchitekturbüros',
      'Hotel- und Gastronomiemöbelkäufer',
      'E-Commerce-Möbelverkäufer',
    ],
    notSuitableFor: [
      'Maßgefertigte Einzelmöbelstücke (kostenintensiv)',
      'Käufer, die nicht für Container-Volumenbestellungen bereit sind',
    ],
    seoKeywords: [
      'Foshan Möbelfabrik Tour',
      'China Möbelbeschaffung Leitfaden',
      'Foshan Möbelgroßhandelsmarkt',
      'China Möbelhersteller Audit',
    ],
    faq: [
      { question: 'Kann ich verschiedene Möbeltypen in einem Container mischen?', answer: 'Ja. Viele Foshan-Fabriken sind auf Mischcontainer-Bestellungen spezialisiert. Wir helfen bei der Koordination über mehrere Fabriken hinweg, um einen Container zu füllen.' },
      { question: 'Inspizieren Sie Möbel vor dem Versand?', answer: 'Wir bieten Vorversand-Inspektionen als Zusatzservice an. Dies beinhaltet die Prüfung auf Mängel, die Überprüfung der Mengen und die Überwachung der Container-Beladung.' },
    ],
    imageColor: 'bg-purple-800',
  },

  /* ================================================================ */
  /*  9. Yunnan Coffee & Tea Origin                                   */
  /* ================================================================ */
  {
    slug: 'yunnan-coffee-tea-origin',
    title: 'Yunnan Kaffee & Tee Ursprung',
    subtitle:
      '5-tägiger Ursprungsbesuch bei Yunnans Kaffeefarmen, Teeplantagen und Verarbeitungseinrichtungen',
    category: 'Food & Beverage Ursprung',
    industry: 'food-beverage',
    location: 'Provinz Yunnan',
    cities: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
    durationDays: 5,
    durationLabel: '5 Tage',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Cupping- & Verkostungssitzungen mit Produzenten',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$11,799',
        includes: [
          ...premiumCommon(5),
          'Q-Grader-zertifizierte Cupping-Sitzung + detaillierter Ursprungsbericht',
        ],
      },
    ],
    description:
      'Besuchen Sie Yunnans Kaffeefarmen und Teeplantagen. Treffen Sie Produzenten, inspizieren Sie Verarbeitungseinrichtungen und beschaffen Sie Spezialitätenkaffee und Pu\'er-Tee direkt am Ursprung.',
    longDescription:
      'Yunnan produziert 95 % des chinesischen Kaffees und ist die Geburtsstätte des Pu\'er-Tees. Diese 5-tägige Ursprungsreise führt Sie zu Kaffeefarmen in Baoshan und Teeplantagen in Pu\'er. Sie treffen Produzenten, verkosten Kaffees, probieren Tees und bauen direkte Beziehungen zu den Erzeugern auf.',
    whatIsIncluded: [
      'Ursprungsrecherche und Produzentenprüfung vor der Reise',
      'Besuche von Kaffeefarmen und Nass-/Trockenmühlen',
      'Teeplantagen- und Verarbeitungseinrichtungs-Touren',
      'Cupping- und Verkostungssitzungen',
      'Mustersammlung und Prüfung der Exportdokumentation',
      'Vermittlung von Produzentenbeziehungen',
    ],
    process: [
      { step: 1, title: 'Produkt-Briefing', description: 'Definieren Sie Kaffeegrad (Spezialität/Handelsware), Teetyp, Volumen und Qualitätsparameter.' },
      { step: 2, title: 'Produzentenprüfung', description: 'Recherchieren und prüfen Sie Kaffeefarmen, Kooperativen und Teeproduzenten.' },
      { step: 3, title: 'Ursprungsbesuch', description: '5-tägige Tour durch Farmen, Mühlen und Verarbeitungseinrichtungen in ganz Yunnan.' },
      { step: 4, title: 'Qualitätsbewertung', description: 'Cupping, Verkostung, Bewertung und Qualitätsdokumentation.' },
      { step: 5, title: 'Direkthandel-Einrichtung', description: 'Vermittlung direkter Produzentenbeziehungen, Musterlieferung und Einleitung des Exportprozesses.' },
    ],
    highlights: [
      'Direkte Produzentenbeziehungen (keine Zwischenhändler)',
      'Spezialitätenkaffee-Cupping-Sitzungen',
      'Besuche von Pu\'er-Tee-Reifungseinrichtungen',
      'Anleitung zur Exportdokumentation',
    ],
    suitableFor: [
      'Spezialitätenkaffee-Röster',
      'Tee-Importeure und -Händler',
      'Kaffeeketten, die Direkthandel suchen',
      'Food- und Getränkemarken',
    ],
    notSuitableFor: [
      'Händler von Standardkaffee (dies ist spezialitätenorientiert)',
      'Hersteller von Instantkaffee oder Teebeuteln',
    ],
    seoKeywords: [
      'Yunnan Kaffeefarm Besuch',
      'China Kaffee Beschaffungsreise',
      'Pu\'er Tee Ursprungstour',
      'China Spezialitätenkaffee Lieferant',
    ],
    faq: [
      { question: 'Kann ich grüne Kaffeebohnen direkt von Farmen kaufen?', answer: 'Ja. Wir vermitteln Direkthandelsbeziehungen. Yunnan-Kaffeefarmen verkaufen grüne Bohnen typischerweise in 60-kg-Säcken, mit Mindestbestellungen von 1-5 Säcken pro Lot.' },
      { question: 'Welche Teesorten kann ich in Yunnan beschaffen?', answer: 'Pu\'er (roh und gereift), Yunnan Schwarztee (Dianhong), Grüntee und Weißtee. Wir besuchen Produzenten für jede Sorte basierend auf Ihren Anforderungen.' },
    ],
    imageColor: 'bg-orange-700',
  },

  /* ================================================================ */
  /*  10. Sichuan Spice & Cuisine Route                               */
  /* ================================================================ */
  {
    slug: 'sichuan-spice-cuisine-route',
    title: 'Sichuan Gewürz- & Küchenroute',
    subtitle:
      '4-tägige Beschaffungsreise für Sichuan-Pfeffer, Chili, Spezialsauce und Lebensmittelzutaten',
    category: 'Food & Beverage Ursprung',
    industry: 'food-beverage',
    location: 'Sichuan & Chongqing',
    cities: ['Chengdu', 'Chongqing'],
    durationDays: 4,
    durationLabel: '4 Tage',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Gewürzmarkt-Tour + Besuche von Produktionseinrichtungen',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Maßgeschneiderte Rezeptentwicklungssitzung mit lokalen Köchen',
        ],
      },
    ],
    description:
      'Beschaffen Sie authentischen Sichuan-Pfeffer, Chili-Produkte, Spezialsauce und chinesische Lebensmittelzutaten direkt von Produzenten in Sichuan und Chongqing.',
    longDescription:
      'Die Sichuan-Küche erobert die Welt im Sturm. Von erstklassigen Sichuan-Pfefferkörnern bis zu fermentierten Bohnenpasten und Hotpot-Grundlagen verbindet Sie diese 4-tägige Reise direkt mit Produzenten. Besuchen Sie Gewürzmärkte, besichtigen Sie Produktionseinrichtungen und kosten Sie sich durch Chinas geschmacksintensivste Provinz.',
    whatIsIncluded: [
      'Produktkategorie-Recherche und Produzentenkartierung',
      'Besuche von Gewürzgroßhandelsmärkten und Produzenten',
      'Saueen- und Würzmittelfabrik-Touren',
      'Zutatenverkostung und Qualitätsbewertung',
      'Export-Compliance- und Dokumentationsprüfung',
      'Produzenten-Kontaktverzeichnis und Preiszusammenfassung',
    ],
    process: [
      { step: 1, title: 'Produktliste', description: 'Definieren Sie Zielprodukte: Pfeffersorten, Chili-Typen, Saten-Kategorien und Mengenanforderungen.' },
      { step: 2, title: 'Produzentenrecherche', description: 'Identifizieren Sie Qualitätsproduzenten für jede Kategorie über Handelsnetzwerke und Marktforschung.' },
      { step: 3, title: 'Markt- & Fabrikbesuche', description: '4-tägige Tour durch Chengdus Gewürzmärkte und Chongqings Lebensmittelverarbeitungseinrichtungen.' },
      { step: 4, title: 'Qualität & Compliance', description: 'Geschmackstests, Qualitätsbewertung und Überprüfung der Exportdokumentation.' },
      { step: 5, title: 'Beschaffungsübergabe', description: 'Organisiertes Lieferantenverzeichnis mit Preisen, MOQs und Exportbereitschaftsbewertung.' },
    ],
    highlights: [
      'Direkter Zugang zu Sichuan-Pfeffer-Produzenten',
      'Fabrikbesichtigungen für abgepackte Saten und Würzmittel',
      'Qualitätsbewertungsschulung (Pfeffersorten, Chili-Schärfegrade)',
      'Anleitung zur Export-Lebensmittelsicherheitskonformität',
    ],
    suitableFor: [
      'Asiatische Lebensmittelimporteure',
      'Restaurant-Lieferketten',
      'Hot-Sauce- und Würzmittelmarken',
      'Spezialitätenlebensmittelhändler',
    ],
    notSuitableFor: [
      'Frischwarenimporteure (separate Kühlkette)',
      'Nicht-Lebensmittel-Produktkategorien',
    ],
    seoKeywords: [
      'Sichuan Pfeffer Beschaffung China',
      'Chinesischer Gewürzlieferant Besuch',
      'Chengdu Lebensmittelzutaten Tour',
      'China Spezialitätenlebensmittel Import',
    ],
    faq: [
      { question: 'Können Sie bei FDA/USDA-Exportkonformität helfen?', answer: 'Wir prüfen die Exportdokumentation der Lieferanten und können Sie mit externen Laboren für Produkttests und FDA-Registrierungsunterstützung verbinden.' },
      { question: 'Wie lange ist Sichuan-Pfeffer haltbar?', answer: 'Premium Sichuan-Pfeffer behält seine Wirkkraft 12-18 Monate bei richtiger Lagerung. Wir helfen Ihnen, Produzenten zu identifizieren, die Stickstoffspül-Verpackungen für verlängerte Haltbarkeit verwenden.' },
    ],
    imageColor: 'bg-red-800',
  },

  /* ================================================================ */
  /*  11. Ningxia Goji & Wine Route                                   */
  /* ================================================================ */
  {
    slug: 'ningxia-goji-wine-route',
    title: 'Ningxia Goji & Wein Route',
    subtitle:
      '3-tägiger Ursprungsbesuch bei Ningxias Goji-Beeren-Farmen und der aufstrebenden Weinregion',
    category: 'Food & Beverage Ursprung',
    industry: 'food-beverage',
    location: 'Provinz Ningxia',
    cities: ['Yinchuan', 'Zhongwei'],
    durationDays: 3,
    durationLabel: '3 Tage',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Weingut-Verkostungen + Goji-Farm-Qualitätsaudits',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Prüfung der Weinimport-Dokumentation & Etiketten-Compliance',
        ],
      },
    ],
    description:
      'Besuchen Sie Ningxias Goji-Beeren-Farmen, Verarbeitungseinrichtungen und preisgekrönte Weingüter. Beschaffen Sie Premium-Goji-Produkte und chinesische Weine direkt am Ursprung.',
    longDescription:
      'Ningxia ist Chinas Goji-Beeren-Hauptstadt und seine aufregendste Weinregion. In 3 Tagen besuchen Sie biologische Goji-Farmen, besichtigen Verarbeitungseinrichtungen und verkosten Weine auf preisgekrönten Weingütern. Bauen Sie direkte Beziehungen zu Produzenten in dieser schnell wachsenden Agrarregion auf.',
    whatIsIncluded: [
      'Goji-Beeren-Farmbesuche und Überprüfung der Bio-Zertifizierung',
      'Besichtigungen von Verarbeitungs- und Verpackungseinrichtungen',
      'Weingutbesuche und Verkostungen',
      'Mustersammlung und Qualitätstest-Koordination',
      'Anleitung zur Exportdokumentation',
      'Vermittlung von Produzentenbeziehungen',
    ],
    process: [
      { step: 1, title: 'Produktspezifikation', description: 'Definieren Sie Goji-Sorten (Bio, konventionell), Weintypen, Volumen und Zertifizierungsanforderungen.' },
      { step: 2, title: 'Produzentenidentifikation', description: 'Recherchieren und prüfen Sie Goji-Farmen, Verarbeitungseinrichtungen und Weingüter.' },
      { step: 3, title: 'Farm- & Weingutbesuche', description: '3-tägige Tour durch Goji-Farmen, Verarbeitungsanlagen und Weinberge.' },
      { step: 4, title: 'Qualitätsbewertung', description: 'Produktverkostung, Zertifizierungsprüfung und Qualitätsbewertung.' },
      { step: 5, title: 'Beschaffungseinrichtung', description: 'Vermittlung direkter Beziehungen, Musterlieferungen und Exportprozess.' },
    ],
    highlights: [
      'Besuche biologischer Goji-Beeren-Farmen',
      'Weinverkostung in Chinas besten Weingütern',
      'Qualitätsaudits von Verarbeitungseinrichtungen',
      'Exportfähige Produzentenverbindungen',
    ],
    suitableFor: [
      'Gesundheits- und Superfood-Marken',
      'Weinimporteure, die chinesische Weine erkunden',
      'Bio-Produkt-Händler',
      'Nutrazeutika-Unternehmen',
    ],
    notSuitableFor: [
      'Massenmarkt-Goji-Händler (dies ist premium-orientiert)',
      'Nicht-Lebensmittel-Produktkategorien',
    ],
    seoKeywords: [
      'Ningxia Goji-Beeren Lieferant',
      'China Bio-Goji-Farm Besuch',
      'Ningxia Weinregion Tour',
      'Chinesischer Weinimport Beschaffung',
    ],
    faq: [
      { question: 'Können Sie Bio-Zertifizierungen überprüfen?', answer: 'Ja. Wir überprüfen China Organic, EU Organic und USDA Organic Zertifizierungen während unserer Farmbesuche.' },
      { question: 'Was ist die Mindestbestellmenge für Ningxia-Wein?', answer: 'Die meisten Weingüter können Bestellungen ab 100 Kisten aufnehmen. Wir können kleinere Probebestellungen für Markttests aushandeln.' },
    ],
    imageColor: 'bg-red-900',
  },

  /* ================================================================ */
  /*  12. Monopoly Factory Towns Explorer                             */
  /* ================================================================ */
  {
    slug: 'monopoly-factory-towns-explorer',
    title: 'Monopol-Fabrikstädte-Explorer',
    subtitle:
      '6-tägige maßgeschneiderte Route durch Chinas hyperspezialisierte Fertigungsstädte',
    category: 'Fabrikstädte',
    industry: 'monopoly-towns',
    location: 'Zhejiang & Jiangsu',
    cities: ['Zhuji', 'Dongyang', 'Yongkang', 'Taizhou'],
    durationDays: 6,
    durationLabel: '6 Tage',
    price: '$7,699',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$5,799',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$7,699',
        includes: [
          ...STANDARD_COMMON,
          '4–5 spezialisierte Fabrikstadt-Besuche mit optimierter Route',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$12,999',
        includes: [
          ...premiumCommon(6),
          'Maßgeschneiderte Stadtauswahl + exekutive Abendessen mit Fabrikbesitzern an jedem Halt',
        ],
      },
    ],
    description:
      'Erkunden Sie Chinas Monopol-Fabrikstädte: Zhuji (Socken), Dongyang (Mahjong/Magnete), Yongkang (Hardware), Taizhou (Formen). Eine Reise, mehrere Nischenkategorien.',
    longDescription:
      'Chinas Monopol-Fabrikstädte sind ein Beschaffungsgeheimnis. Ganze Städte spezialisieren sich auf ein Produkt: Zhuji produziert 1/3 der Weltsocken, Yongkang dominiert Hardware. Diese 6-tägige Entdeckertour führt Sie zu 4-5 spezialisierten Städten, jede ein Tiefeneinblick in eine Nischen-Lieferkette.',
    whatIsIncluded: [
      'Maßgeschneiderte Routenplanung basierend auf Ihren Produktinteressen',
      'Fabrikbesuche in 4-5 spezialisierten Fertigungsstädten',
      'Lieferantenverifizierung und Fähigkeitsbewertung',
      'Preis-Benchmarking über Hersteller hinweg',
      'Mustersammlung und Logistikkoordination',
      'Umfassender Bericht mit Lieferantenverzeichnis',
    ],
    process: [
      { step: 1, title: 'Produktauswahl', description: 'Wählen Sie 4-5 Produktkategorien aus unserer Fabrikstadt-Karte und definieren Sie Spezifikationen.' },
      { step: 2, title: 'Routenplanung', description: 'Entwerfen Sie eine effiziente 6-Tages-Route, die Ihre ausgewählten Städte verbindet, mit vorgeprüften Fabrik-Kurzlisten.' },
      { step: 3, title: 'Stadtbesuche', description: 'Besuchen Sie 2-3 Fabriken pro Stadt, treffen Sie Besitzer und inspizieren Sie Produktionslinien.' },
      { step: 4, title: 'Vergleichsanalyse', description: 'Stadtübergreifender Vergleich von Preis, Qualität und Fähigkeit für jede Produktkategorie.' },
      { step: 5, title: 'Konsolidierter Bericht', description: 'Einzelner Bericht über alle Städte mit Lieferantenrankings und Empfehlungen.' },
    ],
    highlights: [
      'Zugang zu Fabriken mit 70%+ Weltmarktanteil',
      'Tiefe Spezialisierung = bessere Qualität und Preisgestaltung',
      'Multi-Kategorie-Effizienz in einer erweiterten Reise',
      'Vorstellung durch Fabrikbesitzer (nicht Vertriebsmitarbeiter)',
    ],
    suitableFor: [
      'Erfahrene Importeure, die Produktlinien erweitern',
      'Marken, die spezialisierte Hersteller suchen',
      'Produktentwickler, die Fertigungsmöglichkeiten erkunden',
      'Beschaffungsagenten, die Fabriknetzwerke aufbauen',
    ],
    notSuitableFor: [
      'Erstmalige China-Beschaffer (beginnen Sie mit einem Einzelkategorie-Sprint)',
      'Käufer mit nur einer Produktkategorie',
    ],
    seoKeywords: [
      'China Monopol-Fabrikstädte',
      'Spezialisierte Fertigung China Tour',
      'Zhuji Sockenfabrik Besuch',
      'Yongkang Hardware Lieferant',
    ],
    faq: [
      { question: 'Wie spezialisiert sind diese Städte wirklich?', answer: 'Dongyang produziert 80%+ der weltweiten Mahjong-Steine und Magnetspielzeuge. Zhuji produziert 1/3 der Weltsocken. Die Spezialisierung ist real und schafft unschlagbare Preise.' },
      { question: 'Kann ich anpassen, welche Städte wir besuchen?', answer: 'Absolut. Wir haben eine Karte mit 50+ Fabrikstädten. Sie wählen die Kategorien, die Sie interessieren, und wir entwerfen die optimale Route.' },
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
      '5- oder 10-tägiges geführtes Canton Fair-Erlebnis mit Lieferantenverifizierung und Fabrikbesuchen',
    category: 'Messe-Navigator',
    industry: 'canton-fair',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 5,
    durationLabel: '5 oder 10 Tage',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Basis-Zugang mit Führung',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Komplettes Fabrikaudit',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Vorab-Aussteller-Kurzliste + optimierter Standbesuchsplan',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Rundum-Sorglos-Concierge',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Nach der Messe: Fabrikbesuche bei den Top-5-Kandidaten',
          '10-Tages-Option verfügbar (beide Messephasen + erweiterte Fabrikbesichtigungen)',
        ],
      },
    ],
    description:
      'Navigieren Sie die Canton Fair mit einem erfahrenen Führer. Vorab-Prüfung von Ausstellern, Planung von Standbesuchen und Organisation von Fabrikbesichtigungen für verifizierte Lieferanten.',
    longDescription:
      'Die Canton Fair ist die weltweit größte Handelsmesse mit über 25.000 Ausstellern. Sie ist überwältigend. Unser Navigator-Service prüft Aussteller basierend auf Ihren Anforderungen vorab, plant Standtermine und arrangiert Fabrikbesuche bei den besten Kandidaten während der Messe. Maximieren Sie Ihre Reiseeffizienz.',
    whatIsIncluded: [
      'Vorab-Ausstellerrecherche und Kurzliste',
      'Täglicher Standbesuchsplan (nach Halle optimiert)',
      'Zweisprachiger Führer für alle Besprechungen',
      'Lieferanten-Hintergrundprüfungen (Gewerbeschein, Exportgeschichte)',
      'Koordination von Fabrikbesuchen nach der Messe',
      'Aussteller-Vergleichstabelle',
    ],
    process: [
      { step: 1, title: 'Vorab-Recherche', description: 'Analysieren Sie Ausstellerlisten, identifizieren Sie Top-Kandidaten und führen Sie Hintergrundprüfungen durch.' },
      { step: 2, title: 'Messe-Zeitplan', description: 'Entwerfen Sie einen optimierten Standbesuchsplan nach Halle, Phase und Produktkategorie.' },
      { step: 3, title: 'Geführte Messetage', description: 'Ein zweisprachiger Führer begleitet Sie zu Standterminen, übersetzt und dokumentiert.' },
      { step: 4, title: 'Lieferantenprüfung', description: 'Schnelle Hintergrundprüfungen und Vor-Ort-Qualitätsbewertung der Top-Kandidaten.' },
      { step: 5, title: 'Fabrik-Nachbereitung', description: 'Organisieren Sie Fabrikbesuche bei verifizierten Lieferanten nach der Messe.' },
    ],
    highlights: [
      'Sparen Sie Tage ziellosen Hallenwanderns',
      'Vorgeprüfte Aussteller-Kurzliste',
      'Echtzeit-Preisverhandlung auf Mandarin',
      'Fabrikbesuchskoordination während oder nach der Messe',
    ],
    suitableFor: [
      'Erstmalige Canton Fair-Besucher',
      'Käufer mit breiten Produktkategorien',
      'Importeure, die jährlich neue Lieferanten suchen',
      'Unternehmen, die die China-Beschaffungsstrategie bewerten',
    ],
    notSuitableFor: [
      'Käufer mit einem einzelnen, bereits geprüften Lieferanten (leichtere Unterstützung verfügbar)',
      'Personen, die nur zur Marktforschung teilnehmen (keine Beschaffung)',
    ],
    seoKeywords: [
      'Canton Fair Beschaffungsleitfaden',
      'Canton Fair Agent',
      'Guangzhou Handelsmesse Navigator',
      'China Handelsmesse Lieferantenverifizierung',
    ],
    faq: [
      { question: 'Wann findet die Canton Fair statt?', answer: 'Die Canton Fair findet zweimal jährlich statt: Frühjahr (15. April – 5. Mai) und Herbst (15. Oktober – 4. November). Jede Messe hat drei Phasen, die verschiedene Produktkategorien abdecken.' },
      { question: 'Können Sie mir bei meinem Canton Fair-Ausweis helfen?', answer: 'Ja. Wir können Sie durch den Registrierungsprozess führen und bei Bedarf mit dem Einladungsschreiben helfen.' },
      { question: 'Was, wenn ich nicht teilnehmen kann? Können Sie mich vertreten?', answer: 'Ja, wir bieten einen Fernvertretungsservice an, bei dem wir in Ihrem Namen teilnehmen, Ihre Zielstände besuchen, Informationen sammeln und Bericht erstatten.' },
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
