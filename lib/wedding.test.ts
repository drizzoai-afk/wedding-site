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

  it("has Masseria and couple image assets", () => {
    assert.equal(wedding.images.masseria.src, "/masseria-evening.webp");
    assert.equal(wedding.images.couple.src, "/couple-hero.jpg");
  });
});

describe("i18n dictionaries", () => {
  it("keeps IT and EN key parity", () => {
    assert.deepEqual(
      Object.keys(messages.it).sort(),
      Object.keys(messages.en).sort(),
    );
  });

  it("has real English strings distinct from Italian", () => {
    assert.equal(messages.en.placeDayTitle, "Place & day");
    assert.equal(messages.it.placeDayTitle, "Luogo e giorno");
    assert.ok(!("rsvpGuests" in messages.en));
    assert.ok(!("heroSub" in messages.it));
    assert.ok(!("placeDayLead" in messages.it));
  });

  it("uses the confirmed program line in both locales", () => {
    assert.equal(
      messages.it.dayFlowValue,
      "Rito simbolico · Aperitivo · Cena · Taglio della torta · Dj Set",
    );
    assert.equal(
      messages.en.dayFlowValue,
      "Symbolic ceremony · Aperitif · Dinner · Cake cutting · DJ set",
    );
  });
});
