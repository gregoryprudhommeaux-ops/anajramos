import { en } from "@/content/en";
import { es } from "@/content/es";
import type { SiteCopy } from "@/content/types";
import type { Locale } from "@/lib/routes";

const copies: Record<Locale, SiteCopy> = { en, es };

export function getCopy(locale: Locale): SiteCopy {
  return copies[locale];
}
