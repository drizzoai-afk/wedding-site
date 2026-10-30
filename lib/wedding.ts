/**
 * Canonical wedding facts (language-agnostic).
 * Copy / UI strings live in `lib/i18n/messages.ts`.
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
  /** Replace with the couple’s real IBAN when ready */
  ibanPlaceholder: "IT00 X000 0000 0000 0000 0000 000",
  images: {
    venue: {
      /** Hero only — sharp Wiki Loves Monuments photo of Masseria Spina facade */
      src: "/masseria-spina.jpg",
      attribution: {
        author: "Acquario51",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Monopoli_-_Masseria_Spina_-_2023-09-24_14-31-05_017.jpg",
        note: "Hero-only placement. Official Masseria Spina marketing photos were not reused. Replace with an official editorial shot when the resort grants permission.",
      },
    },
    couple: {
      src: "/placeholders/couple.svg",
      isPlaceholder: true,
    },
    china: {
      src: "/placeholders/china.svg",
      isPlaceholder: true,
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
