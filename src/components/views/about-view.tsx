import { Portrait } from "@/components/portrait";
import { SiteFrame } from "@/components/site-frame";
import { CreamPanel, PageHero, WhiteCard } from "@/components/ui";
import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import { routes, type Locale } from "@/lib/routes";
import Link from "next/link";

export function AboutView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.about;
  const home = copy.home;

  return (
    <SiteFrame locale={locale}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6">
          <Portrait
            sizes="(min-width: 1024px) 320px, 100vw"
            className="aspect-square w-full rounded-2xl object-cover shadow-sm ring-1 ring-black/5"
          />
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 border-b border-gray-100 pb-3 font-serif text-lg font-bold text-brand-dark-blue">
              {home.overviewTitle}
            </h2>
            <p className="text-xs tracking-wider text-brand-slate-blue uppercase">{home.languagesLabel}</p>
            <p className="mt-1 text-sm font-medium text-gray-800">{home.languages}</p>
            <p className="mt-4 text-xs tracking-wider text-brand-slate-blue uppercase">{home.educationLabel}</p>
            <ul className="mt-2 space-y-2">
              {home.education.map((item) => (
                <li key={item.title}>
                  <span className="block text-sm font-medium text-gray-800">{item.title}</span>
                  <span className="block text-xs text-gray-500">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 border-b border-gray-100 pb-3 font-serif text-lg font-bold text-brand-dark-blue">
              {home.credentialsTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-brand-light-gray px-2.5 py-1 text-[11px] font-semibold text-brand-light-blue"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <WhiteCard>
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-gray-600 last:mb-0 sm:text-base">
                {paragraph}
              </p>
            ))}
            <h2 className="mt-8 mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{page.snapshotTitle}</h2>
            <div className="space-y-4">
              {page.snapshot.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                  <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-r-xl border-l-4 border-brand-gold bg-brand-cream p-4">
              <h3 className="mb-1 text-sm font-bold text-brand-dark-blue sm:text-base">{page.internationalTitle}</h3>
              <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">{page.international}</p>
            </div>
          </WhiteCard>

          <WhiteCard>
            <h2 className="mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{page.expertiseTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {page.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-brand-light-gray px-2.5 py-1 text-[11px] font-semibold text-brand-light-blue"
                >
                  {item}
                </span>
              ))}
            </div>
            <h2 className="mt-8 mb-6 font-serif text-2xl font-bold text-brand-dark-blue">{home.timelineTitle}</h2>
            <div className="relative ml-2 space-y-8 border-l border-brand-ice-blue/30 pl-6">
              {home.timeline.map((item) => (
                <div key={item.role} className="relative">
                  <span className="absolute top-1.5 -left-[31px] h-4 w-4 rounded-full border-4 border-white bg-brand-gold shadow-md" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-gray-800 sm:text-base">{item.role}</h3>
                    <span className="rounded bg-brand-cream px-2 py-1 text-xs font-semibold text-brand-light-blue">
                      {item.dates}
                    </span>
                  </div>
                  <p className="mb-2 text-xs font-medium text-gray-500">{item.place}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </WhiteCard>
        </div>
      </div>

      <CreamPanel className="mt-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-dark-blue">{page.ctaTitle}</h2>
          <Link
            href={routes[locale].contact}
            className="inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark-blue"
          >
            {copy.ctas.contactAna}
          </Link>
        </div>
      </CreamPanel>
    </SiteFrame>
  );
}
