import type { Metadata } from "next";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "من نحن",
    description:
      "تعرف على Kodia Web Design، جهة تصميم مواقع في مصر تقدم مواقع شركات ومتاجر إلكترونية وصفحات هبوط بهوية حديثة وتجربة استخدام واضحة.",
    path: "/about",
  }),
  keywords: [
    "من نحن",
    "Kodia Web Design",
    "شركة تصميم مواقع",
    "تصميم مواقع في مصر",
    "تصميم متاجر إلكترونية",
    "تصميم صفحات هبوط",
    "تطوير مواقع للشركات",
    "Web Design Egypt",
  ],
};

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
    text: "نؤمن أن الموقع الجيد يجب أن يشرح النشاط بسرعة ويقود الزائر إلى الخطوة المناسبة بدون تشتيت أو تفاصيل تربك تجربة الاستخدام.",
  },
  {
    title: "تصميم يعكس قيمة النشاط",
    text: "الهدف ليس شكلًا جميلًا فقط، بل حضور رقمي يعطي انطباعًا احترافيًا ويرفع الثقة في الخدمة أو المنتج أو النشاط التجاري.",
  },
  {
    title: "مصداقية بدون ادعاءات",
    text: "نفضل الوضوح واللغة الصادقة على الأرقام غير الموثقة أو العبارات التسويقية المبالغ فيها، لأن الثقة تبنى بالمحتوى الجيد والتنظيم القوي.",
  },
];

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: `${brand.url}${brand.logo}`,
  email: brand.email,
  telephone: brand.phoneE164,
  description:
    "Kodia Web Design جهة تصميم مواقع ومتاجر إلكترونية وصفحات هبوط تقدم حلولًا رقمية حديثة للشركات وأصحاب المشاريع في مصر والعالم العربي.",
  areaServed: ["Egypt", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman"],
  sameAs: brand.socialLinks.map((item) => item.href),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--kodia-bg)] text-white">
      <Script
        id="about-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />

      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(18,120,213,0.12),transparent_24%),radial-gradient(circle_at_40%_12%,rgba(83,85,239,0.10),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(198,22,139,0.10),transparent_22%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.015))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                من نحن
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                نصمم مواقع حديثة
                <span className="kodia-gradient-text mt-2 block">
                  تعكس قيمة نشاطك بوضوح
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {brand.name} جهة تصميم وتطوير رقمي تقدم مواقع شركات، متاجر
                إلكترونية، وصفحات هبوط حديثة للشركات وأصحاب المشاريع الذين
                يبحثون عن حضور رقمي منظم وواضح يعكس قيمة نشاطهم بشكل احترافي
                ومقنع.
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
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
                رؤيتنا
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
                حضور رقمي أوضح وأكثر احترافية
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
                نركز على مساعدة المشاريع في الظهور بصورة حديثة ومنظمة من خلال
                تصميم مواقع يجمع بين وضوح المحتوى، قوة الانطباع الأول، وسهولة
                التصفح، مع اهتمام حقيقي بالتفاصيل التي تؤثر على الثقة وجودة
                التجربة.
              </p>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-semibold text-white">
                  كيف نفكر في كل مشروع؟
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  نبدأ من فهم النشاط والجمهور والهدف المطلوب من الموقع، ثم نبني
                  هيكلًا واضحًا ورسالة مرتبة وتصميمًا حديثًا يحقق حضورًا أفضل
                  للنشاط على الإنترنت.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                ما الذي يميز أسلوبنا
              </h2>

              <div className="mt-6 space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <CheckCircle2
                      className={`mt-1 h-5 w-5 shrink-0 ${
                        index % 3 === 0
                          ? "text-sky-300"
                          : index % 3 === 1
                          ? "text-fuchsia-300"
                          : "text-orange-300"
                      }`}
                    />
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
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div
                  className={`mb-4 inline-flex rounded-full px-3 py-1.5 text-xs ${
                    index === 0
                      ? "bg-[rgba(18,120,213,0.14)] text-sky-100"
                      : index === 1
                      ? "bg-[rgba(198,22,139,0.14)] text-fuchsia-100"
                      : "bg-[rgba(240,76,35,0.14)] text-orange-100"
                  }`}
                >
                  مبدأ أساسي
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.12),rgba(83,85,239,0.10),rgba(198,22,139,0.10),rgba(240,76,35,0.08))] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.18)] md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              جاهز تبني موقعًا يعكس قيمة نشاطك؟
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              ابدأ معنا بخطوة واضحة، وسنساعدك في اختيار الاتجاه المناسب لتصميم
              موقع شركتك أو متجرك الإلكتروني أو صفحة الهبوط الخاصة بمشروعك.
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