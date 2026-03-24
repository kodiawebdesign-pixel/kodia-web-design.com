import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { brand } from "@/data/brand";
import { navItems } from "@/data/navigation";
import { services } from "@/data/services";

function getSocialTheme(label: string) {
  switch (label.toLowerCase()) {
    case "instagram":
      return "border-white/10 bg-white/[0.06] text-pink-200 hover:bg-white/[0.10]";
    case "threads":
      return "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.10]";
    case "facebook":
      return "border-white/10 bg-white/[0.06] text-sky-200 hover:bg-white/[0.10]";
    case "linkedin":
      return "border-white/10 bg-white/[0.06] text-cyan-200 hover:bg-white/[0.10]";
    case "telegram":
      return "border-white/10 bg-white/[0.06] text-sky-100 hover:bg-white/[0.10]";
    case "tiktok":
      return "border-white/10 bg-white/[0.06] text-fuchsia-200 hover:bg-white/[0.10]";
    case "x":
      return "border-white/10 bg-white/[0.06] text-slate-100 hover:bg-white/[0.10]";
    case "snapchat":
      return "border-white/10 bg-white/[0.06] text-orange-100 hover:bg-white/[0.10]";
    case "youtube":
      return "border-white/10 bg-white/[0.06] text-orange-200 hover:bg-white/[0.10]";
    default:
      return "border-white/10 bg-white/[0.05] text-slate-200 hover:bg-white/[0.10]";
  }
}

function SocialIcon({
  label,
  className = "h-4 w-4",
}: {
  label: string;
  className?: string;
}) {
  switch (label.toLowerCase()) {
    case "instagram":
      return <Instagram className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "telegram":
      return <Send className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "x":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          X
        </span>
      );
    case "threads":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          @
        </span>
      );
    case "tiktok":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          ♪
        </span>
      );
    case "snapchat":
      return (
        <span
          className={`${className} flex items-center justify-center text-[12px] font-bold`}
        >
          S
        </span>
      );
    default:
      return <ArrowUpRight className={className} />;
  }
}

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05060b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(18,120,213,0.12),transparent_22%),radial-gradient(circle_at_34%_10%,rgba(83,85,239,0.10),transparent_22%),radial-gradient(circle_at_80%_24%,rgba(198,22,139,0.10),transparent_22%),radial-gradient(circle_at_86%_82%,rgba(240,76,35,0.10),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_18%,transparent_82%,rgba(255,255,255,0.015))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex items-center rounded-[22px] border border-white/10 bg-white/[0.05] px-3 py-2 shadow-[0_16px_38px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_14%_20%,rgba(18,120,213,0.14),transparent_30%),radial-gradient(circle_at_50%_14%,rgba(83,85,239,0.12),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(198,22,139,0.10),transparent_24%),radial-gradient(circle_at_24%_82%,rgba(240,76,35,0.08),transparent_22%)]" />
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={168}
                  height={52}
                  className="relative z-10 h-9 w-auto object-contain sm:h-10"
                  priority={false}
                />
              </div>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-200 md:text-[15px]">
              نصمم مواقع وصفحات هبوط وتجارب رقمية حديثة تساعدك على الظهور بشكل
              أكثر احترافية ووضوحًا، مع تركيز على الأداء، التنظيم، والانطباع
              القوي من أول زيارة.
            </p>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="text-sm font-semibold text-white">ملاحظة مهمة</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                الأعمال المعروضة داخل الموقع تُعرض كنماذج تصميم تصورية لأسلوب
                التنفيذ والاتجاه البصري، وليست دراسات حالة لعملاء موثقين في
                الوقت الحالي.
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
                    className="transition duration-300 hover:text-white"
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition duration-300 hover:border-white/15 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(18,120,213,0.15)] text-sky-300">
                  <Phone className="h-4 w-4" />
                </span>
                <span>{brand.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition duration-300 hover:border-white/15 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(198,22,139,0.15)] text-fuchsia-300">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">{brand.email}</span>
              </a>

              <a
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-300/25 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-100 transition duration-300 hover:border-emerald-300/35 hover:bg-emerald-500/20"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15">
                  <MessageCircle className="h-4 w-4" />
                </span>
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
                  aria-label={item.label}
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 ${getSocialTheme(
                    item.label
                  )}`}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                    <SocialIcon label={item.label} />
                  </span>
                  <span>{item.label}</span>
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