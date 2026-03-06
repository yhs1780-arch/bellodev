"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  getMockupCardsForTab,
  SHOWCASE_TABS,
  type ShowcaseCategoryId,
  type PlatformMockupType,
} from "@/lib/showcaseFilterData";
import { MapPin, Phone, Calendar, Heart, MessageCircle, Star } from "lucide-react";

function NaverPlaceMockup() {
  return (
    <div className="h-full flex flex-col bg-white text-black overflow-hidden">
      <div className="bg-[#03C75A] text-white p-1.5 flex items-center justify-center shrink-0">
        <span className="text-[7px] sm:text-[8px] font-bold">네이버 플레이스</span>
      </div>
      <div className="flex-1 overflow-hidden p-1.5 space-y-1">
        <p className="text-[7px] sm:text-[8px] font-bold leading-tight line-clamp-1">[강남역 맛집] 벨로 다이닝</p>
        <div className="flex items-center gap-1">
          <span className="text-[8px] text-amber-500">★★★★★</span>
          <span className="text-[6px] text-gray-500">리뷰 2,540개</span>
        </div>
        <div className="aspect-video rounded bg-gray-200 w-full shrink-0" />
        <div className="flex gap-1 pt-0.5">
          <span className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded bg-gray-100 text-[6px]">
            <MapPin className="w-2.5 h-2.5" /> 길찾기
          </span>
          <span className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded bg-gray-100 text-[6px]">
            <Phone className="w-2.5 h-2.5" /> 전화
          </span>
          <span className="flex-1 flex items-center justify-center gap-0.5 py-1 rounded bg-gray-100 text-[6px]">
            <Calendar className="w-2.5 h-2.5" /> 예약
          </span>
        </div>
      </div>
    </div>
  );
}

function DaangnMockup() {
  return (
    <div className="h-full flex flex-col bg-white text-black overflow-hidden">
      <div className="bg-[#FF7E36] text-white p-1.5 flex items-center justify-center shrink-0">
        <span className="text-[7px] sm:text-[8px] font-bold">당근마켓 동네소식</span>
      </div>
      <div className="flex-1 overflow-hidden p-1.5 space-y-1">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#FF7E36]/30 flex items-center justify-center text-[6px]">동</span>
          <p className="text-[7px] font-bold leading-tight line-clamp-1">[단골맺기] 우리 동네 숨은 펌 맛집</p>
        </div>
        <p className="text-[8px] text-[#FF7E36] font-bold">단골 1,200</p>
        <div className="h-12 rounded bg-gray-100 flex items-center justify-center text-[6px] text-gray-500">이미지 영역</div>
        <div className="flex items-center gap-2 pt-0.5">
          <span className="flex items-center gap-0.5 text-[6px]"><Heart className="w-2.5 h-2.5" /> 320</span>
          <span className="flex items-center gap-0.5 text-[6px]"><MessageCircle className="w-2.5 h-2.5" /> 48</span>
        </div>
      </div>
    </div>
  );
}

function BaeminMockup() {
  return (
    <div className="h-full flex flex-col bg-white text-black overflow-hidden">
      <div className="bg-[#2AC1BC] text-white p-1.5 flex items-center justify-center shrink-0">
        <span className="text-[7px] sm:text-[8px] font-bold">배달의민족</span>
      </div>
      <div className="flex-1 overflow-hidden p-1.5 space-y-1">
        <p className="text-[8px] font-bold text-[#2AC1BC]">배달 랭킹 1위</p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
          <div className="min-w-0">
            <p className="text-[7px] font-bold truncate">벨로 키친</p>
            <p className="text-[6px] text-gray-500 flex items-center gap-0.5">❤️ 3,420 · 리뷰 이벤트 진행 중</p>
          </div>
        </div>
        <div className="space-y-0.5">
          {["시그니처 세트 12,000원", "인기메뉴 8,500원", "세트메뉴 15,000원"].map((m, i) => (
            <div key={i} className="flex items-center justify-between py-0.5 border-b border-gray-100 text-[6px]">
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function XiaohongshuMockup() {
  return (
    <div className="h-full flex flex-col bg-white text-black overflow-hidden">
      <div className="bg-[#FF2442] text-white p-1.5 flex items-center justify-center shrink-0">
        <span className="text-[7px] sm:text-[8px] font-bold">小红书</span>
      </div>
      <div className="flex-1 overflow-hidden p-1.5 space-y-1">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="aspect-square rounded bg-gray-200" />
          <div className="aspect-square rounded bg-gray-100" />
          <div className="aspect-square rounded bg-gray-100" />
          <div className="aspect-square rounded bg-gray-200" />
        </div>
        <p className="text-[6px] text-gray-600 line-clamp-2">韩国K-뷰티 必去 皮肤管理 前后对比 爆款...</p>
        <div className="flex items-center gap-2 text-[6px] text-gray-500">
          <span>♥ 2.4万</span>
          <span>★ 收藏 1.1万</span>
        </div>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <div className="h-full flex flex-col bg-white text-black overflow-hidden">
      <div className="bg-[#1e3a5f] text-white p-1.5 flex items-center justify-center shrink-0">
        <span className="text-[7px] sm:text-[8px] font-bold">BEST 100 1위</span>
      </div>
      <div className="flex-1 overflow-hidden p-1.5 space-y-1">
        <div className="aspect-square rounded bg-gray-200 w-full max-w-[60%] mx-auto" />
        <p className="text-[7px] font-bold text-center">베스트 리뷰</p>
        <div className="flex gap-0.5 justify-center">
          <div className="w-8 h-8 rounded bg-gray-200" />
          <div className="w-8 h-8 rounded bg-gray-200" />
          <div className="w-8 h-8 rounded bg-gray-200" />
        </div>
        <div className="flex items-center justify-center gap-0.5 text-amber-500 text-[8px]">
          <Star className="w-3 h-3 fill-current" />★★★★★ 4.9 (2,340)
        </div>
      </div>
    </div>
  );
}

function InstaMockup() {
  return (
    <div className="h-full flex flex-col bg-black text-white overflow-hidden">
      <div className="flex items-center justify-between p-1.5 border-b border-white/20 shrink-0">
        <span className="text-[7px] font-bold">Instagram</span>
        <span className="text-[6px] text-white/70">•••</span>
      </div>
      <div className="flex-1 overflow-hidden p-1 flex flex-col items-center justify-center">
        <div className="aspect-square w-full max-w-[85%] rounded-lg bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center border border-white/10">
          <span className="text-[6px] text-white/80">Reels</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-[6px]">
          <span className="flex items-center gap-0.5">♥ 150万</span>
          <span className="flex items-center gap-0.5">💬 2,400</span>
        </div>
        <p className="text-[6px] text-white/90 mt-0.5">조회수 150만 돌파</p>
      </div>
    </div>
  );
}

function PlatformMockupContent({ type }: { type: PlatformMockupType }) {
  switch (type) {
    case "naver": return <NaverPlaceMockup />;
    case "daangn": return <DaangnMockup />;
    case "baemin": return <BaeminMockup />;
    case "xiaohongshu": return <XiaohongshuMockup />;
    case "commerce": return <CommerceMockup />;
    case "insta": return <InstaMockup />;
  }
}

export function PlatformFilterSection() {
  const [activeTab, setActiveTab] = useState<ShowcaseCategoryId>("all");
  const cards = getMockupCardsForTab(activeTab);

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center"
            >
              {/* 스마트폰 목업 프레임 */}
              <div className="relative w-full max-w-[180px] sm:max-w-[200px] mx-auto aspect-[9/16] rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden bg-white">
                <div className="absolute inset-0 flex flex-col">
                  <PlatformMockupContent type={card.type} />
                </div>
              </div>
              {/* 목업 아래 뱃지 및 설명 (오버레이 느낌으로 바로 아래 배치) */}
              <div className="mt-3 text-center w-full max-w-[180px] sm:max-w-[200px]">
                <p className="text-[#FFD700] text-xs sm:text-sm font-bold break-keep">
                  [{card.badge}]
                </p>
                <p className="text-white text-[10px] sm:text-xs mt-0.5 text-slate-300 break-keep">
                  {card.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
