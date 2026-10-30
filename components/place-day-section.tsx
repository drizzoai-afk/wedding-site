"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { useLocale } from "@/lib/i18n/locale-context";
import { venueAddressBlock, wedding } from "@/lib/wedding";

/** Place + day + program timeline (image only under Programma). */
export function PlaceDaySection() {
  const { t } = useLocale();

  return (
    <section id="place-day" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-4xl text-center">
        <SectionTitle>{t("placeDayTitle")}</SectionTitle>

        <div className="mt-14 space-y-14">
          <div>
            <p className="text-xs tracking-[0.2em] text-primary/80 uppercase">
              {t("dayWhenLabel")}
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)] md:text-3xl">
              {t("dayWhenValue")}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-primary/80 uppercase">
              {t("dayWhereLabel")}
            </p>
            <address className="mt-3 not-italic text-muted-foreground">
              <p className="font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)] md:text-2xl">
                {wedding.venue.name}
              </p>
              <p className="mt-2 text-base md:text-lg">{venueAddressBlock()}</p>
            </address>
            <a
              href={wedding.venue.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("venueLink")}
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-primary/80 uppercase">
              {t("dayFlowLabel")}
            </p>
            {/* Wider than the copy column so thin line-art labels stay readable */}
            <div className="relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-auto px-4 md:px-8">
              <Image
                src={wedding.images.timeline.src}
                alt={wedding.images.timeline.alt}
                width={wedding.images.timeline.width}
                height={wedding.images.timeline.height}
                className="mx-auto h-auto w-[min(100%,72rem)] min-w-[40rem] sm:min-w-[52rem] md:min-w-0 md:max-w-6xl lg:max-w-7xl"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 896px, 1280px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
