# Zapier Use Case Hierarchy — Org Chart

Hierarchical structure and interactive org chart for Zapier’s use case pages: **Sector → Solution → Use Case → Automations**.

## Hierarchy

- **Sector (top level)** — ~50 industries / business functions (e.g. Marketing, Sales, HR, RevOps, E‑commerce).
- **Solution** — ~10+ solutions per sector (e.g. SEO, Lead Management, Employee Onboarding).
- **Use case** — ~10+ use cases per solution (e.g. Keyword Research, Lead Capture).
- **Automations** — Many concrete automations (Zaps, workflows) per use case; not drawn as nodes but shown as a count on use case nodes.

Example: **Marketing** → **SEO** → **Keyword Research** (with many automations underneath).

## What’s in this repo

- **`data/hierarchy-seed.js`** — Single source of truth: all ~50 sectors with full solution and use case names (no generic templates). Same quality as Marketing across every sector.
- **`index.html`** — Single-page org chart: builds the full tree from the seed and renders an interactive D3 tree.
- **`scripts/build-hierarchy.js`** — Optional Node script to export the full hierarchy to **`data/hierarchy.json`** (e.g. for other tools or static export).

## Running the org chart

1. **From the project folder**, serve the directory over HTTP (needed so `data/*.js` load correctly):
   ```bash
   npx serve .
   # or: python3 -m http.server 8000
   ```
2. Open **http://localhost:3000** (or the port shown) and open **index.html** or the root URL.

## Org chart behavior

- **Zoom** — Mouse wheel or pinch.
- **Pan** — Drag the background.
- **Expand / collapse** — Click a node to show or hide its children.
- **Toggles**
  - **Sectors only** — Only top-level sectors visible.
  - **+ Solutions** — Sectors and solutions visible; use cases collapsed.
  - **+ Use cases** — Full tree expanded.
  - **Expand all** / **Collapse all** — Expand or collapse every node.
- **Tooltips** — Hover a node to see level, name, and (for use cases) approximate automation count.
- **Stats** — Bottom-left shows visible vs total nodes.

## Scaling

- The page builds the full tree in the browser from the seed (~50 sectors, each with 10–12 solutions and 10–12 specific use cases → **thousands of nodes**). All names are hand-crafted; no generic “X Sync / X Tracking” templates.
- For very large “Expand all” views, layout and rendering may take a few seconds; use the level toggles to keep the visible set smaller when exploring.

## Optional: build `hierarchy.json`

To generate **`data/hierarchy.json`** (e.g. for other scripts or tooling):

```bash
node scripts/build-hierarchy.js
```

This reads **`data/hierarchy-seed.js`** and writes the full hierarchy to **`data/hierarchy.json`**.
