import { getCopy } from "@/content";
import type { SeoKey } from "@/content/types";
import { routes, SITE_URL, type Locale } from "@/lib/routes";
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
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: "Ana Ramos",
      locale: locale === "en" ? "en_US" : "es_MX",
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
    jobTitle:
      locale === "en"
        ? "Executive Search & Talent Development Consultant"
        : "Consultora de búsqueda ejecutiva y desarrollo de talento",
    url: `${SITE_URL}${routes[locale].home}`,
    email: "ana@nextstep-workshops.com",
    telephone: "+52-33-3139-1523",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressCountry: "MX",
    },
    sameAs: ["https://www.linkedin.com/in/anajramos"],
    knowsLanguage: ["es", "en", "fr", "zh"],
  };
}
