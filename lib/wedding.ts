/**
 * Canonical wedding facts (language-agnostic).
 * Guest copy: `lib/i18n/messages.ts`.
 */
export const wedding = {
  partnerOne: "Daniele",
  /** Andrea is she */
  partnerTwo: "Andrea",
  dateISO: "2027-08-31",
  ceremonyTime: "18:30",
  venue: {
    name: "Masseria Spina Resort",
    addressLine: "Viale Aldo Moro, 27",
    postalCity: "70043 Monopoli BA",
    country: "Italia",
    url: "https://www.masseriaspinaresort.com/it/",
  },
  whatsapp: {
    e164: "+393425253645",
    display: "+39 342 525 3645",
  },
  /** Replace with the couple’s real IBAN when ready (repo only — not labeled as placeholder in UI) */
  ibanPlaceholder: "IT00 X000 0000 0000 0000 0000 000",
  images: {
    /** Opening image — couple beach sunset with minimal acquerello presentation */
    opening: {
      src: "/couple-hero.jpg",
      alt: "Daniele e Andrea",
    },
    china: {
      src: "/placeholders/china.svg",
    },
  },
} as const;

export type WeddingConfig = typeof wedding;
export type Locale = "it" | "en";

export function coupleNames(joiner = " & "): string {
  return `${wedding.partnerOne}${joiner}${wedding.partnerTwo}`;
}

export function whatsappHref(prefill: string): string {
  const text = encodeURIComponent(prefill);
  return `https://wa.me/${wedding.whatsapp.e164.replace("+", "")}?text=${text}`;
}

export function venueAddressBlock(): string {
  return `${wedding.venue.addressLine}, ${wedding.venue.postalCity}, ${wedding.venue.country}`;
}
