"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "조금 전 역삼 헬스장 대표님께서 플레이스 상위노출 진단을 신청하였습니다",
  "방금 강남 피부과 원장님이 무료 전략을 신청하셨습니다",
  "조금 전 마포구 카페 사장님이 상담을 신청하셨습니다",
  "방금 분당 학원 원장님이 진단을 신청하셨습니다",
];

const CYCLE_MS = 5000;
const VISIBLE_MS = 3000;

export function ToastNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, CYCLE_MS);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), VISIBLE_MS);
    return () => clearTimeout(t);
  }, [visible, index]);

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur px-4 py-3 shadow-xl text-sm text-slate-200 break-keep"
          >
            {MESSAGES[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
