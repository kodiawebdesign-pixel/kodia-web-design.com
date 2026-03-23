"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Globe,
  LayoutGrid,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const brand = {
  phoneDisplay: "01207005495",
  phoneE164: "+201207005495",
  email: "kodia.web.design@gmail.com",
  whatsappLink: "https://wa.me/201207005495",
  serviceArea: "مصر وجميع الدول العربية (أونلاين)",
  logo: "/images/logo.png",
  trustSignals: [
    "تصميم مخصص حسب نشاطك",
    "متوافق مع جميع الأجهزة",
    "تجربة استخدام واضحة وسريعة",
    "دعم بعد التسليم",
  ],
};

const whyItems = [
  {
    title: "تصميم مخصص",
    text: "كل مشروع يتم التعامل معه بما يناسب نشاطه ورسالة العلامة التجارية الخاصة به.",
    icon: Palette,
  },
  {
    title: "تجربة استخدام مدروسة",
    text: "نرتب المحتوى ومسار الزائر بطريقة أوضح وأكثر احترافية لرفع الثقة والتفاعل.",
    icon: LayoutGrid,
  },
  {
    title: "أداء وسرعة",
    text: "نهتم بأن يكون الموقع سريعًا ومتوافقًا مع الجوال والشاشات المختلفة.",
    icon: Rocket,
  },
  {
    title: "تواصل مباشر",
    text: "خطوات واضحة ومراجعات منظمة وتواصل مستمر طوال مراحل التنفيذ.",
    icon: MessageCircle,
  },
];

const services = [
  {
    title: "تصميم مواقع الشركات",
    text: "مواقع تعريفية احترافية تعرض خدماتك بشكل منظم وواضح وتعطي انطباعًا قويًا.",
    icon: Globe,
  },
  {
    title: "تصميم المتاجر الإلكترونية",
    text: "واجهات حديثة وتجربة تصفح وشراء أفضل تساعد على عرض المنتجات باحترافية.",
    icon: MonitorSmartphone,
  },
  {
    title: "تصميم واجهات وتجربة المستخدم",
    text: "واجهات عصرية مرتبة بعناية لتحسين سهولة التفاعل والانطباع البصري العام.",
    icon: Sparkles,
  },
  {
    title: "صفحات الهبوط",
    text: "صفحات مخصصة للحملات والخدمات والعروض بهدف زيادة التفاعل ووضوح الرسالة.",
    icon: Smartphone,
  },
  {
    title: "تهيئة أساسية لمحركات البحث",
    text: "بنية أولية صحيحة للعناوين والوصف والترتيب العام تساعد على ظهور أفضل.",
    icon: ShieldCheck,
  },
  {
    title: "الدعم الفني والاستضافة",
    text: "مساندة فنية ومتابعة تشغيلية بعد الإطلاق للحفاظ على استقرار الموقع.",
    icon: Wrench,
  },
];

const concepts = [
  {
    title: "موقع شركة خدمات",
    type: "نموذج تصوري",
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    title: "متجر إلكتروني حديث",
    type: "نموذج تصوري",
    accent: "from-fuchsia-500/25 via-pink-500/20 to-orange-500/30",
  },
  {
    title: "صفحة هبوط لحملة إعلانية",
    type: "نموذج تصوري",
    accent: "from-cyan-500/25 via-sky-500/15 to-violet-500/30",
  },
  {
    title: "موقع طبي احترافي",
    type: "نموذج تصوري",
    accent: "from-emerald-500/20 via-teal-500/15 to-sky-500/25",
  },
];

const workflow = [
  "فهم النشاط",
  "تخطيط الهيكل",
  "تصميم الواجهة",
  "التطوير",
  "المراجعة والإطلاق",
  "الدعم بعد التسليم",
];

const pricing = [
  {
    name: "Starter",
    desc: "للمشاريع التي تحتاج موقعًا تعريفيًا أنيقًا وواضحًا.",
    featured: false,
    items: [
      "صفحات أساسية",
      "تصميم متوافق مع الجوال",
      "نموذج تواصل",
      "زر واتساب مباشر",
      "تهيئة أساسية",
    ],
  },
  {
    name: "Business",
    desc: "للشركات التي تحتاج صفحات أكثر وتنظيمًا أوسع للمحتوى.",
    featured: true,
    items: [
      "صفحات داخلية إضافية",
      "أقسام خدمات موسعة",
      "هيكل محتوى أوضح",
      "تحسينات تجربة الاستخدام",
      "دعم أوسع بعد التسليم",
    ],
  },
  {
    name: "Premium",
    desc: "للمشاريع التي تحتاج تجربة أكثر تطورًا أو متجرًا إلكترونيًا.",
    featured: false,
    items: [
      "تصميم أكثر تخصيصًا",
      "صفحات مخصصة حسب النشاط",
      "واجهات متقدمة",
      "تنظيم احترافي للمحتوى",
      "إعدادات أوسع حسب المشروع",
    ],
  },
];

const faqs = [
  {
    q: "كم يستغرق تنفيذ الموقع؟",
    a: "تختلف المدة حسب حجم المشروع وعدد الصفحات والمتطلبات، ويتم توضيح الجدول الزمني قبل بدء التنفيذ.",
  },
  {
    q: "هل الموقع متوافق مع الموبايل؟",
    a: "نعم، يتم تصميم وتنفيذ الموقع ليعمل بصورة ممتازة على الجوال والتابلت والديسكتوب.",
  },
  {
    q: "هل يمكن طلب تعديلات أثناء التنفيذ؟",
    a: "نعم، يتم تنظيم ذلك ضمن نطاق العمل وعدد المراجعات المتفق عليه قبل بدء المشروع.",
  },
  {
    q: "هل يمكن تنفيذ الموقع بالعربية أو الإنجليزية؟",
    a: "نعم، يمكن تنفيذ الموقع بالعربية أو الإنجليزية أو بشكل ثنائي اللغة حسب طبيعة المشروع.",
  },
  {
    q: "هل تقدمون دعمًا بعد إطلاق الموقع؟",
    a: "نعم، يوجد دعم بعد التسليم حسب نوع المشروع أو الباقة المختارة.",
  },
  {
    q: "هل يلزم وجود محتوى جاهز؟",
    a: "يفضل وجود محتوى أولي، ويمكن أيضًا المساعدة في تنظيمه وصياغته بشكل أوضح قبل التنفيذ.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

type SectionHeadingProps = {
  badge?: string;
  title: string;
  text?: string;
  center?: boolean;
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
};

function SectionHeading({
  badge,
  title,
  text,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
          {badge}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ children, href = "/contact" }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(20,155,255,0.18)] transition hover:-translate-y-0.5"
    >
      {children}
      <ArrowLeft className="h-4 w-4" />
    </Link>
  );
}

function SecondaryButton({ children, href = "/services" }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function DevicePreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-500/20 via-fuchsia-500/10 to-orange-500/20 blur-3xl" />
      <div className="relative rounded-[32px] border border-white/10 bg-[#0b1017] p-3 shadow-2xl">
        <div className="rounded-[24px] border border-white/10 bg-[#05070b] p-3">
          <div className="mb-3 flex items-center gap-2 px-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="h-8 w-24 rounded-full bg-gradient-to-l from-sky-500 to-indigo-500" />
              </div>

              <div className="grid gap-3">
                <div className="h-10 w-4/5 rounded-2xl bg-white/10" />
                <div className="h-4 w-full rounded-full bg-white/10" />
                <div className="h-4 w-2/3 rounded-full bg-white/10" />
                <div className="mt-2 h-44 rounded-[24px] bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-fuchsia-500/20" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="h-24 rounded-[18px] bg-gradient-to-br from-orange-500/30 to-fuchsia-500/20" />
                <div className="mt-3 h-4 w-3/4 rounded-full bg-white/10" />
                <div className="mt-2 h-4 w-1/2 rounded-full bg-white/10" />
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 rounded-[18px] bg-white/10" />
                  <div className="h-16 rounded-[18px] bg-white/10" />
                </div>
                <div className="mt-3 h-4 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-3 w-40 rounded-[24px] border border-white/10 bg-[#0f1620]/90 p-3 shadow-xl backdrop-blur">
        <div className="mb-2 flex items-center gap-2">
          <div className="rounded-full bg-emerald-500/15 p-1.5 text-emerald-400">
            <BadgeCheck className="h-4 w-4" />
          </div>
          <span className="text-xs text-white">واجهة واضحة</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function ConceptArt({ accent }: { accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1017] p-3">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative rounded-[20px] border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-20 rounded-full bg-white/10" />
          <div className="h-8 w-20 rounded-full bg-white/10" />
        </div>

        <div className="grid gap-3">
          <div className="h-32 rounded-[20px] bg-white/10" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-[16px] bg-white/10" />
            <div className="h-16 rounded-[16px] bg-white/10" />
          </div>
          <div className="h-4 w-3/4 rounded-full bg-white/10" />
          <div className="h-4 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,155,255,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(217,28,155,0.10),transparent_28%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.01))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.14]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 md:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionReveal}
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                حلول رقمية حديثة للشركات وأصحاب المشاريع
              </span>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl md:leading-[1.2]">
                نصمم مواقع وتجارب رقمية احترافية
                <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  تعكس قيمة نشاطك
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                في Kodia Web Design نساعد الشركات وأصحاب المشاريع على بناء حضور
                رقمي حديث من خلال مواقع سريعة، واجهات جذابة، وتجربة استخدام
                واضحة تدعم الثقة والانطباع الاحترافي.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryButton href="/quote">اطلب عرض سعر</PrimaryButton>
                <SecondaryButton href="/services">اكتشف خدماتنا</SecondaryButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {brand.trustSignals.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-sky-400" />
                    <span className="text-sm text-slate-200">{item}</span>
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
              <DevicePreview />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 md:grid-cols-4 md:px-6 lg:px-8">
            {[
              "تصميم مخصص",
              "متوافق مع الجوال",
              "تجربة استخدام واضحة",
              "دعم بعد التسليم",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                <BadgeCheck className="h-4 w-4 text-sky-400" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
        >
          <SectionHeading
            badge="لماذا Kodia"
            title="بناء حضور رقمي منظم وواضح يليق بخدمتك"
            text="الموقع الناجح لا يعتمد فقط على الشكل الجميل، بل يحتاج إلى وضوح الرسالة وسهولة التصفح وبنية تساعد الزائر على اتخاذ خطوة فعلية نحو التواصل أو الشراء."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-white/10 bg-[#10161f] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-l from-sky-500/20 to-indigo-500/20 p-3 text-sky-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="bg-[#0b0f14]"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28">
            <SectionHeading
              badge="خدماتنا"
              title="حلول رقمية متكاملة تساعدك على الظهور بشكل أقوى"
              text="نقدم مجموعة خدمات رقمية مركزة تساعدك على بناء حضور احترافي واضح، سواء كنت تحتاج موقع شركة أو متجرًا إلكترونيًا أو صفحة هبوط مخصصة."
              center
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="rounded-[28px] border border-white/10 bg-[#10161f] p-6 transition hover:-translate-y-1 hover:border-sky-400/30"
                  >
                    <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {service.text}
                    </p>
                    <Link
                      href="/quote"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-400"
                    >
                      اطلب الخدمة
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
        >
          <SectionHeading
            badge="نماذج الأعمال"
            title="نماذج مختارة من أسلوبنا في التصميم"
            text="هذه النماذج التصورية توضح مستوى الجودة البصرية واتجاهات التصميم التي نقدمها للمواقع والمتاجر وصفحات الهبوط."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {concepts.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1017] transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="p-5">
                  <ConceptArt accent={item.accent} />
                </div>

                <div className="border-t border-white/10 p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    {item.type}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    نموذج بصري توضيحي يعكس أسلوب التنفيذ والاتجاه الجمالي المقترح
                    لهذا النوع من المشاريع.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-400">
            سيتم تحديث هذا القسم تدريجيًا وإضافة أعمال موثقة مع نمو المشاريع
            المنفذة.
          </p>
        </motion.section>

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
              {workflow.map((step, index) => (
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

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
        >
          <SectionHeading
            badge="الباقات"
            title="اختر الباقة المناسبة لمرحلتك الحالية"
            text="اختر الباقة الأقرب لاحتياجك الحالي، أو تواصل معنا للحصول على عرض مخصص حسب نوع المشروع والمتطلبات."
            center
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[30px] border p-7 ${
                  plan.featured
                    ? "border-sky-400/35 bg-gradient-to-b from-sky-500/10 to-indigo-500/10 shadow-[0_0_40px_rgba(20,155,255,0.12)]"
                    : "border-white/10 bg-[#10161f]"
                }`}
              >
                {plan.featured ? (
                  <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                    الأكثر طلبًا
                  </div>
                ) : null}

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-300">
                  {plan.desc}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <PrimaryButton href="/quote">اطلب هذه الباقة</PrimaryButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-dashed border-white/15 bg-white/5 p-6 text-center text-sm leading-7 text-slate-300">
            لديك متطلبات مختلفة أو مشروع خاص؟ يمكن إعداد عرض مخصص يناسب طبيعة
            مشروعك بدقة.
          </div>
        </motion.section>

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
                  <p className="pt-4 text-sm leading-7 text-slate-300">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-28"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                  جاهز تبدأ؟
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
                  ابدأ الآن في بناء حضور رقمي
                  <span className="block">يليق بنشاطك</span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  إذا كنت تبحث عن موقع احترافي يعكس قيمة عملك بشكل أفضل، يسعدنا
                  مساعدتك في تنفيذ نسخة حديثة وواضحة تناسب أهدافك.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={brand.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
                  >
                    تواصل عبر واتساب
                    <ArrowLeft className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${brand.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white"
                  >
                    أرسل بريدًا مباشرًا
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#10161f] p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">
                  بيانات التواصل
                </h3>

                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">الهاتف</div>
                    <a
                      href={`tel:${brand.phoneE164}`}
                      className="mt-1 block font-medium text-white"
                    >
                      {brand.phoneDisplay}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">البريد الإلكتروني</div>
                    <a
                      href={`mailto:${brand.email}`}
                      className="mt-1 block break-all font-medium text-white"
                    >
                      {brand.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-400">نطاق الخدمة</div>
                    <div className="mt-1 font-medium text-white">
                      {brand.serviceArea}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  );
}