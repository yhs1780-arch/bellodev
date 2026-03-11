"use client";

import { motion } from "framer-motion";

const ACCENT = "#FFD600";
const GREEN = "#4ADE80";

const STEPS = [
  {
    num: "1",
    icon: "🔍",
    title: "정밀 진단 & 세팅",
    items: ["플레이스 키워드 분석", "경쟁사 상위 노출 역분석", "사진·메뉴판 전면 교체", "카테고리·속성 최적화"],
    badge: "평균 세팅 완료 7일",
    badgeColor: "slate",
  },
  {
    num: "2",
    icon: "✍️",
    title: "콘텐츠 폭격 시작",
    items: ["네이버 블로그 포스팅 배포", "맘카페·지역 카페 침투", "리뷰 빌드업 착수", "인스타 릴스 제작·배포"],
    badge: "콘텐츠 평균 14건 배포",
    badgeColor: "slate",
  },
  {
    num: "3",
    icon: "📈",
    title: "순위 상승 감지",
    items: ["플레이스 순위 가시적 상승", "블로그 상위 노출 시작", "유입 트래픽 주간 +300%", "전화 문의 증가 시작"],
    badge: "평균 순위 변화 -8위",
    badgeColor: "green",
  },
  {
    num: "4",
    icon: "📞",
    title: "매출 체감 시작",
    items: ["전화·예약 폭발적 증가", "리뷰 100개+ 달성", "플레이스 상위권 안착", "재계약 전략 수립"],
    badge: "평균 문의 +847%",
    badgeColor: "yellow",
  },
  {
    num: "∞",
    icon: "🔄",
    title: "지속 성장 최적화",
    items: ["월간 성과 리포트 제공", "매체 알고리즘 변화 대응", "신규 채널 확장 검토", "경쟁사 동향 모니터링"],
    badge: "재계약률 97%",
    badgeColor: "greenLarge",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline-section" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#131929" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center break-keep mb-2">
          계약 후 4주, 실제로 이렇게 달라집니다
        </h2>
        <p className="text-slate-500 text-center text-sm mb-10">벨로컴퍼니 진행 사례 평균 데이터</p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative flex flex-col shrink-0 md:flex-1 min-w-[280px] md:min-w-0"
            >
              {i > 0 && (
                <>
                  <div className="hidden md:block absolute top-8 -left-3 w-6 h-0.5 border-t-2 border-dashed border-white/20" />
                  <div className="md:hidden absolute left-6 -top-2 h-4 w-0.5 border-l-2 border-dashed border-white/20" />
                </>
              )}
              <div className="rounded-xl border border-white/20 bg-gray-900/50 p-4 sm:p-5 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-black shrink-0"
                    style={{ backgroundColor: step.badgeColor === "greenLarge" ? GREEN : ACCENT }}
                  >
                    {step.num}
                  </span>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-white/10 shrink-0">{step.icon}</span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-2">{step.title}</h3>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-slate-400 text-xs sm:text-sm flex items-center gap-2">
                      ✅ {item}
                    </li>
                  ))}
                </ul>
                {step.badgeColor === "greenLarge" ? (
                  <p className="text-lg font-bold" style={{ color: GREEN }}>{step.badge}</p>
                ) : (
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      step.badgeColor === "green" ? "text-white" : step.badgeColor === "yellow" ? "text-black font-bold" : "text-slate-400"
                    }`}
                    style={
                      step.badgeColor === "green" ? { backgroundColor: GREEN } : step.badgeColor === "yellow" ? { backgroundColor: ACCENT } : {}
                    }
                  >
                    {step.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
