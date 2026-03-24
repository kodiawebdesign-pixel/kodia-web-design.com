"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpLeft, ShieldCheck, Sparkles, Briefcase, ShoppingBag, Building2, Stethoscope, Scale, Shirt, Cpu, Paintbrush } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// --- 8 نماذج أعمال متنوعة (مقاولات، عيادات، محاماة، متاجر، تقنية، ديكور، شحن، تعليم) ---
const portfolioItems = [
  {
    id: 1,
    title: "شركة مقاولات وبنيان",
    type: "مقاولات",
    category: "مواقع شركات",
    description: "موقع يعرض مشاريع ضخمة بخدمات متكاملة ونموذج طلب معاينة، مع تصميم يعكس القوة والثقة.",
    tags: ["مقاولات", "مشاريع", "خدمات"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    alt: "Construction company website mockup",
  },
  {
    id: 2,
    title: "عيادة أسنان راقية",
    type: "خدمات طبية",
    category: "مواقع خدمية",
    description: "موقع عيادة أسنان مع نظام حجوزات أونلاين وصفحات خدمات تفصيلية، بتصميم مريح ونظيف.",
    tags: ["عيادة", "خدمات طبية", "حجوزات"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    alt: "Dental clinic website design",
  },
  {
    id: 3,
    title: "شركة محاماة واستشارات",
    type: "خدمات قانونية",
    category: "مواقع شركات",
    description: "موقع يبرز التخصصات القانونية، الفريق، والقضايا الناجحة، بتصميم فخم يضفي المصداقية.",
    tags: ["محاماة", "استشارات", "قضايا"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
    alt: "Law firm website design",
  },
  {
    id: 4,
    title: "متجر أزياء عصري",
    type: "متجر إلكتروني",
    category: "تجارة إلكترونية",
    description: "متجر ملابس عصرية مع فلترة متقدمة وتجربة شراء سلسة، مصمم لزيادة المبيعات.",
    tags: ["ملابس", "أزياء", "تسوق"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Fashion e-commerce store",
  },
  {
    id: 5,
    title: "شركة تقنية وحلول برمجية",
    type: "تقنية",
    category: "مواقع شركات",
    description: "موقع يعرض خدمات البرمجة، الدعم الفني، وحلول التحول الرقمي، بتصميم عصري يواكب التكنولوجيا.",
    tags: ["تقنية", "حلول برمجية", "دعم"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    alt: "IT company website",
  },
  {
    id: 6,
    title: "شركة ديكور وتصميم داخلي",
    type: "ديكور",
    category: "خدمات",
    description: "معرض صور للمشاريع والخدمات، مع تصميم جذاب يعكس الذوق الرفيع والإبداع.",
    tags: ["ديكور", "تصميم داخلي", "معارض"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    alt: "Interior design portfolio",
  },
  {
    id: 7,
    title: "شركة شحن ولوجستيات",
    type: "خدمات لوجستية",
    category: "مواقع شركات",
    description: "نظام تتبع الشحنات ونموذج عرض سعر، بتصميم احترافي يعزز الثقة والكفاءة.",
    tags: ["شحن", "لوجستيات", "تتبع"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    alt: "Logistics company website",
  },
  {
    id: 8,
    title: "منصة تعليم أونلاين",
    type: "تعليم",
    category: "منصات",
    description: "منصة دورات تعليمية مع نظام متابعة وتقييم، بواجهة بسيطة وسهلة للطلاب.",
    tags: ["تعليم", "دورات", "منصة"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80",
    alt: "Online learning platform",
  },
];

// أنماط الألوان المتنوعة لكل بطاقة
const accentThemes = [
  { glow: "from-[rgba(18,120,213,0.18)] via-[rgba(83,85,239,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(18,120,213,0.14)] text-sky-100", tag: "text-sky-300", line: "from-sky-400/70 to-transparent" },
  { glow: "from-[rgba(198,22,139,0.18)] via-[rgba(83,85,239,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(198,22,139,0.14)] text-fuchsia-100", tag: "text-fuchsia-300", line: "from-fuchsia-400/70 to-transparent" },
  { glow: "from-[rgba(240,76,35,0.18)] via-[rgba(198,22,139,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(240,76,35,0.14)] text-orange-100", tag: "text-orange-200", line: "from-orange-400/70 to-transparent" },
  { glow: "from-[rgba(34,197,94,0.18)] via-[rgba(83,85,239,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(34,197,94,0.14)] text-green-100", tag: "text-green-300", line: "from-green-400/70 to-transparent" },
  { glow: "from-[rgba(168,85,247,0.18)] via-[rgba(83,85,239,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(168,85,247,0.14)] text-purple-100", tag: "text-purple-300", line: "from-purple-400/70 to-transparent" },
  { glow: "from-[rgba(236,72,153,0.18)] via-[rgba(198,22,139,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(236,72,153,0.14)] text-pink-100", tag: "text-pink-300", line: "from-pink-400/70 to-transparent" },
  { glow: "from-[rgba(245,158,11,0.18)] via-[rgba(240,76,35,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(245,158,11,0.14)] text-amber-100", tag: "text-amber-300", line: "from-amber-400/70 to-transparent" },
  { glow: "from-[rgba(6,182,212,0.18)] via-[rgba(18,120,213,0.12)] to-transparent", badge: "border-white/10 bg-[rgba(6,182,212,0.14)] text-cyan-100", tag: "text-cyan-300", line: "from-cyan-400/70 to-transparent" },
];

export default function PortfolioSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionReveal}
      className="relative mx-auto w-full px-4 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(18,120,213,0.08),transparent_24%),radial-gradient(circle_at_42%_12%,rgba(83,85,239,0.08),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(198,22,139,0.08),transparent_22%),radial-gradient(circle_at_18%_84%,rgba(240,76,35,0.07),transparent_22%)]" />
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(18,120,213,0.10),transparent_42%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(198,22,139,0.08),transparent_42%)] blur-3xl" />

      <div className="container-custom mx-auto">
        <SectionHeading
          badge="معرض الأعمال"
          title="نماذج حقيقية تعكس أسلوبنا في التصميم والتنفيذ"
          text="نعرض هنا نماذج متنوعة من مشاريعنا التصورية التي توضح مستوى الجودة، الترتيب البصري، وطريقة تقديم الواجهات في مختلف المجالات."
          center
        />

        {/* توضيح مهم */}
        <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-100">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                نماذج توضيحية
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">
                هذه النماذج تعرض اتجاهًا بصريًا احترافيًا لأنواع مختلفة من المشاريع، مع الحفاظ على هوية حديثة وفاخرة متناسقة مع أسلوب الموقع.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.14),rgba(83,85,239,0.12),rgba(198,22,139,0.12))] px-4 py-2 text-xs text-white shadow-[0_12px_30px_rgba(83,85,239,0.12)]">
              <Sparkles className="h-3.5 w-3.5" />
              8+ نماذج متنوعة
            </div>
          </div>
        </div>

        {/* شبكة البطاقات - 8 نماذج بتصميم متجاوب */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {portfolioItems.map((item, index) => {
            const theme = accentThemes[index % accentThemes.length];

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_28px_90px_rgba(0,0,0,0.30)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
                />

                <div className="relative p-4 sm:p-5 md:p-6">
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#090d14] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,12,0.08),rgba(7,8,12,0.18),rgba(7,8,12,0.78))]" />

                      <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                        <span
                          className={`inline-flex rounded-full border px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs backdrop-blur-xl ${theme.badge}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                        <div
                          className={`mb-2 h-px w-16 bg-gradient-to-r sm:w-24 ${theme.line}`}
                        />
                        <div className="text-[10px] text-slate-300 sm:text-xs">
                          {item.category}
                        </div>
                        <h3 className="mt-1 text-base font-semibold text-white sm:mt-2 sm:text-xl md:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-t border-white/10 p-4 sm:p-6">
                  <p className="text-xs leading-6 text-slate-300 sm:text-sm sm:leading-8">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] text-slate-400 sm:text-xs bg-white/5 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`mt-3 inline-flex items-center gap-2 text-xs sm:mt-4 sm:text-sm ${theme.tag}`}
                  >
                    <span>عرض تفصيلي</span>
                    <ArrowUpLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* دعوة للتواصل */}
        <div className="mt-12 rounded-[30px] border border-dashed border-white/15 bg-white/[0.05] p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
          <p className="text-sm leading-8 text-slate-300">
            هذه النماذج توضح أسلوبنا في التصميم. يمكن تنفيذ مشروعك الخاص بنفس المستوى من الجودة والاحترافية.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="/quote">اطلب عرض مشروعك</PrimaryButton>
            <SecondaryButton href="/services">استكشف خدماتنا</SecondaryButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}