"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { wedding } from "@/lib/wedding";

type Attendance = "yes" | "no" | "maybe";

type Status = "idle" | "submitted";

const attendanceOptions: { value: Attendance; label: string }[] = [
  { value: "yes", label: "Joyfully accepts" },
  { value: "no", label: "Regretfully declines" },
  { value: "maybe", label: "Still deciding" },
];

export function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const guestName = String(data.get("name") ?? "").trim();
    if (!guestName) return;

    // Local mock only — no network, auth, or database in this slice.
    console.info("[rsvp-mock]", {
      name: guestName,
      email: String(data.get("email") ?? "").trim(),
      attendance,
      guests: String(data.get("guests") ?? "1"),
      note: String(data.get("note") ?? "").trim(),
      at: new Date().toISOString(),
    });
    setName(guestName);
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        className="rounded-xl border border-border/80 bg-muted/40 px-6 py-10 text-center"
        role="status"
      >
        <p className="font-[family-name:var(--font-display)] text-3xl font-light">
          Thank you, {name}.
        </p>
        <p className="mt-3 text-muted-foreground">
          Your RSVP is saved locally for now. We&apos;ll wire real delivery later.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setName("");
          }}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-lg space-y-6 text-left"
      noValidate
    >
      <p className="text-sm text-muted-foreground">
        Kindly reply by {wedding.rsvpDeadlineDisplay}. This form is a UI stub —
        responses stay in your browser console for now.
      </p>

      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Alex Morgan"
          className="h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11"
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Will you attend?</legend>
        <div className="grid gap-2">
          {attendanceOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm transition-colors",
                attendance === option.value
                  ? "border-primary bg-accent/50"
                  : "border-border hover:bg-muted/50",
              )}
            >
              <input
                type="radio"
                name="attendance"
                value={option.value}
                checked={attendance === option.value}
                onChange={() => setAttendance(option.value)}
                className="size-4 accent-[oklch(0.34_0.05_175)]"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of guests (including you)</Label>
        <Input
          id="guests"
          name="guests"
          type="number"
          min={1}
          max={8}
          defaultValue={1}
          className="h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="note">Note for the couple (optional)</Label>
        <Textarea
          id="note"
          name="note"
          rows={4}
          placeholder="Dietary needs, song requests, or a hello…"
        />
      </div>

      <Button type="submit" size="lg" className="h-11 w-full rounded-md">
        Send RSVP
      </Button>
    </form>
  );
}
