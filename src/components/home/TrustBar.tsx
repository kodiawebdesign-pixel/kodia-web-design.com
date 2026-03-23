import { BadgeCheck } from "lucide-react";
import { trustBarItems } from "@/data/home";

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 md:grid-cols-4 md:px-6 lg:px-8">
        {trustBarItems.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
          >
            <BadgeCheck className="h-4 w-4 text-sky-400" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}