import FormLaunchButton from "@/components/FormLaunchButton";

const FORM_ID = "1FAIpQLSf0VIlFeyQybJEY47dh2Q7F1LpP8f6ZYTCDJNzhS-x02t13bg";

// Hidden "source" field on the Pledge/Champion form. Prefilled from the inbound
// UTM parameters so every response row is tagged with which Champion drove it.
const SOURCE_ENTRY_ID = "entry.1512858090";

const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;

export default function VolunteerForm() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
      <p className="text-[#4a5568] mb-6">
        Add your name to the Common Ground Pledge, and let us know if you&apos;d
        like to take the next step and become a Champion. The form opens in a new
        tab — submit it there, then close the tab to return here.
      </p>
      <FormLaunchButton
        baseUrl={FORM_URL}
        eventName="pledge_form_open"
        eventForm="pledge"
        sourceEntryId={SOURCE_ENTRY_ID}
        className="inline-flex items-center justify-center px-6 py-3 bg-[#1a2a4a] text-white font-semibold rounded-lg hover:bg-[#2a3f6e] transition-colors"
      >
        Sign the Pledge
      </FormLaunchButton>
    </div>
  );
}
