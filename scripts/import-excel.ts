#!/usr/bin/env tsx
/**
 * import-excel.ts
 * Parses "Common Ground NotebookLM Table Share.xlsx" and generates:
 *   - data/policies.json  (full policy data, 184 rows)
 *
 * Run with: npm run import-excel
 */

import ExcelJS from "exceljs";
import * as fs from "fs";
import * as path from "path";
import type { Policy } from "../src/lib/types.js";

const EXCEL_PATH = path.join(
  process.cwd(),
  "Common Ground NotebookLM Table Share.xlsx"
);
const OUTPUT_PATH = path.join(process.cwd(), "data", "policies.json");

/**
 * Parse a percentage cell — handles "72%", 0.72, 72, or empty → null
 */
function parsePercent(val: ExcelJS.CellValue): number | null {
  if (val === null || val === undefined || val === "") return null;
  if (typeof val === "number") {
    // Excel may store as decimal (0.72) or whole number (72)
    return val <= 1 ? Math.round(val * 100) : Math.round(val);
  }
  if (typeof val === "string") {
    const cleaned = val.replace("%", "").trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : (num <= 1 ? Math.round(num * 100) : Math.round(num));
  }
  return null;
}

function cellToString(val: ExcelJS.CellValue): string {
  if (val === null || val === undefined) return "";
  if (typeof val === "object" && "text" in (val as object)) {
    return String((val as { text: string }).text).trim();
  }
  return String(val).trim();
}

function slugify(name: string, index: number): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 80) || `policy-${index + 1}`
  );
}

async function main() {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.error(`\nERROR: Excel file not found at:\n  ${EXCEL_PATH}\n`);
    process.exit(1);
  }

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(EXCEL_PATH);

  const sheet = workbook.worksheets[0];
  if (!sheet) {
    console.error("ERROR: No worksheets found in the Excel file.");
    process.exit(1);
  }

  const policies: Policy[] = [];
  let skipped = 0;

  sheet.eachRow((row, rowIndex) => {
    // Skip header row
    if (rowIndex === 1) return;

    const cells = row.values as ExcelJS.CellValue[];
    // ExcelJS row.values is 1-indexed; index 0 is undefined
    const c = (i: number) => cellToString(cells[i]);
    const p = (i: number) => parsePercent(cells[i]);

    const shortName = c(1);
    if (!shortName) {
      skipped++;
      return;
    }

    const policy: Policy = {
      id: slugify(shortName, rowIndex - 2),
      shortName:             c(1),
      relevance:             c(2),
      genericCategory:       c(3),
      categoryOfIssue:       c(4),
      subCategory:           c(5),
      overallSupport:        p(6),
      republicanSupport:     p(7),
      democratSupport:       p(8),
      independentSupport:    p(9),
      manuallyChecked:       c(10),
      detailedDescription:   c(11),
      populationDescription: c(12),
      pollingMethodology:    c(13),
      marginOfError:         c(14),
      keyTakeaway:           c(15),
      dateOfReport:          c(16),
      dateOfSurvey:          c(17),
      sourceName:            c(18),
      citationInfo:          c(19),
      url:                   c(20),
      entityIssuingReport:   c(21),
    };

    policies.push(policy);
  });

  // Ensure unique IDs (handle duplicate short names)
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
  if (skipped > 0) console.log(`   (${skipped} blank rows skipped)`);
}

main().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
