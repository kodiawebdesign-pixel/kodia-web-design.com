import type { MetadataRoute } from "next";
import { brand } from "@/data/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${brand.url}/`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${brand.url}/about`,
      lastModified: "2026-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${brand.url}/services`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${brand.url}/pricing`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${brand.url}/contact`,
      lastModified: "2026-03-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${brand.url}/quote`,
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}