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

  it("opens with couple photo asset", () => {
    assert.equal(wedding.images.opening.src, "/couple-hero.jpg");
  });
});

describe("i18n dictionaries", () => {
  it("keeps IT and EN key parity", () => {
    const itKeys = Object.keys(messages.it).sort();
    const enKeys = Object.keys(messages.en).sort();
    assert.deepEqual(itKeys, enKeys);
  });

  it("has real English strings distinct from Italian for guest copy", () => {
    assert.equal(messages.en.placeDayTitle, "Place & day");
    assert.equal(messages.it.placeDayTitle, "Luogo e giorno");
    assert.equal(messages.en.heroDate, "Tuesday, 31 August 2027");
    assert.equal(messages.en.rsvpSubmit, "Send RSVP");
    assert.ok(!("rsvpGuests" in messages.en));
    assert.ok(!("venueAttribution" in messages.en));
    assert.ok(!("chinaCaption" in messages.en));
    assert.ok(!("rsvpStubNote" in messages.en));
  });
});
