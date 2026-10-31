import { normalizeIban } from "./sepa-epc";

export type RsvpMailtoInput = {
  to: string;
  name: string;
  email: string;
  attendance: "yes" | "no";
  note: string;
  locale: "it" | "en";
};

/** Build mailto URL so the guest's mail client delivers to the ImprovMX inbox. */
export function buildRsvpMailto(input: RsvpMailtoInput): string {
  const attendLabel =
    input.locale === "it"
      ? input.attendance === "yes"
        ? "Sì"
        : "Purtroppo no"
      : input.attendance === "yes"
        ? "Yes"
        : "Unfortunately not";

  const subject =
    input.locale === "it"
      ? `RSVP matrimonio — ${input.name}`
      : `Wedding RSVP — ${input.name}`;

  const body = [
    input.locale === "it" ? "Nuova conferma RSVP" : "New RSVP reply",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Attend: ${attendLabel}`,
    `Locale: ${input.locale}`,
    input.note ? `Note: ${input.note}` : "Note: —",
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${input.to}?${params.toString()}`;
}

/** Re-export for gift helpers that need compact IBAN in tests */
export { normalizeIban };
