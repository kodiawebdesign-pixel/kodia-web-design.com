import type { LucideIcon } from "lucide-react";

export type WhyItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ConceptItem = {
  title: string;
  type: string;
  accent: string;
};

export type WorkflowItem = string;