import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/lib/ServiceWorkerRegistration";
import policiesData from "../../data/policies.json";
import type { Policy } from "@/lib/types";

const allPolicies = (policiesData as Policy[]).filter(
  (p) => p.overallSupport !== null && p.id !== "short-name"
);
const totalCount = allPolicies.length;
const supermajorityCount = allPolicies.filter(
  (p) => (p.overallSupport ?? 0) >= 60
).length;
const bipartisanCount = allPolicies.filter(
  (p) =>
    (p.republicanSupport ?? 0) >= 50 && (p.democratSupport ?? 0) >= 50
).length;

// Top 6 policies by overall support for the featured section
const topPolicies = [...allPolicies]
  .sort((a, b) => (b.overallSupport ?? 0) - (a.overallSupport ?? 0))
  .slice(0, 6);

export default function Home() {
  const categories = Array.from(
    allPolicies.reduce((acc, p) => {
      if (p.genericCategory)
        acc.set(p.genericCategory, (acc.get(p.genericCategory) ?? 0) + 1);
      return acc;
    }, new Map<string, number>())
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ServiceWorkerRegistration />
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero with background image */}
        <section className="relative">
          {/* Background image */}
          <img
            src="/images/hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />

          {/* Content */}
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1a2a4a] leading-tight max-w-2xl mx-auto">
              Americans agree on more than you think.
            </h1>
            <p className="mt-4 text-[#4a5568] text-base sm:text-lg max-w-xl mx-auto">
              Peer-reviewed polling on {totalCount} federal policies shows broad
              consensus — across party lines.
            </p>

            {/* Inline stats row */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                { n: totalCount, label: "Policies" },
                { n: supermajorityCount, label: "≥60% Support" },
                { n: bipartisanCount, label: "Bipartisan" },
              ].map(({ n, label }) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a2a4a] tabular-nums">
                    {n}
                  </span>
                  <span className="text-[#718096] text-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* Search CTA */}
            <div className="mt-8 max-w-md mx-auto">
              <Link
                href="/search/"
                className="flex items-center gap-3 w-full bg-white rounded-lg px-4 py-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#718096] shrink-0"
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
                <span className="text-[#718096] text-base text-left flex-1">
                  Search policies…
                </span>
                <span className="text-[#b22234] font-semibold text-sm shrink-0">
                  Browse All →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Top Policies */}
        <section className="py-10 sm:py-14">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#1a2a4a]">
                Highest Agreement
              </h2>
              <Link
                href="/search/"
                className="text-sm text-[#b22234] font-medium hover:underline"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topPolicies.map((p) => (
                <Link
                  key={p.id}
                  href={`/policies/${p.id}/`}
                  className="group border border-[#e2e8f0] rounded-xl p-4 hover:border-[#1a2a4a] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#718096] mb-1">
                        {p.genericCategory}
                      </p>
                      <p className="font-semibold text-[#1a2a4a] text-sm leading-snug group-hover:text-[#b22234] transition-colors line-clamp-2">
                        {p.shortName}
                      </p>
                    </div>
                    <span className="shrink-0 bg-[#ecfdf5] text-[#065f46] text-sm font-bold px-2 py-0.5 rounded">
                      {p.overallSupport}%
                    </span>
                  </div>
                  {/* Party bars */}
                  <div className="mt-3 flex gap-2 text-xs">
                    {p.republicanSupport !== null && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#e91d1d]" />
                        <span className="text-[#718096]">{p.republicanSupport}%</span>
                      </span>
                    )}
                    {p.democratSupport !== null && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#1a56c4]" />
                        <span className="text-[#718096]">{p.democratSupport}%</span>
                      </span>
                    )}
                    {p.independentSupport !== null && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                        <span className="text-[#718096]">{p.independentSupport}%</span>
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-[#f8f9fa] py-10 sm:py-12 border-t border-[#e2e8f0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#1a2a4a] mb-6 text-center">
              Explore by Topic
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map(([category, count]) => (
                <Link
                  key={category}
                  href={`/search/?category=${encodeURIComponent(category)}`}
                  className="flex items-center justify-between gap-2 bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 hover:border-[#1a2a4a] hover:shadow-sm transition-all group"
                >
                  <span className="font-medium text-sm text-[#1a2a4a] group-hover:text-[#b22234] transition-colors truncate">
                    {category}
                  </span>
                  <span className="text-xs text-[#718096] tabular-nums shrink-0">
                    {count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="py-10 sm:py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#1a2a4a] mb-2">
                All-volunteer. Nonpartisan. Open source.
              </h2>
              <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed max-w-lg">
                Common Ground curates peer-reviewed research on where Americans
                actually agree — regardless of party. Every source is cited,
                every methodology documented.
              </p>
            </div>
            <Link
              href="/about/"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#1a2a4a] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#2a3f6e] transition-colors"
            >
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
