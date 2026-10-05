import { routes, SITE_URL } from "@/lib/routes";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = (Object.keys(routes.en) as (keyof typeof routes.en)[]).flatMap((key) => {
    const priority = key === "home" ? 1 : key === "search" ? 0.9 : 0.7;
    return [
      { url: `${SITE_URL}${routes.en[key] === "/" ? "" : routes.en[key]}`, priority },
      { url: `${SITE_URL}${routes.es[key]}`, priority },
    ];
  });

  return entries.map((entry) => ({
    url: entry.url,
    lastModified: new Date("2026-10-05"),
    changeFrequency: "monthly",
    priority: entry.priority,
  }));
}
