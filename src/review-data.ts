// Reviews shown as fruits on the hero's review tree.
//
// The tree has 18 fruit slots. Reviews fill them in this order; the review marked
// `featured` takes the large slot the intro opens automatically. To connect a
// real review, replace the text and thumbnail, add `reviewUrl`, and set
// `sample: false`. While `sample` is true the card is labelled 예시 후기.

export type ReviewType = 'visit' | 'delivery' | 'editorial';

export const reviewTypes: Record<ReviewType, { label: string; short: string }> = {
  visit: { label: '카페·식당 방문형', short: '방문형' },
  delivery: { label: '뷰티·제품 배송형', short: '배송형' },
  editorial: { label: '서비스·기자단형', short: '기자단' },
};

export type Face = 'smile' | 'joy' | 'wink' | 'calm' | 'wow' | 'cheeky' | 'sparkle';

export interface Review {
  id: string;
  type: ReviewType;
  /** Short subject shown with the type, e.g. 카페, 뷰티. */
  category: string;
  title: string;
  excerpt: string;
  body?: string;
  /** Photo for the card. Editorial reviews without a photo get an illustrated cover. */
  thumbnail?: string;
  /** Link to the original blog or Instagram post. */
  reviewUrl?: string;
  /** Expression on the fruit. Chosen automatically when omitted. */
  face?: Face;
  featured?: boolean;
  sample: boolean;
}

export const reviews: Review[] = [
  {
    id: 'cafe-1', type: 'visit', category: '카페', title: '창가에서 즐기는 라테와 페이스트리',
    excerpt: '따뜻한 페이스트리 한 조각과 우유의 고소함이 어울리는 카페 체험이에요.', thumbnail: 'assets/review-tree/review-1.webp',
    body: '창가에 잔을 놓고 얼음이 녹기 전 라테를 한 모금 마셔보는 장면이에요. 페이스트리를 반으로 갈라 바삭한 겉과 부드러운 속을 함께 담았습니다.',
    face: 'joy', sample: true, featured: true,
  },
  {
    id: 'beauty-3', type: 'delivery', category: '뷰티', title: '초록빛 세럼의 첫 사용감',
    excerpt: '한 방울의 점도와 피부 위에 펴 바를 때의 느낌을 기록해요.', thumbnail: 'assets/review-tree/review-3.webp',
    body: '유리병의 스포이트로 한 방울을 덜고 손등에 얇게 펼쳐봅니다. 빛에 비친 제형과 펴 바르는 과정을 기록한 예시예요.',
    sample: true,
  },
  {
    id: 'editorial-clinic', type: 'editorial', category: '병원', title: '처음 가는 동네 치과, 진료 전 체크할 것',
    excerpt: '예약 방법과 진료 시간, 주차 안내를 한눈에 정리하는 정보형 글이에요.',
    body: '병원에서 받은 안내 자료를 바탕으로 예약 방법, 진료 시간, 주차와 대중교통 이용 정보를 순서대로 정리하는 기자단 글의 예시예요.',
    sample: true,
  },
  {
    id: 'food-2', type: 'visit', category: '식당', title: '한 그릇에 담긴 제철 채소',
    excerpt: '비비기 전과 후의 식감부터 곁들임까지 살펴보는 한 끼예요.', thumbnail: 'assets/review-tree/review-2.webp',
    body: '밥 위에 채소와 달걀을 차례로 올린 뒤 한 숟갈씩 비벼봅니다. 재료의 색과 씹히는 순서를 사진에 담아보는 예시예요.',
    sample: true,
  },
  {
    id: 'living-4', type: 'delivery', category: '생활용품', title: '린넨 키친타월을 써본 오후',
    excerpt: '주방에서 손이 자주 가는 천의 두께와 건조감을 살펴봐요.', thumbnail: 'assets/review-tree/review-4.webp',
    body: '키친타월을 펼치고 접어 걸면서 천의 짜임과 크기를 살펴봅니다. 물기를 닦은 뒤 볕이 드는 주방에 걸어둔 장면을 담았어요.',
    sample: true,
  },
  {
    id: 'editorial-academy', type: 'editorial', category: '학원', title: '영어 학원 첫 상담 전에 알아둘 것',
    excerpt: '수업 방식과 레벨 테스트, 상담 순서를 차근차근 안내하는 글이에요.',
    body: '학원에서 전달한 자료를 토대로 레벨 테스트, 반 편성, 수업 방식과 상담 예약 순서를 정리하는 기자단 글의 예시예요.',
    sample: true,
  },
  {
    id: 'cafe-5', type: 'visit', category: '카페', title: '딸기 타르트가 놓인 테이블',
    excerpt: '바삭한 타르트와 제철 딸기를 함께 맛보는 디저트 체험이에요.', thumbnail: 'assets/review-tree/review-5.webp',
    body: '딸기가 올라간 타르트를 반으로 잘라 단면을 살펴봅니다. 과일과 크림, 타르트 바닥을 한입에 담는 과정을 기록했어요.',
    sample: true,
  },
  {
    id: 'beauty-7', type: 'delivery', category: '뷰티', title: '크림 한 스푼의 질감',
    excerpt: '덜어낼 때의 밀도와 얇게 펴 발랐을 때의 마무리를 비교해요.', thumbnail: 'assets/review-tree/review-7.webp',
    body: '작은 스패출러로 크림을 덜어 손등에 올립니다. 처음 덜어낸 모양과 얇게 편 표면을 같은 빛에서 비교하는 예시예요.',
    sample: true,
  },
  {
    id: 'editorial-flower', type: 'editorial', category: '온라인몰', title: '꽃 정기구독, 주문부터 받기까지',
    excerpt: '구독 옵션을 고르고 첫 꽃다발을 받기까지의 과정을 정리해요.',
    body: '온라인몰의 상품 안내를 바탕으로 구독 주기 선택, 배송 일정, 받은 뒤 관리 방법을 순서대로 소개하는 기자단 글의 예시예요.',
    sample: true,
  },
  {
    id: 'food-6', type: 'visit', category: '식당', title: '김이 오르는 국수 한 그릇',
    excerpt: '맑은 국물과 면발, 함께 올라간 고명의 조합을 살펴봐요.', thumbnail: 'assets/review-tree/review-6.webp',
    body: '김이 오를 때 국물을 먼저 맛보고 면과 고명을 함께 집어봅니다. 한 그릇을 먹는 순서대로 장면을 구성했어요.',
    sample: true,
  },
  {
    id: 'living-8', type: 'delivery', category: '생활용품', title: '손에 감기는 도자기 머그',
    excerpt: '손잡이의 크기와 찻잔이 식탁 위에 놓이는 모습을 담아요.', thumbnail: 'assets/review-tree/review-8.webp',
    body: '머그를 들어 손가락이 손잡이에 어떻게 들어가는지 살펴봅니다. 따뜻한 차를 담고 펼쳐둔 책 옆에 놓은 모습을 기록했어요.',
    sample: true,
  },
  {
    id: 'editorial-cleaning', type: 'editorial', category: '서비스', title: '이사 청소 서비스, 예약부터 마무리까지',
    excerpt: '견적 요청과 일정 조율, 작업 범위를 확인하는 과정을 담은 글이에요.',
    body: '업체가 제공한 서비스 안내를 바탕으로 견적 요청 방법, 작업 범위, 당일 진행 순서를 정리하는 기자단 글의 예시예요.',
    sample: true,
  },
  {
    id: 'cafe-9', type: 'visit', category: '카페', title: '에스프레소와 작은 휘낭시에',
    excerpt: '진한 커피 한 모금과 구운 과자의 향을 함께 기록해요.', thumbnail: 'assets/review-tree/review-9.webp',
    body: '작은 잔의 커피와 갓 구운 휘낭시에를 번갈아 맛보는 장면이에요. 한입 크기로 나눈 과자의 단면을 가까이 담았습니다.',
    sample: true,
  },
  {
    id: 'beauty-11', type: 'delivery', category: '뷰티', title: '가방 속 작은 핸드크림',
    excerpt: '튜브를 여닫는 방법부터 외출 중 발라 본 느낌까지 살펴봐요.', thumbnail: 'assets/review-tree/review-11.webp',
    body: '작은 가방에서 튜브를 꺼내 한 손으로 뚜껑을 열어봅니다. 필요한 양을 덜고 다시 수납하는 흐름을 기록했어요.',
    sample: true,
  },
  {
    id: 'editorial-pet', type: 'editorial', category: '서비스', title: '반려견 미용 예약, 준비물 정리',
    excerpt: '예약 전 확인할 사항과 맡기는 날 챙길 것들을 안내하는 글이에요.',
    body: '매장에서 받은 안내를 토대로 예약 방법, 미용 코스, 방문 전 준비물을 정리하는 기자단 글의 예시예요.',
    sample: true,
  },
  {
    id: 'food-10', type: 'visit', category: '식당', title: '오븐에서 나온 채소 한 접시',
    excerpt: '서로 다른 채소가 구워지며 달라진 향과 식감을 담아요.', thumbnail: 'assets/review-tree/review-10.webp',
    body: '구운 채소를 접시에 펼쳐 각 재료의 표면을 살펴봅니다. 노릇한 가장자리와 촉촉한 속을 함께 보여주는 예시예요.',
    sample: true,
  },
  {
    id: 'living-20', type: 'delivery', category: '생활용품', title: '꽃 한 송이를 위한 유리 화병',
    excerpt: '빛을 통과시키는 유리와 꽃줄기가 놓이는 높이를 살펴봐요.', thumbnail: 'assets/review-tree/review-20.webp',
    body: '줄기가 긴 꽃 한 송이를 골라 투명한 화병에 꽂습니다. 물의 높이를 조절하고 창가 빛이 유리에 닿는 모습을 담았어요.',
    sample: true,
  },
  {
    id: 'editorial-laundry', type: 'editorial', category: '서비스', title: '세탁 수거 서비스 처음 써보기',
    excerpt: '앱으로 수거를 신청하고 받기까지의 흐름을 정리하는 글이에요.',
    body: '서비스 안내 자료를 바탕으로 수거 신청, 맡길 수 있는 품목, 배송 일정을 순서대로 소개하는 기자단 글의 예시예요.',
    sample: true,
  },
];
