/**
 * SEPA Credit Transfer EPC QR payload (EPC069-12 v3.1, version 002).
 * BIC omitted (optional within EEA when IBAN-only).
 * @see https://www.europeanpaymentscouncil.eu/document-library/guidance-documents/quick-response-code-guidelines-enable-data-capture-initiation
 */

export type SepaEpcInput = {
  /** Beneficiary display name (max 70) */
  beneficiaryName: string;
  /** IBAN with or without spaces */
  iban: string;
  /** Optional unstructured remittance (max 140) */
  remittance?: string;
};

export function normalizeIban(iban: string): string {
  return iban.replace(/\s+/g, "").toUpperCase();
}

/** Display grouping: 4-char blocks */
export function formatIbanDisplay(iban: string): string {
  const compact = normalizeIban(iban);
  return compact.replace(/(.{4})/g, "$1 ").trim();
}

/**
 * Build EPC QR payload string (LF-separated, no trailing blank required beyond empty optional fields).
 * Version 002: empty BIC line when BIC unknown / IBAN-only.
 */
export function buildSepaEpcPayload(input: SepaEpcInput): string {
  const name = input.beneficiaryName.trim().slice(0, 70);
  const iban = normalizeIban(input.iban);
  if (!name) throw new Error("SEPA EPC: beneficiary name required");
  if (!iban || iban.length < 15) throw new Error("SEPA EPC: IBAN required");

  const remittance = (input.remittance ?? "").trim().slice(0, 140);

  // Lines: BCD, 002, charset UTF-8=1, SCT, BIC(empty), name, IBAN, amount(empty), purpose(empty), remittance
  const lines = [
    "BCD",
    "002",
    "1",
    "SCT",
    "", // BIC optional in v002
    name,
    iban,
    "", // amount optional
    "", // purpose optional
    remittance,
  ];

  return lines.join("\n");
}
