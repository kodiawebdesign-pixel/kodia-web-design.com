import type { Metadata } from "next";
import Script from "next/script";
import {
  ArrowUpLeft,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "تواصل معنا",
    description:
      "تواصل مع Kodia Web Design لمناقشة تصميم موقع شركتك أو متجرك الإلكتروني أو صفحة الهبوط الخاصة بمشروعك واحصل على استشارة أولية واضحة.",
    path: "/contact",
  }),
  keywords: [
    "تواصل معنا",
    "رقم شركة تصميم مواقع",
    "واتساب تصميم مواقع",
    "تصميم مواقع في مصر",
    "طلب عرض سعر موقع",
    "Kodia Web Design",
    "Contact Web Design Egypt",
  ],
};

const contactCards = [
  {
    title: "الهاتف",
    value: brand.phoneDisplay,
    href: `tel:${brand.phoneE164}`,
    icon: Phone,
  },
  {
    title: "البريد الإلكتروني",
    value: brand.email,
    href: `mailto:${brand.email}`,
    icon: Mail,
  },
  {
    title: "واتساب",
    value: "ابدأ محادثة مباشرة الآن",
    href: brand.whatsappLink,
    icon: MessageCircle,
  },
  {
    title: "نطاق الخدمة",
    value: brand.serviceArea,
    href: undefined,
    icon: Globe,
  },
];

const quickReasons = [
  "إذا كنت تريد موقع شركة منظم وواضح",
  "إذا كنت تريد متجرًا إلكترونيًا بواجهة أكثر احترافية",
  "إذا كنت تريد صفحة هبوط قوية لحملة أو خدمة",
  "إذا كنت تريد إعادة تصميم حضورك الرقمي بشكل حديث",
  "إذا كنت تريد عرض سعر مخصص حسب احتياجك الفعلي",
];

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: `${brand.url}${brand.logo}`,
  email: brand.email,
  telephone: brand.phoneE164,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: brand.phoneE164,
      contactType: "customer support",
      areaServed: ["EG", "SA", "AE", "QA", "KW", "BH", "OM"],
      availableLanguage: ["ar", "en"],
    },
  ],
  sameAs: brand.socialLinks.map((item) => item.href),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--kodia-bg)] text-white">
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />

      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(18,120,213,0.12),transparent_24%),radial-gradient(circle_at_40%_12%,rgba(83,85,239,0.10),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(198,22,139,0.10),transparent_22%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                تواصل معنا
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                تواصل معنا
                <span className="kodia-gradient-text mt-2 block">
                  لبدء الحديث عن مشروعك
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                يمكنك التواصل معنا مباشرة لمناقشة تصميم موقع شركتك أو متجرك
                الإلكتروني أو صفحة الهبوط الخاصة بك. سنساعدك في اختيار الاتجاه
                المناسب بصريًا ووظيفيًا حسب طبيعة نشاطك وهدف مشروعك.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="kodia-brand-bg inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_60px_rgba(18,120,213,0.18)] transition hover:-translate-y-0.5"
                >
                  ابدأ عبر واتساب
                  <ArrowUpLeft className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                >
                  أرسل بريدًا مباشرًا
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck className="h-4 w-4 text-sky-300" />
                وسائل تواصل مباشرة وواضحة
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                بيانات التواصل
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  const accent =
                    index === 0
                      ? "bg-[rgba(18,120,213,0.15)] text-sky-300"
                      : index === 1
                      ? "bg-[rgba(198,22,139,0.15)] text-fuchsia-300"
                      : index === 2
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "bg-[rgba(240,76,35,0.15)] text-orange-300";

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm text-slate-400">
                        {item.title}
                      </div>
                      <div className="mt-2 break-words text-sm font-medium leading-7 text-white">
                        {item.value}
                      </div>
                    </a>
                  ) : (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 ${accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm text-slate-400">
                        {item.title}
                      </div>
                      <div className="mt-2 break-words text-sm font-medium leading-7 text-white">
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.12),rgba(83,85,239,0.10),rgba(198,22,139,0.10))] p-5">
                <div className="text-sm font-semibold text-white">
                  قبل التواصل
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  كلما كانت فكرتك أوضح، كان تقدير الوقت والنطاق والسعر أدق. حتى
                  لو كانت لديك فكرة أولية فقط، يمكننا مساعدتك في ترتيبها وتحويلها
                  إلى تصور أوضح.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  متى تتواصل معنا؟
                </h2>

                <ul className="mt-6 space-y-4 text-sm leading-8 text-slate-300">
                  {quickReasons.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span
                        className={`mt-2 h-2 w-2 rounded-full ${
                          index % 3 === 0
                            ? "bg-sky-300"
                            : index % 3 === 1
                            ? "bg-fuchsia-300"
                            : "bg-orange-300"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  الحسابات الرسمية
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  يمكنك متابعتنا أو مراسلتنا عبر المنصات التالية حسب القناة
                  الأنسب لك.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {brand.socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowUpLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}