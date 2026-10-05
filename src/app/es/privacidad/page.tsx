import { PrivacyView } from "@/components/views/privacy-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad | Ana Ramos",
  description: "Cómo Ana Ramos trata las consultas enviadas a través de anajramos.com.",
  alternates: { canonical: "/es/privacidad", languages: { en: "/privacy", es: "/es/privacidad" } },
};

export default function Page() {
  return <PrivacyView locale="es" />;
}
