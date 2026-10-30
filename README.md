# Wedding site

First usable slice: brand-first landing/hero + local RSVP form stub (no auth/database).

Stack: **Next.js 16** · **TypeScript** · **Tailwind CSS v4** · **shadcn/ui** (Base UI / nova).

## Edit wedding details

Update placeholders in [`lib/wedding.ts`](./lib/wedding.ts):

- Couple names (`partnerOne`, `partnerTwo`)
- Date (`dateDisplay`, `dateISO`)
- Venue (`venueName`, `venueCity`)
- Hero image (`public/hero.jpg` + `heroImage` fields)
- RSVP deadline copy

Visual tokens live in [`DESIGN.md`](./DESIGN.md).

## Run locally

Requirements: Node 20.9+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Dev server defaults to an uncommon port:

```text
http://127.0.0.1:3847
```

Other scripts:

```bash
pnpm lint
pnpm test
pnpm build
pnpm start   # production server after build (also port 3847)
```

## RSVP stub

The RSVP form validates required fields in the browser and logs a mock payload to the console. Nothing is persisted yet.

## Sources

- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [shadcn/ui Next.js](https://ui.shadcn.com/docs/installation/next)
