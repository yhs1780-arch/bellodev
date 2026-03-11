"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-15 overflow-hidden"
      style={{ backgroundColor: "#0B0F1A", paddingTop: 80, paddingBottom: 60 }}
    >
      {/* 미세 그리드 패턴 배경 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1200px] mx-auto"
        style={{ gap: 60, padding: "0 40px" }}
      >
        {/* 좌측 텍스트 */}
        <div className="text-center lg:text-left">
          <span
            className="inline-flex items-center gap-2 border rounded-[30px] font-semibold mb-7"
            style={{ borderWidth: "1.5px", borderColor: "#FFD600", color: "#FFD600", padding: "8px 18px", fontSize: 13 }}
          >
            📞 상담 후 평균 4주, 매출이 달라집니다
          </span>
          <h1
            className="font-black text-white leading-tight mb-5 break-keep"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-1px" }}
          >
            성과로 증명하는
            <br />
            진짜 마케팅 실행사
          </h1>
          <p className="mb-9 break-keep" style={{ fontSize: 17, color: "#9CA3AF", lineHeight: 1.7, marginBottom: 36 }}>
            수수료 0%, 직접 실행, 10분 내 응답.
            <br />
            사장님 매장을 직접 책임집니다.
          </p>
          <div className="flex gap-3 flex-wrap mb-7" style={{ marginBottom: 28 }}>
            <Link
              href="#consulting-form"
              className="inline-flex items-center justify-center rounded-[10px] font-bold cursor-pointer border-0"
              style={{ background: "#FFD600", color: "#000", fontSize: 16, padding: "16px 32px" }}
            >
              무료 진단 받기
            </Link>
            <Link
              href="#case-section"
              className="inline-flex items-center justify-center rounded-[10px] font-semibold cursor-pointer"
              style={{ background: "transparent", color: "#fff", fontSize: 16, padding: "16px 28px", border: "1.5px solid #374151" }}
            >
              성과 사례 보기 →
            </Link>
          </div>
          <div className="flex gap-5 flex-wrap" style={{ fontSize: 13, color: "#6B7280" }}>
            <span>✅ 상담 무료</span>
            <span>✅ 계약 강요 없음</span>
            <span>✅ 10분이면 충분</span>
          </div>
        </div>

        {/* 우측 목업 카드 */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[440px]">
            <p
              className="absolute left-0 text-xs"
              style={{ top: -32, fontSize: 12, color: "#9CA3AF" }}
            >
              벨로컴퍼니 실행 후 4주차
            </p>
            <div
              className="bg-white rounded-[20px] overflow-hidden w-full"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
            >
              <div className="text-white font-bold text-sm flex items-center" style={{ background: "#03C75A", padding: "12px 16px" }}>
                NAVER 플레이스
              </div>
              <div className="relative h-[180px] bg-gray-200">
                {imgErr ? (
                  <div className="w-full h-full bg-gray-300" />
                ) : (
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                    onError={() => setImgErr(true)}
                  />
                )}
                <span
                  className="absolute rounded-[20px] text-black font-bold text-xs"
                  style={{ top: 12, right: 12, background: "#FFD600", padding: "4px 10px" }}
                >
                  🥇 지역 검색 1위
                </span>
              </div>
              <div className="px-5 py-4" style={{ padding: "16px 20px" }}>
                <h3 className="font-bold text-[#111]" style={{ fontSize: 18 }}>강남 OO 한의원</h3>
                <p className="text-sm mt-0.5">
                  <span className="text-[#FFD600]">★★★★★ 4.9</span> <span className="text-[#666]">(리뷰 1,247개)</span>
                </p>
                <div className="border-t border-[#f0f0f0] pt-3 mt-3 grid grid-cols-3 text-center">
                  <div>
                    <p className="font-extrabold text-[#111]" style={{ fontSize: 20 }}>4,100회</p>
                    <p className="text-[11px] text-[#888]">월 클릭</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-[#111]" style={{ fontSize: 20 }}>94건</p>
                    <p className="text-[11px] text-[#888]">전화문의</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-[#111]" style={{ fontSize: 20 }}>1,832회</p>
                    <p className="text-[11px] text-[#888]">길찾기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
