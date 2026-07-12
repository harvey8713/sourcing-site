import type { City } from '@/types';

export const cities: City[] = [
  {
    slug: 'shenzhen',
    name: 'Shenzhen',
    region: 'Guangdong',
    subtitle: '하드웨어의 실리콘 밸리 — Huaqiangbei, IoT, PCB',
    description:
      "Shenzhen은 세계 전자제품 제조의 수도입니다. Huaqiangbei의 전설적인 부품 시장부터 IoT 기기와 소비자 가전을 생산하는 공장까지, 이 도시는 세계 하드웨어 공급망을 움직입니다.",
    longDescription:
      "이 도시는 지구상 어느 곳보다 빠르게 움직입니다. 다른 곳에서는 몇 주가 걸리는 프로토타입이 이곳에서는 하룻밤 만에 완성됩니다. 하드웨어 스타트업, 제품 관리자, 전자제품 수입업체에게 Shenzhen은 단순한 소싱 목적지가 아니라 경쟁 우위입니다. 저희 이중 언어 팀은 어떤 공장이 진짜인지, 어떤 부품 매대가 정품을 취급하는지, 그리고 다른 곳을 느리게 보이게 만드는 제조 생태계를 어떻게 탐색해야 하는지 알고 있습니다.",
    industries: ['전자제품', 'IoT', 'PCB 제조'],
    serviceCount: 4,
    gradient: 'linear-gradient(135deg, #1a3a4a, #2980b9)',
    badge: '전자제품',
    categories: ['electronics'],
    highlights: [
      { icon: '🏭', title: '숨겨진 공장 접근', description: 'Alibaba나 무역 플랫폼에서 찾을 수 없는 공장 — Guangdong에서 15년간 쌓아온 업계 관계를 통해 발굴한 곳입니다.' },
      { icon: '💡', title: '부품 비용 분석', description: '모든 저항기, PCB, 커넥터의 가격을 아는 엔지니어와 함께 Huaqiangbei를 층별로 소싱합니다.' },
      { icon: '🛡️', title: '인증 검증', description: '쇼트리스트의 모든 공장에서 CE, FCC, RoHS 규정 준수 확인 — 가짜 인증서, 예상치 못한 문제 없음.' },
      { icon: '📊', title: 'PCB 파트너 평가', description: '생산 능력 분석 및 불량률 실사와 함께 PCB 제조 및 조립 파트너의 기술 평가.' },
    ],
    suitableFor: [
      '전자기기 프로토타이핑 중인 하드웨어 스타트업',
      '소비자 가전을 소싱하는 수입업체',
      'IoT 및 스마트홈 제품 브랜드',
      'PCB 조립 파트너를 찾는 기업',
      '기술 제품을 가진 첫 중국 소싱자',
    ],
    notSuitableFor: [
      '완제품, 저복잡도 상품 구매자',
      '단일 공장 방문을 원하는 분',
      '비전자제품 카테고리',
      '당일 처리 기대',
    ],
    faq: [
      { question: '중국어를 할 줄 알아야 하나요?', answer: '아니요. 이중 언어 팀이 공장 경영진 및 부품 공급업체와의 모든 의사소통을 처리합니다. 귀하는 제품 평가에 집중하시면 됩니다.' },
      { question: 'Huaqiangbei를 혼자 방문할 수 있나요?', answer: '가능하지만 길을 잃으실 겁니다. Huaqiangbei는 수천 개의 매대가 있는 여러 건물에 걸쳐 있습니다. 저희 소싱 엔지니어는 귀하에게 필요한 것을 정확히 어느 층, 어느 매대에서 찾을 수 있는지 알고 있어 며칠간의 배회 시간을 절약해 드립니다.' },
      { question: '몇 개의 공장을 방문하게 되나요?', answer: '일반적으로 5일 동안 5~8개 공장을 방문하며, Huaqiangbei 전용 시간도 포함됩니다. 실제 방문할 쇼트리스트를 선정하기 전에 50곳 이상의 후보를 사전 심사합니다.' },
      { question: '프로토타이핑을 도와주실 수 있나요?', answer: '물론입니다. 3D 프린팅 케이스부터 소량 PCB 제조 및 조립까지 신속한 프로토타이핑 서비스를 연결해 드릴 수 있습니다.' },
    ],
  },
  {
    slug: 'guangzhou',
    name: 'Guangzhou',
    region: 'Guangdong',
    subtitle: 'Canton Fair, Zhongda 원단 시장, 글로벌 의류 허브',
    description:
      "Guangzhou는 중국의 무역 및 원단 수도입니다. Canton Fair와 거대한 Zhongda 원단 시장이 있는 이곳은 패션 브랜드, 가죽 제품 디자이너, 다중 카테고리 수입업체가 소싱을 위해 찾는 곳입니다.",
    longDescription:
      "Guangzhou는 중국이 세계 무역에 처음으로 문을 연 곳입니다. 연 2회 개최되는 Canton Fair는 200개국에서 20만 명 이상의 바이어가 참가하며, Zhongda 원단 시장은 패션 트렌드가 시작되는 곳입니다 — 상상할 수 있는 모든 원단, 부자재, 액세서리를 판매하는 수천 개의 매대가 있습니다. 의류 라인을 론칭하든 여러 카테고리의 소비재를 소싱하든, Guangzhou의 공급망 인프라는 타의 추종을 불허합니다.",
    industries: ['원단', '의류', '가죽 제품', '무역'],
    serviceCount: 3,
    gradient: 'linear-gradient(135deg, #3d1f5e, #8e44ad)',
    badge: '원단 및 무역',
    categories: ['textile', 'consumer'],
    highlights: [
      { icon: '🏛️', title: 'Canton Fair 내비게이션', description: '혼란을 건너뛰세요. 출품업체를 사전 심사하고, 60,000개 이상의 부스를 통과하는 루트를 매핑하며, 박람회 기간 중 공장 방문 일정을 잡습니다.' },
      { icon: '🧵', title: 'Zhongda 원단 심층 탐방', description: '세계 최대 원단 시장에 층별로 접근합니다. 검증된 매대에서 원단, 부자재, 단추, 지퍼, 액세서리를 소싱하세요.' },
      { icon: '👜', title: '가죽 제품 클러스터', description: '글로벌 패션 브랜드가 핸드백과 액세서리를 생산하는 Huadu 및 Baiyun 지구의 Guangzhou 가죽 제품 제조 클러스터에 접근합니다.' },
      { icon: '🚢', title: '다중 카테고리 조율', description: '한 번의 출장으로 5개 제품 카테고리가 필요할 때, Guangzhou 물류 팀이 초점을 잃지 않고 산업 전반을 조율합니다.' },
    ],
    suitableFor: [
      '패션 브랜드 및 의류 스타트업',
      '가죽 제품 및 액세서리 디자이너',
      'Canton Fair에 참가하는 다중 카테고리 수입업체',
      '원단 및 직물 도매업체',
      '결정 전에 제품을 직접 확인해야 하는 구매자',
    ],
    notSuitableFor: [
      '전자제품에만 집중하는 구매자',
      '특정 공장 한 곳만 방문하면 되는 분',
      '촉박한 2~3일 일정',
    ],
    faq: [
      { question: 'Canton Fair에 참가해야 할까요?', answer: '네, 하지만 혼자 가지는 마세요. 60,000개 이상의 부스가 있는 박람회는 압도적입니다. 저희는 출품업체를 사전 심사하고 공급업체 미팅 일정을 잡아, 배회하지 않고 검증된 공장과 시간을 보내실 수 있도록 합니다.' },
      { question: 'Zhongda 원단 시장은 어떤 곳인가요?', answer: '거대합니다 — 실크부터 데님까지 다양한 원단을 전문으로 하는 여러 건물에 걸친 수천 개의 매대가 있습니다. 귀하의 특정 원단 니즈에 맞는 올바른 매대로 안내해 드립니다.' },
      { question: '한 번의 출장으로 여러 제품 카테고리를 소싱할 수 있나요?', answer: '네. Guangzhou의 강점은 다중 카테고리 소싱입니다. 저희 다중 카테고리 출장은 원단, 가죽, 소비재 등을 단일 일정으로 조율하여 진행합니다.' },
      { question: 'Guangzhou는 Shenzhen과 어떻게 다른가요?', answer: 'Shenzhen은 전자제품입니다. Guangzhou는 그 외 모든 것 — 원단, 가죽, 소비재, 무역입니다. 두 도시는 고속철로 30분 거리이므로 복합 출장이 일반적입니다.' },
    ],
  },
  {
    slug: 'dongguan',
    name: 'Dongguan',
    region: 'Guangdong',
    subtitle: '금형 제작, CNC 가공, 사출 성형',
    description:
      'Dongguan은 주강 삼각주의 정밀 제조 엔진입니다. 금형 제작, CNC 가공, 사출 성형에 탁월하며 자동차부터 소비자 가전까지 다양한 산업에 서비스를 제공합니다.',
    longDescription:
      "Shenzhen이 중국 제조의 두뇌라면, Dongguan은 손입니다. 이곳은 아이디어가 물리적 객체가 되는 곳 — 정밀 금형, CNC 가공 부품, 사출 성형 부품이 대규모로 생산됩니다. Dongguan의 공장은 글로벌 자동차, 의료기기, 소비자 가전 브랜드에 서비스를 제공합니다. 이곳의 엔지니어링 인재는 세계적 수준이며, 원자재 공급망은 즉각적입니다.",
    industries: ['정밀 제조', '금형 제작', 'CNC 가공'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #1a1a2e, #2c3e50)',
    badge: '정밀 제조',
    categories: ['electronics', 'specialty'],
    highlights: [
      { icon: '🔧', title: '금형 제작업체 심사', description: '모든 금형 제작업체가 동등하지 않습니다. 가격 견적뿐만 아니라 과거 프로젝트, 리드 타임, 작업장 품질을 기준으로 공구 공장을 평가합니다.' },
      { icon: '⚙️', title: 'CNC 능력 분석', description: 'CNC 기계 라인업 현장 평가: 브랜드, 연식, 공차, 실제 생산 능력(주장된 능력이 아닌).' },
      { icon: '🏗️', title: '사출 성형 실사', description: '사출 성형 시설의 생산 현장 점검, 금형 유지보수, 자재 취급, 품질 관리 시스템 확인.' },
      { icon: '📐', title: '부품 비용 모델링', description: '정밀 부품에 대한 라인별 추정 원가 분석, 공장 현장 현실에 기반한 견적 벤치마킹.' },
    ],
    suitableFor: [
      '맞춤형 금형이 필요한 하드웨어 기업',
      'CNC 가공 부품 구매자',
      '자동차 부품 수입업체',
      '의료기기 제조업체',
      '플라스틱 사출 성형 제품 구매자',
    ],
    notSuitableFor: [
      '단순 기성품 구매자',
      '기술 제품 사양이 없는 분',
      '완제품 소비재를 찾는 트레이더',
    ],
    faq: [
      { question: '금형의 최소 주문량은 얼마인가요?', answer: '복잡성에 따라 다르지만, 대부분의 Dongguan 금형 공장은 약 $500~$2,000부터 시작하는 단일 캐비티 프로토타입 금형을 처리할 수 있습니다. 생산 금형은 거기서부터 확장됩니다.' },
      { question: '금형 제작에 얼마나 걸리나요?', answer: '단순 금형: 10~15일. 복잡한 다중 캐비티 금형: 4~6주. 프리미엄 가격으로 긴급 주문도 가능합니다.' },
      { question: '제조를 위한 제품 설계(DFM)를 도와주시나요?', answer: '네. 저희 소싱 엔지니어는 금형 제작 시작 전에 DFM 피드백을 제공하여 지연이나 품질 문제를 야기할 수 있는 이슈를 사전에 발견합니다.' },
      { question: 'Dongguan 공장은 어떤 공차를 달성할 수 있나요?', answer: '최상위 공장은 ±0.005mm를 달성합니다. 사양서가 아닌 측정 장비로 현장에서 공차 주장을 검증합니다.' },
    ],
  },
  {
    slug: 'yiwu',
    name: 'Yiwu',
    region: 'Zhejiang',
    subtitle: '세계 최대 도매 시장 — 75,000개 이상 부스',
    description:
      "Yiwu 국제 무역 도시는 400만 제곱미터 규모에 75,000개 이상의 부스가 있습니다. 장난감과 선물부터 홈 데코와 시즌 상품까지, 세계 최대 소비재 도매 시장입니다.",
    longDescription:
      "달러 스토어, 선물 가게, 슈퍼마켓 진열대에서 판매되는 제품이라면 아마도 Yiwu를 거쳤을 것입니다. 이 단일 시장은 5개 연결 구역에 걸쳐 26개 제품 카테고리를 포괄합니다 — 모든 부스에서 1분씩만 머물러도 5개월이 걸립니다. 소비재, 시즌 상품, 장난감, 주얼리, 홈 제품 수입업체에게 Yiwu는 선택이 아닌 필수입니다. 과제는 제품을 찾는 것이 아니라 75,000개의 옵션 중에서 양질의 공급업체를 찾는 것입니다.",
    industries: ['소비재', '범용 상품', '도매'],
    serviceCount: 2,
    gradient: 'linear-gradient(135deg, #7a3800, #e67e22)',
    badge: '범용 상품',
    categories: ['consumer'],
    highlights: [
      { icon: '🏬', title: '구역별 루트', description: '5개 구역을 통과하는 사전 계획된 루트로, 제품 카테고리에 맞는 부스만 방문합니다. 목적 없는 배회 없음.' },
      { icon: '📦', title: '공급업체 사전 심사', description: '귀하가 도착하기 전에 부스 소유주를 심사합니다 — 수출 라이선스, 공장 인증, 무역 이력을 확인하여 검증된 판매자만 만나도록 합니다.' },
      { icon: '💰', title: '가격 벤치마킹', description: '동일 제품에 대해 여러 부스에서 실시간 가격 비교, 외국인 가격이 아닌 실제 도매 가격을 확보합니다.' },
      { icon: '🔍', title: '부스 뒤의 공장', description: "부스는 단순한 쇼룸입니다. 실제 생산 능력을 볼 수 있는 부스 뒤 실제 공장 방문을 주선합니다." },
    ],
    suitableFor: [
      '달러 스토어 및 할인 소매 구매자',
      'Amazon 및 이커머스 셀러',
      '선물 및 판촉물 수입업체',
      '시즌 및 홀리데이 상품 구매자',
      '홈 데코 및 주방용품 수입업체',
    ],
    notSuitableFor: [
      '고도로 기술적인 제품 구매자',
      '맞춤형 제조가 필요한 분 (시장이 아닌 공장 방문)',
      '단일 SKU, 대량 구매자 (직접 공장 소싱이 더 저렴)',
    ],
    faq: [
      { question: '하루에 몇 개의 부스를 방문할 수 있나요?', answer: '현실적으로 집중하면 30~40개 부스입니다. 저희 사전 심사를 통해 방문하는 모든 부스가 관련성 있어 헛된 시간 낭비가 없습니다.' },
      { question: 'Yiwu 공급업체가 실제 제조업체인가요?', answer: '때로는 그렇고 때로는 아닙니다. 많은 부스가 무역 회사입니다. 저희는 공장 소유권을 확인하고 진지한 구매자를 위해 별도의 공장 방문을 주선합니다.' },
      { question: 'Yiwu에서 MOQ는 어떻게 적용되나요?', answer: 'Yiwu의 MOQ는 일반적으로 공장 직거래보다 낮습니다. 많은 부스가 SKU당 500~1,000개부터 시작합니다. 맞춤형 포장 및 브랜딩은 일반적으로 더 높은 MOQ가 필요합니다.' },
      { question: 'Yiwu에서 소싱하는 것이 좋을까요, 아니면 공장 직거래가 좋을까요?', answer: 'Yiwu는 다양성과 낮은 MOQ 테스트에 가장 좋습니다. 한 제품을 10,000개 이상 주문한다면 공장 직거래가 일반적으로 더 저렴합니다. 결정을 도와드립니다.' },
    ],
  },
  {
    slug: 'foshan',
    name: 'Foshan',
    region: 'Guangdong',
    subtitle: '글로벌 가구 수도 — 300만 제곱미터 규모의 Lecong 시장',
    description:
      "Foshan은 중국 가구 수출의 70%를 생산합니다. Lecong 가구 도매 시장은 180개 이상의 쇼룸 건물에 걸쳐 300만 제곱미터에 달하는 세계 최대 가구 시장입니다.",
    longDescription:
      "Foshan은 단순한 가구 도시가 아닙니다 — 바로 그 가구 도시입니다. 모든 주요 국제 가구 브랜드는 이곳에서 부품이나 완제품을 소싱합니다. Lecong 시장만 해도 5km에 걸쳐 180개 이상의 쇼룸 건물이 있으며, $50 조립식 책상부터 $50,000 럭셔리 소파까지 모든 것을 전시합니다. 쇼룸 너머에는 수천 개의 공장이 가구, 조명, 도자기, 홈 데코를 생산합니다. 집에 속하는 것이라면 Foshan이 만듭니다.",
    industries: ['가구', '홈 데코', '인테리어 디자인'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #641e16, #c0392b)',
    badge: '가구',
    categories: ['furniture'],
    highlights: [
      { icon: '🪑', title: 'Lecong 시장 마스터리', description: '관광객 함정을 건너뛰세요. 180개 이상의 건물 중에서 귀하의 가격대, 스타일, 품질 요구사항에 맞는 쇼룸으로 안내합니다.' },
      { icon: '🪵', title: '자재 및 마감 검증', description: '목재 유형, 결합 방식, 마감, 하드웨어 현장 검사 — 주문한 대로 배송되는지 확인합니다.' },
      { icon: '🏗️', title: '공장 현장 실사', description: '쇼룸 뒤 생산 시설 방문: 생산 능력 확인, 품질 관리 시스템, 수출 포장 기준.' },
      { icon: '🚚', title: '화물 및 물류 계획', description: '가구 배송은 복잡합니다. FCL, LCL, 통합 배송을 처리하는 전문 화물 운송업체를 연결해 드립니다.' },
    ],
    suitableFor: [
      '가구 소매업체 및 수입업체',
      '인테리어 디자이너 및 호스피탈리티 구매자',
      '홈 데코 브랜드 및 이커머스 셀러',
      '맞춤형 가구 및 OEM 구매자',
      '레스토랑 및 호텔 가구 구매 담당자',
    ],
    notSuitableFor: [
      '저가 일회용 가구를 찾는 구매자',
      '단품 구매를 원하는 분 (쇼룸은 대량 판매)',
      '매우 촉박한 일정의 프로젝트 (맞춤형 가구는 4~8주 소요)',
    ],
    faq: [
      { question: '맞춤형 가구는 얼마나 걸리나요?', answer: '일반 생산: 4~6주. 복잡한 맞춤형 디자인: 8~12주. 프리미엄 가격으로 긴급 주문 가능. 해상 운송에 4~6주 추가.' },
      { question: '가구 디자인을 도와주실 수 있나요?', answer: '네. Foshan 공장의 사내 디자이너와 협력하여 귀하의 디자인을 적용하거나 참고 이미지와 사양을 기반으로 새 디자인을 만들 수 있습니다.' },
      { question: '가구 품질 관리는 어떻게 하나요?', answer: '원자재, 생산 중간, 선적 전 세 단계에서 검사합니다. 모든 검사에는 사진, 측정값, 상세 보고서가 포함됩니다.' },
      { question: '중국에서 가구 배송은 어떻게 이루어지나요?', answer: '대부분의 구매자는 FCL(풀 컨테이너 로드) 또는 LCL(컨테이너 미만) 해상 운송을 사용합니다. 40HQ 컨테이너에는 일반 가구 기준 약 50~60피스가 적재됩니다. 전체 물류 체인을 조율해 드립니다.' },
    ],
  },
  {
    slug: 'yunnan',
    name: 'Yunnan',
    region: 'Yunnan Province',
    subtitle: "중국 커피의 95%, Pu'er 차의 심장부",
    description:
      "Yunnan은 중국 커피의 95%를 생산하며 Pu'er 차의 발상지입니다. Baoshan의 스페셜티 커피 농장부터 고대 차 농장까지, 식음료 구매자를 위한 원산지 목적지입니다.",
    longDescription:
      "대부분의 사람들은 중국을 커피 생산지로 생각하지 않습니다 — 그러나 Yunnan은 세계 14위의 커피 생산국이며, 스페셜티 커피 씬이 폭발적으로 성장하고 있습니다. 같은 성(省)은 Pu'er 차의 정신적 고향으로, 1,000년 이상 된 고대 차나무가 여전히 수확 가능한 잎을 생산합니다. 식음료 구매자에게 Yunnan은 발견되기를 기다리는 원산지 이야기입니다 — 이제 막 국제 시장에 서비스를 제공하기 시작한 농부, 가공 시설, 수출업체와의 직접적인 관계.",
    industries: ['커피', '차', '농업'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #145a32, #27ae60)',
    badge: '커피 및 차',
    categories: ['food'],
    highlights: [
      { icon: '☕', title: '커피 농장 방문', description: 'Baoshan과 Pu\'er의 스페셜티 커피 농장을 걸으며 재배자를 만나고, 마이크로 랏을 시음하며, 체리부터 생두까지 가공 방식을 평가합니다.' },
      { icon: '🍵', title: '차 농장 소싱', description: '고대 차 정원과 현대식 농장을 방문합니다. 잎 품질, 숙성 연도, 가공 기술로 Pu\'er, 홍차, 녹차 등급을 평가하는 방법을 배웁니다.' },
      { icon: '🏔️', title: '가공 시설 실사', description: '세척 스테이션, 건조장, 정제 시설을 점검합니다. 유기농 인증 및 식품 안전 기준을 현장에서 확인합니다.' },
      { icon: '📋', title: '직거래 관계', description: '중간상을 건너뛰세요. 농장 협동조합 및 가공업체와의 직접 관계를 지원합니다 — 더 나은 가격, 더 나은 추적성.' },
    ],
    suitableFor: [
      '스페셜티 커피 로스터 및 수입업체',
      '차 브랜드 및 티하우스 운영자',
      '건강 식품 및 슈퍼푸드 기업',
      '유기농 인증 제품을 찾는 구매자',
      '농업 및 식자재 수입업체',
    ],
    notSuitableFor: [
      '대량 범용 커피 구매자 (브라질 또는 베트남으로 가세요)',
      '인스턴트 또는 저급 제품을 찾는 구매자',
      '계절별 수확 일정을 맞출 수 없는 분',
    ],
    faq: [
      { question: 'Yunnan에서는 어떤 커피 품종이 재배되나요?', answer: '주로 Catimor와 다양한 Arabica 품종입니다. 가공 방법이 개선됨에 따라 스페셜티 등급 롯(80점 이상)이 점점 더 많이 나오고 있습니다. 일부 농장에서는 이제 Gesha 및 기타 프리미엄 품종도 생산합니다.' },
      { question: '수확 시기는 언제인가요?', answer: '커피: 11월~3월. 봄 차: 3월~5월. 가을 차: 9월~10월. 가공 과정을 직접 보려면 수확기에 방문하는 것을 권장합니다.' },
      { question: '중국에서 커피나 차를 어떻게 수출하나요?', answer: '식물위생증명서, 통관 서류, 화물 운송을 처리하는 면허 있는 수출 대행사를 연결해 드립니다. 공급업체 관계가 구축되면 절차는 간단합니다.' },
      { question: '커피와 차 소싱 출장을 결합할 수 있나요?', answer: '네. 저희 5일 Yunnan 출장은 Baoshan/Pu\'er의 커피 농장과 같은 지역의 차 농장을 모두 포함하며, 현지에서 시간을 최대한 활용할 수 있도록 이동을 조율합니다.' },
    ],
  },
  {
    slug: 'shaoxing',
    name: 'Shaoxing',
    region: 'Zhejiang',
    subtitle: '세계 최대 원단 시장 — 30,000개 이상 매대',
    description:
      "Shaoxing의 Keqiao 지구는 30,000개 이상의 매대가 있는 세계 최대 원단 도매 시장입니다. 원단 수입업체, 패션 브랜드, 홈 텍스타일 기업에게 필수적인 소싱처입니다.",
    longDescription:
      "의류가 의류가 되기 전에, 원단은 Shaoxing에서 옵니다. Keqiao(중국 원단 도시) 시장은 패션 브랜드, 원단 도매업체, 의류 제조업체가 기초 면 및 폴리에스터부터 고급 실크, 자카드, 기능성 원단까지 원자재를 소싱하는 곳입니다. 원단 유형별로 정리된 30,000개 이상의 매대가 있어 지구상에서 가장 효율적인 원단 소싱 목적지입니다. 주변 지역에는 염색, 날염, 가공 시설도 위치해 있습니다.",
    industries: ['원단', '직물', '의류 제조'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #4a235a, #af7ac5)',
    badge: '원단',
    categories: ['textile'],
    highlights: [
      { icon: '🧶', title: '원단 시장 내비게이션', description: '30,000개 이상의 매대를 효율적으로 탐색합니다. 도착 전에 귀하의 원단 유형, 중량, 구성, 가격대에 맞는 공급업체를 사전 식별합니다.' },
      { icon: '🎨', title: '색상 및 마감 매칭', description: '현장 색상 매칭, 촉감 평가, 마감 평가. 원단 견본을 수집하고 랩딥 테스트를 주선합니다.' },
      { icon: '🏭', title: '방적 및 가공 실사', description: '직조 공장, 염색 공장, 가공 시설 방문. 생산 능력, 품질 시스템, 환경 규정 준수 확인.' },
      { icon: '📏', title: '품질 및 규정 준수 테스트', description: '인증된 연구소에서 염색 견뢰도, 수축률, 인장 강도, 화학 물질 규정 준수(OEKO-TEX, REACH)에 대한 제3자 테스트 주선.' },
    ],
    suitableFor: [
      '패션 브랜드 및 의류 제조업체',
      '원단 도매업체 및 유통업체',
      '홈 텍스타일 및 침구 기업',
      '기능성 및 특수 원단 구매자',
      '맞춤형 염색 및 날염을 원하는 구매자',
    ],
    notSuitableFor: [
      '완성 의류를 찾는 구매자 (Guangzhou로 가세요)',
      '촉감으로 원단 품질을 평가할 수 없는 분',
      '소량 구매자 (대부분의 방적 공장은 1,000미터 이상 MOQ)',
    ],
    faq: [
      { question: '원단의 최소 주문 수량(MOQ)은 얼마인가요?', answer: '일반적으로 직물은 색상당 1,000~3,000미터, 니트는 500~1,000kg입니다. 일부 매대는 미터당 더 높은 가격으로 샘플 수량(10~50미터)을 제공합니다.' },
      { question: '맞춤형 색상과 프린트가 가능한가요?', answer: '네. 색상 매칭을 위한 랩딥은 3~5일 소요됩니다. 맞춤형 프린트는 스크린 또는 디지털 프린트 설정이 필요하며 샘플링 리드 타임은 7~15일입니다.' },
      { question: '원단 구성을 어떻게 확인하나요?', answer: '연소 테스트와 섬유 함량 검증을 위한 제3자 연구소 테스트를 주선합니다. 인증(OEKO-TEX, GOTS)은 공장 기록과 대조하여 검증합니다.' },
      { question: 'Keqiao와 Zhongda(Guangzhou)의 차이점은 무엇인가요?', answer: 'Keqiao는 방적 공장 직거래 — 원단 생산자로부터 구매합니다. Zhongda는 의류 제조업체를 위한 도매 시장입니다. Keqiao는 더 낮은 가격과 더 나은 일관성을, Zhongda는 더 다양한 종류와 더 낮은 MOQ를 제공합니다.' },
    ],
  },
  {
    slug: 'yongkang',
    name: 'Yongkang',
    region: 'Zhejiang',
    subtitle: '하드웨어 수도 — 보온병, 전동 공구, 주방용품',
    description:
      "Yongkang은 중국의 하드웨어 수도로, 보온병, 전동 공구, 주방용품, 도어 하드웨어의 글로벌 생산을 지배합니다. 전형적인 중국 독점 공장 도시입니다.",
    longDescription:
      "Yongkang은 중국 독점 공장 도시의 정의입니다 — 특정 제품 카테고리의 글로벌 생산을 지배하는 단일 도시. 스테인리스 보온병을 사용해 본 적이 있다면, 아마도 Yongkang에서 왔을 것입니다. 많은 전동 공구, 논스틱 팬, 도어 잠금장치도 마찬가지입니다. 원자재 강철부터 완성된 포장까지 전체 공급망이 반경 20km 이내에 존재합니다. 이러한 집중도는 다른 곳에서는 따라올 수 없는 효율성과 가격 이점을 창출합니다.",
    industries: ['하드웨어', '주방용품', '전동 공구'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #2c3e50, #34495e)',
    badge: '하드웨어',
    categories: ['specialty'],
    highlights: [
      { icon: '🔩', title: '공급망 집중도', description: '강철, 가스켓, 플라스틱 부품, 포장 등 모든 부품이 20km 이내에서 생산됩니다. 이는 더 빠른 샘플, 더 낮은 자재 비용, 즉각적인 공급망 가시성을 의미합니다.' },
      { icon: '🫖', title: '보온병 및 진공 플라스크', description: '세계 진공 플라스크의 80%를 생산하는 공장을 방문합니다. 보온 성능, 뚜껑 메커니즘, 맞춤형 브랜딩 옵션을 평가합니다.' },
      { icon: '🔨', title: '전동 공구 공장', description: '앵글 그라인더, 드릴, 톱을 생산하는 공장을 평가합니다. OEM vs ODM 능력, 모터 품질, 안전 인증을 비교합니다.' },
      { icon: '🍳', title: '주방용품 생산', description: '글로벌 브랜드에 납품하는 조리기구 공장에서 논스틱 코팅 검사, 자재 두께 검증, 열 분포 테스트.' },
    ],
    suitableFor: [
      '하드웨어 스토어 및 홈 임프루브먼트 소매업체',
      '주방 및 가정용품 브랜드',
      '전동 공구 수입업체 및 유통업체',
      '판촉물 기업',
      '자체 브랜드 제조를 찾는 구매자',
    ],
    notSuitableFor: [
      '고급 프리미엄 브랜드 구매자 (대부분의 공장은 물량에 집중)',
      'UL/ETL 인증이 필요한 구매자 (공장별로 확인 필요)',
      '매우 맞춤형의 단일 디자인을 찾는 분 (금형 비용이 비쌈)',
    ],
    faq: [
      { question: 'Yongkang 공장은 품질이 좋은가요?', answer: '품질은 매우 다양합니다. 저희는 티어 1 공장(글로벌 브랜드 납품)과 티어 3 작업장(국내 시장 전용)을 구분합니다. 수출급 품질 시스템을 갖춘 공장에 실사를 집중합니다.' },
      { question: '어떤 인증을 기대할 수 있나요?', answer: '많은 상위 공장이 ISO 9001, BSCI, LFGB(식품 접촉) 또는 GS(독일 안전)와 같은 제품별 인증을 보유합니다. 모든 인증은 현장에서 검증합니다.' },
      { question: '일반적인 MOQ는 얼마인가요?', answer: '보온병: SKU당 1,000~3,000개. 전동 공구: 500~1,000개. 주방용품: 2,000개 이상. 맞춤형 로고 인쇄는 일반적으로 1,000개부터 시작합니다.' },
      { question: 'Yongkang 방문을 Yiwu 방문과 결합할 수 있나요?', answer: '물론입니다. Yongkang은 Yiwu에서 차로 1.5시간 거리입니다. 많은 구매자가 다양성은 Yiwu에서, 공장 직거래 하드웨어 및 주방용품은 Yongkang에서 소싱합니다.' },
    ],
  },
  {
    slug: 'ningxia',
    name: 'Ningxia',
    region: 'Ningxia Province',
    subtitle: '구기자 수도 & 신흥 와인 산지',
    description:
      "Ningxia는 중국의 구기자 수도이자 가장 흥미로운 와인 산지입니다. 유기농 구기자 농장, 가공 시설, 국제적으로 인정받는 빈티지를 생산하는 수상 경력의 와이너리를 방문하세요.",
    longDescription:
      "Ningxia는 식음료 분야에서 중국의 가장 잘 보존된 비밀입니다. Helan 산맥 기슭은 Decanter 상을 비롯한 국제 대회에서 수상하는 와인을 생산합니다 — 국내 칭찬만이 아닙니다. 한편 Zhongning 현은 세계 구기자 열매의 대부분을 생산하며, 유기농 및 EU 인증 농장이 빠르게 확장되고 있습니다. 건강 식품 브랜드, 와인 수입업체, 슈퍼푸드 기업에게 Ningxia는 중개인을 통해서는 불가능한 원산지 수준의 가격과 직접적인 농장-브랜드 관계를 제공합니다.",
    industries: ['슈퍼푸드', '와인', '농업'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #7d6608, #d4a853)',
    badge: '슈퍼푸드',
    categories: ['food'],
    highlights: [
      { icon: '🍷', title: '와이너리 투어 및 시음', description: 'Helan 산맥 기슭의 수상 경력 와이너리를 방문합니다. 빈티지를 시음하고, 셀러를 둘러보며, 생산자와 직접 수입 계약을 협상합니다.' },
      { icon: '🫐', title: '구기자 농장 소싱', description: 'Zhongning의 유기농 구기자 농장을 걸으며 건조 및 가공 방법을 평가하고, EU 유기농 및 식품 안전 인증을 확인합니다.' },
      { icon: '🧪', title: '가공 및 테스트', description: '동결 건조, 분무 건조, 선별 시설을 점검합니다. 잔류 농약 및 중금속에 대한 제3자 연구소 테스트를 주선합니다.' },
      { icon: '📦', title: '수출 준비 포장', description: '소매용 포장 또는 벌크 형식으로 소싱합니다. Ningxia 공급업체는 국제 시장을 위한 화이트 라벨 및 자체 브랜드 옵션을 점점 더 많이 제공하고 있습니다.' },
    ],
    suitableFor: [
      '스페셜티 와인 수입업체 및 유통업체',
      '건강 식품 및 슈퍼푸드 브랜드',
      '유기농 제품 기업',
      '차 및 허브 제품 구매자',
      'EU/US 유기농 인증 제품을 찾는 구매자',
    ],
    notSuitableFor: [
      '대중 시장 와인 구매자 (Ningxia는 벌크가 아닌 부티크입니다)',
      '즉시 공급을 원하는 구매자 (농업은 수확 주기를 따릅니다)',
      '연중 신선 제품이 필요한 분 (구기자는 계절성 작물입니다)',
    ],
    faq: [
      { question: 'Ningxia 와인은 실제로 좋은가요?', answer: "네 — 그리고 매년 더 좋아지고 있습니다. Ningxia 와인은 여러 Decanter World Wine Awards와 International Wine Challenge 메달을 수상했습니다. 이 지역은 종종 중국의 Napa Valley라고 불립니다." },
      { question: '방문하기 가장 좋은 시기는 언제인가요?', answer: '구기자 수확: 7월~9월. 와인 수확: 9월~10월. 봄(4월~5월)은 두 산업이 모두 활발한 일반 소싱 출장에 쾌적합니다.' },
      { question: '어떤 인증을 받을 수 있나요?', answer: '많은 Ningxia 농장이 EU 유기농, USDA 유기농, 중국 녹색 식품 인증을 보유하고 있습니다. 현장에서 인증서를 검증하고 우려 사항에 대해 제3자 테스트를 주선합니다.' },
      { question: '구기자 가격은 어떻게 책정되나요?', answer: '가격은 등급(크기, 색상, 건조 방법), 유기농 인증, 수량에 따라 달라집니다. 농장 직거래 가격은 일반적으로 무역 회사를 통할 때보다 40~60% 낮습니다.' },
    ],
  },
  {
    slug: 'sichuan-chongqing',
    name: 'Sichuan / Chongqing',
    region: 'Sichuan & Chongqing',
    subtitle: '산초, 소스, 훠궈 베이스 — 중국 요리의 풍미 엔진',
    description:
      "Sichuan-Chongqing 지역은 중국 요리의 풍미 엔진입니다. 프리미엄 Sichuan 산초부터 발효 된장과 훠궈 베이스까지, 정통 아시안 식자재의 원천입니다.",
    longDescription:
      "이 지역은 단순히 음식을 생산하는 것이 아니라 풍미를 생산합니다. Hanyuan의 Sichuan 산초는 세계에서 가장 귀하게 여겨지며, 전 세계 특산 식품 시장에서 프리미엄 가격을 받습니다. Pixian doubanjiang(발효 넓은콩 된장)은 Sichuan 요리의 영혼으로, 항아리에서 수년간 숙성됩니다. Chongqing의 훠궈 베이스 산업만 해도 수십억 달러 규모입니다. 식품 수입업체, 레스토랑 공급업체, 특산 식품 브랜드에게 이 지역은 공장제 모방품이 아닌 진정한 정통성을 지닌 지리적 표시 보호 원산지 식자재를 제공합니다.",
    industries: ['향신료', '소스', '식자재'],
    serviceCount: 1,
    gradient: 'linear-gradient(135deg, #a93226, #e74c3c)',
    badge: '향신료 루트',
    categories: ['food'],
    highlights: [
      { icon: '🌶️', title: '산초 원산지 소싱', description: 'Hanyuan 산초 농장을 방문합니다. 마비 강도, 향, 씨앗 함량으로 Sichuan 산초 등급을 평가하는 방법을 배우고 재배자로부터 직접 구매합니다.' },
      { icon: '🫘', title: 'Doubanjiang 발효', description: '된장이 항아리에서 1~3년 숙성되는 전통 doubanjiang 작업장을 견학합니다. 생산 방식을 확인하고 수출 포장을 주선합니다.' },
      { icon: '🍲', title: '훠궈 베이스 제조', description: '전 세계 레스토랑 체인을 위해 생산하는 훠궈 베이스 공장을 점검합니다. 향신료 블렌드, 오일 품질, 유통기한 테스트 절차를 평가합니다.' },
      { icon: '🧄', title: '특제 소스 생산', description: '칠리 오일, 절임 채소, 발효 두부, 지역 소스를 소싱합니다. 식품 안전 및 HACCP 규정 준수에 중점을 둔 공장 실사.' },
    ],
    suitableFor: [
      '아시안 식료품 및 특산 식품 수입업체',
      '레스토랑 체인 및 식품 서비스 구매자',
      '훠궈 레스토랑 운영자',
      '소스 및 조미료 브랜드',
      '자체 브랜드 아시안 식품 기업',
    ],
    notSuitableFor: [
      '순하고 대중 시장 제품을 찾는 구매자',
      '매운 음식 시식을 감당할 수 없는 분',
      'EU 유기농 인증을 찾는 구매자 (이 지역에서는 드뭅니다)',
    ],
    faq: [
      { question: 'Sichuan 산초가 특별한 이유는 무엇인가요?', answer: '실제 후추가 아닙니다 — 산초나무의 껍질로, Sichuan 요리에 기본이 되는 독특한 마비감(마, 麻)을 냅니다. 품질은 지역, 수확 시기, 가공 방법에 따라 크게 달라집니다.' },
      { question: 'Doubanjiang 공장을 방문할 수 있나요?', answer: '네. Pixian 지역에는 대규모 생산자와 전통 작업장이 모두 있습니다. 최고의 doubanjiang은 여전히 전통 방식으로 만들어집니다 — 햇빛 아래 항아리에서 1~3년 발효됩니다.' },
      { question: '식품 수출에 필요한 서류는 무엇인가요?', answer: '일반적으로: 원산지 증명서, 위생 증명서, 식물 제품에 대한 식물위생 증명서, 미국 수입을 위한 FDA 사전 통지. 면허 있는 수출 대행사와 조율합니다.' },
      { question: '훠궈 베이스 공급망은 어떻게 작동하나요?', answer: '주요 브랜드는 Chongqing과 Chengdu에서 생산합니다. MOQ는 자체 브랜드의 경우 500~2,000개, 맞춤형 배합의 경우 5,000개 이상입니다. 유통기한은 일반적으로 12~18개월입니다.' },
    ],
  },
  {
    slug: 'ningbo',
    name: 'Ningbo',
    region: 'Zhejiang',
    subtitle: '플라스틱, 하드웨어, 가전제품 — 주요 수출항',
    description:
      "Ningbo는 플라스틱, 하드웨어, 가전제품을 전문으로 하는 주요 제조 및 수출 허브입니다. 심해 항구는 컨테이너 운송 기준 세계에서 가장 붐비는 항구 중 하나입니다.",
    longDescription:
      "Ningbo-Zhoushan 항구는 화물 톤수 기준 세계에서 가장 붐비는 항구이며 — 그 뒤에 있는 제조 기반도 마찬가지로 인상적입니다. 도시와 주변 지역은 플라스틱 제품, 소형 가전제품, 하드웨어, 자동차 부품을 생산하는 공장으로 밀집해 있습니다. 수입업체에게 공장과 항구의 근접성은 더 빠른 배송, 더 낮은 내륙 물류 비용, 수출 요구사항을 이해하는 제조 생태계를 의미합니다. Ningbo는 또한 Zhejiang 성의 수십 개 특화 제조 도시로 가는 관문이기도 합니다.",
    industries: ['플라스틱', '가전제품', '하드웨어'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #154360, #2471a3)',
    badge: '플라스틱 및 항구',
    categories: ['specialty'],
    highlights: [
      { icon: '🏗️', title: '플라스틱 제조 허브', description: '가정용품부터 산업용 부품까지 모든 것을 생산하는 사출 성형, 블로우 성형, 압출 공장.' },
      { icon: '🔌', title: '소형 가전제품', description: '글로벌 브랜드와 자체 브랜드를 위해 블렌더, 밥솥, 전기 주전자 및 기타 소형 주방 가전을 생산하는 공장.' },
      { icon: '🚢', title: '항구 근접 물류', description: '세계에서 가장 붐비는 화물 항구에서 몇 분 거리의 공장. 직접 컨테이너 적재, 통합 배송, 화물 운송업체 조율.' },
      { icon: '🗺️', title: 'Zhejiang으로의 관문', description: 'Ningbo는 Zhejiang의 특화 도시 — Shaoxing, Yiwu, Yongkang, Zhuji를 탐방하기 위한 이상적인 기지로, 모두 2시간 이내 거리입니다.' },
    ],
    suitableFor: [
      '가전제품 수입업체 및 브랜드',
      '플라스틱 제품 구매자',
      '하드웨어 및 공구 유통업체',
      '항구 인접 공급업체를 찾는 기업',
      'Zhejiang 성 다중 도시 소싱 출장',
    ],
    notSuitableFor: [
      '고도로 특화된 제조를 찾는 구매자 (Dongguan 또는 Shenzhen 참조)',
      '원단 및 의류 구매자 (Shaoxing 또는 Guangzhou 참조)',
      '공장 방문만 원하는 분 (인근 도시와 결합 방문 권장)',
    ],
    faq: [
      { question: 'Ningbo 자체 서비스가 있나요?', answer: '아직 없습니다 — 현재 Ningbo는 물류 허브 및 인근 제조 도시로의 관문으로 활용하고 있습니다. 요청 시 맞춤형 출장 주선 가능합니다.' },
      { question: 'Ningbo는 Shanghai와 어떻게 다른가요?', answer: 'Ningbo 항구는 더 많은 화물 톤수를 처리하며, 제조는 플라스틱과 하드웨어에 더 집중되어 있습니다. Zhejiang의 특화 제조 도시들과도 더 가깝습니다.' },
      { question: 'Ningbo 항구를 통해 배송할 수 있나요?', answer: '물론입니다. Ningbo-Zhoushan은 200개국 이상, 600개 이상의 항구와 연결되어 있습니다. 컨테이너 적재, 통관, 화물 운송을 조율해 드립니다.' },
      { question: 'Ningbo를 방문해야 할까요, 아니면 Shanghai를 방문해야 할까요?', answer: '플라스틱, 하드웨어, 가전제품을 소싱한다면 Ningbo가 공장에 더 가깝습니다. 더 넓은 범위의 서비스와 영어 구사 인프라가 필요하다면 Shanghai가 더 편리합니다.' },
    ],
  },
  {
    slug: 'zhuji',
    name: 'Zhuji',
    region: 'Zhejiang',
    subtitle: "세계 양말의 1/3 — 진주 가공도 포함",
    description:
      "Zhuji는 세계 양말의 수도로, 전 세계 양말의 3분의 1을 생산합니다. 또한 담수 진주 가공의 주요 중심지이기도 합니다 — 중국의 초특화 공장 도시의 전형적인 예입니다.",
    longDescription:
      "Zhuji는 중국 제조 특화의 극단을 구현합니다. Datang 지구만으로도 전 세계 양말의 약 3분의 1 — 연간 수십억 켤레를 생산하며, 원사 방적부터 시작하여 포장 및 수출로 끝나는 통합 공급망을 갖추고 있습니다. Shanxiahu 진주 시장은 세계 최대 담수 진주 거래 센터로, 진주가 선별, 드릴, 꿰기, 판매되어 전 세계 주얼리 브랜드로 향합니다. Zhuji에서는 원자재부터 완제품까지 전체 산업이 수 제곱킬로미터 내에서 이루어집니다.",
    industries: ['양말', '호지어리', '진주'],
    serviceCount: 0,
    gradient: 'linear-gradient(135deg, #5b2c6f, #8e44ad)',
    badge: '양말 수도',
    categories: ['specialty', 'textile'],
    highlights: [
      { icon: '🧦', title: '대규모 양말 생산', description: 'Datang의 통합 양말 공급망을 걸어봅니다 — 원사 방적과 편직부터 염색, 보딩, 포장까지 하나의 산업 단지 내에서 모두 이루어집니다.' },
      { icon: '💎', title: '담수 진주 시장', description: '세계 최대 담수 진주 시장인 Shanxiahu를 방문합니다. 느슨한 진주, 스트랜드, 완성 주얼리를 가공업체로부터 직접 소싱합니다.' },
      { icon: '🧵', title: '특화된 공급망', description: '원사, 고무줄, 포장, 기계 등 모든 것이 지역에서 생산됩니다. 이 수직 통합은 비교할 수 없는 효율성과 대응력을 의미합니다.' },
      { icon: '📊', title: '초특화 전문성', description: "한 도시가 30년 이상 한 가지 일만 해왔다면, 전문성은 깊습니다. Zhuji의 양말 공장은 모든 원사 혼방, 편직 기술, 품질 기준을 이해합니다." },
    ],
    suitableFor: [
      '양말 및 호지어리 브랜드',
      '의류 및 액세서리 기업',
      '진주 주얼리 소매업체 및 도매업체',
      '자체 브랜드 및 OEM 구매자',
      '중국의 특화 제조 도시에 관심 있는 구매자',
    ],
    notSuitableFor: [
      '다양한 제품 카테고리의 구매자 (Zhuji는 고도로 특화되어 있습니다)',
      '매우 작은 MOQ가 필요한 분 (호지어리 MOQ는 스타일당 1,000켤레 이상부터 시작)',
      '전자제품 또는 비원단 제품을 찾는 구매자',
    ],
    faq: [
      { question: 'Zhuji 자체 서비스가 있나요?', answer: '아직 없습니다 — 특화 공장 도시 커버리지의 일환으로 Zhuji를 탐색 중입니다. 요청 시 맞춤형 출장 가능하며, Yiwu/Yongkang 방문과 결합 가능합니다.' },
      { question: '어떤 종류의 양말을 소싱할 수 있나요?', answer: '모든 것 — 운동 양말, 정장 양말, 캐주얼 양말, 압박 양말, 당뇨병 환자용 양말, 아동용 양말, 대나무 섬유, 메리노 울, 맞춤형 디자인. 다양성이 놀랍습니다.' },
      { question: '예상되는 MOQ는 얼마인가요?', answer: '기본 양말: 스타일/색상당 1,000~3,000켤레. 맞춤형 디자인: 3,000~5,000켤레. 프리미엄 및 특수 섬유는 더 높은 최소 수량이 필요할 수 있습니다.' },
      { question: '진주 소싱은 소규모 구매자도 접근 가능한가요?', answer: '네, 생각보다 훨씬 접근하기 쉽습니다. 도매가로 스트랜드당 $5~10부터 구매 가능합니다. 맞춤형 주얼리용 느슨한 진주는 더 낮은 수량에서도 시작할 수 있습니다.' },
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

/** Maps city slugs to the exact names used in service.cities[] for matching */
const CITY_SERVICE_MATCH: Record<string, string[]> = {
  yunnan: ['Kunming', "Pu'er", 'Baoshan', 'Dali'],
  'sichuan-chongqing': ['Chengdu', 'Chongqing'],
  ningxia: ['Yinchuan', 'Zhongwei'],
};

export function getCityServiceMatchNames(slug: string, cityName: string): string[] {
  if (CITY_SERVICE_MATCH[slug]) return CITY_SERVICE_MATCH[slug];
  return [cityName];
}
