"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { faqs } from "@/data/faqs";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function FaqSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-[#0b0f14]"
    >
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          badge="الأسئلة الشائعة"
          title="إجابات سريعة على أكثر الأسئلة شيوعًا"
          text="هذه الإجابات تساعدك على فهم آلية العمل بشكل أوضح قبل بدء المشروع."
          center
        />

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[24px] border border-white/10 bg-[#10161f] p-5 text-right"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 transition group-open:text-white">
                    عرض
                  </span>
                </div>
              </summary>
              <p className="pt-4 text-sm leading-7 text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}