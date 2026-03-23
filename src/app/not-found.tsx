import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="max-w-xl text-center">
        <div className="text-sm text-sky-400">404</div>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-300">
          الرابط الذي تحاول الوصول إليه غير موجود أو تم تغييره.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}