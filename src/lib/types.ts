// Types matching the 21-column Excel structure
export interface Policy {
  id: string;
  shortName: string;
  relevance: string;
  genericCategory: string;
  categoryOfIssue: string;
  subCategory: string;
  overallSupport: number | null;
  republicanSupport: number | null;
  democratSupport: number | null;
  independentSupport: number | null;
  manuallyChecked: string;
  detailedDescription: string;
  populationDescription: string;
  pollingMethodology: string;
  marginOfError: string;
  keyTakeaway: string;
  dateOfReport: string;
  dateOfSurvey: string;
  sourceName: string;
  citationInfo: string;
  url: string;
  entityIssuingReport: string;
}

export interface SearchablePolicy {
  id: string;
  shortName: string;
  genericCategory: string;
  categoryOfIssue: string;
  subCategory: string;
  overallSupport: number | null;
  republicanSupport: number | null;
  democratSupport: number | null;
  independentSupport: number | null;
  keyTakeaway: string;
  detailedDescription: string;
}
