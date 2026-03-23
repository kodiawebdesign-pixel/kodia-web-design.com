import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import { brand } from "@/data/brand";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description:
    "شريكك الرقمي الموثوق لتصميم المواقع والمتاجر وصفحات الهبوط في مصر والعالم العربي.",
  applicationName: brand.name,
  keywords: [
    "Kodia Web Design",
    "تصميم مواقع",
    "تطوير مواقع",
    "متاجر إلكترونية",
    "Landing Pages",
    "UI UX",
    "Web Design Egypt",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: brand.name,
    description:
      "شريكك الرقمي الموثوق لتصميم المواقع والمتاجر وصفحات الهبوط.",
    url: brand.url,
    siteName: brand.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${brand.name} | ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description:
      "شريكك الرقمي الموثوق لتصميم المواقع والمتاجر وصفحات الهبوط.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}