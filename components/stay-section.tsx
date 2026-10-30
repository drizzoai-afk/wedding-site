"use client";

import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { whatsappHref, wedding } from "@/lib/wedding";

export function StaySection() {
  const { t } = useLocale();

  return (
    <section id="stay" className="wash-section wash-section--alt relative px-6 py-24 md:px-10">
      <div className="relative mx-auto max-w-xl text-center">
        <SectionTitle>{t("stayTitle")}</SectionTitle>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          {t("stayLead")}
        </p>
        <p className="mt-4 font-[family-name:var(--font-display)] text-xl">
          {wedding.whatsapp.display}
        </p>
        <a
          href={whatsappHref(t("stayPrefill"))}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 h-11 rounded-md px-6",
          )}
        >
          {t("stayCta")}
        </a>
      </div>
    </section>
  );
}
