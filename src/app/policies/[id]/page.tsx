import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Collapsible from "@/components/ui/Collapsible";
import policiesData from "../../../../data/policies.json";
import type { Policy } from "@/lib/types";

const allPolicies = (policiesData as Policy[]).filter(
  (p) => p.id !== "short-name" && p.overallSupport !== null
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
    title: policy.shortName,
    description: policy.keyTakeaway || policy.detailedDescription?.slice(0, 160),
    openGraph: {
      title: `${policy.shortName} | Common Ground`,
      description: policy.keyTakeaway || undefined,
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

  // Related policies: same category, different id, max 4
  const related = allPolicies
    .filter(
      (p) =>
        p.id !== policy.id &&
        p.genericCategory === policy.genericCategory
    )
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#f5f6f8] border-b border-[#e2e8f0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-sm text-[#718096]">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 list-none m-0 p-0">
                <li>
                  <Link href="/" className="hover:text-[#1a2a4a] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/search/" className="hover:text-[#1a2a4a] transition-colors">
                    Policies
                  </Link>
                </li>
                {policy.genericCategory && (
                  <>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link
                        href={`/search/?category=${encodeURIComponent(policy.genericCategory)}`}
                        className="hover:text-[#1a2a4a] transition-colors"
                      >
                        {policy.genericCategory}
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
              <div className="flex flex-wrap gap-2 mb-4">
                {policy.genericCategory && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#f5f6f8] text-[#4a5568]">
                    {policy.genericCategory}
                  </span>
                )}
                {policy.subCategory && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#f5f6f8] text-[#4a5568]">
                    {policy.subCategory}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#1a2a4a] leading-tight mb-6">
                {policy.shortName}
              </h1>

              {/* Support grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <SupportMeter
                  label="Overall Support"
                  value={policy.overallSupport}
                  color="#1a2a4a"
                  bgColor="#eef2f7"
                />
                <SupportMeter
                  label="Republican"
                  value={policy.republicanSupport}
                  color="#e91d1d"
                  bgColor="#fef2f2"
                />
                <SupportMeter
                  label="Democrat"
                  value={policy.democratSupport}
                  color="#1a56c4"
                  bgColor="#eff6ff"
                />
                <SupportMeter
                  label="Independent"
                  value={policy.independentSupport}
                  color="#7c3aed"
                  bgColor="#f5f3ff"
                />
              </div>

              {/* Key takeaway */}
              {policy.keyTakeaway && (
                <blockquote className="border-l-4 border-[#b22234] pl-4 py-1 text-[#4a5568] italic text-base sm:text-lg leading-relaxed">
                  {policy.keyTakeaway}
                </blockquote>
              )}
            </div>
          </div>
        </section>

        {/* Collapsible details */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="max-w-3xl space-y-3">
            {policy.detailedDescription && (
              <Collapsible title="Detailed Description">
                <p className="whitespace-pre-line">{policy.detailedDescription}</p>
              </Collapsible>
            )}

            {(policy.pollingMethodology || policy.populationDescription || policy.marginOfError) && (
              <Collapsible title="Polling Methodology">
                <dl className="space-y-3">
                  {policy.pollingMethodology && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Methodology</dt>
                      <dd>{policy.pollingMethodology}</dd>
                    </div>
                  )}
                  {policy.populationDescription && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Population</dt>
                      <dd>{policy.populationDescription}</dd>
                    </div>
                  )}
                  {policy.marginOfError && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Margin of Error</dt>
                      <dd>{policy.marginOfError}</dd>
                    </div>
                  )}
                </dl>
              </Collapsible>
            )}

            {(policy.sourceName || policy.citationInfo || policy.url || policy.entityIssuingReport) && (
              <Collapsible title="Source & Citation">
                <dl className="space-y-3">
                  {policy.entityIssuingReport && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Issued by</dt>
                      <dd>{policy.entityIssuingReport}</dd>
                    </div>
                  )}
                  {policy.sourceName && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Source</dt>
                      <dd>{policy.sourceName}</dd>
                    </div>
                  )}
                  {policy.citationInfo && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Citation</dt>
                      <dd className="font-mono text-xs break-all">{policy.citationInfo}</dd>
                    </div>
                  )}
                  {policy.dateOfSurvey && (
                    <div>
                      <dt className="font-semibold text-[#1a2a4a] mb-1">Survey Date</dt>
                      <dd>{policy.dateOfSurvey}</dd>
                    </div>
                  )}
                  {policy.url && (
                    <div>
                      <a
                        href={policy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#1a56c4] underline hover:no-underline text-sm"
                      >
                        View original source ↗
                      </a>
                    </div>
                  )}
                </dl>
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
                    <p className="font-medium text-[#1a2a4a] text-sm leading-snug group-hover:text-[#b22234] transition-colors">
                      {rp.shortName}
                    </p>
                    {rp.overallSupport !== null && (
                      <p className="text-xs text-[#718096] mt-2 tabular-nums">
                        {rp.overallSupport}% overall support
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
