"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/navigation";
import { brand } from "@/data/brand";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  const primarySocials = useMemo(() => brand.socialLinks.slice(0, 6), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isHome
            ? "border-b border-white/10 bg-[#050505]/55 backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#050505]/82 backdrop-blur-2xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_8px_28px_rgba(0,0,0,0.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_38%)]" />
              <Image
                src={brand.logo}
                alt={brand.name}
                width={20}
                height={20}
                className="relative z-10 h-5 w-5 object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-xs font-semibold text-white md:text-sm">
                {brand.name}
              </div>
              <div className="hidden text-[10px] text-slate-400 sm:block">
                {brand.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {navItems.slice(0, 5).map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm transition ${
                    active
                      ? "border border-white/15 bg-white/[0.08] text-white shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>

            <Link
              href="/quote"
              className="group inline-flex items-center justify-center rounded-full border border-sky-400/20 bg-gradient-to-l from-sky-500 via-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(56,189,248,0.20)]"
            >
              اطلب عرض سعر
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] lg:hidden"
            aria-label="فتح القائمة"
          >
            {open ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1018]/95 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_28%)]" />

          <div className="relative">
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-semibold text-white">{brand.name}</div>
              <div className="mt-1 text-xs leading-6 text-slate-400">
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
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                واتساب
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-l from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white"
              >
                اطلب عرض سعر
              </Link>
            </div>

            <div className="mt-5">
              <div className="mb-3 text-xs font-medium text-slate-400">
                الحسابات الرسمية
              </div>

              <div className="flex flex-wrap gap-2">
                {primarySocials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    {item.label}
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