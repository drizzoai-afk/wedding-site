"use client";

import { PhotoFrame } from "@/components/photo-frame";
import { useLocale } from "@/lib/i18n/locale-context";
import { wedding } from "@/lib/wedding";

export function GiftSection() {
  const { t } = useLocale();

  return (
    <section id="gift" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        <div className="mx-auto w-full max-w-sm md:mx-0">
          <PhotoFrame
            src={wedding.images.china.src}
            alt={wedding.images.china.alt}
            aspect="portrait"
          />
        </div>
        <div className="md:pl-2">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-light md:text-5xl">
            {t("giftTitle")}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {t("giftLead")}
          </p>
          <div className="mt-8 rounded-lg border border-[color:var(--wash-edge)] bg-[color:var(--paper)]/80 px-5 py-4">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {t("giftIbanLabel")}
            </p>
            <p className="mt-2 font-mono text-sm break-all md:text-base">
              {wedding.ibanPlaceholder}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
