"use client";

import { PhotoSlot } from "@/components/photo-slot";
import { useLocale } from "@/lib/i18n/locale-context";
import { wedding } from "@/lib/wedding";

export function CoupleSection() {
  const { t } = useLocale();

  return (
    <section className="wash-section wash-section--alt relative px-6 py-20 md:px-10">
      <div className="relative mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-3xl font-light md:text-4xl">
          {t("coupleTitle")}
        </h2>
        <PhotoSlot
          src={wedding.images.couple.src}
          alt="Daniele e Andrea"
          caption={t("coupleCaption")}
          soft
        />
      </div>
    </section>
  );
}
