import type { City } from '@/types';

export const cities: City[] = [
  {
    slug: 'shenzhen',
    name: 'Shenzhen',
    region: 'Guangdong',
    subtitle: 'Das Silicon Valley der Hardware — Huaqiangbei, IoT, PCBs',
    description:
      "Shenzhen ist die globale Hauptstadt der Elektronikfertigung. Von Huaqiangbeis legendären Komponentenmärkten bis zu den Fabriken, die IoT-Geräte und Unterhaltungselektronik herstellen, treibt diese Stadt die weltweite Hardware-Lieferkette an.",
    longDescription:
      "Diese Stadt bewegt sich schneller als jeder andere Ort der Welt. Prototypen, die anderswo Wochen dauern, entstehen hier über Nacht. Für Hardware-Startups, Produktmanager und Elektronikimporteure ist Shenzhen nicht nur ein Beschaffungsziel — es ist ein Wettbewerbsvorteil. Unser zweisprachiges Team weiß, welche Fabriken seriös sind, welche Komponentenstände Originalteile führen und wie man ein Fertigungsökosystem navigiert, das jeden anderen Ort langsam erscheinen lässt.",
    industries: ['Elektronik', 'IoT', 'PCB-Fertigung'],
    serviceCount: 4,
    gradient: 'linear-gradient(135deg, #1a3a4a, #2980b9)',
    badge: 'Elektronik',
    categories: ['electronics'],
    highlights: [
      { icon: '🏭', title: 'Zugang zu versteckten Fabriken', description: 'Fabriken, die auf Alibaba oder Handelsplattformen nicht auffindbar sind — entdeckt durch 15 Jahre Branchenbeziehungen in Guangdong.' },
      { icon: '💡', title: 'Komponenten-Kostenaufschlüsselung', description: 'Huaqiangbei-Beschaffung Etage für Etage mit einem Ingenieur, der den Preis jedes Widerstands, jeder Leiterplatte und jedes Steckverbinders kennt.' },
      { icon: '🛡️', title: 'Zertifizierungsprüfung', description: 'CE-, FCC-, RoHS-Konformitätsprüfungen in jeder Fabrik Ihrer Auswahlliste — keine gefälschten Zertifikate, keine Überraschungen.' },
      { icon: '📊', title: 'PCB-Partnerbewertung', description: 'Technische Bewertung von PCB-Fertigungs- und Montagepartnern mit Produktionskapazitätsanalyse und Fehlerraten-Audits.' },
    ],
    suitableFor: [
      'Hardware-Startups mit Prototyping von Elektronik',
      'Importeure von Unterhaltungselektronik',
      'IoT- und Smart-Home-Produktmarken',
      'Unternehmen, die PCB-Montagepartner suchen',
      'Erstmalige China-Beschaffer mit technischen Produkten',
    ],
    notSuitableFor: [
      'Käufer von fertigen Produkten mit geringer Komplexität',
      'Personen, die einen einzelnen Fabrikbesuch suchen',
      'Nicht-Elektronik-Produktkategorien',
      'Erwartungen an Bearbeitung am selben Tag',
    ],
    faq: [
      { question: 'Muss ich Mandarin sprechen?', answer: 'Nein. Unser zweisprachiges Team übernimmt die gesamte Kommunikation mit Fabrikleitung und Komponentenhändlern. Sie konzentrieren sich auf die Bewertung des Produkts.' },
      { question: 'Kann ich Huaqiangbei alleine besuchen?', answer: 'Ja, aber Sie werden sich verlaufen. Huaqiangbei erstreckt sich über mehrere Gebäude mit Tausenden von Ständen. Unser Beschaffungsingenieur weiß genau, welche Etagen und Stände das führen, was Sie brauchen — und spart Ihnen Tage des Herumlaufens.' },
      { question: 'Wie viele Fabriken werden wir besuchen?', answer: 'Typischerweise 5-8 Fabriken über 5 Tage, plus Zeit speziell in Huaqiangbei. Wir prüfen über 50 Kandidaten vorab, bevor wir die Kurzliste auswählen, die Sie tatsächlich besuchen.' },
      { question: 'Können Sie beim Prototyping helfen?', answer: 'Absolut. Wir können Sie mit Rapid-Prototyping-Diensten verbinden, von 3D-gedruckten Gehäusen bis hin zu Kleinserien-PCB-Fertigung und Montage.' },
    ],
  },
  {
    slug: 'guangzhou',
    name: 'Guangzhou',
    region: 'Guangdong',
    subtitle: 'Canton Fair, Zhongda-Stoffmarkt, globales Bekleidungszentrum',
    description:
      "Guangzhou ist Chinas Handels- und Textilhauptstadt. Heimat der Canton Fair und des riesigen Zhongda-Stoffmarktes — hier beschaffen Modemarken, Lederwarendesigner und Multi-Kategorie-Importeure.",
    longDescription:
      "Guangzhou ist Chinas ursprüngliches offenes Tor zum Welthandel. Die zweimal jährlich stattfindende Canton Fair zieht über 200.000 Käufer aus 200 Ländern an, und der Zhongda-Stoffmarkt ist der Ort, an dem Modetrends ihren Anfang nehmen — Tausende von Ständen, die jedes erdenkliche Textil, jede Borte und jedes Accessoire verkaufen. Ob Sie eine Modelinie starten oder Konsumgüter über Kategorien hinweg beschaffen — Guangzhous Lieferketteninfrastruktur ist unübertroffen.",
    industries: ['Textil', 'Bekleidung', 'Lederwaren', 'Handel'],
    serviceCount: 3,
    gradient: 'linear-gradient(135deg, #3d1f5e, #8e44ad)',
    badge: 'Textil & Handel',
    categories: ['textile', 'consumer'],
    highlights: [
      { icon: '🏛️', title: 'Canton Fair-Navigation', description: 'Überspringen Sie das Chaos. Wir prüfen Aussteller vorab, kartieren Ihre Route durch über 60.000 Stände und planen Fabrikbesuche während des Messefensters.' },
      { icon: '🧵', title: 'Zhongda Stoff-Tiefeneinblick', description: 'Etagenweiser Zugang zum weltweit größten Stoffmarkt. Beschaffen Sie Textilien, Borten, Knöpfe, Reißverschlüsse und Accessoires von verifizierten Ständen.' },
      { icon: '👜', title: 'Lederwaren-Cluster', description: 'Zugang zum Lederwaren-Fertigungscluster Guangzhous in den Bezirken Huadu und Baiyun — wo globale Modemarken Handtaschen und Accessoires produzieren.' },
      { icon: '🚢', title: 'Multi-Kategorie-Koordination', description: 'Wenn Sie 5 Produktkategorien in einer Reise benötigen, koordiniert unser Logistikteam in Guangzhou branchenübergreifend ohne Fokusverlust.' },
    ],
    suitableFor: [
      'Modemarken und Bekleidungs-Startups',
      'Lederwaren- und Accessoire-Designer',
      'Multi-Kategorie-Importeure, die die Canton Fair besuchen',
      'Textil- und Stoffgroßhändler',
      'Käufer, die Produkte vor der Bestellung persönlich sehen müssen',
    ],
    notSuitableFor: [
      'Käufer mit ausschließlichem Fokus auf Elektronik',
      'Personen, die nur einen bestimmten Fabrikbesuch benötigen',
      'Enge Zeitpläne von 2-3 Tagen',
    ],
    faq: [
      { question: 'Sollte ich die Canton Fair besuchen?', answer: 'Ja, aber nicht alleine. Mit über 60.000 Ständen ist die Messe überwältigend. Wir prüfen Aussteller vorab und planen Lieferantentermine, damit Sie Zeit mit qualifizierten Fabriken verbringen, nicht mit Herumirren.' },
      { question: 'Wie ist der Zhongda-Stoffmarkt?', answer: 'Er ist riesig — Tausende von Ständen in mehreren Gebäuden, jedes spezialisiert auf verschiedene Textilien, von Seide bis Denim. Wir führen Sie zu den richtigen Ständen für Ihre spezifischen Stoffanforderungen.' },
      { question: 'Kann ich mehrere Produktkategorien in einer Reise beschaffen?', answer: 'Ja. Guangzhous Stärke ist die Multi-Kategorie-Beschaffung. Unsere Multi-Kategorie-Reise deckt Textilien, Leder, Konsumgüter und mehr ab — alles über eine einzige Reiseroute koordiniert.' },
      { question: 'Wie unterscheidet sich Guangzhou von Shenzhen?', answer: 'Shenzhen ist Elektronik. Guangzhou ist alles andere — Textilien, Leder, Konsumgüter und Handel. Die Städte sind 30 Minuten mit dem Hochgeschwindigkeitszug voneinander entfernt, daher sind kombinierte Reisen üblich.' },
    ],
  },
  {
    slug: 'dongguan',
    name: 'Dongguan',
    region: 'Guangdong',
    subtitle: 'Formenbau, CNC-Bearbeitung, Spritzguss',
    description:
      'Dongguan ist der Präzisionsfertigungs-Motor des Perlflussdeltas. Die Stadt zeichnet sich durch Formenbau, CNC-Bearbeitung und Spritzguss aus — und bedient Branchen von der Automobilindustrie bis zur Unterhaltungselektronik.',
    longDescription:
      "Wenn Shenzhen das Gehirn der chinesischen Fertigung ist, dann ist Dongguan die Hände. Hier werden Ideen zu physischen Objekten — wo Präzisionsformen, CNC-gefräste Komponenten und spritzgegossene Teile in großem Maßstab produziert werden. Dongguans Fabriken beliefern globale Marken in den Bereichen Automobil, Medizintechnik und Unterhaltungselektronik. Das Ingenieurtalent hier ist Weltklasse, und die Lieferkette für Rohstoffe ist unmittelbar verfügbar.",
    industries: ['Präzisionsfertigung', 'Formenbau', 'CNC-Bearbeitung'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #1a1a2e, #2c3e50)',
    badge: 'Präzisionsfertigung',
    categories: ['electronics', 'specialty'],
    highlights: [
      { icon: '🔧', title: 'Formenbauer-Prüfung', description: 'Nicht alle Formenbauer sind gleich. Wir bewerten Werkzeugbaubetriebe anhand früherer Projekte, Durchlaufzeiten und Werkstattqualität — nicht nur nach Preisangeboten.' },
      { icon: '⚙️', title: 'CNC-Kapazitätsanalyse', description: 'Vor-Ort-Bewertung der CNC-Maschinenparks: Marken, Alter, Toleranzen und tatsächliche Produktionskapazität (nicht behauptete Kapazität).' },
      { icon: '🏗️', title: 'Spritzguss-Audits', description: 'Produktionsflächen-Rundgänge in Spritzgießereien mit Prüfung von Formenwartung, Materialhandhabung und Qualitätskontrollsystemen.' },
      { icon: '📐', title: 'Komponenten-Kostenmodellierung', description: 'Detaillierte Soll-Kosten-Analyse für Präzisionskomponenten, Benchmarking Ihrer Angebote gegen die Fabrikrealität.' },
    ],
    suitableFor: [
      'Hardware-Unternehmen, die kundenspezifische Formen benötigen',
      'Käufer von CNC-gefrästen Komponenten',
      'Importeure von Automobilteilen',
      'Hersteller von Medizingeräten',
      'Käufer von spritzgegossenen Kunststoffprodukten',
    ],
    notSuitableFor: [
      'Käufer von einfachen Standardwaren',
      'Personen ohne technische Produktspezifikationen',
      'Händler, die fertige Konsumgüter suchen',
    ],
    faq: [
      { question: 'Was ist die Mindestbestellmenge für Formen?', answer: 'Das hängt von der Komplexität ab, aber die meisten Formenbaubetriebe in Dongguan können Einfach-Prototypenformen ab etwa $500-$2.000 bearbeiten. Produktionsformen skalieren von dort aus.' },
      { question: 'Wie lange dauert die Herstellung von Formen?', answer: 'Einfache Formen: 10-15 Tage. Komplexe Mehrfachformen: 4-6 Wochen. Eilaufträge sind zu Premium-Preisen möglich.' },
      { question: 'Können Sie bei fertigungsgerechtem Produktdesign (DFM) helfen?', answer: 'Ja. Unsere Beschaffungsingenieure geben DFM-Feedback, bevor der Formenbau beginnt, und erkennen Probleme, die später zu Verzögerungen oder Qualitätsproblemen führen würden.' },
      { question: 'Welche Toleranzen können Dongguan-Fabriken erreichen?', answer: 'Spitzenbetriebe erreichen ±0,005mm. Wir überprüfen Toleranzangaben vor Ort mit Messgeräten, nicht nur aus Datenblättern.' },
    ],
  },
  {
    slug: 'yiwu',
    name: 'Yiwu',
    region: 'Zhejiang',
    subtitle: "Weltweit größter Großhandelsmarkt — 75.000+ Stände",
    description:
      "Die Yiwu International Trade City erstreckt sich über 4 Millionen Quadratmeter mit über 75.000 Ständen. Es ist der weltweit größte Großhandelsmarkt für Konsumgüter — von Spielzeug und Geschenken bis zu Wohnaccessoires und Saisonartikeln.",
    longDescription:
      "Wenn es in einem Ramschladen, Geschenkeladen oder Supermarktregal verkauft wird, ist es wahrscheinlich durch Yiwu gegangen. Dieser einzelne Markt deckt 26 Produktkategorien in 5 miteinander verbundenen Bezirken ab — es würde 5 Monate dauern, um nur 1 Minute an jedem Stand zu verbringen. Für Importeure von Konsumgütern, Saisonartikeln, Spielzeug, Schmuck und Haushaltsprodukten ist Yiwu nicht optional — es ist der Ausgangspunkt. Die Herausforderung besteht nicht darin, Produkte zu finden, sondern darin, Qualitätslieferanten unter 75.000 Optionen zu finden.",
    industries: ['Konsumgüter', 'Massenwaren', 'Großhandel'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #7a3800, #e67e22)',
    badge: 'Massenwaren',
    categories: ['consumer'],
    highlights: [
      { icon: '🏬', title: 'Bezirksweise Route', description: 'Vorgeplante Route durch die 5 Bezirke, die nur die Stände ansteuert, die Ihren Produktkategorien entsprechen. Kein zielloses Herumlaufen.' },
      { icon: '📦', title: 'Lieferanten-Vorprüfung', description: 'Wir prüfen Standbesitzer, bevor Sie ankommen — mit Überprüfung von Exportlizenzen, Fabrikzertifizierungen und Handelshistorie, damit Sie nur qualifizierte Verkäufer treffen.' },
      { icon: '💰', title: 'Preis-Benchmarking', description: 'Echtzeit-Preisvergleich über mehrere Stände für dasselbe Produkt, um sicherzustellen, dass Sie den echten Großhandelspreis erhalten, nicht den Ausländerpreis.' },
      { icon: '🔍', title: 'Fabrik hinter dem Stand', description: "Der Stand ist nur ein Schauraum. Wir arrangieren Besuche bei den tatsächlichen Fabriken hinter den Ständen — wo Sie echte Produktionskapazität sehen." },
    ],
    suitableFor: [
      'Käufer von Ramsch- und Discount-Einzelhandelswaren',
      'Amazon- und E-Commerce-Verkäufer',
      'Importeure von Geschenk- und Werbeartikeln',
      'Käufer von Saison- und Feiertagsprodukten',
      'Importeure von Wohnaccessoires und Küchenwaren',
    ],
    notSuitableFor: [
      'Käufer von hochtechnischen Produkten',
      'Personen, die kundenspezifische Fertigung benötigen (besuchen Sie Fabriken, nicht den Markt)',
      'Einzel-SKU-Käufer mit großen Mengen (direkte Fabrikbeschaffung ist günstiger)',
    ],
    faq: [
      { question: 'Wie viele Stände kann ich an einem Tag besuchen?', answer: 'Realistisch gesehen 30-40 Stände, wenn Sie fokussiert sind. Durch unsere Vorprüfung ist jeder besuchte Stand relevant — Sie verschwenden keine Zeit mit Sackgassen.' },
      { question: 'Sind Yiwu-Lieferanten die tatsächlichen Hersteller?', answer: 'Manchmal ja, manchmal nein. Viele Stände sind Handelsunternehmen. Wir überprüfen das Fabrikeigentum und arrangieren separate Fabrikbesuche für ernsthafte Käufer.' },
      { question: 'Wie funktionieren MOQs in Yiwu?', answer: 'MOQs in Yiwu sind im Allgemeinen niedriger als direkt bei Fabriken. Viele Stände beginnen bei 500-1.000 Einheiten pro SKU. Kundenspezifische Verpackung und Branding erfordern in der Regel höhere MOQs.' },
      { question: 'Ist es besser, in Yiwu zu beschaffen oder direkt zu Fabriken zu gehen?', answer: 'Yiwu eignet sich am besten für Vielfalt und Tests mit niedrigen MOQs. Wenn Sie 10.000+ Einheiten eines Produkts bestellen, ist direkt bei der Fabrik in der Regel günstiger. Wir helfen Ihnen bei der Entscheidung.' },
    ],
  },
  {
    slug: 'foshan',
    name: 'Foshan',
    region: 'Guangdong',
    subtitle: "Globale Möbelhauptstadt — Lecongs 3 Mio. qm Markt",
    description:
      "Foshan produziert 70 % der chinesischen Möbelexporte. Der Lecong-Möbelgroßhandelsmarkt erstreckt sich über 3 Millionen Quadratmeter in über 180 Showroom-Gebäuden — der größte Möbelmarkt der Welt.",
    longDescription:
      "Foshan ist nicht nur eine Möbelstadt — es ist die Möbelstadt. Jede große internationale Möbelmarke bezieht Komponenten oder Fertigprodukte von hier. Allein der Lecong-Markt hat über 180 Showroom-Gebäude, die sich über 5 Kilometer erstrecken und alles von $50-Flachpack-Schreibtischen bis zu $50.000-Luxussofas zeigen. Jenseits der Showrooms produzieren Tausende von Fabriken Möbel, Leuchten, Keramik und Wohnaccessoires. Wenn es in ein Zuhause gehört, stellt Foshan es her.",
    industries: ['Möbel', 'Wohnaccessoires', 'Innenarchitektur'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #641e16, #c0392b)',
    badge: 'Möbel',
    categories: ['furniture'],
    highlights: [
      { icon: '🪑', title: 'Lecong-Markt-Meisterschaft', description: 'Überspringen Sie die Touristenfallen. Wir bringen Sie zu Showrooms, die Ihrem Preisniveau, Stil und Qualitätsanforderungen entsprechen — über 180+ Gebäude hinweg.' },
      { icon: '🪵', title: 'Material- & Oberflächenprüfung', description: 'Vor-Ort-Inspektion von Holzarten, Verbindungen, Oberflächen und Beschlägen — um sicherzustellen, dass das, was Sie bestellen, auch geliefert wird.' },
      { icon: '🏗️', title: 'Fabrikflächen-Audits', description: 'Besuche hinter den Showrooms in Produktionseinrichtungen: Kapazitätsprüfungen, Qualitätskontrollsysteme und Exportverpackungsstandards.' },
      { icon: '🚚', title: 'Fracht- & Logistikplanung', description: 'Möbelversand ist komplex. Wir verbinden Sie mit spezialisierten Spediteuren, die FCL, LCL und Konsolidierungsversand abwickeln.' },
    ],
    suitableFor: [
      'Möbeleinzelhändler und -importeure',
      'Innenarchitekten und Gastronomieeinkäufer',
      'Wohnaccessoire-Marken und E-Commerce-Verkäufer',
      'Maßmöbel- und OEM-Käufer',
      'Restaurant- und Hotelmöbeleinkäufer',
    ],
    notSuitableFor: [
      'Käufer, die preiswerte Wegwerfmöbel suchen',
      'Personen, die Einzelstücke kaufen möchten (Showrooms verkaufen in Volumen)',
      'Projekte mit extrem knappen Zeitplänen (Maßmöbel benötigen 4-8 Wochen)',
    ],
    faq: [
      { question: 'Wie lange dauern Maßmöbel?', answer: 'Standardproduktion: 4-6 Wochen. Komplexe Sonderanfertigungen: 8-12 Wochen. Eilaufträge zu Premium-Preisen verfügbar. Rechnen Sie 4-6 Wochen für Seefracht hinzu.' },
      { question: 'Können Sie beim Möbeldesign helfen?', answer: 'Ja. Wir arbeiten mit hauseigenen Designern in Foshan-Fabriken, die Ihre Entwürfe anpassen oder neue basierend auf Referenzbildern und Spezifikationen erstellen können.' },
      { question: 'Wie sieht es mit der Qualitätskontrolle für Möbel aus?', answer: 'Wir inspizieren in drei Phasen: Rohmaterialien, während der Produktion und vor dem Versand. Jede Inspektion umfasst Fotos, Messungen und einen detaillierten Bericht.' },
      { question: 'Wie funktioniert der Möbelversand aus China?', answer: 'Die meisten Käufer nutzen FCL (Full Container Load) oder LCL (Less than Container Load) Seefracht. Ein 40HQ-Container fasst etwa 50-60 Stück typischer Möbel. Wir koordinieren die gesamte Logistikkette.' },
    ],
  },
  {
    slug: 'yunnan',
    name: 'Yunnan',
    region: 'Provinz Yunnan',
    subtitle: "95 % des chinesischen Kaffees, Kernland des Pu'er-Tees",
    description:
      "Yunnan produziert 95 % des chinesischen Kaffees und ist die Geburtsstätte des Pu'er-Tees. Von Spezialitätenkaffeefarmen in Baoshan bis zu alten Teeplantagen ist es ein Ursprungsziel für Lebensmittel- und Getränkekäufer.",
    longDescription:
      "Die meisten Menschen denken bei Kaffee nicht an China — aber Yunnan ist der 14. größte Kaffeeproduzent der Welt, und seine Spezialitätenkaffee-Szene explodiert. Dieselbe Provinz ist die spirituelle Heimat des Pu'er-Tees, mit über 1.000 Jahre alten Teebäumen, die immer noch erntefähige Blätter produzieren. Für Lebensmittel- und Getränkekäufer ist Yunnan eine Ursprungsgeschichte, die darauf wartet, entdeckt zu werden — direkte Beziehungen zu Bauern, Verarbeitungseinrichtungen und Exporteuren, die gerade erst beginnen, internationale Märkte zu bedienen.",
    industries: ['Kaffee', 'Tee', 'Landwirtschaft'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #145a32, #27ae60)',
    badge: 'Kaffee & Tee',
    categories: ['food'],
    highlights: [
      { icon: '☕', title: 'Kaffeefarm-Besuche', description: 'Besichtigen Sie Spezialitätenkaffee-Farmen in Baoshan und Pu\'er, treffen Sie Erzeuger, verkosten Sie Mikro-Lots und bewerten Sie Verarbeitungsmethoden von der Kirsche bis zur grünen Bohne.' },
      { icon: '🍵', title: 'Teeplantagen-Beschaffung', description: 'Besuchen Sie alte Teegärten und moderne Plantagen. Lernen Sie, Pu\'er, Schwarz- und Grüntee nach Blattqualität, Alter und Verarbeitungstechnik zu bewerten.' },
      { icon: '🏔️', title: 'Verarbeitungsanlagen-Audits', description: 'Inspizieren Sie Waschstationen, Trocknungsterrassen und Mahlanlagen. Überprüfen Sie Bio-Zertifizierungen und Lebensmittelsicherheitsstandards vor Ort.' },
      { icon: '📋', title: 'Direkthandelsbeziehungen', description: 'Überspringen Sie die Zwischenhändler. Wir vermitteln direkte Beziehungen zu Farmkooperativen und Verarbeitern — bessere Preise, bessere Rückverfolgbarkeit.' },
    ],
    suitableFor: [
      'Spezialitätenkaffee-Röster und -Importeure',
      'Teemarken und Teehausbetreiber',
      'Gesundheits- und Superfood-Unternehmen',
      'Käufer, die bio-zertifizierte Produkte suchen',
      'Importeure von Agrar- und Lebensmittelzutaten',
    ],
    notSuitableFor: [
      'Großmengen-Kaffeehändler (gehen Sie nach Brasilien oder Vietnam)',
      'Käufer, die Instant- oder minderwertige Produkte suchen',
      'Personen, die saisonale Erntepläne nicht einhalten können',
    ],
    faq: [
      { question: 'Welche Kaffeesorten wachsen in Yunnan?', answer: 'Hauptsächlich Catimor und verschiedene Arabica-Sorten. Spezialitätenkaffee-Lots (80+ Punkte) sind zunehmend verfügbar, da sich die Verarbeitungsmethoden verbessern. Einige Farmen produzieren jetzt Gesha und andere Premium-Sorten.' },
      { question: 'Wann ist Erntesaison?', answer: 'Kaffee: November bis März. Frühlingstee: März bis Mai. Herbsttee: September bis Oktober. Wir empfehlen einen Besuch während der Ernte, um die Verarbeitung in Aktion zu sehen.' },
      { question: 'Wie exportiere ich Kaffee oder Tee aus China?', answer: 'Wir verbinden Sie mit lizenzierten Exportagenten, die Pflanzengesundheitszeugnisse, Zolldokumentation und Spedition abwickeln. Der Prozess ist unkompliziert, sobald Sie Lieferantenbeziehungen haben.' },
      { question: 'Kann ich eine kombinierte Kaffee- und Tee-Beschaffungsreise machen?', answer: 'Ja. Unsere 5-tägige Yunnan-Reise deckt beides ab — Kaffeefarmen in Baoshan/Pu\'er und Teeplantagen in denselben Regionen, mit koordinierter Reise, um Ihre Zeit vor Ort zu maximieren.' },
    ],
  },
  {
    slug: 'shaoxing',
    name: 'Shaoxing',
    region: 'Zhejiang',
    subtitle: "Weltweit größter Stoffmarkt — 30.000+ Stände",
    description:
      "Shaoxings Keqiao-Bezirk ist der weltweit größte Stoffgroßhandelsmarkt mit über 30.000 Ständen. Es ist die erste Anlaufstelle für Textilimporteure, Modemarken und Heimtextilunternehmen.",
    longDescription:
      "Bevor ein Kleidungsstück zum Kleidungsstück wird, kommt der Stoff aus Shaoxing. Der Keqiao-Markt (China Textile City) ist der Ort, an dem Modemarken, Stoffgroßhändler und Bekleidungshersteller ihre Rohmaterialien beschaffen — von einfacher Baumwolle und Polyester bis zu hochwertigen Seiden, Jacquards und technischen Textilien. Mit über 30.000 nach Stoffart organisierten Ständen ist es das effizienteste Textilbeschaffungsziel der Welt. Das Umland beherbergt auch Färberei-, Druckerei- und Veredelungsbetriebe.",
    industries: ['Textil', 'Stoff', 'Bekleidungsfertigung'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #4a235a, #af7ac5)',
    badge: 'Textil',
    categories: ['textile'],
    highlights: [
      { icon: '🧶', title: 'Stoffmarkt-Navigation', description: 'Navigieren Sie effizient durch 30.000+ Stände. Wir identifizieren vor Ihrer Ankunft Lieferanten, die Ihrem Stofftyp, Gewicht, Zusammensetzung und Preisniveau entsprechen.' },
      { icon: '🎨', title: 'Farb- & Ausrüstungsabgleich', description: 'Vor-Ort-Farbabgleich, Griffbewertung und Ausrüstungsbewertung. Wir sammeln Stoffmuster und arrangieren Lab-Dip-Tests.' },
      { icon: '🏭', title: 'Mühlen- & Veredelungsaudits', description: 'Fabrikbesuche in Webereien, Färbereien und Veredelungsbetrieben. Überprüfung von Produktionskapazität, Qualitätssystemen und Umwelt-Compliance.' },
      { icon: '📏', title: 'Qualitäts- & Compliance-Tests', description: 'Vermittlung von externen Tests für Farbechtheit, Einlaufen, Reißfestigkeit und chemische Konformität (OEKO-TEX, REACH) in akkreditierten Laboren.' },
    ],
    suitableFor: [
      'Modemarken und Bekleidungshersteller',
      'Stoffgroßhändler und -händler',
      'Heimtextil- und Bettwäscheunternehmen',
      'Käufer von technischen und Funktionsstoffen',
      'Käufer, die kundenspezifische Färbung und Druck suchen',
    ],
    notSuitableFor: [
      'Käufer, die fertige Kleidungsstücke suchen (gehen Sie nach Guangzhou)',
      'Personen, die Stoffqualität nicht durch Anfassen bewerten können',
      'Kleinstmengenkäufer (die meisten Mühlen haben MOQs von 1.000+ Metern)',
    ],
    faq: [
      { question: 'Was ist die Mindestbestellmenge (MOQ) für Stoffe?', answer: 'Typischerweise 1.000-3.000 Meter pro Farbe für Gewebe, 500-1.000 kg für Gestricke. Einige Stände bieten Mustermengen (10-50 Meter) zu höheren Preisen pro Meter an.' },
      { question: 'Kann ich kundenspezifische Farben und Drucke erhalten?', answer: 'Ja. Lab Dips für Farbabgleich dauern 3-5 Tage. Kundenspezifische Drucke erfordern Sieb- oder Digitaldruck-Einrichtung — Vorlaufzeiten variieren von 7-15 Tagen für Bemusterung.' },
      { question: 'Wie überprüfe ich die Stoffzusammensetzung?', answer: 'Wir arrangieren Brenntests und externe Labortests zur Überprüfung des Fasergehalts. Zertifizierungen (OEKO-TEX, GOTS) werden anhand von Fabrikaufzeichnungen überprüft.' },
      { question: 'Was ist der Unterschied zwischen Keqiao und Zhongda (Guangzhou)?', answer: 'Keqiao ist direkt bei der Mühle — Sie kaufen von Stoffproduzenten. Zhongda ist ein Großhandelsmarkt für Bekleidungshersteller. Keqiao hat niedrigere Preise und bessere Konsistenz; Zhongda hat mehr Vielfalt und niedrigere MOQs.' },
    ],
  },
  {
    slug: 'yongkang',
    name: 'Yongkang',
    region: 'Zhejiang',
    subtitle: 'Hardware-Hauptstadt — Thermoskannen, Elektrowerkzeuge, Küchenwaren',
    description:
      "Yongkang ist Chinas Hardware-Hauptstadt und dominiert die globale Produktion von Thermoskannen, Elektrowerkzeugen, Küchenwaren und Türbeschlägen. Es ist eine klassische chinesische Monopol-Fabrikstadt.",
    longDescription:
      "Yongkang ist die Definition einer chinesischen Monopol-Fabrikstadt — eine einzelne Stadt, die die globale Produktion bestimmter Produktkategorien dominiert. Wenn Sie jemals eine Edelstahl-Thermoskanne benutzt haben, kam sie wahrscheinlich aus Yongkang. Gleiches gilt für viele Elektrowerkzeuge, antihaftbeschichtete Pfannen und Türschlösser. Die gesamte Lieferkette — vom Rohstahl bis zur fertigen Verpackung — existiert innerhalb eines Radius von 20 Kilometern. Diese Konzentration schafft Effizienz- und Preisvorteile, die anderswo unmöglich zu erreichen sind.",
    industries: ['Hardware', 'Küchenwaren', 'Elektrowerkzeuge'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #2c3e50, #34495e)',
    badge: 'Hardware',
    categories: ['specialty'],
    highlights: [
      { icon: '🔩', title: 'Lieferkettenkonzentration', description: 'Jede Komponente — Stahl, Dichtungen, Kunststoffteile, Verpackung — wird innerhalb von 20 km hergestellt. Das bedeutet schnellere Muster, niedrigere Materialkosten und sofortige Lieferkettentransparenz.' },
      { icon: '🫖', title: 'Thermoskannen & Vakuumflaschen', description: 'Besuchen Sie Fabriken, die 80 % der weltweiten Vakuumflaschen produzieren. Bewerten Sie Isolationsleistung, Deckelmechanismen und kundenspezifische Branding-Optionen.' },
      { icon: '🔨', title: 'Elektrowerkzeug-Fabriken', description: 'Bewerten Sie Fabriken, die Winkelschleifer, Bohrmaschinen und Sägen herstellen. Vergleichen Sie OEM- vs. ODM-Fähigkeiten, Motorqualität und Sicherheitszertifizierungen.' },
      { icon: '🍳', title: 'Küchenwaren-Produktion', description: 'Antihaftbeschichtungs-Inspektion, Materialstärkenprüfung und Wärmeverteilungstests in Kochgeschirrfabriken, die globale Marken beliefern.' },
    ],
    suitableFor: [
      'Baumarkt- und Heimwerker-Einzelhändler',
      'Küchen- und Haushaltswarenmarken',
      'Elektrowerkzeug-Importeure und -Händler',
      'Werbeartikelunternehmen',
      'Käufer, die Handelsmarken-Fertigung suchen',
    ],
    notSuitableFor: [
      'Käufer von High-End-Premiummarken (die meisten Fabriken konzentrieren sich auf Volumen)',
      'Käufer, die UL/ETL-Zertifizierung benötigen (Fabrik für Fabrik prüfen)',
      'Personen, die extrem kundenspezifische Einzelstück-Designs suchen (Formen sind teuer)',
    ],
    faq: [
      { question: 'Sind Yongkang-Fabriken von guter Qualität?', answer: 'Die Qualität variiert enorm. Wir trennen Tier-1-Fabriken (beliefern globale Marken) von Tier-3-Werkstätten (nur lokaler Markt). Unsere Audits konzentrieren sich auf Fabriken mit exporttauglichen Qualitätssystemen.' },
      { question: 'Welche Zertifizierungen kann ich erwarten?', answer: 'Viele Top-Fabriken haben ISO 9001, BSCI und produktspezifische Zertifikate wie LFGB (Lebensmittelkontakt) oder GS (deutsche Sicherheit). Wir überprüfen alle Zertifizierungen vor Ort.' },
      { question: 'Welche MOQs sind typisch?', answer: 'Thermoskannen: 1.000-3.000 Einheiten pro SKU. Elektrowerkzeuge: 500-1.000 Einheiten. Küchenwaren: 2.000+ Einheiten. Kundenspezifischer Logo-Druck beginnt normalerweise bei 1.000 Einheiten.' },
      { question: 'Kann ich Yongkang mit einem Yiwu-Besuch kombinieren?', answer: 'Auf jeden Fall. Yongkang ist nur 1,5 Stunden mit dem Auto von Yiwu entfernt. Viele Käufer besuchen Yiwu für Vielfalt und Yongkang für fabrikdirekte Hardware und Küchenwaren.' },
    ],
  },
  {
    slug: 'ningxia',
    name: 'Ningxia',
    region: 'Provinz Ningxia',
    subtitle: 'Goji-Beeren-Hauptstadt & aufstrebende Weinregion',
    description:
      "Ningxia ist Chinas Goji-Beeren-Hauptstadt und seine aufregendste Weinregion. Besuchen Sie Bio-Goji-Farmen, Verarbeitungseinrichtungen und preisgekrönte Weingüter, die international anerkannte Jahrgänge produzieren.",
    longDescription:
      "Ningxia ist Chinas bestgehütetes Geheimnis im Bereich Lebensmittel und Getränke. Die Ausläufer des Helan-Gebirges produzieren Weine, die internationale Wettbewerbe gewinnen — Decanter-Auszeichnungen, nicht nur inländisches Lob. Unterdessen produziert der Kreis Zhongning die überwiegende Mehrheit der weltweiten Goji-Beeren, wobei Bio- und EU-zertifizierte Farmen schnell expandieren. Für Gesundheitsmarken, Weinimporteure und Superfood-Unternehmen bietet Ningxia Ursprungspreise und direkte Farm-zu-Marke-Beziehungen, die über Zwischenhändler nicht möglich sind.",
    industries: ['Superfoods', 'Wein', 'Landwirtschaft'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #7d6608, #d4a853)',
    badge: 'Superfoods',
    categories: ['food'],
    highlights: [
      { icon: '🍷', title: 'Weingut-Touren & Verkostung', description: 'Besuchen Sie preisgekrönte Weingüter in den Ausläufern des Helan-Gebirges. Verkosten Sie Jahrgänge, besichtigen Sie Keller und verhandeln Sie direkte Importvereinbarungen mit Produzenten.' },
      { icon: '🫐', title: 'Goji-Farm-Beschaffung', description: 'Besichtigen Sie Bio-Goji-Farmen in Zhongning, bewerten Sie Trocknungs- und Verarbeitungsmethoden und überprüfen Sie EU-Bio- und Lebensmittelsicherheitszertifizierungen.' },
      { icon: '🧪', title: 'Verarbeitung & Test', description: 'Inspizieren Sie Gefriertrocknungs-, Sprühtrocknungs- und Sortieranlagen. Vermitteln Sie externe Labortests auf Pestizidrückstände und Schwermetalle.' },
      { icon: '📦', title: 'Exportfertige Verpackung', description: 'Beschaffen Sie in handelsfertiger Verpackung oder Großformat. Ningxia-Lieferanten bieten zunehmend White-Label- und Handelsmarken-Optionen für internationale Märkte an.' },
    ],
    suitableFor: [
      'Spezialitätenwein-Importeure und -Händler',
      'Gesundheits- und Superfood-Marken',
      'Bio-Produkt-Unternehmen',
      'Tee- und Kräuterprodukt-Käufer',
      'Käufer, die EU-/US-Bio-zertifizierte Produkte suchen',
    ],
    notSuitableFor: [
      'Massenmarkt-Weinkäufer (Ningxia ist Boutique, nicht Massenware)',
      'Käufer, die sofortige Lieferung suchen (Landwirtschaft folgt Erntezyklen)',
      'Personen, die ganzjährig frische Produkte benötigen (Goji ist saisonal)',
    ],
    faq: [
      { question: 'Ist Ningxia-Wein wirklich gut?', answer: "Ja — und wird jedes Jahr besser. Ningxia-Weine haben mehrere Decanter World Wine Awards und International Wine Challenge-Medaillen gewonnen. Die Region wird oft als Chinas Napa Valley bezeichnet." },
      { question: 'Wann ist die beste Reisezeit?', answer: 'Goji-Ernte: Juli bis September. Weinernte: September bis Oktober. Der Frühling (April-Mai) ist angenehm für allgemeine Beschaffungsreisen, wenn beide Branchen aktiv sind.' },
      { question: 'Welche Zertifizierungen sind verfügbar?', answer: 'Viele Ningxia-Farmen haben EU-Bio-, USDA-Bio- und China Green Food-Zertifizierungen. Wir überprüfen Zertifikate vor Ort und vermitteln externe Tests bei Bedenken.' },
      { question: 'Wie funktioniert die Goji-Beeren-Preisgestaltung?', answer: 'Die Preisgestaltung hängt von der Sorte (Größe, Farbe, Trocknungsmethode), Bio-Zertifizierung und Menge ab. Direkte Farmpreise sind typischerweise 40-60 % niedriger als das, was Sie über ein Handelsunternehmen zahlen würden.' },
    ],
  },
  {
    slug: 'sichuan-chongqing',
    name: 'Sichuan / Chongqing',
    region: 'Sichuan & Chongqing',
    subtitle: 'Pfeffer, Saten, Hotpot-Grundlagen — Geschmacksmotor der chinesischen Küche',
    description:
      "Die Region Sichuan-Chongqing ist der Geschmacksmotor der chinesischen Küche. Von erstklassigen Sichuan-Pfefferkörnern bis zu fermentierten Bohnenpasten und Hotpot-Grundlagen ist sie die Quelle für authentische asiatische Lebensmittelzutaten.",
    longDescription:
      "Diese Region produziert nicht nur Lebensmittel — sie produziert Geschmack. Sichuan-Pfefferkörner aus Hanyuan sind die begehrtesten der Welt und erzielen Premium-Preise auf globalen Spezialitätenmärkten. Pixian Doubanjiang (fermentierte Saubohnenpaste) ist die Seele der Sichuan-Küche, jahrelang in Tontöpfen gereift. Chongqings Hotpot-Grundlagen-Industrie allein ist Milliarden wert. Für Lebensmittelimporteure, Restaurantlieferanten und Spezialitätenmarken bietet diese Region Zutaten mit geschützter Ursprungsbezeichnung, die echte Authentizität tragen — keine fabrikgefertigten Imitationen.",
    industries: ['Gewürze', 'Saueen', 'Lebensmittelzutaten'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #a93226, #e74c3c)',
    badge: 'Gewürzroute',
    categories: ['food'],
    highlights: [
      { icon: '🌶️', title: 'Pfefferkorn-Ursprungsbeschaffung', description: 'Besuchen Sie Hanyuan-Pfefferkornfarmen. Lernen Sie, Sichuan-Pfeffer nach Betäubungsintensität, Aroma und Samengehalt zu bewerten — und kaufen Sie direkt von Erzeugern.' },
      { icon: '🫘', title: 'Doubanjiang-Fermentation', description: 'Besichtigen Sie traditionelle Doubanjiang-Werkstätten, in denen Bohnenpaste 1-3 Jahre in Tontöpfen reift. Überprüfen Sie Produktionsmethoden und arrangieren Sie Exportverpackungen.' },
      { icon: '🍲', title: 'Hotpot-Grundlagen-Herstellung', description: 'Inspizieren Sie Hotpot-Grundlagen-Fabriken, die für Restaurantketten weltweit produzieren. Bewerten Sie Gewürzmischungen, Ölqualität und Haltbarkeitstestverfahren.' },
      { icon: '🧄', title: 'Spezialsauce-Produktion', description: 'Beschaffen Sie Chili-Öle, eingelegtes Gemüse, fermentierten Tofu und regionale Saueen. Fabrikaudits mit Fokus auf Lebensmittelsicherheit und HACCP-Compliance.' },
    ],
    suitableFor: [
      'Importeure von asiatischen Lebensmitteln und Spezialitäten',
      'Restaurantketten und Food-Service-Einkäufer',
      'Hotpot-Restaurantbetreiber',
      'Sauce- und Würzmittelmarken',
      'Handelsmarken-Unternehmen für asiatische Lebensmittel',
    ],
    notSuitableFor: [
      'Käufer, die fade, massenmarktorientierte Produkte suchen',
      'Personen, die scharfe Lebensmittelverkostungen nicht vertragen',
      'Käufer, die EU-Bio-Zertifizierung suchen (selten in dieser Region)',
    ],
    faq: [
      { question: 'Was macht Sichuan-Pfeffer besonders?', answer: 'Es ist eigentlich kein Pfeffer — es ist die Schale des Stacheleschenbaums, die ein einzigartiges Betäubungsgefühl (má) erzeugt, das grundlegend für die Sichuan-Küche ist. Die Qualität variiert enorm nach Region, Erntezeit und Verarbeitung.' },
      { question: 'Kann ich Doubanjiang-Fabriken besuchen?', answer: 'Ja. Die Pixian-Region hat sowohl Großproduzenten als auch traditionelle Werkstätten. Das beste Doubanjiang wird immer noch auf die alte Art hergestellt — fermentiert in Tontöpfen unter Sonnenlicht für 1-3 Jahre.' },
      { question: 'Welche Exportdokumentation benötigen Lebensmittelprodukte?', answer: 'Typischerweise: Ursprungszeugnis, Gesundheitszeugnis, Pflanzengesundheitszeugnis für pflanzliche Produkte und FDA-Voranmeldung für US-Importe. Wir koordinieren mit lizenzierten Exportagenten.' },
      { question: 'Wie funktioniert die Hotpot-Grundlagen-Lieferkette?', answer: 'Große Marken produzieren in Chongqing und Chengdu. MOQs reichen von 500-2.000 Einheiten für Handelsmarken bis zu 5.000+ für kundenspezifische Formulierungen. Die Haltbarkeit beträgt typischerweise 12-18 Monate.' },
    ],
  },
  {
    slug: 'ningbo',
    name: 'Ningbo',
    region: 'Zhejiang',
    subtitle: 'Kunststoffe, Hardware, Haushaltsgeräte — bedeutender Exporthafen',
    description:
      "Ningbo ist ein bedeutendes Fertigungs- und Exportzentrum, spezialisiert auf Kunststoffe, Hardware und Haushaltsgeräte. Sein Tiefwasserhafen ist einer der verkehrsreichsten der Welt für Containerschifffahrt.",
    longDescription:
      "Der Hafen Ningbo-Zhoushan ist der weltweit verkehrsreichste Hafen nach Frachtumschlag — und die Fertigungsbasis dahinter ist ebenso beeindruckend. Die Stadt und das Umland sind dicht mit Fabriken besetzt, die Kunststoffprodukte, kleine Haushaltsgeräte, Hardware und Autoteile produzieren. Für Importeure bedeutet die Nähe der Fabriken zum Hafen schnelleren Versand, niedrigere Inlandslogistikkosten und ein Fertigungsökosystem, das Exportanforderungen versteht. Ningbo ist auch das Tor zu Dutzenden von spezialisierten Fertigungsstädten der Provinz Zhejiang.",
    industries: ['Kunststoffe', 'Haushaltsgeräte', 'Hardware'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #154360, #2471a3)',
    badge: 'Kunststoffe & Hafen',
    categories: ['specialty'],
    highlights: [
      { icon: '🏗️', title: 'Kunststoff-Fertigungszentrum', description: 'Spritzguss-, Blasform- und Extrusionsfabriken, die alles von Haushaltswaren bis zu Industriekomponenten produzieren.' },
      { icon: '🔌', title: 'Kleine Haushaltsgeräte', description: 'Fabriken, die Mixer, Reiskocher, Wasserkocher und andere kleine Küchengeräte für globale Marken und Handelsmarken herstellen.' },
      { icon: '🚢', title: 'Hafenseitige Logistik', description: 'Fabriken nur Minuten vom weltweit verkehrsreichsten Frachthafen entfernt. Direkte Containerbeladung, konsolidierter Versand und Speditionskoordination.' },
      { icon: '🗺️', title: 'Tor nach Zhejiang', description: 'Ningbo ist die ideale Basis, um die Spezialstädte Zhejiangs zu erkunden — Shaoxing, Yiwu, Yongkang und Zhuji sind alle innerhalb von 2 Stunden erreichbar.' },
    ],
    suitableFor: [
      'Haushaltsgeräte-Importeure und -Marken',
      'Kunststoffprodukt-Käufer',
      'Hardware- und Werkzeughändler',
      'Unternehmen, die hafennahe Lieferanten suchen',
      'Multi-Stadt-Beschaffungsreisen in der Provinz Zhejiang',
    ],
    notSuitableFor: [
      'Käufer, die hochspezialisierte Fertigung suchen (siehe Dongguan oder Shenzhen)',
      'Textil- und Bekleidungskäufer (siehe Shaoxing oder Guangzhou)',
      'Personen, die nur Fabrikbesuche wünschen (wir empfehlen die Kombination mit nahegelegenen Städten)',
    ],
    faq: [
      { question: 'Hat Ningbo eigene Dienstleistungen?', answer: 'Noch nicht — wir nutzen Ningbo derzeit als Logistikzentrum und Tor zu nahegelegenen Fertigungsstädten. Maßgeschneiderte Reisen können auf Anfrage arrangiert werden.' },
      { question: 'Was unterscheidet Ningbo von Shanghai?', answer: 'Ningbos Hafen schlägt mehr Frachtvolumen um, und seine Fertigung konzentriert sich mehr auf Kunststoffe und Hardware. Es liegt auch näher an den spezialisierten Fertigungsstädten Zhejiangs.' },
      { question: 'Kann ich über den Hafen Ningbo versenden?', answer: 'Absolut. Ningbo-Zhoushan ist mit über 600 Häfen in über 200 Ländern verbunden. Wir koordinieren Containerbeladung, Zollabfertigung und Spedition.' },
      { question: 'Sollte ich Ningbo oder Shanghai besuchen?', answer: 'Wenn Sie Kunststoffe, Hardware oder Haushaltsgeräte beschaffen, ist Ningbo näher an den Fabriken. Wenn Sie ein breiteres Spektrum an Dienstleistungen und englischsprachige Infrastruktur benötigen, ist Shanghai bequemer.' },
    ],
  },
  {
    slug: 'zhuji',
    name: 'Zhuji',
    region: 'Zhejiang',
    subtitle: "1/3 der Weltsocken — plus Perlenverarbeitung",
    description:
      "Zhuji ist die Weltsockenhauptstadt und produziert ein Drittel aller Socken weltweit. Es ist auch ein bedeutendes Zentrum für Süßwasserperlenverarbeitung — ein klassisches Beispiel für Chinas hyperspezialisierte Fabrikstädte.",
    longDescription:
      "Zhuji verkörpert die chinesische Fertigungsspezialisierung in ihrer extremsten Form. Allein der Bezirk Datang produziert etwa ein Drittel der Weltsocken — Milliarden Paare jährlich — mit einer integrierten Lieferkette, die beim Garnspinnen beginnt und bei Verpackung und Export endet. Der Shanxiahu-Perlenmarkt ist das weltweit größte Handelszentrum für Süßwasserperlen, wo Perlen sortiert, gebohrt, aufgefädelt und an Schmuckmarken weltweit verkauft werden. In Zhuji findet die gesamte Industrie vom Rohmaterial bis zum fertigen Produkt innerhalb weniger Quadratkilometer statt.",
    industries: ['Socken', 'Strumpfwaren', 'Perlen'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #5b2c6f, #8e44ad)',
    badge: 'Sockenhauptstadt',
    categories: ['specialty', 'textile'],
    highlights: [
      { icon: '🧦', title: 'Sockenproduktion in großem Maßstab', description: 'Gehen Sie durch Datanqs integrierte Sockenlieferkette — vom Garnspinnen und Stricken bis zum Färben, Formen und Verpacken — alles in einer Industriezone.' },
      { icon: '💎', title: 'Süßwasserperlenmarkt', description: 'Besuchen Sie Shanxiahu, den weltweit größten Süßwasserperlenmarkt. Beschaffen Sie lose Perlen, Stränge und fertigen Schmuck direkt von Verarbeitern.' },
      { icon: '🧵', title: 'Spezialisierte Lieferkette', description: 'Alles — Garn, Elastik, Verpackung, Maschinen — wird lokal hergestellt. Diese vertikale Integration bedeutet unübertroffene Effizienz und Reaktionsfähigkeit.' },
      { icon: '📊', title: 'Hyperspezialisiertes Fachwissen', description: "Wenn eine Stadt 30+ Jahre lang eine Sache macht, ist das Fachwissen tief verwurzelt. Zhuijs Sockenfabriken verstehen jede Garnmischung, Stricktechnik und jeden Qualitätsstandard." },
    ],
    suitableFor: [
      'Socken- und Strumpfwarenmarken',
      'Bekleidungs- und Accessoire-Unternehmen',
      'Perlenschmuck-Einzelhändler und -Großhändler',
      'Handelsmarken- und OEM-Käufer',
      'Käufer, die sich für Chinas spezialisierte Fertigungsstädte interessieren',
    ],
    notSuitableFor: [
      'Käufer verschiedener Produktkategorien (Zhuji ist hochspezialisiert)',
      'Personen, die sehr kleine MOQs benötigen (Strumpfwaren-MOQs beginnen bei 1.000+ Paar pro Stil)',
      'Käufer, die Elektronik oder Nicht-Textil-Produkte suchen',
    ],
    faq: [
      { question: 'Hat Zhuji eigene Dienstleistungen?', answer: 'Noch nicht — wir erkunden Zhuji als Teil unserer spezialisierten Fabrikstadt-Abdeckung. Maßgeschneiderte Reisen auf Anfrage verfügbar oder kombiniert mit Yiwu/Yongkang-Besuchen.' },
      { question: 'Welche Arten von Socken kann ich beschaffen?', answer: 'Alles — Sport-, Business-, Freizeit-, Kompressions-, Diabetiker-, Kinder-, Bambusfaser-, Merinowolle-, kundenspezifische Designs. Die Vielfalt ist überwältigend.' },
      { question: 'Welche MOQs sollte ich erwarten?', answer: 'Basissocken: 1.000-3.000 Paar pro Stil/Farbe. Kundenspezifische Designs: 3.000-5.000 Paar. Premium- und Spezialfasern können höhere Mindestmengen haben.' },
      { question: 'Ist die Perlenbeschaffung für kleine Käufer zugänglich?', answer: 'Ja, viel mehr als Sie denken würden. Sie können Stränge ab $5-10 pro Strang im Großhandel kaufen. Lose Perlen für kundenspezifischen Schmuck beginnen bei noch niedrigeren Mengen.' },
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

/** Ordnet Stadt-Slugs den exakten Namen zu, die in service.cities[] für den Abgleich verwendet werden */
const CITY_SERVICE_MATCH: Record<string, string[]> = {
  yunnan: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
  'sichuan-chongqing': ['Chengdu', 'Chongqing'],
  ningxia: ['Yinchuan', 'Zhongwei'],
};

export function getCityServiceMatchNames(slug: string, cityName: string): string[] {
  if (CITY_SERVICE_MATCH[slug]) return CITY_SERVICE_MATCH[slug];
  return [cityName];
}
