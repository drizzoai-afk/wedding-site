import type { Locale } from "@/lib/wedding";

export const messages = {
  it: {
    metaTitle: "Daniele & Andrea — Matrimonio",
    metaDescription:
      "Invito al matrimonio di Daniele e Andrea · 31 agosto 2027 · Masseria Spina Resort, Monopoli.",
    navRsvp: "RSVP",
    navDetails: "Dettagli",
    navStay: "Alloggio",
    navGift: "Regalo",
    langIt: "IT",
    langEn: "EN",
    langLabel: "Lingua",
    heroEyebrow: "Vi aspettiamo",
    heroAnd: "e",
    heroDate: "Martedì 31 agosto 2027",
    heroSub: "Rito simbolico alle 18:30 · poi festa",
    ctaRsvp: "Conferma presenza",
    ctaDetails: "Scopri di più",
    venueTitle: "Il luogo",
    venueLead:
      "Ci sposiamo alla Masseria Spina Resort, tra ulivi secolari e pietra pugliese.",
    venueLink: "Sito della Masseria",
    venueAttribution:
      "Foto hero: Acquario51 · CC BY-SA 4.0 (Wiki Loves Monuments). Da sostituire con immagine ufficiale quando disponibile.",
    coupleTitle: "Noi due",
    coupleCaption: "Spazio per la vostra foto di coppia — da sostituire.",
    dayTitle: "Il giorno",
    dayLead:
      "Un rito simbolico al tramonto, poi festa insieme nella stessa masseria.",
    dayWhenLabel: "Quando",
    dayWhenValue: "Martedì 31 agosto 2027 · rito alle 18:30",
    dayWhereLabel: "Dove",
    dayWhereValue: "Masseria Spina Resort · Monopoli (BA)",
    dayFlowLabel: "Programma",
    dayFlowValue: "Rito simbolico · poi festa nello stesso luogo",
    stayTitle: "Alloggio",
    stayLead:
      "Per consigli su dove dormire vicino alla Masseria, scriveteci su WhatsApp: siamo felici di aiutarvi.",
    stayCta: "Scrivici su WhatsApp",
    stayPrefill:
      "Ciao! Vorrei un consiglio per l'alloggio per il matrimonio di Daniele e Andrea.",
    giftTitle: "Un pensiero dalla Cina",
    giftLead:
      "Se desiderate farci un regalo, un contributo al nostro viaggio è il gesto che più ci fa piacere.",
    giftIbanLabel: "IBAN",
    giftIbanNote: "Segnaposto — sostituire con l'IBAN reale.",
    chinaCaption: "Spazio per la foto dalla Cina — da sostituire.",
    rsvpTitle: "RSVP",
    rsvpLead: "Diteci se potrete esserci. Rispondete entro il 1° luglio 2027.",
    rsvpName: "Nome e cognome",
    rsvpEmail: "Email",
    rsvpAttend: "Parteciperete?",
    rsvpYes: "Con gioia, sì",
    rsvpNo: "Purtroppo no",
    rsvpMaybe: "Ancora indecisi",
    rsvpGuests: "Numero di ospiti (incluso voi)",
    rsvpNote: "Nota per gli sposi (opzionale)",
    rsvpNotePlaceholder: "Allergie, canzone, un saluto…",
    rsvpSubmit: "Invia RSVP",
    rsvpThanks: "Grazie,",
    rsvpThanksBody:
      "La conferma è salvata in locale per ora. Collegheremo l'invio reale più avanti.",
    rsvpAgain: "Invia un'altra risposta",
    rsvpStubNote:
      "Modulo provvisorio: le risposte restano nella console del browser.",
    footer: "Con affetto — Daniele & Andrea",
  },
  en: {
    metaTitle: "Daniele & Andrea — Wedding",
    metaDescription:
      "Wedding invitation for Daniele and Andrea · 31 August 2027 · Masseria Spina Resort, Monopoli.",
    navRsvp: "RSVP",
    navDetails: "Details",
    navStay: "Stay",
    navGift: "Gift",
    langIt: "IT",
    langEn: "EN",
    langLabel: "Language",
    heroEyebrow: "Join us",
    heroAnd: "and",
    heroDate: "Tuesday, 31 August 2027",
    heroSub: "Symbolic ceremony at 18:30 · then the party",
    ctaRsvp: "RSVP",
    ctaDetails: "Learn more",
    venueTitle: "The place",
    venueLead:
      "We marry at Masseria Spina Resort, among ancient olive trees and Apulian stone.",
    venueLink: "Masseria website",
    venueAttribution:
      "Hero photo: Acquario51 · CC BY-SA 4.0 (Wiki Loves Monuments). Replace with an official resort image when available.",
    coupleTitle: "The two of us",
    coupleCaption: "Couple photo slot — replace with your photo.",
    dayTitle: "The day",
    dayLead:
      "A symbolic ceremony at sunset, then a party together at the same masseria.",
    dayWhenLabel: "When",
    dayWhenValue: "Tuesday, 31 August 2027 · ceremony at 18:30",
    dayWhereLabel: "Where",
    dayWhereValue: "Masseria Spina Resort · Monopoli (BA)",
    dayFlowLabel: "Flow",
    dayFlowValue: "Symbolic ceremony · then party at the same venue",
    stayTitle: "Where to stay",
    stayLead:
      "For tips on lodging near the Masseria, message us on WhatsApp — happy to help.",
    stayCta: "Message us on WhatsApp",
    stayPrefill:
      "Hi! I'd love lodging tips for Daniele and Andrea's wedding.",
    giftTitle: "A note from China",
    giftLead:
      "If you wish to give a gift, a contribution toward our trip means the most to us.",
    giftIbanLabel: "IBAN",
    giftIbanNote: "Placeholder — replace with the real IBAN.",
    chinaCaption: "China photo slot — replace with your photo.",
    rsvpTitle: "RSVP",
    rsvpLead: "Let us know if you can join. Please reply by 1 July 2027.",
    rsvpName: "Full name",
    rsvpEmail: "Email",
    rsvpAttend: "Will you attend?",
    rsvpYes: "Joyfully accepts",
    rsvpNo: "Regretfully declines",
    rsvpMaybe: "Still deciding",
    rsvpGuests: "Number of guests (including you)",
    rsvpNote: "Note for the couple (optional)",
    rsvpNotePlaceholder: "Dietary needs, a song, or a hello…",
    rsvpSubmit: "Send RSVP",
    rsvpThanks: "Thank you,",
    rsvpThanksBody:
      "Your RSVP is saved locally for now. We'll wire real delivery later.",
    rsvpAgain: "Submit another",
    rsvpStubNote:
      "Stub form: responses stay in the browser console for now.",
    footer: "With love — Daniele & Andrea",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type MessageKey = keyof (typeof messages)["it"];

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
