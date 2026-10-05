import { SiteFrame } from "@/components/site-frame";
import { CreamPanel, PageHero } from "@/components/ui";
import { getCopy } from "@/content";
import { routes, type Locale } from "@/lib/routes";
import Link from "next/link";

export function TalentView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.talent;

  return (
    <SiteFrame locale={locale}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <div className="mb-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{page.intro}</p>
        <h2 className="mt-8 mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{page.areasTitle}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {page.services.map((service) => (
            <div key={service.title} className="rounded-xl border border-brand-gold/20 bg-brand-cream p-4">
              <h3 className="mb-1 text-sm font-semibold text-brand-light-blue">{service.title}</h3>
              <p className="text-xs leading-relaxed text-gray-600">{service.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-r-xl border-l-4 border-brand-gold bg-brand-cream p-4">
          <h3 className="mb-1 text-sm font-bold text-brand-dark-blue sm:text-base">{page.engagementTitle}</h3>
          <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">{page.engagement}</p>
        </div>
      </div>
      <CreamPanel>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-dark-blue">{page.ctaTitle}</h2>
          <Link
            href={routes[locale].contact}
            className="inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark-blue"
          >
            {copy.ctas.discussNeeds}
          </Link>
        </div>
      </CreamPanel>
    </SiteFrame>
  );
}
