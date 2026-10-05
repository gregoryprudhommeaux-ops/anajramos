import { PrivacyView } from "@/components/views/privacy-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私 | Ana Ramos",
  description: "Ana Ramos 如何处理通过 anajramos.com 提交的咨询。",
  alternates: {
    canonical: "/cn/yinsi",
    languages: { en: "/privacy", es: "/es/privacidad", fr: "/fr/confidentialite", "zh-CN": "/cn/yinsi" },
  },
};

export default function Page() {
  return <PrivacyView locale="cn" />;
}
