import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { pricingPlans } from "@/data/pricing";

export const metadata: Metadata = createPageMetadata({
  title: "الباقات",
  description:
    "استعرض باقات Kodia Web Design المناسبة للمواقع والمتاجر وصفحات الهبوط واحصل على عرض مخصص حسب احتياجك.",
  path: "/pricing",
});

const pricingNotes = [
  "الباقات تساعدك على اختيار نقطة بداية مناسبة.",
  "يمكن تعديل النطاق النهائي حسب تفاصيل المشروع.",
  "التسعير النهائي يتأثر بالمحتوى والمتطلبات الفنية وعدد الصفحات.",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_26%),radial-gradient(circle_at_left,rgba(99,102,241,0.08),transparent_28%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                الباقات
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                اختر الباقة المناسبة
                <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  لمرحلتك الحالية
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                اختر الباقة الأقرب لاحتياجك الحالي، أو تواصل معنا للحصول على
                عرض مخصص حسب نوع المشروع، النطاق المطلوب، والمتطلبات الفعلية.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#10161f]/85 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              توضيح مهم بخصوص الباقات
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pricingNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[32px] border p-7 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-sky-400/35 bg-gradient-to-b from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10"
                    : "border-white/10 bg-[#10161f]/85"
                }`}
              >
                {plan.featured ? (
                  <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                    الأكثر طلبًا
                  </div>
                ) : null}

                <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                <p className="mt-3 text-sm leading-8 text-slate-300">
                  {plan.desc}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-400" />
                      <span className="text-sm leading-7 text-slate-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <PrimaryButton href="/quote" className="w-full sm:w-auto">
                    اطلب هذه الباقة
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-dashed border-white/15 bg-white/[0.04] p-6 text-center text-sm leading-7 text-slate-300">
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