"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { coupleNames, wedding } from "@/lib/wedding";

/** Paper/wash hero — names + transparent Masseria/date logo (no text date). */
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
      <div
        aria-hidden
        className="watercolor-grain absolute inset-0 -z-10 opacity-[0.22]"
      />

      <div className="mx-auto flex min-h-[88svh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center md:px-10">
        <p className="animate-rise-1 mb-7 font-[family-name:var(--font-display)] text-sm tracking-[0.32em] text-[color:var(--terracotta)] italic uppercase md:text-base">
          {t("heroEyebrow")}
        </p>

        <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[clamp(3.2rem,12vw,6.5rem)] leading-[0.9] font-light tracking-[-0.02em] text-balance text-[color:var(--brown)]">
          <span className="block">{wedding.partnerOne}</span>
          <span
            aria-hidden
            className="my-2 block font-[family-name:var(--font-display)] text-base tracking-[0.38em] text-[color:var(--gold)] italic uppercase md:my-3 md:text-lg"
          >
            {t("heroAnd")}
          </span>
          <span className="block">{wedding.partnerTwo}</span>
        </h1>

        <div className="animate-rise-3 mt-8 w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]">
          <Image
            src={wedding.images.logo.src}
            alt={wedding.images.logo.alt}
            width={wedding.images.logo.width}
            height={wedding.images.logo.height}
            priority
            className="mx-auto h-auto w-full"
          />
        </div>

        <div className="animate-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
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
