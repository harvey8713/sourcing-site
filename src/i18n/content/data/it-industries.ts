import type { IndustryPage } from '@/types';
import { INDUSTRY_META } from '@/lib/constants';

export const industries: IndustryPage[] = [
  {
    slug: 'electronics',
    name: 'Elettronica',
    description: 'La Cina è la fabbrica mondiale dell\'elettronica. Verifichiamo fornitori di PCB, SMT, assemblaggio e componenti da Shenzhen a Dongguan.',
    color: INDUSTRY_META.electronics.color,
    heroCopy:
      'Da Huaqiangbei a Shenzhen alla cintura della produzione di precisione di Dongguan, la supply chain dell\'elettronica cinese è ineguagliabile per scala e velocità. Ti aiutiamo a navigarla con fiducia.',
    keyRegions: [
      { name: 'Shenzhen', description: 'Elettronica di consumo, dispositivi IoT, progettazione e assemblaggio PCB, mercati dei componenti di Huaqiangbei.' },
      { name: 'Dongguan', description: 'Produzione di precisione, stampistica, lavorazioni CNC, elettronica industriale.' },
      { name: 'Huizhou', description: 'Produzione di batterie, pannelli solari, componenti EV, supply chain della nuova energia.' },
    ],
    whatWeAudit: [
      'Stabilimenti di fabbricazione e assemblaggio PCB',
      'Linee di produzione SMT e controllo qualità',
      'Fabbriche OEM/ODM di elettronica di consumo',
      'Autenticità e tracciabilità dei fornitori di componenti',
      'Certificazioni di sicurezza di batterie e alimentatori',
      'Capacità e attrezzature dei laboratori di test elettronici',
    ],
    caseSummary:
      'Nel 2025, abbiamo verificato 15 fabbriche di altoparlanti Bluetooth a Shenzhen per un marchio europeo. Abbiamo eliminato 11 a causa di problemi di qualità o status di intermediario, selezionato 4 e il cliente ha scelto una fabbrica che ha raggiunto il 99,2% di tasso di qualità sul loro primo ordine di 10.000 unità — risparmiando circa $45.000 rispetto al precedente fornitore trovato su Alibaba.',
    seoKeywords: [
      'audit produttore elettronica Cina',
      'servizio visita fabbrica Shenzhen',
      'verifica fornitore elettronica Cina',
      'ispezione fabbrica assemblaggio PCB Cina',
    ],
    relatedServices: ['shenzhen-electronics-sprint', 'shenzhen-dongguan-hardware-audit', 'new-energy-supply-chain'],
  },
  {
    slug: 'consumer-goods',
    name: 'Beni di Consumo',
    description: 'Dai mercati all\'ingrosso di Yiwu ai distretti specializzati di Guangzhou, ci approvvigioniamo nel vasto panorama dei beni di consumo cinesi.',
    color: INDUSTRY_META['consumer-goods'].color,
    heroCopy:
      'La Cina produce più beni di consumo di qualsiasi altro paese sulla Terra. La sfida non è trovare fornitori — è trovare quelli giusti. Tagliamo attraverso il rumore.',
    keyRegions: [
      { name: 'Yiwu', description: 'Il più grande mercato all\'ingrosso al mondo — oltre 75.000 stand che coprono ogni categoria di consumo.' },
      { name: 'Guangzhou', description: 'Distretti all\'ingrosso specializzati per borse, orologi, gioielli, giocattoli e accessori moda.' },
      { name: 'Shantou', description: 'Cluster di produzione di giocattoli e prodotti in plastica nel Guangdong orientale.' },
    ],
    whatWeAudit: [
      'Verifica fabbrica vs. rivenditore',
      'Qualità e consistenza del prodotto tra i campioni',
      'Capacità di imballaggio e branding',
      'Conformità all\'esportazione (CE, FDA, CPSIA, ecc.)',
      'Capacità produttiva e affidabilità dei tempi di consegna',
      'Benchmarking della competitività dei prezzi',
    ],
    caseSummary:
      'Un venditore Amazon FBA statunitense aveva bisogno di approvvigionare 8 categorie di prodotto in un unico viaggio. Il nostro Sprint Multi-Categoria Guangzhou ha visitato 22 fornitori in 4 distretti di mercato in 3 giorni, ha consegnato un elenco fornitori categorizzato con prezzi e il cliente ha effettuato ordini di campioni con 6 fabbriche verificate — tutto entro il loro budget di $15.000.',
    seoKeywords: [
      'agente approvvigionamento beni consumo Cina',
      'guida acquisto mercato Yiwu',
      'approvvigionamento prodotti all\'ingrosso Cina',
      'verifica fornitori Amazon FBA Cina',
    ],
    relatedServices: ['yiwu-commodity-sprint', 'guangzhou-multi-category-sourcing'],
  },
  {
    slug: 'apparel-textile',
    name: 'Abbigliamento e Tessile',
    description: 'La cintura tessile cinese è la più grande al mondo. Verifichiamo fabbriche di abbigliamento, mulini di tessuti e tintorie da Shaoxing a Guangzhou.',
    color: INDUSTRY_META['apparel-textile'].color,
    heroCopy:
      'Dal mercato tessile di Keqiao (il più grande al mondo) ai laboratori di abbigliamento di Guangzhou, la supply chain dell\'abbigliamento cinese offre varietà e flessibilità ineguagliabili per i marchi di moda di tutte le dimensioni.',
    keyRegions: [
      { name: 'Guangzhou', description: 'Produzione di abbigliamento, pelletteria, mercato tessile Zhongda, distretto della pelle Sanyuanli.' },
      { name: 'Shaoxing / Keqiao', description: 'Il più grande mercato all\'ingrosso di tessuti al mondo, tintorie, stabilimenti di stampa.' },
      { name: 'Nantong', description: 'Cluster di produzione di tessili per la casa, biancheria da letto e asciugamani nella provincia del Jiangsu.' },
    ],
    whatWeAudit: [
      'Linee di produzione e sistemi di qualità delle fabbriche di abbigliamento',
      'Capacità dei mulini di tessuti e quantità minime d\'ordine',
      'Conformità ambientale delle tintorie e consistenza dei colori',
      'Qualità costruttiva dei laboratori di pelletteria',
      'Capacità degli stabilimenti di stampa e ricamo',
      'Verifica della produzione etica e delle pratiche di lavoro',
    ],
    caseSummary:
      'Un marchio di streetwear con sede a Londra aveva bisogno di produzione in piccoli lotti (100 pezzi per stile). Abbiamo visitato 8 fabbriche di abbigliamento a Guangzhou, approvvigionato tessuti dal mercato Zhongda, coordinato lo sviluppo dei campioni e identificato una fabbrica disposta a scalare da 100 a 1.000 pezzi con la crescita del marchio.',
    seoKeywords: [
      'audit fabbrica abbigliamento Cina',
      'agente approvvigionamento tessuti Cina',
      'visita produttore abbigliamento Guangzhou',
      'ispezione supply chain tessile Cina',
    ],
    relatedServices: ['guangzhou-apparel-leather', 'textile-belt-deep-dive'],
  },
  {
    slug: 'furniture',
    name: 'Mobili',
    description: 'Foshan produce il 70% delle esportazioni di mobili della Cina. Verifichiamo fabbriche di legno massello, pannelli, imbottiti e mobili in metallo.',
    color: INDUSTRY_META.furniture.color,
    heroCopy:
      'Foshan è la capitale indiscussa della produzione di mobili cinesi. Con cluster per ogni materiale e stile, la sfida è trovare la fabbrica giusta per i tuoi requisiti specifici.',
    keyRegions: [
      { name: 'Lecong', description: 'Il più grande mercato all\'ingrosso di mobili al mondo — 3 milioni di mq di showroom in oltre 180 edifici.' },
      { name: 'Longjiang', description: 'Polo produttivo per mobili imbottiti, divani e materassi.' },
      { name: 'Shunde', description: 'Produzione di mobili in legno massello, mobili su misura e arredamento residenziale di alta gamma.' },
    ],
    whatWeAudit: [
      'Verifica dell\'autenticità del legno massello (specie, contenuto di umidità, falegnameria)',
      'Costruzione del telaio dei mobili imbottiti e densità della schiuma',
      'Qualità della ferramenta e precisione di assemblaggio dei mobili in pannello',
      'Qualità delle finiture (vernice, lacca, impiallacciatura)',
      'Pratiche di imballaggio e caricamento container',
      'Valutazione della capacità personalizzata e OEM',
    ],
    caseSummary:
      'Un gruppo alberghiero con sede a Dubai aveva bisogno di mobili su misura in legno massello per 120 camere. Abbiamo verificato 6 fabbriche a Shunde, verificato i loro metodi di costruzione e la qualità delle finiture, e la fabbrica selezionata ha consegnato in tempo con solo il 2% di tasso di difetto — ben al di sotto della media del settore dell\'8-10%.',
    seoKeywords: [
      'visita fabbrica mobili Foshan',
      'ispezione qualità mobili Cina',
      'approvvigionamento mobili legno massello Cina',
      'guida all\'ingrosso mobili Foshan',
    ],
    relatedServices: ['foshan-furniture-sourcing'],
  },
  {
    slug: 'food-beverage',
    name: 'Food e Beverage',
    description: 'Approvvigionati di prodotti food e beverage premium all\'origine — dal caffè dello Yunnan alle spezie del Sichuan e alle bacche di goji del Ningxia.',
    color: INDUSTRY_META['food-beverage'].color,
    heroCopy:
      'Oltre i beni manifatturieri "Made in China" si trova un ricco panorama di prodotti food e beverage premium. Dal caffè specialty alle antiche tradizioni del tè, ti mettiamo in contatto direttamente con i produttori.',
    keyRegions: [
      { name: 'Yunnan', description: 'L\'origine del caffè cinese (95% della produzione), cuore del tè Pu\'er, approvvigionamento di funghi selvatici.' },
      { name: 'Sichuan / Chongqing', description: 'Pepe di Sichuan, prodotti al peperoncino, salse speciali, basi per hot pot, verdure sottaceto.' },
      { name: 'Ningxia', description: 'Capitale delle bacche di goji, regione vinicola emergente, agnello premium e prodotti agricoli.' },
    ],
    whatWeAudit: [
      'Visite a fattorie e piantagioni per relazioni dirette con i produttori',
      'Igiene degli stabilimenti di lavorazione e standard di sicurezza alimentare',
      'Verifica delle certificazioni biologiche e di sostenibilità',
      'Documentazione di esportazione e conformità (FDA, biologico EU, ecc.)',
      'Classificazione della qualità del prodotto e sessioni di degustazione/cupping',
      'Valutazione dell\'imballaggio e della durata di conservazione',
    ],
    caseSummary:
      'Un torrefattore di caffè specialty a Melbourne voleva caffè dello Yunnan in commercio diretto. Abbiamo visitato 8 piantagioni a Baoshan e Pu\'er, facilitato sessioni di cupping e li abbiamo messi in contatto con una cooperativa che produce caffè di grado specialty a 84 punti al 40% in meno rispetto al prezzo del loro precedente fornitore colombiano.',
    seoKeywords: [
      'approvvigionamento prodotti alimentari Cina',
      'commercio diretto caffè Yunnan',
      'fornitore importazione tè cinese',
      'verifica alimenti biologici Cina',
    ],
    relatedServices: ['yunnan-coffee-tea-origin', 'sichuan-spice-cuisine-route', 'ningxia-goji-wine-route'],
  },
  {
    slug: 'monopoly-towns',
    name: 'Città Fabbrica Monopolio',
    description: 'Le città manifatturiere iper-specializzate della Cina dominano la produzione globale di beni specifici. Navighiamo queste supply chain nascoste.',
    color: INDUSTRY_META['monopoly-towns'].color,
    heroCopy:
      'Da qualche parte in Cina, una singola città probabilmente produce oltre il 50% dell\'offerta mondiale del tuo prodotto. Queste città fabbrica monopolio offrono competenza e prezzi imbattibili — se sai dove cercare.',
    keyRegions: [
      { name: 'Zhuji, Zhejiang', description: 'Produce 1/3 delle calze mondiali. Anche un importante centro di lavorazione delle perle.' },
      { name: 'Dongyang, Zhejiang', description: 'Oltre l\'80% delle tessere da mahjong globali e una quota dominante di giocattoli magnetici.' },
      { name: 'Yongkang, Zhejiang', description: 'Capitale della ferramenta — utensili elettrici, ferramenta per porte, articoli da cucina e thermos.' },
      { name: 'Taizhou, Zhejiang', description: 'Capitale della stampistica e dello stampaggio a iniezione di plastica. Anche importante cluster di componenti auto.' },
    ],
    whatWeAudit: [
      'Profondità della specializzazione del prodotto e competenza manifatturiera',
      'Efficienza produttiva rispetto alle fabbriche generaliste',
      'Approvvigionamento delle materie prime e struttura dei costi',
      'Consistenza della qualità su larga scala',
      'Esperienza di esportazione e conformità internazionale',
      'Fabbriche gestite dai proprietari vs. gestite da manager',
    ],
    caseSummary:
      'Un marchio europeo di articoli da cucina voleva thermos in acciaio inossidabile. Le fabbriche generaliste quotavano $4,20/unità. Li abbiamo portati a Yongkang, la capitale dei thermos, dove fabbriche specializzate che utilizzano linee di produzione automatizzate quotavano $2,80/unità con qualità migliore — un risparmio del 33% sul loro ordine di 50.000 unità.',
    seoKeywords: [
      'città fabbrica specializzate Cina',
      'guida cluster manifatturieri Cina',
      'approvvigionamento fabbrica calze Zhuji',
      'produttore ferramenta Yongkang',
    ],
    relatedServices: ['monopoly-factory-towns-explorer'],
  },
  {
    slug: 'canton-fair',
    name: 'Fiera di Canton',
    description: 'Massimizza il ROI della tua Fiera di Canton con elenchi espositori pre-selezionati, incontri programmati agli stand e coordinamento delle visite alle fabbriche.',
    color: INDUSTRY_META['canton-fair'].color,
    heroCopy:
      'La Fiera di Canton è la più grande fiera commerciale al mondo con oltre 25.000 espositori su 1,18 milioni di metri quadrati. La maggior parte dei partecipanti spreca il 60% del tempo nei padiglioni sbagliati. Noi risolviamo questo problema.',
    keyRegions: [
      { name: 'Fase 1 (15-19 apr/ott)', description: 'Elettronica, elettrodomestici, macchinari, ferramenta, nuova energia.' },
      { name: 'Fase 2 (23-27 apr/ott)', description: 'Beni di consumo, regali, decorazioni per la casa, materiali da costruzione.' },
      { name: 'Fase 3 (31 ott-4 nov)', description: 'Tessili, abbigliamento, calzature, forniture per ufficio, valigie e borse, alimentari.' },
    ],
    whatWeAudit: [
      'Controlli dei precedenti degli espositori prima della fiera',
      'Valutazione della capacità dei fornitori presso gli stand',
      'Verifica del collegamento tra espositori e fabbriche',
      'Documentazione della negoziazione dei prezzi in tempo reale',
      'Coordinamento delle visite alle fabbriche dopo la fiera',
      'Confronto e selezione dei fornitori',
    ],
    caseSummary:
      'Un importatore canadese ha partecipato per la prima volta alla Fiera di Canton nel 2025 con il nostro servizio Navigator. Abbiamo pre-selezionato oltre 300 espositori, programmato 45 incontri agli stand in 5 giorni e organizzato visite alle fabbriche per i primi 6 candidati. Hanno effettuato ordini con 3 nuovi fornitori e risparmiato circa 4 giorni di cammino non guidato nei padiglioni.',
    seoKeywords: [
      'guida approvvigionamento Fiera Canton 2026',
      'servizio agente Fiera Canton',
      'aiuto fiera commerciale Guangzhou',
      'verifica fornitori fiera commerciale Cina',
    ],
    relatedServices: ['canton-fair-navigator'],
  },
];
