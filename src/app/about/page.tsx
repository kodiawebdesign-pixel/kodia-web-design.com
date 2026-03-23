import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/data/brand";

export const metadata: Metadata = createPageMetadata({
  title: "من نحن",
  description:
    "تعرف على Kodia Web Design ورؤيتنا في بناء مواقع وتجارب رقمية حديثة للشركات وأصحاب المشاريع.",
  path: "/about",
});

const highlights = [
  "تصميم مخصص حسب طبيعة النشاط والهدف",
  "اهتمام واضح بالتفاصيل والانطباع الأول",
  "تجربة استخدام مرتبة وسهلة وواضحة",
  "توافق مع مختلف الأجهزة وأحجام الشاشات",
  "تواصل منظم من البداية حتى التسليم",
  "لغة بصرية حديثة بدون مبالغة أو زحام",
];

const principles = [
  {
    title: "الوضوح قبل التعقيد",
    text: "نؤمن أن الموقع الجيد يجب أن يشرح النشاط بسرعة ويقود الزائر إلى الخطوة المناسبة بدون تشتيت.",
  },
  {
    title: "تصميم يعكس قيمة النشاط",
    text: "الهدف ليس شكلًا جميلًا فقط، بل حضور رقمي يعطي انطباعًا احترافيًا يرفع الثقة في الخدمة أو المنتج.",
  },
  {
    title: "مصداقية بدون ادعاءات",
    text: "نفضل الوضوح واللغة الصادقة على الأرقام غير الموثقة أو العبارات التسويقية المبالغ فيها.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_26%),radial-gradient(circle_at_left,rgba(99,102,241,0.08),transparent_28%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                من نحن
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                نبني حضورًا رقميًا
                <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  يليق بقيمة نشاطك
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {brand.name} جهة تصميم وتطوير رقمي تقدم مواقع وصفحات هبوط وتجارب
                رقمية حديثة للشركات وأصحاب المشاريع الذين يبحثون عن حضور مهني
                منظم وواضح يعكس قيمة نشاطهم بصورة أفضل.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryButton href="/quote">اطلب عرض سعر</PrimaryButton>
                <SecondaryButton href="/contact">تواصل معنا</SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/10 bg-[#10161f]/85 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                رؤيتنا
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                حضور رقمي أوضح وأكثر احترافية
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
                نركز على مساعدة المشاريع في الظهور بصورة حديثة ومنظمة من خلال
                حلول رقمية تجمع بين التصميم الواضح، الأداء الجيد، والاهتمام
                بالتفاصيل التي تؤثر على الانطباع والثقة وتجربة التصفح.
              </p>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-semibold text-white">
                  مبدأ أساسي
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  لا نعتمد على أرقام أو ادعاءات غير موثقة. نعتمد بدلًا من ذلك على
                  الوضوح، جودة العرض، والتنظيم الجيد للمحتوى والتجربة.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                ما الذي يميز أسلوبنا
              </h2>

              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-400" />
                    <span className="text-sm leading-7 text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[#10161f]/85 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[32px] border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.18)] md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              جاهز تبني موقعًا يعكس قيمة نشاطك؟
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              ابدأ معنا بخطوة واضحة، وسنساعدك في اختيار الاتجاه المناسب لموقعك
              أو مشروعك الرقمي بصورة مرتبة وحديثة.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/quote">اطلب عرض سعر</PrimaryButton>
              <SecondaryButton href="/contact">تواصل معنا</SecondaryButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}