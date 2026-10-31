import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildRsvpMailto } from "./rsvp-mailto";

describe("rsvp mailto", () => {
  it("targets ImprovMX inbox with encoded subject and body", () => {
    const href = buildRsvpMailto({
      to: "rsvp@lovie.me",
      name: "Ada Lovelace",
      email: "ada@example.com",
      attendance: "yes",
      note: "No allergies",
      locale: "en",
    });
    assert.match(href, /^mailto:rsvp@lovie\.me\?/);
    assert.match(href, /subject=/);
    assert.match(href, /body=/);
    const decoded = decodeURIComponent(href.replace(/\+/g, " "));
    assert.match(decoded, /Ada Lovelace/);
    assert.match(decoded, /ada@example\.com/);
    assert.match(decoded, /Yes/);
  });
});
