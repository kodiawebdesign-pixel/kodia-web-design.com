"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { whyItems } from "@/data/home";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhySection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-12 -z-10 h-64 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_45%)] blur-3xl" />

      <SectionHeading
        badge="لماذا Kodia"
        title="بناء حضور رقمي منظم وواضح يليق بخدمتك"
        text="الموقع الناجح لا يعتمد فقط على الشكل الجميل، بل يحتاج إلى وضوح الرسالة وسهولة التصفح وبنية تساعد الزائر على اتخاذ خطوة فعلية نحو التواصل أو الشراء."
      />

      <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
              فلسفة العمل
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">
              نركز على بناء تجربة تعطي انطباعًا احترافيًا من أول زيارة، وتُظهر
              النشاط بشكل أكثر وضوحًا وتنظيمًا وثقة.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs text-sky-200">
            <Sparkles className="h-3.5 w-3.5" />
            Clarity + Trust + Premium Feel
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {whyItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-[30px] border border-white/10 bg-[#10161f]/90 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#131b26]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-gradient-to-l from-sky-500/15 via-indigo-500/15 to-fuchsia-500/10 p-3 text-sky-400 transition group-hover:from-sky-500/20 group-hover:via-indigo-500/20 group-hover:to-fuchsia-500/15">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-white md:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-8 text-slate-300">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}