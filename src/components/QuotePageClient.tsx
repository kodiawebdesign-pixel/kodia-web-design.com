"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const whatsappNumber = "201207005495";

export default function QuotePageClient() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectType: "موقع شركة",
    pages: "",
    branding: "نعم",
    contentReady: "نعم",
    description: "",
    timeline: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
طلب عرض سعر جديد

الاسم: ${form.name}
اسم الشركة أو النشاط: ${form.company}
رقم الهاتف: ${form.phone}
البريد الإلكتروني: ${form.email}
نوع المشروع: ${form.projectType}
عدد الصفحات التقريبي: ${form.pages}
هل توجد هوية بصرية؟: ${form.branding}
هل يوجد محتوى جاهز؟: ${form.contentReady}
وصف المشروع: ${form.description}
الموعد المتوقع: ${form.timeline}
الميزانية التقريبية: ${form.budget}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SiteHeader />

      <main className="pt-28 md:pt-32">
        <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
            اطلب عرض سعر
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            شاركنا تفاصيل مشروعك
            <span className="block bg-gradient-to-l from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              لنقترح عليك الحل الأنسب
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            املأ النموذج التالي، وعند الضغط على زر الإرسال سيتم فتح واتساب برسالة
            جاهزة تحتوي كل تفاصيل الطلب.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
          <form
            onSubmit={handleSubmit}
            className="rounded-[36px] border border-white/10 bg-[#10161f] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">الاسم</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="اكتب اسمك"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  اسم الشركة أو النشاط
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="اسم النشاط"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  رقم الهاتف
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="مثال: 01234567890"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  البريد الإلكتروني
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  نوع المشروع
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                >
                  <option className="bg-[#10161f]">موقع شركة</option>
                  <option className="bg-[#10161f]">متجر إلكتروني</option>
                  <option className="bg-[#10161f]">Landing Page</option>
                  <option className="bg-[#10161f]">إعادة تصميم</option>
                  <option className="bg-[#10161f]">أخرى</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  عدد الصفحات التقريبي
                </label>
                <input
                  name="pages"
                  value={form.pages}
                  onChange={handleChange}
                  type="text"
                  placeholder="مثال: 5 صفحات"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  هل لديك هوية بصرية؟
                </label>
                <select
                  name="branding"
                  value={form.branding}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                >
                  <option className="bg-[#10161f]">نعم</option>
                  <option className="bg-[#10161f]">لا</option>
                  <option className="bg-[#10161f]">جزئيًا</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  هل لديك محتوى جاهز؟
                </label>
                <select
                  name="contentReady"
                  value={form.contentReady}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
                >
                  <option className="bg-[#10161f]">نعم</option>
                  <option className="bg-[#10161f]">لا</option>
                  <option className="bg-[#10161f]">جزئيًا</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">
                وصف مختصر للمشروع
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="اكتب فكرة المشروع أو الخدمات أو الهدف من الموقع"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  الموعد المتوقع
                </label>
                <input
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  type="text"
                  placeholder="مثال: خلال أسبوعين"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  الميزانية التقريبية
                </label>
                <input
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  type="text"
                  placeholder="اكتب ميزانية تقريبية"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-l from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
              >
                إرسال الطلب عبر واتساب
              </button>
            </div>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}