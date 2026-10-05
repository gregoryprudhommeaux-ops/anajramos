import { CopyButton } from "@/components/copy-button";
import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import type { Locale } from "@/lib/routes";

export function ContactCards({ locale, stacked = false }: { locale: Locale; stacked?: boolean }) {
  const copy = getCopy(locale);
  const card =
    "flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm";
  const label = "mb-1 text-xs font-medium tracking-wide text-gray-400 uppercase";
  const value =
    "max-w-full text-xs font-semibold break-all text-brand-dark-blue transition-all hover:text-brand-gold";

  return (
    <div
      className={
        stacked
          ? "grid grid-cols-1 gap-3"
          : "mx-auto grid max-w-2xl grid-cols-1 gap-4 pt-6 sm:grid-cols-2 md:grid-cols-3"
      }
    >
      <div className={card}>
        <span className="mb-2 text-lg text-brand-gold" aria-hidden>
          📧
        </span>
        <h3 className={label}>{copy.contactCards.email}</h3>
        <CopyButton
          text={profile.email}
          label={copy.contactCards.copyEmail}
          copiedLabel={copy.copied}
          className={value}
        />
      </div>
      <div className={card}>
        <span className="mb-2 text-lg text-brand-gold" aria-hidden>
          📞
        </span>
        <h3 className={label}>{copy.contactCards.phone}</h3>
        <CopyButton
          text={profile.phoneDisplay}
          label={copy.contactCards.copyPhone}
          copiedLabel={copy.copied}
          className={value}
        />
      </div>
      <div className={`${card} ${stacked ? "" : "sm:col-span-2 md:col-span-1"}`}>
        <span className="mb-2 text-lg text-brand-gold" aria-hidden>
          🔗
        </span>
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
