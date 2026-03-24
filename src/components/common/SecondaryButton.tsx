import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function SecondaryButton({
  children,
  href = "/services",
  className,
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.08]",
        className
      )}
    >
      <span className="kodia-gradient-text font-semibold">{children}</span>

      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(1,144,233,0.10),rgba(94,85,244,0.10),rgba(217,32,146,0.10))] transition duration-300 group-hover:bg-[linear-gradient(135deg,rgba(1,144,233,0.16),rgba(94,85,244,0.16),rgba(217,32,146,0.16))]">
        <ArrowLeft className="h-4 w-4 text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}