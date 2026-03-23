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

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title: `${title} | ${brand.name}`,
      description,
      url: `${brand.url}${normalizedPath}`,
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
      title: `${title} | ${brand.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}