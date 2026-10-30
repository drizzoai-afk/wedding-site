import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { coupleNames, venueLine, wedding } from "@/lib/wedding";

export function Hero() {
  return (
    <section
      aria-label="Wedding invitation hero"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={wedding.heroImage.src}
          alt={wedding.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-drift"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.02_240/0.35)_0%,oklch(0.18_0.02_240/0.2)_42%,oklch(0.18_0.02_240/0.55)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.55%22/></svg>')]"
        />
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center text-white md:px-10">
        <p className="animate-rise-1 mb-8 max-w-md text-sm tracking-[0.22em] text-white/80 uppercase">
          We&apos;re getting married
        </p>

        <h1 className="animate-rise-2 font-[family-name:var(--font-display)] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] font-light tracking-[-0.02em] text-balance drop-shadow-[0_2px_24px_oklch(0_0_0/0.35)]">
          <span className="block">{wedding.partnerOne}</span>
          <span
            aria-hidden
            className="my-2 block font-[family-name:var(--font-body)] text-base tracking-[0.35em] text-white/75 uppercase md:my-3 md:text-lg"
          >
            and
          </span>
          <span className="block">{wedding.partnerTwo}</span>
        </h1>

        <p className="animate-rise-3 mt-8 max-w-lg text-base text-white/90 md:text-lg">
          {wedding.dateDisplay}
          <span className="mx-2 text-white/50" aria-hidden>
            ·
          </span>
          {venueLine()}
        </p>

        <div className="animate-rise-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#rsvp"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-md bg-[oklch(0.98_0.01_100)] px-6 text-[oklch(0.24_0.03_175)] hover:bg-white",
            )}
          >
            RSVP
          </Link>
          <Link
            href="#details"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-md border-white/45 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Details
          </Link>
        </div>

        <p className="sr-only">{coupleNames()} wedding invitation</p>
      </div>
    </section>
  );
}
