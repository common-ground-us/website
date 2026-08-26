"use client";

import { useCallback, useEffect, useState } from "react";
import "./platform.css";
import { CHARTS } from "./platformCharts";
import { planksHTML, footHTML, snapshotHTML } from "./platformRender";

type Mode = "pres" | "ana" | "snap";

// Built once at module load — pure data → HTML, so it is server-prerendered
// into the static export (crawlable for SEO) rather than injected on the client.
const PLANKS_HTML = planksHTML();
const FOOT_HTML = footHTML();
const SNAPSHOT_HTML = snapshotHTML();

function track(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export default function PlatformClient() {
  const [mode, setModeState] = useState<Mode>("pres");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [chart, setChart] = useState<string | null>(null);
  const [readmeOpen, setReadmeOpen] = useState(false);

  // Read-me sticky: show on first visit unless dismissed previously. This is
  // deliberately post-mount (localStorage is client-only), so the static HTML
  // ships with the overlay closed and it opens after hydration.
  useEffect(() => {
    let skip = false;
    try {
      skip = localStorage.getItem("cg_readme_hidden") === "1";
    } catch {}
    if (!skip) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReadmeOpen(true);
    }
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    track("platform_mode_change", { mode: m });
  }, []);

  const openChart = useCallback(
    (href: string) => {
      if (!CHARTS[href]) return false;
      setChart(href);
      track("platform_chart_open", { chart_id: href });
      return true;
    },
    [],
  );
  const closeChart = useCallback(() => setChart(null), []);

  const dismissReadme = useCallback((dontShowAgain: boolean) => {
    if (dontShowAgain) {
      try {
        localStorage.setItem("cg_readme_hidden", "1");
      } catch {}
    }
    setReadmeOpen(false);
  }, []);

  // Escape closes whichever overlay is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (chart) closeChart();
      else if (readmeOpen) setReadmeOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [chart, readmeOpen, closeChart]);

  // Delegate chart-link clicks coming from the injected plank HTML.
  const onWrapClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      const link = target.closest?.(".chartlink") as HTMLElement | null;
      if (!link) return;
      const href = link.getAttribute("data-chart");
      if (href && openChart(href)) e.preventDefault();
    },
    [openChart],
  );

  const [rmDont, setRmDont] = useState(false);

  const srcDoc = chart
    ? CHARTS[chart].replace('data-theme="light"', `data-theme="${theme}"`)
    : "";

  const wrapClass =
    "cg-platform" +
    (mode === "pres" ? " present" : "") +
    (mode === "snap" ? " snapshot" : "");

  return (
    <div className={wrapClass} data-theme={theme} onClick={onWrapClick}>
      <div className="wrap">
        <div className="topbar">
          <div>
            <p className="kicker">Common Ground · working draft</p>
            <h1>The Common Ground Platform</h1>
            <p className="sub">
              Each section is a <b>Platform</b> plank — how we frame it, then the
              policies that carry it. For each policy: the party split, the data
              source, its tier, and its current status.
            </p>
            <p className="src">
              Platform bar: more than two-thirds support in <em>both</em> parties.
              Sources: Program for Public Consultation / Voice of the People (U.
              Maryland); legislative status from Congress. Compiled August 13, 2026.
            </p>
            <p className="discuss-hook">
              <a
                href="https://common-ground-us.discourse.group/c/platform-planks/6"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Discuss the Planks on the forum →
              </a>
            </p>
          </div>
          <div className="controls">
            <div className="segmented" role="radiogroup" aria-label="View mode">
              <button
                className={"seg-btn" + (mode === "pres" ? " active" : "")}
                role="radio"
                aria-checked={mode === "pres"}
                onClick={() => setMode("pres")}
              >
                ▤ Presentation
              </button>
              <button
                className={"seg-btn" + (mode === "ana" ? " active" : "")}
                role="radio"
                aria-checked={mode === "ana"}
                onClick={() => setMode("ana")}
              >
                ▥ Analysis
              </button>
              <button
                className={"seg-btn" + (mode === "snap" ? " active" : "")}
                role="radio"
                aria-checked={mode === "snap"}
                onClick={() => setMode("snap")}
              >
                ▦ Snapshot
              </button>
            </div>
            <button
              className="toggle"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? "◑ Light" : "◐ Dark"}
            </button>
          </div>
        </div>

        <div className="key">
          <span className="pill plat">In Platform · &gt;⅔ both parties</span>
          <span className="pill maj">Bipartisan majority · Congress could add</span>
          <span className="pill excl">Excluded · not bipartisan</span>
          <span style={{ marginLeft: 6 }}></span>
          <span className="pill win">✓ Legislative win</span>
          <span style={{ color: "var(--muted)" }}>
            — Presentation mode hides the framing rows
          </span>
        </div>

        <div id="planks" dangerouslySetInnerHTML={{ __html: PLANKS_HTML }} />
        <div className="foot" id="foot" dangerouslySetInnerHTML={{ __html: FOOT_HTML }} />
        <div id="snapshot" dangerouslySetInnerHTML={{ __html: SNAPSHOT_HTML }} />

        <div
          id="chartModal"
          className={"cmodal" + (chart ? " open" : "")}
          aria-hidden={chart ? "false" : "true"}
        >
          <div className="cmback" onClick={closeChart}></div>
          <div className="cmbox">
            <div className="cmbar">
              <button className="cmclose" aria-label="Close chart" onClick={closeChart}>
                ✕
              </button>
            </div>
            <iframe className="cmframe" title="Diagnostic chart" srcDoc={srcDoc} />
          </div>
        </div>

        <div
          id="readme"
          className={"rmodal" + (readmeOpen ? " open" : "")}
          aria-hidden={readmeOpen ? "false" : "true"}
        >
          <div className="rmback" onClick={() => setReadmeOpen(false)}></div>
          <div className="rmsticky" role="dialog" aria-label="Read me first">
            <h2>📌 Read me first</h2>
            <p>
              Welcome to the <b>Common Ground Platform</b> — the policies where a
              supermajority of <b>both</b> parties actually agree. A few things to
              orient you:
            </p>
            <ul>
              <li>
                <b>Nine planks.</b> The platform is organized into nine planks, each
                with the specific policies that carry it.
              </li>
              <li>
                <b>Each plank names its problem — and measures it.</b> Every plank
                opens with the concrete problem its policies are meant to address,
                quantified wherever possible (open “▸ the problem, measured” for the
                chart).
              </li>
              <li>
                <b>Three ways to view it.</b> It opens in <b>Presentation</b>.
                There&apos;s also a shorter <b>Snapshot</b> one-pager and a more
                detailed <b>Analysis</b> view — switch anytime with the control at the
                top.
              </li>
              <li>
                <b>Best on a big screen.</b> This is designed for a laptop or desktop;
                on a phone it will feel cramped.
              </li>
              <li>
                <b>Policy Status is still being built.</b> The finished work here is
                the <b>Platform</b> — the policies and how we frame them. The{" "}
                <b>Policy Status</b> column (where each policy stands) is early and
                partly illustrative; that build-out continues, with publishing
                expected in October.
              </li>
            </ul>
            <div className="rmfoot">
              <label className="rmchk">
                <input
                  type="checkbox"
                  checked={rmDont}
                  onChange={(e) => setRmDont(e.target.checked)}
                />{" "}
                Don&apos;t show this again
              </label>
              <button className="rmbtn" onClick={() => dismissReadme(rmDont)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
