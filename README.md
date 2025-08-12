# Soufflé Test Kitchen 02 — Single-Company Edition

**Purpose:** Drop in *one* company at a time, fill the criteria (KPIs + 5 metrics), get a computed **Direction**, and export a 16:9 one-pager. No client library. No storage.

**Files**
- `index.html` — single-company UI, Apply button, PNG/PDF export
- `vercel.json` — no-cache headers for iteration

## Deploy (GitHub → Vercel)
1. Create/Use your repo. In GitHub → **Add file → Upload files** → drag **index.html** and **vercel.json** into the repo **root**. Commit.
2. In Vercel, import the repo (Framework: **Other**; Build Command: *(blank)*; Output Dir: *(blank)*). Deploy.
3. Hard refresh the URL (Cmd+Shift+R / Ctrl+F5).

## Use
- Optional: pick a **Preset** (Blank / Tennant sample / Redmond placeholder).
- Enter **Company**, **Logo URL or Upload**, and **About**.
- Set headline **KPIs** and the **5 metrics**.
- Click **Apply** → Direction + charts update.
- Export PNG/PDF from the toolbar.

_Last updated: 2025-08-12T20:50_
