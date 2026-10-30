"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { coupleNames, wedding } from "@/lib/wedding";

/** Full-bleed Masseria background with names/date overlaid. */
export function Hero() {
  const { t } = useLocale();

  return (
    <section
      aria-label={coupleNames()}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={wedding.images.masseria.src}
          alt={wedding.images.masseria.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--brown)_38%,transparent)_0%,color-mix(in_srgb,var(--terracotta)_18%,transparent)_40%,color-mix(in_srgb,var(--ink)_48%,transparent)_100%)]"
        />
        <div
          aria-hidden
          className="watercolor-grain absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center text-[#fff8f0] md:px-10">
        <p className="animate-rise-1 mb-7 font-[family-name:var(--font-display)] text-sm tracking-[0.32em] text-[color:var(--sun)] italic uppercase md:text-base">
          {t("heroEyebrow")}
        </p>

        <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[clamp(3.4rem,13vw,7.5rem)] leading-[0.9] font-light tracking-[-0.02em] text-balance drop-shadow-[0_2px_28px_rgba(0,0,0,0.3)]">
          <span className="block">{wedding.partnerOne}</span>
          <span
            aria-hidden
            className="my-2 block font-[family-name:var(--font-display)] text-base tracking-[0.38em] text-[color:var(--gold)] italic uppercase md:my-3 md:text-lg"
          >
            {t("heroAnd")}
          </span>
          <span className="block">{wedding.partnerTwo}</span>
        </h1>

        <div className="animate-rise-3 horizon-rule mt-8 w-40 max-w-[40%] opacity-50" aria-hidden />

        <p className="animate-rise-3 mt-8 max-w-xl text-base text-[#fff8f0]/92 md:text-lg">
          {t("heroDate")}
        </p>
        <p className="animate-rise-3 mt-2 text-sm tracking-wide text-[#fff8f0]/75 md:text-base">
          {t("heroSub")}
        </p>

        <div className="animate-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#rsvp"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-md bg-[color:var(--sand-0)] px-6 text-[color:var(--brown)] hover:bg-white",
            )}
          >
            {t("ctaRsvp")}
          </Link>
          <Link
            href="#place-day"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-[#fff8f0]/45 bg-transparent px-6 text-[#fff8f0] hover:bg-white/10 hover:text-white",
            )}
          >
            {t("ctaDetails")}
          </Link>
        </div>
      </div>
    </section>
  );
}
