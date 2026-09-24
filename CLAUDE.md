# CLAUDE.md — Heirloom Studio site

Context for Claude (or any developer) picking up this project.

## What this is

Marketing site for Heirloom Studio, a hair salon in Milwaukee (client of Steven /
mulveyops). Single-page Vite + React + Tailwind + shadcn/ui site, **pure static**
— there is no server and no database, deliberately. It was originally a
Replit-generated Express + Vite app; the server was removed in Sept 2026 because
it had zero routes.

## How content editing works (the core design)

The salon owner is **extremely non-technical**. She edits the site through
[Pages CMS](https://app.pagescms.org) (free hosted service, signed in via the
repo owner's GitHub; she's invited as a collaborator by email):

1. All salon-editable text lives in JSON files in `client/src/content/`
   (`site.json` = shared info/links used across sections; plus one file per
   section: hero, about, stylists, instagram, contact, join, shop).
2. Photos live in `client/public/images/`, referenced as `/images/<file>`.
3. `.pages.yml` (repo root) defines the CMS editing forms. Field names there
   must match the JSON keys and stay salon-friendly (plain-language labels).
4. She saves → Pages CMS commits to `main` → Render auto-deploys → live in
   ~2 minutes. Every edit is a git commit; rollback = revert.

Components import the JSON directly (`import site from "@/content/site.json"`).

## Hard rules — do not break these

- **No database, no server.** Any new feature must work as static files + git.
- **CMS-sourced fields are optional at runtime.** The owner saves half-filled
  entries. A missing field must render as "omitted," never crash. (A stylist
  entry without `specialties` once white-screened the whole site — that's why
  `Stylists.tsx` types every field optional and guards each render. Follow
  that pattern for anything new that reads content JSON.)
- **No image compression/optimization.** Steven explicitly chose maximum image
  quality over page speed. Serve uploads byte-for-byte.
- **Image filenames need lowercase extensions.** Pages CMS rejects `.JPG`
  (case-sensitive validation). Repo filenames were normalized once already.
- If you change content JSON structure, update `.pages.yml` to match (and vice
  versa), and keep existing CMS-entered data valid.

## Known gotchas

- Pages CMS uploads cap at roughly **4MB** (its API returns 413). Guidance
  given to the client: photos as high-quality JPG a few MB each, not PNG.
  Bigger files can be added via GitHub's web upload (≤25MB) or git.
- `@replit/vite-plugin-shadcn-theme-json` + `theme.json` are still used by the
  build (they generate theme CSS). Keep them even though Replit is gone.
- Many `client/src/components/ui/` files are unused shadcn boilerplate; they're
  kept (with their deps) so `tsc` passes. Prune only with care.

## Commands

```
npm install
npm run dev        # dev server (vite, port 5173)
npm run build      # → dist/public
npm run preview    # serve the production build
npm run check      # typecheck (Render does NOT run this — run it yourself)
```

Note: Render only runs `vite build`, which doesn't typecheck. Always run
`npm run check` before pushing.

## Hosting / deployment state (as of 2026-09-24)

- Host: **Render Static Site** — build `npm run build`, publish `dist/public`,
  rewrite rule `/*` → `/index.html`. Auto-deploys on push to `main`.
- Migration in progress from the old Render **Web Service** (whose deploys now
  fail — expected, the server is gone; delete it once cutover is done).
- Domain is registered at **Namecheap**. Cutover plan: add the custom domain to
  the Static Site in Render, keep the apex A record (Render shared IP), update
  the `www` CNAME to the new site's `.onrender.com` host if Render flags it.

## Open items

- Confirm Static Site + domain cutover is complete; then delete old Web Service.
- A test stylist entry ("Steven / IT Guy") and `test image.png` may still be in
  the content — delete via Pages CMS when done testing.
- Promised deliverable: a **one-page cheat sheet** for the salon owner ("how to
  update your website": login link, edit/save/wait-2-minutes, photos as JPG).
- Discussed but deliberately **not** built (Steven declined for now): CMS
  design controls. If revisited, the recommended first step is per-section
  show/hide boolean toggles; curated accent-color and font-pairing dropdowns
  are the acceptable ceiling. Free-form design control is out of scope.
