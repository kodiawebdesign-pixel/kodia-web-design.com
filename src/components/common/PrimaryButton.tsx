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
        "group inline-flex items-center justify-center gap-3 rounded-full border border-sky-400/20 bg-gradient-to-l from-sky-500 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(56,189,248,0.24)]",
        className
      )}
    >
      <span>{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-white/15">
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}