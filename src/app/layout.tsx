import { SITE_URL } from "@/lib/routes";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const notoSansSc = localFont({
  src: [
    { path: "../fonts/noto-sans-sc-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/noto-sans-sc-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});

const notoSerifSc = localFont({
  src: [
    { path: "../fonts/noto-serif-sc-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/noto-serif-sc-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ana Ramos | Executive Search & Talent Development Consultant",
    template: "%s",
  },
  description:
    "Executive search, talent mapping and leadership integration support for organizations and search firms in Mexico, Latin America and international markets.",
  applicationName: "Ana Ramos",
  authors: [{ name: "Ana Ramos-Prudhommeaux" }],
  openGraph: {
    siteName: "Ana Ramos",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1E36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${notoSansSc.variable} ${notoSerifSc.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-cream font-sans text-brand-charcoal">{children}</body>
    </html>
  );
}
