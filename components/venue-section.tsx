"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { venueAddressBlock, wedding } from "@/lib/wedding";

export function VenueSection() {
  const { t } = useLocale();
  const attr = wedding.images.venue.attribution;

  return (
    <section id="venue" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <figure className="bleed-frame">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={wedding.images.venue.src}
              alt="Masseria Spina Grande e uliveti, Monopoli"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
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
          </figcaption>
        </figure>

        <div className="lg:pl-4">
          <p className="text-xs tracking-[0.22em] text-primary/80 uppercase">
            Masseria Spina
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
            {t("venueTitle")}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {t("venueLead")}
          </p>
          <address className="mt-8 not-italic">
            <p className="font-[family-name:var(--font-display)] text-xl">
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
        </div>
      </div>
    </section>
  );
}
