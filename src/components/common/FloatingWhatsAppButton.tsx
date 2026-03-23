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
      className="group fixed bottom-4 left-4 z-[60] inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-[#25D366] px-4 py-3 text-white shadow-[0_18px_50px_rgba(37,211,102,0.32)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,211,102,0.42)] md:bottom-6 md:left-6"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>

      <span className="hidden text-sm font-semibold md:inline">
        واتساب مباشر
      </span>
    </a>
  );
}