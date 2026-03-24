"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { services } from "@/data/services";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="relative overflow-hidden bg-[#0b0d14]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(18,120,213,0.10),transparent_24%),radial-gradient(circle_at_42%_12%,rgba(83,85,239,0.10),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(198,22,139,0.10),transparent_22%),radial-gradient(circle_at_18%_84%,rgba(240,76,35,0.08),transparent_22%)]" />
      <div className="absolute inset-x-0 top-16 h-64 bg-[radial-gradient(circle_at_center,rgba(18,120,213,0.10),transparent_42%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          badge="خدماتنا"
          title="حلول رقمية متكاملة تساعدك على الظهور بشكل أقوى"
          text="نقدم مجموعة خدمات رقمية مركزة تساعدك على بناء حضور احترافي واضح، سواء كنت تحتاج موقع شركة أو متجرًا إلكترونيًا أو صفحة هبوط مخصصة، مع تركيز على الانطباع القوي وسهولة الاستخدام."
          center
        />

        <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
                خدمات مرنة وقابلة للتخصيص
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">
                كل خدمة يمكن تكييفها حسب طبيعة نشاطك، هدف الموقع، ونوع التجربة
                التي تريد تقديمها للزائر.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.14),rgba(83,85,239,0.12),rgba(198,22,139,0.12))] px-4 py-2 text-xs text-white shadow-[0_12px_30px_rgba(83,85,239,0.12)]">
              <Sparkles className="h-3.5 w-3.5" />
              Premium Digital Solutions
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            const accentStyles =
              index % 3 === 0
                ? {
                    iconWrap:
                      "bg-[rgba(18,120,213,0.14)] text-sky-300 group-hover:bg-[rgba(18,120,213,0.20)]",
                    tag: "text-sky-300",
                    hoverBorder: "hover:border-sky-400/25",
                  }
                : index % 3 === 1
                ? {
                    iconWrap:
                      "bg-[rgba(198,22,139,0.14)] text-fuchsia-300 group-hover:bg-[rgba(198,22,139,0.20)]",
                    tag: "text-fuchsia-300",
                    hoverBorder: "hover:border-fuchsia-400/20",
                  }
                : {
                    iconWrap:
                      "bg-[rgba(240,76,35,0.14)] text-orange-300 group-hover:bg-[rgba(240,76,35,0.20)]",
                    tag: "text-orange-300",
                    hoverBorder: "hover:border-orange-400/20",
                  };

            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.06)] ${accentStyles.hoverBorder}`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_34%)]" />

                <div
                  className={`relative mb-5 inline-flex rounded-2xl border border-white/10 p-3 transition ${accentStyles.iconWrap}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative text-lg font-semibold text-white md:text-xl">
                  {service.title}
                </h3>

                <p className="relative mt-3 text-sm leading-8 text-slate-300">
                  {service.text}
                </p>

                <div
                  className={`relative mt-6 inline-flex items-center gap-2 text-sm font-medium ${accentStyles.tag}`}
                >
                  <span>حل قابل للتخصيص</span>
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[30px] border border-dashed border-white/15 bg-white/[0.04] p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
          <p className="text-sm leading-8 text-slate-300">
            لديك مشروع مختلف أو متطلبات خاصة؟ يمكن إعداد عرض مخصص يناسب طبيعة
            النشاط، حجم المحتوى، والهدف المطلوب من الموقع أو الصفحة.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/quote">اطلب عرض سعر</PrimaryButton>
            <SecondaryButton href="/services">اعرف المزيد</SecondaryButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}