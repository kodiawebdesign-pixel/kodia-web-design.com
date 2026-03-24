import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpLeft, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createPageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "خدماتنا",
    description:
      "خدمات Kodia Web Design تشمل تصميم مواقع الشركات، المتاجر الإلكترونية، وصفحات الهبوط وتجربة المستخدم للشركات وأصحاب المشاريع في مصر والعالم العربي.",
    path: "/services",
  }),
  keywords: [
    "خدمات تصميم مواقع",
    "تصميم مواقع شركات",
    "تصميم متجر إلكتروني",
    "تصميم صفحات هبوط",
    "تصميم مواقع في مصر",
    "تطوير مواقع",
    "تجربة المستخدم",
    "UI UX",
    "Kodia Web Design",
  ],
};

const serviceNotes = [
  "كل خدمة يمكن تكييفها حسب طبيعة النشاط والهدف من الموقع.",
  "التنفيذ يركز على الشكل الاحترافي وسهولة الاستخدام معًا.",
  "يمكن الجمع بين أكثر من خدمة ضمن عرض مخصص واحد حسب الاحتياج.",
];

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "خدمات Kodia Web Design",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    description: service.text,
    provider: {
      "@type": "Organization",
      name: brand.name,
      url: brand.url,
    },
    areaServed: "EG",
  })),
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--kodia-bg)] text-white">
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
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
                خدماتنا
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl md:leading-[1.15]">
                خدمات تصميم مواقع
                <span className="kodia-gradient-text mt-2 block">
                  للشركات والمتاجر وصفحات الهبوط
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                نقدم خدمات رقمية تساعد الشركات وأصحاب المشاريع على بناء حضور
                حديث يجمع بين الشكل الاحترافي، وضوح الرسالة، وسهولة الاستخدام،
                سواء كنت تحتاج موقع شركة، متجرًا إلكترونيًا، أو صفحة هبوط
                مخصصة.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              خدمات قابلة للتخصيص حسب نوع المشروع
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {serviceNotes.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300"
                >
                  <div
                    className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs ${
                      index === 0
                        ? "bg-[rgba(18,120,213,0.14)] text-sky-100"
                        : index === 1
                        ? "bg-[rgba(198,22,139,0.14)] text-fuchsia-100"
                        : "bg-[rgba(240,76,35,0.14)] text-orange-100"
                    }`}
                  >
                    ملاحظة
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  className={`group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${accentStyles.hoverBorder}`}
                >
                  <div
                    className={`mb-5 inline-flex rounded-2xl border border-white/10 p-3 transition ${accentStyles.iconWrap}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-xl font-semibold text-white">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-slate-300">
                    {service.text}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm ${accentStyles.tag}`}
                  >
                    <span>خدمة قابلة للتخصيص</span>
                    <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,120,213,0.12),rgba(83,85,239,0.10),rgba(198,22,139,0.10),rgba(240,76,35,0.08))] p-8 shadow-[0_16px_60px_rgba(0,0,0,0.18)] md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              لديك مشروع مختلف أو متطلبات خاصة؟
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              يمكن إعداد عرض مخصص يناسب طبيعة النشاط والهدف من الموقع أو المتجر
              الإلكتروني أو صفحة الهبوط المطلوبة، مع تحديد الاتجاه الأنسب
              للمحتوى والتجربة.
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