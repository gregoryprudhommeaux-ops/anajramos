import { getCopy } from "@/content";
import { profile } from "@/lib/profile";
import { routes, type Locale } from "@/lib/routes";
import Link from "next/link";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const path = routes[locale];

  return (
    <footer className="no-print mt-12 border-t border-brand-light-blue/40 bg-brand-dark-blue px-6 py-8 text-center text-brand-ice-blue">
      <p className="text-xs tracking-wider">{copy.footer.rights}</p>
      <p className="mt-2 text-xs text-brand-ice-blue">{copy.footer.line}</p>
      <p className="mt-3 flex items-center justify-center gap-4 text-xs">
        <Link href={path.privacy} className="hover:text-white">
          {copy.footer.privacy}
        </Link>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
      </p>
      <p className="mt-3 text-xs">
        An app developed by{" "}
        <a
          href="https://nextstep-suite.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:text-brand-gold"
        >
          NEXTSTEP SUITE
        </a>
      </p>
    </footer>
  );
}
