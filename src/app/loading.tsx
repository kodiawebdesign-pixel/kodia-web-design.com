export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-2 border-white/10 border-t-sky-400" />
        <p className="mt-4 text-sm text-slate-300">جارٍ تحميل الصفحة...</p>
      </div>
    </div>
  );
}