import { LayoutGrid, MessageCircle, Palette, Rocket } from "lucide-react";
import type { ConceptItem, WhyItem, WorkflowItem } from "@/types/home";

export const trustBarItems: string[] = [
  "تصميم مخصص",
  "متوافق مع الجوال",
  "تجربة استخدام واضحة",
  "دعم بعد التسليم",
];

export const whyItems: WhyItem[] = [
  {
    title: "تصميم مخصص",
    text: "كل مشروع يتم التعامل معه بما يناسب نشاطه ورسالة العلامة التجارية الخاصة به.",
    icon: Palette,
  },
  {
    title: "تجربة استخدام مدروسة",
    text: "نرتب المحتوى ومسار الزائر بطريقة أوضح وأكثر احترافية لرفع الثقة والتفاعل.",
    icon: LayoutGrid,
  },
  {
    title: "أداء وسرعة",
    text: "نهتم بأن يكون الموقع سريعًا ومتوافقًا مع الجوال والشاشات المختلفة.",
    icon: Rocket,
  },
  {
    title: "تواصل مباشر",
    text: "خطوات واضحة ومراجعات منظمة وتواصل مستمر طوال مراحل التنفيذ.",
    icon: MessageCircle,
  },
];

export const conceptItems: ConceptItem[] = [
  {
    title: "موقع شركة خدمات",
    type: "نموذج تصوري",
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    title: "متجر إلكتروني حديث",
    type: "نموذج تصوري",
    accent: "from-fuchsia-500/25 via-pink-500/20 to-orange-500/30",
  },
  {
    title: "صفحة هبوط لحملة إعلانية",
    type: "نموذج تصوري",
    accent: "from-cyan-500/25 via-sky-500/15 to-violet-500/30",
  },
  {
    title: "موقع طبي احترافي",
    type: "نموذج تصوري",
    accent: "from-emerald-500/20 via-teal-500/15 to-sky-500/25",
  },
];

export const workflowItems: WorkflowItem[] = [
  "فهم النشاط",
  "تخطيط الهيكل",
  "تصميم الواجهة",
  "التطوير",
  "المراجعة والإطلاق",
  "الدعم بعد التسليم",
];