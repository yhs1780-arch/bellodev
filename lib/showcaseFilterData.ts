/** 홈 '사장님의 가게, 화면에 이렇게' 섹션용 업종별 전/후 스타일 쇼케이스 */

export type ShowcaseCategoryId = "all" | "medical" | "beauty" | "fnb" | "health" | "commerce";

export type ShowcaseItem = {
  id: string;
  category: ShowcaseCategoryId;
  image: string;
  title: string;
  sub: string;
};

/** 업종별 6개씩 (전체 탭에서는 각 업종 대표 1개 + 혼합) */
export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // 병원/의료
  {
    id: "m1",
    category: "medical",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    title: "지역 검색 1페이지 고정",
    sub: "의료기관 플레이스·블로그 연동",
  },
  {
    id: "m2",
    category: "medical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    title: "초진 예약 마감",
    sub: "정형외과·치과 키워드 상위",
  },
  {
    id: "m3",
    category: "medical",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    title: "유튜브 검색 상위",
    sub: "정보성 영상으로 환자 유입",
  },
  {
    id: "m4",
    category: "medical",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    title: "한의원·체형교정 1위",
    sub: "영수증 리뷰·키워드 최적화",
  },
  {
    id: "m5",
    category: "medical",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    title: "병원 플레이스 리뷰",
    sub: "전/후 노출 비교",
  },
  {
    id: "m6",
    category: "medical",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    title: "의료 SEO 상위 노출",
    sub: "블로그·지도 통합 전략",
  },
  // 뷰티/시술
  {
    id: "b1",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1560066984-1383b3fdfa9a?w=600&q=80",
    title: "동네 미용실 단골 300명+",
    sub: "당근·지역광고 전/후",
  },
  {
    id: "b2",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    title: "K-뷰티 에스테틱",
    sub: "샤오홍슈 해외 유입 400%",
  },
  {
    id: "b3",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    title: "피부과 시술 문의 폭주",
    sub: "블로그·플레이스 연동",
  },
  {
    id: "b4",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    title: "네일샵 중국인 필수 코스",
    sub: "왕홍 콘텐츠 기획",
  },
  {
    id: "b5",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    title: "헤어살롱 예약률 상승",
    sub: "인스타·플레이스 동시 공략",
  },
  {
    id: "b6",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    title: "뷰티 시술 전/후 노출",
    sub: "리뷰·사진 퀄리티 개선",
  },
  // F&B/식당
  {
    id: "f1",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    title: "고깃집 일 매출 1천만 원",
    sub: "플레이스 1페이지·단체 예약",
  },
  {
    id: "f2",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    title: "한식당 점심 예약 풀",
    sub: "메인 키워드 1~3위 장악",
  },
  {
    id: "f3",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    title: "카페 동네 맛집 등극",
    sub: "당근 저장 1,200+",
  },
  {
    id: "f4",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    title: "빈 테이블 → 웨이팅",
    sub: "노출·리뷰 전략 전/후",
  },
  {
    id: "f5",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80",
    title: "와인바 데이트 1순위",
    sub: "인스타 그램 바이럴",
  },
  {
    id: "f6",
    category: "fnb",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    title: "식당 플레이스 전/후",
    sub: "사진·메뉴 최적화",
  },
  // 헬스/학원
  {
    id: "h1",
    category: "health",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    title: "헬스장 신규 회원 200명",
    sub: "지역 헬스 1위 노출",
  },
  {
    id: "h2",
    category: "health",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    title: "필라테스 오픈 멤버 조기 마감",
    sub: "당근 지역 광고 250건",
  },
  {
    id: "h3",
    category: "health",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&q=80",
    title: "태권도장 원생 모집 마감",
    sub: "동네 광고·상담 180건",
  },
  {
    id: "h4",
    category: "health",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    title: "영어학원 설명회 전 좌석",
    sub: "맘카페 입소문 전/후",
  },
  {
    id: "h5",
    category: "health",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    title: "피아노학원 신규 50명",
    sub: "교육 정보성 콘텐츠",
  },
  {
    id: "h6",
    category: "health",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    title: "학원·체육 시설 노출",
    sub: "플레이스·블로그 상위",
  },
  // 커머스
  {
    id: "c1",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    title: "배달앱 카테고리 1위",
    sub: "깃발·리뷰 최적화 전/후",
  },
  {
    id: "c2",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    title: "스마트스토어 베스트 10",
    sub: "리뷰 시딩·전환율 8%",
  },
  {
    id: "c3",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80",
    title: "쇼핑몰 구매 전환 2배",
    sub: "실제 후기·성분 정보",
  },
  {
    id: "c4",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    title: "쿠팡 베스트 월 매출 2억",
    sub: "포토 리뷰·검색 상위",
  },
  {
    id: "c5",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    title: "요기요 구역 1위",
    sub: "주문 수 2배·평점 4.8",
  },
  {
    id: "c6",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1567620832903-0fc676de4786?w=600&q=80",
    title: "치킨집 주문 2.5배",
    sub: "썸네일·리뷰 전면 개편",
  },
];

export const SHOWCASE_TABS: { id: ShowcaseCategoryId; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "medical", label: "병원/의료" },
  { id: "beauty", label: "뷰티/시술" },
  { id: "fnb", label: "F&B/식당" },
  { id: "health", label: "헬스/학원" },
  { id: "commerce", label: "커머스" },
];
