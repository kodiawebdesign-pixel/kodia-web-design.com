import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Mail, MessageCircle, Phone } from "lucide-react";
import { brand } from "@/data/brand";
import { navItems } from "@/data/navigation";
import { services } from "@/data/services";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%),radial-gradient(circle_at_center,rgba(217,70,239,0.05),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-white md:text-sm">
                  {brand.name}
                </div>
                <div className="text-xs text-slate-400">{brand.tagline}</div>
              </div>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 md:text-[15px]">
              نصمم مواقع وصفحات هبوط وتجارب رقمية حديثة تساعدك على الظهور بشكل
              أكثر احترافية ووضوحًا، مع تركيز على الأداء، التنظيم، والانطباع
              القوي من أول زيارة.
            </p>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="text-sm font-semibold text-white">
                ملاحظة مهمة
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                الأعمال المعروضة داخل الموقع تُعرض كـ نماذج تصميم تصورية
                لأسلوب التنفيذ والاتجاه البصري، وليست دراسات حالة لعملاء موثقين
                في الوقت الحالي.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">روابط سريعة</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">الخدمات</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {services.slice(0, 4).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">تواصل معنا</h4>

            <div className="mt-5 space-y-3">
              <a
                href={`tel:${brand.phoneE164}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.06]"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                <span>{brand.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.06]"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="break-all">{brand.email}</span>
              </a>

              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm font-medium text-sky-200 transition hover:border-sky-300/30 hover:bg-sky-400/15"
              >
                <MessageCircle className="h-4 w-4" />
                <span>ابدأ محادثة واتساب مباشرة</span>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                {brand.serviceArea}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white">
                حسابات التواصل الرسمية
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                يمكنك متابعتنا أو مراسلتنا عبر المنصات التالية.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {brand.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500 md:px-6 lg:px-8">
        © {currentYear} {brand.name}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}