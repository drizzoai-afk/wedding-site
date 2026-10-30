"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { venueAddressBlock, wedding } from "@/lib/wedding";

/** Single guest section: place + day together. */
export function PlaceDaySection() {
  const { t } = useLocale();

  const rows = [
    { label: t("dayWhenLabel"), value: t("dayWhenValue") },
    { label: t("dayWhereLabel"), value: t("dayWhereValue") },
    { label: t("dayFlowLabel"), value: t("dayFlowValue") },
  ];

  return (
    <section id="place-day" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
          {t("placeDayTitle")}
        </h2>
        <div className="horizon-rule mx-auto mt-8 max-w-xs" aria-hidden />

        <dl className="mt-14 space-y-9 text-left sm:mx-auto sm:max-w-md">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-xs tracking-[0.2em] text-primary/80 uppercase">
                {row.label}
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <address className="mt-12 not-italic text-muted-foreground">
          <p className="font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
            {wedding.venue.name}
          </p>
          <p className="mt-2">{venueAddressBlock()}</p>
        </address>
        <a
          href={wedding.venue.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {t("venueLink")}
        </a>
      </div>
    </section>
  );
}
