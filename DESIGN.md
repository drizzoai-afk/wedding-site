# DESIGN.md — Daniele & Andrea

Confirmed brief + **acquerello** direction (2026-10-30).

## Brand

- **Names first:** Daniele & Andrea — hero-level signal
- **Direction:** Mediterranean × wabi-sabi × **acquerello** (watercolor invitation)
- **Accent:** muted Masseria Spina reds (`#6F3E39` → `oklch(0.42 0.09 28)`, coral wash `#CD634D` softened)
- **Avoid:** cartoon watercolor filters, purple AI gradients, cream+terracotta cliché stack, busy ornament, dark-mode default

## Acquerello craft

| Device | How |
|--------|-----|
| Soft washes | Fixed radial washes on `body`; section `.wash-section` gradients |
| Paper grain | SVG fractal noise `.watercolor-grain` at low opacity, multiply |
| Bleed edges | Organic `border-radius` frames (`.bleed-frame`); hero vignette `.watercolor-bleed` |
| Calm | Large air, soft asymmetry, few type sizes |

## Typography

| Role | Font |
|------|------|
| Display | Cormorant Garamond |
| Body / UI | Figtree |

## Imagery

| Asset | Path | Rights |
|-------|------|--------|
| Masseria venue | `/public/masseria-spina.jpg` | Wikimedia Commons **CC BY-SA 3.0**, Marco Spina — attribution on page. Official resort photos **not** copied. |
| Couple / China | `/public/placeholders/*.svg` | Local placeholders — Daniele replaces |

## Editable facts

`lib/wedding.ts` — names, venue, WhatsApp, IBAN placeholder, image meta.  
Strings: `lib/i18n/messages.ts` (IT default + EN).
