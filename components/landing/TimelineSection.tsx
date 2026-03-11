"use client";

import { motion } from "framer-motion";

const ACCENT = "#FFD600";
const GREEN = "#4ADE80";
const PURPLE = "#6366F1";

const STEPS = [
  {
    num: "1",
    numBg: ACCENT,
    numColor: "#000",
    title: "정밀 진단 & 세팅",
    items: ["플레이스 키워드 분석", "경쟁사 상위 노출 역분석", "사진·메뉴판 전면 교체", "카테고리·속성 최적화"],
    badge: "⏱ 평균 세팅 완료 7일",
    badgeStyle: { background: "#1e2d45", color: "#9CA3AF" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "2",
    numBg: ACCENT,
    numColor: "#000",
    title: "콘텐츠 폭격 시작",
    items: ["네이버 블로그 포스팅 배포", "맘카페·지역 카페 침투", "리뷰 빌드업 착수", "인스타 릴스 제작·배포"],
    badge: "📋 콘텐츠 평균 14건 배포",
    badgeStyle: { background: "#1e2d45", color: "#9CA3AF" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "3",
    numBg: GREEN,
    numColor: "#000",
    title: "순위 상승 감지",
    items: ["플레이스 순위 가시적 상승", "블로그 상위 노출 시작", "유입 트래픽 주간 +300%", "전화 문의 증가 시작"],
    badge: "📊 평균 순위 변화 -8위",
    badgeStyle: { background: "#14532D", color: "#4ADE80" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: "4",
    numBg: GREEN,
    numColor: "#000",
    title: "매출 체감 시작",
    items: ["전화·예약 폭발적 증가", "리뷰 100개+ 달성", "플레이스 상위권 안착", "재계약 전략 수립"],
    badge: "💰 평균 문의 +847%",
    badgeStyle: { background: "#78350F", color: "#FFD600" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    num: "∞",
    numBg: PURPLE,
    numColor: "#fff",
    title: "지속 성장 최적화",
    items: ["월간 성과 리포트 제공", "매체 알고리즘 변화 대응", "신규 채널 확장 검토", "경쟁사 동향 모니터링"],
    badge: "재계약률 97%",
    badgeStyle: null,
    badgeLarge: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline-section" className="relative w-full overflow-hidden" style={{ backgroundColor: "#0d1117", padding: "100px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <h2 className="text-center font-extrabold text-white" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          계약 후 4주, 실제로 이렇게 달라집니다
        </h2>
        <p className="text-center mt-3" style={{ fontSize: 15, color: "#6B7280" }}>
          벨로컴퍼니 진행 사례 평균 데이터
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-0 mt-15 relative max-w-[1200px] mx-auto"
          style={{ marginTop: 60, padding: "0 40px" }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative mb-4 md:mb-0 group"
            >
              {/* 카드 사이 연결 화살표 (데스크톱만, 마지막 제외) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full z-10 h-0.5"
                  style={{ background: "#2a3347", width: 32, marginLeft: 20 }}
                >
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#2a3347]"
                    style={{ right: -8, top: -5 }}
                  />
                </div>
              )}

              <div
                className="rounded-2xl border transition-all duration-200 group-hover:border-[#FFD600] group-hover:-translate-y-1 h-full flex flex-col"
                style={{
                  background: "#131929",
                  border: "1px solid #1e2d45",
                  padding: "28px 24px",
                  borderRadius: 16,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                    style={{ background: step.numBg, color: step.numColor, fontSize: 14 }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1e2d45" }}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-4" style={{ fontSize: 16 }}>
                  {step.title}
                </h3>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0 flex-1">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span style={{ fontSize: 13, color: "#D1D5DB", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-[#1e2d45]">
                  {step.badgeLarge ? (
                    <p className="font-black" style={{ fontSize: 22, color: GREEN }}>
                      {step.badge}
                    </p>
                  ) : step.badgeStyle ? (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-[20px] font-bold px-3.5 py-1.5"
                      style={{ fontSize: 12, ...step.badgeStyle }}
                    >
                      {step.badge}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
