"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAVER_GREEN = "#03C75A";
const DANGGEUN = "#FF6F0F";
const INSTA = "#E4405F";
const XIAOHONGSHU = "#FF2442";
const BAEMIN = "#2AC1BC";
const GREEN = "#4ADE80";

type BarRow = {
  icon: string;
  name: string;
  beforeShow: boolean;
  beforeVal: string | number;
  afterVal: string | number;
  beforePct: number;
  afterPct: number;
  badge: string;
  badgeYellow: boolean;
};

const TABS = [
  { id: "naver", label: "네이버 플레이스/블로그", color: NAVER_GREEN },
  { id: "danggeun", label: "당근마켓/맘카페", color: DANGGEUN },
  { id: "insta", label: "인스타그램/유튜브", color: INSTA },
  { id: "xiaohongshu", label: "샤오홍슈", color: XIAOHONGSHU },
  { id: "baemin", label: "배민/커머스", color: BAEMIN },
];

const BAR_DATA: Record<string, { bars: BarRow[]; tags: string[] }> = {
  naver: {
    bars: [
      { icon: "👁", name: "월간 노출", beforeShow: true, beforeVal: 320, afterVal: "4,100", beforePct: 18, afterPct: 82, badge: "▲380%", badgeYellow: false },
      { icon: "📞", name: "전화 문의", beforeShow: true, beforeVal: 8, afterVal: 94, beforePct: 12, afterPct: 68, badge: "▲340%", badgeYellow: false },
      { icon: "📅", name: "신규 예약", beforeShow: true, beforeVal: 12, afterVal: 187, beforePct: 12, afterPct: 78, badge: "▲420%", badgeYellow: false },
    ],
    tags: ["#고품질블로그포스팅", "#전략키워드SEO", "#실사용자리뷰빌드업", "#플레이스최적화", "#메뉴사진교체", "#답변관리"],
  },
  danggeun: {
    bars: [
      { icon: "🥕", name: "단골", beforeShow: false, beforeVal: 0, afterVal: "1,840", beforePct: 0, afterPct: 88, badge: "신규창출", badgeYellow: true },
      { icon: "❤️", name: "게시물 반응", beforeShow: true, beforeVal: 23, afterVal: 847, beforePct: 15, afterPct: 78, badge: "▲480%", badgeYellow: false },
      { icon: "👣", name: "방문", beforeShow: true, beforeVal: 44, afterVal: 312, beforePct: 18, afterPct: 72, badge: "▲340%", badgeYellow: false },
    ],
    tags: ["#동네소식발행", "#맘카페바이럴", "#단골이벤트", "#지역타겟팅", "#입소문미끼"],
  },
  insta: {
    bars: [
      { icon: "👥", name: "팔로워", beforeShow: false, beforeVal: 0, afterVal: "18,400", beforePct: 0, afterPct: 85, badge: "+17,200명", badgeYellow: true },
      { icon: "▶️", name: "릴스 조회", beforeShow: false, beforeVal: 0, afterVal: "127만", beforePct: 0, afterPct: 95, badge: "127만달성", badgeYellow: true },
      { icon: "💬", name: "DM 문의", beforeShow: true, beforeVal: 3, afterVal: 284, beforePct: 8, afterPct: 78, badge: "▲460%", badgeYellow: false },
    ],
    tags: ["#숏폼기획", "#인플루언서섭외", "#동시다발배포", "#알고리즘최적화", "#해시태그전략"],
  },
  xiaohongshu: {
    bars: [
      { icon: "🌏", name: "중국인 방문", beforeShow: true, beforeVal: 4, afterVal: 67, beforePct: 12, afterPct: 72, badge: "▲480%", badgeYellow: false },
      { icon: "⭐", name: "게시물 저장", beforeShow: false, beforeVal: 0, afterVal: "1.1万", beforePct: 0, afterPct: 88, badge: "1.1万저장", badgeYellow: true },
      { icon: "📅", name: "예약 전환", beforeShow: false, beforeVal: 0, afterVal: 38, beforePct: 0, afterPct: 68, badge: "+38건", badgeYellow: true },
    ],
    tags: ["#왕홍시딩", "#K뷰티어팩코스", "#바이럴작업", "#중국타겟"],
  },
  baemin: {
    bars: [
      { icon: "🛵", name: "월 주문", beforeShow: true, beforeVal: 230, afterVal: "1,240", beforePct: 22, afterPct: 80, badge: "▲340%", badgeYellow: false },
      { icon: "★", name: "별점", beforeShow: true, beforeVal: 4.1, afterVal: 4.9, beforePct: 76, afterPct: 92, badge: "▲20%", badgeYellow: false },
      { icon: "🏆", name: "랭킹", beforeShow: true, beforeVal: "23위", afterVal: "1위", beforePct: 12, afterPct: 98, badge: "🏆1위달성", badgeYellow: true },
    ],
    tags: ["#깃발핫스팟", "#포토리뷰작업", "#쩜하기세팅", "#쿠팡스마트스토어", "#알람받기"],
  },
};

function Img({ src, alt, className, fill, ...props }: { src: string; alt: string; className?: string; fill?: boolean; [k: string]: unknown }) {
  const [err, setErr] = useState(false);
  if (err) return <div className={className} style={{ background: "linear-gradient(135deg,#374151,#1f2937)" }} />;
  return <Image src={src} alt={alt} className={className} fill={!!fill} onError={() => setErr(true)} unoptimized {...props} />;
}

function BeforeAfterBar({ row, active }: { row: BarRow; active: boolean }) {
  const [afterWidth, setAfterWidth] = useState(0);
  const [countVal, setCountVal] = useState(typeof row.afterVal === "number" ? 0 : row.afterVal);

  useEffect(() => {
    if (!active) {
      setAfterWidth(0);
      setCountVal(typeof row.afterVal === "number" ? 0 : row.afterVal);
      return;
    }
    const t = setTimeout(() => setAfterWidth(row.afterPct), 50);
    return () => clearTimeout(t);
  }, [active, row.afterPct, row.afterVal]);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-slate-300 text-sm flex items-center gap-1.5">
          <span>{row.icon}</span>
          {row.name}
        </span>
        <span
          className="text-[11px] px-1.5 py-0.5 rounded font-medium"
          style={
            row.badgeYellow
              ? { background: "#854D0E", color: "#FFD600" }
              : { background: "#166534", color: "#4ADE80" }
          }
        >
          {row.badge}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0 h-2 rounded overflow-hidden flex bg-[#1f2937]">
          {row.beforeShow && (
            <div
              className="h-full rounded-l shrink-0 bg-[#374151] transition-all duration-700 ease-out"
              style={{ width: active ? `${Math.max(row.beforePct, 12)}%` : "0%" }}
            />
          )}
          <div
            className="h-full rounded bg-[#4ADE80] shrink-0 transition-all duration-[800ms] ease-out"
            style={{ width: `${afterWidth}%` }}
          />
        </div>
        <div className="flex items-end gap-1 shrink-0 text-right min-w-[80px]">
          {row.beforeShow && (
            <span className="text-[13px] text-[#6B7280]">{String(row.beforeVal)}</span>
          )}
          <span className="text-[14px] font-bold text-[#4ADE80]">{String(row.afterVal)}</span>
        </div>
      </div>
    </div>
  );
}

export function PlatformTabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeId = TABS[activeIndex].id;
  const { bars, tags } = BAR_DATA[activeId];

  return (
    <section id="platform-section" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-[#FFD600] text-[#FFD600] text-xs font-semibold mb-4">
            PROVEN RESULTS
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white break-keep mb-2">
            단순 노출 X, 매출이 터지는 실행입니다
          </h2>
          <p className="text-sm sm:text-base break-keep" style={{ color: "#9CA3AF" }}>
            우리 가게와 같은 업종 탭을 클릭해서 실제 성과를 확인하세요
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* 탭 목록 20% */}
          <div className="lg:w-[20%] flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide shrink-0">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 flex items-center gap-2 px-5 py-3.5 rounded-[10px] text-sm font-medium transition-all text-left w-full lg:w-full ${
                  activeIndex === i ? "bg-[#FFD600] text-black font-bold" : "bg-[#1a2035] text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tab.color }} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* 목업 50% + 수치 30% */}
          <div className="lg:flex-1 flex flex-col xl:flex-row gap-6 xl:gap-8 min-w-0">
            <div className="xl:w-[50%] min-w-0 flex justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-lg"
                >
                  {activeId === "naver" && (
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                      <div className="h-11 flex items-center px-4 text-white font-bold text-sm" style={{ backgroundColor: NAVER_GREEN }}>
                        NAVER 플레이스
                      </div>
                      <div className="relative h-40 bg-gray-200">
                        <Img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" alt="" fill className="object-cover" />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-[20px] text-black font-bold text-xs bg-[#FFD600]">🥇 지역 검색 1위</span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-[18px] font-bold text-[#111]">강남 OO 한의원</h3>
                        <p className="text-[#666] text-sm mt-0.5">★★★★★ <span className="text-[#FFD600]">4.9</span> (리뷰 1,247개)</p>
                        <div className="border-t border-gray-200 my-3" />
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div><p className="text-[11px] text-[#888]">월 클릭</p><p className="text-[20px] font-extrabold text-[#111]">4,100회</p></div>
                          <div><p className="text-[11px] text-[#888]">전화문의</p><p className="text-[20px] font-extrabold text-[#111]">94건</p></div>
                          <div><p className="text-[11px] text-[#888]">길찾기</p><p className="text-[20px] font-extrabold text-[#111]">1,832회</p></div>
                        </div>
                      </div>
                      <div className="bg-[#F8F9FA] px-4 py-3">
                        <div className="flex gap-2 items-start mb-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-gray-300">
                            <Img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" alt="" fill className="object-cover" />
                          </div>
                          <div><p className="text-[13px] text-[#333]">체형교정 후 확실히 달라졌어요...</p><p className="text-[11px] text-[#FFD600]">★★★★★</p></div>
                        </div>
                        <div className="flex gap-2 items-start">
                          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-gray-300">
                            <Img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80" alt="" fill className="object-cover" />
                          </div>
                          <div><p className="text-[13px] text-[#333]">추나요법 받고 허리 통증이 나았어요...</p><p className="text-[11px] text-[#FFD600]">★★★★★</p></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeId === "danggeun" && (
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                      <div className="h-11 flex items-center px-4 text-white font-bold text-sm" style={{ backgroundColor: DANGGEUN }}>🥕 당근마켓</div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 rounded-full bg-[#FF6F0F]/30 flex items-center justify-center text-[#FF6F0F] font-bold text-sm shrink-0">OO</div>
                          <div><span className="font-bold text-[#111] text-sm">OO 맛집 공식계정</span><span className="text-gray-500 text-xs block">마포구 · 방금</span></div>
                        </div>
                        <p className="text-[16px] font-bold text-[#111]">🍜 오늘 점심, 줄 서지 말고 미리 예약하세요</p>
                        <p className="text-[14px] text-[#555] mt-1">저희 가게 다음 주부터 웨이팅 시작됩니다...</p>
                        <div className="relative h-[140px] rounded-lg mt-2 overflow-hidden bg-gray-200">
                          <Img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="" fill className="object-cover" />
                        </div>
                        <p className="text-sm text-[#555] mt-2">❤️ 328 &nbsp; 💬 47 &nbsp; 🥕 단골 1,840명</p>
                        <p className="text-xs text-[#9CA3AF] mt-3 mb-1">단골 증가 추이</p>
                        <div className="flex items-end gap-1 h-20">
                          {[20, 35, 50, 65, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t min-w-0 flex flex-col items-center">
                              <div className="w-full flex-1 flex items-end"><div className="w-full rounded-t transition-all duration-700" style={{ height: `${h}%`, backgroundColor: DANGGEUN }} /></div>
                              <span className="text-[10px] text-[#666] mt-1">{i + 1}주</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-center mt-1 font-bold text-[#111]">6주 1,840명</p>
                      </div>
                    </div>
                  )}

                  {activeId === "insta" && (
                    <div className="flex flex-col sm:flex-row gap-4 items-start justify-center">
                      <div className="w-[200px] h-[380px] rounded-[28px] bg-black border-[3px] border-[#333] overflow-hidden shrink-0 mx-auto sm:mx-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#333] mx-auto mt-2" />
                        <div className="relative w-full h-[calc(100%-20px)] mt-1">
                          <Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" alt="" fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-14 left-3 text-white">
                            <p className="font-bold text-sm">@bello_client</p>
                            <p className="text-xs mt-0.5">#강남맛집 #서울데이트</p>
                          </div>
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 text-white text-xs text-center">
                            <span>❤️<br />4.2만</span>
                            <span>💬<br />1,847</span>
                            <span>➤<br />9,300</span>
                          </div>
                          <div className="absolute bottom-2 left-[20%] right-[20%] h-0.5 bg-white/60 rounded" />
                        </div>
                      </div>
                      <div className="rounded-2xl p-5 min-w-0 flex-1 max-w-xs w-full" style={{ backgroundColor: "#131929" }}>
                        <p className="text-xs text-[#9CA3AF] mb-1">게시 후 72시간</p>
                        <p className="text-[28px] font-extrabold text-[#FFD600]">조회수 127만</p>
                        <div className="border-t border-white/10 my-3" />
                        <div className="h-15 flex items-end gap-0.5">
                          {[25, 45, 40, 65, 85, 100].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t bg-[#4ADE80]" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                        <p className="text-sm text-[#4ADE80] mt-1">팔로워 +17,200명</p>
                        <div className="border-t border-white/10 my-3" />
                        <p className="text-sm text-[#9CA3AF]">DM 예약 문의</p>
                        <p className="text-xl font-bold text-white">+284건</p>
                      </div>
                    </div>
                  )}

                  {activeId === "xiaohongshu" && (
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                      <div className="h-11 flex items-center px-4 text-white font-bold text-sm" style={{ backgroundColor: XIAOHONGSHU }}>小红书 샤오홍슈</div>
                      <div className="relative h-40 bg-gray-200">
                        <Img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" alt="" fill className="object-cover" />
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: XIAOHONGSHU }}>K-뷰티 추천</span>
                      </div>
                      <div className="p-4">
                        <p className="text-[16px] font-bold text-[#111]">韓國必去！강남 피부과 솔직 후기 ✨</p>
                        <p className="text-[14px] text-[#666] mt-2">♥ 2.4万 &nbsp; ⭐수집 1.1万 &nbsp; 💬 847</p>
                        <p className="text-[12px] mt-2" style={{ color: XIAOHONGSHU }}>#韩国美容 #K뷰티 #서울피부과</p>
                        <div className="border-t border-gray-200 my-3" />
                        <div className="rounded-lg py-2 px-3 text-sm font-medium" style={{ backgroundColor: "#FFF0F0", color: XIAOHONGSHU }}>🌏 중국인 관광객 유입 +480%</div>
                      </div>
                    </div>
                  )}

                  {activeId === "baemin" && (
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                      <div className="h-11 flex items-center px-4 text-white font-bold text-sm" style={{ backgroundColor: BAEMIN }}>배달의민족</div>
                      <div className="relative h-[140px] bg-gray-200">
                        <Img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" alt="" fill className="object-cover" />
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-black bg-yellow-400">🏆 이 시간 1위</span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-[18px] font-bold text-[#111]">OO 치킨</h3>
                        <p className="text-[#666] text-sm">★★★★★ 4.9 / 리뷰 3,420개 · 배달 20-30분</p>
                        <div className="flex gap-2 mt-3">
                          <div className="flex gap-2 flex-1">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0 relative">
                              <Img src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=100&q=80" alt="" fill className="object-cover" />
                            </div>
                            <div><p className="text-sm font-medium text-[#111]">후라이드</p><p className="text-xs text-[#666]">18,000원</p></div>
                          </div>
                          <div className="flex gap-2 flex-1">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0 relative">
                              <Img src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=100&q=80" alt="" fill className="object-cover" />
                            </div>
                            <div><p className="text-sm font-medium text-[#111]">반반set</p><p className="text-xs text-[#666]">22,000원</p></div>
                          </div>
                        </div>
                        <div className="bg-[#F8F9FA] rounded-lg px-3 py-3 mt-3">
                          <p className="text-[12px] text-[#888]">월 주문 1,240건 &nbsp; 재주문율 68% &nbsp; 리뷰 응답 100%</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Before/After 30% */}
            <div className="xl:w-[30%] min-w-0 shrink-0">
              <h4 className="text-[13px] mb-4" style={{ color: "#9CA3AF" }}>실행 전 vs 실행 후</h4>
              {bars.map((row, i) => (
                <BeforeAfterBar key={i} row={row} active={true} />
              ))}
              <div className="pt-2">
                <h4 className="text-[12px] mb-3" style={{ color: "#9CA3AF" }}>이렇게 실행합니다</h4>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-[20px] text-[11px] border border-[#374151] text-[#D1D5DB]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-[#6B7280] mt-3">벨로컴퍼니가 직접 기획·실행합니다. 외주 없음.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
