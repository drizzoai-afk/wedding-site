import { expect, test } from "@playwright/test";
import path from "node:path";

const shot = (name: string) =>
  path.join("e2e", "screenshots", `${name}.png`);

test.describe("wedding invitation", () => {
  test("IT titles, WhatsApp, IBAN/QR, RSVP mailto", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Luogo e Giorno" })).toBeVisible();

    await page.locator("#place-day").scrollIntoViewIfNeeded();
    await page.screenshot({ path: shot("01-place-day-it"), fullPage: false });

    await page.locator("#stay").scrollIntoViewIfNeeded();
    const wa = page.getByRole("link", { name: "Scrivici su Whatsapp" });
    await expect(wa).toBeVisible();
    await expect(wa).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/4915228348602\?text=/,
    );
    await page.screenshot({ path: shot("02-whatsapp-it"), fullPage: false });

    await page.locator("#gift").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("iban-copy")).toContainText(
      "DE31 1001 1001 2625 1554 58",
    );
    await expect(page.getByTestId("sepa-qr")).toBeVisible();
    await page.screenshot({ path: shot("03-gift-iban-qr"), fullPage: false });

    await page.locator("#rsvp").scrollIntoViewIfNeeded();
    await page.screenshot({ path: shot("04-rsvp-form"), fullPage: false });
  });

  test("EN Place and Time + WhatsApp label", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("banner").getByRole("button", { name: "EN" }).click();
    await expect(
      page.getByRole("heading", { name: "Place and Time" }),
    ).toBeVisible();
    await page.locator("#stay").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("link", { name: "Message us on Whatsapp" }),
    ).toBeVisible();
    await page.screenshot({ path: shot("05-place-day-en"), fullPage: false });
  });
});
