import type { Metadata } from "next";
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

export const metadata: Metadata = createPageMetadata({
  title: "تواصل معنا",
  description:
    "تواصل مع Kodia Web Design لمناقشة موقعك أو متجرك أو صفحة الهبوط الخاصة بك.",
  path: "/contact",
});

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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_left,rgba(99,102,241,0.10),transparent_28%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                تواصل معنا
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                دعنا نبدأ
                <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  الحديث عن مشروعك
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                يمكنك التواصل معنا مباشرة لمناقشة موقعك أو متجرك أو صفحة الهبوط
                الخاصة بك. سنساعدك في اختيار الاتجاه المناسب بصريًا ووظيفيًا
                حسب طبيعة نشاطك بدون تعقيد أو مبالغة.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/20 bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_60px_rgba(56,189,248,0.18)] transition hover:-translate-y-0.5"
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
            <div className="rounded-[32px] border border-white/10 bg-[#10161f]/85 p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                وسائل تواصل مباشرة وواضحة
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                بيانات التواصل
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactCards.map((item) => {
                  const Icon = item.icon;

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
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sky-400">
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sky-400">
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

              <div className="mt-8 rounded-[28px] border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-5">
                <div className="text-sm font-semibold text-white">
                  قبل التواصل
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  كلما كانت فكرتك أوضح، كان تقدير الوقت والنطاق والسعر أدق. حتى
                  لو كانت لديك فكرة أولية فقط، يمكننا مساعدتك في ترتيبها.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  متى تتواصل معنا؟
                </h2>

                <ul className="mt-6 space-y-4 text-sm leading-8 text-slate-300">
                  {quickReasons.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-[#10161f]/85 p-7 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
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