export const SITE_URL = "https://anajramos.com";

export const routes = {
  en: {
    home: "/",
    search: "/executive-search",
    collaboration: "/search-firm-collaboration",
    talent: "/talent-development",
    about: "/about",
    contact: "/contact",
    privacy: "/privacy",
  },
  es: {
    home: "/es",
    search: "/es/busqueda-ejecutiva",
    collaboration: "/es/colaboracion",
    talent: "/es/desarrollo-de-talento",
    about: "/es/acerca",
    contact: "/es/contacto",
    privacy: "/es/privacidad",
  },
  cn: {
    home: "/cn",
    search: "/cn/gaoguan-sousuo",
    collaboration: "/cn/hezuo",
    talent: "/cn/rencai",
    about: "/cn/guanyu",
    contact: "/cn/lianxi",
    privacy: "/cn/yinsi",
  },
  fr: {
    home: "/fr",
    search: "/fr/recherche-executive",
    collaboration: "/fr/collaboration-cabinets",
    talent: "/fr/developpement-talents",
    about: "/fr/a-propos",
    contact: "/fr/contact",
    privacy: "/fr/confidentialite",
  },
} as const;

export type Locale = keyof typeof routes;
export type RouteKey = keyof typeof routes.en;

export const localeOrder: Locale[] = ["en", "es", "cn", "fr"];

export const localeMeta: Record<Locale, { code: string; htmlLang: string; og: string }> = {
  en: { code: "EN", htmlLang: "en", og: "en_US" },
  es: { code: "ES", htmlLang: "es", og: "es_MX" },
  cn: { code: "CN", htmlLang: "zh-CN", og: "zh_CN" },
  fr: { code: "FR", htmlLang: "fr", og: "fr_FR" },
};

export function localeFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  if (pathname === "/cn" || pathname.startsWith("/cn/")) return "cn";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "en";
}

export function pathForLocale(pathname: string, target: Locale): string {
  const keys = Object.keys(routes.en) as RouteKey[];
  for (const key of keys) {
    for (const locale of localeOrder) {
      if (routes[locale][key] === pathname) return routes[target][key];
    }
  }
  return routes[target].home;
}
