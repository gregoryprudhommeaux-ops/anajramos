"use client";

import { Portrait } from "@/components/portrait";
import { getCopy } from "@/content";
import { localeMeta, localeOrder, pathForLocale, routes, type Locale } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const path = routes[locale];
  const close = () => setOpen(false);

  const links = copy.nav.map((item) => ({
    href: path[item.key],
    label: item.label,
    active: pathname === path[item.key],
  }));

  return (
    <header className="no-print sticky top-0 z-40 border-b border-gray-100 bg-white/80 px-4 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <Link href={path.home} className="flex items-center gap-3" onClick={close}>
            <Portrait
              alt=""
              sizes="40px"
              className="h-10 w-10 rounded-full object-cover object-[center_22%]"
            />
            <span>
              <span className="block text-sm font-semibold tracking-wide text-gray-800 sm:text-base">
                ANA RAMOS
              </span>
              <span className="block text-xs font-medium tracking-wider text-brand-slate-blue">
                {copy.brandDescriptor}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={path.contact}
              className="rounded-full bg-brand-light-blue px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-brand-dark-blue"
            >
              {copy.ctas.discuss}
            </Link>
            <Link
              href={path.collaboration}
              className="rounded-full border border-brand-dark-blue/20 px-4 py-2 text-xs font-bold text-brand-dark-blue transition-all hover:bg-gray-100"
            >
              {copy.ctas.collaboration}
            </Link>
            <LanguageSwitch pathname={pathname} current={locale} />
          </div>

          <button
            type="button"
            className="rounded-full border border-brand-dark-blue/20 px-4 py-2 text-xs font-bold text-brand-dark-blue lg:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.menuClose : copy.menuOpen}
          </button>
        </div>

        <nav className="mt-4 hidden flex-wrap gap-x-5 gap-y-2 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`border-b-2 pb-1 text-xs font-semibold tracking-wide ${
                link.active
                  ? "border-brand-gold text-brand-dark-blue"
                  : "border-transparent text-brand-slate-blue hover:text-brand-dark-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {open ? (
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 lg:hidden">
            {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={link.active ? "page" : undefined}
              className={`text-sm font-semibold ${
                link.active ? "text-brand-dark-blue" : "text-brand-slate-blue"
              }`}
            >
                {link.label}
              </Link>
            ))}
            <Link
              href={path.contact}
              onClick={close}
              className="rounded-full bg-brand-light-blue px-4 py-2 text-center text-xs font-semibold text-white"
            >
              {copy.ctas.discuss}
            </Link>
            <Link
              href={path.collaboration}
              onClick={close}
              className="rounded-full border border-brand-dark-blue/20 px-4 py-2 text-center text-xs font-bold text-brand-dark-blue"
            >
              {copy.ctas.collaboration}
            </Link>
            <LanguageSwitch pathname={pathname} current={locale} onNavigate={close} />
          </div>
        ) : null}
      </div>
    </header>
  );
}

const languageName: Record<Locale, string> = {
  en: "English",
  es: "Español",
  cn: "中文",
  fr: "Français",
};

function LanguageSwitch({
  pathname,
  current,
  onNavigate,
}: {
  pathname: string;
  current: Locale;
  onNavigate?: () => void;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const closeOnOutside = (event: PointerEvent) => {
      if (!details.open) return;
      if (event.target instanceof Node && details.contains(event.target)) return;
      details.open = false;
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") details.open = false;
    };

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details ref={detailsRef} className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-1 py-1 text-xs font-bold tracking-wider text-brand-dark-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold [&::-webkit-details-marker]:hidden">
        <Flag locale={current} />
        <span>{localeMeta[current].code}</span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className="h-3 w-3 text-brand-slate-blue transition-transform group-open:rotate-180"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="z-50 mt-2 min-w-36 rounded-xl border border-gray-100 bg-white p-1 shadow-lg lg:absolute lg:right-0">
        {localeOrder
          .filter((locale) => locale !== current)
          .map((locale) => (
            <Link
              key={locale}
              href={pathForLocale(pathname, locale)}
              hrefLang={localeMeta[locale].htmlLang}
              onClick={() => {
                if (detailsRef.current) detailsRef.current.open = false;
                onNavigate?.();
              }}
              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold tracking-wide text-brand-dark-blue hover:bg-brand-light-gray"
            >
              <Flag locale={locale} />
              <span>{languageName[locale]}</span>
            </Link>
          ))}
      </div>
    </details>
  );
}

const flagEmoji: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇲🇽",
  cn: "🇨🇳",
  fr: "🇫🇷",
};

function Flag({ locale }: { locale: Locale }) {
  return (
    <span aria-hidden className="text-base leading-none">
      {flagEmoji[locale]}
    </span>
  );
}
