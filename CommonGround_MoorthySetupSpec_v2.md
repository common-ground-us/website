# Common Ground — Tagline, SEO & Analytics Setup: What's Needed from Moorthy

*v2 — July 10, 2026\. Combines the earlier tagline/SEO handoff with the analytics setup spec, updated with July 10 decisions. Sending this replaces both prior drafts.*

---

## Overview

Three coordinated tasks: (1) deploy the new primary tagline; (2) set up SEO infrastructure; (3) install analytics. All P0 items must be complete before intern tracking begins on Wednesday, July 15\.

Keith owns the business/analytics side once data is flowing. This covers only what needs to happen at the code/infrastructure level.

## Timing — time-critical

Keith's first wave of Champions begins outreach mid-week (Wednesday, July 15), and interns begin using tracking codes the same day. For that outreach to be tracked, GA4 must be live and verified on the site **before the first Champion or intern shares a link** — visits that happen before GA4 is firing are lost and cannot be recovered.

**Non-negotiable, by \~Wednesday July 15:**

- GA4 installed and firing on all pages (including single-page-app virtual-pageview handling)  
- Test pageview confirmed in GA4 Realtime  
- Keith granted read access to GA4 \+ Search Console  
- New tagline deployed in title tags, meta descriptions, H1, hero (P0 tagline items below)  
- `sitemap.xml` \+ `robots.txt` published; Search Console verified

**Strongly wanted, same window:**

- Pledge submission wired as a Key Event (conversion)  
- **Champion sign-up wired as a *separate* Key Event (conversion)** — measuring conversions per Champion is a first-order goal, not just clicks

If only the conversion events slip a few days, traffic-by-Champion is still captured; conversion events can be added right after. GA4 being live is the part that cannot slip.

---

## Task 1 — Tagline deployment

**New primary tagline (SEO \+ descriptive):**

**What Americans Want from Their Government**

**Retained mission line (footer, About page, aspirational contexts):**

**Making Government Accountable to the Will of the People**

Both survive; each does a different job. Instructions below distinguish where each belongs.

### 1.1 `<title>` tags on every page (P0)

Update the `<title>` element for each page. Suggested pattern (\~60 chars per Google truncation):

- **Home:** `Common Ground | What Americans Want from Their Government`  
- **About:** `About | Common Ground — What Americans Want from Their Government`  
- **Get Involved:** `Get Involved | Common Ground — What Americans Want from Their Government`  
- **Contact:** `Contact | Common Ground — What Americans Want from Their Government`  
- **Governance Principles:** `Governance Principles | Common Ground`

### 1.2 Meta descriptions per page (P0) — install verbatim

Add or update `<meta name="description" content="...">` on each page. Final text below:

- **Home:** `Common Ground makes visible what Americans want from their government — the policies where supermajorities of Democrats and Republicans already agree.`  
- **About:** `Common Ground is nonpartisan civic infrastructure curating peer-reviewed research on what Americans want from their government. About the initiative.`  
- **Get Involved:** `Sign the Common Ground Pledge — stand publicly with fellow citizens for the policies supermajorities of Americans already agree on.`  
- **Contact:** `Contact Common Ground — nonpartisan civic infrastructure making visible what Americans want from their government. Press, partnership, general inquiries.`

### 1.3 H1 heading on Home page (P0)

Primary H1: **What Americans Want from Their Government**

Supporting subhead (H2 or paragraph) at Moorthy's discretion.

### 1.4 Hero section visible text (P0)

Deploy the tagline as the primary visible header text on the home page hero. Design/visual treatment at Moorthy's discretion.

### 1.5 Open Graph \+ Twitter Card meta tags (P0)

Add or update these `<meta>` tags in `<head>` on every page:

\<meta property="og:title" content="Common Ground — What Americans Want from Their Government"\>

\<meta property="og:description" content="\[same as page meta description\]"\>

\<meta property="og:image" content="\[hero image or logo URL\]"\>

\<meta property="og:url" content="https://www.common-ground.us/"\>

\<meta property="og:type" content="website"\>

\<meta name="twitter:card" content="summary\_large\_image"\>

\<meta name="twitter:title" content="Common Ground — What Americans Want from Their Government"\>

\<meta name="twitter:description" content="\[same as page meta description\]"\>

\<meta name="twitter:image" content="\[same as og:image\]"\>

Test by pasting `https://www.common-ground.us/` into a LinkedIn or Slack DM after deploy — confirm the preview card renders correctly.

### 1.6 Footer edit (P0)

Replace the first sentence of the footer with:

**Making Government Accountable to the Will of the People**

Keep the following sentence starting with **"Self-funded — no donations …"** unchanged.

### 1.7 About page (P1)

Retain the mission line **"Making Government Accountable to the Will of the People"** on the About page as part of the aspirational framing. About page body copy doesn't need to change; only the meta description and title tag do.

### What NOT to change

- URL slugs (would break existing links)  
- Existing body copy on any page (only title tags, meta descriptions, H1, hero, OG/Twitter tags, footer)

---

## Task 2 — SEO infrastructure

### 2.1 Publish `sitemap.xml` (P0)

Create and publish `sitemap.xml` at the site root: `https://www.common-ground.us/sitemap.xml`. Should list all public pages with `lastmod` timestamps.

### 2.2 Publish `robots.txt` (P0)

Create and publish `robots.txt` at the site root:

User-agent: \*

Allow: /

Sitemap: https://www.common-ground.us/sitemap.xml

### 2.3 Google Search Console setup (P0)

- Verify domain ownership at [search.google.com/search-console](https://search.google.com/search-console). Recommended: DNS TXT record verification (added in Cloudflare if the site is there).  
- Submit `sitemap.xml` via the Sitemaps section.  
- Use the URL Inspection tool to request indexing on: Home, About, Get Involved, Contact.  
- **Grant Keith at least Viewer/Analyst access** so he can monitor queries independently.

### 2.4 Canonical URL tags (P1)

Add `<link rel="canonical" href="...">` on every page to prevent Google from treating www / non-www / http / https as separate pages. Example on Home:

\<link rel="canonical" href="https://www.common-ground.us/"\>

### 2.5 HTTPS \+ www consistency (P1)

- Confirm all HTTP requests 301-redirect to HTTPS (not 302).  
- Pick one canonical form — recommend `https://www.common-ground.us/` — and 301-redirect all others to it (`common-ground.us`, `http://…`, `http://www…`).

### 2.6 Bing Webmaster Tools (P2)

Mirror of Search Console for Bing/DuckDuckGo — [bing.com/webmasters](https://www.bing.com/webmasters). Same drill: verify, submit sitemap.

### 2.7 Schema.org structured data (P2)

JSON-LD block on Home page identifying Common Ground as a nonprofit organization / NGO. Improves how Google renders knowledge-panel and organization details.

---

## Task 3 — Analytics install

**Decision: GA4 is the primary analytics tool.** CG's core need is *conversion attribution* — knowing which outreach campaign produced a given Pledge or Champion sign-up. GA4 does this; lighter tools don't.

- **Cloudflare Web Analytics** is welcome as an optional, privacy-friendly cross-check on raw traffic — but it does *not* track conversions or campaign attribution. If the site is behind Cloudflare, turning it on is a nice free backup; if not, skip it.  
- **Firebase is not required.** Firebase is Google's native mobile-app analytics. A PWA is still a web app (service-worker caching notwithstanding), so GA4's standard web tag covers it fully.

### 3.1 GA4 property setup (P0)

Create GA4 property under the `admin@` Google account. Capture the **Measurement ID** (`G-XXXXXXX`) and share it with Keith.

### 3.2 Install GA4 tag on every page (P0)

- **Google Tag Manager (GTM) preferred over hard-coded `gtag`** — lets us add or adjust tracking later without a code deploy each time.  
- **PWA / single-page-app note:** because the site is likely a PWA with client-side routing, GA4's default page-load tracking will miss in-app navigation. Enable **virtual pageview tracking** on route changes — either via GA4 Enhanced Measurement's "browser history" / History-change events, or manual `page_view` events fired on each route change. Without this, only the landing view is counted and the Pledge funnel breaks.

### 3.3 Pledge form submission → Key Event / Conversion (P0)

Pledge form submission wired as a tracked event, marked as a **Key Event** (GA4's term for a conversion). Event name: `pledge_submit`.

**This is the single most important instrument on the site.** If nothing else works, this must.

### 3.4 Champion sign-up → separate Key Event / Conversion (P0)

Champion sign-up wired as its **own** tracked event, marked as a **second Key Event**. Event name: `champion_signup`.

Champion sign-up is a higher-commitment step than a Pledge — a rung up the engagement ladder — so it must be tracked *separately* from Pledges, not bundled with them. Keith needs to see per-Champion conversion rates and Champion-vs-Pledge ratios in reporting.

### 3.5 Contact form submissions → events (P1)

Wire each of the 3 Contact forms as tracked events. Not Key Events; secondary reporting only.

- `contact_press`  
- `contact_partners`  
- `contact_info`

### 3.6 UTM parameter reception (P0)

Confirm GA4 captures UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) on inbound traffic — visible in the **Acquisition \> Traffic acquisition** report by source / medium. GA4 does this natively; the check is to make sure nothing in the routing strips them.

### 3.7 End-to-end verification (P0)

Before calling analytics setup done, confirm the following all appear in the GA4 Realtime dashboard:

- Test pageview from a normal visit  
- Test pageview from a URL with UTM parameters (source correctly attributed)  
- Test **Pledge** submission (event fires; conversion counted)  
- Test **Champion sign-up** submission (event fires; conversion counted)

---

## Task 4 — Fast-follow (after P0 gate — do NOT delay July 15 gate)

### 4.1 Vanity redirect URLs for no-link platforms

Instagram and TikTok don't allow clickable links in posts, so we want short, memorable URLs that redirect to the site and stamp the UTM automatically. Set up **301 redirects** from these paths to the home page, each carrying the UTM string shown:

- `common-ground.us/ig` → `https://www.common-ground.us/?utm_source=cg_official&utm_medium=instagram&utm_campaign=launch2026`  
- `common-ground.us/tiktok` → `https://www.common-ground.us/?utm_source=cg_official&utm_medium=tiktok&utm_campaign=launch2026`

(More may follow on the same pattern — e.g. `/yt`, `/li`.)

A handful of redirect rules, a few minutes each. Until these exist, we fall back to profile-bio links, which work but are coarser.

### 4.2 `/video` page embedding the explainer (when video is ready)

When the explainer video is ready, embed it on an on-site page (e.g. `/video`) rather than only linking out to YouTube. This lets GA4 capture video engagement (plays, watch-depth) via Enhanced Measurement's video engagement setting for embedded YouTube. Not needed until the video ships.

---

## Small residual items worth checking

- **Custom 404 page** — does the site have a friendly 404 with links home and to Contact?  
- **Custom 500 error page** — even a plain "something went wrong" is fine.  
- **Favicon** — confirmed rendering across browsers?

---

## Access request

Please grant **Keith** (`keith.lietzke@gmail.com`, or the admin@ account he uses) at least **Viewer/Analyst** access to:

- the **GA4 property**, and  
- the **Google Search Console** property.

This lets Keith read all the data and run analysis independently. Moorthy stays the owner of setup and site changes; Keith owns reading and acting on the data.

---

## Please confirm — determines how conversion tracking gets built

- **Is the site behind Cloudflare?** (Enables the free traffic cross-check, and is where Search Console DNS verification happens.)  
- **Where do the forms actually submit?** Native code on our site vs. an embedded third-party form (Google Forms, Typeform, Airtable, etc.). This is the big one: an embedded third-party form makes conversion tracking harder and may need extra wiring. Need to know before we can promise clean Pledge and Champion conversion data.  
- **GTM or direct gtag?** (Recommend GTM for the flexibility above.)  
- **Is the PWA a single-page app with client-side routing?** (Confirms whether the virtual-pageview handling in Task 3.2 is needed — it almost certainly is.)

---

*Common Ground | Keith Lietzke | July 10, 2026*  
