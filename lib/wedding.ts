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
      src: "/masseria-spina.jpg",
      /** Local copy of Wikimedia Commons CC BY-SA 3.0 work */
      attribution: {
        author: "Marco Spina",
        license: "CC BY-SA 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Masseria_Spina_Grande.jpg",
        note: "Official Masseria Spina marketing photos were not reused (copyright). Replace with an official shot when the resort grants permission.",
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
