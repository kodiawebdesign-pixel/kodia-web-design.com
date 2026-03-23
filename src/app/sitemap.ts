import type { MetadataRoute } from "next";
import { brand } from "@/data/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/quote",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${brand.url}${route}`,
    lastModified: now,
  }));
}