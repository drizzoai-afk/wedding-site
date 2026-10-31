import type { Locale } from "@/lib/wedding";

/** Guest-facing copy only — no meta / placeholder / attribution guidance. */
export const messages = {
  it: {
    navRsvp: "RSVP",
    navDetails: "Luogo e Giorno",
    navStay: "Alloggio",
    navGift: "Regalo",
    langIt: "IT",
    langEn: "EN",
    langLabel: "Lingua",
    heroEyebrow: "Vi aspettiamo per il nostro matrimonio",
    ctaRsvp: "Conferma presenza",
    ctaDetails: "Luogo e Giorno",
    placeDayTitle: "Luogo e Giorno",
    dayWhenLabel: "Quando",
    dayWhenValue: "Martedì 31 agosto 2027 · rito alle 18:30",
    dayWhereLabel: "Dove",
    dayFlowLabel: "Programma",
    venueLink: "Sito della Masseria",
    stayTitle: "Alloggio",
    stayLead:
      "Per consigli su dove dormire vicino alla Masseria, scriveteci su WhatsApp: siamo felici di aiutarvi.",
    stayCta: "Scrivici su Whatsapp",
    stayPrefill:
      "Ciao! Vorrei un consiglio per l'alloggio per il matrimonio di Daniele e Andrea.",
    giftTitle: "Un pensiero dalla Cina",
    giftLead:
      "Se desiderate farci un regalo, un contributo al nostro viaggio è il gesto che più ci fa piacere.",
    giftIbanLabel: "IBAN",
    giftIbanCopy: "Copia IBAN",
    giftIbanCopied: "IBAN copiato",
    giftQrLabel: "Scansiona con la tua banca (SEPA)",
    giftQrHint: "Apre un bonifico precompilato nell'app della banca (es. N26).",
    rsvpTitle: "RSVP",
    rsvpLead:
      "Diteci se potrete esserci. Rispondete il prima possibile per aiutarci a organizzare al meglio. Grazie mille!",
    rsvpName: "Nome e cognome",
    rsvpEmail: "Email",
    rsvpAttend: "Parteciperete?",
    rsvpYes: "Sì",
    rsvpNo: "Purtroppo no",
    rsvpNote: "Nota per gli sposi (opzionale)",
    rsvpNotePlaceholder: "Allergie, canzone, un saluto…",
    rsvpSubmit: "Invia RSVP",
    rsvpThanks: "Grazie,",
    rsvpThanksBody:
      "Si aprirà la vostra email verso rsvp@lovie.me (inoltro ImprovMX). Inviate il messaggio per confermare.",
    rsvpAgain: "Invia un'altra risposta",
    footer: "Con affetto — Daniele & Andrea",
  },
  en: {
    navRsvp: "RSVP",
    navDetails: "Place and Time",
    navStay: "Stay",
    navGift: "Gift",
    langIt: "IT",
    langEn: "EN",
    langLabel: "Language",
    heroEyebrow: "Join us for our wedding",
    ctaRsvp: "RSVP",
    ctaDetails: "Place and Time",
    placeDayTitle: "Place and Time",
    dayWhenLabel: "When",
    dayWhenValue: "Tuesday, 31 August 2027 · ceremony at 18:30",
    dayWhereLabel: "Where",
    dayFlowLabel: "Program",
    venueLink: "Masseria website",
    stayTitle: "Where to stay",
    stayLead:
      "For tips on lodging near the Masseria, message us on Whatsapp. Happy to help.",
    stayCta: "Message us on Whatsapp",
    stayPrefill:
      "Hi! I'd love lodging tips for Daniele and Andrea's wedding.",
    giftTitle: "A postcard from China",
    giftLead:
      "If you wish to give a gift, a contribution toward our trip means the most to us.",
    giftIbanLabel: "IBAN",
    giftIbanCopy: "Copy IBAN",
    giftIbanCopied: "IBAN copied",
    giftQrLabel: "Scan with your bank app (SEPA)",
    giftQrHint: "Opens a prefilled transfer in your banking app (e.g. N26).",
    rsvpTitle: "RSVP",
    rsvpLead:
      "Please let us know if you can join. Reply as soon as you can so we can plan everything properly. Thank you so much!",
    rsvpName: "Full name",
    rsvpEmail: "Email",
    rsvpAttend: "Will you attend?",
    rsvpYes: "Yes",
    rsvpNo: "Unfortunately not",
    rsvpNote: "Note for the couple (optional)",
    rsvpNotePlaceholder: "Dietary needs, a song, or a hello…",
    rsvpSubmit: "Send RSVP",
    rsvpThanks: "Thank you,",
    rsvpThanksBody:
      "Your email app will open to rsvp@lovie.me (ImprovMX forward). Send the message to confirm.",
    rsvpAgain: "Submit another",
    footer: "With love — Daniele & Andrea",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type MessageKey = keyof (typeof messages)["it"];

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
