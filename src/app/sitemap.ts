import { localeOrder, routes, SITE_URL, type RouteKey } from "@/lib/routes";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = (Object.keys(routes.en) as RouteKey[]).flatMap((key) => {
    const priority = key === "home" ? 1 : key === "search" ? 0.9 : 0.7;
    return localeOrder.map((locale) => ({
      url: routes[locale][key] === "/" ? SITE_URL : `${SITE_URL}${routes[locale][key]}`,
      priority,
    }));
  });

  return entries.map((entry) => ({
    url: entry.url,
    lastModified: new Date("2026-10-05"),
    changeFrequency: "monthly",
    priority: entry.priority,
  }));
}
