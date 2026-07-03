import type { MetadataRoute } from "next";
import policiesData from "../../data/policies.json";
import type { Policy } from "@/lib/types";

export const dynamic = "force-static";

const BASE = "https://www.common-ground.us";

const policies = (policiesData as Policy[]).filter((p) => p.natSupport !== null);

// Static routes mirror src/app/**/page.tsx. Trailing slashes match
// `trailingSlash: true` canonical URLs; "" is the home page.
const staticPaths = [
  "",
  "about/",
  "about/founder/",
  "governance/",
  "governance/full/",
  "research/",
  "roadmap/",
  "get-involved/",
  "contact/",
  "privacy/",
  "terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPaths.map((path) => ({
      url: `${BASE}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...policies.map((p) => ({
      url: `${BASE}/policies/${p.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
