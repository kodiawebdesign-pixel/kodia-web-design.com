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
  Pause,
  Send,
  Volume2,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { brand } from "@/data/brand";

function getSocialTheme(label: string) {
  switch (label.toLowerCase()) {
    case "instagram":
      return "border-white/10 bg-white/[0.06] text-pink-200 hover:bg-white/[0.10]";
    case "threads":
      return "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.10]";
    case "facebook":
      return "border-white/10 bg-white/[0.06] text-sky-200 hover:bg-white/[0.10]";
    case "linkedin":
      return "border-white/10 bg-white/[0.06] text-cyan-200 hover:bg-white/[0.10]";
    case "telegram":
      return "border-white/10 bg-white/[0.06] text-sky-100 hover:bg-white/[0.10]";
    case "tiktok":
      return "border-white/10 bg-white/[0.06] text-fuchsia-200 hover:bg-white/[0.10]";
    case "x":
      return "border-white/10 bg-white/[0.06] text-slate-100 hover:bg-white/[0.10]";
    case "snapchat":
      return "border-white/10 bg-white/[0.06] text-orange-100 hover:bg-white/[0.10]";
    case "youtube":
      return "border-white/10 bg-white/[0.06] text-orange-200 hover:bg-white/[0.10]";
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
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          X
        </span>
      );
    case "threads":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          @
        </span>
      );
    case "tiktok":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          ♪
        </span>
      );
    case "snapchat":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.16;

    const syncState = () => {
      setIsMusicPlaying(!audio.paused);
    };

    const startOnFirstInteraction = async () => {
      try {
        await audio.play();
        setIsMusicPlaying(true);
      } catch {
        setIsMusicPlaying(false);
      }
    };

    audio.addEventListener("play", syncState);
    audio.addEventListener("pause", syncState);

    window.addEventListener("pointerdown", startOnFirstInteraction, {
      once: true,
    });
    window.addEventListener("keydown", startOnFirstInteraction, {
      once: true,
    });

    return () => {
      audio.removeEventListener("play", syncState);
      audio.removeEventListener("pause", syncState);
      window.removeEventListener("pointerdown", startOnFirstInteraction);
      window.removeEventListener("keydown", startOnFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsMusicPlaying(true);
      } catch {
        setIsMusicPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsMusicPlaying(false);
  };

  const isHome = pathname === "/";
  const primarySocials = useMemo(() => brand.socialLinks.slice(0, 8), []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/kodia-ambient-loop.mp3"
        loop
        preload="auto"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isHome
            ? "border-b border-white/10 bg-[#07070b]/58 backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#07070b]/84 backdrop-blur-2xl"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(18,120,213,0.12),transparent_24%),radial-gradient(circle_at_48%_16%,rgba(83,85,239,0.10),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(198,22,139,0.10),transparent_22%),radial-gradient(circle_at_88%_80%,rgba(240,76,35,0.08),transparent_20%)]" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="relative flex items-center rounded-[22px] border border-white/10 bg-white/[0.05] px-3 py-2 shadow-[0_16px_36px_rgba(0,0,0,0.24)]">
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_18%_20%,rgba(18,120,213,0.14),transparent_28%),radial-gradient(circle_at_52%_18%,rgba(83,85,239,0.12),transparent_28%),radial-gradient(circle_at_76%_36%,rgba(198,22,139,0.10),transparent_24%),radial-gradient(circle_at_24%_88%,rgba(240,76,35,0.08),transparent_22%)]" />
              <Image
                src={brand.logo}
                alt={brand.name}
                width={148}
                height={46}
                className="relative z-10 h-7 w-auto object-contain sm:h-8"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-white md:text-base">
                {brand.name}
              </div>
              <div className="text-xs text-slate-300/85">{brand.tagline}</div>
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
                      ? "border border-white/15 bg-white/[0.10] text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-500/15 text-emerald-100 shadow-[0_10px_30px_rgba(37,211,102,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/22"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Link
              href="/quote"
              className="kodia-brand-bg inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(83,85,239,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(198,22,139,0.22)]"
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

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0f111b]/85 px-4 py-3 text-sm text-white shadow-[0_18px_50px_rgba(0,0,0,0.30)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141827]/90 md:bottom-8 md:left-6"
        aria-label={isMusicPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
            isMusicPlaying
              ? "bg-[linear-gradient(135deg,#1278D5_0%,#5355EF_45%,#C6168B_100%)]"
              : "bg-white/[0.08]"
          }`}
        >
          {isMusicPlaying ? (
            <Pause className="h-4.5 w-4.5" />
          ) : (
            <Volume2 className="h-4.5 w-4.5" />
          )}
        </span>

        <span className="hidden sm:inline">
          {isMusicPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        </span>
      </button>

      {open ? (
        <div className="fixed inset-x-4 top-24 z-40 overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0e18]/95 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(18,120,213,0.14),transparent_26%),radial-gradient(circle_at_48%_16%,rgba(83,85,239,0.12),transparent_24%),radial-gradient(circle_at_74%_24%,rgba(198,22,139,0.10),transparent_22%),radial-gradient(circle_at_22%_82%,rgba(240,76,35,0.10),transparent_20%)]" />

          <div className="relative">
            <div className="mb-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={50}
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
                className="kodia-brand-bg inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
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

            <button
              onClick={toggleMusic}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white"
            >
              {isMusicPlaying ? (
                <>
                  <Pause className="h-4 w-4" />
                  إيقاف الموسيقى
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" />
                  تشغيل الموسيقى
                </>
              )}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}