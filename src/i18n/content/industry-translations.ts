/**
 * Industry content translations.
 */
import type { Locale } from '../types';
import type { IndustryPage } from '@/types';
import { industries as baseIndustries } from '@/data/industries';

export interface IndustryTranslationOverlay {
  name?: string;
  description?: string;
  heroCopy?: string;
  keyRegions?: { name: string; description: string }[];
  whatWeAudit?: string[];
  caseSummary?: string;
  seoKeywords?: string[];
}

type TranslationsMap = Record<string, IndustryTranslationOverlay>;
type LocaleTranslations = Partial<Record<Locale, TranslationsMap>>;

const translations: LocaleTranslations = {
  fr: {
    "electronics": {
      "name": "Électronique",
      "description": "La Chine est l'usine électronique du monde. Nous auditions les fournisseurs de PCB, CMS, assemblage et composants de Shenzhen à Dongguan.",
      "heroCopy": "De Huaqiangbei à Shenzhen à la ceinture de fabrication de précision de Dongguan, la chaîne d'approvisionnement électronique chinoise est inégalée en échelle et en rapidité. Nous vous aidons à la naviguer en toute confiance.",
      "keyRegions": [
        { "name": "Shenzhen", "description": "Électronique grand public, appareils IoT, conception et assemblage de PCB, marchés de composants de Huaqiangbei." },
        { "name": "Dongguan", "description": "Fabrication de précision, fabrication de moules, usinage CNC, électronique industrielle." },
        { "name": "Huizhou", "description": "Fabrication de batteries, panneaux solaires, composants VE, chaîne d'approvisionnement énergie nouvelle." },
      ],
      "whatWeAudit": [
        "Installations de fabrication et d'assemblage de PCB",
        "Lignes de production CMS et contrôle qualité",
        "Usines OEM/ODM d'électronique grand public",
        "Authenticité et traçabilité des fournisseurs de composants",
        "Certifications de sécurité des batteries et alimentations",
        "Capacité et équipement du laboratoire d'essais électroniques",
      ],
      "caseSummary": "En 2025, nous avons audité 15 usines de haut-parleurs Bluetooth à Shenzhen pour une marque européenne. Nous avons éliminé 11 en raison de problèmes de qualité ou de statut d'intermédiaire, sélectionné 4, et le client a choisi une usine qui a livré un taux de qualité de 99,2 % sur leur première commande de 10 000 unités — économisant environ 45 000 $ par rapport à leur précédent fournisseur trouvé sur Alibaba.",
      "seoKeywords": [
        "audit fabricant électronique Chine",
        "service visite usine Shenzhen",
        "vérification fournisseur électronique Chine",
        "inspection usine assemblage PCB Chine",
      ],
    },
    "consumer-goods": {
      "name": "Biens de Consommation",
      "description": "Des marchés de gros de Yiwu aux quartiers spécialisés de Guangzhou, nous nous approvisionnons dans le vaste paysage des biens de consommation chinois.",
      "heroCopy": "La Chine produit plus de biens de consommation que n'importe quel pays sur Terre. Le défi n'est pas de trouver des fournisseurs — c'est de trouver les bons. Nous éliminons le bruit.",
      "keyRegions": [
        { "name": "Yiwu", "description": "Le plus grand marché de gros au monde — plus de 75 000 stands couvrant toutes les catégories de consommation." },
        { "name": "Guangzhou", "description": "Quartiers de gros spécialisés pour sacs, montres, bijoux, jouets et accessoires de mode." },
        { "name": "Shantou", "description": "Pôle de fabrication de jouets et produits plastiques dans l'est du Guangdong." },
      ],
      "whatWeAudit": [
        "Vérification usine vs revendeur",
        "Qualité et cohérence des produits entre les échantillons",
        "Capacité d'emballage et de marque",
        "Conformité à l'exportation (CE, FDA, CPSIA, etc.)",
        "Capacité de production et fiabilité des délais",
        "Benchmarking de la compétitivité des prix",
      ],
      "caseSummary": "Un vendeur Amazon FBA américain avait besoin de 8 catégories de produits sourcées en un seul voyage. Notre Sprint Multi-Catégories Guangzhou a visité 22 fournisseurs dans 4 quartiers de marché en 3 jours, livré un répertoire de fournisseurs catégorisé avec les prix, et le client a passé des commandes d'échantillons avec 6 usines vérifiées — le tout dans son budget de 15 000 $.",
      "seoKeywords": [
        "agent approvisionnement biens consommation Chine",
        "guide achat marché Yiwu",
        "approvisionnement produits gros Chine",
        "vérification fournisseur Amazon FBA Chine",
      ],
    },
    "apparel-textile": {
      "name": "Habillement et Textile",
      "description": "La ceinture textile chinoise est la plus grande au monde. Nous auditions les usines de confection, les filatures et les teintureries de Shaoxing à Guangzhou.",
      "heroCopy": "Du marché de tissus de Keqiao (le plus grand au monde) aux ateliers de confection de Guangzhou, la chaîne d'approvisionnement de l'habillement chinois offre une variété et une flexibilité inégalées pour les marques de mode de toutes tailles.",
      "keyRegions": [
        { "name": "Guangzhou", "description": "Fabrication de vêtements, maroquinerie, marché de tissus de Zhongda, quartier du cuir de Sanyuanli." },
        { "name": "Shaoxing / Keqiao", "description": "Le plus grand marché de gros de tissus au monde, teintureries, installations d'impression." },
        { "name": "Nantong", "description": "Pôle de fabrication de textile de maison, literie et serviettes dans la province du Jiangsu." },
      ],
      "whatWeAudit": [
        "Lignes de production et systèmes qualité des usines de confection",
        "Capacité des filatures et quantités minimales de commande",
        "Conformité environnementale des teintureries et constance des couleurs",
        "Qualité de construction des ateliers de maroquinerie",
        "Capacité des installations d'impression et de broderie",
        "Vérification de la fabrication éthique et des pratiques de travail",
      ],
      "caseSummary": "Une marque de streetwear basée à Londres avait besoin d'une production en petite série (100 pièces par style). Nous avons visité 8 usines de confection à Guangzhou, sourcé des tissus au marché de Zhongda, coordonné le développement d'échantillons et identifié une usine prête à passer de 100 à 1 000 pièces avec la croissance de la marque.",
      "seoKeywords": [
        "audit usine confection Chine",
        "agent approvisionnement tissu Chine",
        "visite fabricant habillement Guangzhou",
        "inspection chaîne approvisionnement textile Chine",
      ],
    },
    "furniture": {
      "name": "Meubles",
      "description": "Foshan produit 70 % des exportations de meubles de la Chine. Nous auditions les usines de bois massif, panneaux, rembourrage et meubles métalliques.",
      "heroCopy": "Foshan est la capitale incontestée de la fabrication de meubles chinois. Avec des pôles pour chaque matériau et style, le défi est de trouver la bonne usine pour vos exigences spécifiques.",
      "keyRegions": [
        { "name": "Lecong", "description": "Le plus grand marché de gros de meubles au monde — 3 millions de m² de showrooms dans plus de 180 bâtiments." },
        { "name": "Longjiang", "description": "Pôle de fabrication pour meubles rembourrés, canapés et matelas." },
        { "name": "Shunde", "description": "Fabrication de meubles en bois massif, menuiserie sur mesure et meubles résidentiels haut de gamme." },
      ],
      "whatWeAudit": [
        "Vérification de l'authenticité du bois massif (essence, taux d'humidité, menuiserie)",
        "Construction du cadre de rembourrage et densité de la mousse",
        "Qualité de la quincaillerie et précision d'assemblage des meubles en panneaux",
        "Qualité des finitions (peinture, laque, placage)",
        "Pratiques d'emballage et de chargement de conteneurs",
        "Évaluation des capacités sur mesure et OEM",
      ],
      "caseSummary": "Un groupe hôtelier basé à Dubaï avait besoin de meubles en bois massif sur mesure pour 120 chambres. Nous avons audité 6 usines à Shunde, vérifié leurs méthodes de construction et la qualité des finitions, et l'usine sélectionnée a livré à temps avec seulement 2 % de taux de défauts — bien en dessous de la moyenne du secteur de 8-10 %.",
      "seoKeywords": [
        "visite usine meubles Foshan",
        "inspection qualité meubles Chine",
        "approvisionnement meubles bois massif Chine",
        "guide gros meubles Foshan",
      ],
    },
    "food-beverage": {
      "name": "Alimentation et Boissons",
      "description": "Approvisionnez-vous en produits alimentaires et boissons premium à la source — du café du Yunnan aux épices du Sichuan et aux baies de goji du Ningxia.",
      "heroCopy": "Au-delà des produits manufacturés \"Made in China\" se trouve un riche paysage de produits alimentaires et boissons premium. Du café de spécialité aux traditions de thé anciennes, nous vous connectons directement avec les producteurs.",
      "keyRegions": [
        { "name": "Yunnan", "description": "L'origine du café chinois (95 % de la production), le cœur du thé Pu'er, l'approvisionnement en champignons sauvages." },
        { "name": "Sichuan / Chongqing", "description": "Poivre du Sichuan, produits à base de piment, sauces spéciales, bases de fondue chinoise, légumes marinés." },
        { "name": "Ningxia", "description": "Capitale de la baie de goji, région viticole émergente, agneau premium et produits agricoles." },
      ],
      "whatWeAudit": [
        "Visites de fermes et plantations pour des relations directes avec les producteurs",
        "Hygiène des installations de transformation et normes de sécurité alimentaire",
        "Vérification des certifications biologiques et de durabilité",
        "Documentation d'exportation et conformité (FDA, biologique UE, etc.)",
        "Classement de la qualité des produits et sessions de dégustation/cupping",
        "Évaluation de l'emballage et de la durée de conservation",
      ],
      "caseSummary": "Un torréfacteur de café de spécialité à Melbourne voulait du café du Yunnan en commerce direct. Nous avons visité 8 fermes à Baoshan et Pu'er, facilité des sessions de cupping et les avons connectés avec une coopérative produisant du café de qualité spécialité 84 points à 40 % de moins que le prix de leur précédent fournisseur colombien.",
      "seoKeywords": [
        "approvisionnement produits alimentaires Chine",
        "commerce direct café Yunnan",
        "fournisseur import thé chinois",
        "vérification alimentation biologique Chine",
      ],
    },
    "monopoly-towns": {
      "name": "Villes-Usines Monopoles",
      "description": "Les villes manufacturières hyper-spécialisées de Chine dominent la production mondiale de biens spécifiques. Nous naviguons dans ces chaînes d'approvisionnement cachées.",
      "heroCopy": "Quelque part en Chine, une seule ville fabrique probablement plus de 50 % de l'approvisionnement mondial de votre produit. Ces villes-usines monopoles offrent une expertise et des prix imbattables — si vous savez où chercher.",
      "keyRegions": [
        { "name": "Zhuji, Zhejiang", "description": "Produit 1/3 des chaussettes mondiales. Également un centre majeur de transformation de perles." },
        { "name": "Dongyang, Zhejiang", "description": "Plus de 80 % des tuiles de mahjong mondiales et une part dominante des jouets magnétiques." },
        { "name": "Yongkang, Zhejiang", "description": "Capitale de la quincaillerie — outils électriques, ferrures de porte, ustensiles de cuisine et bouteilles thermos." },
        { "name": "Taizhou, Zhejiang", "description": "Capitale de la fabrication de moules et du moulage par injection plastique. Également un pôle majeur de pièces automobiles." },
      ],
      "whatWeAudit": [
        "Profondeur de spécialisation du produit et expertise de fabrication",
        "Efficacité de production par rapport aux usines généralistes",
        "Approvisionnement en matières premières et structure des coûts",
        "Cohérence de la qualité à grande échelle",
        "Expérience d'exportation et conformité internationale",
        "Usines gérées par les propriétaires vs gestionnaires",
      ],
      "caseSummary": "Une marque européenne d'ustensiles de cuisine voulait des bouteilles thermos en acier inoxydable. Les usines générales proposaient 4,20 $/unité. Nous les avons emmenés à Yongkang, la capitale du thermos, où des usines spécialisées utilisant des lignes de production automatisées proposaient 2,80 $/unité avec une meilleure qualité — une économie de 33 % sur leur commande de 50 000 unités.",
      "seoKeywords": [
        "villes-usines spécialisées Chine",
        "guide pôles fabrication Chine",
        "approvisionnement usine chaussettes Zhuji",
        "fabricant quincaillerie Yongkang",
      ],
    },
    "canton-fair": {
      "name": "Foire de Canton",
      "description": "Maximisez votre retour sur investissement à la Foire de Canton avec des listes d'exposants pré-filtrées, des rendez-vous de stand planifiés et la coordination de visites d'usine.",
      "heroCopy": "La Foire de Canton est le plus grand salon commercial du monde avec plus de 25 000 exposants sur 1,18 million de mètres carrés. La plupart des participants gaspillent 60 % de leur temps dans les mauvais halls. Nous corrigeons cela.",
      "keyRegions": [
        { "name": "Phase 1 (15-19 avril/oct)", "description": "Électronique, appareils électroménagers, machines, quincaillerie, énergie nouvelle." },
        { "name": "Phase 2 (23-27 avril/oct)", "description": "Biens de consommation, cadeaux, décorations d'intérieur, matériaux de construction." },
        { "name": "Phase 3 (31 oct-4 nov)", "description": "Textiles, vêtements, chaussures, fournitures de bureau, sacs et valises, alimentation." },
      ],
      "whatWeAudit": [
        "Vérifications des antécédents des exposants avant le salon",
        "Évaluation des capacités des fournisseurs sur stand",
        "Vérification de la connexion usine de l'exposant",
        "Documentation de la négociation des prix en temps réel",
        "Coordination des visites d'usine post-salon",
        "Comparaison et présélection des fournisseurs",
      ],
      "caseSummary": "Un importateur canadien a participé à la Foire de Canton pour la première fois en 2025 avec notre service Navigateur. Nous avons pré-filtré plus de 300 exposants, planifié 45 rendez-vous de stand sur 5 jours et organisé des visites d'usine aux 6 meilleurs candidats. Ils ont passé des commandes avec 3 nouveaux fournisseurs et économisé environ 4 jours de déambulation non guidée dans les halls.",
      "seoKeywords": [
        "guide approvisionnement Foire de Canton 2026",
        "service agent Foire de Canton",
        "aide salon commercial Guangzhou",
        "vérification fournisseur salon commercial Chine",
      ],
    },
  },
  de: {
    "electronics": {
      "name": "Electronics",
      "description": "China ist die Elektronikfabrik der Welt. Wir auditieren PCB-, SMT-, Montage- und Komponentenlieferanten von Shenzhen bis Dongguan.",
      "heroCopy": "Von Shenzhens Huaqiangbei bis zum Dongguaner Präzisionsfertigungsgürtel ist Chinas Elektronik-Lieferkette in Umfang und Geschwindigkeit unübertroffen. Wir helfen Ihnen, sie mit Vertrauen zu navigieren.",
      "keyRegions": [
        { "name": "Shenzhen", "description": "Unterhaltungselektronik, IoT-Geräte, PCB-Design und -Montage, Huaqiangbei-Komponentenmärkte." },
        { "name": "Dongguan", "description": "Präzisionsfertigung, Formenbau, CNC-Bearbeitung, Industrieelektronik." },
        { "name": "Huizhou", "description": "Batteriefertigung, Solarmodule, EV-Komponenten, New-Energy-Lieferkette." },
      ],
      "whatWeAudit": [
        "PCB-Fertigungs- und Montageeinrichtungen",
        "SMT-Produktionslinien und Qualitätskontrolle",
        "OEM/ODM-Fabriken für Unterhaltungselektronik",
        "Authentizität und Rückverfolgbarkeit von Komponentenlieferanten",
        "Sicherheitszertifizierungen für Batterien und Netzteile",
        "Fähigkeiten und Ausstattung von Elektronikprüflaboren",
      ],
      "caseSummary": "Im Jahr 2025 auditierten wir 15 Bluetooth-Lautsprecher-Fabriken in Shenzhen für eine europäische Marke. Wir eliminierten 11 aufgrund von Qualitätsproblemen oder Zwischenhändlerstatus, nahmen 4 in die engere Wahl, und der Kunde wählte eine Fabrik, die eine Qualitätsrate von 99,2 % bei ihrer ersten 10.000-Einheiten-Bestellung lieferte — was geschätzte $45.000 im Vergleich zu ihrem vorherigen, über Alibaba bezogenen Lieferanten einsparte.",
      "seoKeywords": [
        "China Elektronikhersteller Audit",
        "Shenzhen Fabrikbesuch Service",
        "Elektronik Lieferantenverifizierung China",
        "China PCB-Montage Fabrikinspektion",
      ],
    },
    "consumer-goods": {
      "name": "Consumer Goods",
      "description": "Von Yiwus Großhandelsmärkten bis zu Guangzhous Spezialbezirken beschaffen wir in Chinas riesiger Konsumgüterlandschaft.",
      "heroCopy": "China produziert mehr Konsumgüter als jedes andere Land der Erde. Die Herausforderung besteht nicht darin, Lieferanten zu finden — sondern die richtigen zu finden. Wir filtern das Rauschen.",
      "keyRegions": [
        { "name": "Yiwu", "description": "Weltweit größter Großhandelsmarkt — 75.000+ Stände, die jede Konsumgüterkategorie abdecken." },
        { "name": "Guangzhou", "description": "Spezialisierte Großhandelsbezirke für Taschen, Uhren, Schmuck, Spielzeug und Modeaccessoires." },
        { "name": "Shantou", "description": "Spielzeug- und Kunststoffprodukt-Fertigungscluster im Osten Guangdongs." },
      ],
      "whatWeAudit": [
        "Fabrik- vs. Wiederverkäufer-Verifizierung",
        "Produktqualität und Konsistenz über Muster hinweg",
        "Verpackungs- und Branding-Fähigkeit",
        "Export-Compliance (CE, FDA, CPSIA usw.)",
        "Produktionskapazität und Zuverlässigkeit der Lieferzeiten",
        "Preiswettbewerbsfähigkeits-Benchmarking",
      ],
      "caseSummary": "Ein US-Amazon-FBA-Verkäufer benötigte die Beschaffung von 8 Produktkategorien in einer Reise. Unser Guangzhou Multi-Kategorie-Sprint besuchte 22 Lieferanten in 4 Marktbezirken an 3 Tagen, lieferte ein kategorisiertes Lieferantenverzeichnis mit Preisen, und der Kunde platzierte Musterbestellungen bei 6 verifizierten Fabriken — alles innerhalb seines Budgets von $15.000.",
      "seoKeywords": [
        "China Konsumgüter Beschaffungsagent",
        "Yiwu Markt Einkaufsleitfaden",
        "China Großhandel Produktbeschaffung",
        "Amazon FBA Lieferantenverifizierung China",
      ],
    },
    "apparel-textile": {
      "name": "Textile & Apparel",
      "description": "Chinas Textilgürtel ist der größte der Welt. Wir auditieren Bekleidungsfabriken, Stoffmühlen und Färbereien von Shaoxing bis Guangzhou.",
      "heroCopy": "Vom Keqiao-Stoffmarkt (weltgrößter) bis zu Guangzhous Bekleidungswerkstätten bietet Chinas Bekleidungslieferkette unübertroffene Vielfalt und Flexibilität für Modemarken jeder Größe.",
      "keyRegions": [
        { "name": "Guangzhou", "description": "Bekleidungsfertigung, Lederwaren, Zhongda-Stoffmarkt, Sanyuanli-Lederbezirk." },
        { "name": "Shaoxing / Keqiao", "description": "Weltweit größter Stoffgroßhandelsmarkt, Färbereien, Druckereieinrichtungen." },
        { "name": "Nantong", "description": "Heimtextilien-, Bettwäsche-, Handtuch-Fertigungscluster in der Provinz Jiangsu." },
      ],
      "whatWeAudit": [
        "Produktionslinien und Qualitätssysteme von Bekleidungsfabriken",
        "Fähigkeiten und Mindestbestellmengen von Stoffmühlen",
        "Umwelt-Compliance und Farbkonsistenz von Färbereien",
        "Konstruktionsqualität von Lederwarenwerkstätten",
        "Fähigkeiten von Druckerei- und Stickereieinrichtungen",
        "Ethische Fertigungs- und Arbeitspraktiken-Überprüfung",
      ],
      "caseSummary": "Eine Londoner Streetwear-Marke benötigte Kleinserienproduktion (100 Stück pro Stil). Wir besuchten 8 Bekleidungsfabriken in Guangzhou, beschafften Stoffe vom Zhongda-Markt, koordinierten die Musterentwicklung und identifizierten eine Fabrik, die bereit war, von 100 auf 1.000 Stück mit dem Wachstum der Marke zu skalieren.",
      "seoKeywords": [
        "China Bekleidungsfabrik Audit",
        "China Stoffbeschaffungsagent",
        "Guangzhou Bekleidungshersteller Besuch",
        "China Textillieferkette Inspektion",
      ],
    },
    "furniture": {
      "name": "Furniture",
      "description": "Foshan produziert 70 % der chinesischen Möbelexporte. Wir auditieren Fabriken für Massivholz, Platten, Polsterung und Metallmöbel.",
      "heroCopy": "Foshan ist die unbestrittene Hauptstadt der chinesischen Möbelfertigung. Mit Clustern für jedes Material und jeden Stil besteht die Herausforderung darin, die richtige Fabrik für Ihre spezifischen Anforderungen zu finden.",
      "keyRegions": [
        { "name": "Lecong", "description": "Weltweit größter Möbelgroßhandelsmarkt — 3 Millionen Quadratmeter Showrooms in über 180 Gebäuden." },
        { "name": "Longjiang", "description": "Fertigungszentrum für Polstermöbel, Sofas und Matratzen." },
        { "name": "Shunde", "description": "Massivholzmöbel, maßgefertigte Einbauschränke und hochwertige Wohnmöbelfertigung." },
      ],
      "whatWeAudit": [
        "Echtheitsprüfung von Massivholz (Holzart, Feuchtigkeitsgehalt, Verbindungen)",
        "Rahmenkonstruktion und Schaumdichte von Polsterungen",
        "Beschlagqualität und Montagepräzision von Plattenmöbeln",
        "Oberflächenqualität (Lack, Lasur, Furnier)",
        "Verpackungs- und Containerladepraktiken",
        "Bewertung von Maßanfertigungs- und OEM-Fähigkeiten",
      ],
      "caseSummary": "Eine Hotelgruppe aus Dubai benötigte maßgefertigte Massivholzmöbel für 120 Zimmer. Wir auditierten 6 Fabriken in Shunde, überprüften ihre Konstruktionsmethoden und Oberflächenqualität, und die ausgewählte Fabrik lieferte pünktlich mit nur 2 % Fehlerquote — weit unter dem Branchendurchschnitt von 8-10 %.",
      "seoKeywords": [
        "Foshan Möbelfabrik Besuch",
        "China Möbelqualitätsprüfung",
        "China Massivholzmöbel Beschaffung",
        "Foshan Möbelgroßhandel Leitfaden",
      ],
    },
    "food-beverage": {
      "name": "Food & Beverage",
      "description": "Beschaffen Sie Premium-Lebensmittel und Getränke direkt am Ursprung — von Yunnan-Kaffee über Sichuan-Gewürze bis zu Ningxia-Goji-Beeren.",
      "heroCopy": "Jenseits der \"Made in China\"-Fertigwaren liegt eine reiche Landschaft von Premium-Lebensmitteln und Getränken. Von Spezialitätenkaffee bis zu alten Teetraditionen verbinden wir Sie direkt mit Produzenten.",
      "keyRegions": [
        { "name": "Yunnan", "description": "Chinas Kaffeeursprung (95 % der Produktion), Kernland des Pu'er-Tees, Wildpilz-Beschaffung." },
        { "name": "Sichuan / Chongqing", "description": "Sichuan-Pfeffer, Chili-Produkte, Spezialsauce, Hotpot-Grundlagen, eingelegtes Gemüse." },
        { "name": "Ningxia", "description": "Goji-Beeren-Hauptstadt, aufstrebende Weinregion, Premium-Lamm und landwirtschaftliche Produkte." },
      ],
      "whatWeAudit": [
        "Farm- und Plantagenbesuche für direkte Produzentenbeziehungen",
        "Hygiene- und Lebensmittelsicherheitsstandards von Verarbeitungseinrichtungen",
        "Überprüfung von Bio- und Nachhaltigkeitszertifizierungen",
        "Exportdokumentation und -Compliance (FDA, EU-Bio usw.)",
        "Produktqualitätsbewertung und Verkostungs-/Cupping-Sitzungen",
        "Verpackungs- und Haltbarkeitsbewertung",
      ],
      "caseSummary": "Ein Spezialitätenkaffee-Röster aus Melbourne wollte Direkthandels-Yunnan-Kaffee. Wir besuchten 8 Farmen in Baoshan und Pu'er, ermöglichten Cupping-Sitzungen und verbanden sie mit einer Kooperative, die 84-Punkte-Spezialitätenkaffee zu 40 % unter dem Preis ihres vorherigen kolumbianischen Lieferanten produzierte.",
      "seoKeywords": [
        "China Lebensmittel Produktbeschaffung",
        "Yunnan Kaffee Direkthandel",
        "Chinesischer Tee Import Lieferant",
        "China Bio-Lebensmittel Verifizierung",
      ],
    },
    "monopoly-towns": {
      "name": "Monopoly Factory Towns",
      "description": "Chinas hyperspezialisierte Fertigungsstädte dominieren die globale Produktion bestimmter Güter. Wir navigieren diese versteckten Lieferketten.",
      "heroCopy": "Irgendwo in China produziert eine einzelne Stadt wahrscheinlich mehr als 50 % der weltweiten Versorgung mit Ihrem Produkt. Diese Monopol-Fabrikstädte bieten unschlagbare Expertise und Preisgestaltung — wenn Sie wissen, wo Sie suchen müssen.",
      "keyRegions": [
        { "name": "Zhuji, Zhejiang", "description": "Produziert 1/3 der Weltsocken. Auch ein bedeutendes Perlenverarbeitungszentrum." },
        { "name": "Dongyang, Zhejiang", "description": "Über 80 % der globalen Mahjong-Steine und ein dominanter Anteil an Magnetspielzeug." },
        { "name": "Yongkang, Zhejiang", "description": "Hardware-Hauptstadt — Elektrowerkzeuge, Türbeschläge, Küchenwaren und Thermoskannen." },
        { "name": "Taizhou, Zhejiang", "description": "Hauptstadt des Formenbaus und Kunststoffspritzgusses. Auch bedeutender Autoteile-Cluster." },
      ],
      "whatWeAudit": [
        "Spezialisierungstiefe und Fertigungsexpertise",
        "Produktionseffizienz im Vergleich zu generalistischen Fabriken",
        "Rohstoffbeschaffung und Kostenstruktur",
        "Qualitätskonsistenz im großen Maßstab",
        "Exporterfahrung und internationale Compliance",
        "Eigentümer-geführte vs. management-geführte Fabriken",
      ],
      "caseSummary": "Eine europäische Küchenwarenmarke wollte Edelstahl-Thermoskannen. Allgemeine Fabriken boten $4,20/Stück. Wir brachten sie nach Yongkang, der Thermoskannen-Hauptstadt, wo spezialisierte Fabriken mit automatisierten Produktionslinien $2,80/Stück mit besserer Qualität anboten — eine Kostenersparnis von 33 % bei ihrer 50.000-Einheiten-Bestellung.",
      "seoKeywords": [
        "China spezialisierte Fabrikstädte",
        "China Fertigungscluster Leitfaden",
        "Zhuji Sockenfabrik Beschaffung",
        "Yongkang Hardware Hersteller",
      ],
    },
    "canton-fair": {
      "name": "Canton Fair",
      "description": "Maximieren Sie Ihren Canton Fair-ROI mit vorgeprüften Ausstellerlisten, geplanten Standterminen und Fabrikbesuchskoordination.",
      "heroCopy": "Die Canton Fair ist die weltweit größte Handelsmesse mit über 25.000 Ausstellern auf 1,18 Millionen Quadratmetern. Die meisten Besucher verschwenden 60 % ihrer Zeit in den falschen Hallen. Wir beheben das.",
      "keyRegions": [
        { "name": "Phase 1 (15.-19. April/Okt)", "description": "Elektronik, elektrische Haushaltsgeräte, Maschinen, Hardware, New Energy." },
        { "name": "Phase 2 (23.-27. April/Okt)", "description": "Konsumgüter, Geschenke, Wohnaccessoires, Baumaterialien." },
        { "name": "Phase 3 (31. Okt-4. Nov)", "description": "Textilien, Bekleidung, Schuhe, Bürobedarf, Koffer und Taschen, Lebensmittel." },
      ],
      "whatWeAudit": [
        "Vorab-Hintergrundprüfungen von Ausstellern",
        "Standbasierte Lieferantenfähigkeitsbewertung",
        "Überprüfung der Fabrikverbindung von Ausstellern",
        "Echtzeit-Dokumentation von Preisverhandlungen",
        "Koordination von Fabrikbesuchen nach der Messe",
        "Lieferantenvergleich und Kurzlisten-Erstellung",
      ],
      "caseSummary": "Ein kanadischer Importeur besuchte die Canton Fair 2025 zum ersten Mal mit unserem Navigator-Service. Wir prüften über 300 Aussteller vorab, planten 45 Standtermine über 5 Tage und arrangierten Fabrikbesuche bei den 6 besten Kandidaten. Sie platzierten Bestellungen bei 3 neuen Lieferanten und sparten geschätzt 4 Tage ungeführten Hallenwanderns.",
      "seoKeywords": [
        "Canton Fair Beschaffungsleitfaden 2026",
        "Canton Fair Agent Service",
        "Guangzhou Handelsmesse Hilfe",
        "China Handelsmesse Lieferantenverifizierung",
      ],
    },
  },
  it: {
    "electronics": {
      "name": "Elettronica",
      "description": "La Cina è la fabbrica mondiale dell'elettronica. Verifichiamo fornitori di PCB, SMT, assemblaggio e componenti da Shenzhen a Dongguan.",
      "heroCopy": "Da Huaqiangbei a Shenzhen alla cintura della produzione di precisione di Dongguan, la supply chain dell'elettronica cinese è ineguagliabile per scala e velocità. Ti aiutiamo a navigarla con fiducia.",
      "keyRegions": [
        { "name": "Shenzhen", "description": "Elettronica di consumo, dispositivi IoT, progettazione e assemblaggio PCB, mercati dei componenti di Huaqiangbei." },
        { "name": "Dongguan", "description": "Produzione di precisione, stampistica, lavorazioni CNC, elettronica industriale." },
        { "name": "Huizhou", "description": "Produzione di batterie, pannelli solari, componenti EV, supply chain della nuova energia." },
      ],
      "whatWeAudit": [
        "Stabilimenti di fabbricazione e assemblaggio PCB",
        "Linee di produzione SMT e controllo qualità",
        "Fabbriche OEM/ODM di elettronica di consumo",
        "Autenticità e tracciabilità dei fornitori di componenti",
        "Certificazioni di sicurezza di batterie e alimentatori",
        "Capacità e attrezzature dei laboratori di test elettronici",
      ],
      "caseSummary": "Nel 2025, abbiamo verificato 15 fabbriche di altoparlanti Bluetooth a Shenzhen per un marchio europeo. Abbiamo eliminato 11 a causa di problemi di qualità o status di intermediario, selezionato 4 e il cliente ha scelto una fabbrica che ha raggiunto il 99,2% di tasso di qualità sul loro primo ordine di 10.000 unità — risparmiando circa $45.000 rispetto al precedente fornitore trovato su Alibaba.",
      "seoKeywords": [
        "audit produttore elettronica Cina",
        "servizio visita fabbrica Shenzhen",
        "verifica fornitore elettronica Cina",
        "ispezione fabbrica assemblaggio PCB Cina",
      ],
    },
    "consumer-goods": {
      "name": "Beni di Consumo",
      "description": "Dai mercati all'ingrosso di Yiwu ai distretti specializzati di Guangzhou, ci approvvigioniamo nel vasto panorama dei beni di consumo cinesi.",
      "heroCopy": "La Cina produce più beni di consumo di qualsiasi altro paese sulla Terra. La sfida non è trovare fornitori — è trovare quelli giusti. Tagliamo attraverso il rumore.",
      "keyRegions": [
        { "name": "Yiwu", "description": "Il più grande mercato all'ingrosso al mondo — oltre 75.000 stand che coprono ogni categoria di consumo." },
        { "name": "Guangzhou", "description": "Distretti all'ingrosso specializzati per borse, orologi, gioielli, giocattoli e accessori moda." },
        { "name": "Shantou", "description": "Cluster di produzione di giocattoli e prodotti in plastica nel Guangdong orientale." },
      ],
      "whatWeAudit": [
        "Verifica fabbrica vs. rivenditore",
        "Qualità e consistenza del prodotto tra i campioni",
        "Capacità di imballaggio e branding",
        "Conformità all'esportazione (CE, FDA, CPSIA, ecc.)",
        "Capacità produttiva e affidabilità dei tempi di consegna",
        "Benchmarking della competitività dei prezzi",
      ],
      "caseSummary": "Un venditore Amazon FBA statunitense aveva bisogno di approvvigionare 8 categorie di prodotto in un unico viaggio. Il nostro Sprint Multi-Categoria Guangzhou ha visitato 22 fornitori in 4 distretti di mercato in 3 giorni, ha consegnato un elenco fornitori categorizzato con prezzi e il cliente ha effettuato ordini di campioni con 6 fabbriche verificate — tutto entro il loro budget di $15.000.",
      "seoKeywords": [
        "agente approvvigionamento beni consumo Cina",
        "guida acquisto mercato Yiwu",
        "approvvigionamento prodotti all'ingrosso Cina",
        "verifica fornitori Amazon FBA Cina",
      ],
    },
    "apparel-textile": {
      "name": "Abbigliamento e Tessile",
      "description": "La cintura tessile cinese è la più grande al mondo. Verifichiamo fabbriche di abbigliamento, mulini di tessuti e tintorie da Shaoxing a Guangzhou.",
      "heroCopy": "Dal mercato tessile di Keqiao (il più grande al mondo) ai laboratori di abbigliamento di Guangzhou, la supply chain dell'abbigliamento cinese offre varietà e flessibilità ineguagliabili per i marchi di moda di tutte le dimensioni.",
      "keyRegions": [
        { "name": "Guangzhou", "description": "Produzione di abbigliamento, pelletteria, mercato tessile Zhongda, distretto della pelle Sanyuanli." },
        { "name": "Shaoxing / Keqiao", "description": "Il più grande mercato all'ingrosso di tessuti al mondo, tintorie, stabilimenti di stampa." },
        { "name": "Nantong", "description": "Cluster di produzione di tessili per la casa, biancheria da letto e asciugamani nella provincia del Jiangsu." },
      ],
      "whatWeAudit": [
        "Linee di produzione e sistemi di qualità delle fabbriche di abbigliamento",
        "Capacità dei mulini di tessuti e quantità minime d'ordine",
        "Conformità ambientale delle tintorie e consistenza dei colori",
        "Qualità costruttiva dei laboratori di pelletteria",
        "Capacità degli stabilimenti di stampa e ricamo",
        "Verifica della produzione etica e delle pratiche di lavoro",
      ],
      "caseSummary": "Un marchio di streetwear con sede a Londra aveva bisogno di produzione in piccoli lotti (100 pezzi per stile). Abbiamo visitato 8 fabbriche di abbigliamento a Guangzhou, approvvigionato tessuti dal mercato Zhongda, coordinato lo sviluppo dei campioni e identificato una fabbrica disposta a scalare da 100 a 1.000 pezzi con la crescita del marchio.",
      "seoKeywords": [
        "audit fabbrica abbigliamento Cina",
        "agente approvvigionamento tessuti Cina",
        "visita produttore abbigliamento Guangzhou",
        "ispezione supply chain tessile Cina",
      ],
    },
    "furniture": {
      "name": "Mobili",
      "description": "Foshan produce il 70% delle esportazioni di mobili della Cina. Verifichiamo fabbriche di legno massello, pannelli, imbottiti e mobili in metallo.",
      "heroCopy": "Foshan è la capitale indiscussa della produzione di mobili cinesi. Con cluster per ogni materiale e stile, la sfida è trovare la fabbrica giusta per i tuoi requisiti specifici.",
      "keyRegions": [
        { "name": "Lecong", "description": "Il più grande mercato all'ingrosso di mobili al mondo — 3 milioni di mq di showroom in oltre 180 edifici." },
        { "name": "Longjiang", "description": "Polo produttivo per mobili imbottiti, divani e materassi." },
        { "name": "Shunde", "description": "Produzione di mobili in legno massello, mobili su misura e arredamento residenziale di alta gamma." },
      ],
      "whatWeAudit": [
        "Verifica dell'autenticità del legno massello (specie, contenuto di umidità, falegnameria)",
        "Costruzione del telaio dei mobili imbottiti e densità della schiuma",
        "Qualità della ferramenta e precisione di assemblaggio dei mobili in pannello",
        "Qualità delle finiture (vernice, lacca, impiallacciatura)",
        "Pratiche di imballaggio e caricamento container",
        "Valutazione della capacità personalizzata e OEM",
      ],
      "caseSummary": "Un gruppo alberghiero con sede a Dubai aveva bisogno di mobili su misura in legno massello per 120 camere. Abbiamo verificato 6 fabbriche a Shunde, verificato i loro metodi di costruzione e la qualità delle finiture, e la fabbrica selezionata ha consegnato in tempo con solo il 2% di tasso di difetto — ben al di sotto della media del settore dell'8-10%.",
      "seoKeywords": [
        "visita fabbrica mobili Foshan",
        "ispezione qualità mobili Cina",
        "approvvigionamento mobili legno massello Cina",
        "guida all'ingrosso mobili Foshan",
      ],
    },
    "food-beverage": {
      "name": "Food e Beverage",
      "description": "Approvvigionati di prodotti food e beverage premium all'origine — dal caffè dello Yunnan alle spezie del Sichuan e alle bacche di goji del Ningxia.",
      "heroCopy": "Oltre i beni manifatturieri \"Made in China\" si trova un ricco panorama di prodotti food e beverage premium. Dal caffè specialty alle antiche tradizioni del tè, ti mettiamo in contatto direttamente con i produttori.",
      "keyRegions": [
        { "name": "Yunnan", "description": "L'origine del caffè cinese (95% della produzione), cuore del tè Pu'er, approvvigionamento di funghi selvatici." },
        { "name": "Sichuan / Chongqing", "description": "Pepe di Sichuan, prodotti al peperoncino, salse speciali, basi per hot pot, verdure sottaceto." },
        { "name": "Ningxia", "description": "Capitale delle bacche di goji, regione vinicola emergente, agnello premium e prodotti agricoli." },
      ],
      "whatWeAudit": [
        "Visite a fattorie e piantagioni per relazioni dirette con i produttori",
        "Igiene degli stabilimenti di lavorazione e standard di sicurezza alimentare",
        "Verifica delle certificazioni biologiche e di sostenibilità",
        "Documentazione di esportazione e conformità (FDA, biologico EU, ecc.)",
        "Classificazione della qualità del prodotto e sessioni di degustazione/cupping",
        "Valutazione dell'imballaggio e della durata di conservazione",
      ],
      "caseSummary": "Un torrefattore di caffè specialty a Melbourne voleva caffè dello Yunnan in commercio diretto. Abbiamo visitato 8 piantagioni a Baoshan e Pu'er, facilitato sessioni di cupping e li abbiamo messi in contatto con una cooperativa che produce caffè di grado specialty a 84 punti al 40% in meno rispetto al prezzo del loro precedente fornitore colombiano.",
      "seoKeywords": [
        "approvvigionamento prodotti alimentari Cina",
        "commercio diretto caffè Yunnan",
        "fornitore importazione tè cinese",
        "verifica alimenti biologici Cina",
      ],
    },
    "monopoly-towns": {
      "name": "Città Fabbrica Monopolio",
      "description": "Le città manifatturiere iper-specializzate della Cina dominano la produzione globale di beni specifici. Navighiamo queste supply chain nascoste.",
      "heroCopy": "Da qualche parte in Cina, una singola città probabilmente produce oltre il 50% dell'offerta mondiale del tuo prodotto. Queste città fabbrica monopolio offrono competenza e prezzi imbattibili — se sai dove cercare.",
      "keyRegions": [
        { "name": "Zhuji, Zhejiang", "description": "Produce 1/3 delle calze mondiali. Anche un importante centro di lavorazione delle perle." },
        { "name": "Dongyang, Zhejiang", "description": "Oltre l'80% delle tessere da mahjong globali e una quota dominante di giocattoli magnetici." },
        { "name": "Yongkang, Zhejiang", "description": "Capitale della ferramenta — utensili elettrici, ferramenta per porte, articoli da cucina e thermos." },
        { "name": "Taizhou, Zhejiang", "description": "Capitale della stampistica e dello stampaggio a iniezione di plastica. Anche importante cluster di componenti auto." },
      ],
      "whatWeAudit": [
        "Profondità della specializzazione del prodotto e competenza manifatturiera",
        "Efficienza produttiva rispetto alle fabbriche generaliste",
        "Approvvigionamento delle materie prime e struttura dei costi",
        "Consistenza della qualità su larga scala",
        "Esperienza di esportazione e conformità internazionale",
        "Fabbriche gestite dai proprietari vs. gestite da manager",
      ],
      "caseSummary": "Un marchio europeo di articoli da cucina voleva thermos in acciaio inossidabile. Le fabbriche generaliste quotavano $4,20/unità. Li abbiamo portati a Yongkang, la capitale dei thermos, dove fabbriche specializzate che utilizzano linee di produzione automatizzate quotavano $2,80/unità con qualità migliore — un risparmio del 33% sul loro ordine di 50.000 unità.",
      "seoKeywords": [
        "città fabbrica specializzate Cina",
        "guida cluster manifatturieri Cina",
        "approvvigionamento fabbrica calze Zhuji",
        "produttore ferramenta Yongkang",
      ],
    },
    "canton-fair": {
      "name": "Fiera di Canton",
      "description": "Massimizza il ROI della tua Fiera di Canton con elenchi espositori pre-selezionati, incontri programmati agli stand e coordinamento delle visite alle fabbriche.",
      "heroCopy": "La Fiera di Canton è la più grande fiera commerciale al mondo con oltre 25.000 espositori su 1,18 milioni di metri quadrati. La maggior parte dei partecipanti spreca il 60% del tempo nei padiglioni sbagliati. Noi risolviamo questo problema.",
      "keyRegions": [
        { "name": "Fase 1 (15-19 apr/ott)", "description": "Elettronica, elettrodomestici, macchinari, ferramenta, nuova energia." },
        { "name": "Fase 2 (23-27 apr/ott)", "description": "Beni di consumo, regali, decorazioni per la casa, materiali da costruzione." },
        { "name": "Fase 3 (31 ott-4 nov)", "description": "Tessili, abbigliamento, calzature, forniture per ufficio, valigie e borse, alimentari." },
      ],
      "whatWeAudit": [
        "Controlli dei precedenti degli espositori prima della fiera",
        "Valutazione della capacità dei fornitori presso gli stand",
        "Verifica del collegamento tra espositori e fabbriche",
        "Documentazione della negoziazione dei prezzi in tempo reale",
        "Coordinamento delle visite alle fabbriche dopo la fiera",
        "Confronto e selezione dei fornitori",
      ],
      "caseSummary": "Un importatore canadese ha partecipato per la prima volta alla Fiera di Canton nel 2025 con il nostro servizio Navigator. Abbiamo pre-selezionato oltre 300 espositori, programmato 45 incontri agli stand in 5 giorni e organizzato visite alle fabbriche per i primi 6 candidati. Hanno effettuato ordini con 3 nuovi fornitori e risparmiato circa 4 giorni di cammino non guidato nei padiglioni.",
      "seoKeywords": [
        "guida approvvigionamento Fiera Canton 2026",
        "servizio agente Fiera Canton",
        "aiuto fiera commerciale Guangzhou",
        "verifica fornitori fiera commerciale Cina",
      ],
    },
  },
  ko: {
    "electronics": {
      "name": "Electronics",
      "description": "중국은 세계의 전자제품 공장입니다. 저희는 Shenzhen부터 Dongguan까지 PCB, SMT, 조립, 부품 공급업체를 실사합니다.",
      "heroCopy": "Shenzhen의 Huaqiangbei부터 Dongguan의 정밀 제조 벨트까지, 중국의 전자제품 공급망은 규모와 속도에서 타의 추종을 불허합니다. 저희는 귀하가 자신 있게 이를 탐색할 수 있도록 돕습니다.",
      "keyRegions": [
        { "name": "Shenzhen", "description": "소비자 가전, IoT 기기, PCB 설계 및 조립, Huaqiangbei 부품 시장." },
        { "name": "Dongguan", "description": "정밀 제조, 금형 제작, CNC 가공, 산업용 전자제품." },
        { "name": "Huizhou", "description": "배터리 제조, 태양광 패널, EV 부품, 신에너지 공급망." },
      ],
      "whatWeAudit": [
        "PCB 제조 및 조립 시설",
        "SMT 생산 라인 및 품질 관리",
        "소비자 가전 OEM/ODM 공장",
        "부품 공급업체 진위성 및 추적성",
        "배터리 및 전원 공급 장치 안전 인증",
        "전자제품 테스트 연구소 역량 및 장비",
      ],
      "caseSummary": "2025년, 유럽 브랜드를 위해 Shenzhen 전역의 Bluetooth 스피커 공장 15곳을 실사했습니다. 품질 문제 또는 중간상 지위로 인해 11곳을 제외하고 4곳을 쇼트리스트했으며, 고객은 첫 10,000개 주문에서 99.2% 품질률을 달성한 공장을 선택했습니다 — 이전 Alibaba 소싱 공급업체 대비 약 $45,000를 절감했습니다.",
      "seoKeywords": [
        "중국 전자제품 제조업체 실사",
        "Shenzhen 공장 방문 서비스",
        "중국 전자제품 공급업체 검증",
        "중국 PCB 조립 공장 검사",
      ],
    },
    "consumer-goods": {
      "name": "Consumer Goods",
      "description": "Yiwu의 도매 시장부터 Guangzhou의 특화 지구까지, 중국의 광대한 소비재 환경을 아우르며 소싱합니다.",
      "heroCopy": "중국은 지구상 어느 나라보다 많은 소비재를 생산합니다. 과제는 공급업체를 찾는 것이 아니라 적합한 공급업체를 찾는 것입니다. 저희는 혼란을 뚫고 나아갑니다.",
      "keyRegions": [
        { "name": "Yiwu", "description": "세계 최대 도매 시장 — 모든 소비재 카테고리를 아우르는 75,000개 이상의 부스." },
        { "name": "Guangzhou", "description": "가방, 시계, 주얼리, 장난감, 패션 액세서리를 위한 특화 도매 지구." },
        { "name": "Shantou", "description": "Guangdong 동부의 장난감 및 플라스틱 제품 제조 클러스터." },
      ],
      "whatWeAudit": [
        "공장 vs 재판매업체 검증",
        "샘플 간 제품 품질 및 일관성",
        "포장 및 브랜딩 능력",
        "수출 규정 준수 (CE, FDA, CPSIA 등)",
        "생산 능력 및 리드 타임 신뢰성",
        "가격 경쟁력 벤치마킹",
      ],
      "caseSummary": "미국 Amazon FBA 셀러가 한 번의 출장으로 8개 제품 카테고리를 소싱해야 했습니다. 저희 Guangzhou Multi-Category Sprint는 3일 동안 4개 시장 지구에서 22개 공급업체를 방문했고, 가격이 포함된 카테고리별 공급업체 디렉토리를 제공했으며, 고객은 $15,000 예산 내에서 검증된 6개 공장에 샘플 주문을 진행했습니다.",
      "seoKeywords": [
        "중국 소비재 소싱 에이전트",
        "Yiwu 시장 구매 가이드",
        "중국 도매 제품 소싱",
        "중국 Amazon FBA 공급업체 검증",
      ],
    },
    "apparel-textile": {
      "name": "Textile & Apparel",
      "description": "중국의 원단 벨트는 세계 최대입니다. 저희는 Shaoxing부터 Guangzhou까지 의류 공장, 방적 공장, 염색 공장을 실사합니다.",
      "heroCopy": "Keqiao 원단 시장(세계 최대)부터 Guangzhou의 의류 작업장까지, 중국의 의류 공급망은 모든 규모의 패션 브랜드에 비교할 수 없는 다양성과 유연성을 제공합니다.",
      "keyRegions": [
        { "name": "Guangzhou", "description": "의류 제조, 가죽 제품, Zhongda 원단 시장, Sanyuanli 가죽 지구." },
        { "name": "Shaoxing / Keqiao", "description": "세계 최대 원단 도매 시장, 염색 공장, 날염 시설." },
        { "name": "Nantong", "description": "Jiangsu 성의 홈 텍스타일, 침구, 타월 제조 클러스터." },
      ],
      "whatWeAudit": [
        "의류 공장 생산 라인 및 품질 시스템",
        "방적 공장 생산 능력 및 최소 주문 수량",
        "염색 공장 환경 규정 준수 및 색상 일관성",
        "가죽 제품 작업장 제작 품질",
        "날염 및 자수 시설 능력",
        "윤리적 제조 및 노동 관행 검증",
      ],
      "caseSummary": "런던 기반 스트리트웨어 브랜드가 소량 배치 생산(스타일당 100피스)을 필요로 했습니다. Guangzhou 의류 공장 8곳을 방문하고, Zhongda 시장에서 원단을 소싱했으며, 샘플 개발을 조율하고, 브랜드 성장과 함께 100피스에서 1,000피스까지 확장할 의향이 있는 공장을 찾았습니다.",
      "seoKeywords": [
        "중국 의류 공장 실사",
        "중국 원단 소싱 에이전트",
        "Guangzhou 의류 제조업체 방문",
        "중국 원단 공급망 검사",
      ],
    },
    "furniture": {
      "name": "Furniture",
      "description": "Foshan은 중국 가구 수출의 70%를 생산합니다. 원목, 판재, 실내장식, 금속 가구 전반에 걸쳐 공장을 실사합니다.",
      "heroCopy": "Foshan은 중국 가구 제조의 확실한 수도입니다. 모든 자재와 스타일에 대한 클러스터가 있어, 과제는 귀하의 특정 요구사항에 맞는 적합한 공장을 찾는 것입니다.",
      "keyRegions": [
        { "name": "Lecong", "description": "세계 최대 가구 도매 시장 — 180개 이상의 건물에 걸친 300만 제곱미터의 쇼룸." },
        { "name": "Longjiang", "description": "실내장식 가구, 소파, 매트리스 제조 허브." },
        { "name": "Shunde", "description": "원목 가구, 맞춤형 캐비닛, 고급 주거용 가구 제조." },
      ],
      "whatWeAudit": [
        "원목 진위 검증 (수종, 함수율, 결합 방식)",
        "실내장식 프레임 구조 및 폼 밀도",
        "판재 가구 하드웨어 품질 및 조립 정밀도",
        "마감 품질 (페인트, 래커, 무늬목)",
        "포장 및 컨테이너 적재 관행",
        "맞춤형 및 OEM 능력 평가",
      ],
      "caseSummary": "두바이 기반 호텔 그룹이 120개 객실에 대한 맞춤형 원목 가구를 필요로 했습니다. Shunde의 6개 공장을 실사하고, 제작 방법과 마감 품질을 검증했으며, 선정된 공장은 업계 평균 8~10%를 크게 밑도는 2%의 불량률로 정시 납품했습니다.",
      "seoKeywords": [
        "Foshan 가구 공장 방문",
        "중국 가구 품질 검사",
        "중국 원목 가구 소싱",
        "Foshan 가구 도매 가이드",
      ],
    },
    "food-beverage": {
      "name": "Food & Beverage",
      "description": "Yunnan 커피부터 Sichuan 향신료, Ningxia 구기자까지 프리미엄 식음료 제품을 원산지에서 소싱합니다.",
      "heroCopy": "'Made in China' 제조 제품 너머에는 프리미엄 식음료 제품의 풍요로운 지형이 펼쳐져 있습니다. 스페셜티 커피부터 고대 차 전통까지, 생산자와 직접 연결해 드립니다.",
      "keyRegions": [
        { "name": "Yunnan", "description": "중국 커피 원산지 (생산량의 95%), Pu'er 차 심장부, 야생 버섯 소싱." },
        { "name": "Sichuan / Chongqing", "description": "Sichuan 산초, 고추 제품, 특제 소스, 훠궈 베이스, 절임 채소." },
        { "name": "Ningxia", "description": "구기자 수도, 신흥 와인 산지, 프리미엄 양고기 및 농산물." },
      ],
      "whatWeAudit": [
        "직접 생산자 관계를 위한 농장 및 농원 방문",
        "가공 시설 위생 및 식품 안전 기준",
        "유기농 및 지속 가능성 인증 검증",
        "수출 서류 및 규정 준수 (FDA, EU 유기농 등)",
        "제품 품질 등급 평가 및 테이스팅/커핑 세션",
        "포장 및 유통기한 평가",
      ],
      "caseSummary": "멜버른의 스페셜티 커피 로스터가 Yunnan 커피 직거래를 원했습니다. Baoshan과 Pu'er의 8개 농장을 방문하고, 커핑 세션을 진행했으며, 이전 콜롬비아 공급업체 가격보다 40% 저렴한 84점 스페셜티 등급 커피를 생산하는 협동조합과 연결했습니다.",
      "seoKeywords": [
        "중국 식품 소싱",
        "Yunnan 커피 직거래",
        "중국 차 수입 공급업체",
        "중국 유기농 식품 검증",
      ],
    },
    "monopoly-towns": {
      "name": "Monopoly Factory Towns",
      "description": "중국의 초특화 제조 도시는 특정 상품의 글로벌 생산을 지배합니다. 저희는 이 숨겨진 공급망을 탐색합니다.",
      "heroCopy": "중국 어딘가에는 귀하 제품의 전 세계 공급량 50% 이상을 아마도 단일 도시가 생산하고 있을 것입니다. 이 독점 공장 도시들은 어디를 봐야 하는지만 안다면 따라올 수 없는 전문성과 가격을 제공합니다.",
      "keyRegions": [
        { "name": "Zhuji, Zhejiang", "description": "세계 양말의 1/3 생산. 주요 진주 가공 중심지이기도 함." },
        { "name": "Dongyang, Zhejiang", "description": "세계 마작 타일의 80% 이상 및 자석 장난감 지배적 점유율." },
        { "name": "Yongkang, Zhejiang", "description": "하드웨어 수도 — 전동 공구, 도어 부속품, 주방용품, 보온병." },
        { "name": "Taizhou, Zhejiang", "description": "금형 제작 및 플라스틱 사출 성형 수도. 주요 자동차 부품 클러스터이기도 함." },
      ],
      "whatWeAudit": [
        "제품 특화 깊이 및 제조 전문성",
        "범용 공장 대비 생산 효율성",
        "원자재 소싱 및 비용 구조",
        "대규모 품질 일관성",
        "수출 경험 및 국제 규정 준수",
        "소유주 운영 vs 경영진 운영 공장",
      ],
      "caseSummary": "유럽 주방용품 브랜드가 스테인리스 보온병을 원했습니다. 일반 공장은 개당 $4.20를 견적했습니다. 저희는 보온병 수도인 Yongkang으로 안내했고, 자동화 생산 라인을 사용하는 특화 공장이 더 나은 품질로 개당 $2.80를 견적했습니다 — 50,000개 주문에서 33% 비용 절감.",
      "seoKeywords": [
        "중국 특화 공장 도시",
        "중국 제조 클러스터 가이드",
        "Zhuji 양말 공장 소싱",
        "Yongkang 하드웨어 제조업체",
      ],
    },
    "canton-fair": {
      "name": "Canton Fair",
      "description": "사전 심사된 출품업체 목록, 예약된 부스 미팅, 공장 방문 조율로 Canton Fair ROI를 극대화합니다.",
      "heroCopy": "Canton Fair는 118만 제곱미터에 걸쳐 25,000명 이상의 출품업체가 참가하는 세계 최대 무역 박람회입니다. 대부분의 참석자는 잘못된 홀에서 60%의 시간을 낭비합니다. 저희가 이를 해결합니다.",
      "keyRegions": [
        { "name": "Phase 1 (4월/10월 15-19일)", "description": "전자제품, 가정용 전기 기기, 기계, 하드웨어, 신에너지." },
        { "name": "Phase 2 (4월/10월 23-27일)", "description": "소비재, 선물, 홈 데코, 건축 자재." },
        { "name": "Phase 3 (4월/10월 31일-11월 4일)", "description": "원단, 의류, 신발, 사무용품, 가방 및 케이스, 식품." },
      ],
      "whatWeAudit": [
        "박람회 전 출품업체 백그라운드 체크",
        "부스 기반 공급업체 능력 평가",
        "출품업체 공장 연결 검증",
        "실시간 가격 협상 문서화",
        "박람회 후 공장 방문 조율",
        "공급업체 비교 및 쇼트리스트 작성",
      ],
      "caseSummary": "캐나다 수입업체가 2025년 저희 Navigator 서비스를 통해 처음으로 Canton Fair에 참가했습니다. 300명 이상의 출품업체를 사전 심사하고, 5일 동안 45개 부스 미팅 일정을 잡았으며, 상위 6개 후보의 공장 방문을 주선했습니다. 3개의 신규 공급업체에 주문했으며, 가이드 없는 홀 배회 시간을 약 4일 절감한 것으로 추산됩니다.",
      "seoKeywords": [
        "Canton Fair 소싱 가이드 2026",
        "Canton Fair 에이전트 서비스",
        "Guangzhou 무역 박람회 도움",
        "중국 무역 박람회 공급업체 검증",
      ],
    },
  },
  ru: {
    "electronics": {
      "name": "Электроника",
      "description": "Китай — мировая фабрика электроники. Мы проводим аудит поставщиков печатных плат, SMT, сборки и компонентов от Шэньчжэня до Дунгуаня.",
      "heroCopy": "От Huaqiangbei в Шэньчжэне до пояса точного производства Дунгуаня — цепочка поставок электроники Китая не имеет аналогов по масштабу и скорости. Мы помогаем вам ориентироваться в ней с уверенностью.",
      "keyRegions": [
        { "name": "Шэньчжэнь", "description": "Потребительская электроника, устройства IoT, дизайн и сборка печатных плат, рынки компонентов Huaqiangbei." },
        { "name": "Дунгуань", "description": "Точное производство, изготовление пресс-форм, обработка на станках с ЧПУ, промышленная электроника." },
        { "name": "Хуэйчжоу", "description": "Производство батарей, солнечные панели, компоненты для электромобилей, цепочка поставок новой энергетики." },
      ],
      "whatWeAudit": [
        "Предприятия по изготовлению и сборке печатных плат",
        "Производственные линии SMT и контроль качества",
        "Фабрики OEM/ODM потребительской электроники",
        "Подлинность и прослеживаемость поставщиков компонентов",
        "Сертификаты безопасности батарей и источников питания",
        "Возможности и оборудование лабораторий тестирования электроники",
      ],
      "caseSummary": "В 2025 году мы провели аудит 15 фабрик Bluetooth-колонок в Шэньчжэне для европейского бренда. Мы исключили 11 из-за проблем с качеством или статуса посредника, отобрали 4, и клиент выбрал фабрику, которая обеспечила 99,2% уровень качества при первом заказе на 10 000 единиц — сэкономив примерно $45 000 по сравнению с предыдущим поставщиком, найденным через Alibaba.",
      "seoKeywords": [
        "аудит производителей электроники Китая",
        "услуга посещения фабрик в Шэньчжэне",
        "проверка поставщиков электроники в Китае",
        "проверка фабрик сборки печатных плат в Китае",
      ],
    },
    "consumer-goods": {
      "name": "Потребительские товары",
      "description": "От оптовых рынков Иу до специализированных районов Гуанчжоу — мы закупаем по всему обширному ландшафту потребительских товаров Китая.",
      "heroCopy": "Китай производит больше потребительских товаров, чем любая другая страна на Земле. Проблема не в том, чтобы найти поставщиков, а в том, чтобы найти правильных. Мы пробиваемся сквозь шум.",
      "keyRegions": [
        { "name": "Иу", "description": "Крупнейший в мире оптовый рынок — 75 000+ стендов, охватывающих каждую потребительскую категорию." },
        { "name": "Гуанчжоу", "description": "Специализированные оптовые районы для сумок, часов, ювелирных изделий, игрушек и модных аксессуаров." },
        { "name": "Шаньтоу", "description": "Производственный кластер игрушек и пластиковых изделий в восточном Гуандуне." },
      ],
      "whatWeAudit": [
        "Проверка: фабрика или перепродавец",
        "Качество и однородность продукции по образцам",
        "Возможности упаковки и брендирования",
        "Экспортное соответствие (CE, FDA, CPSIA и т.д.)",
        "Производственная мощность и надёжность сроков выполнения",
        "Бенчмаркинг ценовой конкурентоспособности",
      ],
      "caseSummary": "Продавец из США на Amazon FBA нуждался в закупке 8 категорий товаров за одну поездку. Наш мультикатегорийный спринт в Гуанчжоу посетил 22 поставщика в 4 рыночных районах за 3 дня, предоставил категоризированный справочник поставщиков с ценами, и клиент разместил заказы на образцы у 6 проверенных фабрик — всё в рамках бюджета $15 000.",
      "seoKeywords": [
        "агент по закупкам потребительских товаров в Китае",
        "руководство по покупкам на рынке Иу",
        "оптовые закупки товаров в Китае",
        "проверка поставщиков для Amazon FBA в Китае",
      ],
    },
    "apparel-textile": {
      "name": "Одежда и текстиль",
      "description": "Текстильный пояс Китая — крупнейший в мире. Мы проводим аудит швейных фабрик, ткацких производств и красильных цехов от Шаосина до Гуанчжоу.",
      "heroCopy": "От рынка тканей Кэцяо (крупнейшего в мире) до швейных мастерских Гуанчжоу — цепочка поставок одежды Китая предлагает непревзойдённое разнообразие и гибкость для модных брендов любого размера.",
      "keyRegions": [
        { "name": "Гуанчжоу", "description": "Производство одежды, кожаные изделия, рынок тканей Чжунда, кожевенный район Саньюаньли." },
        { "name": "Шаосин / Кэцяо", "description": "Крупнейший в мире оптовый рынок тканей, красильные цеха, печатные производства." },
        { "name": "Наньтун", "description": "Производственный кластер домашнего текстиля, постельных принадлежностей и полотенец в провинции Цзянсу." },
      ],
      "whatWeAudit": [
        "Производственные линии и системы качества швейных фабрик",
        "Возможности ткацких производств и минимальные объёмы заказа",
        "Экологическое соответствие красильных цехов и постоянство цвета",
        "Качество изготовления мастерских кожаных изделий",
        "Возможности печатных и вышивальных производств",
        "Проверка этичного производства и трудовых практик",
      ],
      "caseSummary": "Лондонский бренд уличной одежды нуждался в мелкосерийном производстве (100 штук на модель). Мы посетили 8 швейных фабрик Гуанчжоу, закупили ткани на рынке Чжунда, скоординировали разработку образцов и нашли фабрику, готовую масштабироваться от 100 до 1 000 штук вместе с ростом бренда.",
      "seoKeywords": [
        "аудит швейных фабрик Китая",
        "агент по закупкам тканей в Китае",
        "визит к производителям одежды в Гуанчжоу",
        "проверка текстильной цепочки поставок Китая",
      ],
    },
    "furniture": {
      "name": "Мебель",
      "description": "Фошань производит 70% экспорта мебели Китая. Мы проводим аудит фабрик по массиву дерева, ДСП, обивке и металлической мебели.",
      "heroCopy": "Фошань — бесспорная столица китайского мебельного производства. С кластерами для каждого материала и стиля задача состоит в том, чтобы найти правильную фабрику для ваших конкретных требований.",
      "keyRegions": [
        { "name": "Лэцун", "description": "Крупнейший в мире оптовый рынок мебели — 3 млн кв. м выставочных залов в 180+ зданиях." },
        { "name": "Лунцзян", "description": "Производственный центр мягкой мебели, диванов и матрасов." },
        { "name": "Шуньдэ", "description": "Производство мебели из массива дерева, индивидуальных шкафов и высококачественной жилой мебели." },
      ],
      "whatWeAudit": [
        "Проверка подлинности массива дерева (порода, влажность, столярные соединения)",
        "Конструкция каркаса обивки и плотность пеноматериала",
        "Качество фурнитуры и точность сборки мебели из ДСП",
        "Качество отделки (краска, лак, шпон)",
        "Практики упаковки и загрузки контейнеров",
        "Оценка возможностей индивидуального и OEM-производства",
      ],
      "caseSummary": "Гостиничная группа из Дубая нуждалась в индивидуальной мебели из массива дерева для 120 номеров. Мы провели аудит 6 фабрик в Шуньдэ, проверили их методы изготовления и качество отделки, и выбранная фабрика выполнила заказ вовремя с уровнем брака всего 2% — значительно ниже среднего по отрасли в 8-10%.",
      "seoKeywords": [
        "визит на мебельные фабрики Фошаня",
        "проверка качества мебели в Китае",
        "закупки мебели из массива дерева в Китае",
        "руководство по оптовым закупкам мебели в Фошане",
      ],
    },
    "food-beverage": {
      "name": "Продукты питания и напитки",
      "description": "Закупайте премиальные продукты питания и напитки у источника — от юньнаньского кофе до сычуаньских специй и ягод годжи из Нинся.",
      "heroCopy": "За пределами товаров с маркировкой \"Сделано в Китае\" лежит богатый ландшафт премиальных продуктов питания и напитков. От спешелти кофе до древних чайных традиций — мы связываем вас напрямую с производителями.",
      "keyRegions": [
        { "name": "Юньнань", "description": "Родина кофе Китая (95% производства), сердце чая Пуэр, закупки диких грибов." },
        { "name": "Сычуань / Чунцин", "description": "Сычуаньский перец, продукты из чили, специальные соусы, основы для хого, маринованные овощи." },
        { "name": "Нинся", "description": "Столица ягод годжи, развивающийся винодельческий регион, премиальная баранина и сельскохозяйственная продукция." },
      ],
      "whatWeAudit": [
        "Визиты на фермы и плантации для прямых отношений с производителями",
        "Гигиена перерабатывающих предприятий и стандарты безопасности пищевых продуктов",
        "Проверка органической сертификации и сертификации устойчивости",
        "Экспортная документация и соответствие (FDA, EU Organic и т.д.)",
        "Классификация качества продукции и дегустационные/каппинг-сессии",
        "Оценка упаковки и срока хранения",
      ],
      "caseSummary": "Обжарщик спешелти кофе из Мельбурна хотел организовать прямые закупки юньнаньского кофе. Мы посетили 8 ферм в Баошане и Пуэре, провели каппинг-сессии и связали их с кооперативом, производящим спешелти-кофе на 84 балла по цене на 40% ниже, чем у их предыдущего колумбийского поставщика.",
      "seoKeywords": [
        "закупки продуктов питания в Китае",
        "прямые закупки кофе из Юньнани",
        "поставщик китайского чая для импорта",
        "проверка органических продуктов питания в Китае",
      ],
    },
    "monopoly-towns": {
      "name": "Монопольные фабричные города",
      "description": "Гиперспециализированные производственные города Китая доминируют в мировом производстве определённых товаров. Мы ориентируемся в этих скрытых цепочках поставок.",
      "heroCopy": "Где-то в Китае один город, вероятно, производит 50%+ мирового предложения вашего продукта. Эти монопольные фабричные города предлагают непревзойдённую экспертизу и цены — если знать, где искать.",
      "keyRegions": [
        { "name": "Чжуцзи, Чжэцзян", "description": "Производит 1/3 мировых носков. Также крупный центр обработки жемчуга." },
        { "name": "Дунъян, Чжэцзян", "description": "80%+ мировых фишек для маджонга и доминирующая доля магнитных игрушек." },
        { "name": "Юнкан, Чжэцзян", "description": "Столица метизов — электроинструменты, дверная фурнитура, кухонная утварь и термосы." },
        { "name": "Тайчжоу, Чжэцзян", "description": "Столица изготовления пресс-форм и литья пластмасс под давлением. Также крупный кластер автозапчастей." },
      ],
      "whatWeAudit": [
        "Глубина специализации продукта и производственная экспертиза",
        "Эффективность производства по сравнению с универсальными фабриками",
        "Закупки сырья и структура затрат",
        "Стабильность качества в масштабе",
        "Экспортный опыт и международное соответствие",
        "Фабрики под управлением владельцев против управляемых наёмными менеджерами",
      ],
      "caseSummary": "Европейский бренд кухонной утвари хотел термосы из нержавеющей стали. Обычные фабрики предлагали $4,20/ед. Мы отвезли их в Юнкан, столицу термосов, где специализированные фабрики с автоматизированными производственными линиями предложили $2,80/ед. с лучшим качеством — экономия 33% на заказе в 50 000 единиц.",
      "seoKeywords": [
        "специализированные фабричные города Китая",
        "руководство по производственным кластерам Китая",
        "закупки на фабрике носков в Чжуцзи",
        "производитель метизов в Юнкане",
      ],
    },
    "canton-fair": {
      "name": "Кантонская ярмарка",
      "description": "Максимизируйте отдачу от Кантонской ярмарки с предварительно проверенными списками экспонентов, запланированными встречами на стендах и координацией визитов на фабрики.",
      "heroCopy": "Кантонская ярмарка — крупнейшая в мире торговая выставка с 25 000+ экспонентов на 1,18 миллиона квадратных метров. Большинство посетителей тратят 60% времени в неправильных залах. Мы это исправляем.",
      "keyRegions": [
        { "name": "Фаза 1 (15-19 апр/окт)", "description": "Электроника, бытовые электроприборы, оборудование, метизы, новая энергетика." },
        { "name": "Фаза 2 (23-27 апр/окт)", "description": "Потребительские товары, подарки, домашний декор, строительные материалы." },
        { "name": "Фаза 3 (31 окт/апр - 4 ноя/мая)", "description": "Текстиль, одежда, обувь, офисные принадлежности, сумки и чемоданы, продукты питания." },
      ],
      "whatWeAudit": [
        "Предварительная проверка биографии экспонентов",
        "Оценка возможностей поставщиков на стендах",
        "Проверка связи экспонента с фабрикой",
        "Документирование переговоров о ценах в реальном времени",
        "Координация визитов на фабрики после ярмарки",
        "Сравнение и отбор поставщиков",
      ],
      "caseSummary": "Канадский импортёр впервые посетил Кантонскую ярмарку в 2025 году с нашим сервисом Навигатор. Мы предварительно проверили 300+ экспонентов, запланировали 45 встреч на стендах за 5 дней и организовали визиты на фабрики к 6 лучшим кандидатам. Они разместили заказы у 3 новых поставщиков и сэкономили примерно 4 дня бесцельного хождения по залам.",
      "seoKeywords": [
        "руководство по Кантонской ярмарке 2026",
        "услуги агента на Кантонской ярмарке",
        "помощь на торговой выставке в Гуанчжоу",
        "проверка поставщиков на торговой ярмарке в Китае",
      ],
    },
  },
} as const;

export function setIndustryTranslations(locale: Locale, data: TranslationsMap): void {
  translations[locale] = data;
}

function applyTranslation(i: IndustryPage, t: IndustryTranslationOverlay | undefined): IndustryPage {
  if (!t) return i;
  return {
    ...i,
    name: t.name ?? i.name,
    description: t.description ?? i.description,
    heroCopy: t.heroCopy ?? i.heroCopy,
    keyRegions: t.keyRegions?.map((r, idx) => ({
      name: r.name ?? i.keyRegions[idx]?.name,
      description: r.description ?? i.keyRegions[idx]?.description,
    })) ?? i.keyRegions,
    whatWeAudit: t.whatWeAudit ?? i.whatWeAudit,
    caseSummary: t.caseSummary ?? i.caseSummary,
    seoKeywords: t.seoKeywords ?? i.seoKeywords,
  };
}

export function getIndustries(locale: Locale): IndustryPage[] {
  const overlay = translations[locale] ?? {};
  return baseIndustries.map((i) => applyTranslation(i, overlay[i.slug]));
}

export function getIndustryBySlug(slug: string, locale: Locale): IndustryPage | undefined {
  const overlay = translations[locale] ?? {};
  const base = baseIndustries.find((i) => i.slug === slug);
  if (!base) return undefined;
  return applyTranslation(base, overlay[slug]);
}
