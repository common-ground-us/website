/**
 * search.ts
 * Client-side FlexSearch indexing over the policy database.
 * Works fully offline — data is bundled at build time.
 */

import type { Policy } from "./types";

// Lazy-loaded index
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let index: import("flexsearch").Document<any> | null = null;
let indexedPolicies: Policy[] = [];

async function getIndex() {
  if (index) return index;

  const { Document } = await import("flexsearch");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  index = new Document<any>({
    tokenize: "forward",
    cache: 100,
    document: {
      id: "id",
      index: [
        { field: "policyTitle",       tokenize: "forward", resolution: 9 },
        { field: "issueArea",         tokenize: "forward", resolution: 5 },
        { field: "briefingSummary",   tokenize: "forward", resolution: 7 },
        { field: "questionText",      tokenize: "forward", resolution: 4 },
        { field: "sourceBillsSummary", tokenize: "forward", resolution: 3 },
      ],
      store: true,
    },
  });

  // Load policies from the pre-generated JSON
  const { default: policies } = await import("../../data/policies.json");
  indexedPolicies = (policies as Policy[]).filter(
    (p) => p.natSupport !== null
  );

  for (const policy of indexedPolicies) {
    // Flatten nested fields for indexing
    const indexDoc = {
      ...policy,
      briefingSummary: policy.proscons?.briefingSummary ?? "",
      questionText: policy.surveys[0]?.questionText ?? "",
    };
    await index.addAsync(policy.id, indexDoc as unknown as Policy);
  }

  return index;
}

export async function searchPolicies(query: string): Promise<Policy[]> {
  if (!query.trim()) return indexedPolicies;

  const idx = await getIndex();
  const results = await idx.searchAsync(query, { enrich: true, limit: 50 });

  // Flatten and deduplicate results from multiple fields
  const seen = new Set<string>();
  const policies: Policy[] = [];

  for (const fieldResult of results) {
    for (const item of fieldResult.result) {
      const id = typeof item === "object" ? item.id : item;
      if (!seen.has(String(id))) {
        seen.add(String(id));
        const policy = typeof item === "object" && "doc" in item
          ? (item.doc as Policy)
          : indexedPolicies.find((p) => p.id === id);
        if (policy) policies.push(policy);
      }
    }
  }

  return policies;
}

export async function getAllPolicies(): Promise<Policy[]> {
  await getIndex(); // ensures indexedPolicies is loaded
  return indexedPolicies;
}

export async function getPolicyById(id: string): Promise<Policy | undefined> {
  await getIndex();
  return indexedPolicies.find((p) => p.id === id);
}
