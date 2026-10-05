"use client";

import { getCopy } from "@/content";
import { localeMeta, localeOrder, pathForLocale, routes, type Locale } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark-blue font-serif text-lg font-bold text-white">
              AR
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide text-gray-800 sm:text-base">
                ANA RAMOS
              </span>
              <span className="block text-[10px] font-medium tracking-wider text-brand-slate-blue sm:text-xs">
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

function LanguageSwitch({
  pathname,
  current,
  onNavigate,
}: {
  pathname: string;
  current: Locale;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex items-center gap-2.5 px-1 text-xs font-bold tracking-wider" aria-label="Language">
      {localeOrder.map((locale) => {
        const code = localeMeta[locale].code;
        if (locale === current) {
          return (
            <span key={locale} className="border-b-2 border-brand-gold pb-0.5 text-brand-dark-blue" aria-current="true">
              {code}
            </span>
          );
        }
        return (
          <Link
            key={locale}
            href={pathForLocale(pathname, locale)}
            hrefLang={localeMeta[locale].htmlLang}
            onClick={onNavigate}
            className="text-brand-slate-blue transition-all hover:text-brand-dark-blue"
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
