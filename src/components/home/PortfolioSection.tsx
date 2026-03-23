"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { conceptItems } from "@/data/home";
import ConceptArt from "@/components/home/ConceptArt";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const accentThemes = [
  {
    glow: "from-sky-500/16 via-indigo-500/12 to-transparent",
    badge: "border-sky-400/20 bg-sky-500/12 text-sky-100",
    tag: "text-sky-300",
  },
  {
    glow: "from-fuchsia-500/16 via-indigo-500/12 to-transparent",
    badge: "border-fuchsia-400/20 bg-fuchsia-500/12 text-fuchsia-100",
    tag: "text-fuchsia-300",
  },
  {
    glow: "from-orange-500/16 via-fuchsia-500/12 to-transparent",
    badge: "border-orange-300/20 bg-orange-400/12 text-orange-100",
    tag: "text-orange-200",
  },
];

export default function PortfolioSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(35,168,255,0.12),transparent_42%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(239,61,155,0.10),transparent_42%)] blur-3xl" />

      <SectionHeading
        badge="نماذج الأعمال"
        title="نماذج مختارة من أسلوبنا في التصميم"
        text="هذه النماذج التصورية توضح مستوى الجودة البصرية واتجاهات التصميم التي نقدمها للمواقع والمتاجر وصفحات الهبوط، وهي معروضة هنا كأمثلة على الأسلوب البصري وليست أعمال عملاء موثقة في الوقت الحالي."
        center
      />

      <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-100">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              توضيح مهم
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">
              هذا القسم يعرض نماذج تصميم تصورية لتوضيح المستوى البصري، تنظيم
              الواجهة، واتجاه التنفيذ المقترح لأنواع مختلفة من المشاريع.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/12 px-4 py-2 text-xs text-fuchsia-100">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Concept Showcase
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {conceptItems.map((item, index) => {
          const theme = accentThemes[index % accentThemes.length];

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0b1018]/92 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_28px_90px_rgba(0,0,0,0.30)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
              />

              <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative p-5 md:p-6">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="overflow-hidden rounded-[22px] border border-white/8 bg-[#090d14]">
                    <ConceptArt accent={item.accent} />
                  </div>
                </div>
              </div>

              <div className="relative border-t border-white/10 p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-xs ${theme.badge}`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500">
                    نموذج تصوري #{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-8 text-slate-300">
                  نموذج بصري توضيحي يعكس أسلوب التنفيذ، الترتيب البصري، والانطباع
                  الجمالي المقترح لهذا النوع من المشاريع ضمن نفس الاتجاه الفاخر
                  والحديث للموقع.
                </p>

                <div className={`mt-5 inline-flex items-center gap-2 text-sm ${theme.tag}`}>
                  <span>عرض تصوري احترافي</span>
                  <ArrowUpLeft className="h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[30px] border border-dashed border-white/15 bg-white/[0.05] p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
        <p className="text-sm leading-8 text-slate-300">
          سيتم تحديث هذا القسم تدريجيًا وإضافة أعمال موثقة عند توفر مشاريع منشورة
          ومصرح بعرضها.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/quote">اطلب عرضًا مشابهًا</PrimaryButton>
          <SecondaryButton href="/services">استكشف خدماتنا</SecondaryButton>
        </div>
      </div>
    </motion.section>
  );
}