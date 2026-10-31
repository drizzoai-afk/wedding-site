"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import QRCode from "qrcode";
import { PhotoFrame } from "@/components/photo-frame";
import { SectionTitle } from "@/components/section-title";
import { useLocale } from "@/lib/i18n/locale-context";
import { copyText } from "@/lib/copy-text";
import { formatIbanDisplay, normalizeIban } from "@/lib/sepa-epc";
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
    // Plain IBAN text only — not a SEPA/bank transfer payload (no remittance notes)
    let cancelled = false;
    QRCode.toDataURL(ibanCompact, {
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
  }, [ibanCompact]);

  async function copyIban() {
    const ok = await copyText(ibanCompact);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
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
              <div className="mt-2 flex items-start gap-2">
                <button
                  type="button"
                  onClick={copyIban}
                  className="min-w-0 flex-1 cursor-pointer text-left font-mono text-sm break-all md:text-base"
                  data-testid="iban-value"
                  aria-label={copied ? t("giftIbanCopied") : t("giftIbanCopy")}
                  title={copied ? t("giftIbanCopied") : t("giftIbanCopy")}
                >
                  {ibanDisplay}
                </button>
                <button
                  type="button"
                  onClick={copyIban}
                  data-testid="iban-copy"
                  className="mt-0.5 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-[color:var(--ink)] transition-colors hover:bg-[color:var(--wash-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--terracotta)]"
                  aria-label={copied ? t("giftIbanCopied") : t("giftIbanCopy")}
                  title={copied ? t("giftIbanCopied") : t("giftIbanCopy")}
                >
                  {copied ? (
                    <Check
                      className="size-4 text-[color:var(--terracotta)]"
                      aria-hidden
                      data-testid="iban-copy-check"
                    />
                  ) : (
                    <Copy className="size-4" aria-hidden />
                  )}
                </button>
              </div>
              {copied ? (
                <p
                  role="status"
                  aria-live="polite"
                  data-testid="iban-copy-feedback"
                  className="mt-2 text-sm font-medium text-[color:var(--terracotta)]"
                >
                  {t("giftIbanCopied")}
                </p>
              ) : null}
            </div>

            <div className="mt-8 flex w-full flex-col items-center gap-3 text-center">
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
                  data-testid="iban-qr"
                  data-iban={ibanCompact}
                  className="rounded-md bg-[color:var(--paper)]/90 p-2"
                />
              ) : (
                <div
                  className="size-[220px] animate-pulse rounded-md bg-[color:var(--wash-soft)]"
                  aria-hidden
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
