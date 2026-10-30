"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { coupleNames, wedding } from "@/lib/wedding";

function LandscapePhoto({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full bg-[color:var(--sand-1)]">
      <figure className="relative mx-auto w-full max-w-[1600px]">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Minimal acquerello: soft wash + light grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sand-0)_14%,transparent)_0%,transparent_40%,color-mix(in_srgb,var(--sand-0)_22%,transparent)_100%)]"
        />
        <div
          aria-hidden
          className="watercolor-grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
        />
      </figure>
    </div>
  );
}

/**
 * Opening order: 1) Masseria landscape, 2) couple landscape, then names/date.
 */
export function Hero() {
  const { t } = useLocale();

  return (
    <section aria-label={coupleNames()}>
      <LandscapePhoto
        src={wedding.images.masseria.src}
        alt={wedding.images.masseria.alt}
        priority
      />
      <LandscapePhoto
        src={wedding.images.couple.src}
        alt={wedding.images.couple.alt}
      />

      <div className="border-b border-[color:var(--wash-edge)]/70 bg-[color:var(--sand-0)]/95">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.16em] text-[color:var(--ink)] uppercase">
            {coupleNames()}
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="#place-day" className="hover:text-foreground">
                {t("navDetails")}
              </Link>
              <Link href="#stay" className="hover:text-foreground">
                {t("navStay")}
              </Link>
              <Link href="#rsvp" className="hover:text-foreground">
                {t("navRsvp")}
              </Link>
            </nav>
            <LanguageToggle tone="ink" />
          </div>
        </div>
      </div>

      <div className="wash-section relative px-6 pb-20 pt-14 text-center md:px-10 md:pt-16">
        <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-3xl">
          <p className="animate-rise-1 mb-6 font-[family-name:var(--font-display)] text-sm tracking-[0.32em] text-primary italic uppercase md:text-base">
            {t("heroEyebrow")}
          </p>

          <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,6.5rem)] leading-[0.92] font-light tracking-[-0.02em] text-balance text-[color:var(--ink)]">
            <span className="block">{wedding.partnerOne}</span>
            <span
              aria-hidden
              className="my-2 block font-[family-name:var(--font-display)] text-base tracking-[0.38em] text-[color:var(--gold)] italic uppercase md:my-3 md:text-lg"
            >
              {t("heroAnd")}
            </span>
            <span className="block">{wedding.partnerTwo}</span>
          </h1>

          <div className="animate-rise-3 horizon-rule mx-auto mt-8 w-40 max-w-[40%]" aria-hidden />

          <p className="animate-rise-3 mt-8 text-base text-foreground md:text-lg">
            {t("heroDate")}
          </p>
          <p className="animate-rise-3 mt-2 text-sm tracking-wide text-muted-foreground md:text-base">
            {t("heroSub")}
          </p>

          <div className="animate-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#rsvp"
              className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-md px-6")}
            >
              {t("ctaRsvp")}
            </Link>
            <Link
              href="#place-day"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-md px-6",
              )}
            >
              {t("ctaDetails")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
