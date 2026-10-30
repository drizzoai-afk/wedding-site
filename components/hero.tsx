"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroFlora } from "@/components/hero-flora";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { coupleNames, wedding } from "@/lib/wedding";

/** Paper/wash hero — names with & + transparent Masseria/date logo. */
export function Hero() {
  const { t } = useLocale();

  return (
    <section
      aria-label={coupleNames()}
      className="relative isolate min-h-[88svh] overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_70%_0%,color-mix(in_srgb,var(--sun)_28%,transparent),transparent_55%),radial-gradient(ellipse_60%_45%_at_10%_20%,color-mix(in_srgb,var(--sand-1)_90%,transparent),transparent_50%),linear-gradient(180deg,var(--sand-0)_0%,var(--sand-1)_70%,color-mix(in_srgb,var(--sand-2)_40%,var(--sand-1))_100%)]"
      />
      <HeroFlora />
      <div
        aria-hidden
        className="watercolor-grain absolute inset-0 -z-10 opacity-[0.22]"
      />

      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center md:px-10">
        <h1 className="animate-rise-1 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2.4rem,9vw,5.5rem)] leading-[0.95] font-light tracking-[-0.02em] text-[color:var(--brown)]">
          <span>{wedding.partnerOne}</span>
          <span
            aria-hidden
            className="mx-[0.18em] inline-block align-baseline font-[family-name:var(--font-display)] text-[0.62em] leading-none font-light text-[color:var(--brown)]"
          >
            &
          </span>
          <span>{wedding.partnerTwo}</span>
        </h1>

        <p className="animate-rise-2 mt-5 max-w-xl font-[family-name:var(--font-display)] text-base tracking-[0.04em] text-[color:var(--terracotta)] italic md:text-lg">
          {t("heroEyebrow")}
        </p>

        <div className="animate-rise-3 mt-8 w-full max-w-[min(92vw,28rem)] sm:max-w-[32rem] md:max-w-[38rem]">
          <Image
            src={wedding.images.logo.src}
            alt={wedding.images.logo.alt}
            width={wedding.images.logo.width}
            height={wedding.images.logo.height}
            priority
            className="mx-auto h-auto w-full"
          />
        </div>

        <div className="animate-rise-4 mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#rsvp"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-md bg-[color:var(--terracotta)] px-6 text-[#fff8f0] hover:bg-[color:var(--brown)]",
            )}
          >
            {t("ctaRsvp")}
          </Link>
          <Link
            href="#place-day"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-[color:var(--horizon)]/40 bg-transparent px-6 text-[color:var(--brown)] hover:bg-[color:var(--sand-1)]/60",
            )}
          >
            {t("ctaDetails")}
          </Link>
        </div>
      </div>
    </section>
  );
}
