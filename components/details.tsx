"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function Details() {
  const { t } = useLocale();

  const rows = [
    { label: t("dayWhenLabel"), value: t("dayWhenValue") },
    { label: t("dayWhereLabel"), value: t("dayWhereValue") },
    { label: t("dayFlowLabel"), value: t("dayFlowValue") },
  ];

  return (
    <section id="day" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
          {t("dayTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("dayLead")}
        </p>
        <dl className="mt-14 space-y-9 text-left sm:mx-auto sm:max-w-md">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-xs tracking-[0.2em] text-primary/75 uppercase">
                {row.label}
              </dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
