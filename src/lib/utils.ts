import { brand } from "@/data/brand";

type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string = "/") {
  return `${brand.url}${path}`;
}

export function buildWhatsAppUrl(message: string, phone?: string) {
  const normalizedPhone = (phone || brand.phoneE164).replace(/[^\d]/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function telHref(phone?: string) {
  return `tel:${phone || brand.phoneE164}`;
}

export function mailtoHref(email?: string) {
  return `mailto:${email || brand.email}`;
}