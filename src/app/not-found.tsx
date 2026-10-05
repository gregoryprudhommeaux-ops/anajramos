"use client";

import { SiteFrame } from "@/components/site-frame";
import { getCopy } from "@/content";
import { localeFromPath, routes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = getCopy(locale);
  const path = routes[locale];

  return (
    <SiteFrame locale={locale}>
      <div className="rounded-3xl bg-brand-dark-blue p-8 text-white shadow-xl sm:p-12">
        <h1 className="font-serif text-3xl font-light sm:text-5xl">{copy.notFound.title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-ice-blue sm:text-base">
          {copy.notFound.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={path.home} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-dark-blue">
            {copy.notFound.home}
          </Link>
          <Link href={path.search} className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white">
            {copy.nav.find((item) => item.key === "search")?.label}
          </Link>
          <Link href={path.contact} className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white">
            {copy.nav.find((item) => item.key === "contact")?.label}
          </Link>
        </div>
      </div>
    </SiteFrame>
  );
}
