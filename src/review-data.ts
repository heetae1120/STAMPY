export interface Review {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  body?: string;
  thumbnail: string;
  reviewUrl?: string;
  fruitPosition: [number, number];
  featured?: boolean;
  sample: boolean;
}

// Positions are percentages in the tree illustration's coordinate system.
export const reviews: Review[] = [
  {
    id: 'cafe-1', category: '카페', title: '창가에서 즐기는 라테와 페이스트리',
    excerpt: '따뜻한 페이스트리 한 조각과 우유의 고소함이 어울리는 카페 체험이에요.', thumbnail: 'assets/review-tree/review-1.webp',
    body: '창가에 잔을 놓고 얼음이 녹기 전 라테를 한 모금 마셔보는 장면이에요. 페이스트리를 반으로 갈라 바삭한 겉과 부드러운 속을 함께 담았습니다.',
    fruitPosition: [57, 29], sample: true, featured: true,
  },
  {
    id: 'food-2', category: '음식', title: '한 그릇에 담긴 제철 채소',
    excerpt: '비비기 전과 후의 식감부터 곁들임까지 살펴보는 한 끼예요.', thumbnail: 'assets/review-tree/review-2.webp',
    body: '밥 위에 채소와 달걀을 차례로 올린 뒤 한 숟갈씩 비벼봅니다. 재료의 색과 씹히는 순서를 사진에 담아보는 예시예요.',
    fruitPosition: [32, 46], sample: true,
  },
  {
    id: 'beauty-3', category: '뷰티', title: '초록빛 세럼의 첫 사용감',
    excerpt: '한 방울의 점도와 피부 위에 펴 바를 때의 느낌을 기록해요.', thumbnail: 'assets/review-tree/review-3.webp',
    body: '유리병의 스포이트로 한 방울을 덜고 손등에 얇게 펼쳐봅니다. 빛에 비친 제형과 펴 바르는 과정을 기록한 예시예요.',
    fruitPosition: [73, 45], sample: true,
  },
  {
    id: 'living-4', category: '생활용품', title: '린넨 키친타월을 써본 오후',
    excerpt: '주방에서 손이 자주 가는 천의 두께와 건조감을 살펴봐요.', thumbnail: 'assets/review-tree/review-4.webp',
    body: '키친타월을 펼치고 접어 걸면서 천의 짜임과 크기를 살펴봅니다. 물기를 닦은 뒤 볕이 드는 주방에 걸어둔 장면을 담았어요.',
    fruitPosition: [42, 17], sample: true,
  },
  {
    id: 'cafe-5', category: '카페', title: '딸기 타르트가 놓인 테이블',
    excerpt: '바삭한 타르트와 제철 딸기를 함께 맛보는 디저트 체험이에요.', thumbnail: 'assets/review-tree/review-5.webp',
    body: '딸기가 올라간 타르트를 반으로 잘라 단면을 살펴봅니다. 과일과 크림, 타르트 바닥을 한입에 담는 과정을 기록했어요.',
    fruitPosition: [27, 27], sample: true,
  },
  {
    id: 'food-6', category: '음식', title: '김이 오르는 국수 한 그릇',
    excerpt: '맑은 국물과 면발, 함께 올라간 고명의 조합을 살펴봐요.', thumbnail: 'assets/review-tree/review-6.webp',
    body: '김이 오를 때 국물을 먼저 맛보고 면과 고명을 함께 집어봅니다. 한 그릇을 먹는 순서대로 장면을 구성했어요.',
    fruitPosition: [48, 40], sample: true,
  },
  {
    id: 'beauty-7', category: '뷰티', title: '크림 한 스푼의 질감',
    excerpt: '덜어낼 때의 밀도와 얇게 펴 발랐을 때의 마무리를 비교해요.', thumbnail: 'assets/review-tree/review-7.webp',
    body: '작은 스패출러로 크림을 덜어 손등에 올립니다. 처음 덜어낸 모양과 얇게 편 표면을 같은 빛에서 비교하는 예시예요.',
    fruitPosition: [64, 14], sample: true,
  },
  {
    id: 'living-8', category: '생활용품', title: '손에 감기는 도자기 머그',
    excerpt: '손잡이의 크기와 찻잔이 식탁 위에 놓이는 모습을 담아요.', thumbnail: 'assets/review-tree/review-8.webp',
    body: '머그를 들어 손가락이 손잡이에 어떻게 들어가는지 살펴봅니다. 따뜻한 차를 담고 펼쳐둔 책 옆에 놓은 모습을 기록했어요.',
    fruitPosition: [82, 33], sample: true,
  },
  {
    id: 'cafe-9', category: '카페', title: '에스프레소와 작은 휘낭시에',
    excerpt: '진한 커피 한 모금과 구운 과자의 향을 함께 기록해요.', thumbnail: 'assets/review-tree/review-9.webp',
    body: '작은 잔의 커피와 갓 구운 휘낭시에를 번갈아 맛보는 장면이에요. 한입 크기로 나눈 과자의 단면을 가까이 담았습니다.',
    fruitPosition: [17, 39], sample: true,
  },
  {
    id: 'food-10', category: '음식', title: '오븐에서 나온 채소 한 접시',
    excerpt: '서로 다른 채소가 구워지며 달라진 향과 식감을 담아요.', thumbnail: 'assets/review-tree/review-10.webp',
    body: '구운 채소를 접시에 펼쳐 각 재료의 표면을 살펴봅니다. 노릇한 가장자리와 촉촉한 속을 함께 보여주는 예시예요.',
    fruitPosition: [68, 56], sample: true,
  },
  {
    id: 'beauty-11', category: '뷰티', title: '가방 속 작은 핸드크림',
    excerpt: '튜브를 여닫는 방법부터 외출 중 발라 본 느낌까지 살펴봐요.', thumbnail: 'assets/review-tree/review-11.webp',
    body: '작은 가방에서 튜브를 꺼내 한 손으로 뚜껑을 열어봅니다. 필요한 양을 덜고 다시 수납하는 흐름을 기록했어요.',
    fruitPosition: [35, 56], sample: true,
  },
  {
    id: 'living-12', category: '생활용품', title: '책상 위의 작은 나무 트레이',
    excerpt: '흩어져 있던 소품을 올려보고 나뭇결과 크기를 기록해요.', thumbnail: 'assets/review-tree/review-12.webp',
    body: '나무 트레이 위에 열쇠와 작은 소품을 올려놓습니다. 비워둔 공간과 나뭇결을 위에서 내려다본 구도로 담았어요.',
    fruitPosition: [51, 11], sample: true,
  },
  {
    id: 'cafe-13', category: '카페', title: '단면으로 보는 바스크 치즈케이크',
    excerpt: '짙게 구워진 표면과 부드러운 속이 만드는 차이를 살펴봐요.', thumbnail: 'assets/review-tree/review-13.webp',
    body: '치즈케이크를 한 조각 덜어 진하게 구워진 상단과 옅은 단면을 살펴봅니다. 포크가 들어가는 모습까지 이어지는 예시예요.',
    fruitPosition: [69, 34], sample: true,
  },
  {
    id: 'food-14', category: '음식', title: '반찬으로 채워진 점심상',
    excerpt: '그날의 반찬을 하나씩 맛보며 밥과 어울리는 조합을 찾아봐요.', thumbnail: 'assets/review-tree/review-14.webp',
    body: '반찬 그릇을 밥 주변에 놓고 색과 재료를 하나씩 살펴봅니다. 점심 한 상을 위에서 담은 뒤 한입 조합을 기록해요.',
    fruitPosition: [24, 55], sample: true,
  },
  {
    id: 'beauty-15', category: '뷰티', title: '화장대 위의 미스트',
    excerpt: '손에 쥐었을 때의 그립감과 안개처럼 퍼지는 분사감을 살펴봐요.', thumbnail: 'assets/review-tree/review-15.webp',
    body: '미스트를 손에 쥐고 펌프를 눌러 분사되는 범위를 살펴봅니다. 병의 크기와 화장대에 놓인 모습을 사진에 담았어요.',
    fruitPosition: [43, 30], sample: true,
  },
  {
    id: 'living-16', category: '생활용품', title: '매일 들고 싶은 면 가방',
    excerpt: '수첩과 물병을 넣고 손잡이 길이와 안쪽 공간을 확인해요.', thumbnail: 'assets/review-tree/review-16.webp',
    body: '면 가방을 펼쳐 수첩과 물병을 넣어봅니다. 가방을 들었을 때 손잡이 길이와 모양이 어떻게 달라지는지 기록해요.',
    fruitPosition: [79, 56], sample: true,
  },
  {
    id: 'cafe-17', category: '카페', title: '핸드드립 커피가 완성되는 시간',
    excerpt: '물이 천천히 내려가는 모습과 잔에 남는 향을 기록해요.', thumbnail: 'assets/review-tree/review-17.webp',
    body: '드리퍼에 물을 나누어 붓고 잔에 커피가 모이는 장면을 담습니다. 내려 마시는 과정을 한 잔의 기록으로 구성했어요.',
    fruitPosition: [52, 52], sample: true,
  },
  {
    id: 'food-18', category: '음식', title: '단면이 다채로운 채소 샌드위치',
    excerpt: '빵 사이에 든 재료와 한입에 느껴지는 바삭함을 살펴봐요.', thumbnail: 'assets/review-tree/review-18.webp',
    body: '샌드위치를 반으로 나누어 채소가 쌓인 순서를 살펴봅니다. 종이 포장을 접고 손으로 들었을 때의 크기도 함께 담았어요.',
    fruitPosition: [32, 15], sample: true,
  },
  {
    id: 'beauty-19', category: '뷰티', title: '하루 끝의 클렌저 사용감',
    excerpt: '물과 섞었을 때 거품이 만들어지는 과정과 헹굼감을 담아요.', thumbnail: 'assets/review-tree/review-19.webp',
    body: '펌프에서 한 번 덜어낸 제형에 물을 더합니다. 거품을 내고 헹구기까지의 사용 순서를 보여주는 예시예요.',
    fruitPosition: [73, 23], sample: true,
  },
  {
    id: 'living-20', category: '생활용품', title: '꽃 한 송이를 위한 유리 화병',
    excerpt: '빛을 통과시키는 유리와 꽃줄기가 놓이는 높이를 살펴봐요.', thumbnail: 'assets/review-tree/review-20.webp',
    body: '줄기가 긴 꽃 한 송이를 골라 투명한 화병에 꽂습니다. 물의 높이를 조절하고 창가 빛이 유리에 닿는 모습을 담았어요.',
    fruitPosition: [89, 44], sample: true,
  },
];
