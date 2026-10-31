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
    assert.match(whatsappHref("ciao"), /^https:\/\/wa\.me\/4915228348602\?text=/);
    assert.equal(wedding.whatsapp.display, "+49 1522 8348602");
  });

  it("uses live N26 IBAN and Formspree RSVP endpoint", () => {
    assert.equal(wedding.iban, "DE31 1001 1001 2625 1554 58");
    assert.equal(wedding.formspreeEndpoint, "https://formspree.io/f/mbggabyb");
  });

  it("points at logo, full-bleed Masseria, timeline, China, and childhood couple photo", () => {
    assert.equal(wedding.images.logo.src, "/masseria-wedding-logo.svg");
    assert.equal(wedding.images.masseria.src, "/masseria-hero-bleed.jpg");
    assert.equal(wedding.images.timeline.src, "/program-timeline-v3.png");
    assert.equal(wedding.images.china.src, "/couple-china.jpg");
    assert.equal(wedding.images.couple.src, "/couple-childhood.png");
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
    assert.equal(messages.en.placeDayTitle, "Place and Time");
    assert.equal(messages.it.placeDayTitle, "Luogo e Giorno");
    assert.ok(!("coupleTitle" in messages.it));
    assert.ok(!("heroAnd" in messages.it));
    assert.ok(!("rsvpGuests" in messages.en));
    assert.ok(!("heroDate" in messages.it));
    assert.ok(!("dayFlowValue" in messages.it));
    assert.ok(!("dayWhereValue" in messages.it));
    assert.match(
      messages.it.rsvpLead,
      /Rispondete il prima possibile/,
    );
    assert.match(messages.en.rsvpLead, /as soon as you can/i);
    assert.equal(messages.en.giftTitle, "A postcard from China");
    assert.equal(messages.en.placeDayTitle, "Place and Time");
    assert.equal(messages.it.stayCta, "Scrivici su Whatsapp");
    assert.equal(messages.en.stayCta, "Message us on Whatsapp");
    assert.equal(
      messages.it.heroEyebrow,
      "Vi aspettiamo per il nostro matrimonio",
    );
    assert.equal(messages.en.heroEyebrow, "Join us for our wedding");
    assert.ok(!messages.en.stayLead.includes("—"));
    assert.equal(messages.it.rsvpYes, "Sì");
    assert.equal(messages.it.rsvpNo, "Purtroppo no");
    assert.equal(messages.en.rsvpYes, "Yes");
    assert.equal(messages.en.rsvpNo, "Unfortunately not");
    assert.ok(!("rsvpMaybe" in messages.it));
    assert.ok(!("rsvpMaybe" in messages.en));
  });
});

describe("china photo asset", () => {
  it("source is pre-oriented for CSS 90° CW frame+content rotate", async () => {
    const { readFileSync } = await import("node:fs");
    const { join } = await import("node:path");
    const buf = readFileSync(join(process.cwd(), "public/couple-china.jpg"));
    let i = 2;
    let width = 0;
    let height = 0;
    while (i < buf.length) {
      if (buf[i] !== 0xff) break;
      const marker = buf[i + 1];
      if (marker === 0xd9) break;
      const len = (buf[i + 2] << 8) | buf[i + 3];
      if (marker >= 0xc0 && marker <= 0xc3) {
        height = (buf[i + 5] << 8) | buf[i + 6];
        width = (buf[i + 7] << 8) | buf[i + 8];
        break;
      }
      i += 2 + len;
    }
    // Pre-rotated (taller than wide) so CSS rotate(90deg) CW yields upright horizon
    assert.ok(height > width, `expected pre-oriented portrait asset, got ${width}x${height}`);
  });
});
