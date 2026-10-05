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
} as const;

export type Locale = keyof typeof routes;
export type RouteKey = keyof typeof routes.en;

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function switchPath(pathname: string): string {
  const pairs = (Object.keys(routes.en) as RouteKey[]).map((key) => ({
    en: routes.en[key],
    es: routes.es[key],
  }));

  const fromEn = pairs.find((pair) => pair.en === pathname);
  if (fromEn) return fromEn.es;

  const fromEs = pairs.find((pair) => pair.es === pathname);
  if (fromEs) return fromEs.en;

  return pathname.startsWith("/es") ? "/" : "/es";
}
