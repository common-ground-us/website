// Types matching CGOAP_PolicyDatabase_v2.xlsx (5-sheet structure)

export interface SurveyResult {
  surveyType: string;
  org: string;
  date: string;
  subLabel: string;
  questionText: string;
  natPercent: number | null;
  repPercent: number | null;
  demPercent: number | null;
  gap: number | null;
  metric: string;
  metricNote: string;
}

export interface ExternalPoll {
  pollOrg: string;
  date: string;
  question: string;
  natPercent: number | null;
  repPercent: number | null;
  demPercent: number | null;
  gap: number | null;
  metric: string;
}

export interface Legislation {
  billOrSource: string;
}

export interface ProsCons {
  briefingSummary: string;
  proArgument: string;
  conArgument: string;
  sourcePdf: string;
}

export interface Policy {
  id: string;
  issueArea: string;
  policyTitle: string;
  natSupport: number | null;
  repSupport: number | null;
  demSupport: number | null;
  gap: number | null;
  bothAbove67: boolean;
  hasDeliberative: boolean;
  hasProscons: boolean;
  sourceBillsSummary: string;

  surveys: SurveyResult[];
  externalPolls: ExternalPoll[];
  legislation: Legislation[];
  proscons: ProsCons | null;
}

export interface SearchablePolicy {
  id: string;
  policyTitle: string;
  issueArea: string;
  natSupport: number | null;
  repSupport: number | null;
  demSupport: number | null;
  briefingSummary: string;
  questionText: string;
}
