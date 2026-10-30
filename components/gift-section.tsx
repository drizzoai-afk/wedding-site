"use client";

import { PhotoFrame } from "@/components/photo-frame";
import { SectionTitle } from "@/components/section-title";
import { useLocale } from "@/lib/i18n/locale-context";
import { wedding } from "@/lib/wedding";

/**
 * China gift — landscape frame + content rotated 90° CLOCKWISE together
 * into a portrait slot. couple-china.jpg is pre-oriented so after CW
 * the horizon reads level and people are upright.
 */
export function GiftSection() {
  const { t } = useLocale();

  return (
    <section id="gift" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle>{t("giftTitle")}</SectionTitle>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div
              className="absolute top-1/2 left-1/2 w-[133.333%] origin-center"
              style={{
                transform: "translate(-50%, -50%) rotate(90deg)",
              }}
            >
              <PhotoFrame
                src={wedding.images.china.src}
                alt={wedding.images.china.alt}
                aspect="landscape"
              />
            </div>
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
