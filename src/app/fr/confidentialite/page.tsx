import { PrivacyView } from "@/components/views/privacy-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité | Ana Ramos",
  description: "Comment Ana Ramos traite les demandes envoyées via anajramos.com.",
  alternates: {
    canonical: "/fr/confidentialite",
    languages: { en: "/privacy", es: "/es/privacidad", fr: "/fr/confidentialite", "zh-CN": "/cn/yinsi" },
  },
};

export default function Page() {
  return <PrivacyView locale="fr" />;
}
