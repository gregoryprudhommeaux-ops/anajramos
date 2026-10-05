"use client";

import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import { localeFromPath } from "@/lib/routes";
import { usePathname } from "next/navigation";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = getCopy(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-12">
        <h1 className="font-serif text-3xl text-brand-dark-blue">{copy.error.title}</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600">{copy.error.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-brand-light-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark-blue"
          >
            {copy.error.retry}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-brand-dark-blue/20 px-4 py-2 text-xs font-bold text-brand-dark-blue"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </main>
  );
}
