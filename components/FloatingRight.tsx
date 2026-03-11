"use client";

import { KakaoFloatingButton } from "./KakaoFloatingButton";

/** 우측 하단 플로팅: 카카오톡 상담 (모바일 CTA 바는 별도 MobileCtaBar) */
export function FloatingRight() {
  return (
    <div
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
      aria-label="카카오 상담"
    >
      <KakaoFloatingButton />
    </div>
  );
}
