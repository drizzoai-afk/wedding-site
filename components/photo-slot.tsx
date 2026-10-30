"use client";

import Image from "next/image";

export function PhotoSlot({
  src,
  alt,
  caption,
  soft = false,
}: {
  src: string;
  alt: string;
  caption: string;
  soft?: boolean;
}) {
  return (
    <figure className={soft ? "bleed-frame bleed-frame--soft" : "bleed-frame"}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--wash-soft)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
