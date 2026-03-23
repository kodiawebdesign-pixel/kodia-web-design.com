import type { Metadata } from "next";
import { ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata: Metadata = createPageMetadata({
  title: "خدماتنا",
  description:
    "تعرف على خدمات Kodia Web Design في تصميم مواقع الشركات والمتاجر وصفحات الهبوط وتجربة المستخدم.",
  path: "/services",
});

const serviceNotes = [
  "كل خدمة يمكن تكييفها حسب طبيعة النشاط والهدف من الموقع.",
  "التنفيذ يركز على الشكل الاحترافي وسهولة الاستخدام معًا.",
  "يمكن الجمع بين أكثر من خدمة ضمن عرض مخصص واحد حسب الاحتياج.",
];

export default function ServicesPage() {
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
                خدماتنا
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                خدمات رقمية مصممة
                <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                  لتقديم نشاطك بصورة أقوى
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                نقدم خدمات رقمية تساعد الشركات وأصحاب المشاريع على بناء حضور
                حديث يجمع بين الشكل الاحترافي، وضوح الرسالة، وسهولة الاستخدام
                مع الحفاظ على هوية بصرية مرتبة ومقنعة.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#10161f]/85 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              خدمات قابلة للتخصيص حسب نوع المشروع
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {serviceNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-[30px] border border-white/10 bg-[#10161f]/85 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-[#131b26]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-sky-400 transition group-hover:bg-white/[0.08]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-slate-300">
                    {service.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-sky-300">
                    <span>خدمة قابلة للتخصيص</span>
                    <ArrowUpLeft className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.18)] md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              لديك مشروع مختلف أو متطلبات خاصة؟
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              يمكن إعداد عرض مخصص يناسب طبيعة النشاط والهدف من الموقع أو المتجر
              أو الصفحة المطلوبة، مع تحديد أفضل اتجاه مناسب للمحتوى والتجربة.
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