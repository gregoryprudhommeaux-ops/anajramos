import { SiteFrame } from "@/components/site-frame";
import { CreamPanel, GoldDotItem, PageHero, WhiteCard } from "@/components/ui";
import { getCopy } from "@/content";
import { routes, type Locale } from "@/lib/routes";
import Link from "next/link";

export function SearchView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.search;

  return (
    <SiteFrame locale={locale}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <WhiteCard className="mb-8">
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{page.intro}</p>
        <h2 className="mt-8 mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{page.supportTitle}</h2>
        <div className="space-y-4">
          {page.support.map((item) => (
            <GoldDotItem key={item} body={item} />
          ))}
        </div>
      </WhiteCard>

      <WhiteCard className="mb-8">
        <h2 className="mb-6 font-serif text-2xl font-bold text-brand-dark-blue">{page.methodTitle}</h2>
        <div className="relative ml-2 space-y-8 border-l border-brand-ice-blue/30 pl-6">
          {page.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="absolute top-1.5 -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-brand-gold shadow-md" />
              <p className="text-xs font-bold tracking-wider text-brand-gold-ink uppercase">0{index + 1}</p>
              <h3 className="text-sm font-bold text-gray-800 sm:text-base">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-gray-600">{page.environments}</p>
      </WhiteCard>

      <CreamPanel>
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-dark-blue">{page.ctaTitle}</h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{page.ctaBody}</p>
          <Link
            href={routes[locale].contact}
            className="inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark-blue"
          >
            {copy.ctas.startConversation}
          </Link>
        </div>
      </CreamPanel>
    </SiteFrame>
  );
}
