"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { wedding } from "@/lib/wedding";

type Attendance = "yes" | "no";
type Status = "idle" | "submitting" | "submitted" | "error";

export function RsvpForm() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [name, setName] = useState("");

  const attendanceOptions: { value: Attendance; label: string }[] = [
    { value: "yes", label: t("rsvpYes") },
    { value: "no", label: t("rsvpNo") },
  ];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const guestName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    if (!guestName || !email) return;

    const body = new FormData();
    body.set("name", guestName);
    body.set("email", email);
    body.set("_replyto", email);
    body.set("attendance", attendance);
    body.set("note", note);
    body.set("locale", locale);
    body.set("_subject", `Wedding RSVP — ${guestName}`);

    setStatus("submitting");
    try {
      const res = await fetch(wedding.formspreeEndpoint, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setName(guestName);
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div
        className="rounded-xl border border-[color:var(--wash-edge)] bg-[color:var(--paper)]/75 px-6 py-10 text-center"
        role="status"
        data-testid="rsvp-thanks"
      >
        <p className="font-[family-name:var(--font-display)] text-3xl font-light">
          {t("rsvpThanks")} {name}.
        </p>
        <p className="mt-3 text-muted-foreground">{t("rsvpThanksBody")}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setName("");
          }}
        >
          {t("rsvpAgain")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      action={wedding.formspreeEndpoint}
      method="POST"
      className="mx-auto w-full max-w-lg space-y-6 text-left"
      data-testid="rsvp-form"
    >
      <div className="space-y-2">
        <Label htmlFor="name">{t("rsvpName")}</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="h-11 rounded-md border-[color:var(--wash-edge)] bg-[color:var(--paper)]/60"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("rsvpEmail")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-md border-[color:var(--wash-edge)] bg-[color:var(--paper)]/60"
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">{t("rsvpAttend")}</legend>
        <div className="grid gap-2">
          {attendanceOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm transition-colors",
                attendance === option.value
                  ? "border-primary/50 bg-[color:var(--wash-soft)]"
                  : "border-[color:var(--wash-edge)] bg-[color:var(--paper)]/50 hover:bg-[color:var(--wash-soft)]/70",
              )}
            >
              <input
                type="radio"
                name="attendance"
                value={option.value}
                checked={attendance === option.value}
                onChange={() => setAttendance(option.value)}
                className="size-4 accent-[var(--terracotta)]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="note">{t("rsvpNote")}</Label>
        <Textarea
          id="note"
          name="note"
          rows={4}
          placeholder={t("rsvpNotePlaceholder")}
          className="rounded-md border-[color:var(--wash-edge)] bg-[color:var(--paper)]/60"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {t("rsvpError")}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full rounded-md"
        disabled={status === "submitting"}
      >
        {t("rsvpSubmit")}
      </Button>
    </form>
  );
}
