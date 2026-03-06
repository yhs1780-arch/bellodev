/** 홈 '사장님의 가게, 화면에 이렇게' - 플랫폼 UI 목업용 (이미지 없음, CSS만) */

export type ShowcaseCategoryId = "all" | "medical" | "beauty" | "fnb" | "health" | "commerce";

export type PlatformMockupType = "naver" | "daangn" | "baemin" | "xiaohongshu" | "commerce" | "insta";

export type MockupCard = {
  id: string;
  type: PlatformMockupType;
  badge: string;
  sub: string;
};

const ALL_CARDS: MockupCard[] = [
  { id: "a1", type: "naver", badge: "네이버 1위 장악", sub: "검색결과 최상단 노출로 유입 극대화" },
  { id: "a2", type: "daangn", badge: "당근 단골 폭발", sub: "동네소식·단골맺기로 신규 고객 확보" },
  { id: "a3", type: "baemin", badge: "배민 랭킹 1위", sub: "깃발·리뷰 전략으로 주문 수 극대화" },
  { id: "a4", type: "xiaohongshu", badge: "샤오홍슈 K-뷰티", sub: "해외 관광객 필수 코스 노출" },
  { id: "a5", type: "commerce", badge: "스마트스토어·쿠팡 1위", sub: "베스트 리뷰로 전환율 2배" },
  { id: "a6", type: "insta", badge: "인스타 바이럴", sub: "조회수 150만·예약 폭주" },
];

const MEDICAL_CARDS: MockupCard[] = [
  { id: "m1", type: "naver", badge: "네이버 1위 장악", sub: "의료 키워드 검색 최상단 노출" },
  { id: "m2", type: "daangn", badge: "당근 동네 신뢰", sub: "단골맺기·동네소식으로 초진 유입" },
  { id: "m3", type: "naver", badge: "플레이스·블로그 연동", sub: "지역 병원 검색 1페이지 고정" },
  { id: "m4", type: "xiaohongshu", badge: "K-의료 관광", sub: "해외 환자 선예약 유도" },
  { id: "m5", type: "naver", badge: "초진 예약 마감", sub: "영수증 리뷰·키워드 최적화" },
  { id: "m6", type: "daangn", badge: "맘카페 입소문", sub: "학부모 타겟 상담 문의 증가" },
];

const BEAUTY_CARDS: MockupCard[] = [
  { id: "b1", type: "daangn", badge: "당근 단골 300명+", sub: "동네 숨은 펌·네일 맛집 노출" },
  { id: "b2", type: "xiaohongshu", badge: "샤오홍슈 K-뷰티", sub: "시술 전후 그리드·왕홍 콘텐츠" },
  { id: "b3", type: "insta", badge: "인스타 릴스 바이럴", sub: "조회수 150만·예약 2주 대기" },
  { id: "b4", type: "xiaohongshu", badge: "중국인 필수 코스", sub: "네일·에스테틱 선예약" },
  { id: "b5", type: "daangn", badge: "동네소식 저장 1,200", sub: "원장님 스토리로 신뢰도 구축" },
  { id: "b6", type: "insta", badge: "그램 데이트 1순위", sub: "20·30대 방문 유입 극대화" },
];

const FNB_CARDS: MockupCard[] = [
  { id: "f1", type: "naver", badge: "네이버 1위 장악", sub: "강남역 맛집 검색 최상단 노출" },
  { id: "f2", type: "daangn", badge: "당근 동네 맛집", sub: "단골맺기·저장 1,200개 돌파" },
  { id: "f3", type: "baemin", badge: "배민 랭킹 1위", sub: "주문 수 3배·찜 2,000개" },
  { id: "f4", type: "insta", badge: "인스타 핫플 등극", sub: "릴스 150만 조회·웨이팅 3시간" },
  { id: "f5", type: "naver", badge: "점심 단체 예약 풀", sub: "메인 키워드 1~3위 장악" },
  { id: "f6", type: "baemin", badge: "배달 구역 1위", sub: "리뷰 이벤트·깃발 최적화" },
];

const HEALTH_CARDS: MockupCard[] = [
  { id: "h1", type: "naver", badge: "헬스·학원 1위 노출", sub: "플레이스·지도 동시 상위" },
  { id: "h2", type: "daangn", badge: "당근 오픈 멤버 조기 마감", sub: "상담 250건·등록률 60%" },
  { id: "h3", type: "naver", badge: "지역 검색 1~2위", sub: "시설·후기 관리로 노출 극대화" },
  { id: "h4", type: "daangn", badge: "태권도장·필라테스", sub: "동네 광고로 원생·회원 모집" },
  { id: "h5", type: "naver", badge: "학원 설명회 전 좌석", sub: "블로그·플레이스 연동" },
  { id: "h6", type: "daangn", badge: "맘카페 입소문", sub: "학부모 신뢰도 구축 후 등록 전환" },
];

const COMMERCE_CARDS: MockupCard[] = [
  { id: "c1", type: "commerce", badge: "BEST 100 1위", sub: "포토 리뷰·전환율 8% 달성" },
  { id: "c2", type: "commerce", badge: "스마트스토어 베스트 10", sub: "리뷰 시딩·구매 망설임 해소" },
  { id: "c3", type: "insta", badge: "릴스 택배 주문 폭주", sub: "조회 80만·주문 300% 증가" },
  { id: "c4", type: "commerce", badge: "쿠팡 카테고리 3위", sub: "리뷰 5,000+·월 매출 2억" },
  { id: "c5", type: "commerce", badge: "구매 전환율 2배", sub: "실제 후기·성분 정보 체계화" },
  { id: "c6", type: "insta", badge: "커머스 바이럴", sub: "쇼핑몰 인스타 연동 전환" },
];

export function getMockupCardsForTab(tab: ShowcaseCategoryId): MockupCard[] {
  switch (tab) {
    case "all": return ALL_CARDS;
    case "medical": return MEDICAL_CARDS;
    case "beauty": return BEAUTY_CARDS;
    case "fnb": return FNB_CARDS;
    case "health": return HEALTH_CARDS;
    case "commerce": return COMMERCE_CARDS;
  }
}

export const SHOWCASE_TABS: { id: ShowcaseCategoryId; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "medical", label: "병원/의료" },
  { id: "beauty", label: "뷰티/시술" },
  { id: "fnb", label: "F&B/식당" },
  { id: "health", label: "헬스/학원" },
  { id: "commerce", label: "커머스" },
];
