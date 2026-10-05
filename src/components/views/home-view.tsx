import { ContactCards } from "@/components/contact-cards";
import { Portrait } from "@/components/portrait";
import { PracticeTabs } from "@/components/practice-tabs";
import { SiteFrame } from "@/components/site-frame";
import { CreamPanel, DarkPanel, Eyebrow, WhiteCard } from "@/components/ui";
import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import { routes, type Locale } from "@/lib/routes";
import { personJsonLd } from "@/lib/seo";
import Link from "next/link";
import type { ReactNode } from "react";

function OverviewIcon({ children }: { children: ReactNode }) {
  return (
    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-gold-ink">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const home = copy.home;
  const path = routes[locale];
  const serviceHref = {
    search: path.search,
    collaboration: path.collaboration,
    talent: path.talent,
  };

  return (
    <SiteFrame locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
      />

      <DarkPanel className="mb-8 p-5 sm:p-10 lg:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          <div className="order-2 lg:order-1">
          <Eyebrow>{home.eyebrow}</Eyebrow>
          <p className="mb-5 font-serif text-xl leading-tight font-light tracking-tight text-white sm:text-2xl">
            {profile.fullName}
          </p>
          <h1 className="mb-6 font-serif text-3xl leading-snug font-light tracking-tight sm:text-4xl lg:text-5xl">
            {home.headline}
          </h1>
          <p className="text-sm leading-relaxed font-light text-gray-300 sm:text-base">
            {home.supporting}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              href={path.contact}
              className="rounded-full bg-white px-5 py-3 text-center text-xs font-semibold text-brand-dark-blue shadow-md transition-all hover:bg-brand-gold hover:text-brand-dark-blue sm:py-2.5"
            >
              {copy.ctas.discuss}
            </Link>
            <Link
              href={path.collaboration}
              className="rounded-full border border-white/30 px-5 py-3 text-center text-xs font-bold text-white transition-all hover:bg-white/10 sm:py-2.5"
            >
              {copy.ctas.collaboration}
            </Link>
          </div>
          </div>
          <Portrait
            priority
            sizes="(min-width: 1024px) 288px, 224px"
            className="order-1 mx-auto aspect-square w-48 rounded-2xl object-cover shadow-lg ring-1 ring-white/20 sm:w-56 lg:order-2 lg:w-full"
          />
        </div>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          {home.credibility.map((item) => (
            <p key={item} className="text-xs leading-relaxed text-brand-ice-blue">
              {item}
            </p>
          ))}
        </div>
      </DarkPanel>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 border-b border-gray-100 pb-3 font-serif text-lg font-bold text-brand-dark-blue">
              {home.overviewTitle}
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <OverviewIcon>
                  <circle cx="12" cy="12" r="8" />
                  <path d="M4 12h16M12 4c2.4 2.6 2.4 10.8 0 16M12 4c-2.4 2.6-2.4 10.8 0 16" />
                </OverviewIcon>
                <div>
                  <span className="block text-xs tracking-wider text-brand-slate-blue uppercase">
                    {home.footprintLabel}
                  </span>
                  <span className="font-medium text-gray-800">{home.footprint}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <OverviewIcon>
                  <path d="M3 10 12 6l9 4-9 4-9-4Z" />
                  <path d="M7 12.2V16c1.8 1.2 7.2 1.2 10 0v-3.8" />
                </OverviewIcon>
                <div>
                  <span className="block text-xs tracking-wider text-brand-slate-blue uppercase">
                    {home.educationLabel}
                  </span>
                  {home.education.map((item, index) => (
                    <span key={item.title} className={index === 0 ? "" : "mt-1 block"}>
                      <span className="block font-medium text-gray-800">{item.title}</span>
                      <span className="block text-xs text-gray-500">{item.detail}</span>
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <OverviewIcon>
                  <circle cx="8" cy="12" r="2.4" />
                  <circle cx="16" cy="12" r="2.4" />
                  <path d="M10.4 12h3.2" />
                </OverviewIcon>
                <div>
                  <span className="block text-xs tracking-wider text-brand-slate-blue uppercase">
                    {home.specialtiesLabel}
                  </span>
                  <span className="font-medium text-gray-800">{home.specialties}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <OverviewIcon>
                  <path d="M5 7h8M9 7c.2 3.2-1.2 5.4-4 6.6" />
                  <path d="M6.5 10.2h4.2" />
                  <path d="M14 18.2 16.6 11l2.6 7.2M15.2 15.8h2.8" />
                </OverviewIcon>
                <div>
                  <span className="block text-xs tracking-wider text-brand-slate-blue uppercase">
                    {home.languagesLabel}
                  </span>
                  <span className="font-medium text-gray-800">{home.languages}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 border-b border-gray-100 pb-3 font-serif text-lg font-bold text-brand-dark-blue">
              {home.supportTitle}
            </h2>
            <p className="mb-4 text-xs leading-relaxed text-gray-600">{home.supportNote}</p>
            <div className="space-y-2">
              {home.services.map((service) => (
                <Link
                  key={service.key}
                  href={serviceHref[service.key]}
                  className={`block rounded-lg border p-3 ${
                    service.key === "search"
                      ? "border-brand-gold/40 bg-brand-cream/80"
                      : "border-brand-gold/10 bg-brand-cream/60"
                  }`}
                >
                  <span className="block text-xs font-bold text-brand-dark-blue">{service.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-600">{service.body}</span>
                  <span className="mt-2 block text-xs font-semibold text-brand-light-blue">{service.cta}</span>
                </Link>
              ))}
            </div>
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
            <h2 className="mb-4 font-serif text-2xl font-bold text-brand-dark-blue">{home.practiceTitle}</h2>
            {home.practice.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {paragraph}
              </p>
            ))}
            <div className="mb-2 rounded-r-xl border-l-4 border-brand-gold bg-brand-cream p-4">
              <h3 className="mb-1 text-sm font-bold text-brand-dark-blue sm:text-base">{home.calloutTitle}</h3>
              <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">{home.callout}</p>
            </div>
            <PracticeTabs tabs={home.tabs} />
          </WhiteCard>

          <WhiteCard>
            <h2 className="mb-6 font-serif text-2xl font-bold text-brand-dark-blue">{home.timelineTitle}</h2>
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

      <WhiteCard className="mt-8">
        <h2 className="mb-3 font-serif text-2xl font-bold text-brand-dark-blue">{home.sectorsTitle}</h2>
        <p className="max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base">{home.sectors}</p>
      </WhiteCard>

      <CreamPanel className="mt-8">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <span className="text-xs font-bold tracking-widest text-brand-light-blue uppercase">
            {copy.contact.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-dark-blue sm:text-4xl">{home.closingTitle}</h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{home.closing}</p>
          <Link
            href={path.contact}
            className="inline-flex rounded-full bg-brand-light-blue px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-brand-dark-blue"
          >
            {copy.ctas.discuss}
          </Link>
          <ContactCards locale={locale} />
          <p className="pt-4 text-xs text-brand-slate-blue">{home.based}</p>
        </div>
      </CreamPanel>
    </SiteFrame>
  );
}
