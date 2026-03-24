"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { pricingPlans } from "@/data/pricing";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function PricingSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(18,120,213,0.08),transparent_24%),radial-gradient(circle_at_40%_12%,rgba(83,85,239,0.08),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(198,22,139,0.08),transparent_22%),radial-gradient(circle_at_18%_84%,rgba(240,76,35,0.07),transparent_22%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 h-64 bg-[radial-gradient(circle_at_center,rgba(83,85,239,0.10),transparent_45%)] blur-3xl" />

      <SectionHeading
        badge="الباقات"
        title="اختر الباقة المناسبة لمرحلتك الحالية"
        text="اختر الباقة الأقرب لاحتياجك الحالي، أو تواصل معنا للحصول على عرض مخصص حسب نوع المشروع، النطاق المطلوب، والمتطلبات الفعلية."
        center
      />

      <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              توضيح بخصوص الباقات
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">
              الباقات هنا تمثل نقطة بداية واضحة ومنظمة، بينما يظل النطاق النهائي
              قابلًا للتخصيص وفق عدد الصفحات، نوع المحتوى، والمتطلبات الخاصة بكل
              مشروع.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.14),rgba(83,85,239,0.12),rgba(198,22,139,0.12))] px-4 py-2 text-xs text-white shadow-[0_12px_30px_rgba(83,85,239,0.12)]">
            <Sparkles className="h-3.5 w-3.5" />
            Flexible Project Scope
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
              className={`group relative overflow-hidden rounded-[32px] border p-7 shadow-[0_18px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-white/10 bg-[linear-gradient(180deg,rgba(18,120,213,0.14),rgba(83,85,239,0.10),rgba(198,22,139,0.10),rgba(255,255,255,0.03))] hover:shadow-[0_24px_80px_rgba(83,85,239,0.16)]"
                  : `border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] hover:bg-white/[0.06] ${accent.hover}`
              }`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_34%)]" />

              <div className="relative flex min-h-[52px] items-start justify-between gap-3">
                <div>
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

                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
              </div>

              <p className="relative mt-3 min-h-[64px] text-sm leading-8 text-slate-300">
                {plan.desc}
              </p>

              <div className="my-6 h-px bg-white/10" />

              <ul className="space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-200"
                  >
                    <CheckCircle2
                      className={`mt-1 h-4 w-4 shrink-0 ${accent.bullet}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <PrimaryButton href="/quote" className="w-full">
                  اطلب هذه الباقة
                </PrimaryButton>

                {!plan.featured ? (
                  <SecondaryButton href="/pricing" className="w-full">
                    اعرف التفاصيل
                  </SecondaryButton>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[30px] border border-dashed border-white/15 bg-white/[0.04] p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
        <p className="text-sm leading-8 text-slate-300">
          لديك متطلبات مختلفة أو مشروع خاص؟ يمكن إعداد عرض مخصص يناسب طبيعة
          مشروعك بدقة وبنطاق أوضح.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/quote">اطلب عرضًا مخصصًا</PrimaryButton>
          <SecondaryButton href="/contact">تواصل معنا</SecondaryButton>
        </div>
      </div>
    </motion.section>
  );
}