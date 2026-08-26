import type { Metadata } from "next";
import Image from "next/image";
import ThankYouAnalytics from "./ThankYouAnalytics";
import "./thank-you.css";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Common Ground pledge is in — you've been counted.",
  alternates: { canonical: "/thank-you/" },
  robots: { index: false, follow: false }, // post-submit page
  openGraph: {
    type: "website",
    title: "I just took the Common-Ground.US pledge",
    description: "Americans agree on more than we think. Join me in making that visible.",
    images: [{ url: "/og/og-confirmation.png", width: 1200, height: 627 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/og-confirmation.png"] },
};

/* ── Element flags — off = not rendered ─────────────────────────────── */
const FLAGS = {
  pledgeList: true, // static note (no link) — "published in October"
  forward: true,
  shareLinkedin: false, // BOOST — OFF until a live CG LinkedIn post URL exists (then set URLS.boostLinkedin + flip true)
  shareX: false, // BOOST — OFF until a live CG X post URL exists (then set URLS.boostX + flip true)
  followX: true,
  followReddit: true,
  followLinkedin: true,
  followSubstack: true,
  community: false, // "Join r/CommonGround" — off until the subreddit is seeded
};

/* ── Destinations ───────────────────────────────────────────────────── */
const URLS = {
  // BOOST = reshare a LIVE CG post. TODO: real post URLs, or flag off at go-live.
  boostLinkedin: "#",
  boostX: "#",
  // FOLLOW = CG profiles (confirmed in LinkedIn Readiness v3).
  followLinkedin: "https://www.linkedin.com/company/common-ground-us",
  followX: "https://x.com/Common1GroundUS",
  followReddit: "https://reddit.com/user/CommonGroundUS",
  followSubstack: "https://thecivicheart.substack.com",
};

/* Share Kit icon sprite (CG palette, currentColor). Injected verbatim. */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-linkedin" viewBox="0 0 24 24"><rect x="2" y="9" width="4.2" height="13" rx="1" fill="currentColor"></rect><circle cx="4.1" cy="4.6" r="2.6" fill="currentColor"></circle><path d="M9.4 9h4v1.9c.9-1.6 2.7-2.3 4.6-2.3 3.7 0 5.2 2.4 5.2 6.3V22h-4.2v-5.7c0-1.9-.5-3.2-2.4-3.2-1.8 0-2.8 1.3-2.8 3.2V22H9.4z" fill="currentColor"></path></symbol>
<symbol id="i-x" viewBox="0 0 24 24"><path d="M17.6 2.5h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H.7l7.9-9.1L.5 2.5h7l4.8 6.4zm-1.2 17.9h1.9L7.7 4.4H5.6z" fill="currentColor"></path></symbol>
<symbol id="i-reddit" viewBox="0 0 24 24"><mask id="m-reddit" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#000"></rect><circle cx="17.6" cy="4.3" r="2.1" fill="#fff"></circle><path d="M12 8.2 13.2 3l4 1.1" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><ellipse cx="12" cy="14.6" rx="9.4" ry="6.9" fill="#fff"></ellipse><circle cx="8.5" cy="13.6" r="1.75" fill="#000"></circle><circle cx="15.5" cy="13.6" r="1.75" fill="#000"></circle><path d="M8.3 17.6c1.5 1.35 5.9 1.35 7.4 0" stroke="#000" stroke-width="1.7" fill="none" stroke-linecap="round"></path></mask><rect width="24" height="24" fill="currentColor" mask="url(#m-reddit)"></rect></symbol>
<symbol id="i-substack" viewBox="0 0 24 24"><rect x="3" y="2.6" width="18" height="3.2" fill="currentColor"></rect><rect x="3" y="8.2" width="18" height="3.2" fill="currentColor"></rect><path d="M3 13.8h18v7.6L12 17.2 3 21.4z" fill="currentColor"></path></symbol>
</defs></svg>`;

export default function ThankYouPage() {
  const ext = { target: "_blank", rel: "noopener noreferrer" as const };

  return (
    <div className="cg-ty" id="main-content">
      <ThankYouAnalytics />
      <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: SPRITE }} />

      <section className="hero">
        <div className="bloom" />
        <div className="hero-in">
          <Image
            className="mark"
            src="/logos/logo-mark.svg"
            alt="Common Ground"
            width={62}
            height={46}
            priority
            style={{ height: 46, width: "auto" }}
          />
          <h1 className="h1">You&rsquo;ve been counted.</h1>
          <p className="sub">
            Your name has been added to the list of people willing to publicly
            stand up for the core principle that{" "}
            <em>Government Should Be Accountable to the Will of the People</em>.
          </p>
          <div className="note">
            <p>
              This is an obvious principle in a democracy, and it&rsquo;s a
              tragedy that it&rsquo;s not being followed. The only way We the
              People can assert our constitutionally-given power is to{" "}
              <em>Act in Concert</em> — and your pledge is an essential step in that direction.
            </p>
            <p className="sign">
              Keith Lietzke &middot; <span>Founder, Common Ground</span>
            </p>
          </div>
          {FLAGS.pledgeList && (
            <p className="quiet quiet-static">
              Inaugural Pledge List to be published in October
            </p>
          )}
        </div>
      </section>

      <main className="body">
        {FLAGS.forward && (
          <section className="card card-hero">
            <p className="eyebrow">Help spread the word</p>

            <div className="ask">
              <h2 className="ask-h">Forward the email we just sent you.</h2>
              <p className="claim">
                The most powerful thing you can do is tell people you know.
              </p>
              <p className="lede">
                Check your inbox — we just sent you a note that makes the case,
                ready to forward. Add a line of your own and send it to a few
                people who&rsquo;d care. Nothing we publish carries as much weight
                as a message from someone they trust.
              </p>
              <p className="prefer-link">
                Prefer a link?{" "}
                <a href="/finding-common-ground/?src=forward">
                  Share the essay &rarr;
                </a>
              </p>
            </div>

            {(FLAGS.shareLinkedin || FLAGS.shareX) && (
              <div className="ask">
                <h2 className="ask-h">Boost our post on social.</h2>
                <p className="lede">
                  A reshare takes one tap and carries us into a network we
                  couldn&rsquo;t reach on our own. Add a line of your own if you like.
                </p>
                <div className="share-btns share-btns-stack">
                  {FLAGS.shareLinkedin && (
                    <a
                      className="share-btn"
                      href={URLS.boostLinkedin}
                      aria-label="Reshare our LinkedIn post"
                      data-ev="boost-linkedin"
                      {...ext}
                    >
                      <span className="ic">
                        <svg><use href="#i-linkedin" /></svg>
                      </span>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {FLAGS.shareX && (
                    <a
                      className="share-btn"
                      href={URLS.boostX}
                      aria-label="Repost our post on X"
                      data-ev="boost-x"
                      {...ext}
                    >
                      <span className="ic">
                        <svg><use href="#i-x" /></svg>
                      </span>
                      <span>X / Twitter</span>
                    </a>
                  )}
                </div>
                <p className="share-soon">Others appear here as they come online.</p>
              </div>
            )}
          </section>
        )}

        {(FLAGS.followX || FLAGS.followReddit || FLAGS.followLinkedin || FLAGS.followSubstack) && (
          <section className="card">
            <h3 className="h3">Follow us on</h3>
            <div className="follows">
              {FLAGS.followX && (
                <a className="follow" href={URLS.followX} aria-label="Follow on X" data-ev="follow-x" {...ext}>
                  <span className="ic"><svg><use href="#i-x" /></svg></span>
                </a>
              )}
              {FLAGS.followReddit && (
                <a className="follow" href={URLS.followReddit} aria-label="Follow on Reddit" data-ev="follow-reddit" {...ext}>
                  <span className="ic"><svg><use href="#i-reddit" /></svg></span>
                </a>
              )}
              {FLAGS.followLinkedin && (
                <a className="follow" href={URLS.followLinkedin} aria-label="Follow on LinkedIn" data-ev="follow-linkedin" {...ext}>
                  <span className="ic"><svg><use href="#i-linkedin" /></svg></span>
                </a>
              )}
              {FLAGS.followSubstack && (
                <a className="follow follow-named" href={URLS.followSubstack} aria-label="Read The Civic Heart on Substack" data-ev="follow-substack" {...ext}>
                  <span className="ic"><svg><use href="#i-substack" /></svg></span>
                  <span className="follow-name">The Civic Heart</span>
                </a>
              )}
            </div>
            <p className="lede lede-s follow-note">We don&rsquo;t post often, and only fact-based.</p>
          </section>
        )}
      </main>

      <footer className="foot">
        <p className="foot-line">
          <strong>Making Government Accountable to the Will of the People</strong>
          <br />
          <span className="foot-dim">Self-funded</span>{" "}
          <span className="foot-soft">— no donations, no advertising, no party affiliation.</span>
        </p>
        <p className="foot-line foot-copy">
          <span className="foot-dim">&copy;</span> 2026 <strong>Common Ground</strong>
        </p>
      </footer>
    </div>
  );
}
