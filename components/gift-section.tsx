"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { PhotoFrame } from "@/components/photo-frame";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  buildSepaEpcPayload,
  formatIbanDisplay,
  normalizeIban,
} from "@/lib/sepa-epc";
import { wedding } from "@/lib/wedding";

/**
 * China gift — landscape frame + content rotated 90° CLOCKWISE together
 * into a portrait slot. couple-china.jpg is pre-oriented so after CW
 * the horizon reads level and people are upright.
 */
export function GiftSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  const ibanDisplay = formatIbanDisplay(wedding.iban);
  const ibanCompact = normalizeIban(wedding.iban);

  useEffect(() => {
    const payload = buildSepaEpcPayload({
      beneficiaryName: wedding.ibanBeneficiary,
      iban: wedding.iban,
      remittance: wedding.ibanRemittance,
    });
    let cancelled = false;
    QRCode.toDataURL(payload, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 220,
      color: { dark: "#3d2a1f", light: "#f7f1e8" },
    }).then((url) => {
      if (!cancelled) setQrDataUrl(url);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function copyIban() {
    try {
      await navigator.clipboard.writeText(ibanCompact);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select via prompt-less copy attempt ignored
    }
  }

  return (
    <section id="gift" className="wash-section relative px-6 py-24 md:px-10">
      <div className="watercolor-grain pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle>{t("giftTitle")}</SectionTitle>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div
              className="absolute top-1/2 left-1/2 w-[133.333%] origin-center"
              style={{
                transform: "translate(-50%, -50%) rotate(90deg)",
              }}
            >
              <PhotoFrame
                src={wedding.images.china.src}
                alt={wedding.images.china.alt}
                aspect="landscape"
              />
            </div>
          </div>
          <div className="text-center md:pl-2 md:text-left">
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:mx-0">
              {t("giftLead")}
            </p>
            <div className="mt-8 rounded-lg border border-[color:var(--wash-edge)] bg-[color:var(--paper)]/80 px-5 py-4 text-left">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {t("giftIbanLabel")}
              </p>
              <button
                type="button"
                onClick={copyIban}
                data-testid="iban-copy"
                className="mt-2 w-full cursor-pointer rounded-md text-left font-mono text-sm break-all transition-colors hover:bg-[color:var(--wash-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--terracotta)] md:text-base"
                aria-label={t("giftIbanCopy")}
              >
                {ibanDisplay}
              </button>
              <p className="mt-2 text-xs text-muted-foreground" role="status">
                {copied ? t("giftIbanCopied") : t("giftIbanCopy")}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 md:items-start">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {t("giftQrLabel")}
              </p>
              {qrDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrDataUrl}
                  alt={t("giftQrLabel")}
                  width={220}
                  height={220}
                  data-testid="sepa-qr"
                  className="rounded-md bg-[color:var(--paper)]/90 p-2"
                />
              ) : (
                <div
                  className="size-[220px] animate-pulse rounded-md bg-[color:var(--wash-soft)]"
                  aria-hidden
                />
              )}
              <p className="max-w-xs text-sm text-muted-foreground">
                {t("giftQrHint")}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-1"
                onClick={copyIban}
              >
                {copied ? t("giftIbanCopied") : t("giftIbanCopy")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
