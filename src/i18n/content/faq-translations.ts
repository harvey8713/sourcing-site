/**
 * FAQ content translations.
 */
import type { Locale } from '../types';
import type { FAQItem } from '@/types';
import { faqs as baseFaqs } from '@/data/faqs';

export interface FAQTranslationOverlay {
  question?: string;
  answer?: string;
}

type TranslationsMap = Record<string, FAQTranslationOverlay>;
type LocaleTranslations = Partial<Record<Locale, TranslationsMap>>;

const translations: LocaleTranslations = {
  fr: {
    "faq-1": {
      "question": "Qu'est-ce qui différencie votre service d'Alibaba ou des salons commerciaux ?",
      "answer": "Alibaba et les salons commerciaux vous montrent ce que les fournisseurs veulent que vous voyiez. Nous vous montrons la réalité — des ateliers d'usine non édités, la capacité de production réelle et la qualité de la direction. Nous visitons des usines qui n'ont peut-être même pas de personnel anglophone et qui ne participent jamais aux salons commerciaux. Vous obtenez un renseignement impartial et sur le terrain.",
    },
    "faq-2": {
      "question": "Dois-je voyager en Chine ?",
      "answer": "Non. Notre service standard fonctionne avec vous à distance. Nous effectuons les visites sur site, documentons tout et livrons un rapport complet. Cependant, nous proposons des voyages accompagnés où vous nous rejoignez — ceux-ci sont populaires pour établir des relations directes avec les propriétaires d'usine.",
    },
    "faq-3": {
      "question": "Comment trouvez-vous des usines au-delà de ce qui est sur Alibaba ?",
      "answer": "Nous utilisons une combinaison de méthodes : bases de données commerciales en chinois, annuaires d'associations industrielles, registres d'entreprises des gouvernements locaux, listes de participants aux salons commerciaux et notre réseau personnel de 15 ans. Beaucoup des meilleures usines ne sont pas répertoriées sur les plateformes en anglais.",
    },
    "faq-4": {
      "question": "Qu'est-ce qui est inclus dans le rapport de due diligence ?",
      "answer": "Notre rapport standard (30+ pages) comprend : le profil de l'usine et la vérification des antécédents, les photos et vidéos des lignes de production, l'évaluation du système de gestion de la qualité, l'aperçu de la santé financière, la liste des équipements et l'analyse des capacités, l'évaluation des échantillons, l'analyse des prix et notre recommandation d'approvisionnement avec justification.",
    },
    "faq-5": {
      "question": "Combien coûte un voyage d'approvisionnement typique ?",
      "answer": "Nos frais de service varient de 2 200 $ à 4 800 $ selon la durée, les emplacements et la complexité de l'industrie. Cela couvre toute la recherche, le travail sur site et les rapports. Vos frais de voyage (vols, hôtels, repas) sont séparés. Consultez les pages de service individuelles pour les prix exacts.",
    },
    "faq-6": {
      "question": "Garantissez-vous de trouver un fournisseur approprié ?",
      "answer": "Nous garantissons une due diligence approfondie et des rapports transparents. Bien que nous ne puissions pas garantir que chaque recherche trouvera une correspondance parfaite, notre taux de satisfaction client de 98 % reflète notre capacité à soit trouver des fournisseurs appropriés, soit fournir des raisons claires et exploitables pour lesquelles la recherche n'a pas abouti.",
    },
    "faq-7": {
      "question": "Pouvez-vous aider avec de petites commandes ou des startups ?",
      "answer": "Oui. Beaucoup de nos clients sont des startups et de petites marques. Nous ciblons spécifiquement les usines qui acceptent des MOQ (quantités minimales de commande) plus petits et sont prêtes à grandir avec de nouveaux clients. Certains de nos services, comme le Sprint Électronique de Shenzhen, sont particulièrement adaptés aux startups.",
    },
    "faq-8": {
      "question": "Quels secteurs couvrez-vous ?",
      "answer": "Nous couvrons l'électronique, les biens de consommation, l'habillement et le textile, les meubles, l'alimentation et les boissons, et la fabrication spécialisée. Chacun a une page de service dédiée avec une méthodologie détaillée. Nous créons également des itinéraires personnalisés pour des exigences uniques.",
    },
    "faq-9": {
      "question": "Comment gérez-vous les barrières linguistiques ?",
      "answer": "Toute notre équipe est bilingue (mandarin/anglais). Nous gérons toute la communication pendant les visites d'usine et pouvons continuer comme intermédiaire après le voyage pour les négociations et la communication continue. Tous les rapports sont livrés en anglais.",
    },
    "faq-10": {
      "question": "Que se passe-t-il après la visite d'usine ?",
      "answer": "Vous recevez votre rapport dans les 5 jours ouvrables. Nous planifions ensuite un appel de débriefing d'une heure pour discuter des conclusions et recommandations. Nous fournissons 30 jours de support post-voyage pour la communication avec les fournisseurs et pouvons organiser des visites de suivi, des commandes d'échantillons ou la négociation de contrats.",
    },
    "faq-11": {
      "question": "Travaillez-vous à la commission des usines ?",
      "answer": "Non. Nous sommes payés à 100 % par nos clients. Nous n'acceptons pas de commissions, de pots-de-vin ou de frais de référencement des usines. Cela garantit que nos évaluations sont complètement impartiales et que notre seul intérêt est de vous trouver le meilleur fournisseur.",
    },
    "faq-12": {
      "question": "Pouvez-vous aider avec le contrôle qualité après le début de la production ?",
      "answer": "Oui. Nous offrons des services continus de contrôle qualité incluant des inspections avant production, des contrôles en cours de production et des inspections avant expédition. Ceux-ci sont disponibles comme services complémentaires pour les clients qui ont établi des relations fournisseurs via nous.",
    },
  },
  de: {
    "faq-1": {
      "question": "Was unterscheidet Ihren Service von Alibaba oder Handelsmessen?",
      "answer": "Alibaba und Handelsmessen zeigen Ihnen, was Lieferanten Ihnen zeigen wollen. Wir zeigen Ihnen die Realität — unbearbeitete Fabrikhallen, echte Produktionskapazität und Managementqualität. Wir besuchen Fabriken, die möglicherweise nicht einmal englischsprachiges Personal haben und nie auf Handelsmessen ausstellen. Sie erhalten unvoreingenommene Informationen aus erster Hand.",
    },
    "faq-2": {
      "question": "Muss ich nach China reisen?",
      "answer": "Nein. Unser Standard-Service funktioniert mit Ihnen aus der Ferne. Wir führen die Vor-Ort-Besuche durch, dokumentieren alles und liefern einen umfassenden Bericht. Wir bieten jedoch auch begleitete Reisen an, bei denen Sie mit uns kommen — diese sind beliebt, um direkte Beziehungen zu Fabrikbesitzern aufzubauen.",
    },
    "faq-3": {
      "question": "Wie finden Sie Fabriken, die nicht auf Alibaba gelistet sind?",
      "answer": "Wir nutzen eine Kombination von Methoden: chinesischsprachige Handelsdatenbanken, Branchenverbandsverzeichnisse, lokale Unternehmensregister der Regierung, Teilnehmerlisten von Handelsmessen und unser 15-jähriges persönliches Netzwerk. Viele der besten Fabriken listen sich nicht auf englischsprachigen Plattformen.",
    },
    "faq-4": {
      "question": "Was ist im Due-Diligence-Bericht enthalten?",
      "answer": "Unser Standardbericht (30+ Seiten) enthält: Fabrikprofil und Hintergrundprüfung, Fotos und Videos der Produktionslinie, Bewertung des Qualitätsmanagementsystems, Überblick über die finanzielle Gesundheit, Geräteliste und Fähigkeitsanalyse, Musterbewertung, Preisanalyse und unsere Beschaffungsempfehlung mit Begründung.",
    },
    "faq-5": {
      "question": "Wie viel kostet eine typische Beschaffungsreise?",
      "answer": "Unsere Servicegebühren liegen zwischen $2.200 und $4.800, je nach Dauer, Standorten und Branchenkomplexität. Dies deckt alle Recherchen, Vor-Ort-Arbeiten und Berichterstattung ab. Ihre Reisekosten (Flüge, Hotels, Mahlzeiten) sind separat. Siehe die einzelnen Serviceseiten für genaue Preise.",
    },
    "faq-6": {
      "question": "Garantieren Sie, einen geeigneten Lieferanten zu finden?",
      "answer": "Wir garantieren gründliche Due Diligence und transparente Berichterstattung. Wir können zwar nicht garantieren, dass jede Suche eine perfekte Übereinstimmung findet, aber unsere Kundenzufriedenheitsrate von 98 % spiegelt unsere Fähigkeit wider, entweder geeignete Lieferanten zu finden oder klare, umsetzbare Gründe zu liefern, warum die Suche erfolglos war.",
    },
    "faq-7": {
      "question": "Können Sie bei kleinen Bestellungen oder Startups helfen?",
      "answer": "Ja. Viele unserer Kunden sind Startups und kleine Marken. Wir suchen gezielt nach Fabriken, die kleinere MOQs (Mindestbestellmengen) akzeptieren und bereit sind, mit neuen Kunden zu wachsen. Einige unserer Dienstleistungen, wie der Shenzhen Elektronik-Sprint, sind besonders startup-freundlich.",
    },
    "faq-8": {
      "question": "Welche Branchen decken Sie ab?",
      "answer": "Wir decken Elektronik, Konsumgüter, Bekleidung und Textilien, Möbel, Lebensmittel und Getränke sowie spezialisierte Fertigung ab. Jede hat eine eigene Serviceseite mit detaillierter Methodik. Wir erstellen auch maßgeschneiderte Routen für einzigartige Anforderungen.",
    },
    "faq-9": {
      "question": "Wie gehen Sie mit Sprachbarrieren um?",
      "answer": "Unser gesamtes Team ist zweisprachig (Mandarin/Englisch). Wir übernehmen die gesamte Kommunikation während der Fabrikbesuche und können nach der Reise weiterhin als Vermittler für Verhandlungen und laufende Kommunikation fungieren. Alle Berichte werden auf Englisch geliefert.",
    },
    "faq-10": {
      "question": "Was passiert nach dem Fabrikbesuch?",
      "answer": "Sie erhalten Ihren Bericht innerhalb von 5 Werktagen. Wir vereinbaren dann ein 1-stündiges Debriefing-Gespräch, um die Ergebnisse und Empfehlungen zu besprechen. Wir bieten 30 Tage Nachbetreuung für die Lieferantenkommunikation und können Folgebesuche, Musterbestellungen oder Vertragsverhandlungen arrangieren.",
    },
    "faq-11": {
      "question": "Arbeiten Sie auf Provisionsbasis von Fabriken?",
      "answer": "Nein. Wir werden zu 100 % von unseren Kunden bezahlt. Wir akzeptieren keine Provisionen, Kickbacks oder Vermittlungsgebühren von Fabriken. Dies stellt sicher, dass unsere Bewertungen völlig unvoreingenommen sind und unser einziges Interesse darin besteht, den besten Lieferanten für Sie zu finden.",
    },
    "faq-12": {
      "question": "Können Sie bei der Qualitätskontrolle nach Produktionsbeginn helfen?",
      "answer": "Ja. Wir bieten fortlaufende Qualitätskontrolldienste an, einschließlich Vorproduktionsinspektionen, Prüfungen während der Produktion und Vorversandinspektionen. Diese sind als Zusatzdienste für Kunden verfügbar, die durch uns Lieferantenbeziehungen aufgebaut haben.",
    },
  },
  it: {
    "faq-1": {
      "question": "Cosa rende il vostro servizio diverso da Alibaba o dalle fiere?",
      "answer": "Alibaba e le fiere ti mostrano ciò che i fornitori vogliono farti vedere. Noi ti mostriamo la realtà — reparti produttivi non modificati, reale capacità produttiva e qualità della direzione. Visitiamo fabbriche che potrebbero non avere nemmeno personale che parla inglese e che non partecipano mai alle fiere. Ottieni informazioni imparziali e sul campo.",
    },
    "faq-2": {
      "question": "Devo viaggiare in Cina?",
      "answer": "No. Il nostro servizio standard opera con te da remoto. Conduciamo le visite in loco, documentiamo tutto e consegniamo un report completo. Tuttavia, offriamo anche viaggi accompagnati in cui ti unisci a noi — questi sono popolari per costruire relazioni dirette con i proprietari delle fabbriche.",
    },
    "faq-3": {
      "question": "Come trovate le fabbriche oltre a quelle presenti su Alibaba?",
      "answer": "Utilizziamo una combinazione di metodi: database commerciali in lingua cinese, elenchi di associazioni di settore, registri commerciali del governo locale, elenchi di partecipanti alle fiere e la nostra rete personale di 15 anni. Molte delle migliori fabbriche non sono elencate sulle piattaforme in lingua inglese.",
    },
    "faq-4": {
      "question": "Cosa è incluso nel report di due diligence?",
      "answer": "Il nostro report standard (oltre 30 pagine) include: profilo della fabbrica e controllo dei precedenti, foto e video della linea di produzione, valutazione del sistema di gestione della qualità, panoramica della salute finanziaria, elenco delle attrezzature e analisi delle capacità, valutazione dei campioni, analisi dei prezzi e la nostra raccomandazione di approvvigionamento con motivazione.",
    },
    "faq-5": {
      "question": "Quanto costa un tipico viaggio di approvvigionamento?",
      "answer": "Le nostre tariffe di servizio variano da $2.200 a $4.800 a seconda della durata, delle località e della complessità del settore. Questo copre tutta la ricerca, il lavoro in loco e la reportistica. I tuoi costi di viaggio (voli, hotel, pasti) sono separati. Consulta le singole pagine dei servizi per i prezzi esatti.",
    },
    "faq-6": {
      "question": "Garantite di trovare un fornitore adatto?",
      "answer": "Garantiamo una due diligence approfondita e una reportistica trasparente. Sebbene non possiamo garantire che ogni ricerca trovi un abbinamento perfetto, il nostro tasso di soddisfazione del cliente del 98% riflette la nostra capacità di trovare fornitori adatti o fornire ragioni chiare e attuabili sul perché la ricerca non ha avuto successo.",
    },
    "faq-7": {
      "question": "Potete aiutare con piccoli ordini o startup?",
      "answer": "Sì. Molti dei nostri clienti sono startup e piccoli marchi. Selezioniamo specificamente fabbriche che accettano MOQ (quantità minime d'ordine) più bassi e sono disposte a crescere con nuovi clienti. Alcuni dei nostri servizi, come lo Sprint Elettronica Shenzhen, sono particolarmente adatti alle startup.",
    },
    "faq-8": {
      "question": "Quali settori coprite?",
      "answer": "Copriamo elettronica, beni di consumo, abbigliamento e tessili, mobili, food e beverage e produzione specializzata. Ognuno ha una pagina di servizio dedicata con metodologia dettagliata. Creiamo anche percorsi personalizzati per requisiti unici.",
    },
    "faq-9": {
      "question": "Come gestite le barriere linguistiche?",
      "answer": "Tutto il nostro team è bilingue (mandarino/inglese). Gestiamo tutte le comunicazioni durante le visite in fabbrica e possiamo continuare come intermediari dopo il viaggio per le negoziazioni e la comunicazione continua. Tutti i report sono consegnati in inglese.",
    },
    "faq-10": {
      "question": "Cosa succede dopo la visita in fabbrica?",
      "answer": "Ricevi il tuo report entro 5 giorni lavorativi. Successivamente programmiamo una chiamata di debriefing di 1 ora per discutere i risultati e le raccomandazioni. Forniamo 30 giorni di supporto post-viaggio per la comunicazione con i fornitori e possiamo organizzare visite di follow-up, ordini di campioni o negoziazioni contrattuali.",
    },
    "faq-11": {
      "question": "Lavorate su commissione dalle fabbriche?",
      "answer": "No. Siamo pagati al 100% dai nostri clienti. Non accettiamo commissioni, tangenti o commissioni di referenza dalle fabbriche. Questo garantisce che le nostre valutazioni siano completamente imparziali e che il nostro unico interesse sia trovarti il miglior fornitore.",
    },
    "faq-12": {
      "question": "Potete aiutare con il controllo qualità dopo l'inizio della produzione?",
      "answer": "Sì. Offriamo servizi continui di controllo qualità che includono ispezioni pre-produzione, controlli durante la produzione e ispezioni pre-spedizione. Questi sono disponibili come servizi aggiuntivi per i clienti che hanno stabilito relazioni con i fornitori attraverso di noi.",
    },
  },
  ko: {
    "faq-1": {
      "question": "Alibaba나 무역 박람회와 귀사 서비스의 차이점은 무엇인가요?",
      "answer": "Alibaba와 무역 박람회는 공급업체가 보여주고 싶은 것만 보여줍니다. 저희는 현실을 보여드립니다 — 편집되지 않은 공장 현장, 실제 생산 능력, 경영진의 품질. 영어 구사 직원이 없고 무역 박람회에 참가하지 않는 공장까지 방문합니다. 편견 없는 현장 정보를 얻으실 수 있습니다.",
    },
    "faq-2": {
      "question": "중국까지 직접 가야 하나요?",
      "answer": "아니요. 표준 서비스는 원격으로 운영됩니다. 저희가 현장 방문을 수행하고, 모든 것을 문서화하며, 종합 보고서를 전달합니다. 다만, 공장주와 직접 관계를 구축하는 데 인기 있는 동행 출장 서비스도 제공하고 있습니다.",
    },
    "faq-3": {
      "question": "Alibaba에 없는 공장을 어떻게 찾으시나요?",
      "answer": "다양한 방법을 조합하여 사용합니다: 중국어 무역 데이터베이스, 업계 협회 디렉토리, 지방 정부 사업자 등록부, 무역 박람회 참석자 목록, 그리고 15년간의 개인 네트워크입니다. 최고의 공장 중 상당수는 영어 플랫폼에 등록하지 않습니다.",
    },
    "faq-4": {
      "question": "실사 보고서에는 무엇이 포함되나요?",
      "answer": "표준 보고서(30페이지 이상)에는 다음이 포함됩니다: 공장 프로필 및 백그라운드 체크, 생산 라인 사진 및 동영상, 품질 관리 시스템 평가, 재무 건전성 개요, 장비 목록 및 능력 분석, 샘플 평가, 가격 분석, 근거가 포함된 소싱 추천.",
    },
    "faq-5": {
      "question": "일반적인 소싱 출장 비용은 얼마인가요?",
      "answer": "서비스 요금은 기간, 지역, 산업 복잡성에 따라 $2,200에서 $4,800까지입니다. 여기에는 모든 리서치, 현장 작업, 보고서 작성이 포함됩니다. 여행 경비(항공권, 호텔, 식사)는 별도입니다. 정확한 가격은 개별 서비스 페이지를 참조하세요.",
    },
    "faq-6": {
      "question": "적합한 공급업체를 찾는 것을 보장하시나요?",
      "answer": "철저한 실사와 투명한 보고를 보장합니다. 모든 조사가 완벽한 매칭을 찾을 것이라고 보장할 수는 없지만, 98%의 고객 만족도는 적합한 공급업체를 찾거나 조사가 성공적이지 못한 이유에 대한 명확하고 실행 가능한 설명을 제공하는 능력을 반영합니다.",
    },
    "faq-7": {
      "question": "소량 주문이나 스타트업도 도와주시나요?",
      "answer": "네. 많은 고객이 스타트업과 소규모 브랜드입니다. 저희는 특히 낮은 MOQ(최소 주문 수량)를 수용하고 신규 고객과 함께 성장할 의향이 있는 공장을 대상으로 합니다. Shenzhen Electronics Sprint와 같은 일부 서비스는 특히 스타트업 친화적입니다.",
    },
    "faq-8": {
      "question": "어떤 산업을 다루시나요?",
      "answer": "전자제품, 소비재, 의류 및 원단, 가구, 식음료, 특화 제조를 다룹니다. 각 산업에는 상세한 방법론이 포함된 전용 서비스 페이지가 있습니다. 고유한 요구사항을 위한 맞춤형 루트도 설계합니다.",
    },
    "faq-9": {
      "question": "언어 장벽을 어떻게 처리하시나요?",
      "answer": "저희 팀 전체가 이중 언어(중국어/영어) 구사자입니다. 공장 방문 중 모든 의사소통을 처리하며, 출장 후에도 협상과 지속적인 커뮤니케이션을 위한 중개자 역할을 계속할 수 있습니다. 모든 보고서는 영어로 제공됩니다.",
    },
    "faq-10": {
      "question": "공장 방문 후에는 어떻게 진행되나요?",
      "answer": "영업일 기준 5일 이내에 보고서를 받으십니다. 이후 결과 및 추천 사항을 논의하기 위한 1시간 디브리핑 콜을 예약합니다. 공급업체 커뮤니케이션을 위한 30일간의 출장 후 지원을 제공하며, 후속 방문, 샘플 주문, 계약 협상을 주선할 수 있습니다.",
    },
    "faq-11": {
      "question": "공장으로부터 수수료를 받으시나요?",
      "answer": "아니요. 100% 고객이 비용을 지불합니다. 공장으로부터 커미션, 리베이트, 소개 수수료를 받지 않습니다. 이를 통해 평가의 완전한 공정성과 최고의 공급업체를 찾는 것만이 유일한 관심사임을 보장합니다.",
    },
    "faq-12": {
      "question": "생산 시작 후 품질 관리를 도와주실 수 있나요?",
      "answer": "네. 생산 전 검사, 생산 중 점검, 선적 전 검사 등 지속적인 품질 관리 서비스를 제공합니다. 이는 당사를 통해 공급업체 관계를 구축한 고객을 위한 부가 서비스로 이용 가능합니다.",
    },
  },
  ru: {
    "faq-1": {
      "question": "Чем ваша услуга отличается от Alibaba или торговых выставок?",
      "answer": "Alibaba и торговые выставки показывают вам то, что поставщики хотят, чтобы вы видели. Мы показываем реальность — неотредактированные заводские цеха, реальные производственные мощности и качество управления. Мы посещаем фабрики, у которых может даже не быть англоговорящего персонала и которые никогда не участвуют в торговых выставках. Вы получаете непредвзятую разведывательную информацию с места.",
    },
    "faq-2": {
      "question": "Нужно ли мне ехать в Китай?",
      "answer": "Нет. Наш стандартный сервис работает с вами удалённо. Мы проводим визиты на месте, документируем всё и предоставляем комплексный отчёт. Однако мы также предлагаем сопровождаемые поездки, где вы присоединяетесь к нам — они популярны для построения прямых отношений с владельцами фабрик.",
    },
    "faq-3": {
      "question": "Как вы находите фабрики за пределами Alibaba?",
      "answer": "Мы используем комбинацию методов: китайскоязычные торговые базы данных, отраслевые ассоциативные справочники, местные правительственные бизнес-реестры, списки участников торговых выставок и нашу 15-летнюю личную сеть контактов. Многие из лучших фабрик не размещают информацию на англоязычных платформах.",
    },
    "faq-4": {
      "question": "Что входит в отчёт о комплексной проверке?",
      "answer": "Наш стандартный отчёт (30+ страниц) включает: профиль фабрики и проверку биографии, фотографии и видео производственных линий, оценку системы менеджмента качества, обзор финансового состояния, список оборудования и анализ возможностей, оценку образцов, анализ цен и нашу рекомендацию по закупкам с обоснованием.",
    },
    "faq-5": {
      "question": "Сколько стоит типичная поездка по закупкам?",
      "answer": "Стоимость наших услуг варьируется от $2 200 до $4 800 в зависимости от продолжительности, местоположений и сложности отрасли. Это покрывает все исследования, работу на месте и отчётность. Ваши расходы на поездку (перелёты, отели, питание) оплачиваются отдельно. Смотрите точные цены на страницах отдельных услуг.",
    },
    "faq-6": {
      "question": "Гарантируете ли вы нахождение подходящего поставщика?",
      "answer": "Мы гарантируем тщательную комплексную проверку и прозрачную отчётность. Хотя мы не можем гарантировать, что каждый поиск найдёт идеальное совпадение, наш показатель удовлетворённости клиентов в 98% отражает нашу способность либо находить подходящих поставщиков, либо предоставлять чёткие, действенные причины, почему поиск не увенчался успехом.",
    },
    "faq-7": {
      "question": "Можете ли вы помочь с малыми заказами или стартапами?",
      "answer": "Да. Многие наши клиенты — стартапы и малые бренды. Мы специально ориентируемся на фабрики, которые принимают меньшие MOQ (минимальные объёмы заказа) и готовы расти вместе с новыми клиентами. Некоторые наши услуги, такие как Шэньчжэньский электронный спринт, особенно удобны для стартапов.",
    },
    "faq-8": {
      "question": "Какие отрасли вы охватываете?",
      "answer": "Мы охватываем электронику, потребительские товары, одежду и текстиль, мебель, продукты питания и напитки, а также специализированное производство. Для каждой отрасли есть специальная страница услуги с подробной методологией. Мы также создаём индивидуальные маршруты для уникальных требований.",
    },
    "faq-9": {
      "question": "Как вы решаете языковые барьеры?",
      "answer": "Вся наша команда двуязычная (китайский/английский). Мы обеспечиваем всё общение во время визитов на фабрики и можем продолжать выступать посредниками после поездки для переговоров и текущей коммуникации. Все отчёты предоставляются на английском языке.",
    },
    "faq-10": {
      "question": "Что происходит после визита на фабрику?",
      "answer": "Вы получаете отчёт в течение 5 рабочих дней. Затем мы планируем 1-часовой разборный звонок для обсуждения выводов и рекомендаций. Мы предоставляем 30 дней поддержки после поездки для коммуникации с поставщиками и можем организовать последующие визиты, заказы образцов или переговоры по контракту.",
    },
    "faq-11": {
      "question": "Работаете ли вы на комиссии от фабрик?",
      "answer": "Нет. Нам на 100% платят наши клиенты. Мы не принимаем комиссии, откаты или реферальные сборы от фабрик. Это гарантирует, что наши оценки полностью непредвзяты, и наш единственный интерес — найти для вас лучшего поставщика.",
    },
    "faq-12": {
      "question": "Можете ли вы помочь с контролем качества после начала производства?",
      "answer": "Да. Мы предлагаем постоянные услуги контроля качества, включая предпроизводственные проверки, проверки во время производства и предотгрузочные проверки. Они доступны как дополнительные услуги для клиентов, установивших отношения с поставщиками через нас.",
    },
  },
} as const;

export function setFAQTranslations(locale: Locale, data: TranslationsMap): void {
  translations[locale] = data;
}

function applyTranslation(f: FAQItem, t: FAQTranslationOverlay | undefined): FAQItem {
  if (!t) return f;
  return {
    ...f,
    question: t.question ?? f.question,
    answer: t.answer ?? f.answer,
  };
}

export function getFAQs(locale: Locale): FAQItem[] {
  const overlay = translations[locale] ?? {};
  return baseFaqs.map((f) => applyTranslation(f, overlay[f.id]));
}

export function getFAQsByCategory(category: string, locale: Locale): FAQItem[] {
  return getFAQs(locale).filter((f) => f.category === category);
}
