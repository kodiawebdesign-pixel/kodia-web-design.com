import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  text,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
          {badge}
        </span>
      ) : null}

      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>

      {text ? (
        <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}