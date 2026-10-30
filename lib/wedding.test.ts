import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { messages } from "./i18n/messages";
import {
  coupleNames,
  venueAddressBlock,
  wedding,
  whatsappHref,
} from "./wedding";

describe("wedding config", () => {
  it("uses confirmed couple names", () => {
    assert.equal(coupleNames(), "Daniele & Andrea");
    assert.equal(wedding.dateISO, "2027-08-31");
    assert.equal(wedding.ceremonyTime, "18:30");
  });

  it("formats Masseria address and WhatsApp link", () => {
    assert.match(venueAddressBlock(), /Monopoli/);
    assert.match(whatsappHref("ciao"), /^https:\/\/wa\.me\/393425253645\?text=/);
  });

  it("documents venue image license metadata", () => {
    assert.equal(wedding.images.venue.attribution.license, "CC BY-SA 3.0");
    assert.ok(wedding.images.venue.src.startsWith("/"));
  });
});

describe("i18n dictionaries", () => {
  it("keeps IT and EN key parity", () => {
    const itKeys = Object.keys(messages.it).sort();
    const enKeys = Object.keys(messages.en).sort();
    assert.deepEqual(itKeys, enKeys);
  });
});
