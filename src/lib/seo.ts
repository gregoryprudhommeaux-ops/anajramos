import { getCopy } from "@/content";
import type { SeoKey } from "@/content/types";
import { profile } from "@/lib/profile";
import { localeMeta, routes, SITE_URL, type Locale } from "@/lib/routes";
import type { Metadata } from "next";

export function pageMetadata(locale: Locale, key: SeoKey): Metadata {
  const copy = getCopy(locale);
  const seo = copy.seo[key];
  const path = routes[locale][key];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
      languages: {
        en: routes.en[key],
        es: routes.es[key],
        fr: routes.fr[key],
        "zh-CN": routes.cn[key],
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: "Ana Ramos",
      locale: localeMeta[locale].og,
      type: "website",
    },
  };
}

export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ana Ramos-Prudhommeaux",
    alternateName: "Ana Ramos",
    jobTitle: jobTitle(locale),
    url: `${SITE_URL}${routes[locale].home}`,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressCountry: "MX",
    },
    sameAs: ["https://www.linkedin.com/in/anajramos"],
    knowsLanguage: ["es", "en", "fr", "zh"],
  };
}

function jobTitle(locale: Locale) {
  if (locale === "es") return "Consultora de búsqueda ejecutiva y desarrollo de talento";
  if (locale === "fr") return "Consultante en recherche de cadres et développement du talent";
  if (locale === "cn") return "高管搜寻与人才发展顾问";
  return "Executive Search & Talent Development Consultant";
}
