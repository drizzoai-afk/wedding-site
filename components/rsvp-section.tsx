import { RsvpForm } from "@/components/rsvp-form";

export function RsvpSection() {
  return (
    <section
      id="rsvp"
      className="border-t border-border/70 bg-[oklch(0.95_0.012_200)] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight md:text-5xl">
          RSVP
        </h2>
        <p className="mt-4 text-muted-foreground">
          Let us know if you can join the celebration.
        </p>
        <div className="mt-12">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}
