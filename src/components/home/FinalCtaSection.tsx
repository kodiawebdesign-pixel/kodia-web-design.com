"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";
import { brand } from "@/data/brand";

export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b1018]/85 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_center,rgba(217,70,239,0.08),transparent_36%)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
              جاهز تبدأ؟
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl md:leading-[1.15]">
              ابدأ الآن في بناء حضور رقمي
              <span className="block bg-gradient-to-l from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                يليق بنشاطك
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              إذا كنت تبحث عن موقع احترافي يعكس قيمة عملك بشكل أفضل، يسعدنا
              مساعدتك في تنفيذ تجربة حديثة ومنظمة وواضحة تناسب أهدافك وتدعم
              انطباعًا أقوى لدى عملائك.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-sky-400/20 bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_60px_rgba(56,189,248,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(56,189,248,0.22)]"
              >
                <span>تواصل عبر واتساب</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/15">
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </span>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span>أرسل بريدًا مباشرًا</span>
              </a>
            </div>

            <div className="mt-6 inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-300">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <span>
                نلتزم بلغة واضحة وعرض مناسب للاحتياج الفعلي، بدون مبالغة أو
                وعود غير واقعية.
              </span>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">بيانات التواصل</h3>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-slate-400">الهاتف</div>
                <a
                  href={`tel:${brand.phoneE164}`}
                  className="mt-1 block font-medium text-white"
                >
                  {brand.phoneDisplay}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-slate-400">البريد الإلكتروني</div>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-1 block break-all font-medium text-white"
                >
                  {brand.email}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-slate-400">نطاق الخدمة</div>
                <div className="mt-1 font-medium text-white">
                  {brand.serviceArea}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-4">
                <div className="text-slate-300">
                  مناسب للطلبات الجديدة والاستفسارات وعروض الأسعار المخصصة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}