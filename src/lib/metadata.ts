import type { Metadata } from "next";
import { brand } from "@/data/brand";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

function normalizePath(path: string) {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const pageUrl = new URL(normalizedPath, brand.url).toString();
  const ogImageUrl = new URL("/opengraph-image", brand.url).toString();
  const fullTitle = `${title} | ${brand.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: brand.name,
      locale: "ar_EG",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${brand.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}