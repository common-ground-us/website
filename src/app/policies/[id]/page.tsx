import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import Collapsible from "@/components/ui/Collapsible";
import policiesData from "../../../../data/policies.json";
import type { Policy } from "@/lib/types";

const allPolicies = (policiesData as Policy[]).filter(
  (p) => p.natSupport !== null
);

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allPolicies.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const policy = allPolicies.find((p) => p.id === id);
  if (!policy) return {};
  return {
    title: policy.policyTitle,
    description: policy.proscons?.briefingSummary?.slice(0, 160) || policy.surveys[0]?.questionText?.slice(0, 160),
    openGraph: {
      title: `${policy.policyTitle} | Common Ground`,
      description: policy.proscons?.briefingSummary?.slice(0, 160) || undefined,
    },
  };
}

function SupportMeter({
  label,
  value,
  color,
  bgColor,
}: {
  label: string;
  value: number | null;
  color: string;
  bgColor: string;
}) {
  if (value === null) return null;
  return (
    <div
      className="flex flex-col items-center rounded-xl p-4 text-center"
      style={{ backgroundColor: bgColor }}
    >
      <span className="text-3xl font-bold tabular-nums" style={{ color }}>
        {value}%
      </span>
      <span className="text-xs text-[#4a5568] mt-1 font-medium">{label}</span>
    </div>
  );
}

export default async function PolicyPage({ params }: Props) {
  const { id } = await params;
  const policy = allPolicies.find((p) => p.id === id);
  if (!policy) notFound();

  // Related policies: same issue area, different id, max 4
  const related = allPolicies
    .filter(
      (p) =>
        p.id !== policy.id &&
        p.issueArea === policy.issueArea
    )
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#f5f6f8] border-b border-[#e2e8f0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-sm text-[#718096] flex items-center justify-between">
            <BackButton />
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 list-none m-0 p-0">
                <li>
                  <Link href="/" className="hover:text-[#1a2a4a] hover:underline transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/" className="hover:text-[#1a2a4a] hover:underline transition-colors">
                    Policies
                  </Link>
                </li>
                {policy.issueArea && (
                  <>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link
                        href={`/?category=${encodeURIComponent(policy.issueArea)}`}
                        className="hover:text-[#1a2a4a] hover:underline transition-colors"
                      >
                        {policy.issueArea}
                      </Link>
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
        </div>

        {/* Policy hero */}
        <section className="bg-white border-b border-[#e2e8f0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {policy.issueArea && (
                  <Link
                    href={`/?category=${encodeURIComponent(policy.issueArea)}`}
                    className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-[#f5f6f8] text-[#4a5568] hover:bg-[#e2e8f0] hover:text-[#1a2a4a] transition-colors leading-none"
                  >
                    {policy.issueArea}
                  </Link>
                )}
                {policy.bothAbove67 && (
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] leading-none">
                    ✓ Common Ground
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1a2a4a] leading-tight mb-6">
                {policy.policyTitle}
              </h1>

              {/* Support grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <SupportMeter
                  label="National"
                  value={policy.natSupport}
                  color="#1a2a4a"
                  bgColor="#eef2f7"
                />
                <SupportMeter
                  label="Republican"
                  value={policy.repSupport}
                  color="#e91d1d"
                  bgColor="#fef2f2"
                />
                <SupportMeter
                  label="Democrat"
                  value={policy.demSupport}
                  color="#1a56c4"
                  bgColor="#eff6ff"
                />
                <SupportMeter
                  label="Gap"
                  value={policy.gap}
                  color="#7c3aed"
                  bgColor="#f5f3ff"
                />
              </div>

              {/* Briefing summary */}
              {policy.proscons?.briefingSummary && (
                <blockquote className="border-l-4 border-[#b22234] pl-4 py-1 text-[#4a5568] italic text-base sm:text-lg leading-relaxed">
                  {policy.proscons.briefingSummary}
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="max-w-4xl space-y-6">

            {/* Pros & Cons */}
            {policy.proscons && (policy.proscons.proArgument || policy.proscons.conArgument) && (
              <div>
                <h2 className="text-xl font-display font-bold text-[#1a2a4a] mb-4">
                  Arguments For & Against
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {policy.proscons.proArgument && (
                    <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
                      <h3 className="text-sm font-semibold text-[#166534] mb-2 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Pro Argument
                      </h3>
                      <p className="text-sm text-[#1a2a4a] leading-relaxed">
                        {policy.proscons.proArgument}
                      </p>
                    </div>
                  )}
                  {policy.proscons.conArgument && (
                    <div className="rounded-xl border border-[#fecaca] bg-[#fef2f2] p-5">
                      <h3 className="text-sm font-semibold text-[#991b1b] mb-2 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        Con Argument
                      </h3>
                      <p className="text-sm text-[#1a2a4a] leading-relaxed">
                        {policy.proscons.conArgument}
                      </p>
                    </div>
                  )}
                </div>
                {policy.proscons.sourcePdf && (
                  <p className="mt-3 text-xs text-[#718096]">
                    Source document: {policy.proscons.sourcePdf}
                  </p>
                )}
              </div>
            )}

            {/* Survey Results */}
            {policy.surveys.length > 0 && (
              <Collapsible title={`Survey Results (${policy.surveys.length})`} defaultOpen>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#e2e8f0] text-left text-xs text-[#718096] uppercase tracking-wide">
                        <th className="py-2 pr-3 font-medium">Type</th>
                        <th className="py-2 pr-3 font-medium">Organization</th>
                        <th className="py-2 pr-3 font-medium">Date</th>
                        <th className="py-2 pr-2 font-medium text-right">Nat</th>
                        <th className="py-2 pr-2 font-medium text-right">Rep</th>
                        <th className="py-2 pr-2 font-medium text-right">Dem</th>
                        <th className="py-2 pr-2 font-medium text-right">Gap</th>
                        <th className="py-2 font-medium">Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {policy.surveys.map((s, i) => (
                        <tr key={i} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc]">
                          <td className="py-2.5 pr-3 text-[#4a5568] whitespace-nowrap">{s.surveyType}</td>
                          <td className="py-2.5 pr-3 text-[#1a2a4a] font-medium">{s.org}</td>
                          <td className="py-2.5 pr-3 text-[#718096] whitespace-nowrap">{s.date}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums font-medium">{s.natPercent != null ? `${s.natPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#e91d1d]">{s.repPercent != null ? `${s.repPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#1a56c4]">{s.demPercent != null ? `${s.demPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#718096]">{s.gap != null ? `${s.gap}%` : "–"}</td>
                          <td className="py-2.5 text-[#718096] capitalize">{s.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Show question text for each survey */}
                <div className="mt-4 space-y-3">
                  {policy.surveys.map((s, i) => (
                    s.questionText && (
                      <div key={i} className="bg-[#f8fafc] rounded-lg p-3 border border-[#e2e8f0]">
                        <p className="text-xs font-medium text-[#718096] mb-1">{s.org} — {s.date}</p>
                        <p className="text-sm text-[#1a2a4a] leading-relaxed">{s.questionText}</p>
                      </div>
                    )
                  ))}
                </div>
              </Collapsible>
            )}

            {/* External Polling */}
            {policy.externalPolls.length > 0 && (
              <Collapsible title={`External Polling (${policy.externalPolls.length})`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#e2e8f0] text-left text-xs text-[#718096] uppercase tracking-wide">
                        <th className="py-2 pr-3 font-medium">Poll Organization</th>
                        <th className="py-2 pr-3 font-medium">Date</th>
                        <th className="py-2 pr-2 font-medium text-right">Nat</th>
                        <th className="py-2 pr-2 font-medium text-right">Rep</th>
                        <th className="py-2 pr-2 font-medium text-right">Dem</th>
                        <th className="py-2 pr-2 font-medium text-right">Gap</th>
                        <th className="py-2 font-medium">Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {policy.externalPolls.map((ep, i) => (
                        <tr key={i} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc]">
                          <td className="py-2.5 pr-3 text-[#1a2a4a] font-medium">{ep.pollOrg}</td>
                          <td className="py-2.5 pr-3 text-[#718096] whitespace-nowrap">{ep.date}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums font-medium">{ep.natPercent != null ? `${ep.natPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#e91d1d]">{ep.repPercent != null ? `${ep.repPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#1a56c4]">{ep.demPercent != null ? `${ep.demPercent}%` : "–"}</td>
                          <td className="py-2.5 pr-2 text-right tabular-nums text-[#718096]">{ep.gap != null ? `${ep.gap}%` : "–"}</td>
                          <td className="py-2.5 text-[#718096] capitalize">{ep.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Show question text for each poll */}
                <div className="mt-4 space-y-3">
                  {policy.externalPolls.map((ep, i) => (
                    ep.question && (
                      <div key={i} className="bg-[#f8fafc] rounded-lg p-3 border border-[#e2e8f0]">
                        <p className="text-xs font-medium text-[#718096] mb-1">{ep.pollOrg} — {ep.date}</p>
                        <p className="text-sm text-[#1a2a4a] leading-relaxed">{ep.question}</p>
                      </div>
                    )
                  ))}
                </div>
              </Collapsible>
            )}

            {/* Source Legislation */}
            {policy.legislation.length > 0 && (
              <Collapsible title={`Source Legislation (${policy.legislation.length})`}>
                <ul className="space-y-2">
                  {policy.legislation.map((leg, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-[#718096] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <span className="text-[#1a2a4a]">{leg.billOrSource}</span>
                    </li>
                  ))}
                </ul>
              </Collapsible>
            )}
          </div>
        </section>

        {/* Related policies */}
        {related.length > 0 && (
          <section className="bg-[#f5f6f8] py-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
              <h2 className="text-xl font-display font-bold text-[#1a2a4a] mb-6">
                Related Policies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/policies/${rp.id}/`}
                    className="bg-white rounded-xl border border-[#e2e8f0] p-4 hover:border-[#1a2a4a] hover:shadow-md transition-all group"
                  >
                    <p className="font-medium text-[#1a2a4a] text-sm leading-snug group-hover:text-[#b22234] transition-colors line-clamp-3">
                      {rp.policyTitle}
                    </p>
                    {rp.natSupport !== null && (
                      <p className="text-xs text-[#718096] mt-2 tabular-nums">
                        {rp.natSupport}% national support
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
