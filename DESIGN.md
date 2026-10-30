# DESIGN.md — Wedding Site

Visual direction for the wedding landing. Edit freely; keep one coherent brief.

## Brand

- **Direction:** Soft stone courtyard at blue hour — cool slate mist, deep ink, a single moss accent.
- **Brand signal:** Couple names are the hero. Nothing else may overpower them.
- **Avoid:** Purple gradients, cream+terracotta AI default, newspaper broadsheet, neon glow, pill clusters, emoji.

## Typography

| Role | Font | Use |
|------|------|-----|
| Display | Fraunces | Couple names, section titles |
| Body / UI | Figtree | Supporting copy, form labels, nav |

## Color (OKLCH)

| Token | Value | Role |
|-------|-------|------|
| `--background` | `oklch(0.97 0.008 220)` | Page mist |
| `--foreground` | `oklch(0.22 0.02 250)` | Ink |
| `--primary` | `oklch(0.34 0.05 175)` | Moss CTA |
| `--primary-foreground` | `oklch(0.98 0.01 100)` | On CTA |
| `--muted` | `oklch(0.93 0.01 220)` | Soft panels |
| `--accent` | `oklch(0.88 0.03 175)` | Soft moss wash |
| `--ring` | `oklch(0.45 0.05 175)` | Focus |

Hero text sits on the photo: off-white ink with soft shadow for contrast.

## Composition rules

1. First viewport = one composition: names, one line of date/venue, one CTA group, full-bleed photo.
2. No cards in the hero. No overlay chips/badges.
3. RSVP is its own section below the fold — one job, one headline.
4. Motion: name fade-up, soft hero ken-burns, CTA underline grow — restrained only.

## Editable copy

All couple/date/venue strings live in `lib/wedding.ts`.
