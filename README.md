
# Soufflé Test Kitchen 02 — Figma‑Style One‑Pager (MVP)

This version adds three things:
1) **Company branding inputs** — paste a logo URL or upload an image, set company name, and write an About blurb.
2) **Editable headline metrics** — Market Size, White Space Segments, Data Confidence, Time to Market.
3) **Export a 16:9 one‑pager** — Download as PNG or PDF (exact 1920×1080).

No build step. Pure static site.

## Deploy (GitHub → Vercel)
1. Create/Use your existing repo, upload these files to the repo root:
   - `index.html`
   - `vercel.json`
   - `README.md`
2. In Vercel → New Project → Import Git Repository → Framework: **Other** → Build Command: *(blank)* → Output Dir: *(blank)* → Deploy.

## Use
- Open the site → Fill in the controls (name, logo URL or upload, About, metrics).
- Click **Apply** to update the one‑pager preview.
- Click **Download One‑Pager (PNG/PDF)**.
- Tip: If the logo is from an external URL, prefer HTTPS and CORS‑friendly hosts for best export results.

## Notes
- Charts are rendered client‑side with Chart.js (CDN). Exports use `html2canvas` + `jsPDF`.
- If a CDN is blocked in a network, redeploy from another network or swap CDNs.
