import type { FAQItem } from '@/types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Was unterscheidet Ihren Service von Alibaba oder Handelsmessen?',
    answer: 'Alibaba und Handelsmessen zeigen Ihnen, was Lieferanten Ihnen zeigen wollen. Wir zeigen Ihnen die Realität — unbearbeitete Fabrikhallen, echte Produktionskapazität und Managementqualität. Wir besuchen Fabriken, die möglicherweise nicht einmal englischsprachiges Personal haben und nie auf Handelsmessen ausstellen. Sie erhalten unvoreingenommene Informationen aus erster Hand.',
    category: 'Allgemein',
  },
  {
    id: 'faq-2',
    question: 'Muss ich nach China reisen?',
    answer: 'Nein. Unser Standard-Service funktioniert mit Ihnen aus der Ferne. Wir führen die Vor-Ort-Besuche durch, dokumentieren alles und liefern einen umfassenden Bericht. Wir bieten jedoch auch begleitete Reisen an, bei denen Sie mit uns kommen — diese sind beliebt, um direkte Beziehungen zu Fabrikbesitzern aufzubauen.',
    category: 'Allgemein',
  },
  {
    id: 'faq-3',
    question: 'Wie finden Sie Fabriken, die nicht auf Alibaba gelistet sind?',
    answer: 'Wir nutzen eine Kombination von Methoden: chinesischsprachige Handelsdatenbanken, Branchenverbandsverzeichnisse, lokale Unternehmensregister der Regierung, Teilnehmerlisten von Handelsmessen und unser 15-jähriges persönliches Netzwerk. Viele der besten Fabriken listen sich nicht auf englischsprachigen Plattformen.',
    category: 'Methodik',
  },
  {
    id: 'faq-4',
    question: 'Was ist im Due-Diligence-Bericht enthalten?',
    answer: 'Unser Standardbericht (30+ Seiten) enthält: Fabrikprofil und Hintergrundprüfung, Fotos und Videos der Produktionslinie, Bewertung des Qualitätsmanagementsystems, Überblick über die finanzielle Gesundheit, Geräteliste und Fähigkeitsanalyse, Musterbewertung, Preisanalyse und unsere Beschaffungsempfehlung mit Begründung.',
    category: 'Methodik',
  },
  {
    id: 'faq-5',
    question: 'Wie viel kostet eine typische Beschaffungsreise?',
    answer: 'Unsere Servicegebühren liegen zwischen $2.200 und $4.800, je nach Dauer, Standorten und Branchenkomplexität. Dies deckt alle Recherchen, Vor-Ort-Arbeiten und Berichterstattung ab. Ihre Reisekosten (Flüge, Hotels, Mahlzeiten) sind separat. Siehe die einzelnen Serviceseiten für genaue Preise.',
    category: 'Preisgestaltung',
  },
  {
    id: 'faq-6',
    question: 'Garantieren Sie, einen geeigneten Lieferanten zu finden?',
    answer: 'Wir garantieren gründliche Due Diligence und transparente Berichterstattung. Wir können zwar nicht garantieren, dass jede Suche eine perfekte Übereinstimmung findet, aber unsere Kundenzufriedenheitsrate von 98 % spiegelt unsere Fähigkeit wider, entweder geeignete Lieferanten zu finden oder klare, umsetzbare Gründe zu liefern, warum die Suche erfolglos war.',
    category: 'Preisgestaltung',
  },
  {
    id: 'faq-7',
    question: 'Können Sie bei kleinen Bestellungen oder Startups helfen?',
    answer: 'Ja. Viele unserer Kunden sind Startups und kleine Marken. Wir suchen gezielt nach Fabriken, die kleinere MOQs (Mindestbestellmengen) akzeptieren und bereit sind, mit neuen Kunden zu wachsen. Einige unserer Dienstleistungen, wie der Shenzhen Elektronik-Sprint, sind besonders startup-freundlich.',
    category: 'Allgemein',
  },
  {
    id: 'faq-8',
    question: 'Welche Branchen decken Sie ab?',
    answer: 'Wir decken Elektronik, Konsumgüter, Bekleidung und Textilien, Möbel, Lebensmittel und Getränke sowie spezialisierte Fertigung ab. Jede hat eine eigene Serviceseite mit detaillierter Methodik. Wir erstellen auch maßgeschneiderte Routen für einzigartige Anforderungen.',
    category: 'Allgemein',
  },
  {
    id: 'faq-9',
    question: 'Wie gehen Sie mit Sprachbarrieren um?',
    answer: 'Unser gesamtes Team ist zweisprachig (Mandarin/Englisch). Wir übernehmen die gesamte Kommunikation während der Fabrikbesuche und können nach der Reise weiterhin als Vermittler für Verhandlungen und laufende Kommunikation fungieren. Alle Berichte werden auf Englisch geliefert.',
    category: 'Methodik',
  },
  {
    id: 'faq-10',
    question: 'Was passiert nach dem Fabrikbesuch?',
    answer: 'Sie erhalten Ihren Bericht innerhalb von 5 Werktagen. Wir vereinbaren dann ein 1-stündiges Debriefing-Gespräch, um die Ergebnisse und Empfehlungen zu besprechen. Wir bieten 30 Tage Nachbetreuung für die Lieferantenkommunikation und können Folgebesuche, Musterbestellungen oder Vertragsverhandlungen arrangieren.',
    category: 'Prozess',
  },
  {
    id: 'faq-11',
    question: 'Arbeiten Sie auf Provisionsbasis von Fabriken?',
    answer: 'Nein. Wir werden zu 100 % von unseren Kunden bezahlt. Wir akzeptieren keine Provisionen, Kickbacks oder Vermittlungsgebühren von Fabriken. Dies stellt sicher, dass unsere Bewertungen völlig unvoreingenommen sind und unser einziges Interesse darin besteht, den besten Lieferanten für Sie zu finden.',
    category: 'Preisgestaltung',
  },
  {
    id: 'faq-12',
    question: 'Können Sie bei der Qualitätskontrolle nach Produktionsbeginn helfen?',
    answer: 'Ja. Wir bieten fortlaufende Qualitätskontrolldienste an, einschließlich Vorproduktionsinspektionen, Prüfungen während der Produktion und Vorversandinspektionen. Diese sind als Zusatzdienste für Kunden verfügbar, die durch uns Lieferantenbeziehungen aufgebaut haben.',
    category: 'Prozess',
  },
];

export const faqCategories = ['Allgemein', 'Methodik', 'Preisgestaltung', 'Prozess'] as const;
