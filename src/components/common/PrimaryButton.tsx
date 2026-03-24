import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function PrimaryButton({
  children,
  href = "/contact",
  className,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(18,120,213,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(198,22,139,0.18)] focus-visible:ring-0",
        "bg-[linear-gradient(135deg,#0190E9_0%,#1C6ADD_24%,#5E55F4_52%,#D92092_78%,#F65222_100%)]",
        className
      )}
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_38%,rgba(255,255,255,0.08))] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>

      <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 transition duration-300 group-hover:bg-white/15">
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}