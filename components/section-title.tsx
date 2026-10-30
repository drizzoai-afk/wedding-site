/** Shared section heading: centered title + same horizon rule as Luogo e giorno. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-[color:var(--brown)] md:text-5xl">
        {children}
      </h2>
      <div className="horizon-rule mx-auto mt-8 max-w-xs" aria-hidden />
    </div>
  );
}
