import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { copyText } from "./copy-text";

describe("copyText", () => {
  it("returns false for empty input without throwing", async () => {
    assert.equal(await copyText(""), false);
    assert.equal(await copyText("   "), false);
  });
});
