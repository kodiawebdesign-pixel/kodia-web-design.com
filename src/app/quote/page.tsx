import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import QuoteForm from "@/components/quote/QuoteForm";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/data/brand";

export const metadata: Metadata = createPageMetadata({
  title: "اطلب عرض سعر",
  description:
    "أرسل تفاصيل مشروعك عبر نموذج احترافي وسيتم فتح واتساب برسالة جاهزة تحتوي كل بيانات الطلب.",
  path: "/quote",
});

const steps = [
  "املأ النموذج بالتفاصيل الأساسية المتاحة لديك.",
  "عند الضغط على الإرسال سيتم فتح واتساب برسالة جاهزة.",
  "يمكنك مراجعة الرسالة قبل الإرسال الفعلي.",
  "كلما كانت التفاصيل أوضح، كان التقدير أدق.",
];

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_26%),radial-gradient(circle_at_left,rgba(99,102,241,0.08),transparent_28%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                  <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                  اطلب عرض سعر
                </span>

                <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                  شاركنا تفاصيل مشروعك
                  <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                    لنقترح عليك الحل الأنسب
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  املأ النموذج التالي، وعند الضغط على زر الإرسال سيتم فتح واتساب
                  برسالة جاهزة تحتوي كل تفاصيل الطلب. لا يتم حفظ البيانات في قاعدة
                  بيانات حاليًا.
                </p>

                <div className="mt-8 inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-300">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span>
                    النموذج الحالي مخصص لتجهيز رسالة الطلب بشكل منظم، وليس لإرسال
                    البيانات تلقائيًا إلى نظام خارجي.
                  </span>
                </div>
              </div>

              <div className="rounded-[36px] border border-white/10 bg-[#10161f]/85 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-10">
                <h2 className="text-2xl font-bold text-white">كيف يعمل الطلب؟</h2>

                <div className="mt-6 space-y-4">
                  {steps.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                  >
                    <MessageCircle className="h-4 w-4 text-sky-400" />
                    <span>واتساب مباشر</span>
                  </a>

                  <a
                    href={`tel:${brand.phoneE164}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                  >
                    <Phone className="h-4 w-4 text-sky-400" />
                    <span>{brand.phoneDisplay}</span>
                  </a>

                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                  >
                    <Mail className="h-4 w-4 text-sky-400" />
                    <span className="break-all">{brand.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
          <QuoteForm />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}