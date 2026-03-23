import {
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    title: "تصميم مواقع الشركات",
    text: "مواقع تعريفية احترافية تعرض خدماتك بشكل منظم وواضح وتعطي انطباعًا قويًا.",
    icon: Globe,
  },
  {
    title: "تصميم المتاجر الإلكترونية",
    text: "واجهات حديثة وتجربة تصفح وشراء أفضل تساعد على عرض المنتجات باحترافية.",
    icon: MonitorSmartphone,
  },
  {
    title: "تصميم واجهات وتجربة المستخدم",
    text: "واجهات عصرية مرتبة بعناية لتحسين سهولة التفاعل والانطباع البصري العام.",
    icon: Sparkles,
  },
  {
    title: "صفحات الهبوط",
    text: "صفحات مخصصة للحملات والخدمات والعروض بهدف زيادة التفاعل ووضوح الرسالة.",
    icon: Smartphone,
  },
  {
    title: "التهيئة الأساسية لمحركات البحث",
    text: "بنية أولية صحيحة للعناوين والوصف والترتيب العام تساعد على ظهور أفضل.",
    icon: ShieldCheck,
  },
  {
    title: "الدعم الفني والاستضافة",
    text: "مساندة فنية ومتابعة تشغيلية بعد الإطلاق للحفاظ على استقرار الموقع.",
    icon: Wrench,
  },
];