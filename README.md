# Soufflé Test Kitchen — Figma Shell

**Goal:** Roll back to the original working MVP while starting from your Figma mock.
This shell shows a **Figma Mock** tab (paste your Figma *embed* URL) and an **MVP Dashboard** tab (kept as-is).

## How to Use
1. Upload these files to your GitHub repo root (alongside `index.html`).
2. Visit your site → click **Figma Mock** → paste the **Embed** URL from Figma (File → Share → Embed) → **Load**.
3. The URL is saved in your browser (localStorage).

## File Notes
- `index-figma.html` is the shell; you can set it as the default route by renaming it to `index.html` **after** you verify it.
- The **MVP Dashboard** tab currently iframes `/index.html` (your working MVP). Keep or remove later.

## Make this the home page
Option A: Rename `index-figma.html` → `index.html` (and rename the old one to `dashboard.html`). Update the iframe src accordingly.
Option B: Add a redirect in `vercel.json` from `/` to `/index-figma.html`.

