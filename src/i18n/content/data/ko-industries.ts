import type { IndustryPage } from '@/types';
import { INDUSTRY_META } from '@/lib/constants';

export const industries: IndustryPage[] = [
  {
    slug: 'electronics',
    name: INDUSTRY_META.electronics.name,
    description: '중국은 세계의 전자제품 공장입니다. 저희는 Shenzhen부터 Dongguan까지 PCB, SMT, 조립, 부품 공급업체를 실사합니다.',
    color: INDUSTRY_META.electronics.color,
    heroCopy:
      'Shenzhen의 Huaqiangbei부터 Dongguan의 정밀 제조 벨트까지, 중국의 전자제품 공급망은 규모와 속도에서 타의 추종을 불허합니다. 저희는 귀하가 자신 있게 이를 탐색할 수 있도록 돕습니다.',
    keyRegions: [
      { name: 'Shenzhen', description: '소비자 가전, IoT 기기, PCB 설계 및 조립, Huaqiangbei 부품 시장.' },
      { name: 'Dongguan', description: '정밀 제조, 금형 제작, CNC 가공, 산업용 전자제품.' },
      { name: 'Huizhou', description: '배터리 제조, 태양광 패널, EV 부품, 신에너지 공급망.' },
    ],
    whatWeAudit: [
      'PCB 제조 및 조립 시설',
      'SMT 생산 라인 및 품질 관리',
      '소비자 가전 OEM/ODM 공장',
      '부품 공급업체 진위성 및 추적성',
      '배터리 및 전원 공급 장치 안전 인증',
      '전자제품 테스트 연구소 역량 및 장비',
    ],
    caseSummary:
      '2025년, 유럽 브랜드를 위해 Shenzhen 전역의 Bluetooth 스피커 공장 15곳을 실사했습니다. 품질 문제 또는 중간상 지위로 인해 11곳을 제외하고 4곳을 쇼트리스트했으며, 고객은 첫 10,000개 주문에서 99.2% 품질률을 달성한 공장을 선택했습니다 — 이전 Alibaba 소싱 공급업체 대비 약 $45,000를 절감했습니다.',
    seoKeywords: [
      '중국 전자제품 제조업체 실사',
      'Shenzhen 공장 방문 서비스',
      '중국 전자제품 공급업체 검증',
      '중국 PCB 조립 공장 검사',
    ],
    relatedServices: ['shenzhen-electronics-sprint', 'shenzhen-dongguan-hardware-audit', 'new-energy-supply-chain'],
  },
  {
    slug: 'consumer-goods',
    name: INDUSTRY_META['consumer-goods'].name,
    description: "Yiwu의 도매 시장부터 Guangzhou의 특화 지구까지, 중국의 광대한 소비재 환경을 아우르며 소싱합니다.",
    color: INDUSTRY_META['consumer-goods'].color,
    heroCopy:
      '중국은 지구상 어느 나라보다 많은 소비재를 생산합니다. 과제는 공급업체를 찾는 것이 아니라 적합한 공급업체를 찾는 것입니다. 저희는 혼란을 뚫고 나아갑니다.',
    keyRegions: [
      { name: 'Yiwu', description: '세계 최대 도매 시장 — 모든 소비재 카테고리를 아우르는 75,000개 이상의 부스.' },
      { name: 'Guangzhou', description: '가방, 시계, 주얼리, 장난감, 패션 액세서리를 위한 특화 도매 지구.' },
      { name: 'Shantou', description: 'Guangdong 동부의 장난감 및 플라스틱 제품 제조 클러스터.' },
    ],
    whatWeAudit: [
      '공장 vs 재판매업체 검증',
      '샘플 간 제품 품질 및 일관성',
      '포장 및 브랜딩 능력',
      '수출 규정 준수 (CE, FDA, CPSIA 등)',
      '생산 능력 및 리드 타임 신뢰성',
      '가격 경쟁력 벤치마킹',
    ],
    caseSummary:
      '미국 Amazon FBA 셀러가 한 번의 출장으로 8개 제품 카테고리를 소싱해야 했습니다. 저희 Guangzhou Multi-Category Sprint는 3일 동안 4개 시장 지구에서 22개 공급업체를 방문했고, 가격이 포함된 카테고리별 공급업체 디렉토리를 제공했으며, 고객은 $15,000 예산 내에서 검증된 6개 공장에 샘플 주문을 진행했습니다.',
    seoKeywords: [
      '중국 소비재 소싱 에이전트',
      'Yiwu 시장 구매 가이드',
      '중국 도매 제품 소싱',
      '중국 Amazon FBA 공급업체 검증',
    ],
    relatedServices: ['yiwu-commodity-sprint', 'guangzhou-multi-category-sourcing'],
  },
  {
    slug: 'apparel-textile',
    name: INDUSTRY_META['apparel-textile'].name,
    description: "중국의 원단 벨트는 세계 최대입니다. 저희는 Shaoxing부터 Guangzhou까지 의류 공장, 방적 공장, 염색 공장을 실사합니다.",
    color: INDUSTRY_META['apparel-textile'].color,
    heroCopy:
      "Keqiao 원단 시장(세계 최대)부터 Guangzhou의 의류 작업장까지, 중국의 의류 공급망은 모든 규모의 패션 브랜드에 비교할 수 없는 다양성과 유연성을 제공합니다.",
    keyRegions: [
      { name: 'Guangzhou', description: '의류 제조, 가죽 제품, Zhongda 원단 시장, Sanyuanli 가죽 지구.' },
      { name: 'Shaoxing / Keqiao', description: '세계 최대 원단 도매 시장, 염색 공장, 날염 시설.' },
      { name: 'Nantong', description: 'Jiangsu 성의 홈 텍스타일, 침구, 타월 제조 클러스터.' },
    ],
    whatWeAudit: [
      '의류 공장 생산 라인 및 품질 시스템',
      '방적 공장 생산 능력 및 최소 주문 수량',
      '염색 공장 환경 규정 준수 및 색상 일관성',
      '가죽 제품 작업장 제작 품질',
      '날염 및 자수 시설 능력',
      '윤리적 제조 및 노동 관행 검증',
    ],
    caseSummary:
      '런던 기반 스트리트웨어 브랜드가 소량 배치 생산(스타일당 100피스)을 필요로 했습니다. Guangzhou 의류 공장 8곳을 방문하고, Zhongda 시장에서 원단을 소싱했으며, 샘플 개발을 조율하고, 브랜드 성장과 함께 100피스에서 1,000피스까지 확장할 의향이 있는 공장을 찾았습니다.',
    seoKeywords: [
      '중국 의류 공장 실사',
      '중국 원단 소싱 에이전트',
      'Guangzhou 의류 제조업체 방문',
      '중국 원단 공급망 검사',
    ],
    relatedServices: ['guangzhou-apparel-leather', 'textile-belt-deep-dive'],
  },
  {
    slug: 'furniture',
    name: INDUSTRY_META.furniture.name,
    description: "Foshan은 중국 가구 수출의 70%를 생산합니다. 원목, 판재, 실내장식, 금속 가구 전반에 걸쳐 공장을 실사합니다.",
    color: INDUSTRY_META.furniture.color,
    heroCopy:
      'Foshan은 중국 가구 제조의 확실한 수도입니다. 모든 자재와 스타일에 대한 클러스터가 있어, 과제는 귀하의 특정 요구사항에 맞는 적합한 공장을 찾는 것입니다.',
    keyRegions: [
      { name: 'Lecong', description: '세계 최대 가구 도매 시장 — 180개 이상의 건물에 걸친 300만 제곱미터의 쇼룸.' },
      { name: 'Longjiang', description: '실내장식 가구, 소파, 매트리스 제조 허브.' },
      { name: 'Shunde', description: '원목 가구, 맞춤형 캐비닛, 고급 주거용 가구 제조.' },
    ],
    whatWeAudit: [
      '원목 진위 검증 (수종, 함수율, 결합 방식)',
      '실내장식 프레임 구조 및 폼 밀도',
      '판재 가구 하드웨어 품질 및 조립 정밀도',
      '마감 품질 (페인트, 래커, 무늬목)',
      '포장 및 컨테이너 적재 관행',
      '맞춤형 및 OEM 능력 평가',
    ],
    caseSummary:
      '두바이 기반 호텔 그룹이 120개 객실에 대한 맞춤형 원목 가구를 필요로 했습니다. Shunde의 6개 공장을 실사하고, 제작 방법과 마감 품질을 검증했으며, 선정된 공장은 업계 평균 8~10%를 크게 밑도는 2%의 불량률로 정시 납품했습니다.',
    seoKeywords: [
      'Foshan 가구 공장 방문',
      '중국 가구 품질 검사',
      '중국 원목 가구 소싱',
      'Foshan 가구 도매 가이드',
    ],
    relatedServices: ['foshan-furniture-sourcing'],
  },
  {
    slug: 'food-beverage',
    name: INDUSTRY_META['food-beverage'].name,
    description: "Yunnan 커피부터 Sichuan 향신료, Ningxia 구기자까지 프리미엄 식음료 제품을 원산지에서 소싱합니다.",
    color: INDUSTRY_META['food-beverage'].color,
    heroCopy:
      "'Made in China' 제조 제품 너머에는 프리미엄 식음료 제품의 풍요로운 지형이 펼쳐져 있습니다. 스페셜티 커피부터 고대 차 전통까지, 생산자와 직접 연결해 드립니다.",
    keyRegions: [
      { name: 'Yunnan', description: '중국 커피 원산지 (생산량의 95%), Pu\'er 차 심장부, 야생 버섯 소싱.' },
      { name: 'Sichuan / Chongqing', description: 'Sichuan 산초, 고추 제품, 특제 소스, 훠궈 베이스, 절임 채소.' },
      { name: 'Ningxia', description: '구기자 수도, 신흥 와인 산지, 프리미엄 양고기 및 농산물.' },
    ],
    whatWeAudit: [
      '직접 생산자 관계를 위한 농장 및 농원 방문',
      '가공 시설 위생 및 식품 안전 기준',
      '유기농 및 지속 가능성 인증 검증',
      '수출 서류 및 규정 준수 (FDA, EU 유기농 등)',
      '제품 품질 등급 평가 및 테이스팅/커핑 세션',
      '포장 및 유통기한 평가',
    ],
    caseSummary:
      '멜버른의 스페셜티 커피 로스터가 Yunnan 커피 직거래를 원했습니다. Baoshan과 Pu\'er의 8개 농장을 방문하고, 커핑 세션을 진행했으며, 이전 콜롬비아 공급업체 가격보다 40% 저렴한 84점 스페셜티 등급 커피를 생산하는 협동조합과 연결했습니다.',
    seoKeywords: [
      '중국 식품 소싱',
      'Yunnan 커피 직거래',
      '중국 차 수입 공급업체',
      '중국 유기농 식품 검증',
    ],
    relatedServices: ['yunnan-coffee-tea-origin', 'sichuan-spice-cuisine-route', 'ningxia-goji-wine-route'],
  },
  {
    slug: 'monopoly-towns',
    name: INDUSTRY_META['monopoly-towns'].name,
    description: "중국의 초특화 제조 도시는 특정 상품의 글로벌 생산을 지배합니다. 저희는 이 숨겨진 공급망을 탐색합니다.",
    color: INDUSTRY_META['monopoly-towns'].color,
    heroCopy:
      '중국 어딘가에는 귀하 제품의 전 세계 공급량 50% 이상을 아마도 단일 도시가 생산하고 있을 것입니다. 이 독점 공장 도시들은 어디를 봐야 하는지만 안다면 따라올 수 없는 전문성과 가격을 제공합니다.',
    keyRegions: [
      { name: 'Zhuji, Zhejiang', description: '세계 양말의 1/3 생산. 주요 진주 가공 중심지이기도 함.' },
      { name: 'Dongyang, Zhejiang', description: '세계 마작 타일의 80% 이상 및 자석 장난감 지배적 점유율.' },
      { name: 'Yongkang, Zhejiang', description: '하드웨어 수도 — 전동 공구, 도어 부속품, 주방용품, 보온병.' },
      { name: 'Taizhou, Zhejiang', description: '금형 제작 및 플라스틱 사출 성형 수도. 주요 자동차 부품 클러스터이기도 함.' },
    ],
    whatWeAudit: [
      '제품 특화 깊이 및 제조 전문성',
      '범용 공장 대비 생산 효율성',
      '원자재 소싱 및 비용 구조',
      '대규모 품질 일관성',
      '수출 경험 및 국제 규정 준수',
      '소유주 운영 vs 경영진 운영 공장',
    ],
    caseSummary:
      '유럽 주방용품 브랜드가 스테인리스 보온병을 원했습니다. 일반 공장은 개당 $4.20를 견적했습니다. 저희는 보온병 수도인 Yongkang으로 안내했고, 자동화 생산 라인을 사용하는 특화 공장이 더 나은 품질로 개당 $2.80를 견적했습니다 — 50,000개 주문에서 33% 비용 절감.',
    seoKeywords: [
      '중국 특화 공장 도시',
      '중국 제조 클러스터 가이드',
      'Zhuji 양말 공장 소싱',
      'Yongkang 하드웨어 제조업체',
    ],
    relatedServices: ['monopoly-factory-towns-explorer'],
  },
  {
    slug: 'canton-fair',
    name: INDUSTRY_META['canton-fair'].name,
    description: '사전 심사된 출품업체 목록, 예약된 부스 미팅, 공장 방문 조율로 Canton Fair ROI를 극대화합니다.',
    color: INDUSTRY_META['canton-fair'].color,
    heroCopy:
      'Canton Fair는 118만 제곱미터에 걸쳐 25,000명 이상의 출품업체가 참가하는 세계 최대 무역 박람회입니다. 대부분의 참석자는 잘못된 홀에서 60%의 시간을 낭비합니다. 저희가 이를 해결합니다.',
    keyRegions: [
      { name: 'Phase 1 (4월/10월 15-19일)', description: '전자제품, 가정용 전기 기기, 기계, 하드웨어, 신에너지.' },
      { name: 'Phase 2 (4월/10월 23-27일)', description: '소비재, 선물, 홈 데코, 건축 자재.' },
      { name: 'Phase 3 (4월/10월 31일-11월 4일)', description: '원단, 의류, 신발, 사무용품, 가방 및 케이스, 식품.' },
    ],
    whatWeAudit: [
      '박람회 전 출품업체 백그라운드 체크',
      '부스 기반 공급업체 능력 평가',
      '출품업체 공장 연결 검증',
      '실시간 가격 협상 문서화',
      '박람회 후 공장 방문 조율',
      '공급업체 비교 및 쇼트리스트 작성',
    ],
    caseSummary:
      '캐나다 수입업체가 2025년 저희 Navigator 서비스를 통해 처음으로 Canton Fair에 참가했습니다. 300명 이상의 출품업체를 사전 심사하고, 5일 동안 45개 부스 미팅 일정을 잡았으며, 상위 6개 후보의 공장 방문을 주선했습니다. 3개의 신규 공급업체에 주문했으며, 가이드 없는 홀 배회 시간을 약 4일 절감한 것으로 추산됩니다.',
    seoKeywords: [
      'Canton Fair 소싱 가이드 2026',
      'Canton Fair 에이전트 서비스',
      'Guangzhou 무역 박람회 도움',
      '중국 무역 박람회 공급업체 검증',
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
