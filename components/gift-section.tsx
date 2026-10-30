"use client";

import { PhotoFrame } from "@/components/photo-frame";
import { SectionTitle } from "@/components/section-title";
import { useLocale } from "@/lib/i18n/locale-context";
import { wedding } from "@/lib/wedding";

/**
 * China gift — vertical card; landscape source cropped upright so the horizon
 * stays horizontal (no CSS rotate that tips the scene sideways).
 */
export function GiftSection() {
  const { t } = useLocale();

  return (
    <section id="gift" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle>{t("giftTitle")}</SectionTitle>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <PhotoFrame
              src={wedding.images.china.src}
              alt={wedding.images.china.alt}
              aspect="portrait"
            />
          </div>
          <div className="text-center md:pl-2 md:text-left">
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:mx-0">
              {t("giftLead")}
            </p>
            <div className="mt-8 rounded-lg border border-[color:var(--wash-edge)] bg-[color:var(--paper)]/80 px-5 py-4 text-left">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {t("giftIbanLabel")}
              </p>
              <p className="mt-2 font-mono text-sm break-all md:text-base">
                {wedding.ibanPlaceholder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
