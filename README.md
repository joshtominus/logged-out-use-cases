# Zapier Use Case Hierarchy — Org Chart

Hierarchical structure and interactive org chart for Zapier’s use case pages: **Role (sector) → Solution → Use Case → Automations**. Aligned to Zapier-relevant roles and solution categories only.

## Hierarchy

- **Role (sector, top level)** — 45 roles (e.g. Marketing, Sales, RevOps, Customer Support, HR, IT, Finance, Operations, Legal, Product, Design, Executive Assistants, Executives, Customer Success, Recruiting / Talent Acquisition, Procurement, Security, Data & Analytics, Engineering, DevOps, PMO, Vendor Management, Contract Management, Personal Productivity, etc.).
- **Solution** — From a set of 57 solution categories (e.g. CRM Management Automation, Email Marketing Automation, Lead Management Automation, Support Management Automation, Project Management Automation).
- **Use case** — Multiple use cases per solution (e.g. Lead Capture, Drip Campaigns, Ticket Creation).
- **Automations** — Concrete automations (Zaps, workflows) per use case; not drawn as nodes but shown as a count on use case nodes.

Example: **Marketing** → **Email Marketing Automation** → **Drip Campaigns** (with many automations underneath).

## What’s in this repo

- **`data/hierarchy-seed.js`** — Single source of truth: all roles with solutions and use cases. Solutions are drawn from the 57 solution categories; use cases are Zapier-relevant.
- **`data/solution-use-cases.js`** — Reusable use-case lists for each solution type (referenced by the seed).
- **`data/keywords-zapier.js`** — Zapier-relevant automation keywords from keyword research (excludes non–workflow terms e.g. DIY home automation).
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

- The page builds the full tree in the browser from the seed (45 roles, each with several solutions from the 57 categories and multiple use cases → **thousands of nodes**). Solutions and use cases are aligned to Zapier workflow/app-integration use cases.
- For very large “Expand all” views, layout and rendering may take a few seconds; use the level toggles to keep the visible set smaller when exploring.

## Optional: build `hierarchy.json`

To generate **`data/hierarchy.json`** (e.g. for other scripts or tooling):

```bash
node scripts/build-hierarchy.js
```

This reads **`data/hierarchy-seed.js`** and writes the full hierarchy to **`data/hierarchy.json`**.
