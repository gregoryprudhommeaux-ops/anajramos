import { PrivacyView } from "@/components/views/privacy-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Ana Ramos",
  description: "How Ana Ramos handles contact inquiries sent through anajramos.com.",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", es: "/es/privacidad" } },
};

export default function Page() {
  return <PrivacyView locale="en" />;
}
