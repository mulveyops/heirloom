# Heirloom Studio

Static marketing site for Heirloom Studio (Milwaukee hair salon), built with Vite + React + Tailwind.
Content is editable by non-developers through [Pages CMS](https://pagescms.org) — no database.

## How content editing works

All salon-editable text lives in JSON files under [`client/src/content/`](client/src/content),
and photos live in [`client/public/images/`](client/public/images). The [`.pages.yml`](.pages.yml)
file tells Pages CMS how to present those files as friendly editing forms.

Flow: edit in Pages CMS → it commits to this GitHub repo → Render auto-deploys the change
(live a minute or two later). Every edit is a git commit, so anything can be rolled back.

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/public
npm run preview    # preview the production build
npm run check      # typecheck
```

## Hosting (Render Static Site)

This repo no longer has a server — deploy it as a Render **Static Site** (free), not a Web Service:

1. Render dashboard → **New → Static Site** → connect this GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist/public`
4. Under **Redirects/Rewrites**, add a rewrite: source `/*` → destination `/index.html` (SPA fallback).
5. Once the static site is live, point the domain at it and delete the old Web Service.

Auto-deploy on push is on by default, which is what lets CMS edits go live automatically.

## Pages CMS setup (one time)

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with the GitHub account that owns this repo.
2. Open the `heirloom` repo — the `.pages.yml` config is picked up automatically.
3. In the CMS **Settings → Collaborators**, invite the salon by email so they can log in
   without a GitHub account.

Editors will see sections for Salon Info, Welcome Banner, About, Stylists, Instagram, Contact,
Join Our Team, and Shop, plus a Media area for uploading photos.
