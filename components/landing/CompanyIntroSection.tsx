"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { end: 3, suffix: "억+", label: "월간 마케팅 취급액" },
  { end: 25, suffix: "명+", label: "각 분야별 전문 투입 인력" },
  { end: 10000, suffix: "건+", label: "누적 진행 성공 캠페인" },
  { end: 3, suffix: "개 지사", label: "서울·전북·전남 지사" },
];

function useCountUp(end: number, once: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!once || done) return;
    setDone(true);
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * easeOut));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [end, once, duration, done]);
  return value;
}

function StatCard({ end, suffix, label, inView, delay }: { end: number; suffix: string; label: string; inView: boolean; delay: number }) {
  const value = useCountUp(end, inView, 2000);
  const display = end >= 10000 ? value.toLocaleString() : value;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-[#FFD700]/20 p-4 sm:p-6 flex flex-col justify-center"
    >
      <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#FFD700] tabular-nums tracking-tight">
        {display}{suffix}
      </p>
      <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 break-keep leading-snug">{label}</p>
    </motion.div>
  );
}

export function CompanyIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="company-intro"
      ref={ref}
      className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#0B1120" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-[2.5rem] font-bold text-white leading-snug break-keep mb-4">
              우리는 말뿐인 &apos;대행사&apos;가 아니라,
              <br />
              진짜 성과를 만드는 &apos;초대형 실행팀&apos;입니다.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed break-keep">
              수많은 대행사들이 결국 벨로컴퍼니를 찾습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
