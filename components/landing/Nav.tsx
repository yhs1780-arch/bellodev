"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BelloLogo } from "../BelloLogo";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#case-section", label: "성과사례" },
  { href: "#platform-section", label: "서비스" },
  { href: "#timeline-section", label: "실행방식" },
  { href: "#consulting-form", label: "무료전략" },
  { href: "#company-intro", label: "회사소개" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B0F1A] border-b border-white/[0.15]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <BelloLogo className="shrink-0" />

            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors break-keep"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block shrink-0">
              <Link
                href="#consulting-form"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#FFD600] text-[#0B0F1A] hover:bg-[#FFE44D] transition-colors break-keep"
              >
                무료 전략 받기
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-slate-300 hover:text-white"
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0F1A] flex flex-col items-center justify-center gap-8 p-6"
          role="dialog"
          aria-label="메뉴"
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            aria-label="메뉴 닫기"
          >
            <X className="w-6 h-6" />
          </button>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-white hover:text-[#FFD600] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#consulting-form"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold bg-[#FFD600] text-[#0B0F1A]"
          >
            무료 전략 받기
          </Link>
        </div>
      )}
    </>
  );
}
