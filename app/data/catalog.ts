// Demo catalog. Every brand, campaign and reward here is sample data (demo: true)
// and is shown with a 데모 label. Dates are relative to today so statuses stay meaningful.
import type { Brand, Campaign, CategoryId, Channel, Reward, StickerDef, Venue, VenueCategory } from '../api/types';

export interface Category {
  id: CategoryId;
  name: string; // filter label
  island: string; // map name
  en: string;
  color: string;
  deep: string;
  blurb: string;
}

export const CATEGORIES: Category[] = [
  { id: 'beauty', name: '뷰티', island: '뷰티의 섬', en: 'Beauty Island', color: '#d9ccfb', deep: '#9b84e6', blurb: '스킨케어, 메이크업, 향기 제품을 써보는 섬' },
  { id: 'food', name: '푸드', island: '맛있는 마을', en: 'Food Village', color: '#ffc9b8', deep: '#f08f74', blurb: '카페와 식당, 맛있는 간식을 만나는 마을' },
  { id: 'living', name: '리빙', island: '라이프스타일 숲', en: 'Lifestyle Forest', color: '#c4e6cf', deep: '#7dbd94', blurb: '매일 쓰는 생활용품과 취미 도구의 숲' },
  { id: 'home', name: '홈데코', island: '홈데코 정원', en: 'Home Garden', color: '#ffe8a8', deep: '#e9c25b', blurb: '집을 꾸미는 소품과 가구가 자라는 정원' },
  { id: 'fashion', name: '패션', island: '패션 거리', en: 'Fashion Street', color: '#fcc7d8', deep: '#e98fae', blurb: '가방, 신발, 액세서리가 모인 거리' },
  { id: 'tech', name: '테크', island: '테크 항구', en: 'Tech Harbor', color: '#c3e2f6', deep: '#79b5df', blurb: '작은 기기와 액세서리가 도착하는 항구' },
  { id: 'etc', name: '기타', island: '작은 정류장', en: 'Little Stop', color: '#efe3d0', deep: '#c7ad88', blurb: '서비스, 정보 글 등 다양한 체험' },
];

export const categoryById = (id: string) => CATEGORIES.find(c => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];

export const CHANNEL_LABEL: Record<Channel, string> = {
  blog: '블로그', instagram: '인스타그램', youtube: '유튜브', shortform: '숏폼',
};

export const KIND_LABEL = { delivery: '배송형', visit: '방문형', editorial: '기자단' } as const;

export const BRANDS: Brand[] = [
  { id: 'malang', name: '말랑공방', tagline: '피부에 닿는 순한 하루', intro: '순한 성분의 스킨케어를 만드는 데모 브랜드예요.', demo: true },
  { id: 'dalcom', name: '달콤정류장', tagline: '동네 디저트 카페', intro: '제철 과일 디저트를 굽는 데모 카페예요.', demo: true },
  { id: 'sooprim', name: '숲속살림', tagline: '오래 쓰는 생활 도구', intro: '천연 소재 생활용품을 소개하는 데모 브랜드예요.', demo: true },
  { id: 'jibkkumi', name: '집꾸미', tagline: '작은 방을 위한 소품', intro: '작은 공간을 꾸미는 소품을 만드는 데모 브랜드예요.', demo: true },
  { id: 'ribbonday', name: '리본데이', tagline: '매일 들고 싶은 가방', intro: '가볍고 튼튼한 가방을 만드는 데모 브랜드예요.', demo: true },
  { id: 'bippi', name: '삐삐랩', tagline: '귀여운 기기 액세서리', intro: '작은 전자기기 액세서리를 만드는 데모 브랜드예요.', demo: true },
  { id: 'gungguk', name: '국수한그릇', tagline: '맑은 국물 국숫집', intro: '맑은 국물 국수를 내는 데모 식당이에요.', demo: true },
  { id: 'malgeun', name: '맑은치과', tagline: '동네 치과', intro: '정보형 기자단 예시에 쓰는 데모 병원이에요.', demo: true },
  { id: 'mulgyeol', name: '물결헤어', tagline: '자연스러운 컷과 펌', intro: '방문형 뷰티 체험 예시에 쓰는 데모 미용실이에요.', demo: true },
  { id: 'heuk', name: '흙공방', tagline: '손으로 빚는 그릇', intro: '원데이 클래스 예시에 쓰는 데모 도자기 공방이에요.', demo: true },
  { id: 'pado', name: '파도베이커리', tagline: '바닷가 동네 빵집', intro: '지방 매장 예시에 쓰는 데모 베이커리예요.', demo: true },
];
export const brandById = (id: string) => BRANDS.find(b => b.id === id)!;

export const STICKERS: StickerDef[] = [
  { id: 'st-serum', name: '초록 세럼', category: 'beauty', art: 'serum', series: 'Beauty Collection', rule: '세럼 체험 리뷰 승인' },
  { id: 'st-mirror', name: '반짝 거울', category: 'beauty', art: 'mirror', series: 'Beauty Collection', rule: '크림 체험 리뷰 승인' },
  { id: 'st-perfume', name: '향기 병', category: 'beauty', art: 'perfume', series: 'Beauty Collection', rule: '미스트 체험 리뷰 승인' },
  { id: 'st-lipstick', name: '말랑 립스틱', category: 'beauty', art: 'lipstick', series: 'Beauty Collection', rule: '핸드크림 체험 리뷰 승인' },
  { id: 'st-cup', name: '라테 한 잔', category: 'food', art: 'cup', series: 'Food Collection', rule: '카페 방문 리뷰 승인' },
  { id: 'st-strawberry', name: '딸기 한 알', category: 'food', art: 'strawberry', series: 'Food Collection', rule: '타르트 체험 리뷰 승인' },
  { id: 'st-cake', name: '조각 케이크', category: 'food', art: 'cake', series: 'Food Collection', rule: '치즈케이크 체험 리뷰 승인' },
  { id: 'st-noodle', name: '국수 한 그릇', category: 'food', art: 'noodle', series: 'Food Collection', rule: '국숫집 방문 리뷰 승인' },
  { id: 'st-candle', name: '작은 캔들', category: 'living', art: 'candle', series: 'Lifestyle Collection', rule: '키친타월 체험 리뷰 승인' },
  { id: 'st-plant', name: '초록 화분', category: 'living', art: 'plant', series: 'Lifestyle Collection', rule: '드립 세트 체험 리뷰 승인' },
  { id: 'st-notebook', name: '탐험 노트', category: 'living', art: 'notebook', series: 'Lifestyle Collection', rule: '리빙 체험 리뷰 승인' },
  { id: 'st-vase', name: '꽃 한 송이 화병', category: 'home', art: 'vase', series: 'Home Collection', rule: '화병 체험 리뷰 승인' },
  { id: 'st-chair', name: '동글 의자', category: 'home', art: 'chair', series: 'Home Collection', rule: '머그 체험 리뷰 승인' },
  { id: 'st-lamp', name: '포근 조명', category: 'home', art: 'lamp', series: 'Home Collection', rule: '트레이 체험 리뷰 승인' },
  { id: 'st-bag', name: '산책 가방', category: 'fashion', art: 'bag', series: 'Fashion & Tech', rule: '에코백 체험 리뷰 승인' },
  { id: 'st-shoe', name: '폭신 운동화', category: 'fashion', art: 'shoe', series: 'Fashion & Tech', rule: '양말 체험 리뷰 승인' },
  { id: 'st-ribbon', name: '리본 매듭', category: 'fashion', art: 'ribbon', series: 'Fashion & Tech', rule: '패션 체험 리뷰 승인' },
  { id: 'st-headphones', name: '말랑 헤드폰', category: 'tech', art: 'headphones', series: 'Fashion & Tech', rule: '이어폰 케이스 체험 리뷰 승인' },
  { id: 'st-camera', name: '여행 카메라', category: 'tech', art: 'camera', series: 'Fashion & Tech', rule: '카메라 스트랩 체험 리뷰 승인' },
  { id: 'st-keyboard', name: '딸깍 키보드', category: 'tech', art: 'keyboard', series: 'Fashion & Tech', rule: '키캡 체험 리뷰 승인' },
  { id: 'st-scissors', name: '찰칵 가위', category: 'beauty', art: 'scissors', series: 'Beauty Collection', rule: '미용실 방문 리뷰 승인' },
  { id: 'st-bowl', name: '물레 그릇', category: 'living', art: 'bowl', series: 'Lifestyle Collection', rule: '공방 클래스 리뷰 승인' },
  { id: 'st-bread', name: '아침 빵', category: 'food', art: 'bread', series: 'Food Collection', rule: '베이커리 방문 리뷰 승인' },
  { id: 'st-letter', name: '정보 편지', category: 'etc', art: 'letter', series: 'Special Collection', rule: '기자단 리뷰 승인' },
  { id: 'st-first', name: '첫 번째 모험', category: 'special', art: 'medal', series: 'Special Collection', rule: '첫 리뷰 미션 승인' },
  { id: 'st-explorer', name: '꾸준한 탐험가', category: 'special', art: 'compass', series: 'Special Collection', rule: '리뷰 미션 3회 승인' },
  { id: 'st-star', name: '반짝 별', category: 'special', art: 'star', series: 'Special Collection', rule: '스티커 5종 모으기' },
];
export const stickerById = (id: string) => STICKERS.find(s => s.id === id)!;

function day(offset: number) {
  const d = new Date();
  d.setHours(23, 59, 0, 0);
  d.setDate(d.getDate() + offset);
  return d.toISOString();
}

const COMMON_NOTICES = [
  '리뷰에는 제품이나 서비스를 제공받았다는 문구를 꼭 넣어 주세요.',
  '평점이나 긍정적인 평가는 선정·승인 조건이 아니에요. 솔직하게 써 주세요.',
  '선정 후 개인 사정으로 참여가 어렵다면 마이페이지에서 미리 알려 주세요.',
];
const BASIC_MISSION = ['제품을 직접 사용한 사진 3장 이상', '사용 기간과 느낀 점을 구체적으로 기록', '광고(제공) 표기 포함'];

export const VENUE_CATEGORIES: { id: VenueCategory; label: string }[] = [
  { id: 'cafe', label: '카페·베이커리' },
  { id: 'restaurant', label: '식당' },
  { id: 'beauty', label: '뷰티' },
  { id: 'workshop', label: '공방' },
  { id: 'other', label: '기타 방문형' },
];
export const venueCategoryLabel = (id: VenueCategory) => VENUE_CATEGORIES.find(c => c.id === id)?.label ?? '기타 방문형';

// DEMO VENUES — fictional stores. Coordinates are rough neighbourhood centres, not the
// position of any real business, so they are only shown in the labelled demo preview.
// Real partner venues are added through the operator console after verification.
export const VENUES: Venue[] = [
  { id: 'v-dalcom-mangwon', brandId: 'dalcom', name: '달콤정류장 망원점', category: 'cafe', address: '서울 마포구 망원동 (가상 주소)', roadAddress: '서울 마포구 (가상 매장)', region: { sido: '서울', sigungu: '마포구' }, latitude: 37.556, longitude: 126.902, isVerified: false, verificationStatus: 'demo', mapApproved: false, representativeImage: 'assets/hero-03/cafe.jpg', demo: true },
  { id: 'v-gungguk-ikseon', brandId: 'gungguk', name: '국수한그릇 익선점', category: 'restaurant', address: '서울 종로구 익선동 (가상 주소)', roadAddress: '서울 종로구 (가상 매장)', region: { sido: '서울', sigungu: '종로구' }, latitude: 37.574, longitude: 126.9895, isVerified: false, verificationStatus: 'demo', mapApproved: false, representativeImage: 'assets/hero-03/food.jpg', demo: true },
  { id: 'v-mulgyeol-seongsu', brandId: 'mulgyeol', name: '물결헤어 성수', category: 'beauty', address: '서울 성동구 성수동 (가상 주소)', roadAddress: '서울 성동구 (가상 매장)', region: { sido: '서울', sigungu: '성동구' }, latitude: 37.5445, longitude: 127.056, isVerified: false, verificationStatus: 'demo', mapApproved: false, demo: true },
  { id: 'v-heuk-suwon', brandId: 'heuk', name: '흙공방 행궁', category: 'workshop', address: '경기 수원시 팔달구 행궁동 (가상 주소)', roadAddress: '경기 수원시 (가상 매장)', region: { sido: '경기', sigungu: '수원시' }, latitude: 37.2845, longitude: 127.014, isVerified: false, verificationStatus: 'demo', mapApproved: false, demo: true },
  { id: 'v-pado-haeundae', brandId: 'pado', name: '파도베이커리 해운대', category: 'cafe', address: '부산 해운대구 중동 (가상 주소)', roadAddress: '부산 해운대구 (가상 매장)', region: { sido: '부산', sigungu: '해운대구' }, latitude: 35.163, longitude: 129.163, isVerified: false, verificationStatus: 'demo', mapApproved: false, demo: true },
];

type Seed = Omit<Campaign, 'id' | 'notices' | 'demo' | 'announceAt' | 'reviewDeadline' | 'recruitStart' | 'recruitEnd'> & {
  start: number; end: number; notices?: string[]; visit?: [number, number];
};

const seeds: Seed[] = [
  { slug: 'green-serum-first-week', brandId: 'malang', category: 'beauty', kind: 'delivery', title: '초록빛 세럼 첫 일주일 체험', summary: '가벼운 제형의 세럼을 일주일 동안 쓰고 사용감을 기록해요.', image: 'assets/hero-03/skincare.jpg', channels: ['blog', 'instagram'], quota: 10, start: -6, end: 5, stamps: 3, stickerId: 'st-serum', benefit: '세럼 30ml 본품', conditions: ['최근 3개월 안에 뷰티 글을 쓴 채널', '공개 계정'], mission: BASIC_MISSION, eligibility: ['만 19세 이상', '국내 배송 가능 주소'] },
  { slug: 'cloud-cream-two-weeks', brandId: 'malang', category: 'beauty', kind: 'delivery', title: '구름 크림 2주 보습 기록', summary: '아침저녁으로 바르며 피부 변화를 사진으로 남겨요.', image: 'assets/review-tree/review-7.webp', channels: ['blog'], quota: 8, start: -3, end: 9, stamps: 3, stickerId: 'st-mirror', benefit: '크림 50ml 본품', conditions: ['블로그 이웃 100명 이상'], mission: BASIC_MISSION, eligibility: ['만 19세 이상'] },
  { slug: 'morning-mist', brandId: 'malang', category: 'beauty', kind: 'delivery', title: '아침 미스트 출근길 체험', summary: '가방 속 미스트를 하루 세 번 써보고 느낌을 남겨요.', image: 'assets/review-tree/review-15.webp', channels: ['instagram', 'shortform'], quota: 15, start: 4, end: 14, stamps: 2, stickerId: 'st-perfume', benefit: '미스트 100ml', conditions: ['인스타그램 공개 계정'], mission: ['사용 장면이 담긴 릴스 또는 사진 3장', '광고(제공) 표기 포함'], eligibility: ['만 19세 이상'] },
  { slug: 'pocket-hand-cream', brandId: 'malang', category: 'beauty', kind: 'delivery', title: '가방 속 핸드크림', summary: '외출할 때 들고 다니며 손에 닿는 느낌을 기록해요.', image: 'assets/review-tree/review-11.webp', channels: ['blog', 'instagram'], quota: 12, start: -20, end: -6, stamps: 2, stickerId: 'st-lipstick', benefit: '핸드크림 3종 세트', conditions: ['공개 계정'], mission: BASIC_MISSION, eligibility: ['만 19세 이상'] },
  { slug: 'latte-and-pastry', brandId: 'dalcom', category: 'food', kind: 'visit', title: '창가 자리 라테와 페이스트리', summary: '카페에 방문해 음료와 디저트를 맛보고 공간을 소개해요.', image: 'assets/hero-03/cafe.jpg', channels: ['blog', 'instagram'], quota: 6, start: -4, end: 3, stamps: 3, stickerId: 'st-cup', benefit: '2인 음료 + 디저트 1개', conditions: ['방문 가능한 날짜 2개 이상 제시'], mission: ['매장 외관과 메뉴 사진 포함', '위치·영업시간 정보', '광고(제공) 표기 포함'], eligibility: ['서울 마포구 방문 가능'], location: '서울 마포구 (데모 위치)',
    venueId: 'v-dalcom-mangwon', menu: '시그니처 라테 2잔 + 페이스트리 1개', visit: [4, 14], visitHours: '평일 12:00–18:00', reservationMethod: '선정 후 카카오톡 채널로 날짜 예약', reservationNotice: '방문 하루 전까지 예약이 필요해요.', companions: '1명까지 동반 가능', visitConditions: ['선정 후 2주 안에 방문', '주말 방문은 사전 협의'] },
  { slug: 'strawberry-tart-table', brandId: 'dalcom', category: 'food', kind: 'visit', title: '딸기 타르트 테이블', summary: '제철 딸기 타르트를 맛보고 단면과 맛을 기록해요.', image: 'assets/review-tree/review-5.webp', channels: ['instagram'], quota: 5, start: -1, end: 6, stamps: 2, stickerId: 'st-strawberry', benefit: '타르트 1조각 + 음료 1잔', conditions: ['인스타그램 공개 계정'], mission: ['디저트 사진 3장 이상', '광고(제공) 표기 포함'], eligibility: ['서울 마포구 방문 가능'], location: '서울 마포구 (데모 위치)',
    venueId: 'v-dalcom-mangwon', menu: '딸기 타르트 1조각 + 음료 1잔', visit: [7, 17], visitHours: '매일 11:00–20:00', reservationMethod: '예약 없이 방문', reservationNotice: '선정 문자를 직원에게 보여주세요.', companions: '혼자 방문', visitConditions: ['딸기 소진 시 다른 디저트로 대체될 수 있어요'] },
  { slug: 'basque-cheesecake', brandId: 'dalcom', category: 'food', kind: 'delivery', title: '바스크 치즈케이크 택배 체험', summary: '집으로 배송된 케이크를 맛보고 보관과 맛을 소개해요.', image: 'assets/review-tree/review-13.webp', channels: ['blog'], quota: 10, start: -25, end: -12, stamps: 3, stickerId: 'st-cake', benefit: '치즈케이크 1호', conditions: ['냉장 수령 가능'], mission: BASIC_MISSION, eligibility: ['수도권 배송지'] },
  { slug: 'clear-noodle-soup', brandId: 'gungguk', category: 'food', kind: 'visit', title: '맑은 국물 국수 한 그릇', summary: '점심에 방문해 국수와 곁들임 메뉴를 소개해요.', image: 'assets/hero-03/food.jpg', channels: ['blog'], quota: 4, start: 2, end: 10, stamps: 2, stickerId: 'st-noodle', benefit: '국수 2인분', conditions: ['평일 점심 방문 가능'], mission: ['메뉴판과 음식 사진', '위치·주차 정보', '광고(제공) 표기 포함'], eligibility: ['서울 종로구 방문 가능'], location: '서울 종로구 (데모 위치)',
    venueId: 'v-gungguk-ikseon', menu: '맑은 국수 2인분 + 곁들임 1종', visit: [12, 24], visitHours: '평일 11:30–14:00', reservationMethod: '선정 후 전화 예약', reservationNotice: '점심 시간 대기 줄이 있을 수 있어요.', companions: '1명까지 동반 가능', visitConditions: ['평일 점심에만 방문 가능'] },
  { slug: 'linen-kitchen-towel', brandId: 'sooprim', category: 'living', kind: 'delivery', title: '린넨 키친타월 한 달 사용기', summary: '주방에서 매일 써보며 흡수력과 건조 속도를 기록해요.', image: 'assets/review-tree/review-4.webp', channels: ['blog'], quota: 10, start: -30, end: -16, stamps: 2, stickerId: 'st-candle', benefit: '키친타월 2장', conditions: ['리빙 글 작성 경험'], mission: BASIC_MISSION, eligibility: ['국내 배송 가능 주소'] },
  { slug: 'hand-drip-set', brandId: 'sooprim', category: 'living', kind: 'delivery', title: '집에서 내리는 핸드드립 세트', summary: '드리퍼와 서버로 커피를 내려보는 과정을 소개해요.', image: 'assets/review-tree/review-17.webp', channels: ['blog', 'youtube'], quota: 6, start: -2, end: 12, stamps: 4, stickerId: 'st-plant', benefit: '드립 세트 (드리퍼, 서버, 필터)', conditions: ['사진 또는 영상 촬영 가능'], mission: ['추출 과정 사진 또는 영상', '광고(제공) 표기 포함'], eligibility: ['국내 배송 가능 주소'] },
  { slug: 'single-flower-vase', brandId: 'jibkkumi', category: 'home', kind: 'delivery', title: '꽃 한 송이 유리 화병', summary: '창가에 화병을 두고 빛이 닿는 모습을 담아요.', image: 'assets/review-tree/review-20.webp', channels: ['instagram'], quota: 8, start: -5, end: 8, stamps: 2, stickerId: 'st-vase', benefit: '유리 화병 1개', conditions: ['인스타그램 공개 계정'], mission: ['공간 연출 사진 3장', '광고(제공) 표기 포함'], eligibility: ['국내 배송 가능 주소'] },
  { slug: 'ceramic-mug', brandId: 'jibkkumi', category: 'home', kind: 'delivery', title: '손에 감기는 도자기 머그', summary: '매일 쓰는 머그의 크기와 무게감을 소개해요.', image: 'assets/review-tree/review-8.webp', channels: ['blog', 'instagram'], quota: 10, start: -40, end: -26, stamps: 2, stickerId: 'st-chair', benefit: '머그 2개', conditions: ['공개 계정'], mission: BASIC_MISSION, eligibility: ['국내 배송 가능 주소'] },
  { slug: 'wooden-tray', brandId: 'jibkkumi', category: 'home', kind: 'delivery', title: '책상 위 나무 트레이', summary: '흩어진 소품을 정리하며 나뭇결과 크기를 살펴봐요.', image: 'assets/review-tree/review-12.webp', channels: ['blog'], quota: 8, start: 6, end: 16, stamps: 2, stickerId: 'st-lamp', benefit: '트레이 1개', conditions: ['데스크 사진 촬영 가능'], mission: BASIC_MISSION, eligibility: ['국내 배송 가능 주소'] },
  { slug: 'everyday-cotton-bag', brandId: 'ribbonday', category: 'fashion', kind: 'delivery', title: '매일 드는 면 가방', summary: '출근과 산책에 들고 다니며 수납과 착용감을 기록해요.', image: 'assets/review-tree/review-16.webp', channels: ['instagram', 'blog'], quota: 12, start: -7, end: 4, stamps: 3, stickerId: 'st-bag', benefit: '면 가방 1개', conditions: ['착용 사진 촬영 가능'], mission: ['착용·수납 사진 3장', '광고(제공) 표기 포함'], eligibility: ['국내 배송 가능 주소'] },
  { slug: 'cushion-socks', brandId: 'ribbonday', category: 'fashion', kind: 'delivery', title: '폭신한 쿠션 양말 3켤레', summary: '오래 걷는 날 신어보고 착화감을 기록해요.', channels: ['blog', 'shortform'], quota: 15, start: 5, end: 15, stamps: 2, stickerId: 'st-shoe', benefit: '양말 3켤레', conditions: ['공개 계정'], mission: BASIC_MISSION, eligibility: ['국내 배송 가능 주소'] },
  { slug: 'earbud-case', brandId: 'bippi', category: 'tech', kind: 'delivery', title: '말랑 이어폰 케이스', summary: '실리콘 케이스를 씌워 그립감과 보호력을 살펴봐요.', channels: ['instagram', 'youtube'], quota: 10, start: -3, end: 7, stamps: 2, stickerId: 'st-headphones', benefit: '이어폰 케이스 1개 (기종 선택)', conditions: ['호환 기기 보유'], mission: ['장착 전후 사진', '광고(제공) 표기 포함'], eligibility: ['국내 배송 가능 주소'] },
  { slug: 'camera-strap', brandId: 'bippi', category: 'tech', kind: 'delivery', title: '여행용 카메라 스트랩', summary: '여행길에 들고 다니며 길이와 착용감을 기록해요.', channels: ['blog'], quota: 6, start: -18, end: -4, stamps: 3, stickerId: 'st-camera', benefit: '카메라 스트랩 1개', conditions: ['카메라 보유'], mission: BASIC_MISSION, eligibility: ['국내 배송 가능 주소'] },
  { slug: 'dental-clinic-guide', brandId: 'malgeun', category: 'etc', kind: 'editorial', title: '처음 가는 동네 치과 안내 글', summary: '병원이 제공한 자료로 예약과 진료 안내를 정리해요.', channels: ['blog'], quota: 5, start: -2, end: 9, stamps: 2, stickerId: 'st-letter', benefit: '원고료 (데모 금액 미정)', conditions: ['정보형 글 작성 경험'], mission: ['제공 자료 기반 안내 글', '의료광고 심의 기준 준수', '광고(제공) 표기 포함'], eligibility: ['블로그 운영 6개월 이상'] },
  { slug: 'natural-layered-cut', brandId: 'mulgyeol', category: 'beauty', kind: 'visit', title: '자연스러운 레이어드 컷 체험', summary: '디자이너 상담부터 커트까지 경험하고 스타일 변화를 기록해요.', channels: ['instagram', 'blog'], quota: 4, start: -3, end: 8, stamps: 4, stickerId: 'st-scissors', benefit: '커트 + 드라이 1회', conditions: ['시술 전후 사진 촬영 동의'], mission: ['시술 전후 사진', '상담 과정 소개', '광고(제공) 표기 포함'], eligibility: ['서울 성동구 방문 가능'], location: '서울 성동구 (데모 위치)',
    venueId: 'v-mulgyeol-seongsu', menu: '레이어드 컷 + 드라이', visit: [10, 25], visitHours: '화–토 11:00–19:00', reservationMethod: '선정 후 예약 링크로 시간 선택', reservationNotice: '시술 시간은 약 1시간 30분이에요.', companions: '동반 불가', visitConditions: ['펌·염색은 포함되지 않아요'] },
  { slug: 'pottery-one-day-class', brandId: 'heuk', category: 'living', kind: 'visit', title: '물레 원데이 클래스', summary: '물레로 그릇을 빚어보고 완성까지의 과정을 기록해요.', channels: ['blog', 'youtube'], quota: 6, start: -1, end: 12, stamps: 4, stickerId: 'st-bowl', benefit: '원데이 클래스 1인 + 완성품 배송', conditions: ['2시간 수업 참여 가능'], mission: ['수업 과정 사진 또는 영상', '완성품 사진(배송 후)', '광고(제공) 표기 포함'], eligibility: ['경기 수원시 방문 가능'], location: '경기 수원시 (데모 위치)',
    venueId: 'v-heuk-suwon', menu: '물레 체험 + 그릇 2점 소성', visit: [14, 35], visitHours: '토·일 10:00, 14:00 수업', reservationMethod: '선정 후 수업 회차 선택', reservationNotice: '앞치마는 공방에서 준비해요.', companions: '동반 1명 추가 시 별도 비용', visitConditions: ['완성품은 약 3주 뒤 배송돼요'] },
  { slug: 'haeundae-morning-bread', brandId: 'pado', category: 'food', kind: 'visit', title: '해운대 아침 빵 바구니', summary: '아침에 갓 구운 빵을 맛보고 동네 산책 코스와 함께 소개해요.', channels: ['instagram'], quota: 5, start: 3, end: 13, stamps: 3, stickerId: 'st-bread', benefit: '빵 바구니(4종) + 음료 1잔', conditions: ['오전 방문 가능'], mission: ['빵과 매장 사진 3장 이상', '위치 정보', '광고(제공) 표기 포함'], eligibility: ['부산 해운대구 방문 가능'], location: '부산 해운대구 (데모 위치)',
    venueId: 'v-pado-haeundae', menu: '오늘의 빵 4종 + 커피', visit: [15, 28], visitHours: '매일 08:00–11:00', reservationMethod: '예약 없이 방문', reservationNotice: '빵이 소진되면 일찍 마감될 수 있어요.', companions: '1명까지 동반 가능', visitConditions: ['오전 11시 이전 방문'] },
];

export const CAMPAIGNS: Campaign[] = seeds.map(({ start, end, notices, visit, ...s }, i) => ({
  ...s,
  ...(visit ? { visitStart: day(visit[0]), visitEnd: day(visit[1]) } : {}),
  id: 'cmp-' + String(i + 1).padStart(2, '0'),
  recruitStart: day(start),
  recruitEnd: day(end),
  announceAt: day(end + 2),
  reviewDeadline: day(end + 16),
  notices: notices ?? COMMON_NOTICES,
  demo: true,
}));

export const REWARDS: Reward[] = [
  { id: 'rw-01', slug: 'ceramic-mug-set', brandId: 'jibkkumi', name: '도자기 머그 1개', intro: '손에 감기는 둥근 머그예요. 색상은 랜덤이 아닌 신청 시 선택한 색으로 보내요.', image: 'assets/review-tree/review-8.webp', cost: 4, initialStock: 12, limitPerUser: 2, shipping: '신청 후 7일 안에 발송 (데모: 실제 발송 없음)', conditions: ['국내 배송지', '교환 신청 후 취소는 준비 전까지'], notices: ['상품 이미지는 예시예요.'], demo: true },
  { id: 'rw-02', slug: 'travel-hand-cream', brandId: 'malang', name: '여행용 핸드크림 3종', intro: '가방에 쏙 들어가는 30ml 핸드크림 세트예요.', image: 'assets/review-tree/review-11.webp', cost: 3, initialStock: 20, limitPerUser: 1, shipping: '신청 후 5일 안에 발송 (데모)', conditions: ['국내 배송지'], notices: ['피부에 이상이 있으면 사용을 멈춰 주세요.'], demo: true },
  { id: 'rw-03', slug: 'cotton-tote', brandId: 'ribbonday', name: '산책 면 가방', intro: '가볍고 튼튼한 데일리 면 가방이에요.', image: 'assets/review-tree/review-16.webp', cost: 6, initialStock: 8, limitPerUser: 1, shipping: '신청 후 7일 안에 발송 (데모)', conditions: ['국내 배송지'], notices: ['세탁 시 찬물 손세탁을 권해요.'], demo: true },
  { id: 'rw-04', slug: 'glass-vase', brandId: 'jibkkumi', name: '꽃 한 송이 유리 화병', intro: '창가에 두기 좋은 작은 유리 화병이에요.', image: 'assets/review-tree/review-20.webp', cost: 5, initialStock: 0, limitPerUser: 1, shipping: '재입고 후 발송 (데모)', conditions: ['국내 배송지', '파손 시 수령 후 3일 안에 문의'], notices: ['유리 제품이라 포장 상태를 확인해 주세요.'], demo: true },
  { id: 'rw-05', slug: 'green-serum-full', brandId: 'malang', name: '초록 세럼 본품', intro: '체험단에서 인기 많았던 세럼 30ml 본품이에요.', image: 'assets/hero-03/skincare.jpg', cost: 8, initialStock: 6, limitPerUser: 1, shipping: '신청 후 5일 안에 발송 (데모)', conditions: ['국내 배송지'], notices: ['개봉 후 6개월 안에 사용해 주세요.'], demo: true },
  { id: 'rw-06', slug: 'hand-drip-kit', brandId: 'sooprim', name: '핸드드립 입문 세트', intro: '드리퍼, 서버, 필터가 함께 든 입문 세트예요.', image: 'assets/review-tree/review-17.webp', cost: 10, initialStock: 4, limitPerUser: 1, shipping: '신청 후 7일 안에 발송 (데모)', conditions: ['국내 배송지'], notices: ['유리 서버는 뜨거운 물에 주의해 주세요.'], demo: true },
  { id: 'rw-07', slug: 'wooden-desk-tray', brandId: 'jibkkumi', name: '나무 데스크 트레이', intro: '책상 위 작은 물건을 모아두는 원목 트레이예요.', image: 'assets/review-tree/review-12.webp', cost: 12, initialStock: 3, limitPerUser: 1, shipping: '신청 후 10일 안에 발송 (데모)', conditions: ['국내 배송지'], notices: ['원목 특성상 나뭇결이 달라요.'], demo: true },
  { id: 'rw-08', slug: 'dessert-gift-box', brandId: 'dalcom', name: '디저트 선물 상자', intro: '구움과자 6종이 담긴 선물 상자예요.', image: 'assets/review-tree/review-9.webp', cost: 15, initialStock: 5, limitPerUser: 1, shipping: '냉장 택배, 신청 후 3일 안에 발송 (데모)', conditions: ['수도권 배송지'], notices: ['받은 날 바로 냉장 보관해 주세요.'], demo: true },
];
export const rewardBySlug = (slug: string) => REWARDS.find(r => r.slug === slug);

export function campaignStatus(c: Campaign, now = Date.now()): import('../api/types').CampaignStatus {
  if (now < Date.parse(c.recruitStart) - 86400000 + 60000) return 'upcoming';
  if (now > Date.parse(c.recruitEnd)) return 'closed';
  return 'open';
}

export const STATUS_LABEL = { upcoming: '모집 예정', open: '모집 중', closed: '모집 마감' } as const;

export const venueById = (id?: string) => (id ? VENUES.find(v => v.id === id) : undefined);
