#!/usr/bin/env tsx
/**
 * import-excel.ts
 * Parses "CGOAP_PolicyDatabase_v5.xlsx" (5 sheets) and generates:
 *   - data/policies.json  (full policy data with nested surveys, polls, legislation, pros/cons)
 *
 * Run with: npm run import-excel
 */

import ExcelJS from "exceljs";
import * as fs from "fs";
import * as path from "path";
import type { Policy, SurveyResult, ExternalPoll, Legislation, ProsCons } from "../src/lib/types.js";

const EXCEL_PATH = path.join(
  process.cwd(),
  "CGOAP_PolicyDatabase_v5.xlsx"
);
const OUTPUT_PATH = path.join(process.cwd(), "data", "policies.json");

/**
 * Parse a percentage cell — handles "72%", 0.72, 72, or empty → null
 */
function parsePercent(val: ExcelJS.CellValue): number | null {
  if (val === null || val === undefined || val === "") return null;
  if (typeof val === "number") {
    return val <= 1 && val > 0 ? Math.round(val * 100) : Math.round(val);
  }
  if (typeof val === "string") {
    const cleaned = val.replace("%", "").trim();
    const num = parseFloat(cleaned);
    if (isNaN(num)) return null;
    return num <= 1 && num > 0 ? Math.round(num * 100) : Math.round(num);
  }
  return null;
}

function cellToString(val: ExcelJS.CellValue): string {
  if (val === null || val === undefined) return "";
  if (typeof val === "object" && "text" in (val as object)) {
    return String((val as { text: string }).text).trim();
  }
  if (typeof val === "object" && "richText" in (val as object)) {
    const rt = val as { richText: Array<{ text: string }> };
    return rt.richText.map(r => r.text).join("").trim();
  }
  return String(val).trim();
}

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 80) || "policy"
  );
}

/** Normalize key for matching across sheets */
function makeKey(issueArea: string, policyTitle: string): string {
  return `${issueArea.toLowerCase().trim()}|||${policyTitle.toLowerCase().trim()}`;
}

function parseBool(val: ExcelJS.CellValue): boolean {
  const s = cellToString(val).toUpperCase();
  return s === "YES" || s === "TRUE" || s === "1";
}

async function main() {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.error(`\nERROR: Excel file not found at:\n  ${EXCEL_PATH}\n`);
    process.exit(1);
  }

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(EXCEL_PATH);

  // --- Sheet 1: Policy Index ---
  const indexSheet = workbook.getWorksheet("Policy Index");
  if (!indexSheet) {
    console.error("ERROR: 'Policy Index' sheet not found.");
    process.exit(1);
  }

  const policyMap = new Map<string, Policy>();
  const orderedKeys: string[] = [];

  indexSheet.eachRow((row, rowIndex) => {
    if (rowIndex === 1) return; // skip header

    const cells = row.values as ExcelJS.CellValue[];
    const c = (i: number) => cellToString(cells[i]);
    const p = (i: number) => parsePercent(cells[i]);

    const issueArea = c(2);
    const policyTitle = c(3);
    if (!policyTitle) return;

    const key = makeKey(issueArea, policyTitle);
    const id = slugify(policyTitle);

    const policy: Policy = {
      id,
      issueArea,
      policyTitle,
      natSupport: p(4),
      repSupport: p(5),
      demSupport: p(6),
      gap: p(7),
      bothAbove67: parseBool(cells[8]),
      hasDeliberative: parseBool(cells[9]),
      hasProscons: parseBool(cells[10]),
      sourceBillsSummary: c(11),
      surveys: [],
      externalPolls: [],
      legislation: [],
      proscons: null,
    };

    policyMap.set(key, policy);
    orderedKeys.push(key);
  });

  console.log(`  Policy Index: ${policyMap.size} policies`);

  // --- Sheet 2: Survey Results ---
  const surveySheet = workbook.getWorksheet("Survey Results");
  if (surveySheet) {
    let matched = 0;
    surveySheet.eachRow((row, rowIndex) => {
      if (rowIndex === 1) return;
      const cells = row.values as ExcelJS.CellValue[];
      const c = (i: number) => cellToString(cells[i]);
      const p = (i: number) => parsePercent(cells[i]);

      const key = makeKey(c(1), c(2));
      const policy = policyMap.get(key);
      if (!policy) return;

      const survey: SurveyResult = {
        surveyType: c(3),
        org: c(4),
        date: c(5),
        subLabel: c(6),
        questionText: c(7),
        natPercent: p(8),
        repPercent: p(9),
        demPercent: p(10),
        gap: p(11),
        metric: c(12),
        metricNote: c(13),
      };
      policy.surveys.push(survey);
      matched++;
    });
    console.log(`  Survey Results: ${matched} rows matched`);
  }

  // --- Sheet 3: External Polling ---
  const pollingSheet = workbook.getWorksheet("External Polling");
  if (pollingSheet) {
    let matched = 0;
    pollingSheet.eachRow((row, rowIndex) => {
      if (rowIndex === 1) return;
      const cells = row.values as ExcelJS.CellValue[];
      const c = (i: number) => cellToString(cells[i]);
      const p = (i: number) => parsePercent(cells[i]);

      const key = makeKey(c(1), c(2));
      const policy = policyMap.get(key);
      if (!policy) return;

      const poll: ExternalPoll = {
        pollOrg: c(3),
        date: c(4),
        question: c(5),
        natPercent: p(6),
        repPercent: p(7),
        demPercent: p(8),
        gap: p(9),
        metric: c(10),
      };
      policy.externalPolls.push(poll);
      matched++;
    });
    console.log(`  External Polling: ${matched} rows matched`);
  }

  // --- Sheet 4: Source Legislation ---
  const legSheet = workbook.getWorksheet("Source Legislation");
  if (legSheet) {
    let matched = 0;
    legSheet.eachRow((row, rowIndex) => {
      if (rowIndex === 1) return;
      const cells = row.values as ExcelJS.CellValue[];
      const c = (i: number) => cellToString(cells[i]);

      const key = makeKey(c(1), c(2));
      const policy = policyMap.get(key);
      if (!policy) return;

      const billOrSource = c(3);
      if (billOrSource) {
        policy.legislation.push({ billOrSource });
        matched++;
      }
    });
    console.log(`  Source Legislation: ${matched} rows matched`);
  }

  // --- Sheet 5: Pros & Cons ---
  const prosConsSheet = workbook.getWorksheet("Pros & Cons");
  if (prosConsSheet) {
    let matched = 0;
    prosConsSheet.eachRow((row, rowIndex) => {
      if (rowIndex === 1) return;
      const cells = row.values as ExcelJS.CellValue[];
      const c = (i: number) => cellToString(cells[i]);

      const key = makeKey(c(1), c(2));
      const policy = policyMap.get(key);
      if (!policy) return;

      const proscons: ProsCons = {
        briefingSummary: c(3),
        proArgument: c(4),
        conArgument: c(5),
        sourcePdf: c(6),
      };
      policy.proscons = proscons;
      matched++;
    });
    console.log(`  Pros & Cons: ${matched} rows matched`);
  }

  // Build ordered array and ensure unique IDs
  const policies: Policy[] = orderedKeys
    .map((key) => policyMap.get(key)!)
    .filter(Boolean);

  const idCount: Record<string, number> = {};
  for (const policy of policies) {
    idCount[policy.id] = (idCount[policy.id] ?? 0) + 1;
  }
  const idSeen: Record<string, number> = {};
  for (const policy of policies) {
    if (idCount[policy.id] > 1) {
      idSeen[policy.id] = (idSeen[policy.id] ?? 0) + 1;
      policy.id = `${policy.id}-${idSeen[policy.id]}`;
    }
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(policies, null, 2), "utf-8");

  console.log(`\n✅ Imported ${policies.length} policies → ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
