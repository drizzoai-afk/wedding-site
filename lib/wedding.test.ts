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

  it("points at logo, full-bleed Masseria, timeline, and China couple photo", () => {
    assert.equal(wedding.images.logo.src, "/masseria-wedding-logo.png");
    assert.equal(wedding.images.masseria.src, "/masseria-hero-bleed.jpg");
    assert.equal(wedding.images.timeline.src, "/program-timeline.png");
    assert.equal(wedding.images.china.src, "/couple-china.jpg");
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
    assert.equal(messages.en.coupleTitle, "The couple");
    assert.equal(messages.it.coupleTitle, "Gli sposi");
    assert.ok(!("rsvpGuests" in messages.en));
    assert.ok(!("heroDate" in messages.it));
    assert.ok(!("dayFlowValue" in messages.it));
    assert.ok(!("dayWhereValue" in messages.it));
  });
});

describe("china photo asset", () => {
  it("is landscape (width greater than height)", async () => {
    const { readFileSync } = await import("node:fs");
    const { join } = await import("node:path");
    const buf = readFileSync(join(process.cwd(), "public/couple-china.jpg"));
    // JPEG SOF0/2: scan for dimensions
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
    assert.ok(width > height, `expected landscape, got ${width}x${height}`);
  });
});
