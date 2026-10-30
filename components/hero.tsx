"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { coupleNames, wedding } from "@/lib/wedding";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      aria-label={coupleNames()}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={wedding.images.venue.src}
          alt="Masseria Spina Grande, Monopoli"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-drift scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.28_0.04_35/0.45)_0%,oklch(0.35_0.04_40/0.25)_40%,oklch(0.28_0.05_30/0.55)_100%)]"
        />
        <div aria-hidden className="watercolor-grain absolute inset-0 opacity-40 mix-blend-soft-light" />
        <div aria-hidden className="watercolor-bleed absolute inset-0" />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-24 pt-28 text-center text-white md:px-10">
        <p className="animate-rise-1 mb-7 text-sm tracking-[0.28em] text-white/80 uppercase">
          {t("heroEyebrow")}
        </p>

        <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[clamp(3.4rem,13vw,7.75rem)] leading-[0.9] font-light tracking-[-0.02em] text-balance drop-shadow-[0_2px_28px_oklch(0_0_0/0.28)]">
          <span className="block">{wedding.partnerOne}</span>
          <span
            aria-hidden
            className="my-2 block font-[family-name:var(--font-body)] text-base tracking-[0.38em] text-white/75 uppercase md:my-3 md:text-lg"
          >
            {t("heroAnd")}
          </span>
          <span className="block">{wedding.partnerTwo}</span>
        </h1>

        <p className="animate-rise-3 mt-8 max-w-xl text-base text-white/92 md:text-lg">
          {t("heroDate")}
        </p>
        <p className="animate-rise-3 mt-2 text-sm tracking-wide text-white/75 md:text-base">
          {t("heroSub")}
        </p>

        <div className="animate-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#rsvp"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-md bg-[oklch(0.97_0.01_85)] px-6 text-[oklch(0.32_0.06_28)] hover:bg-white",
            )}
          >
            {t("ctaRsvp")}
          </Link>
          <Link
            href="#venue"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-white/45 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white",
            )}
          >
            {t("ctaDetails")}
          </Link>
        </div>
      </div>
    </section>
  );
}
