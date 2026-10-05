import { SiteFrame } from "@/components/site-frame";
import { CreamPanel, GoldDotItem, PageHero, WhiteCard } from "@/components/ui";
import { getCopy } from "@/content";
import { routes, type Locale } from "@/lib/routes";
import Link from "next/link";

export function CollaborationView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.collaboration;

  return (
    <SiteFrame locale={locale}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <WhiteCard className="lg:col-span-2">
          <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">{page.intro}</p>
          <h2 className="mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{page.supportTitle}</h2>
          <div className="space-y-4">
            {page.support.map((item) => (
              <GoldDotItem key={item} body={item} />
            ))}
          </div>
        </WhiteCard>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 border-b border-gray-100 pb-3 font-serif text-lg font-bold text-brand-dark-blue">
            {page.principlesTitle}
          </h2>
          <ul className="space-y-3">
            {page.principles.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-gray-700">
                <span className="text-brand-gold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CreamPanel className="mt-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-dark-blue">{page.ctaTitle}</h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{page.ctaBody}</p>
          <Link
            href={routes[locale].contact}
            className="inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark-blue"
          >
            {copy.ctas.discussCollaboration}
          </Link>
        </div>
      </CreamPanel>
    </SiteFrame>
  );
}
