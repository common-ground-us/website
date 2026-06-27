"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import PolicyCard from "@/components/PolicyCard";
import type { Policy } from "@/lib/types";

/** Horizontally-scrollable tab strip with prev/next arrow buttons */
function CategoryTabs({
  categories,
  allPolicies,
  categoryFilter,
  setCategoryFilter,
}: {
  categories: string[];
  allPolicies: Policy[];
  categoryFilter: string;
  setCategoryFilter: (c: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [categories]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-stretch">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll tabs left"
        className={`shrink-0 flex items-center justify-center w-9 bg-white border-r border-[#e2e8f0] text-[#718096] hover:text-[#1a2a4a] hover:bg-[#f5f6f8] transition-all ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Scrollable tab list */}
      <div
        ref={scrollRef}
        role="tablist"
        aria-label="Filter by category"
        className="flex overflow-x-auto scrollbar-hide -mb-px flex-1 min-w-0"
      >
        <button
          role="tab"
          aria-selected={categoryFilter === ""}
          onClick={() => setCategoryFilter("")}
          className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b22234] ${
            categoryFilter === ""
              ? "border-[#b22234] text-[#b22234]"
              : "border-transparent text-[#718096] hover:text-[#1a2a4a] hover:border-[#e2e8f0]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => {
          const count = allPolicies.filter((p) => p.issueArea === cat).length;
          const isActive = categoryFilter === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategoryFilter(isActive ? "" : cat)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b22234] ${
                isActive
                  ? "border-[#b22234] text-[#b22234]"
                  : "border-transparent text-[#718096] hover:text-[#1a2a4a] hover:border-[#e2e8f0]"
              }`}
            >
              {cat}
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 tabular-nums leading-none ${
                  isActive ? "bg-[#b22234] text-white" : "bg-[#f5f6f8] text-[#718096]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll tabs right"
        className={`shrink-0 flex items-center justify-center w-9 bg-white border-l border-[#e2e8f0] text-[#718096] hover:text-[#1a2a4a] hover:bg-[#f5f6f8] transition-all ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

type SortKey =
  | "support-desc"
  | "support-asc"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "support-desc", label: "Support: High → Low" },
  { value: "support-asc",  label: "Support: Low → High" },
  { value: "name-asc",     label: "Name: A → Z" },
  { value: "name-desc",    label: "Name: Z → A" },
];

function applySorting(policies: Policy[], sort: SortKey): Policy[] {
  return [...policies].sort((a, b) => {
    switch (sort) {
      case "support-desc":
        return (b.natSupport ?? -1) - (a.natSupport ?? -1);
      case "support-asc":
        return (a.natSupport ?? 101) - (b.natSupport ?? 101);
      case "name-asc":
        return a.policyTitle.localeCompare(b.policyTitle);
      case "name-desc":
        return b.policyTitle.localeCompare(a.policyTitle);
      case "date-desc":
        return (b.surveys[0]?.date ?? "").localeCompare(a.surveys[0]?.date ?? "");
      case "date-asc":
        return (a.surveys[0]?.date ?? "").localeCompare(b.surveys[0]?.date ?? "");
      default:
        return 0;
    }
  });
}

function HomePageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "";
  const initialSort = (searchParams.get("sort") as SortKey) || "support-desc";

  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortKey, setSortKey] = useState<SortKey>(initialSort);
  const [allPolicies, setAllPolicies] = useState<Policy[]>([]);
  const [results, setResults] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);

  // Sync filter state to URL so it persists on back navigation
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (categoryFilter) params.set("category", categoryFilter);
    if (sortKey && sortKey !== "support-desc") params.set("sort", sortKey);
    const search = params.toString();
    const newUrl = search ? `/?${search}` : "/";
    window.history.replaceState(null, "", newUrl);
  }, [query, categoryFilter, sortKey]);

  // Load all policies on mount
  useEffect(() => {
    import("../../data/policies.json").then((mod) => {
      const policies = (mod.default as Policy[]).filter(
        (p) => p.natSupport !== null
      );
      setAllPolicies(policies);
      setLoading(false);
    });
  }, []);

  const categories = Array.from(
    new Set(allPolicies.map((p) => p.issueArea).filter(Boolean))
  ).sort();

  const runSearch = useCallback(
    async (q: string, cat: string, policies: Policy[]) => {
      let filtered = policies;

      if (cat) {
        filtered = filtered.filter((p) => p.issueArea === cat);
      }

      if (!q.trim()) {
        setResults(filtered);
        return;
      }

      const { searchPolicies } = await import("@/lib/search");
      const searchResults = await searchPolicies(q);
      const searchIds = new Set(searchResults.map((p) => p.id));
      setResults(filtered.filter((p) => searchIds.has(p.id)));
    },
    []
  );

  // Debounced search
  useEffect(() => {
    if (loading) return;
    const timer = setTimeout(() => {
      runSearch(query, categoryFilter, allPolicies);
    }, 250);
    return () => clearTimeout(timer);
  }, [query, categoryFilter, allPolicies, loading, runSearch]);

  const sortedResults = applySorting(results, sortKey);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero — brand line + launch carousel */}
        <section className="bg-[#1a2a4a] text-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[1.6px] font-semibold text-[#e8b8be]">
              A civic utility · Nonpartisan · Open methodology
            </p>
            <p className="font-display text-[22px] sm:text-[30px] leading-tight tracking-[-0.5px] font-extrabold mt-1.5 text-white">
              Common-Ground.US
            </p>
            <h1 className="font-display text-[15px] sm:text-[17px] leading-snug font-semibold text-[#c7cfdc] mt-0.5">
              Making Government Accountable to the Will of the People
            </h1>
            <HeroCarousel />
          </div>
        </section>

        {/* Search header */}
        <section className="bg-[#1a2a4a] text-white pt-2 pb-5 sm:pt-3 sm:pb-6">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <p className="mb-2.5 sm:mb-3 text-[15px] sm:text-[16px]">
              <span className="font-display font-bold text-white">
                Look up any policy.
              </span>{" "}
              <span className="text-[#c7cfdc]">
                Browse by area. Search by topic.
              </span>
            </p>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try &quot;tax&quot;, &quot;medicare&quot;, &quot;energy&quot;…"
                aria-label="Search policies"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-[#1a2a4a] placeholder-[#718096] text-base focus:outline-none focus:ring-2 focus:ring-[#b22234]"
              />
            </div>
          </div>
        </section>

        {/* Category tabs */}
        {!loading && (
          <div className="bg-white border-b border-[#e2e8f0] sticky top-0 z-10 shadow-sm">
            <div className="max-w-[1200px] mx-auto">
              <CategoryTabs
                categories={categories}
                allPolicies={allPolicies}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
            </div>
          </div>
        )}

        {/* Results */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          {loading ? (
            <p className="text-[#718096]">Loading policies…</p>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <p className="text-sm text-[#718096]" aria-live="polite">
                  {results.length === 0
                    ? "No policies found."
                    : `${results.length} polic${results.length === 1 ? "y" : "ies"} found`}
                  {(query || categoryFilter) && (
                    <button
                      onClick={() => {
                        setQuery("");
                        setCategoryFilter("");
                      }}
                      className="ml-3 text-[#b22234] underline hover:no-underline"
                    >
                      Clear filters
                    </button>
                  )}
                </p>
                {results.length > 1 && (
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="sort-select"
                      className="text-sm text-[#718096] whitespace-nowrap"
                    >
                      Sort by
                    </label>
                    <select
                      id="sort-select"
                      value={sortKey}
                      onChange={(e) => setSortKey(e.target.value as SortKey)}
                      className="text-sm border border-[#e2e8f0] rounded-md px-2.5 py-1.5 text-[#1a2a4a] bg-white focus:outline-none focus:ring-2 focus:ring-[#b22234] cursor-pointer"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {results.length === 0 ? (
                <div className="py-16 text-center text-[#718096]">
                  <p className="text-lg font-medium mb-2">No results found</p>
                  <p className="text-sm">Try a different search term or category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {sortedResults.map((policy) => (
                    <PolicyCard key={policy.id} policy={policy} />
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        {/* Closing band — below the lookup */}
        <section className="border-t border-[#e2e8f0] bg-[#f5f6f8]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col items-start gap-5">
            <p className="text-[#4a5568] leading-relaxed">
              The look-up tool is just the start. The full Common Ground Platform
              publishes August&nbsp;1,&nbsp;2026. The Scorecard follows in October.{" "}
              <Link
                href="/roadmap/"
                className="text-[#1a56c4] underline hover:no-underline"
              >
                See the full Product Roadmap →
              </Link>
            </p>
            <Link
              href="/get-involved/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#718096]">Loading…</div>}>
      <HomePageInner />
    </Suspense>
  );
}
