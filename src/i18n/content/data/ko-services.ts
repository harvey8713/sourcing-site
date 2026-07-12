import type { Service } from '@/types';

/* ------------------------------------------------------------------ */
/*  공통 Tier 항목 (서비스별로 커스터마이징됨)                         */
/* ------------------------------------------------------------------ */

const LITE_COMMON = [
  '사전 출장 공장 쇼트리스트 (검증된 공급업체 5~8곳)',
  '이중 언어 통역사 + 전용 차량 + 공급망 연락 담당자 + 플랫폼 책임자',
  '경영진 소개가 포함된 가이드 공장 방문',
  '공항 픽업 및 샌딩',
  '공장 프로필 및 사진이 포함된 10페이지 출장 요약 보고서',
  '출장 후 14일간 WeChat/이메일 지원',
];

const STANDARD_COMMON = [
  '심층 공급업체 심사 (출장 전 50곳 이상 공장 검증)',
  '이중 언어 통역사 + 전용 차량 + 공급망 연락 담당자 + 플랫폼 책임자',
  '5~8개 시설 현장 공장 실사 — 사진, 동영상, QC 문서',
  '연락 담당자 및 책임자와의 환송 만찬',
  '공항 픽업 및 샌딩',
  '30~40페이지 실사 보고서 — 공급업체 평가 매트릭스, 가격 분석, 품질 평가',
  '30일 전담 WeChat 그룹 — 협상 및 계약 검토 지원',
];

const PREMIUM_COMMON_WITH_WELCOME = [
  '엘리트 공급업체 심사 (80~120개 공장, 신용 및 소송 조회)',
  '전담 팀 + 업계 전문가 고문',
  '8~12개 시설 현장 실사 — 재무 건전성 및 생산 능력 평가',
  '환영 만찬 + 공장주와의 임원 환송 만찬',
  '공항 픽업 및 샌딩 + 전 일정 비즈니스 차량',
  '50~60페이지 심층 보고서 — 비용 분석, 위험 지도, 전략',
  '60일 우선 지원 — 공급망 책임자 직통 라인',
  '무료 샘플 통합 및 배송 (최초 5kg)',
];

const PREMIUM_COMMON_NO_WELCOME = [
  '엘리트 공급업체 심사 (80~120개 공장, 신용 및 소송 조회)',
  '전담 팀 + 업계 전문가 고문',
  '8~12개 시설 현장 실사 — 재무 건전성 및 생산 능력 평가',
  '공장주와의 임원 환송 만찬',
  '공항 픽업 및 샌딩 + 전 일정 비즈니스 차량',
  '50~60페이지 심층 보고서 — 비용 분석, 위험 지도, 전략',
  '60일 우선 지원 — 공급망 책임자 직통 라인',
  '무료 샘플 통합 및 배송 (최초 5kg)',
];

/* Helper – 일수에 따라 적절한 프리미엄 공통 목록 반환 */
function premiumCommon(days: number) {
  return days >= 5 ? PREMIUM_COMMON_WITH_WELCOME : PREMIUM_COMMON_NO_WELCOME;
}

/* ------------------------------------------------------------------ */
/*  서비스                                                             */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  /* ================================================================ */
  /*  1. Shenzhen Electronics Sprint                                   */
  /* ================================================================ */
  {
    slug: 'shenzhen-electronics-sprint',
    title: 'Shenzhen Electronics Sprint',
    subtitle:
      'Huaqiangbei, OEM 공장, 그리고 Shenzhen 하드웨어 생태계에 대한 5일간 심층 탐방',
    category: 'Electronics Sprint',
    industry: 'electronics',
    location: 'Shenzhen, Guangdong',
    cities: ['Shenzhen'],
    durationDays: 5,
    durationLabel: '5일',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$5,199',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('검증된 공급업체 5~8곳', 'Shenzhen 전자공장 5~8곳')),
          'Huaqiangbei 시장 간략 둘러보기',
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          '소싱 엔지니어와 함께하는 Huaqiangbei 부품 시장 가이드 투어',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          'PCB 리버스 엔지니어링 분석 보고서',
        ],
      },
    ],
    description:
      '경험이 풍부한 소싱 에이전트와 함께 Shenzhen 전자공장과 Huaqiangbei 시장을 방문합니다. 중국 하드웨어 수도에서 공장 실사, 공급업체 검증, 부품 소싱을 진행합니다.',
    longDescription:
      'Shenzhen은 세계 전자제품 제조의 수도입니다. 5일 동안 IoT 기기부터 소비자 가전까지 모든 것을 생산하는 공장 내부로 안내합니다. 전설적인 Huaqiangbei 부품 시장을 둘러보고, 잠재적 제조 파트너를 실사하며, 검증된 공급업체 쇼트리스트를 가지고 떠나실 수 있습니다.',
    whatIsIncluded: [
      '사전 출장 공급업체 쇼트리스트 (공장 10~15곳)',
      '5~8개 시설 현장 공장 실사',
      'Huaqiangbei 시장 가이드 투어',
      '샘플 수집 및 배송 조율',
      '사진 및 동영상이 포함된 30페이지 이상의 실사 보고서',
      '출장 후 공급업체 협상 지원',
    ],
    process: [
      { step: 1, title: '요구사항 브리핑', description: '제품 사양, BOM, 목표 가격, 인증 요구사항을 문서화합니다.' },
      { step: 2, title: '공급업체 심사', description: '무역 데이터, 인증, 샘플 검토를 활용하여 50곳 이상의 공장을 심사하고 쇼트리스트를 작성합니다.' },
      { step: 3, title: '현장 스프린트', description: '5일간 연속 공장 방문, 생산 라인 점검, 경영진 인터뷰를 진행합니다.' },
      { step: 4, title: 'Huaqiangbei 심층 탐방', description: '소싱 엔지니어와 함께 세계 최대 전자제품 시장에서 부품 소싱을 진행합니다.' },
      { step: 5, title: '보고서 및 인계', description: '공급업체 순위, 가격 분석, 계약 협상 지원이 포함된 상세 보고서를 제공합니다.' },
    ],
    highlights: [
      'Alibaba에서 찾을 수 없는 공장 접근',
      '부품 단위 비용 분석',
      'PCB 제조 파트너 평가',
      '인증 규정 준수 확인 (CE, FCC, RoHS)',
    ],
    suitableFor: [
      '전자기기 프로토타이핑 중인 하드웨어 스타트업',
      '소비자 가전을 소싱하는 수입업체',
      'IoT/스마트홈 브랜드',
      'PCB 조립 파트너가 필요한 기업',
    ],
    notSuitableFor: [
      '완제품, 저복잡도 상품 구매자',
      '단일 공장 방문을 원하는 분 (본 서비스는 스프린트 방식입니다)',
    ],
    seoKeywords: [
      'Shenzhen 전자공장 실사',
      'Huaqiangbei 소싱 가이드',
      '중국 전자제품 제조 방문',
      'Shenzhen PCB 공급업체 검증',
      '중국 전자제품 소싱 에이전트',
    ],
    faq: [
      { question: '중국어를 할 줄 알아야 하나요?', answer: '아니요. 이중 언어 팀이 모든 의사소통을 처리합니다. 회의 중 통역을 하고 모든 문서를 번역해 드립니다.' },
      { question: '소량 MOQ도 도와주시나요?', answer: '네. Shenzhen에는 소량 배치 주문(100~500개)을 수락하는 공장이 많습니다. 저희는 특히 스타트업을 위해 이러한 공장을 대상으로 합니다.' },
      { question: '어떤 인증을 확인할 수 있나요?', answer: 'CE, FCC, RoHS, UL, ISO 9001 및 기타 일반 인증을 확인합니다. 공장별 인증도 현장에서 검증 가능합니다.' },
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
      '산업용 하드웨어, 금형 제작, 정밀 제조에 대한 5일간의 실사',
    category: 'Hardware Audit',
    industry: 'electronics',
    location: 'Shenzhen & Dongguan, Guangdong',
    cities: ['Shenzhen', 'Dongguan'],
    durationDays: 5,
    durationLabel: '5일',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          '금형 제작 및 CNC 가공 시설 심층 탐방',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          '금형 흐름 분석 및 자재 추적성 평가',
        ],
      },
    ],
    description:
      'Shenzhen과 Dongguan 전역의 정밀 제조, 금형 제작, 산업용 하드웨어 공급업체를 실사합니다. 상세한 시설 점검과 재무 건전성 확인을 포함합니다.',
    longDescription:
      'Shenzhen-Dongguan 회랑은 중국 정밀 제조의 중추입니다. 사출 금형부터 CNC 가공까지, 이 5일간의 실사는 산업용 하드웨어 공급망을 포괄합니다. 공장을 점검하고, 품질 시스템을 검토하며, 재무 건전성을 확인하여 안심하고 소싱할 수 있도록 합니다.',
    whatIsIncluded: [
      '사전 출장 공장 심사 (시설 8~12곳)',
      '현장 금형 제작 시설 점검',
      'CNC 가공 및 공구 실사',
      '품질 관리 시스템 검토',
      '재무 건전성 평가',
      '공장 비교 매트릭스가 포함된 30페이지 이상의 보고서',
    ],
    process: [
      { step: 1, title: '요구사항 매핑', description: '자재 사양, 공차, 생산량, 품질 기준을 정의합니다.' },
      { step: 2, title: '공장 심사', description: '40곳 이상의 공장을 심사하고, 생산 능력 매칭을 기준으로 현장 방문용 8~12곳을 쇼트리스트합니다.' },
      { step: 3, title: '현장 실사', description: '공장 방문, 생산 라인 점검, QC 프로세스 검토, 경영진 인터뷰를 진행합니다.' },
      { step: 4, title: '품질 심층 분석', description: '샘플 부품, 테스트 보고서, 품질 관리 문서를 검토합니다.' },
      { step: 5, title: '비교 보고서', description: '가격, 생산 능력, 위험 평가가 포함된 공장별 비교 분석을 제공합니다.' },
    ],
    highlights: [
      '금형 흐름 분석 검토',
      '자재 추적성 검증',
      '정밀 공차 능력 평가',
      '공급망 재무 안정성 확인',
    ],
    suitableFor: [
      '산업 기계 구매자',
      '정밀 금속/플라스틱 부품이 필요한 기업',
      '금형 및 공구 수입업체',
      '자동차 부품 소싱',
    ],
    notSuitableFor: [
      '소비자 가전 프로토타이핑 (Electronics Sprint 참조)',
      '단순 범용 제품',
    ],
    seoKeywords: [
      'Dongguan 금형 공장 실사',
      '중국 정밀 제조 검사',
      'Shenzhen 하드웨어 공급업체 검증',
      '중국 CNC 가공 공장 실사',
    ],
    faq: [
      { question: 'ISO 인증 공장도 실사 가능한가요?', answer: '네. 현장 방문 중 ISO 9001, IATF 16949 및 기타 인증을 검증합니다.' },
      { question: '재무 기록도 검토하나요?', answer: '등록 자본금 확인, 수출 이력, 중국 기업 데이터베이스를 통한 신용 조회 등 재무 건전성 평가를 수행합니다.' },
      { question: '어떤 공차까지 확인할 수 있나요?', answer: '±0.01mm 공차까지 생산하는 시설을 평가할 수 있습니다. 측정 도구를 지참하고 공장 QC 장비를 검토합니다.' },
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
      '주강 삼각주 지역의 리튬 배터리, 태양광, EV 부품 공급업체에 대한 3일간의 실사',
    category: 'New Energy',
    industry: 'electronics',
    location: 'Shenzhen & 주강 삼각주',
    cities: ['Shenzhen', 'Dongguan', 'Huizhou'],
    durationDays: 3,
    durationLabel: '3일',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          '안전 인증 검증 (UN38.3, IEC, UL)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          '공급망 분쟁 광물 규정 준수 실사',
        ],
      },
    ],
    description:
      '리튬 배터리, 태양광 패널, EV 부품 공급업체를 위한 전문 실사 서비스입니다. 안전 인증 검증과 생산 능력 평가를 포함합니다.',
    longDescription:
      '중국은 글로벌 신에너지 공급망을 지배하고 있습니다. 리튬 배터리 셀부터 태양광 패널 부품까지, 에너지 전환을 주도하는 공장을 실사합니다. 3일간의 집중 실사는 안전 인증, 생산 능력, 공급망 추적성을 포괄합니다.',
    whatIsIncluded: [
      '공급업체 사전 심사 (배터리, 태양광, EV 부품)',
      '현장 공장 점검 (시설 3~5곳)',
      '안전 인증 검증 (UN38.3, IEC, UL)',
      '생산 라인 및 테스트 연구소 실사',
      '원자재 추적성 확인',
      '규정 준수 평가가 포함된 25페이지 이상의 보고서',
    ],
    process: [
      { step: 1, title: '제품 사양 검토', description: '화학 성분, 용량, 폼팩터, 인증 요구사항을 정의합니다.' },
      { step: 2, title: '공급업체 식별', description: '산업 데이터베이스와 무역 네트워크를 통해 적격 제조업체를 식별합니다.' },
      { step: 3, title: '공장 실사', description: '생산, 테스트, 안전 시스템을 포괄하는 3일간의 집중 방문입니다.' },
      { step: 4, title: '규정 준수 검증', description: '인증서, 테스트 보고서, 규제 준수 여부를 교차 확인합니다.' },
      { step: 5, title: '위험 평가 보고서', description: '공급업체 준비 상태 및 규정 준수 격차에 대한 권장 사항이 포함된 상세 결과 보고서입니다.' },
    ],
    highlights: [
      '배터리 셀 안전 인증 확인',
      '공급망 분쟁 광물 규정 준수',
      '공장 테스트 연구소 능력 평가',
      '수출 라이선스 검증',
    ],
    suitableFor: [
      'EV 부품 구매자',
      '태양광 에너지 장비 수입업체',
      '배터리 및 보조배터리 유통업체',
      '에너지 저장 시스템 기업',
    ],
    notSuitableFor: [
      '소규모 소비자 가전 배터리',
      '비인증 제품 구매자',
    ],
    seoKeywords: [
      '중국 리튬 배터리 공급업체 실사',
      '중국 태양광 패널 공장 검사',
      'EV 부품 공급업체 검증',
      '중국 신에너지 공급망 실사',
    ],
    faq: [
      { question: 'UN38.3 인증을 검증하나요?', answer: '네. 공장 실사 중 UN38.3, MSDS, IEC 62133 및 기타 관련 안전 인증을 검증합니다.' },
      { question: '분쟁 광물 여부를 확인할 수 있나요?', answer: '공급업체 광물 소싱 문서를 검토하고, 코발트, 리튬 및 기타 자재의 공급망을 추적할 수 있습니다.' },
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
      '소비재를 위한 세계 최대 도매 시장에서의 3일간 가이드 소싱',
    category: 'Commodity Sprint',
    industry: 'consumer-goods',
    location: 'Yiwu, Zhejiang',
    cities: ['Yiwu'],
    durationDays: 3,
    durationLabel: '3일',
    price: '$4,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$3,599',
        includes: [
          ...LITE_COMMON.map((s) => s.replace('공장', '시장 부스')),
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$4,799',
        includes: [
          ...STANDARD_COMMON.map((s) => s.replace('공장', '공급업체')),
          '구역별 시장 동선 최적화',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$7,999',
        includes: [
          ...premiumCommon(3),
          '부스 뒤 실제 공장 검증 방문',
        ],
      },
    ],
    description:
      '이중 언어 소싱 가이드와 함께 Yiwu 국제 무역 도시를 탐색합니다. 세계 최대 도매 시장에서 검증된 공급업체를 찾고, 가격을 협상하며, 샘플을 배송합니다.',
    longDescription:
      'Yiwu 국제 무역 도시는 400만 제곱미터 규모에 75,000개 이상의 부스가 있습니다. 압도적이며 중간상들로 가득합니다. 저희는 이러한 혼란을 뚫고 나아갑니다: 검증된 제조업체(재판매업체가 아닌)로 안내하고, MOQ와 가격을 협상하며, 샘플 통합 및 배송을 주선합니다.',
    whatIsIncluded: [
      '사전 출장 카테고리 리서치 및 부스 매핑',
      '2일간의 가이드 시장 탐색',
      '공급업체 검증 (공장 vs 재판매업체 확인)',
      '가격 협상 지원',
      '샘플 수집 및 배송 조율',
      '출장 후 커뮤니케이션 지원 (14일)',
    ],
    process: [
      { step: 1, title: '카테고리 리서치', description: '제품 카테고리를 올바른 Yiwu 구역에 매핑하고 제조업체 부스를 식별합니다.' },
      { step: 2, title: '1일차: 구역 탐색', description: '관련 시장 구역을 가이드와 함께 둘러보며 공급업체 명함과 샘플을 수집합니다.' },
      { step: 3, title: '2일차: 심층 탐방', description: '상위 후보를 재방문하여 가격 협상, 공장 자격 증명 확인, 샘플 주문을 진행합니다.' },
      { step: 4, title: '3일차: 통합', description: '샘플 품질 확인, 배송 조율, 공급업체 요약 문서화를 진행합니다.' },
      { step: 5, title: '출장 후 지원', description: '14일간 이메일/WeChat을 통해 공급업체와 후속 조치하여 샘플 주문 및 생산 일정을 확인합니다.' },
    ],
    highlights: [
      '목적 없는 배회 시간 절약',
      '재판매업체가 아닌 제조업체 부스 접근',
      '실시간 가격 협상',
      '샘플 통합 및 배송',
    ],
    suitableFor: [
      'Yiwu 첫 방문 구매자',
      '소비재를 소싱하는 Amazon FBA 셀러',
      '일반 상품 수입업체',
      '선물 및 판촉물 구매자',
    ],
    notSuitableFor: [
      '고사양 전자제품 (Shenzhen Electronics Sprint 참조)',
      '맞춤형 제조 제품 (Guangzhou Multi-Category 참조)',
    ],
    seoKeywords: [
      'Yiwu 시장 소싱 가이드',
      'Yiwu 도매 시장 에이전트',
      'Yiwu 국제 무역 도시 가이드',
      '중국 도매 시장 소싱 출장',
    ],
    faq: [
      { question: 'Yiwu는 저가 제품만 취급하나요?', answer: '아니요. Yiwu는 저비용 범용 상품으로 알려져 있지만 품질 등급이 존재합니다. 귀하의 시장에 적합한 품질 수준을 찾도록 도와드립니다.' },
      { question: 'Yiwu에서 배송은 어떻게 처리하나요?', answer: '화물 운송업체와 협력하여 샘플을 통합하고 항공 또는 해상으로 배송합니다. 신뢰할 수 있는 물류 파트너도 추천해 드릴 수 있습니다.' },
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
      'Guangzhou의 도매 시장 및 공장을 아우르는 3일간의 다중 카테고리 소싱',
    category: 'Multi-Category',
    industry: 'consumer-goods',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 3,
    durationLabel: '3일',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          '다중 시장 조율 (Sanyuanli, Zhanxi Road, Liwan Plaza)',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          '각 제품 카테고리별 맞춤형 공장 방문 주선',
        ],
      },
    ],
    description:
      'Guangzhou에서 가방, 시계, 주얼리, 장난감, 선물, 패션 액세서리 등 여러 제품 카테고리를 소싱합니다. 검증된 공급업체 연결을 제공합니다.',
    longDescription:
      'Guangzhou는 가방, 시계, 주얼리, 장난감, 패션 액세서리 등 다양한 소비재의 허브입니다. 3일 동안 주요 도매 시장을 둘러보고 각 카테고리에 대한 검증된 공장과 연결해 드립니다. 한 번의 출장으로 여러 제품 라인을 소싱하세요.',
    whatIsIncluded: [
      '카테고리별 시장 매핑',
      '2일간의 가이드 시장 및 공장 방문',
      '카테고리별 공급업체 검증',
      '가격 비교 및 협상 지원',
      '샘플 조달 및 통합',
      '출장 후 소싱 추천',
    ],
    process: [
      { step: 1, title: '카테고리 매핑', description: '목표 제품 카테고리를 Guangzhou 전문 시장에 매핑합니다.' },
      { step: 2, title: '시장 방문', description: '가방(Sanyuanli), 시계(Zhanxi Road), 주얼리(Liwan Plaza) 등 각 카테고리별 도매 시장을 방문합니다.' },
      { step: 3, title: '공장 연결', description: '맞춤형 제조가 필요한 카테고리에 대해 인근 공장 방문을 주선합니다.' },
      { step: 4, title: '비교 및 선정', description: '카테고리별 공급업체를 비교하고, 샘플을 평가하며, 가격을 문서화합니다.' },
      { step: 5, title: '인계 패키지', description: '정리된 공급업체 디렉토리, 가격 요약, 배송 조율을 제공합니다.' },
    ],
    highlights: [
      '한 번의 출장으로 다중 카테고리 효율성',
      '각 카테고리별 공장 직거래 연결',
      '시장 가격 벤치마킹',
      '샘플 통합 서비스',
    ],
    suitableFor: [
      '다중 제품 Amazon/Shopify 셀러',
      '일반 상품 수입업체',
      '선물 및 판촉물 기업',
      '다양한 니즈를 가진 첫 중국 소싱자',
    ],
    notSuitableFor: [
      '단일 카테고리, 대량 소싱 (전문 스프린트 참조)',
      '고도로 규제된 제품 (의료기기 등)',
    ],
    seoKeywords: [
      'Guangzhou 도매 시장 소싱',
      '중국 다중 카테고리 제품 소싱',
      'Guangzhou 공장 에이전트',
      '중국 도매 시장 가이드',
    ],
    faq: [
      { question: '한 번의 출장으로 여러 카테고리의 제품을 소싱할 수 있나요?', answer: '물론입니다. 본 서비스는 바로 이를 위해 설계되었습니다. 귀하의 카테고리를 Guangzhou 전문 시장에 매핑하여 효율성을 극대화합니다.' },
      { question: '몇 개의 공급업체를 방문하게 되나요?', answer: '시장 간 거리에 따라 다르지만, 일반적으로 2~3일 동안 목표 카테고리 전반에서 15~25개 공급업체를 방문합니다.' },
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
      'Guangzhou 의류, 원단, 가죽 제품 공급망에 대한 4일간의 심층 탐방',
    category: 'Apparel Sprint',
    industry: 'apparel-textile',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 4,
    durationLabel: '4일',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          'Zhongda 원단 시장 소싱 + 샘플 수집',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          '선정된 공장과의 샘플 제작 조율',
        ],
      },
    ],
    description:
      'Guangzhou의 전문 도매 시장 및 공장에서 의류, 원단, 가죽 제품을 소싱합니다. 품질 검사와 공급업체 검증이 포함됩니다.',
    longDescription:
      'Guangzhou는 중국의 패션 및 원단 무역 수도입니다. Sanyuanli 가죽부터 Zhongda 원단 시장까지, 완전한 의류 공급망을 안내합니다. 공장 방문, 원단 소싱, 샘플 제작, 모든 단계의 품질 검사가 포함됩니다.',
    whatIsIncluded: [
      '사전 출장 원단 및 스타일 브리핑',
      '원단 시장(Zhongda) 및 가죽 지구(Sanyuanli) 가이드 방문',
      '의류 공장 실사 (3~5개 시설)',
      '샘플 제작 조율',
      '품질 검사 체크리스트',
      '가격이 포함된 공급업체 비교 보고서',
    ],
    process: [
      { step: 1, title: '디자인 및 원단 브리핑', description: '디자인, 원단 요구사항, 목표 가격대, 품질 기준을 문서화합니다.' },
      { step: 2, title: '원단 소싱', description: 'Zhongda 원단 시장을 방문하여 자재를 소싱하고 견본을 수집합니다.' },
      { step: 3, title: '공장 방문', description: '의류 및 가죽 제품 공장의 생산 능력, 수용량, 품질 시스템을 실사합니다.' },
      { step: 4, title: '샘플 개발', description: '선정된 공장과 샘플 제작을 조율하고, 품질을 검토하며, 사양을 문서화합니다.' },
      { step: 5, title: '생산 계획', description: '공장 선정을 최종 확정하고, 생산 조건을 협상하며, 품질 체크포인트를 설정합니다.' },
    ],
    highlights: [
      '중국 최대 원단 시장 직접 접근',
      '의류 및 가죽 작업장 공장 실사',
      '샘플 제작 및 품질 검사',
      '소규모 브랜드를 위한 MOQ 협상',
    ],
    suitableFor: [
      '새 컬렉션을 론칭하는 패션 브랜드',
      '가죽 제품 및 가방 디자이너',
      '스트리트웨어 및 의류 스타트업',
      '원단 수입업체',
    ],
    notSuitableFor: [
      '초대량 범용 기본 상품 (T셔츠, 양말)',
      '신발/풋웨어 (별도 공급망)',
    ],
    seoKeywords: [
      'Guangzhou 의류 공장 소싱',
      '중국 의류 제조업체 실사',
      'Sanyuanli 가죽 시장 가이드',
      '중국 패션 공급망 방문',
    ],
    faq: [
      { question: '소량 MOQ 패션 브랜드도 도와주시나요?', answer: '네. Guangzhou에는 신규 브랜드와 협력하는 공장이 많습니다. 일반적인 MOQ는 스타일당 50~100피스부터 시작합니다.' },
      { question: '원단만 별도로 소싱할 수 있나요?', answer: '네. Zhongda 시장에서 원단을 소싱하고 다른 곳에서 제조하더라도 원단 공급업체와 연결해 드릴 수 있습니다.' },
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
      '중국 원단 제조 회랑 종합 투어: Keqiao, Shaoxing, Nantong 5일간',
    category: 'Textile Deep Dive',
    industry: 'apparel-textile',
    location: 'Zhejiang & Jiangsu',
    cities: ['Shaoxing', 'Keqiao', 'Nantong'],
    durationDays: 5,
    durationLabel: '5일',
    price: '$6,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$4,999',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$6,799',
        includes: [
          ...STANDARD_COMMON,
          'Keqiao 원단 시장 탐색 + 방적 공장 실사',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$11,499',
        includes: [
          ...premiumCommon(5),
          '제3자 원단 테스트 조율 (염색 견뢰도, 수축률, 성분 분석)',
        ],
      },
    ],
    description:
      '중국 원단 제조 중심지를 투어합니다. Keqiao, Shaoxing, Nantong의 방적 공장, 염색 공장, 의류 공장을 방문합니다.',
    longDescription:
      '중국의 원단 벨트는 Zhejiang에서 Jiangsu까지 이어지며, 세계 최대 규모의 방적 공장, 염색 공장, 의류 공장이 밀집해 있습니다. 이 5일간의 심층 탐방은 원사부터 완성 의류까지 공급망 내부로 안내하며, 모든 단계에서 전문가의 안내를 제공합니다.',
    whatIsIncluded: [
      '원단 공급망 매핑',
      '방적 공장, 염색 공장, 날염 시설 방문',
      '의류 공장 실사 (5~8개 시설)',
      '원단 샘플 수집 및 테스트 조율',
      '지속 가능성 및 규정 준수 평가',
      '공급업체 순위가 포함된 40페이지 이상의 보고서',
    ],
    process: [
      { step: 1, title: '원단 브리핑', description: '원단 유형, 중량, 가공, 날염, 지속 가능성 요구사항을 정의합니다.' },
      { step: 2, title: '방적 공장 심사', description: '사양에 맞는 방적 공장과 염색 공장을 식별하고 사전 심사합니다.' },
      { step: 3, title: '현장 방문', description: 'Zhejiang-Jiangsu 원단 회랑을 따라 5일간 방적 공장 및 공장을 방문합니다.' },
      { step: 4, title: '샘플 및 테스트', description: '원단 샘플을 수집하고 제3자 테스트(염색 견뢰도, 수축률, 성분)를 조율합니다.' },
      { step: 5, title: '공급망 설계', description: '각 단계별 추천 파트너를 포함한 완전한 원단 공급망을 매핑합니다.' },
    ],
    highlights: [
      '중국 최대 원단 도매 시장 (Keqiao)',
      '방적 공장 직거래 가격 벤치마크',
      '염색 공장 환경 규정 준수 점검',
      '완전한 원단 공급망 매핑',
    ],
    suitableFor: [
      '생산 규모를 확장하는 패션 브랜드',
      '홈 텍스타일 수입업체',
      '기능성 원단 구매자',
      '지속 가능한 원단 소싱이 필요한 기업',
    ],
    notSuitableFor: [
      '소량 배치 패션 스타트업 (Guangzhou Apparel 참조)',
      '비원단 제품 카테고리',
    ],
    seoKeywords: [
      '중국 원단 공장 투어',
      'Keqiao 원단 시장 소싱',
      '중국 원단 공급망 실사',
      'Shaoxing 방적 공장 방문',
    ],
    faq: [
      { question: '지속 가능/유기농 인증을 검증할 수 있나요?', answer: '네. 공장 방문 중 GOTS, OEKO-TEX, BCI 및 기타 지속 가능성 인증을 검증합니다.' },
      { question: '중국 방적 공장의 최소 원단 주문량은 얼마인가요?', answer: '일반적으로 직물은 색상/디자인당 500~1,000미터이지만, 방적 공장마다 다릅니다. 샘플링 목적으로 더 낮은 MOQ를 협상할 수 있습니다.' },
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
      '중국 가구 제조 수도에서의 4일간 가이드 소싱',
    category: 'Furniture Sprint',
    industry: 'furniture',
    location: 'Foshan, Guangdong',
    cities: ['Foshan'],
    durationDays: 4,
    durationLabel: '4일',
    price: '$5,799',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$4,299',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$5,799',
        includes: [
          ...STANDARD_COMMON,
          'Lecong 쇼룸 탐색 + 공장 실사',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$9,799',
        includes: [
          ...premiumCommon(4),
          '선적 전 자재 및 제작 품질 검사',
        ],
      },
    ],
    description:
      '세계 최대 가구 제조 허브인 Foshan에서 공장 직거래로 가구를 소싱합니다. 품질 검사, 자재 검증, 물류 지원을 제공합니다.',
    longDescription:
      'Foshan은 중국 가구 수출의 70%를 생산합니다. 원목부터 모던 미니멀리즘까지, 공장과 쇼룸 내부로 안내합니다. 생산 라인을 보고, 자재를 검사하며, 제작 품질을 테스트하고, 공장주와 직접 협상할 수 있습니다.',
    whatIsIncluded: [
      '사전 출장 스타일 및 자재 브리핑',
      '8~15개 공장 및 쇼룸 가이드 방문',
      '자재 및 제작 품질 검사',
      '가격 협상 지원',
      '물류 및 배송 조율',
      '품질 관리 체크포인트 설정',
    ],
    process: [
      { step: 1, title: '디자인 브리핑', description: '가구 스타일, 자재, 치수, 목표 가격, 목표 시장 요구사항을 문서화합니다.' },
      { step: 2, title: '공장 선정', description: '귀하의 요구사항을 전문 Foshan 공장(원목, 판재, 실내장식, 금속)에 매칭합니다.' },
      { step: 3, title: '쇼룸 및 공장 방문', description: 'Lecong, Longjiang, Shunde 전역의 공장과 쇼룸을 4일간 집중 투어합니다.' },
      { step: 4, title: '품질 평가', description: '제작 방법, 자재 품질, 마감 기준, 포장을 검사합니다.' },
      { step: 5, title: '주문 및 QC 설정', description: '공장 선정을 확정하고, 조건을 협상하며, 품질 관리 검사 지점을 설정합니다.' },
    ],
    highlights: [
      '쇼룸 뒤 실제 공장 접근',
      '자재 진위 검증 (원목 vs 무늬목)',
      '가구 전용 QC 체크리스트',
      '컨테이너 적재 감독 옵션',
    ],
    suitableFor: [
      '가구 소매업체 및 도매업체',
      '인테리어 디자인 회사',
      '호텔 및 숙박업 가구 구매자',
      '이커머스 가구 셀러',
    ],
    notSuitableFor: [
      '맞춤형 단품 가구 (비용 효율이 낮음)',
      '컨테이너 단위 주문이 준비되지 않은 구매자',
    ],
    seoKeywords: [
      'Foshan 가구 공장 투어',
      '중국 가구 소싱 가이드',
      'Foshan 가구 도매 시장',
      '중국 가구 제조업체 실사',
    ],
    faq: [
      { question: '한 컨테이너에 여러 종류의 가구를 혼합할 수 있나요?', answer: '네. 많은 Foshan 공장이 혼합 컨테이너 주문을 전문으로 합니다. 여러 공장에 걸쳐 하나의 컨테이너를 채울 수 있도록 조율해 드립니다.' },
      { question: '선적 전 가구를 검사하나요?', answer: '선적 전 검사를 부가 서비스로 제공합니다. 여기에는 결함 확인, 수량 검증, 컨테이너 적재 감독이 포함됩니다.' },
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
      'Yunnan 커피 농장, 차 농장, 가공 시설을 방문하는 5일간의 원산지 탐방',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Yunnan Province',
    cities: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
    durationDays: 5,
    durationLabel: '5일',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          '생산자와의 커핑 및 테이스팅 세션',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$11,799',
        includes: [
          ...premiumCommon(5),
          'Q-grader 인증 커핑 세션 + 상세 원산지 보고서',
        ],
      },
    ],
    description:
      'Yunnan 커피 농장과 차 농장을 방문합니다. 생산자를 만나고, 가공 시설을 점검하며, 스페셜티 커피와 Pu\'er 차를 원산지에서 소싱합니다.',
    longDescription:
      'Yunnan은 중국 커피의 95%를 생산하며 Pu\'er 차의 발상지입니다. 이 5일간의 원산지 탐방은 Baoshan의 커피 농장과 Pu\'er의 차 농장으로 안내합니다. 생산자를 만나고, 커피를 커핑하며, 차를 시음하고, 재배자와 직접적인 관계를 구축합니다.',
    whatIsIncluded: [
      '사전 출장 원산지 리서치 및 생산자 심사',
      '커피 농장 및 습식/건식 정제 공장 방문',
      '차 농장 및 가공 시설 투어',
      '커핑 및 테이스팅 세션',
      '샘플 수집 및 수출 서류 검토',
      '생산자 관계 구축 지원',
    ],
    process: [
      { step: 1, title: '제품 브리핑', description: '커피 등급(스페셜티/커머셜), 차 유형, 물량, 품질 파라미터를 정의합니다.' },
      { step: 2, title: '생산자 심사', description: '커피 농장, 협동조합, 차 생산자를 조사하고 사전 심사합니다.' },
      { step: 3, title: '원산지 방문', description: 'Yunnan 전역의 농장, 정제 공장, 가공 시설을 5일간 투어합니다.' },
      { step: 4, title: '품질 평가', description: '커핑, 시음, 등급 평가, 품질 문서화를 진행합니다.' },
      { step: 5, title: '직거래 설정', description: '생산자와의 직접 관계 구축, 샘플 배송, 수출 프로세스 시작을 지원합니다.' },
    ],
    highlights: [
      '중간상 없는 직접 생산자 관계',
      '스페셜티 커피 커핑 세션',
      'Pu\'er 차 숙성 시설 방문',
      '수출 서류 안내',
    ],
    suitableFor: [
      '스페셜티 커피 로스터',
      '차 수입업체 및 소매업체',
      '직거래를 원하는 커피 체인',
      '식음료 브랜드',
    ],
    notSuitableFor: [
      '범용 등급 커피 트레이더 (본 서비스는 스페셜티 중심입니다)',
      '인스턴트 커피 또는 티백 생산업체',
    ],
    seoKeywords: [
      'Yunnan 커피 농장 방문',
      '중국 커피 소싱 출장',
      'Pu\'er 차 원산지 투어',
      '중국 스페셜티 커피 공급업체',
    ],
    faq: [
      { question: '농장에서 생두를 직접 구매할 수 있나요?', answer: '네. 직접 거래 관계를 지원합니다. Yunnan 커피 농장은 일반적으로 60kg 백 단위로 생두를 판매하며, 로트당 최소 1~5백부터 주문 가능합니다.' },
      { question: 'Yunnan에서 어떤 차 품종을 소싱할 수 있나요?', answer: 'Pu\'er(생차 및 숙차), Yunnan 홍차(Dianhong), 녹차, 백차. 귀하의 요구사항에 따라 각 품종별 생산자를 방문합니다.' },
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
      'Sichuan 산초, 고추, 특제 소스 및 식자재를 위한 4일간의 소싱 출장',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Sichuan & Chongqing',
    cities: ['Chengdu', 'Chongqing'],
    durationDays: 4,
    durationLabel: '4일',
    price: '$5,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$4,499',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$5,999',
        includes: [
          ...STANDARD_COMMON,
          '향신료 시장 투어 + 생산 시설 방문',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$9,999',
        includes: [
          ...premiumCommon(4),
          '현지 셰프와의 맞춤형 레시피 개발 세션',
        ],
      },
    ],
    description:
      'Sichuan과 Chongqing의 생산자로부터 정통 Sichuan 산초, 고추 제품, 특제 소스 및 중국 식자재를 직접 소싱합니다.',
    longDescription:
      'Sichuan 요리는 전 세계를 강타하고 있습니다. 프리미엄 Sichuan 산초부터 발효 된장과 훠궈 베이스까지, 이 4일간의 출장은 생산자와 직접 연결해 드립니다. 향신료 시장을 방문하고, 생산 시설을 견학하며, 중국에서 가장 풍미 넘치는 성(省)을 미각으로 체험하세요.',
    whatIsIncluded: [
      '제품 카테고리 리서치 및 생산자 매핑',
      '향신료 도매 시장 및 생산자 방문',
      '소스 및 조미료 공장 투어',
      '식자재 시식 및 품질 평가',
      '수출 규정 준수 및 서류 검토',
      '생산자 연락처 디렉토리 및 가격 요약',
    ],
    process: [
      { step: 1, title: '제품 목록', description: '목표 제품 정의: 산초 등급, 고추 유형, 소스 카테고리, 물량 요구사항.' },
      { step: 2, title: '생산자 리서치', description: '무역 네트워크와 시장 조사를 통해 각 카테고리별 우수 생산자를 식별합니다.' },
      { step: 3, title: '시장 및 공장 방문', description: 'Chengdu 향신료 시장과 Chongqing 식품 가공 시설을 4일간 투어합니다.' },
      { step: 4, title: '품질 및 규정 준수', description: '시식 테스트, 품질 등급 평가, 수출 서류 검증을 진행합니다.' },
      { step: 5, title: '소싱 인계', description: '가격, MOQ, 수출 준비도 평가가 포함된 정리된 공급업체 디렉토리를 제공합니다.' },
    ],
    highlights: [
      'Sichuan 산초 생산자 직접 접근',
      '포장 소스 및 조미료 공장 투어',
      '품질 등급 교육 (산초 등급, 고추 매운맛 수준)',
      '수출 식품 안전 규정 준수 안내',
    ],
    suitableFor: [
      '아시안 식료품 수입업체',
      '레스토랑 공급망',
      '핫소스 및 조미료 브랜드',
      '특산 식품 소매업체',
    ],
    notSuitableFor: [
      '신선 농산물 수입업체 (별도 콜드체인)',
      '비식품 제품 카테고리',
    ],
    seoKeywords: [
      '중국 Sichuan 산초 소싱',
      '중국 향신료 공급업체 방문',
      'Chengdu 식자재 투어',
      '중국 특산 식품 수입',
    ],
    faq: [
      { question: 'FDA/USDA 수출 규정 준수를 도와주시나요?', answer: '공급업체 수출 서류를 검토하고, 제품 테스트 및 FDA 등록 지원을 위한 제3자 연구소를 연결해 드릴 수 있습니다.' },
      { question: 'Sichuan 산초의 유통기한은 얼마나 되나요?', answer: '프리미엄 Sichuan 산초는 적절히 보관 시 12~18개월 동안 효능을 유지합니다. 유통기한 연장을 위해 질소 충전 포장을 사용하는 생산자를 찾도록 도와드립니다.' },
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
      'Ningxia 구기자 농장 및 신흥 와인 산지 3일간 원산지 방문',
    category: 'Food & Beverage Origin',
    industry: 'food-beverage',
    location: 'Ningxia Province',
    cities: ['Yinchuan', 'Zhongwei'],
    durationDays: 3,
    durationLabel: '3일',
    price: '$4,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$3,699',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$4,999',
        includes: [
          ...STANDARD_COMMON,
          '와이너리 테이스팅 세션 + 구기자 농장 품질 실사',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$8,499',
        includes: [
          ...premiumCommon(3),
          '와인 수입 서류 및 라벨 규정 준수 검토',
        ],
      },
    ],
    description:
      'Ningxia의 구기자 농장, 가공 시설, 수상 경력의 와이너리를 방문합니다. 프리미엄 구기자 제품과 중국 와인을 원산지에서 소싱합니다.',
    longDescription:
      'Ningxia는 중국의 구기자 수도이자 가장 흥미로운 와인 산지입니다. 3일 동안 유기농 구기자 농장을 방문하고, 가공 시설을 견학하며, 수상 경력의 와이너리에서 와인을 시음합니다. 이 급성장하는 농업 지역에서 생산자와 직접적인 관계를 구축하세요.',
    whatIsIncluded: [
      '구기자 농장 방문 및 유기농 인증 검토',
      '가공 및 포장 시설 투어',
      '와이너리 방문 및 테이스팅 세션',
      '샘플 수집 및 품질 테스트 조율',
      '수출 서류 안내',
      '생산자 관계 구축 지원',
    ],
    process: [
      { step: 1, title: '제품 사양', description: '구기자 등급(유기농, 일반), 와인 유형, 물량, 인증 요구사항을 정의합니다.' },
      { step: 2, title: '생산자 식별', description: '구기자 농장, 가공 시설, 와이너리를 조사하고 심사합니다.' },
      { step: 3, title: '농장 및 와이너리 방문', description: '구기자 농장, 가공 공장, 포도밭을 3일간 투어합니다.' },
      { step: 4, title: '품질 평가', description: '제품 샘플링, 인증 검토, 품질 등급 평가를 진행합니다.' },
      { step: 5, title: '소싱 설정', description: '직접 관계 구축, 샘플 배송, 수출 프로세스를 지원합니다.' },
    ],
    highlights: [
      '유기농 구기자 농장 방문',
      '중국 최고 와이너리 와인 시음',
      '가공 시설 품질 실사',
      '수출 준비된 생산자 연결',
    ],
    suitableFor: [
      '건강 식품 및 슈퍼푸드 브랜드',
      '중국 와인을 탐색하는 와인 수입업체',
      '유기농 제품 소매업체',
      '건강기능식품 기업',
    ],
    notSuitableFor: [
      '대량 범용 구기자 트레이더 (본 서비스는 프리미엄 중심입니다)',
      '비식품 제품 카테고리',
    ],
    seoKeywords: [
      'Ningxia 구기자 공급업체',
      '중국 유기농 구기자 농장 방문',
      'Ningxia 와인 산지 투어',
      '중국 와인 수입 소싱',
    ],
    faq: [
      { question: '유기농 인증을 검증할 수 있나요?', answer: '네. 농장 방문 중 중국 유기농, EU 유기농, USDA 유기농 인증을 검증합니다.' },
      { question: 'Ningxia 와인의 최소 주문량은 얼마인가요?', answer: '대부분의 와이너리는 100케이스부터 주문 가능합니다. 시장 테스트를 위한 소량 시험 주문도 협상할 수 있습니다.' },
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
      '중국의 초특화 제조 도시를 탐방하는 6일간 맞춤형 루트',
    category: 'Factory Towns',
    industry: 'monopoly-towns',
    location: 'Zhejiang & Jiangsu',
    cities: ['Zhuji', 'Dongyang', 'Yongkang', 'Taizhou'],
    durationDays: 6,
    durationLabel: '6일',
    price: '$7,699',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$5,799',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$7,699',
        includes: [
          ...STANDARD_COMMON,
          '최적화된 루트로 4~5개 특화 공장 도시 방문',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$12,999',
        includes: [
          ...premiumCommon(6),
          '맞춤형 도시 선정 + 각 방문지에서 공장주 임원 만찬',
        ],
      },
    ],
    description:
      '중국의 독점 공장 도시를 탐험합니다: Zhuji(양말), Dongyang(마작/자석), Yongkang(하드웨어), Taizhou(금형). 한 번의 출장으로 여러 틈새 카테고리를 소싱합니다.',
    longDescription:
      '중국의 독점 공장 도시는 소싱의 비밀입니다. 도시 전체가 하나의 제품에 특화되어 있습니다: Zhuji는 세계 양말의 1/3을 만들고, Yongkang은 하드웨어를 지배합니다. 이 6일간의 탐험 투어는 4~5개의 특화 도시로 안내하며, 각각 틈새 공급망에 대한 심층 탐방을 제공합니다.',
    whatIsIncluded: [
      '제품 관심사에 기반한 맞춤형 루트 기획',
      '4~5개 특화 제조 도시의 공장 방문',
      '공급업체 검증 및 생산 능력 평가',
      '제조업체 간 가격 벤치마킹',
      '샘플 수집 및 물류 조율',
      '공급업체 디렉토리가 포함된 종합 보고서',
    ],
    process: [
      { step: 1, title: '제품 선정', description: '공장 도시 지도에서 4~5개 제품 카테고리를 선택하고 사양을 정의합니다.' },
      { step: 2, title: '루트 기획', description: '사전 심사된 공장 쇼트리스트와 함께 선택한 도시를 연결하는 효율적인 6일 루트를 설계합니다.' },
      { step: 3, title: '도시 방문', description: '도시당 2~3개 공장을 방문하여 소유주를 만나고 생산 라인을 점검합니다.' },
      { step: 4, title: '비교 분석', description: '각 제품 카테고리별 가격, 품질, 생산 능력에 대한 도시 간 비교 분석입니다.' },
      { step: 5, title: '통합 보고서', description: '공급업체 순위와 추천 사항을 포함한 모든 도시를 아우르는 단일 보고서입니다.' },
    ],
    highlights: [
      '세계 시장 점유율 70% 이상의 공장 접근',
      '깊은 특화 = 더 나은 품질과 가격',
      '한 번의 연장 출장으로 다중 카테고리 효율성',
      '영업 담당자가 아닌 공장주 직접 소개',
    ],
    suitableFor: [
      '제품 라인을 확장하는 경험 많은 수입업체',
      '전문 제조업체를 찾는 브랜드',
      '제조 가능성을 탐색하는 제품 개발자',
      '공장 네트워크를 구축하는 소싱 에이전트',
    ],
    notSuitableFor: [
      '중국 소싱 첫 경험자 (단일 카테고리 스프린트부터 시작하세요)',
      '단일 제품 카테고리만 필요한 구매자',
    ],
    seoKeywords: [
      '중국 독점 공장 도시',
      '중국 특화 제조 투어',
      'Zhuji 양말 공장 방문',
      'Yongkang 하드웨어 공급업체',
    ],
    faq: [
      { question: '이 도시들은 실제로 얼마나 특화되어 있나요?', answer: 'Dongyang은 세계 마작 타일 및 자석 장난감의 80% 이상을 생산합니다. Zhuji는 세계 양말의 1/3을 만듭니다. 특화는 실제이며, 따라올 수 없는 가격 경쟁력을 만듭니다.' },
      { question: '방문할 도시를 맞춤 설정할 수 있나요?', answer: '물론입니다. 50개 이상의 공장 도시 지도를 보유하고 있습니다. 관심 있는 카테고리를 선택하시면 최적의 루트를 설계해 드립니다.' },
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
      '공급업체 검증 및 공장 방문이 포함된 5일 또는 10일 가이드 Canton Fair 경험',
    category: 'Fair Navigator',
    industry: 'canton-fair',
    location: 'Guangzhou, Guangdong',
    cities: ['Guangzhou'],
    durationDays: 5,
    durationLabel: '5일 또는 10일',
    price: '$6,999',
    tiers: [
      {
        slug: 'lite',
        name: 'LITE',
        label: '기본 가이드 접근',
        price: '$5,199',
        includes: [
          ...LITE_COMMON,
        ],
      },
      {
        slug: 'standard',
        name: 'STANDARD',
        label: '풀서비스 공장 실사',
        price: '$6,999',
        includes: [
          ...STANDARD_COMMON,
          '박람회 전 출품업체 쇼트리스트 + 최적화된 부스 방문 일정',
        ],
      },
      {
        slug: 'premium',
        name: 'PREMIUM',
        label: '화이트글러브 컨시어지',
        price: '$11,899',
        includes: [
          ...premiumCommon(5),
          '상위 5개 후보에 대한 박람회 후 공장 방문 주선',
          '10일 옵션 이용 가능 (두 페이즈 + 연장 공장 투어)',
        ],
      },
    ],
    description:
      '경험 많은 가이드와 함께 Canton Fair를 탐색합니다. 출품업체를 사전 심사하고, 부스 방문 일정을 잡고, 검증된 공급업체의 공장 투어를 주선합니다.',
    longDescription:
      'Canton Fair는 25,000명 이상의 출품업체가 참가하는 세계 최대 무역 박람회입니다. 압도적입니다. 저희 내비게이터 서비스는 귀하의 요구사항에 따라 출품업체를 사전 심사하고, 부스 미팅 일정을 잡고, 박람회 기간 중 상위 후보 공장 방문을 주선합니다. 출장 효율성을 극대화하세요.',
    whatIsIncluded: [
      '박람회 전 출품업체 리서치 및 쇼트리스트 작성',
      '홀별로 최적화된 일일 부스 방문 일정',
      '모든 미팅을 위한 이중 언어 가이드',
      '공급업체 백그라운드 체크 (사업자등록증, 수출 이력)',
      '박람회 후 공장 방문 조율',
      '출품업체 비교 스프레드시트',
    ],
    process: [
      { step: 1, title: '박람회 전 리서치', description: '출품업체 목록을 분석하고, 상위 후보를 식별하며, 백그라운드 체크를 수행합니다.' },
      { step: 2, title: '박람회 일정', description: '홀, 페이즈, 제품 카테고리별로 최적화된 부스 방문 일정을 설계합니다.' },
      { step: 3, title: '가이드 박람회 일정', description: '이중 언어 가이드가 부스 미팅에 동행하여 통역하고 문서화합니다.' },
      { step: 4, title: '공급업체 심사', description: '상위 후보에 대한 신속한 백그라운드 체크 및 현장 품질 평가.' },
      { step: 5, title: '공장 후속 조치', description: '박람회 후 검증된 공급업체의 공장 방문을 주선합니다.' },
    ],
    highlights: [
      '목적 없는 홀 배회 시간 절약',
      '사전 심사된 출품업체 쇼트리스트',
      '중국어 실시간 가격 협상',
      '박람회 중 또는 후 공장 방문 조율',
    ],
    suitableFor: [
      'Canton Fair 첫 참가자',
      '광범위한 제품 카테고리를 가진 구매자',
      '매년 새로운 공급업체를 찾는 수입업체',
      '중국 소싱 전략을 평가하는 기업',
    ],
    notSuitableFor: [
      '이미 검증된 단일 공급업체가 있는 구매자 (경량 지원 가능)',
      '소싱이 아닌 시장 조사 목적으로만 참석하는 분',
    ],
    seoKeywords: [
      'Canton Fair 소싱 가이드',
      'Canton Fair 에이전트',
      'Guangzhou 무역 박람회 내비게이터',
      '중국 무역 박람회 공급업체 검증',
    ],
    faq: [
      { question: 'Canton Fair는 언제 열리나요?', answer: 'Canton Fair는 연 2회 개최됩니다: 춘계(4월 15일~5월 5일) 및 추계(10월 15일~11월 4일). 각 박람회는 서로 다른 제품 카테고리를 다루는 3개의 페이즈로 구성됩니다.' },
      { question: 'Canton Fair 배지 발급을 도와주시나요?', answer: '네. 등록 절차를 안내하고 필요시 초청장 발급을 도와드릴 수 있습니다.' },
      { question: '참석할 수 없는 경우 대리 참석이 가능한가요?', answer: '네, 저희가 귀하를 대신하여 참석하고, 목표 부스를 방문하여 정보를 수집하고 보고하는 원격 대리 서비스를 제공합니다.' },
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
