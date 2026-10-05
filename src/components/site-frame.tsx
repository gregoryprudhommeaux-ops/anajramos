"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/routes";
import { useEffect, type ReactNode } from "react";

function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

export function SiteFrame({ locale, children }: { locale: Locale; children: ReactNode }) {
  const copy = getCopy(locale);

  return (
    <>
      <SetLang lang={locale} />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand-dark-blue focus:px-4 focus:py-2 focus:text-xs focus:text-white"
      >
        {copy.skip}
      </a>
      <SiteHeader locale={locale} />
      <main id="content" className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
