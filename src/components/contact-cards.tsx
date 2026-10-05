import { CopyButton } from "@/components/copy-button";
import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import type { Locale } from "@/lib/routes";
import type { ReactNode } from "react";

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream text-brand-gold-ink">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

export function ContactCards({ locale, stacked = false }: { locale: Locale; stacked?: boolean }) {
  const copy = getCopy(locale);
  const card =
    "flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm";
  const label = "mb-1 text-xs font-medium tracking-wide text-brand-slate-blue uppercase";
  const value =
    "max-w-full text-xs font-semibold break-all text-brand-dark-blue transition-all hover:text-brand-gold-ink";

  return (
    <div
      className={
        stacked
          ? "grid grid-cols-1 gap-3"
          : "mx-auto grid max-w-2xl grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:grid-cols-3"
      }
    >
      <div className={card}>
        <CardIcon>
          <path d="M4 7h16v10H4z" />
          <path d="m4 7 8 6 8-6" />
        </CardIcon>
        <h3 className={label}>{copy.contactCards.email}</h3>
        <CopyButton
          text={profile.email}
          label={copy.contactCards.copyEmail}
          copiedLabel={copy.copied}
          className={value}
        />
      </div>
      <div className={card}>
        <CardIcon>
          <path d="M8 5h3l1.2 3-1.8 1.1a10 10 0 0 0 4.5 4.5L16 12l3 1.2v3A1.8 1.8 0 0 1 17.2 18 13.2 13.2 0 0 1 6 6.8 1.8 1.8 0 0 1 8 5Z" />
        </CardIcon>
        <h3 className={label}>{copy.contactCards.phone}</h3>
        <CopyButton
          text={profile.phoneDisplay}
          label={copy.contactCards.copyPhone}
          copiedLabel={copy.copied}
          className={value}
        />
      </div>
      <div className={`${card} ${stacked ? "" : "sm:col-span-2 md:col-span-1"}`}>
        <CardIcon>
          <path d="M10 13a4 4 0 0 0 5.6.4l2-2a4 4 0 0 0-5.6-5.6l-1.2 1.2" />
          <path d="M14 11a4 4 0 0 0-5.6-.4l-2 2a4 4 0 0 0 5.6 5.6l1.2-1.2" />
        </CardIcon>
        <h3 className={label}>{copy.contactCards.linkedin}</h3>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={value}
        >
          {profile.linkedinHandle}
        </a>
      </div>
    </div>
  );
}
