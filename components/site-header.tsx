import Link from "next/link";
import { coupleNames } from "@/lib/wedding";

export function SiteHeader() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <p className="pointer-events-auto font-[family-name:var(--font-display)] text-sm tracking-[0.18em] text-white/90 uppercase">
          {coupleNames()}
        </p>
        <nav className="pointer-events-auto flex items-center gap-6 text-sm text-white/85">
          <Link
            href="#rsvp"
            className="underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            RSVP
          </Link>
        </nav>
      </div>
    </header>
  );
}
