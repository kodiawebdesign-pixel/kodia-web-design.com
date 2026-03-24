import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import { brand } from "@/data/brand";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
});

const siteDescription =
  "كوديا ويب ديزاين لتصميم المواقع والمتاجر الإلكترونية وصفحات الهبوط الحديثة بهوية بصرية قوية وسرعة عالية وتجربة استخدام احترافية.";

const ogImageUrl = new URL("/opengraph-image", brand.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: siteDescription,
  applicationName: brand.name,
  keywords: [
    "Kodia Web Design",
    "تصميم مواقع",
    "تطوير مواقع",
    "شركة تصميم مواقع",
    "متاجر إلكترونية",
    "Landing Pages",
    "Web Design Egypt",
    "UI UX",
    "تصميم صفحات هبوط",
    "تصميم متجر إلكتروني",
  ],
  authors: [
    {
      name: brand.name,
      url: brand.url,
    },
  ],
  creator: brand.name,
  publisher: brand.name,
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: brand.name,
    description: siteDescription,
    url: brand.url,
    siteName: brand.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${brand.name} | ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="min-h-screen overflow-x-hidden bg-[var(--kodia-bg)] text-[var(--kodia-text)] antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}