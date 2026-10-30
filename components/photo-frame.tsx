import Image from "next/image";

/** Shared soft bleed frame used for couple + China photos. */
export function PhotoFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`bleed-frame bleed-frame--soft ${className}`.trim()}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--wash-soft)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
