export default function ConceptArt({ accent }: { accent: string }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1017] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative rounded-[22px] border border-white/10 bg-black/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-3 w-20 rounded-full bg-white/12" />
            <div className="h-3 w-12 rounded-full bg-white/8" />
          </div>
          <div className="h-8 w-20 rounded-full border border-white/10 bg-white/10" />
        </div>

        <div className="grid gap-3">
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
            <div className="relative h-28 rounded-[18px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))]" />

            <div className="relative mt-3 flex flex-wrap gap-2">
              <div className="h-6 w-16 rounded-full bg-white/12" />
              <div className="h-6 w-20 rounded-full bg-white/10" />
              <div className="h-6 w-14 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[18px] border border-white/10 bg-white/10 p-3">
              <div className="h-10 rounded-[14px] bg-white/10" />
              <div className="mt-3 h-3 w-3/4 rounded-full bg-white/10" />
            </div>

            <div className="rounded-[18px] border border-white/10 bg-white/10 p-3">
              <div className="h-10 rounded-[14px] bg-white/10" />
              <div className="mt-3 h-3 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <div className="h-4 w-3/4 rounded-full bg-white/12" />
            <div className="h-4 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}