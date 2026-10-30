"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/wedding";

/** Header + footer IT/EN switch — shared LocaleProvider. */
export function LanguageToggle({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "ink";
}) {
  const { locale, setLocale, t } = useLocale();

  function select(code: Locale) {
    setLocale(code);
  }

  return (
    <div
      role="group"
      aria-label={t("langLabel")}
      data-language-toggle=""
      className={cn(
        "relative z-50 inline-flex items-center gap-0.5 rounded-full border px-1 py-1 text-xs tracking-[0.14em]",
        tone === "light"
          ? "border-white/35 bg-white/10 text-white/85 backdrop-blur-sm"
          : "border-[color:var(--wash-edge)] bg-[color:var(--paper)]/70 text-foreground",
        className,
      )}
    >
      {(["it", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          data-locale-btn={code}
          onClick={() => select(code)}
          aria-pressed={locale === code}
          className={cn(
            "cursor-pointer rounded-full px-2.5 py-1 transition-colors",
            locale === code
              ? tone === "light"
                ? "bg-white text-[oklch(0.32_0.06_28)]"
                : "bg-primary text-primary-foreground"
              : "hover:bg-black/5",
          )}
        >
          {code === "it" ? t("langIt") : t("langEn")}
        </button>
      ))}
    </div>
  );
}
