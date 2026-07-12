import type { Service } from '@/types';

/* ------------------------------------------------------------------ */
/*  Inclusioni comuni per tier (usate come base, personalizzate per    */
/*  ogni servizio)                                                     */
/* ------------------------------------------------------------------ */

const LITE_COMMON = [
  'Shortlist pre-viaggio di fabbriche (5–8 fornitori verificati)',
  'Interprete bilingue + auto privata + collegamento con la supply chain + supervisore della piattaforma',
  'Visite guidate alle fabbriche con presentazioni della direzione',
  'Transfer aeroportuale di andata e ritorno',
  'Riepilogo del viaggio di 10 pagine con profili delle fabbriche e foto',
  'Supporto post-viaggio via WeChat / email per 14 giorni',
];

const STANDARD_COMMON = [
  'Screening approfondito dei fornitori (50+ fabbriche verificate prima del viaggio)',
  'Interprete bilingue + auto privata + collegamento con la supply chain + supervisore della piattaforma',
  'Audit in loco presso 5–8 stabilimenti — foto, video, documentazione CQ',
  'Cena di commiato con collegamento e supervisore',
  'Transfer aeroportuale di andata e ritorno',
  'Report di due diligence di 30–40 pagine — matrice di valutazione fornitori, analisi dei prezzi, valutazione della qualità',
  'Gruppo WeChat dedicato per 30 giorni — supporto alla negoziazione e revisione contrattuale',
];

const PREMIUM_COMMON_WITH_WELCOME = [
  'Screening elite dei fornitori (80–120 fabbriche, controlli creditizi e contenziosi)',
  'Team completo + consulente specialista del settore',
  'Audit in loco presso 8–12 stabilimenti — valutazioni della salute finanziaria e della capacità',
  'Cena di benvenuto + cena di commiato executive con i proprietari delle fabbriche',
  'Transfer aeroportuale di andata e ritorno + veicolo business per l\'intero itinerario',
  'Report approfondito di 50–60 pagine — analisi dei costi, mappa dei rischi, strategia',
  'Supporto prioritario per 60 giorni — linea diretta con il responsabile della supply chain',
  'Consolidamento e spedizione gratuita dei campioni (primi 5 kg)',
];

const PREMIUM_COMMON_NO_WELCOME = [
  'Screening elite dei fornitori (80–120 fabbriche, controlli creditizi e contenziosi)',
  'Team completo + consulente specialista del settore',
  'Audit in loco presso 8–12 stabilimenti — valutazioni della salute finanziaria e della capacità',
  'Cena di commiato executive con i proprietari delle fabbriche',
  'Transfer aeroportuale di andata e ritorno + veicolo business per l\'intero itinerario',
  'Report approfondito di 50–60 pagine — analisi dei costi, mappa dei rischi, strategia',
  'Supporto prioritario per 60 giorni — linea diretta con il responsabile della supply chain',
  'Consolidamento e spedizione gratuita dei campioni (primi 5 kg)',
];

/* Helper – restituisce l\'elenco comune premium corretto in base ai giorni */
function premiumCommon(days: number) {
  return days >= 5 ? PREMIUM_COMMON_WITH_WELCOME : PREMIUM_COMMON_NO_WELCOME;
}

/* ------------------------------------------------------------------ */
/*  Servizi                                                            */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  /* ================================================================ */
  /*  1. Shenzhen Electronics Sprint                                   */
  /* ================================================================ */
  {
    slug: 'shenzhen-electronics-sprint',
    title: 'Shenzhen Electronics Sprint',
    subtitle:
      '5 giorni di immersione totale a Huaqiangbei, fabbriche OEM e l\'ecosistema hardware di Shenzhen',
    category: 'Sprint Elettronica',
    industry: 'electronics',
    location: 'Shenzhen, Guangdong',
    cities: ['Shenzhen'],
    durationDays: 5,
    durationLabel: '5 giorni',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$5,199',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('5–8 fornitori verificati', 'fabbriche di elettronica di Shenzhen accuratamente selezionate')),
          'Breve tour introduttivo del mercato di Huaqiangbei',
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Tour guidato del mercato dei componenti di Huaqiangbei con ingegnere di approvvigionamento',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Report di analisi di reverse engineering PCB',
        ],
      },
    ],
    description:
      'Visita le fabbriche di elettronica di Shenzhen e i mercati di Huaqiangbei con un agente di approvvigionamento esperto. Audit delle fabbriche, verifica dei fornitori e approvvigionamento di componenti nella capitale mondiale dell\'hardware.',
    longDescription:
      'Shenzhen è la capitale mondiale della produzione elettronica. In 5 giorni, ti portiamo dentro le fabbriche che costruiscono di tutto, dai dispositivi IoT all\'elettronica di consumo. Camminerai nei leggendari mercati dei componenti di Huaqiangbei, verificherai potenziali partner produttivi e partirai con una shortlist verificata di fornitori pronti a produrre.',
    whatIsIncluded: [
      'Shortlist dei fornitori pre-viaggio (10-15 fabbriche)',
      'Audit in loco presso 5-8 stabilimenti',
      'Tour guidato del mercato di Huaqiangbei',
      'Raccolta campioni e coordinamento spedizione',
      'Report di due diligence di oltre 30 pagine con foto e video',
      'Supporto post-viaggio per la negoziazione con i fornitori',
    ],
    process: [
      { step: 1, title: 'Brief dei Requisiti', description: 'Documentiamo le specifiche del tuo prodotto, la distinta base, il prezzo target e le esigenze di certificazione.' },
      { step: 2, title: 'Verifica dei Fornitori', description: 'Il nostro team esamina oltre 50 fabbriche utilizzando dati commerciali, certificazioni e revisioni dei campioni per creare una shortlist.' },
      { step: 3, title: 'Sprint in Loco', description: '5 giorni di visite consecutive alle fabbriche, ispezioni delle linee di produzione e colloqui con la direzione.' },
      { step: 4, title: 'Immersione a Huaqiangbei', description: 'Approvvigionamento di componenti nel più grande mercato di elettronica al mondo con un ingegnere specializzato.' },
      { step: 5, title: 'Report e Consegna', description: 'Report dettagliato con classifiche dei fornitori, analisi dei prezzi e supporto alla negoziazione contrattuale.' },
    ],
    highlights: [
      'Accesso a fabbriche non reperibili su Alibaba',
      'Analisi dei costi a livello di componente',
      'Valutazione dei partner di produzione PCB',
      'Verifica della conformità alle certificazioni (CE, FCC, RoHS)',
    ],
    suitableFor: [
      'Startup hardware che realizzano prototipi di elettronica',
      'Importatori di elettronica di consumo',
      'Marchi IoT / smart home',
      'Aziende che necessitano di partner per l\'assemblaggio PCB',
    ],
    notSuitableFor: [
      'Acquirenti di prodotti finiti a bassa complessità',
      'Chi cerca una singola visita in fabbrica (questo è uno sprint)',
    ],
    seoKeywords: [
      'audit fabbrica elettronica Shenzhen',
      'guida approvvigionamento Huaqiangbei',
      'visita produzione elettronica Cina',
      'verifica fornitore PCB Shenzhen',
      'agente approvvigionamento elettronica Cina',
    ],
    faq: [
      { question: 'Devo parlare mandarino?', answer: 'No. Il nostro team bilingue gestisce tutte le comunicazioni. Interpretiamo durante le riunioni e traduciamo tutti i documenti.' },
      { question: 'Potete aiutare con MOQ ridotti?', answer: 'Sì. Shenzhen ha molte fabbriche che accettano piccoli lotti (100-500 unità). Le selezioniamo specificamente per le startup.' },
      { question: 'Quali certificazioni potete verificare?', answer: 'Verifichiamo CE, FCC, RoHS, UL, ISO 9001 e altre certificazioni comuni. Possiamo anche verificare le certificazioni specifiche delle fabbriche in loco.' },
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
      '5 giorni di due diligence su hardware industriale, stampi e produzione di precisione',
    category: 'Audit Hardware',
    industry: 'electronics',
    location: 'Shenzhen & Dongguan, Guangdong',
    cities: ['Shenzhen', 'Dongguan'],
    durationDays: 5,
    durationLabel: '5 giorni',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Visite approfondite a stabilimenti di stampi e lavorazioni CNC',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Analisi del flusso dello stampo e valutazione della tracciabilità dei materiali',
        ],
      },
    ],
    description:
      'Verifica i fornitori di produzione di precisione, stampi e hardware industriale tra Shenzhen e Dongguan. Ispezioni dettagliate degli stabilimenti e controlli della salute finanziaria.',
    longDescription:
      'Il corridoio Shenzhen-Dongguan è la spina dorsale della produzione di precisione cinese. Dagli stampi a iniezione alla lavorazione CNC, questo audit di 5 giorni copre la supply chain dell\'hardware industriale. Ispezioniamo le fabbriche, esaminiamo i sistemi di qualità e verifichiamo la salute finanziaria affinché tu possa approvvigionarti con fiducia.',
    whatIsIncluded: [
      'Verifica delle fabbriche pre-viaggio (8-12 stabilimenti)',
      'Ispezioni in loco degli stabilimenti di stampi',
      'Audit di lavorazioni CNC e attrezzature',
      'Revisione del sistema di gestione della qualità',
      'Valutazione della salute finanziaria',
      'Report di oltre 30 pagine con matrice comparativa delle fabbriche',
    ],
    process: [
      { step: 1, title: 'Mappatura dei Requisiti', description: 'Definire specifiche dei materiali, tolleranze, volumi di produzione e standard di qualità.' },
      { step: 2, title: 'Screening delle Fabbriche', description: 'Verificare oltre 40 fabbriche, selezionare 8-12 per le visite in loco in base alla corrispondenza delle capacità.' },
      { step: 3, title: 'Audit in Loco', description: 'Visitare le fabbriche, ispezionare le linee di produzione, esaminare i processi CQ e intervistare la direzione.' },
      { step: 4, title: 'Analisi Approfondita della Qualità', description: 'Esaminare parti campione, rapporti di prova e documentazione del sistema di gestione della qualità.' },
      { step: 5, title: 'Report Comparativo', description: 'Confronto fianco a fianco delle fabbriche con valutazioni di prezzi, capacità e rischi.' },
    ],
    highlights: [
      'Revisione dell\'analisi del flusso dello stampo',
      'Verifica della tracciabilità dei materiali',
      'Valutazione della capacità di tolleranza di precisione',
      'Verifica della stabilità finanziaria della supply chain',
    ],
    suitableFor: [
      'Acquirenti di attrezzature industriali',
      'Aziende che necessitano di parti di precisione in metallo/plastica',
      'Importatori di stampi e attrezzature',
      'Approvvigionamento di componenti automobilistici',
    ],
    notSuitableFor: [
      'Prototipazione di elettronica di consumo (vedi Sprint Elettronica)',
      'Prodotti commodity semplici',
    ],
    seoKeywords: [
      'audit fabbrica stampi Dongguan',
      'ispezione produzione precisione Cina',
      'verifica fornitore hardware Shenzhen',
      'audit fabbrica lavorazioni CNC Cina',
    ],
    faq: [
      { question: 'Potete verificare le fabbriche certificate ISO?', answer: 'Sì. Verifichiamo ISO 9001, IATF 16949 e altre certificazioni durante le nostre visite in loco.' },
      { question: 'Esaminate i registri finanziari?', answer: 'Conduciamo una valutazione della salute finanziaria che include la verifica del capitale registrato, la cronologia delle esportazioni e i controlli creditizi attraverso i database aziendali cinesi.' },
      { question: 'Quali tolleranze potete verificare?', answer: 'Possiamo valutare stabilimenti che producono parti con tolleranze fino a ±0,01 mm. Portiamo strumenti di misurazione ed esaminiamo le attrezzature CQ della fabbrica.' },
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
      '3 giorni di audit dei fornitori di batterie al litio, pannelli solari e componenti EV nel Delta del Fiume delle Perle',
    category: 'Nuova Energia',
    industry: 'electronics',
    location: 'Shenzhen & Delta del Fiume delle Perle',
    cities: ['Shenzhen', 'Dongguan', 'Huizhou'],
    durationDays: 3,
    durationLabel: '3 giorni',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Verifica delle certificazioni di sicurezza (UN38.3, IEC, UL)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Audit di conformità sui minerali dei conflitti nella supply chain',
        ],
      },
    ],
    description:
      'Due diligence specializzata per fornitori di batterie al litio, pannelli solari e componenti EV. Verifica delle certificazioni di sicurezza e valutazione della capacità produttiva.',
    longDescription:
      'La Cina domina la supply chain globale della nuova energia. Dalle celle delle batterie al litio ai componenti dei pannelli solari, verifichiamo le fabbriche che alimentano la transizione energetica. Il nostro audit intensivo di 3 giorni copre le certificazioni di sicurezza, la capacità produttiva e la tracciabilità della supply chain.',
    whatIsIncluded: [
      'Pre-screening dei fornitori (batterie, solare, componenti EV)',
      'Ispezioni in loco delle fabbriche (3-5 stabilimenti)',
      'Verifica delle certificazioni di sicurezza (UN38.3, IEC, UL)',
      'Audit della linea di produzione e del laboratorio di test',
      'Verifica della tracciabilità delle materie prime',
      'Report di oltre 25 pagine con valutazione della conformità',
    ],
    process: [
      { step: 1, title: 'Revisione delle Specifiche di Prodotto', description: 'Definire chimica, capacità, fattore di forma e requisiti di certificazione.' },
      { step: 2, title: 'Identificazione dei Fornitori', description: 'Identificare produttori qualificati attraverso database di settore e reti commerciali.' },
      { step: 3, title: 'Audit delle Fabbriche', description: '3 giorni di visite intensive che coprono produzione, test e sistemi di sicurezza.' },
      { step: 4, title: 'Verifica della Conformità', description: 'Controllo incrociato di certificazioni, rapporti di prova e conformità normativa.' },
      { step: 5, title: 'Report di Valutazione dei Rischi', description: 'Risultati dettagliati con raccomandazioni sulla prontezza dei fornitori e lacune di conformità.' },
    ],
    highlights: [
      'Controlli di certificazione di sicurezza delle celle delle batterie',
      'Conformità sui minerali dei conflitti nella supply chain',
      'Valutazione della capacità del laboratorio di test della fabbrica',
      'Verifica delle licenze di esportazione',
    ],
    suitableFor: [
      'Acquirenti di componenti EV',
      'Importatori di attrezzature per energia solare',
      'Distributori di batterie e power bank',
      'Aziende di sistemi di accumulo energetico',
    ],
    notSuitableFor: [
      'Batterie per elettronica di consumo su piccola scala',
      'Acquirenti di prodotti non certificati',
    ],
    seoKeywords: [
      'audit fornitore batterie litio Cina',
      'ispezione fabbrica pannelli solari Cina',
      'verifica fornitore componenti EV',
      'due diligence supply chain nuova energia Cina',
    ],
    faq: [
      { question: 'Verificate la certificazione UN38.3?', answer: 'Sì. Verifichiamo UN38.3, MSDS, IEC 62133 e altre certificazioni di sicurezza pertinenti durante i nostri audit in fabbrica.' },
      { question: 'Potete verificare la presenza di minerali dei conflitti?', answer: 'Esaminiamo la documentazione di approvvigionamento dei minerali dei fornitori e possiamo tracciare le supply chain di cobalto, litio e altri materiali.' },
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
      '3 giorni di approvvigionamento guidato nel più grande mercato all\'ingrosso al mondo per beni di consumo',
    category: 'Sprint Commodity',
    industry: 'consumer-goods',
    location: 'Yiwu, Zhejiang',
    cities: ['Yiwu'],
    durationDays: 3,
    durationLabel: '3 giorni',
    price: '$4,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$3,599',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('fabbriche', 'stand del mercato')),
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$4,799',
        includes: [
          ...STANDARD_COMMON.map((s) => s.replace('fabbrica', 'fornitore')),
          'Ottimizzazione del percorso di mercato distretto per distretto',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$7,999',
        includes: [
          ...premiumCommon(3),
          'Visite di verifica alle fabbriche dietro gli stand',
        ],
      },
    ],
    description:
      'Naviga la Città del Commercio Internazionale di Yiwu con una guida bilingue all\'approvvigionamento. Trova fornitori verificati, negozia i prezzi e spedisci campioni dal più grande mercato all\'ingrosso al mondo.',
    longDescription:
      'La Città del Commercio Internazionale di Yiwu si estende su 4 milioni di metri quadrati con oltre 75.000 stand. È travolgente e piena di intermediari. Tagliamo attraverso il rumore: la nostra guida ti porta direttamente dai produttori verificati (non rivenditori), negozia MOQ e prezzi e organizza il consolidamento e la spedizione dei campioni.',
    whatIsIncluded: [
      'Ricerca pre-viaggio per categoria e mappatura degli stand',
      '2 giorni di navigazione guidata del mercato',
      'Verifica dei fornitori (controllo fabbrica vs. rivenditore)',
      'Supporto alla negoziazione dei prezzi',
      'Raccolta campioni e coordinamento spedizione',
      'Supporto alla comunicazione post-viaggio (14 giorni)',
    ],
    process: [
      { step: 1, title: 'Ricerca per Categoria', description: 'Mappiamo le tue categorie di prodotto nei distretti Yiwu corretti e identifichiamo gli stand dei produttori.' },
      { step: 2, title: 'Giorno 1: Navigazione delle Zone', description: 'Percorso guidato attraverso le zone di mercato pertinenti, raccogliendo biglietti da visita dei fornitori e campioni.' },
      { step: 3, title: 'Giorno 2: Approfondimento', description: 'Ritorno ai migliori candidati, negoziazione dei prezzi, verifica delle credenziali di fabbrica e ordini di campioni.' },
      { step: 4, title: 'Giorno 3: Consolidamento', description: 'Controllo qualità dei campioni, coordinamento spedizione e documentazione riepilogativa dei fornitori.' },
      { step: 5, title: 'Supporto Post-Viaggio', description: '14 giorni di follow-up via email/WeChat con i fornitori per confermare gli ordini di campioni e le tempistiche di produzione.' },
    ],
    highlights: [
      'Risparmia giorni di vagabondaggio senza meta',
      'Accesso agli stand dei produttori, non ai rivenditori',
      'Negoziazione dei prezzi in tempo reale',
      'Consolidamento e spedizione dei campioni',
    ],
    suitableFor: [
      'Acquirenti alle prime armi a Yiwu',
      'Venditori Amazon FBA che cercano beni di consumo',
      'Importatori di merci generiche',
      'Acquirenti di articoli da regalo e promozionali',
    ],
    notSuitableFor: [
      'Elettronica ad alta specifica (vedi Sprint Elettronica Shenzhen)',
      'Prodotti su misura (vedi Multi-Categoria Guangzhou)',
    ],
    seoKeywords: [
      'guida approvvigionamento mercato Yiwu',
      'agente mercato all\'ingrosso Yiwu',
      'guida Città Commercio Internazionale Yiwu',
      'viaggio approvvigionamento mercato all\'ingrosso Cina',
    ],
    faq: [
      { question: 'Yiwu è solo per prodotti economici?', answer: 'No. Sebbene Yiwu sia nota per le commodity a basso costo, esistono livelli di qualità. Ti aiutiamo a trovare il giusto livello di qualità per il tuo mercato.' },
      { question: 'Come gestisco la spedizione da Yiwu?', answer: 'Ci coordiniamo con gli spedizionieri per consolidare i tuoi campioni e spedirli via aerea o marittima. Possiamo anche consigliare partner logistici di fiducia.' },
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
      '3 giorni di approvvigionamento multi-categoria nei mercati all\'ingrosso e nelle fabbriche di Guangzhou',
    category: 'Multi-Categoria',
    industry: 'consumer-goods',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 3,
    durationLabel: '3 giorni',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Coordinamento multi-mercato (Sanyuanli, Zhanxi Road, Liwan Plaza)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Visite personalizzate alle fabbriche organizzate per ogni categoria di prodotto',
        ],
      },
    ],
    description:
      'Approvvigionati in più categorie di prodotto a Guangzhou: borse, orologi, gioielli, giocattoli, regali e accessori moda con collegamenti a fornitori verificati.',
    longDescription:
      'Guangzhou è il fulcro di diversi beni di consumo — borse, orologi, gioielli, giocattoli, accessori moda e altro ancora. In 3 giorni, ti portiamo attraverso i principali mercati all\'ingrosso e ti mettiamo in contatto con fabbriche verificate per ogni categoria. Un viaggio, molteplici linee di prodotto.',
    whatIsIncluded: [
      'Mappatura dei mercati per categoria',
      '2 giorni di visite guidate ai mercati e alle fabbriche',
      'Verifica dei fornitori tra le categorie',
      'Supporto al confronto prezzi e alla negoziazione',
      'Approvvigionamento e consolidamento dei campioni',
      'Raccomandazioni di approvvigionamento post-viaggio',
    ],
    process: [
      { step: 1, title: 'Mappatura delle Categorie', description: 'Mappare le categorie di prodotto target nei mercati specializzati di Guangzhou.' },
      { step: 2, title: 'Visite ai Mercati', description: 'Visitare i mercati all\'ingrosso per ogni categoria: borse (Sanyuanli), orologi (Zhanxi Road), gioielli (Liwan Plaza).' },
      { step: 3, title: 'Collegamenti con le Fabbriche', description: 'Organizzare visite alle fabbriche vicine per le categorie che richiedono produzione su misura.' },
      { step: 4, title: 'Confronto e Selezione', description: 'Confrontare i fornitori tra le categorie, valutare i campioni e documentare i prezzi.' },
      { step: 5, title: 'Pacchetto di Consegna', description: 'Elenco fornitori organizzato, riepilogo prezzi e coordinamento spedizione.' },
    ],
    highlights: [
      'Efficienza multi-categoria in un unico viaggio',
      'Collegamenti diretti con le fabbriche per ogni categoria',
      'Benchmarking dei prezzi di mercato',
      'Servizio di consolidamento dei campioni',
    ],
    suitableFor: [
      'Venditori multiprodotto Amazon / Shopify',
      'Importatori di merci generiche',
      'Aziende di articoli da regalo e promozionali',
      'Principianti dell\'approvvigionamento in Cina con esigenze diversificate',
    ],
    notSuitableFor: [
      'Approvvigionamento in grandi volumi di una singola categoria (vedi gli sprint specializzati)',
      'Prodotti altamente regolamentati (dispositivi medici, ecc.)',
    ],
    seoKeywords: [
      'approvvigionamento mercato all\'ingrosso Guangzhou',
      'approvvigionamento prodotti multi-categoria Cina',
      'agente di fabbrica Guangzhou',
      'guida mercato all\'ingrosso Cina',
    ],
    faq: [
      { question: 'Posso approvvigionarmi di prodotti di diverse categorie in un unico viaggio?', answer: 'Assolutamente sì. Questo servizio è progettato esattamente per questo. Mappiamo le tue categorie nei mercati specializzati di Guangzhou e massimizziamo l\'efficienza.' },
      { question: 'Quanti fornitori visiteremo?', answer: 'Tipicamente 15-25 fornitori tra le categorie target in 2-3 giorni, a seconda della distanza tra i mercati.' },
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
      '4 giorni di immersione nella supply chain di abbigliamento, tessuti e pelletteria di Guangzhou',
    category: 'Sprint Abbigliamento',
    industry: 'apparel-textile',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 4,
    durationLabel: '4 giorni',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Approvvigionamento tessuti al mercato Zhongda + raccolta campioni',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Coordinamento della realizzazione di campioni con le fabbriche selezionate',
        ],
      },
    ],
    description:
      'Approvvigionati di abbigliamento, tessuti e articoli in pelle dai mercati all\'ingrosso e dalle fabbriche specializzate di Guangzhou. Ispezione qualità e verifica dei fornitori inclusa.',
    longDescription:
      'Guangzhou è la capitale cinese del commercio di moda e tessuti. Dalla pelletteria di Sanyuanli al mercato dei tessuti di Zhongda, ti guidiamo attraverso la completa supply chain dell\'abbigliamento. Include visite alle fabbriche, approvvigionamento di tessuti, realizzazione di campioni e ispezione qualità in ogni fase.',
    whatIsIncluded: [
      'Briefing pre-viaggio su tessuti e stili',
      'Visite guidate ai mercati dei tessuti (Zhongda) e ai distretti della pelle (Sanyuanli)',
      'Audit delle fabbriche di abbigliamento (3-5 stabilimenti)',
      'Coordinamento della realizzazione di campioni',
      'Checklist di ispezione qualità',
      'Report comparativo dei fornitori con prezzi',
    ],
    process: [
      { step: 1, title: 'Brief Design e Tessuti', description: 'Documentare i tuoi design, i requisiti dei tessuti, i prezzi target e gli standard di qualità.' },
      { step: 2, title: 'Approvvigionamento Tessuti', description: 'Visitare il mercato dei tessuti di Zhongda per reperire materiali e raccogliere campioni.' },
      { step: 3, title: 'Visite alle Fabbriche', description: 'Verificare le fabbriche di abbigliamento e pelletteria per capacità, volumi e sistemi di qualità.' },
      { step: 4, title: 'Sviluppo Campioni', description: 'Coordinare la realizzazione di campioni con le fabbriche selezionate, esaminare la qualità e documentare le specifiche.' },
      { step: 5, title: 'Pianificazione della Produzione', description: 'Finalizzare la selezione della fabbrica, negoziare i termini di produzione e stabilire i punti di controllo qualità.' },
    ],
    highlights: [
      'Accesso diretto al più grande mercato di tessuti della Cina',
      'Audit delle fabbriche per laboratori di abbigliamento e pelletteria',
      'Realizzazione di campioni e ispezione qualità',
      'Negoziazione MOQ per piccoli marchi',
    ],
    suitableFor: [
      'Marchi di moda che lanciano nuove collezioni',
      'Designer di articoli in pelle e borse',
      'Startup di streetwear e abbigliamento',
      'Importatori di tessuti',
    ],
    notSuitableFor: [
      'Prodotti basici commodity ad altissimo volume (T-shirt, calzini)',
      'Scarpe/calzature (supply chain separata)',
    ],
    seoKeywords: [
      'approvvigionamento fabbrica abbigliamento Guangzhou',
      'audit produttore abbigliamento Cina',
      'guida mercato pelle Sanyuanli',
      'visita supply chain moda Cina',
    ],
    faq: [
      { question: 'Potete aiutare i marchi di moda con MOQ ridotti?', answer: 'Sì. Guangzhou ha molte fabbriche che lavorano con marchi emergenti. I MOQ tipici partono da 50-100 pezzi per stile.' },
      { question: 'Vi occupate dell\'approvvigionamento di tessuti separatamente?', answer: 'Sì. Possiamo reperire tessuti dal mercato di Zhongda e metterti in contatto con fornitori di tessuti anche se produci altrove.' },
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
      '5 giorni di tour completo del corridoio manifatturiero tessile cinese: Keqiao, Shaoxing, Nantong',
    category: 'Approfondimento Tessile',
    industry: 'apparel-textile',
    location: 'Zhejiang & Jiangsu',
    cities: ['Shaoxing', 'Keqiao', 'Nantong'],
    durationDays: 5,
    durationLabel: '5 giorni',
    price: '$6,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$4,999',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$6,799',
        includes: [
          ...STANDARD_COMMON,
          'Navigazione del mercato tessile di Keqiao + audit dei mulini',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$11,499',
        includes: [
          ...premiumCommon(5),
          'Coordinamento test tessili di terze parti (solidità del colore, restringimento, composizione)',
        ],
      },
    ],
    description:
      'Visita il cuore della produzione tessile cinese. Visita mulini di tessuti, tintorie e fabbriche di abbigliamento a Keqiao, Shaoxing e Nantong.',
    longDescription:
      'La cintura tessile cinese si estende dallo Zhejiang allo Jiangsu, sede della più grande concentrazione al mondo di mulini di tessuti, tintorie e fabbriche di abbigliamento. Questa immersione di 5 giorni ti porta dentro la supply chain — dal filato al capo finito — con una guida esperta in ogni tappa.',
    whatIsIncluded: [
      'Mappatura della supply chain tessile',
      'Visite a mulini di tessuti, tintorie e stabilimenti di stampa',
      'Audit delle fabbriche di abbigliamento (5-8 stabilimenti)',
      'Raccolta campioni di tessuto e coordinamento test',
      'Valutazione di sostenibilità e conformità',
      'Report di oltre 40 pagine con classifiche dei fornitori',
    ],
    process: [
      { step: 1, title: 'Brief Tessile', description: 'Definire tipi di tessuto, pesi, finiture, stampe e requisiti di sostenibilità.' },
      { step: 2, title: 'Verifica dei Mulini', description: 'Identificare e pre-selezionare mulini di tessuti e tintorie corrispondenti alle tue specifiche.' },
      { step: 3, title: 'Visite in Loco', description: '5 giorni di visite a mulini e fabbriche attraverso il corridoio tessile Zhejiang-Jiangsu.' },
      { step: 4, title: 'Campioni e Test', description: 'Raccogliere campioni di tessuto, coordinare test di terze parti (solidità del colore, restringimento, composizione).' },
      { step: 5, title: 'Progettazione della Supply Chain', description: 'Mappare la tua supply chain tessile completa con partner raccomandati in ogni fase.' },
    ],
    highlights: [
      'Il più grande mercato all\'ingrosso di tessuti della Cina (Keqiao)',
      'Benchmark dei prezzi diretti dai mulini',
      'Controlli di conformità ambientale delle tintorie',
      'Mappatura completa della supply chain tessile',
    ],
    suitableFor: [
      'Marchi di moda che scalano la produzione',
      'Importatori di tessili per la casa',
      'Acquirenti di tessuti tecnici',
      'Aziende che necessitano di approvvigionamento di tessuti sostenibili',
    ],
    notSuitableFor: [
      'Startup di moda con piccoli lotti (vedi Abbigliamento Guangzhou)',
      'Categorie di prodotto non tessili',
    ],
    seoKeywords: [
      'tour fabbrica tessile Cina',
      'approvvigionamento mercato tessuti Keqiao',
      'audit supply chain tessile Cina',
      'visita mulino tessuti Shaoxing',
    ],
    faq: [
      { question: 'Potete verificare le certificazioni sostenibili/biologiche?', answer: 'Sì. Verifichiamo GOTS, OEKO-TEX, BCI e altre certificazioni di sostenibilità durante le visite in fabbrica.' },
      { question: 'Qual è l\'ordine minimo di tessuto dai mulini cinesi?', answer: 'Tipicamente 500-1000 metri per colore/design, ma varia da mulino a mulino. Possiamo negoziare MOQ più bassi per scopi di campionatura.' },
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
      '4 giorni di approvvigionamento guidato nella capitale cinese della produzione di mobili',
    category: 'Sprint Mobili',
    industry: 'furniture',
    location: 'Foshan, Guangdong',
    cities: ['Foshan'],
    durationDays: 4,
    durationLabel: '4 giorni',
    price: '$5,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$4,299',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$5,799',
        includes: [
          ...STANDARD_COMMON,
          'Navigazione dello showroom Lecong + audit delle fabbriche',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$9,799',
        includes: [
          ...premiumCommon(4),
          'Ispezione qualità dei materiali e della costruzione pre-spedizione',
        ],
      },
    ],
    description:
      'Approvvigionati di mobili direttamente dalle fabbriche di Foshan, il più grande polo manifatturiero di mobili al mondo. Ispezione qualità, verifica dei materiali e supporto logistico.',
    longDescription:
      'Foshan produce il 70% delle esportazioni di mobili della Cina. Dal legno massello al moderno minimalista, ti portiamo dentro le fabbriche e gli showroom. Vedrai le linee di produzione, ispezionerai i materiali, testerai la qualità costruttiva e negozierai direttamente con i proprietari delle fabbriche.',
    whatIsIncluded: [
      'Briefing pre-viaggio su stili e materiali',
      'Visite guidate a 8-15 fabbriche e showroom',
      'Ispezione della qualità dei materiali e della costruzione',
      'Supporto alla negoziazione dei prezzi',
      'Coordinamento logistico e spedizione',
      'Configurazione dei punti di controllo qualità',
    ],
    process: [
      { step: 1, title: 'Brief di Design', description: 'Documentare stili di mobili, materiali, dimensioni, prezzi target e requisiti del mercato di destinazione.' },
      { step: 2, title: 'Selezione delle Fabbriche', description: 'Abbinare i tuoi requisiti alle fabbriche specializzate di Foshan (legno massello, pannelli, imbottiti, metallo).' },
      { step: 3, title: 'Visite a Showroom e Fabbriche', description: 'Tour intensivo di 4 giorni di fabbriche e showroom a Lecong, Longjiang e Shunde.' },
      { step: 4, title: 'Valutazione della Qualità', description: 'Ispezionare metodi di costruzione, qualità dei materiali, standard di finitura e imballaggio.' },
      { step: 5, title: 'Ordine e Configurazione CQ', description: 'Finalizzare la selezione della fabbrica, negoziare i termini e stabilire i punti di ispezione del controllo qualità.' },
    ],
    highlights: [
      'Accesso alle fabbriche dietro gli showroom',
      'Verifica dell\'autenticità dei materiali (legno massello vs. impiallacciato)',
      'Checklist CQ specifica per mobili',
      'Opzione di supervisione del caricamento container',
    ],
    suitableFor: [
      'Rivenditori e grossisti di mobili',
      'Studi di interior design',
      'Acquirenti di mobili per hotel e ospitalità',
      'Venditori di mobili e-commerce',
    ],
    notSuitableFor: [
      'Pezzi di arredamento unici su misura (proibitivi in termini di costo)',
      'Acquirenti non pronti per ordini a volume container',
    ],
    seoKeywords: [
      'tour fabbrica mobili Foshan',
      'guida approvvigionamento mobili Cina',
      'mercato all\'ingrosso mobili Foshan',
      'audit produttore mobili Cina',
    ],
    faq: [
      { question: 'Posso mescolare diversi tipi di mobili in un unico container?', answer: 'Sì. Molte fabbriche di Foshan sono specializzate in ordini a container misto. Aiutiamo a coordinare tra più fabbriche per riempire un container.' },
      { question: 'Ispezionate i mobili prima della spedizione?', answer: 'Offriamo l\'ispezione pre-spedizione come servizio aggiuntivo. Questo include il controllo dei difetti, la verifica delle quantità e la supervisione del caricamento del container.' },
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
      '5 giorni di visita all\'origine nelle piantagioni di caffè, tè e negli stabilimenti di lavorazione dello Yunnan',
    category: 'Origine Food & Beverage',
    industry: 'food-beverage',
    location: 'Provincia dello Yunnan',
    cities: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
    durationDays: 5,
    durationLabel: '5 giorni',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Sessioni di cupping e degustazione con i produttori',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$11,799',
        includes: [
          ...premiumCommon(5),
          'Sessione di cupping certificata Q-grader + report dettagliato sull\'origine',
        ],
      },
    ],
    description:
      'Visita le piantagioni di caffè e tè dello Yunnan. Incontra i produttori, ispeziona gli stabilimenti di lavorazione e approvvigionati di caffè specialty e tè Pu\'er all\'origine.',
    longDescription:
      'Lo Yunnan produce il 95% del caffè cinese ed è la culla del tè Pu\'er. Questo viaggio all\'origine di 5 giorni ti porta nelle piantagioni di caffè di Baoshan e nelle piantagioni di tè di Pu\'er. Incontrerai i produttori, farai cupping di caffè, degusterai tè e costruirai relazioni dirette con i coltivatori.',
    whatIsIncluded: [
      'Ricerca pre-viaggio sull\'origine e verifica dei produttori',
      'Visite alle piantagioni di caffè e ai mulini a umido/secco',
      'Tour delle piantagioni di tè e degli stabilimenti di lavorazione',
      'Sessioni di cupping e degustazione',
      'Raccolta campioni e revisione della documentazione di esportazione',
      'Facilitazione delle relazioni con i produttori',
    ],
    process: [
      { step: 1, title: 'Brief di Prodotto', description: 'Definire il grado del caffè (specialty/commerciale), il tipo di tè, il volume e i parametri di qualità.' },
      { step: 2, title: 'Verifica dei Produttori', description: 'Ricercare e pre-selezionare piantagioni di caffè, cooperative e produttori di tè.' },
      { step: 3, title: 'Visita all\'Origine', description: 'Tour di 5 giorni di piantagioni, mulini e stabilimenti di lavorazione in tutto lo Yunnan.' },
      { step: 4, title: 'Valutazione della Qualità', description: 'Cupping, degustazione, classificazione e documentazione della qualità.' },
      { step: 5, title: 'Configurazione del Commercio Diretto', description: 'Facilitare relazioni dirette con i produttori, spedizione dei campioni e avvio del processo di esportazione.' },
    ],
    highlights: [
      'Relazioni dirette con i produttori (nessun intermediario)',
      'Sessioni di cupping di caffè specialty',
      'Visite agli stabilimenti di invecchiamento del tè Pu\'er',
      'Guida alla documentazione di esportazione',
    ],
    suitableFor: [
      'Torrefattori di caffè specialty',
      'Importatori e rivenditori di tè',
      'Catene di caffetterie in cerca di commercio diretto',
      'Marchi food and beverage',
    ],
    notSuitableFor: [
      'Commercianti di caffè commodity (questo è focalizzato sullo specialty)',
      'Produttori di caffè solubile o bustine di tè',
    ],
    seoKeywords: [
      'visita piantagione caffè Yunnan',
      'viaggio approvvigionamento caffè Cina',
      'tour origine tè Pu\'er',
      'fornitore caffè specialty Cina',
    ],
    faq: [
      { question: 'Posso acquistare caffè verde direttamente dalle piantagioni?', answer: 'Sì. Facilitiamo relazioni di commercio diretto. Le piantagioni di caffè dello Yunnan vendono tipicamente caffè verde in sacchi da 60 kg, con ordini minimi da 1-5 sacchi per lotto.' },
      { question: 'Quali varietà di tè posso reperire nello Yunnan?', answer: 'Pu\'er (crudo e maturo), tè nero dello Yunnan (Dianhong), tè verde e tè bianco. Visitiamo i produttori per ogni varietà in base alle tue esigenze.' },
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
      '4 giorni di viaggio di approvvigionamento per pepe di Sichuan, peperoncino, salse speciali e ingredienti alimentari',
    category: 'Origine Food & Beverage',
    industry: 'food-beverage',
    location: 'Sichuan & Chongqing',
    cities: ['Chengdu', 'Chongqing'],
    durationDays: 4,
    durationLabel: '4 giorni',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Tour del mercato delle spezie + visite agli stabilimenti di produzione',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          'Sessione personalizzata di sviluppo ricette con chef locali',
        ],
      },
    ],
    description:
      'Approvvigionati di autentico pepe di Sichuan, prodotti a base di peperoncino, salse speciali e ingredienti alimentari cinesi direttamente dai produttori in Sichuan e Chongqing.',
    longDescription:
      'La cucina del Sichuan sta conquistando il mondo. Dai pregiati grani di pepe di Sichuan alle paste di fagioli fermentati e alle basi per hot pot, questo viaggio di 4 giorni ti mette in contatto diretto con i produttori. Visita i mercati delle spezie, gli stabilimenti di produzione e assaggia la provincia più saporita della Cina.',
    whatIsIncluded: [
      'Ricerca per categoria di prodotto e mappatura dei produttori',
      'Visite ai mercati all\'ingrosso delle spezie e ai produttori',
      'Tour delle fabbriche di salse e condimenti',
      'Degustazione degli ingredienti e valutazione della qualità',
      'Revisione della conformità all\'esportazione e della documentazione',
      'Elenco contatti dei produttori e riepilogo prezzi',
    ],
    process: [
      { step: 1, title: 'Lista Prodotti', description: 'Definire i prodotti target: gradi di pepe, tipi di peperoncino, categorie di salse e requisiti di volume.' },
      { step: 2, title: 'Ricerca Produttori', description: 'Identificare produttori di qualità per ogni categoria attraverso reti commerciali e ricerche di mercato.' },
      { step: 3, title: 'Visite a Mercati e Fabbriche', description: 'Tour di 4 giorni dei mercati delle spezie di Chengdu e degli stabilimenti di lavorazione alimentare di Chongqing.' },
      { step: 4, title: 'Qualità e Conformità', description: 'Test di degustazione, classificazione della qualità e verifica della documentazione di esportazione.' },
      { step: 5, title: 'Consegna dell\'Approvvigionamento', description: 'Elenco fornitori organizzato con prezzi, MOQ e valutazione della prontezza all\'esportazione.' },
    ],
    highlights: [
      'Accesso diretto ai produttori di pepe di Sichuan',
      'Tour delle fabbriche per salse e condimenti confezionati',
      'Formazione sulla classificazione della qualità (gradi di pepe, livelli di piccantezza)',
      'Guida alla conformità della sicurezza alimentare per l\'esportazione',
    ],
    suitableFor: [
      'Importatori di alimentari asiatici',
      'Supply chain della ristorazione',
      'Marchi di salse piccanti e condimenti',
      'Rivenditori di alimentari specializzati',
    ],
    notSuitableFor: [
      'Importatori di prodotti freschi (catena del freddo separata)',
      'Categorie di prodotto non alimentari',
    ],
    seoKeywords: [
      'approvvigionamento pepe Sichuan Cina',
      'visita fornitore spezie cinesi',
      'tour ingredienti alimentari Chengdu',
      'importazione alimenti speciali Cina',
    ],
    faq: [
      { question: 'Potete aiutare con la conformità FDA/USDA per l\'esportazione?', answer: 'Esaminiamo la documentazione di esportazione dei fornitori e possiamo metterti in contatto con laboratori terzi per i test sui prodotti e il supporto alla registrazione FDA.' },
      { question: 'Qual è la durata di conservazione del pepe di Sichuan?', answer: 'Il pepe di Sichuan di prima qualità mantiene la sua potenza per 12-18 mesi se conservato correttamente. Ti aiutiamo a identificare i produttori che utilizzano imballaggi con flusso di azoto per una maggiore durata.' },
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
      '3 giorni di visita all\'origine nelle piantagioni di bacche di goji e nella regione vinicola emergente del Ningxia',
    category: 'Origine Food & Beverage',
    industry: 'food-beverage',
    location: 'Provincia del Ningxia',
    cities: ['Yinchuan', 'Zhongwei'],
    durationDays: 3,
    durationLabel: '3 giorni',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          'Sessioni di degustazione in cantina + audit di qualità delle piantagioni di goji',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          'Revisione della documentazione di importazione del vino e della conformità dell\'etichetta',
        ],
      },
    ],
    description:
      'Visita le piantagioni di bacche di goji, gli stabilimenti di lavorazione e le cantine premiate del Ningxia. Approvvigionati di prodotti premium a base di goji e vini cinesi all\'origine.',
    longDescription:
      'Il Ningxia è la capitale cinese delle bacche di goji e la sua regione vinicola più entusiasmante. In 3 giorni, visiterai piantagioni biologiche di goji, stabilirai tour di lavorazione e degusterai vini in tenute premiate. Costruisci relazioni dirette con i produttori in questa regione agricola in rapida crescita.',
    whatIsIncluded: [
      'Visite alle piantagioni di goji e revisione della certificazione biologica',
      'Tour degli stabilimenti di lavorazione e confezionamento',
      'Visite alle cantine e sessioni di degustazione',
      'Raccolta campioni e coordinamento test di qualità',
      'Guida alla documentazione di esportazione',
      'Facilitazione delle relazioni con i produttori',
    ],
    process: [
      { step: 1, title: 'Specifica del Prodotto', description: 'Definire i gradi di goji (biologico, convenzionale), i tipi di vino, il volume e i requisiti di certificazione.' },
      { step: 2, title: 'Identificazione dei Produttori', description: 'Ricercare e verificare piantagioni di goji, stabilimenti di lavorazione e cantine.' },
      { step: 3, title: 'Visite a Piantagioni e Cantine', description: 'Tour di 3 giorni di piantagioni di goji, impianti di lavorazione e vigneti.' },
      { step: 4, title: 'Valutazione della Qualità', description: 'Campionamento dei prodotti, revisione delle certificazioni e classificazione della qualità.' },
      { step: 5, title: 'Configurazione dell\'Approvvigionamento', description: 'Facilitare relazioni dirette, spedizioni di campioni e processo di esportazione.' },
    ],
    highlights: [
      'Visite alle piantagioni biologiche di bacche di goji',
      'Degustazione di vini nelle migliori cantine cinesi',
      'Audit di qualità degli stabilimenti di lavorazione',
      'Collegamenti con produttori pronti per l\'esportazione',
    ],
    suitableFor: [
      'Marchi di alimenti salutistici e superfood',
      'Importatori di vino che esplorano i vini cinesi',
      'Rivenditori di prodotti biologici',
      'Aziende nutraceutiche',
    ],
    notSuitableFor: [
      'Commercianti di goji commodity all\'ingrosso (questo è focalizzato sul premium)',
      'Categorie di prodotto non alimentari',
    ],
    seoKeywords: [
      'fornitore bacche goji Ningxia',
      'visita piantagione goji biologica Cina',
      'tour regione vinicola Ningxia',
      'approvvigionamento importazione vino cinese',
    ],
    faq: [
      { question: 'Potete verificare la certificazione biologica?', answer: 'Sì. Verifichiamo le certificazioni China Organic, EU Organic e USDA Organic durante le nostre visite alle piantagioni.' },
      { question: 'Qual è l\'ordine minimo per il vino del Ningxia?', answer: 'La maggior parte delle cantine può accogliere ordini a partire da 100 casse. Possiamo negoziare ordini di prova più piccoli per test di mercato.' },
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
      '6 giorni di percorso personalizzato attraverso le città produttive iper-specializzate della Cina',
    category: 'Città Fabbrica',
    industry: 'monopoly-towns',
    location: 'Zhejiang & Jiangsu',
    cities: ['Zhuji', 'Dongyang', 'Yongkang', 'Taizhou'],
    durationDays: 6,
    durationLabel: '6 giorni',
    price: '$7,699',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$5,799',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$7,699',
        includes: [
          ...STANDARD_COMMON,
          '4–5 visite a città fabbrica specializzate con percorso ottimizzato',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$12,999',
        includes: [
          ...premiumCommon(6),
          'Selezione personalizzata delle città + cene executive con i proprietari delle fabbriche in ogni tappa',
        ],
      },
    ],
    description:
      'Esplora le città fabbrica monopolio della Cina: Zhuji (calze), Dongyang (mahjong/magneti), Yongkang (ferramenta), Taizhou (stampi). Un viaggio, molteplici categorie di nicchia.',
    longDescription:
      'Le città fabbrica monopolio della Cina sono un segreto dell\'approvvigionamento. Intere città si specializzano in un unico prodotto: Zhuji produce 1/3 delle calze mondiali, Yongkang domina la ferramenta. Questo tour esplorativo di 6 giorni ti porta in 4-5 città specializzate, ognuna un\'immersione profonda in una supply chain di nicchia.',
    whatIsIncluded: [
      'Pianificazione del percorso personalizzata in base ai tuoi interessi di prodotto',
      'Visite alle fabbriche in 4-5 città manifatturiere specializzate',
      'Verifica dei fornitori e valutazione delle capacità',
      'Benchmarking dei prezzi tra i produttori',
      'Raccolta campioni e coordinamento logistico',
      'Report completo con elenco fornitori',
    ],
    process: [
      { step: 1, title: 'Selezione dei Prodotti', description: 'Scegli 4-5 categorie di prodotto dalla nostra mappa delle città fabbrica e definisci le specifiche.' },
      { step: 2, title: 'Pianificazione del Percorso', description: 'Progetta un percorso efficiente di 6 giorni che collega le tue città selezionate, con shortlist di fabbriche pre-verificate.' },
      { step: 3, title: 'Visite alle Città', description: 'Visita 2-3 fabbriche per città, incontrando i proprietari e ispezionando le linee di produzione.' },
      { step: 4, title: 'Analisi Comparativa', description: 'Confronto tra città di prezzi, qualità e capacità per ogni categoria di prodotto.' },
      { step: 5, title: 'Report Consolidato', description: 'Report unico che copre tutte le città con classifiche dei fornitori e raccomandazioni.' },
    ],
    highlights: [
      'Accesso a fabbriche con oltre il 70% di quota di mercato mondiale',
      'Specializzazione profonda = migliore qualità e prezzi',
      'Efficienza multi-categoria in un unico viaggio esteso',
      'Presentazioni ai proprietari delle fabbriche (non ai rappresentanti commerciali)',
    ],
    suitableFor: [
      'Importatori esperti che espandono le linee di prodotto',
      'Marchi in cerca di produttori specializzati',
      'Sviluppatori di prodotto che esplorano possibilità produttive',
      'Agenti di approvvigionamento che costruiscono reti di fabbriche',
    ],
    notSuitableFor: [
      'Principianti dell\'approvvigionamento in Cina (iniziare con uno sprint a categoria singola)',
      'Acquirenti con una sola categoria di prodotto',
    ],
    seoKeywords: [
      'città fabbrica monopolio Cina',
      'tour produzione specializzata Cina',
      'visita fabbrica calze Zhuji',
      'fornitore ferramenta Yongkang',
    ],
    faq: [
      { question: 'Quanto sono realmente specializzate queste città?', answer: 'Dongyang produce oltre l\'80% delle tessere da mahjong e dei giocattoli magnetici mondiali. Zhuji produce 1/3 delle calze mondiali. La specializzazione è reale e crea prezzi imbattibili.' },
      { question: 'Posso personalizzare quali città visitiamo?', answer: 'Assolutamente sì. Abbiamo una mappa di oltre 50 città fabbrica. Scegli le categorie che ti interessano e noi progettiamo il percorso ottimale.' },
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
      '5 o 10 giorni di esperienza guidata alla Fiera di Canton con verifica dei fornitori e visite alle fabbriche',
    category: 'Navigatore Fiera',
    industry: 'canton-fair',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 5,
    durationLabel: '5 o 10 giorni',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: 'Accesso guidato base',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: 'Audit completo di fabbrica',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          'Shortlist pre-fiera degli espositori + programma ottimizzato di visite agli stand',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: 'Concierge di lusso',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'Visite post-fiera organizzate presso i primi 5 candidati',
          'Opzione 10 giorni disponibile (entrambe le fasi della fiera + tour estesi delle fabbriche)',
        ],
      },
    ],
    description:
      'Naviga la Fiera di Canton con una guida esperta. Pre-seleziona gli espositori, pianifica le visite agli stand e organizza tour delle fabbriche per fornitori verificati.',
    longDescription:
      'La Fiera di Canton è la più grande fiera commerciale al mondo con oltre 25.000 espositori. È travolgente. Il nostro servizio Navigator pre-seleziona gli espositori in base ai tuoi requisiti, pianifica gli incontri agli stand e organizza visite alle fabbriche dei migliori candidati durante la fiera. Massimizza l\'efficienza del tuo viaggio.',
    whatIsIncluded: [
      'Ricerca pre-fiera degli espositori e creazione della shortlist',
      'Programma giornaliero di visite agli stand (ottimizzato per padiglione)',
      'Guida bilingue per tutte le riunioni',
      'Controlli dei precedenti dei fornitori (licenza commerciale, cronologia esportazioni)',
      'Coordinamento visite alle fabbriche post-fiera',
      'Foglio di calcolo comparativo degli espositori',
    ],
    process: [
      { step: 1, title: 'Ricerca Pre-Fiera', description: 'Analizzare gli elenchi degli espositori, identificare i migliori candidati e condurre controlli dei precedenti.' },
      { step: 2, title: 'Programma della Fiera', description: 'Progettare un programma ottimizzato di visite agli stand per padiglione, fase e categoria di prodotto.' },
      { step: 3, title: 'Giorni Guidati alla Fiera', description: 'La guida bilingue ti accompagna alle riunioni agli stand, traducendo e documentando.' },
      { step: 4, title: 'Verifica dei Fornitori', description: 'Controlli rapidi dei precedenti e valutazione della qualità in loco dei migliori candidati.' },
      { step: 5, title: 'Follow-Up in Fabbrica', description: 'Organizzare visite alle fabbriche dei fornitori verificati dopo la fiera.' },
    ],
    highlights: [
      'Risparmia giorni di cammino senza meta nei padiglioni',
      'Shortlist espositori pre-verificata',
      'Negoziazione dei prezzi in tempo reale in mandarino',
      'Coordinamento visite alle fabbriche durante o dopo la fiera',
    ],
    suitableFor: [
      'Partecipanti alla Fiera di Canton per la prima volta',
      'Acquirenti con ampie categorie di prodotto',
      'Importatori in cerca di nuovi fornitori annualmente',
      'Aziende che valutano la strategia di approvvigionamento in Cina',
    ],
    notSuitableFor: [
      'Acquirenti con un unico fornitore già verificato (è disponibile un supporto più leggero)',
      'Coloro che partecipano solo per ricerche di mercato (non per approvvigionamento)',
    ],
    seoKeywords: [
      'guida approvvigionamento Fiera Canton',
      'agente Fiera Canton',
      'navigatore fiera commerciale Guangzhou',
      'verifica fornitori fiera commerciale Cina',
    ],
    faq: [
      { question: 'Quando si tiene la Fiera di Canton?', answer: 'La Fiera di Canton si tiene due volte l\'anno: Primavera (15 aprile – 5 maggio) e Autunno (15 ottobre – 4 novembre). Ogni fiera ha tre fasi che coprono diverse categorie di prodotto.' },
      { question: 'Potete aiutarmi con il badge della Fiera di Canton?', answer: 'Sì. Possiamo guidarti attraverso il processo di registrazione e aiutarti con la lettera di invito se necessario.' },
      { question: 'E se non posso partecipare? Potete rappresentarmi?', answer: 'Sì, offriamo un servizio di rappresentanza remota in cui partecipiamo a tuo nome, visitiamo i tuoi stand target, raccogliamo informazioni e riferiamo.' },
    ],
    imageColor: 'bg-indigo-900',
  },
];
