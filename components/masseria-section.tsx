import Image from "next/image";
import { wedding } from "@/lib/wedding";

/**
 * Full-bleed Masseria — edge-to-edge viewport width, no side gaps.
 * Placed immediately after the paper hero.
 */
export function MasseriaSection() {
  return (
    <section
      aria-label={wedding.images.masseria.alt}
      className="relative w-full overflow-hidden"
    >
      <div className="relative aspect-[21/9] min-h-[42vw] w-full bg-[color:var(--wash-soft)] sm:min-h-[38vw] md:aspect-[2.4/1] md:min-h-[28rem]">
        <Image
          src={wedding.images.masseria.src}
          alt={wedding.images.masseria.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
