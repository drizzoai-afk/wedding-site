/**
 * Editable wedding details — change these placeholders when you have the real info.
 */
export const wedding = {
  partnerOne: "Avery",
  partnerTwo: "Jordan",
  /** Display date for guests */
  dateDisplay: "Saturday, June 20, 2027",
  /** ISO date for future calendar/RSVP logic */
  dateISO: "2027-06-20",
  venueName: "The Grove Conservatory",
  venueCity: "Portland",
  tagline: "Together with our families, we invite you to celebrate.",
  heroImage: {
    src: "/hero.jpg",
    alt: "Garden ceremony aisle lined with greenery at dusk",
  },
  rsvpDeadlineDisplay: "May 1, 2027",
} as const;

export type WeddingConfig = typeof wedding;

export function coupleNames(joiner = " & "): string {
  return `${wedding.partnerOne}${joiner}${wedding.partnerTwo}`;
}

export function venueLine(): string {
  return `${wedding.venueName} · ${wedding.venueCity}`;
}
