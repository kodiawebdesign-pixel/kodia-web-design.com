"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Send,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/navigation";
import { brand } from "@/data/brand";

function getSocialTheme(label: string) {
  switch (label.toLowerCase()) {
    case "instagram":
      return "border-pink-400/20 bg-pink-500/12 text-pink-200 hover:bg-pink-500/18";
    case "threads":
      return "border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.10]";
    case "facebook":
      return "border-blue-400/20 bg-blue-500/12 text-blue-200 hover:bg-blue-500/18";
    case "linkedin":
      return "border-sky-400/20 bg-sky-500/12 text-sky-200 hover:bg-sky-500/18";
    case "telegram":
      return "border-cyan-400/20 bg-cyan-500/12 text-cyan-200 hover:bg-cyan-500/18";
    case "tiktok":
      return "border-fuchsia-400/20 bg-fuchsia-500/12 text-fuchsia-200 hover:bg-fuchsia-500/18";
    case "x":
      return "border-white/15 bg-white/[0.06] text-slate-100 hover:bg-white/[0.10]";
    case "snapchat":
      return "border-yellow-300/30 bg-yellow-400/12 text-yellow-100 hover:bg-yellow-400/18";
    case "youtube":
      return "border-red-400/20 bg-red-500/12 text-red-200 hover:bg-red-500/18";
    default:
      return "border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/[0.10]";
  }
}

function SocialIcon({
  label,
  className = "h-4 w-4",
}: {
  label: string;
  className?: string;
}) {
  switch (label.toLowerCase()) {
    case "instagram":
      return <Instagram className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "telegram":
      return <Send className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "x":
      return (
        <span className={`${className} flex items-center justify-center text-[12px] font-bold`}>
          X
        </span>
      );
    case "threads":
      return (
        <span className={`${className} flex items-center justify-center text-[12px] font-bold`}>
          @
        </span>
      );
    case "tiktok":
      return (
        <span className={`${className} flex items-center justify-center text-[12px] font-bold`}>
          ♪
        </span>
      );
    case "snapchat":
      return (
        <span className={`${className} flex items-center justify-center text-[12px] font-bold`}>
          S
        </span>
      );
    default:
      return <ArrowUpRight className={className} />;
  }
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const primarySocials = useMemo(() => brand.socialLinks.slice(0, 8), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isHome
            ? "border-b border-white/10 bg-[#050505]/60 backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#050505]/84 backdrop-blur-2xl"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_10%_40%,rgba(168,85,247,0.08),transparent_24%),radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.08),transparent_22%)]" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="relative flex items-center rounded-[20px] border border-white/10 bg-white/[0.05] px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.20)]">
              <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.10),transparent_35%)]" />
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={44}
                className="relative z-10 h-8 w-auto object-contain sm:h-9"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-white md:text-base">
                {brand.name}
              </div>
              <div className="text-xs text-slate-300/80">{brand.tagline}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.slice(0, 5).map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "border border-white/15 bg-white/[0.10] text-white shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
                      : "text-slate-200 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-500/15 text-emerald-100 shadow-[0_10px_30px_rgba(37,211,102,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full border border-fuchsia-300/15 bg-gradient-to-l from-sky-500 via-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(99,102,241,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(236,72,153,0.20)]"
            >
              اطلب عرض سعر
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
            aria-label="فتح القائمة"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-4 top-24 z-40 overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1018]/95 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.10),transparent_24%)]" />

          <div className="relative">
            <div className="mb-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={48}
                className="h-8 w-auto object-contain"
              />
              <div className="mt-2 text-xs leading-6 text-slate-300">
                {brand.tagline}
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      active
                        ? "border border-white/15 bg-white text-slate-900"
                        : "border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-500/20"
              >
                واتساب
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-l from-sky-500 via-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white"
              >
                اطلب عرض سعر
              </Link>
            </div>

            <div className="mt-5">
              <div className="mb-3 text-xs font-medium text-slate-300">
                الحسابات الرسمية
              </div>

              <div className="flex flex-wrap gap-2">
                {primarySocials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-300 ${getSocialTheme(
                      item.label
                    )}`}
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}