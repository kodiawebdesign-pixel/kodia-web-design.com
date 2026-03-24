"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/data/brand";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={brand.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="group fixed bottom-4 right-4 z-[60] inline-flex items-center gap-3 overflow-hidden rounded-full border border-emerald-300/25 bg-[linear-gradient(135deg,rgba(37,211,102,0.92),rgba(25,180,86,0.96))] px-4 py-3 text-white shadow-[0_18px_50px_rgba(37,211,102,0.28)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,211,102,0.36)] md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0)_42%,rgba(255,255,255,0.08))] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>

      <span className="relative z-10 hidden text-sm font-semibold md:inline">
        واتساب مباشر
      </span>
    </a>
  );
}