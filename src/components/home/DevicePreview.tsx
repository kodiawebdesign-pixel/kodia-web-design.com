import Image from "next/image";
import {
  BadgeCheck,
  LayoutGrid,
  Palette,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { brand } from "@/data/brand";

const featurePills = [
  {
    label: "تصميم فاخر",
    icon: Sparkles,
    className:
      "border-fuchsia-400/20 bg-fuchsia-500/12 text-fuchsia-100 shadow-[0_10px_30px_rgba(236,72,153,0.10)]",
  },
  {
    label: "واجهة واضحة",
    icon: LayoutGrid,
    className:
      "border-sky-400/20 bg-sky-500/12 text-sky-100 shadow-[0_10px_30px_rgba(56,189,248,0.10)]",
  },
  {
    label: "قابل للبيع",
    icon: ShoppingBag,
    className:
      "border-orange-300/20 bg-orange-400/12 text-orange-100 shadow-[0_10px_30px_rgba(249,115,22,0.10)]",
  },
];

export default function DevicePreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-sky-500/20 via-fuchsia-500/10 to-orange-500/20 blur-3xl" />
      <div className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -left-8 bottom-8 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative rounded-[34px] border border-white/10 bg-[#0b1017]/95 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.40)] backdrop-blur-2xl">
        <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#070a10_0%,#0b1018_100%)] p-3">
          <div className="mb-3 flex items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={84}
                height={24}
                className="h-4 w-auto object-contain"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded-full bg-white/10" />
                  <div className="h-3 w-14 rounded-full bg-white/8" />
                </div>

                <div className="rounded-full border border-fuchsia-300/15 bg-gradient-to-l from-sky-500 via-indigo-500 to-fuchsia-500 px-4 py-2 text-[10px] font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.20)]">
                  CTA
                </div>
              </div>

              <div className="grid gap-3">
                <div className="space-y-2">
                  <div className="h-8 w-4/5 rounded-2xl bg-white/10" />
                  <div className="h-3.5 w-full rounded-full bg-white/10" />
                  <div className="h-3.5 w-2/3 rounded-full bg-white/10" />
                </div>

                <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(35,168,255,0.24),rgba(88,103,255,0.18),rgba(239,61,155,0.16),rgba(255,122,61,0.12))] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_36%)]" />

                  <div className="relative flex h-44 flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featurePills.map((item) => {
                        const Icon = item.icon;

                        return (
                          <span
                            key={item.label}
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] backdrop-blur-xl ${item.className}`}
                          >
                            <Icon className="h-3 w-3" />
                            {item.label}
                          </span>
                        );
                      })}
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-black/18 p-4 backdrop-blur-md">
                      <div className="h-3 w-28 rounded-full bg-white/15" />
                      <div className="mt-3 h-3 w-40 rounded-full bg-white/10" />
                      <div className="mt-2 h-3 w-32 rounded-full bg-white/10" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-[16px] bg-white/10" />
                        <div className="h-12 rounded-[16px] bg-white/10" />
                        <div className="h-12 rounded-[16px] bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_16px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,61,0.28),rgba(239,61,155,0.18),rgba(88,103,255,0.16))] p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />
                  <div className="relative">
                    <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] text-white">
                      Featured
                    </div>
                    <div className="mt-4 h-14 rounded-[16px] bg-white/12" />
                  </div>
                </div>

                <div className="mt-3 h-4 w-3/4 rounded-full bg-white/10" />
                <div className="mt-2 h-4 w-1/2 rounded-full bg-white/10" />
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_16px_35px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] border border-white/10 bg-sky-500/10 p-3">
                    <div className="mb-3 inline-flex rounded-full bg-sky-500/15 p-2 text-sky-200">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <div className="h-3 w-14 rounded-full bg-white/10" />
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-fuchsia-500/10 p-3">
                    <div className="mb-3 inline-flex rounded-full bg-fuchsia-500/15 p-2 text-fuchsia-200">
                      <Palette className="h-4 w-4" />
                    </div>
                    <div className="h-3 w-14 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="mt-3 h-4 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 w-44 rounded-[26px] border border-white/10 bg-[#101824]/92 p-3 shadow-[0_22px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="mb-2 flex items-center gap-2">
          <div className="rounded-full bg-emerald-500/15 p-1.5 text-emerald-300">
            <BadgeCheck className="h-4 w-4" />
          </div>
          <span className="text-xs font-medium text-white">واجهة واضحة</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}