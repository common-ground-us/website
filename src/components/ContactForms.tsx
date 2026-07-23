import FormLaunchButton from "@/components/FormLaunchButton";

const FORMS = [
  {
    id: "press",
    label: "Press / Media",
    description:
      "Interview requests, media inquiries, and fact-checks for journalists.",
    event: "contact_press",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScCZlM0z6V6e1B_g8Oo-zUQG53mU6W9v9SXcov4g9fdEfL25g/viewform",
  },
  {
    id: "partners",
    label: "Partners",
    description:
      "Organizations interested in collaborating or amplifying the work.",
    event: "contact_partners",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfsAXL6A8xJx7lHGfk3qaCyBCq5VJ_wUc7MCNkrxHkUbu4ovg/viewform",
  },
  {
    id: "general",
    label: "General Inquiry",
    description: "Questions, corrections, and everything else.",
    event: "contact_info",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdLNK-EeeX6WtDeDuMCqwFZSF1EGXBa0G9p9YBTEyXZK-7SKg/viewform",
  },
] as const;

export default function ContactForms() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {FORMS.map((form) => (
        <div
          key={form.id}
          className="flex flex-col rounded-lg border border-gray-200 bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-[#1a2a4a] mb-2">
            {form.label}
          </h2>
          <p className="text-sm text-[#4a5568] mb-6 flex-1">
            {form.description}
          </p>
          <FormLaunchButton
            baseUrl={form.url}
            eventName={form.event}
            className="inline-flex items-center justify-center px-4 py-2 bg-[#1a2a4a] text-white text-sm font-medium rounded-lg hover:bg-[#2a3f6e] transition-colors"
          >
            Open the {form.label} form
          </FormLaunchButton>
        </div>
      ))}
    </div>
  );
}
