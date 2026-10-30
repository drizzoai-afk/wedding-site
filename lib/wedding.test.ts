import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { coupleNames, venueLine, wedding } from "./wedding";

describe("wedding config", () => {
  it("formats couple names for the brand hero", () => {
    assert.equal(coupleNames(), `${wedding.partnerOne} & ${wedding.partnerTwo}`);
    assert.equal(coupleNames(" and "), `${wedding.partnerOne} and ${wedding.partnerTwo}`);
  });

  it("formats venue line for supporting copy", () => {
    assert.equal(
      venueLine(),
      `${wedding.venueName} · ${wedding.venueCity}`,
    );
  });

  it("keeps editable placeholders non-empty", () => {
    assert.ok(wedding.dateDisplay.length > 0);
    assert.match(wedding.dateISO, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(wedding.heroImage.src.startsWith("/"));
  });
});
