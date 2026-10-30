# Daniele & Andrea — wedding site

Invitation site for **Daniele & Andrea** · Tuesday 31 August 2027 · Masseria Spina Resort, Monopoli.

Stack: **Next.js 16** · **TypeScript** · **Tailwind CSS v4** · **shadcn/ui**

## Edit content

| What | Where |
|------|--------|
| Names, date, venue, WhatsApp, IBAN, images | [`lib/wedding.ts`](./lib/wedding.ts) |
| IT / EN copy | [`lib/i18n/messages.ts`](./lib/i18n/messages.ts) |
| Visual brief | [`DESIGN.md`](./DESIGN.md) |
| Photo rights | [`public/IMAGE-ATTRIBUTION.md`](./public/IMAGE-ATTRIBUTION.md) |

Italian is the default language; use the **IT / EN** toggle in the header or footer.

## Run locally

```bash
pnpm install
pnpm dev
```

Dev server: **http://127.0.0.1:3847**

```bash
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

## Venue photo

`public/masseria-spina.jpg` is a **CC BY-SA 3.0** Wikimedia Commons photograph (Marco Spina). Official Masseria Spina marketing images were not reused. See attribution file for replacement notes.

## RSVP

Form is a local stub (browser console). No auth/database yet.
