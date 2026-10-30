"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/i18n/locale-context";
import { coupleNames } from "@/lib/wedding";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <p className="pointer-events-auto font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[color:var(--brown)] uppercase">
          {coupleNames()}
        </p>
        <div className="pointer-events-auto flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-5 text-sm text-[color:var(--ink)] sm:flex">
            <Link href="#place-day" className="hover:text-[color:var(--terracotta)]">
              {t("navDetails")}
            </Link>
            <Link href="#stay" className="hover:text-[color:var(--terracotta)]">
              {t("navStay")}
            </Link>
            <Link href="#rsvp" className="hover:text-[color:var(--terracotta)]">
              {t("navRsvp")}
            </Link>
          </nav>
          <LanguageToggle tone="ink" />
        </div>
      </div>
    </header>
  );
}
