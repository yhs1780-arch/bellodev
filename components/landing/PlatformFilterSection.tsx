"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  SHOWCASE_ITEMS,
  SHOWCASE_TABS,
  type ShowcaseCategoryId,
} from "@/lib/showcaseFilterData";

export function PlatformFilterSection() {
  const [activeTab, setActiveTab] = useState<ShowcaseCategoryId>("all");

  const displayedItems = useMemo(() => {
    if (activeTab === "all") {
      const byCategory = {
        medical: SHOWCASE_ITEMS.filter((i) => i.category === "medical")[0],
        beauty: SHOWCASE_ITEMS.filter((i) => i.category === "beauty")[0],
        fnb: SHOWCASE_ITEMS.filter((i) => i.category === "fnb")[0],
        health: SHOWCASE_ITEMS.filter((i) => i.category === "health")[0],
        commerce: SHOWCASE_ITEMS.filter((i) => i.category === "commerce")[0],
      };
      const second = SHOWCASE_ITEMS.filter((i) => i.category === "medical")[1];
      return [
        byCategory.medical,
        byCategory.beauty,
        byCategory.fnb,
        byCategory.health,
        byCategory.commerce,
        second,
      ].filter(Boolean);
    }
    return SHOWCASE_ITEMS.filter((i) => i.category === activeTab).slice(0, 6);
  }, [activeTab]);

  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-6 sm:mb-12"
        >
          사장님의 가게, 화면에 이렇게 매력적으로 보입니다.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all break-keep ${
                activeTab === tab.id
                  ? "bg-[#FFD700] text-[#0B1120]"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6"
        >
          {displayedItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full max-w-[140px] sm:max-w-[200px] mx-auto aspect-[9/16] rounded-lg sm:rounded-xl overflow-hidden border border-white/10 bg-slate-800 shadow-lg group-hover:border-[#FFD700]/30 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white">
                  <p className="text-[10px] sm:text-xs font-semibold text-[#FFD700] drop-shadow-md line-clamp-1 break-keep">
                    {item.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/90 line-clamp-1 break-keep mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-2 text-center break-keep px-1">
                전/후 비교·실제 진행 사례
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
