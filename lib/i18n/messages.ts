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
      'Se desiderate farci un regalo, un contributo al nostro viaggio di nozze è il gesto che più ci farebbe piacere. Potete effettuare un bonifico a "Andreina De Maio" al seguente IBAN.',
    giftIbanLabel: "IBAN",
    giftIbanCopy: "Copia IBAN",
    giftIbanCopied: "IBAN copiato",
    giftQrLabel: "Scannerizza QR",
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
    rsvpThanksBody: "Abbiamo ricevuto la vostra conferma.",
    rsvpError: "Invio non riuscito. Riprovate tra poco.",
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
      'If you wish to give us a gift, a contribution to our honeymoon is what would please us most. You can make a bank transfer to "Andreina De Maio" using the IBAN below.',
    giftIbanLabel: "IBAN",
    giftIbanCopy: "Copy IBAN",
    giftIbanCopied: "IBAN copied",
    giftQrLabel: "Scan QR",
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
    rsvpThanksBody: "We've received your reply.",
    rsvpError: "Couldn't send. Please try again shortly.",
    rsvpAgain: "Submit another",
    footer: "With love — Daniele & Andrea",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type MessageKey = keyof (typeof messages)["it"];

export function t(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
