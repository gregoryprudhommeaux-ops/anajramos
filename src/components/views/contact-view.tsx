import { ContactCards } from "@/components/contact-cards";
import { ContactForm } from "@/components/contact-form";
import { SiteFrame } from "@/components/site-frame";
import { PageHero } from "@/components/ui";
import { getCopy } from "@/content";
import type { Locale } from "@/lib/routes";

export function ContactView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const page = copy.contact;

  return (
    <SiteFrame locale={locale}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm locale={locale} />
        </div>
        <div className="rounded-3xl border border-brand-gold/30 bg-brand-cream p-6 lg:col-span-2">
          <ContactCards locale={locale} />
          <p className="px-2 pt-4 text-center text-xs text-gray-400">{copy.home.based}</p>
        </div>
      </div>
    </SiteFrame>
  );
}
