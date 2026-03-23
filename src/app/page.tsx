import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "الرئيسية",
  description:
    "تصميم مواقع ومتاجر وصفحات هبوط باحترافية للشركات وأصحاب المشاريع في مصر والعالم العربي.",
  path: "/",
});

export default function Page() {
  return <HomePageClient />;
}