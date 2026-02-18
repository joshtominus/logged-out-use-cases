#!/usr/bin/env node
/**
 * Builds full hierarchy JSON from hierarchy-seed.js (all sectors have full solutions + use cases).
 * Output: data/hierarchy.json (Sector → Solution → Use Case; automations implied under use cases)
 */

const fs = require("fs");
const path = require("path");

const { hierarchySeed } = require(path.join(__dirname, "../data/hierarchy-seed.js"));

function sectorToNode(sector) {
  return {
    name: sector.name,
    level: "sector",
    children: (sector.solutions || []).map((sol) => ({
      name: sol.name,
      level: "solution",
      children: (sol.useCases || []).map((uc) => ({
        name: uc,
        level: "useCase",
        automationCount: 5 + Math.floor(Math.random() * 25),
        children: [],
      })),
    })),
  };
}

function buildRoot() {
  return {
    name: "Zapier Use Cases",
    level: "root",
    children: (hierarchySeed.sectors || []).map(sectorToNode),
  };
}

const root = buildRoot();

function countNodes(n) {
  let c = 1;
  if (n.children && n.children.length) {
    n.children.forEach((ch) => (c += countNodes(ch)));
  }
  return c;
}

const outPath = path.join(__dirname, "../data/hierarchy.json");
// Compact one-line JSON for large trees
const json = JSON.stringify(root);
fs.writeFileSync(outPath, json, "utf8");

const total = countNodes(root);
console.log("Wrote", outPath);
console.log("Total nodes:", total);
