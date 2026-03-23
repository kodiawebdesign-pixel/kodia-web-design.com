"use client";

import type { ChangeEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  Layers3,
  Mail,
  MessageCircle,
  Palette,
  Phone,
  Wallet,
} from "lucide-react";
import { brand } from "@/data/brand";
import { buildWhatsAppUrl } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  pages: string;
  branding: string;
  contentReady: string;
  description: string;
  timeline: string;
  budget: string;
};

const initialForm: FormState = {
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
};

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: string;
  icon?: ReactNode;
};

function fieldBaseClass(hasValue: boolean) {
  return [
    "w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white transition-all duration-300",
    "placeholder:text-slate-500",
    "focus:border-sky-400/40 focus:bg-white/[0.06] focus:outline-none",
    hasValue
      ? "border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
      : "border-white/10",
  ].join(" ");
}

function FieldLabel({
  label,
  icon,
}: {
  label: string;
  icon?: ReactNode;
}) {
  return (
    <label className="mb-2.5 flex items-center gap-2 text-sm font-medium text-slate-200">
      {icon ? <span className="text-sky-400">{icon}</span> : null}
      <span>{label}</span>
    </label>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}: FieldProps) {
  return (
    <div>
      <FieldLabel label={label} icon={icon} />
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={fieldBaseClass(Boolean(value))}
      />
    </div>
  );
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  const whatsappNumber = useMemo(
    () => brand.phoneE164.replace(/\D/g, ""),
    []
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const valueOrFallback = (value: string) => {
    const cleaned = value.trim();
    return cleaned ? cleaned : "غير مذكور";
  };

  const handleSendWhatsApp = () => {
    const message = `
طلب عرض سعر جديد

الاسم: ${valueOrFallback(form.name)}
اسم الشركة أو النشاط: ${valueOrFallback(form.company)}
رقم الهاتف: ${valueOrFallback(form.phone)}
البريد الإلكتروني: ${valueOrFallback(form.email)}
نوع المشروع: ${valueOrFallback(form.projectType)}
عدد الصفحات التقريبي: ${valueOrFallback(form.pages)}
هل توجد هوية بصرية؟: ${valueOrFallback(form.branding)}
هل يوجد محتوى جاهز؟: ${valueOrFallback(form.contentReady)}
وصف المشروع: ${valueOrFallback(form.description)}
الموعد المتوقع: ${valueOrFallback(form.timeline)}
الميزانية التقريبية: ${valueOrFallback(form.budget)}
    `.trim();

    const whatsappUrl = buildWhatsAppUrl(message, whatsappNumber);

    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#10161f]/90 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_28%),radial-gradient(circle_at_center,rgba(217,70,239,0.05),transparent_36%)]" />

      <div className="relative border-b border-white/10 p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-slate-200">
              <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
              نموذج طلب عرض سعر
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              شاركنا التفاصيل الأساسية
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
              جميع الحقول اختيارية بالكامل، ويمكنك الضغط على زر الإرسال مباشرة
              لفتح واتساب برسالة جاهزة حتى لو كانت كل الحقول فارغة.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[360px]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="mb-2 text-slate-400">
                <MessageCircle className="h-4 w-4 text-sky-400" />
              </div>
              <div className="text-xs text-slate-400">الإرسال</div>
              <div className="mt-1 text-sm font-medium text-white">واتساب</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="mb-2 text-slate-400">
                <ShieldCheckMini />
              </div>
              <div className="text-xs text-slate-400">الحقول</div>
              <div className="mt-1 text-sm font-medium text-white">
                كلها اختيارية
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="mb-2 text-slate-400">
                <Phone className="h-4 w-4 text-sky-400" />
              </div>
              <div className="text-xs text-slate-400">التواصل المباشر</div>
              <div className="mt-1 text-sm font-medium text-white">
                {brand.phoneDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative p-6 md:p-8">
        <div className="grid gap-6">
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-white">
                البيانات الأساسية
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                يمكنك ملء أي بيانات تريدها فقط، وترك الباقي فارغًا.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="الاسم"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="اكتب اسمك"
                icon={<Briefcase className="h-4 w-4" />}
              />

              <TextField
                label="اسم الشركة أو النشاط"
                name="company"
                value={form.company}
                onChange={handleChange}
                type="text"
                placeholder="اسم النشاط أو الشركة"
                icon={<Building2 className="h-4 w-4" />}
              />

              <TextField
                label="رقم الهاتف"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                placeholder="مثال: 01234567890"
                icon={<Phone className="h-4 w-4" />}
              />

              <TextField
                label="البريد الإلكتروني"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="example@email.com"
                icon={<Mail className="h-4 w-4" />}
              />
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-white">
                تفاصيل المشروع
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                اكتب فقط ما هو متاح لديك الآن، ويمكنك استكمال التفاصيل لاحقًا في
                واتساب.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <FieldLabel
                  label="نوع المشروع"
                  icon={<Briefcase className="h-4 w-4" />}
                />
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={fieldBaseClass(Boolean(form.projectType))}
                >
                  <option className="bg-[#10161f]">موقع شركة</option>
                  <option className="bg-[#10161f]">متجر إلكتروني</option>
                  <option className="bg-[#10161f]">Landing Page</option>
                  <option className="bg-[#10161f]">إعادة تصميم</option>
                  <option className="bg-[#10161f]">أخرى</option>
                </select>
              </div>

              <TextField
                label="عدد الصفحات التقريبي"
                name="pages"
                value={form.pages}
                onChange={handleChange}
                type="text"
                placeholder="مثال: 5 صفحات"
                icon={<Layers3 className="h-4 w-4" />}
              />

              <div>
                <FieldLabel
                  label="هل لديك هوية بصرية؟"
                  icon={<Palette className="h-4 w-4" />}
                />
                <select
                  name="branding"
                  value={form.branding}
                  onChange={handleChange}
                  className={fieldBaseClass(Boolean(form.branding))}
                >
                  <option className="bg-[#10161f]">نعم</option>
                  <option className="bg-[#10161f]">لا</option>
                  <option className="bg-[#10161f]">جزئيًا</option>
                </select>
              </div>

              <div>
                <FieldLabel
                  label="هل لديك محتوى جاهز؟"
                  icon={<FileText className="h-4 w-4" />}
                />
                <select
                  name="contentReady"
                  value={form.contentReady}
                  onChange={handleChange}
                  className={fieldBaseClass(Boolean(form.contentReady))}
                >
                  <option className="bg-[#10161f]">نعم</option>
                  <option className="bg-[#10161f]">لا</option>
                  <option className="bg-[#10161f]">جزئيًا</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <FieldLabel
                label="وصف مختصر للمشروع"
                icon={<FileText className="h-4 w-4" />}
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="اكتب فكرة المشروع أو نوع الخدمات أو الهدف من الموقع أو أي تفاصيل مهمة"
                className={fieldBaseClass(Boolean(form.description))}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <TextField
                label="الموعد المتوقع"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                type="text"
                placeholder="مثال: خلال أسبوعين"
                icon={<CalendarClock className="h-4 w-4" />}
              />

              <TextField
                label="الميزانية التقريبية"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                type="text"
                placeholder="اكتب ميزانية تقريبية"
                icon={<Wallet className="h-4 w-4" />}
              />
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-l from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-5">
              <div className="text-sm font-semibold text-white">
                ملاحظة مهمة قبل الإرسال
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                عند الضغط على الزر سيتم فتح واتساب برسالة جاهزة تحتوي البيانات
                التي كتبتها، وأي حقل فارغ سيظهر كـ "غير مذكور".
              </p>
            </div>

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-sky-400/20 bg-gradient-to-l from-sky-500 via-sky-500 to-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(56,189,248,0.24)]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>إرسال الطلب عبر واتساب</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

function ShieldCheckMini() {
  return <CheckCircle2 className="h-4 w-4 text-sky-400" />;
}