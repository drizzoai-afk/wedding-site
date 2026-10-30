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
    e164: "+4915228348602",
    display: "+49 1522 8348602",
  },
  /** Replace with the couple’s real IBAN when ready (repo only — not labeled as placeholder in UI) */
  ibanPlaceholder: "IT00 X000 0000 0000 0000 0000 000",
  images: {
    /** Transparent Masseria + date mark for the paper hero */
    logo: {
      src: "/masseria-wedding-logo.svg",
      alt: "Masseria Spina Resort · 31 agosto 2027 · Monopoli",
      width: 1600,
      height: 1850,
    },
    /** Full-bleed Masseria immediately after hero */
    masseria: {
      src: "/masseria-hero-bleed.jpg",
      alt: "Masseria Spina Resort, Monopoli",
    },
    /** Horizontal bilingual program timeline */
    timeline: {
      src: "/program-timeline-v3.png",
      alt: "Rito simbolico · Aperitivo · Cena · Taglio della torta · Dj Set",
      width: 1451,
      height: 359,
    },
    /** Couple photo in China section — landscape, horizon horizontal */
    china: {
      src: "/couple-china.jpg",
      alt: "Daniele e Andrea",
    },
    /** Childhood dual portrait for the sposi PhotoFrame slot */
    couple: {
      src: "/couple-childhood.png",
      alt: "Daniele e Andrea da bambini",
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
