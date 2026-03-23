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
        "group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]",
        className
      )}
    >
      <span>{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition group-hover:bg-white/[0.10]">
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}