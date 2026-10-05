import { cn } from "@/content/cn";
import { en } from "@/content/en";
import { es } from "@/content/es";
import { fr } from "@/content/fr";
import type { SiteCopy } from "@/content/types";
import type { Locale } from "@/lib/routes";

const copies: Record<Locale, SiteCopy> = { en, es, cn, fr };

export function getCopy(locale: Locale): SiteCopy {
  return copies[locale];
}
