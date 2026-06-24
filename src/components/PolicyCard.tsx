import type { Policy } from "@/lib/types";
import Link from "next/link";

interface PolicyCardProps {
  policy: Policy;
}

function SupportBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number | null;
  color: string;
}) {
  if (value === null) return null;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-2 text-[#718096] shrink-0">{label}</span>
      <div className="flex-1 bg-[#e2e8f0] rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-8 text-right font-mono text-[#4a5568] tabular-nums">
        {value}%
      </span>
    </div>
  );
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  const supportLevel =
    policy.natSupport !== null
      ? policy.natSupport >= 70
        ? "high"
        : policy.natSupport >= 50
        ? "mid"
        : "low"
      : null;

  const supportColor =
    supportLevel === "high"
      ? "#16a34a"
      : supportLevel === "mid"
      ? "#ca8a04"
      : "#dc2626";

  const teaserText =
    policy.proscons?.briefingSummary ||
    policy.surveys[0]?.questionText ||
    "";

  return (
    <Link
      href={`/policies/${policy.id}/`}
      className="block bg-white rounded-xl border border-[#e2e8f0] p-5 hover:border-[#1a2a4a] hover:shadow-md transition-all group"
    >
      {/* Issue area badge + Common Ground badge */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {policy.issueArea && (
          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-[#f5f6f8] text-[#4a5568]">
            {policy.issueArea}
          </span>
        )}
        {policy.bothAbove67 && (
          <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669]">
            ✓ Common Ground
          </span>
        )}
      </div>

      {/* Policy title */}
      <h3 className="font-display font-bold text-[#1a2a4a] text-base leading-snug mb-3 group-hover:text-[#b22234] transition-colors line-clamp-3">
        {policy.policyTitle}
      </h3>

      {/* National support */}
      {policy.natSupport !== null && (
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl font-bold tabular-nums" style={{ color: supportColor }}>
            {policy.natSupport}%
          </span>
          <span className="text-xs text-[#718096]">national support</span>
        </div>
      )}

      {/* Party breakdown */}
      <div className="space-y-1.5">
        <SupportBar label="R" value={policy.repSupport} color="#e91d1d" />
        <SupportBar label="D" value={policy.demSupport} color="#1a56c4" />
      </div>

      {/* Teaser text */}
      {teaserText && (
        <p className="mt-3 text-xs text-[#718096] line-clamp-2 leading-relaxed">
          {teaserText}
        </p>
      )}
    </Link>
  );
}
