import Image from "next/image";

/** Soft bleed frame — couple placeholder or China (vertical) photo. */
export function PhotoFrame({
  src,
  alt,
  priority = false,
  aspect = "landscape",
  className = "",
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
  /** landscape 4:3 (default) or portrait 3:4 for China */
  aspect?: "landscape" | "portrait";
  className?: string;
}) {
  const ratio = aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div className={`bleed-frame bleed-frame--soft ${className}`.trim()}>
      <div
        className={`relative overflow-hidden bg-[color:var(--wash-soft)] ${ratio}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        ) : null}
      </div>
    </div>
  );
}
