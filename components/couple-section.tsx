"use client";

import { PhotoFrame } from "@/components/photo-frame";
import { useLocale } from "@/lib/i18n/locale-context";

/** Sposi — empty framed placeholder (couple photo moved to China). */
export function CoupleSection() {
  const { t } = useLocale();

  return (
    <section
      id="couple"
      aria-label={t("coupleTitle")}
      className="wash-section wash-section--alt relative px-6 py-20 md:px-10"
    >
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-light tracking-tight text-[color:var(--brown)] md:text-4xl">
          {t("coupleTitle")}
        </h2>
        <PhotoFrame aspect="landscape" />
      </div>
    </section>
  );
}
