#!/usr/bin/env node
/**
 * Builds full hierarchy JSON from hierarchy-seed.js (all roles have full solutions + use cases).
 * Output: data/hierarchy.json (Role → Solution → Use Case; automations implied under use cases)
 */

const fs = require("fs");
const path = require("path");

const { hierarchySeed } = require(path.join(__dirname, "../data/hierarchy-seed.js"));

function roleToNode(role) {
  return {
    name: role.name,
    level: "role",
    children: (role.solutions || []).map((sol) => ({
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
    children: (hierarchySeed.roles || []).map(roleToNode),
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
