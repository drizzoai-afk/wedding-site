import { venueLine, wedding } from "@/lib/wedding";

export function Details() {
  return (
    <section
      id="details"
      className="border-t border-border/70 bg-background px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-foreground md:text-5xl">
          The day
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {wedding.tagline}
        </p>
        <dl className="mt-12 space-y-8 text-left sm:mx-auto sm:max-w-md">
          <div>
            <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              When
            </dt>
            <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-foreground">
              {wedding.dateDisplay}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Where
            </dt>
            <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl text-foreground">
              {venueLine()}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
