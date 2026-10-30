"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { venueAddressBlock, wedding } from "@/lib/wedding";

/** Venue details only — Masseria photo lives exclusively in the hero. */
export function VenueSection() {
  const { t } = useLocale();
  const attr = wedding.images.venue.attribution;

  return (
    <section id="venue" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.22em] text-primary uppercase">
          Masseria Spina
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
          {t("venueTitle")}
        </h2>
        <div className="horizon-rule mx-auto mt-8 max-w-xs" aria-hidden />
        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("venueLead")}
        </p>
        <address className="mt-10 not-italic">
          <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
            {wedding.venue.name}
          </p>
          <p className="mt-2 text-muted-foreground">{venueAddressBlock()}</p>
        </address>
        <a
          href={wedding.venue.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {t("venueLink")}
        </a>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          {t("venueAttribution")}{" "}
          <a
            href={attr.sourceUrl}
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            {attr.author}
          </a>
          {" · "}
          <a
            href={attr.licenseUrl}
            className="underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            {attr.license}
          </a>
        </p>
      </div>
    </section>
  );
}
