"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/lib/i18n/locale-context";
import { buildRsvpMailto } from "@/lib/rsvp-mailto";
import { cn } from "@/lib/utils";
import { wedding } from "@/lib/wedding";

type Attendance = "yes" | "no";
type Status = "idle" | "submitted";

export function RsvpForm() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [name, setName] = useState("");

  const attendanceOptions: { value: Attendance; label: string }[] = [
    { value: "yes", label: t("rsvpYes") },
    { value: "no", label: t("rsvpNo") },
  ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const guestName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    if (!guestName || !email) return;

    const mailto = buildRsvpMailto({
      to: wedding.rsvpEmail,
      name: guestName,
      email,
      attendance,
      note,
      locale,
    });

    window.location.href = mailto;
    setName(guestName);
    setStatus("submitted");
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

      <Button type="submit" size="lg" className="h-11 w-full rounded-md">
        {t("rsvpSubmit")}
      </Button>
    </form>
  );
}
