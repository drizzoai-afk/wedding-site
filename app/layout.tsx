import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { coupleNames } from "@/lib/wedding";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${coupleNames()} — Matrimonio`,
  description:
    "Invito al matrimonio di Daniele e Andrea · 31 agosto 2027 · Masseria Spina Resort, Monopoli.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-[family-name:var(--font-body)]">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
