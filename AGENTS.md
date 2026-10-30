# AGENTS.md — Wedding site

## Product

Invitation site for **Daniele & Andrea** (IT default + EN). Spec brief lives in the Project store `docs/wedding-brief.md`.

## Design rules (Cursor)

This repo includes the **lean Next.js** profile from [spencergoldade/cursor-designer](https://github.com/spencergoldade/cursor-designer):

- Always-on: `.cursor/rules/core/*`
- Auto-attached TSX: `.cursor/rules/frontend/*` (`app/**/*.tsx`, `components/**/*.tsx`)
- Tokens: `design/tokens/{colors,typography,spacing}.md`
- Profile note: `.cursor/rules/PROFILE.md`

Visual canon: `DESIGN.md` (style10 Mediterranean + acquerello + Masseria terracotta).

## Stack

Next.js 16 · TypeScript · Tailwind v4 · shadcn/ui · pnpm

## Do

- Keep Masseria photo **hero-only**
- Keep IT/EN dictionaries in sync (`lib/i18n/messages.ts`)
- Document image licenses in `public/IMAGE-ATTRIBUTION.md`
- Prefer source-driven package/API choices; no secrets in git

## Don’t

- Don’t scrape copyrighted venue marketing photos without permission
- Don’t invent couple/IBAN facts — placeholders only until human provides them


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
