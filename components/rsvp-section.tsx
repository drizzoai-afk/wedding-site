"use client";

import { RsvpForm } from "@/components/rsvp-form";
import { useLocale } from "@/lib/i18n/locale-context";

export function RsvpSection() {
  const { t } = useLocale();

  return (
    <section id="rsvp" className="wash-section wash-section--alt relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
          {t("rsvpTitle")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("rsvpLead")}</p>
        <div className="mt-12">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}
