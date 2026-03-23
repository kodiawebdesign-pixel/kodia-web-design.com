"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/201207005495"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 left-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 text-white shadow-[0_0_40px_rgba(20,155,255,0.28)] transition hover:-translate-y-1"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}