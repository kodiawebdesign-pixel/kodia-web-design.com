import type { Metadata } from "next";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { pricingPlans } from "@/data/pricing";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "الباقات",
    description:
      "استعرض باقات Kodia Web Design لتصميم مواقع الشركات والمتاجر الإلكترونية وصفحات الهبوط، واطلب عرض سعر مخصص حسب احتياج مشروعك.",
    path: "/pricing",
  }),
  keywords: [
    "أسعار تصميم المواقع",
    "باقات تصميم مواقع",
    "سعر تصميم موقع شركة",
    "سعر تصميم متجر إلكتروني",
    "سعر تصميم صفحة هبوط",
    "تصميم مواقع في مصر",
    "Kodia Web Design",
    "Web Design Pricing Egypt",
  ],
};

const pricingNotes = [
  "الباقات تساعدك على اختيار نقطة بداية مناسبة.",
  "يمكن تعديل النطاق النهائي حسب تفاصيل المشروع.",
  "التسعير النهائي يتأثر بالمحتوى والمتطلبات الفنية وعدد الصفحات.",
];

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "باقات Kodia Web Design",
  url: `${brand.url}/pricing`,
  itemListElement: pricingPlans.map((plan, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: plan.name,
    description: plan.desc,
    seller: {
      "@type": "Organization",
      name: brand.name,
      url: brand.url,
    },
  })),
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--kodia-bg)] text-white">
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
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
                الباقات
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                باقات تصميم مواقع
                <span className="kodia-gradient-text mt-2 block">
                  مناسبة لمرحلتك الحالية
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                اختر الباقة الأقرب لاحتياجك الحالي، سواء كنت تحتاج موقع شركة،
                متجرًا إلكترونيًا، أو صفحة هبوط، أو تواصل معنا للحصول على عرض
                سعر مخصص حسب نوع المشروع والنطاق المطلوب.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              توضيح مهم بخصوص الباقات
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pricingNotes.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300"
                >
                  <div
                    className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs ${
                      index === 0
                        ? "bg-[rgba(18,120,213,0.14)] text-sky-100"
                        : index === 1
                        ? "bg-[rgba(198,22,139,0.14)] text-fuchsia-100"
                        : "bg-[rgba(240,76,35,0.14)] text-orange-100"
                    }`}
                  >
                    ملاحظة
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const accent =
                plan.featured || index % 3 === 0
                  ? {
                      bullet: "text-sky-300",
                      soft: "bg-[rgba(18,120,213,0.14)] text-sky-100",
                      hover: "hover:border-sky-400/25",
                    }
                  : index % 3 === 1
                  ? {
                      bullet: "text-fuchsia-300",
                      soft: "bg-[rgba(198,22,139,0.14)] text-fuchsia-100",
                      hover: "hover:border-fuchsia-400/20",
                    }
                  : {
                      bullet: "text-orange-300",
                      soft: "bg-[rgba(240,76,35,0.14)] text-orange-100",
                      hover: "hover:border-orange-400/20",
                    };

              return (
                <div
                  key={plan.name}
                  className={`group rounded-[32px] border p-7 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-white/10 bg-[linear-gradient(180deg,rgba(18,120,213,0.14),rgba(83,85,239,0.10),rgba(198,22,139,0.10),rgba(255,255,255,0.03))] hover:shadow-[0_24px_80px_rgba(83,85,239,0.16)]"
                      : `border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] hover:bg-white/[0.05] ${accent.hover}`
                  }`}
                >
                  {plan.featured ? (
                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                      الأكثر طلبًا
                    </div>
                  ) : (
                    <div
                      className={`mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs ${accent.soft}`}
                    >
                      باقة مرنة
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                  <p className="mt-3 text-sm leading-8 text-slate-300">
                    {plan.desc}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="space-y-3">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-1 h-4 w-4 shrink-0 ${accent.bullet}`}
                        />
                        <span className="text-sm leading-7 text-slate-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3">
                    <PrimaryButton href="/quote" className="w-full">
                      اطلب هذه الباقة
                    </PrimaryButton>

                    {!plan.featured ? (
                      <SecondaryButton href="/contact" className="w-full">
                        استفسر عن التفاصيل
                      </SecondaryButton>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-[28px] border border-dashed border-white/15 bg-white/[0.04] p-6 text-center text-sm leading-7 text-slate-300 backdrop-blur-xl">
            الأسعار النهائية تختلف حسب عدد الصفحات، نوع المحتوى، المتطلبات
            الفنية، وطبيعة المشروع. للحصول على تقدير أدق، أرسل تفاصيل مشروعك عبر
            صفحة طلب عرض السعر.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/quote">اطلب عرض سعر مخصص</PrimaryButton>
            <SecondaryButton href="/contact">تواصل معنا</SecondaryButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}