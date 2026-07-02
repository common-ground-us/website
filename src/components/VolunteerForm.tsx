"use client";

const FORM_ID = "1FAIpQLSf0VIlFeyQybJEY47dh2Q7F1LpP8f6ZYTCDJNzhS-x02t13bg";

export default function VolunteerForm() {
  return (
    <div>
      <p className="text-sm text-[#4a5568] mb-4">
        Trouble seeing the form below (especially on iPhone or iPad)?{" "}
        <a
          href={`https://docs.google.com/forms/d/e/${FORM_ID}/viewform`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#1a2a4a] underline"
        >
          Open it in a new tab
        </a>
        .
      </p>
      <div className="w-full overflow-x-auto">
        <iframe
          src={`https://docs.google.com/forms/d/e/${FORM_ID}/viewform?embedded=true`}
          width="640"
          height={2000}
          className="mx-auto max-w-full border-0"
          title="Volunteer sign-up form"
          onLoad={() => window.scrollTo(0, 0)}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
