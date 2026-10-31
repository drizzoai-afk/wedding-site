import { expect, test } from "@playwright/test";
import path from "node:path";

const shot = (name: string) =>
  path.join("e2e", "screenshots", `${name}.png`);

test.describe("wedding invitation", () => {
  test("IT titles, WhatsApp, IBAN icon copy, Formspree RSVP", async ({
    page,
    context,
  }) => {
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
    await expect(page.getByTestId("iban-value")).toContainText(
      "DE31 1001 1001 2625 1554 58",
    );
    await expect(page.getByTestId("iban-copy")).toBeVisible();
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.getByTestId("iban-copy").click();
    await expect
      .poll(async () => page.evaluate(() => navigator.clipboard.readText()))
      .toBe("DE31100110012625155458");
    await expect(page.getByText("Scansiona QR")).toBeVisible();
    await expect(
      page.getByText(/Apre un bonifico precompilato|N26|Wedding gift|Regalo matrimonio/i),
    ).toHaveCount(0);
    const qr = page.getByTestId("iban-qr");
    await expect(qr).toBeVisible();
    await expect(qr).toHaveAttribute("data-iban", "DE31100110012625155458");
    await page.screenshot({ path: shot("03-gift-iban-qr"), fullPage: false });

    await page.locator("#rsvp").scrollIntoViewIfNeeded();
    const form = page.getByTestId("rsvp-form");
    await expect(form).toHaveAttribute(
      "action",
      "https://formspree.io/f/mbggabyb",
    );
    await page.screenshot({ path: shot("04-rsvp-form"), fullPage: false });
  });

  test("EN Place and Time + Scan QR", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("banner").getByRole("button", { name: "EN" }).click();
    await expect(
      page.getByRole("heading", { name: "Place and Time" }),
    ).toBeVisible();
    await page.locator("#gift").scrollIntoViewIfNeeded();
    await expect(page.getByText("Scan QR")).toBeVisible();
    await page.locator("#stay").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("link", { name: "Message us on Whatsapp" }),
    ).toBeVisible();
    await page.screenshot({ path: shot("05-place-day-en"), fullPage: false });
  });
});
