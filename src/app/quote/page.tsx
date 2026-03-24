import type { Metadata } from "next";
import Script from "next/script";
import {
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import QuoteForm from "@/components/quote/QuoteForm";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "اطلب عرض سعر",
    description:
      "اطلب عرض سعر لتصميم موقع شركة أو متجر إلكتروني أو صفحة هبوط من Kodia Web Design، وأرسل تفاصيل مشروعك بسهولة عبر نموذج منظم ورسالة واتساب جاهزة.",
    path: "/quote",
  }),
  keywords: [
    "اطلب عرض سعر",
    "طلب عرض سعر تصميم موقع",
    "سعر تصميم متجر إلكتروني",
    "طلب تصميم صفحة هبوط",
    "تصميم مواقع في مصر",
    "عرض سعر موقع شركة",
    "Kodia Web Design",
    "Quote Web Design Egypt",
  ],
};

const steps = [
  "املأ النموذج بالتفاصيل الأساسية المتاحة لديك.",
  "عند الضغط على الإرسال سيتم فتح واتساب برسالة جاهزة.",
  "يمكنك مراجعة الرسالة قبل الإرسال الفعلي.",
  "كلما كانت التفاصيل أوضح، كان التقدير أدق.",
];

const quoteStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "طلب عرض سعر لتصميم موقع أو متجر إلكتروني",
  provider: {
    "@type": "Organization",
    name: brand.name,
    url: brand.url,
    logo: `${brand.url}${brand.logo}`,
    email: brand.email,
    telephone: brand.phoneE164,
  },
  areaServed: ["EG", "SA", "AE", "QA", "KW", "BH", "OM"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${brand.url}/quote`,
    servicePhone: brand.phoneE164,
  },
  description:
    "صفحة طلب عرض سعر لمشاريع تصميم المواقع والمتاجر الإلكترونية وصفحات الهبوط، مع نموذج منظم ورسالة واتساب جاهزة لتسهيل بدء التواصل.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[var(--kodia-bg)] text-white">
      <Script
        id="quote-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quoteStructuredData),
        }}
      />

      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(18,120,213,0.12),transparent_24%),radial-gradient(circle_at_40%_12%,rgba(83,85,239,0.10),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(198,22,139,0.10),transparent_22%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                  <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                  اطلب عرض سعر
                </span>

                <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                  اطلب عرض سعر
                  <span className="kodia-gradient-text mt-2 block">
                    لموقعك أو متجرك أو صفحة الهبوط
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  املأ النموذج التالي وشاركنا تفاصيل مشروعك، سواء كنت تحتاج موقع
                  شركة، متجرًا إلكترونيًا، أو صفحة هبوط. عند الضغط على زر
                  الإرسال سيتم فتح واتساب برسالة جاهزة تحتوي تفاصيل الطلب بشكل
                  منظم ليسهل بدء التواصل بسرعة.
                </p>

                <div className="mt-8 inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-300">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>
                    النموذج الحالي مخصص لتجهيز رسالة الطلب بشكل منظم، وليس
                    لإرسال البيانات تلقائيًا إلى قاعدة بيانات أو نظام خارجي.
                  </span>
                </div>
              </div>

              <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-10">
                <h2 className="text-2xl font-bold text-white">
                  كيف يعمل طلب العرض؟
                </h2>

                <div className="mt-6 space-y-4">
                  {steps.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <div className="kodia-brand-bg flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white">
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
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span>واتساب مباشر</span>
                  </a>

                  <a
                    href={`tel:${brand.phoneE164}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(18,120,213,0.15)] text-sky-300">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>{brand.phoneDisplay}</span>
                  </a>

                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(198,22,139,0.15)] text-fuchsia-300">
                      <Mail className="h-4 w-4" />
                    </span>
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