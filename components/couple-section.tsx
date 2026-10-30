import { PhotoFrame } from "@/components/photo-frame";
import { wedding } from "@/lib/wedding";

/** Sposi — childhood dual portrait in the shared PhotoFrame (no section title). */
export function CoupleSection() {
  return (
    <section
      id="couple"
      aria-label="Daniele & Andrea"
      className="wash-section wash-section--alt relative px-6 py-20 md:px-10"
    >
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-3xl">
        <PhotoFrame
          src={wedding.images.couple.src}
          alt={wedding.images.couple.alt}
          aspect="landscape"
        />
      </div>
    </section>
  );
}
