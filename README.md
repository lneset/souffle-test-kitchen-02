
# Soufflé Test Kitchen 02 (MVP)

Static HTML prototype for the brand-facing market analysis dashboard.

## Deploy (Vercel via GitHub)
1. Create a new public repo on GitHub (e.g., `souffle-test-kitchen-02`).
2. Upload these files (index.html, vercel.json, README.md) to the repo root.
3. In Vercel, click "New Project" → "Import Git Repository" → select the repo.
4. Framework Preset: **Other**
5. Root directory: `/` (repo root)
6. Build Command: *(leave blank)*
7. Output Directory: `/` (defaults to repo root for static sites)
8. Deploy.

## Notes
- Uses Chart.js from CDN; no build step required.
- You can place any assets in `/public` and link them relatively (e.g., `/public/img.png`).
- To add routes without `.html`, `cleanUrls` is enabled via `vercel.json`.
