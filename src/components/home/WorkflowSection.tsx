"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { workflowItems } from "@/data/home";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WorkflowSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-[#0b0f14]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          badge="خطوات العمل"
          title="منهجية واضحة من الفكرة حتى الإطلاق"
          text="نعتمد مسار عمل منظمًا يساعد على وضوح التنفيذ وتقليل العشوائية وتحسين النتيجة النهائية."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {workflowItems.map((step, index) => (
            <div
              key={step}
              className="relative rounded-[28px] border border-white/10 bg-[#10161f] p-5 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-sm font-semibold text-white md:text-base">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}