"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "방금 강남 피부과 원장님이 무료 전략을 신청하셨습니다",
  "조금 전 마포구 카페 사장님이 플레이스 진단을 신청하셨습니다",
  "방금 분당 학원 원장님이 채널 전략을 신청하셨습니다",
  "조금 전 역삼 헬스장 대표님이 상위노출 진단을 신청하셨습니다",
  "방금 홍대 네일샵 원장님이 인스타 전략을 신청하셨습니다",
];

const CYCLE_MS = 7000;

export function ToastNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, CYCLE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="fixed right-5 z-[9999] hidden min-[481px]:block pointer-events-none"
      style={{ top: 76 }}
    >
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="rounded-xl flex gap-3 items-start w-80"
            style={{
              background: "#1a2035",
              border: "1px solid #2a3347",
              borderLeft: "4px solid #FFD600",
              padding: "14px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
              style={{ background: "rgba(255,214,0,0.13)" }}
            >
              🔔
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold mb-1" style={{ fontSize: 11, color: "#FFD600" }}>
                방금 신규 상담 신청
              </p>
              <p className="leading-snug" style={{ fontSize: 13, color: "#E5E7EB", lineHeight: 1.5 }}>
                {MESSAGES[index]}
              </p>
              <p className="mt-1" style={{ fontSize: 11, color: "#6B7280" }}>
                방금 전
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
