import Image from "next/image";
import { wedding } from "@/lib/wedding";

/**
 * Masseria evening photo — vertical, no China/bleed frame.
 * Placed immediately after the paper hero.
 */
export function MasseriaSection() {
  return (
    <section
      aria-label={wedding.images.masseria.alt}
      className="relative px-6 py-10 md:px-10 md:py-14"
    >
      <div className="relative mx-auto w-full max-w-md overflow-hidden md:max-w-lg">
        <div className="relative aspect-[3/4] w-full bg-[color:var(--wash-soft)]">
          <Image
            src={wedding.images.masseria.src}
            alt={wedding.images.masseria.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 32rem"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
