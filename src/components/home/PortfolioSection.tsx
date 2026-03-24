"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { conceptItems } from "@/data/home";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const accentThemes = [
  {
    glow: "from-[rgba(18,120,213,0.18)] via-[rgba(83,85,239,0.12)] to-transparent",
    badge: "border-white/10 bg-[rgba(18,120,213,0.14)] text-sky-100",
    tag: "text-sky-300",
    line: "from-sky-400/70 to-transparent",
  },
  {
    glow: "from-[rgba(198,22,139,0.18)] via-[rgba(83,85,239,0.12)] to-transparent",
    badge: "border-white/10 bg-[rgba(198,22,139,0.14)] text-fuchsia-100",
    tag: "text-fuchsia-300",
    line: "from-fuchsia-400/70 to-transparent",
  },
  {
    glow: "from-[rgba(240,76,35,0.18)] via-[rgba(198,22,139,0.12)] to-transparent",
    badge: "border-white/10 bg-[rgba(240,76,35,0.14)] text-orange-100",
    tag: "text-orange-200",
    line: "from-orange-400/70 to-transparent",
  },
];

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Laptop showing analytics dashboard interface",
  },
  {
    src: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Person working on a laptop with website analytics",
  },
  {
    src: "https://images.unsplash.com/photo-1658297063569-162817482fb6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Shopify ecommerce interface displayed on laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Modern ecommerce product page shown on laptop screen",
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(18,120,213,0.08),transparent_24%),radial-gradient(circle_at_42%_12%,rgba(83,85,239,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(198,22,139,0.08),transparent_22%),radial-gradient(circle_at_18%_84%,rgba(240,76,35,0.07),transparent_22%)]" />
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(18,120,213,0.10),transparent_42%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(198,22,139,0.08),transparent_42%)] blur-3xl" />

      <SectionHeading
        badge="نماذج الأعمال"
        title="نماذج مختارة من أسلوبنا في التصميم"
        text="هذا القسم يعرض نماذج بصرية توضيحية تعكس مستوى الجودة، الترتيب البصري، وطريقة تقديم الواجهة في المواقع الحديثة والمتاجر وصفحات الهبوط."
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
              الصور هنا توضح اتجاهًا بصريًا احترافيًا قريبًا من نوع التجربة
              التي يمكن تنفيذها، مع الحفاظ على هوية حديثة وفاخرة متناسقة مع
              أسلوب الموقع.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.14),rgba(83,85,239,0.12),rgba(198,22,139,0.12))] px-4 py-2 text-xs text-white shadow-[0_12px_30px_rgba(83,85,239,0.12)]">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Visual Showcase
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {conceptItems.map((item, index) => {
          const theme = accentThemes[index % accentThemes.length];
          const image = portfolioImages[index % portfolioImages.length];

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_28px_90px_rgba(0,0,0,0.30)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
              />

              <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-[rgba(18,120,213,0.10)] blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[rgba(198,22,139,0.10)] blur-3xl" />

              <div className="relative p-5 md:p-6">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090d14] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,12,0.08),rgba(7,8,12,0.18),rgba(7,8,12,0.78))]" />

                    <div className="absolute left-4 top-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-xs backdrop-blur-xl ${theme.badge}`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="mb-3 h-px w-24 bg-gradient-to-r opacity-90 ${theme.line}" />
                      <div className="text-xs text-slate-300">
                        نموذج تصوري #{index + 1}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-white/10 p-6">
                <p className="text-sm leading-8 text-slate-300">
                  عرض بصري احترافي يوضح أسلوب توزيع العناصر، قوة الصورة
                  الرئيسية، وتسلسل المحتوى داخل واجهة حديثة موجهة لزيادة
                  الانطباع والثقة.
                </p>

                <div
                  className={`mt-5 inline-flex items-center gap-2 text-sm ${theme.tag}`}
                >
                  <span>اتجاه بصري احترافي</span>
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[30px] border border-dashed border-white/15 bg-white/[0.05] p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
        <p className="text-sm leading-8 text-slate-300">
          يمكن استبدال هذه الصور لاحقًا بصور أعمال موثقة أو لقطات حقيقية من
          مشاريع منشورة عند توفرها.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/quote">اطلب عرضًا مشابهًا</PrimaryButton>
          <SecondaryButton href="/services">استكشف خدماتنا</SecondaryButton>
        </div>
      </div>
    </motion.section>
  );
}