"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: "#0B0F1A" }}>
      {/* 미세 그리드 패턴 배경 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-[#FFD600] text-[#FFD600] text-sm font-medium mb-6 break-keep">
            📞 상담 후 평균 4주, 매출이 달라집니다
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-keep mb-4">
            성과로 증명하는
            <br />
            진짜 마케팅 실행사
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 break-keep">
            수수료 0%, 직접 실행, 10분 내 응답.
            <br />
            사장님 매장을 직접 책임집니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
            <Link
              href="#consulting-form"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg bg-[#FFD600] text-[#0B0F1A] hover:bg-[#FFE44D] transition-colors"
            >
              무료 진단 받기
            </Link>
            <Link
              href="#case-section"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              성과 사례 보기 →
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            ✅ 상담 무료 &nbsp; ✅ 계약 강요 없음 &nbsp; ✅ 10분이면 충분
          </p>
        </div>

        <div className="flex-1 w-full max-w-md shrink-0 relative">
          <p className="text-slate-500 text-xs mb-2 text-center lg:text-left">벨로컴퍼니 실행 후 4주차</p>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            <div className="h-8 flex items-center px-4 text-white text-sm font-bold" style={{ backgroundColor: "#03C75A" }}>
              NAVER 플레이스
            </div>
            <div className="relative h-36 sm:h-40 bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
              <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold text-black bg-[#FFD600]">
                🥇 지역 검색 1위
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-black font-bold text-lg">강남 ○○ 한의원</h3>
              <p className="text-gray-600 text-sm mt-0.5">★★★★★ 4.9 (리뷰 1,247개)</p>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center text-sm">
                <div>
                  <p className="text-gray-500 text-xs">월 클릭</p>
                  <p className="font-bold text-black">4,100회</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">전화</p>
                  <p className="font-bold text-black">94건</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">길찾기</p>
                  <p className="font-bold text-black">1,832회</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
