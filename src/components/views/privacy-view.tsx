import { SiteFrame } from "@/components/site-frame";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/routes";

export function PrivacyView({ locale }: { locale: Locale }) {
  const page = getCopy(locale).privacy;

  return (
    <SiteFrame locale={locale}>
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="font-serif text-3xl font-light text-brand-dark-blue sm:text-5xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{page.lede}</p>
        <div className="mt-8 space-y-6">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl font-bold text-brand-dark-blue">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </SiteFrame>
  );
}
