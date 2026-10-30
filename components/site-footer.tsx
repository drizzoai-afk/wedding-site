"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { useLocale } from "@/lib/i18n/locale-context";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-[color:var(--wash-edge)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">{t("footer")}</p>
        <LanguageToggle tone="ink" />
      </div>
    </footer>
  );
}
