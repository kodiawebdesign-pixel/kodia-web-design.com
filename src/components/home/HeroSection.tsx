"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Palette,
  ShieldCheck,
  Sparkles,
  Store,
  MonitorSmartphone,
} from "lucide-react";
import { brand } from "@/data/brand";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import DevicePreview from "@/components/home/DevicePreview";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const servicePills = [
  {
    label: "مواقع شركات",
    icon: MonitorSmartphone,
    className:
      "border-sky-400/20 bg-sky-500/12 text-sky-100 shadow-[0_10px_30px_rgba(56,189,248,0.10)]",
  },
  {
    label: "متاجر إلكترونية",
    icon: Store,
    className:
      "border-fuchsia-400/20 bg-fuchsia-500/12 text-fuchsia-100 shadow-[0_10px_30px_rgba(236,72,153,0.10)]",
  },
  {
    label: "هوية بصرية رقمية",
    icon: Palette,
    className:
      "border-orange-300/20 bg-orange-400/12 text-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.10)]",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(35,168,255,0.18),transparent_24%),radial-gradient(circle_at_85%_16%,rgba(88,103,255,0.18),transparent_24%),radial-gradient(circle_at_75%_72%,rgba(239,61,155,0.14),transparent_22%),radial-gradient(circle_at_20%_82%,rgba(255,122,61,0.12),transparent_20%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.14]" />
      <div className="absolute left-[-8%] top-[18%] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[-6%] top-[8%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-[6%] left-[22%] h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="relative"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={90}
                height={28}
                className="h-5 w-auto object-contain"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-slate-100">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
              تصميم وتطوير مواقع عربية حديثة بطابع Premium
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {servicePills.map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs backdrop-blur-xl ${item.className}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </span>
              );
            })}
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.08]">
            ننقل أعمالك إلى الإنترنت
            <span className="mt-2 block bg-gradient-to-l from-sky-300 via-indigo-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent">
              بأسلوب احترافي يليق بعلامتك
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            في {brand.name} نساعد الشركات وأصحاب المشاريع على بناء حضور رقمي
            مرتب، جذاب، ومريح للعين من خلال مواقع حديثة، واجهات واضحة، وتجربة
            استخدام تمنح الزائر انطباعًا قويًا من أول لحظة.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="/quote">اطلب عرض سعر</PrimaryButton>
            <SecondaryButton href="/services">اكتشف خدماتنا</SecondaryButton>
          </div>

          <div className="mt-5 inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-300 shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
            <span>
              نركز على الوضوح والجودة والانطباع الاحترافي، بدون أرقام أو ادعاءات
              غير موثقة.
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {brand.trustSignals.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 ${
                    index % 3 === 0
                      ? "bg-sky-500/15"
                      : index % 3 === 1
                      ? "bg-fuchsia-500/15"
                      : "bg-orange-500/15"
                  }`}
                >
                  <CheckCircle2
                    className={`h-5 w-5 ${
                      index % 3 === 0
                        ? "text-sky-300"
                        : index % 3 === 1
                        ? "text-fuchsia-300"
                        : "text-orange-300"
                    }`}
                  />
                </div>
                <span className="text-sm text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="lg:pr-8"
        >
          <div className="relative rounded-[38px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_top_right,rgba(35,168,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(239,61,155,0.12),transparent_30%),radial-gradient(circle_at_60%_30%,rgba(255,122,61,0.10),transparent_24%)]" />

            <div className="absolute -right-5 top-8 hidden rounded-full border border-fuchsia-400/20 bg-fuchsia-500/12 px-4 py-2 text-xs text-fuchsia-100 shadow-[0_12px_35px_rgba(236,72,153,0.16)] md:inline-flex">
              Luxury Tech UI
            </div>

            <div className="absolute -left-5 bottom-10 hidden rounded-full border border-orange-300/20 bg-orange-400/12 px-4 py-2 text-xs text-orange-100 shadow-[0_12px_35px_rgba(249,115,22,0.16)] md:inline-flex">
              Arabic RTL Experience
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1018]/70 p-2">
              <DevicePreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}