import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildSepaEpcPayload,
  formatIbanDisplay,
  normalizeIban,
} from "./sepa-epc";

describe("sepa epc", () => {
  it("normalizes and formats IBAN", () => {
    assert.equal(normalizeIban("DE31 1001 1001 2625 1554 58"), "DE31100110012625155458");
    assert.equal(
      formatIbanDisplay("DE31100110012625155458"),
      "DE31 1001 1001 2625 1554 58",
    );
  });

  it("builds v002 EPC payload with empty BIC and empty remittance by default", () => {
    const payload = buildSepaEpcPayload({
      beneficiaryName: "Daniele & Andrea",
      iban: "DE31 1001 1001 2625 1554 58",
    });
    assert.equal(
      payload,
      [
        "BCD",
        "002",
        "1",
        "SCT",
        "",
        "Daniele & Andrea",
        "DE31100110012625155458",
        "",
        "",
        "",
      ].join("\n"),
    );
  });

  it("includes remittance only when provided", () => {
    const payload = buildSepaEpcPayload({
      beneficiaryName: "Daniele & Andrea",
      iban: "DE31 1001 1001 2625 1554 58",
      remittance: "Wedding gift",
    });
    assert.ok(payload.endsWith("\nWedding gift"));
  });
});
