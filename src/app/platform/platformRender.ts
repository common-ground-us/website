// Faithful port of the artifact's DOM-building logic. These functions reproduce
// the exact HTML the approved Common Ground Platform artifact renders, so the
// page is byte-for-byte the same content — just built at render time (server
// prerendered for SEO) instead of by a client script.

import {
  planks,
  tierOf,
  tierLabel,
  tierPillClass,
  supColor,
  type Plank,
  type Row,
} from "./platformData";

const esc = (s: string) => s.replace(/"/g, "&quot;");

const tierPillHTML = (tr: string) =>
  `<span class="${tierPillClass[tr]}">${tierLabel[tr]}</span>`;

function rowHTML(x: Row): string {
  const tr = tierOf(x);
  const cls = x.status === "win" ? "win-row" : tr === "excluded" ? "below" : "";
  const rd = x.rdtext
    ? `<span class="rd">${x.rdtext}</span>`
    : x.r == null
      ? `<span class="rd">both strong</span>`
      : `<span class="rd">R <b>${x.r}</b> · D <b>${x.d}</b></span>`;
  const supCell =
    x.s == null
      ? `<span class="rd">—</span>`
      : `<div class="supwrap"><span class="supnum">${x.s}%</span><div class="bar"><i style="width:${x.s}%;background:${supColor(tr)}"></i></div></div>`;
  const statusCell =
    x.status === "win"
      ? `<span class="pill win">${x.pill || "✓ Win"}</span><div class="status" style="margin-top:4px">${x.statusText}</div>`
      : `<span class="status">${x.status}</span>${
          x.note && x.status !== "Not yet assessed"
            ? `<div class="rd" style="margin-top:3px;color:var(--warn)">${x.note}</div>`
            : ""
        }`;
  return `<tr class="${cls}">
    <td class="cellpol"><div class="pol">${x.pol}</div><div class="da">${x.act}</div></td>
    <td class="hidesm">${supCell}</td>
    <td>${rd}</td>
    <td class="hidesm"><span class="bill">${
      x.src
        ? x.src.h
          ? `<a href="${x.src.h}" target="_blank" rel="noopener noreferrer" style="color:var(--maj-ink);text-decoration:none">${x.src.l}</a>`
          : x.src.l
        : "—"
    }</span></td>
    <td class="c">${tierPillHTML(tr)}</td>
    <td class="hidesm"><span class="bill">${
      x.billHref
        ? `<a href="${x.billHref}" target="_blank" rel="noopener noreferrer" style="color:inherit">${x.bill}</a>`
        : x.bill ?? ""
    }</span></td>
    <td>${statusCell}</td>
  </tr>`;
}

export function plankHTML(pk: Plank): string {
  const allRows = pk.subs.flatMap((s) => s.rows || []);
  const clears = allRows.filter((r) => tierOf(r) === "platform").length;
  const total = allRows.length;

  const h = `<div class="plankhead">
      <span class="idx">${pk.idx}</span>
      <h2>${pk.name}</h2>${
        pk.sketch
          ? '<span style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);border:1px solid var(--line);border-radius:20px;padding:2px 9px;margin-left:10px;vertical-align:middle">sketch</span>'
          : ""
      }
      <span class="tag">${pk.tag}</span>
      <span class="cnt"><b>${clears}</b> of ${total} on the Platform</span>
    </div>`;

  let a = `<div class="analysis"><p class="lede">${pk.lede}</p>`;
  if (pk.dims) {
    a +=
      `<div class="dimrow ${pk.dimcols || "three"}">` +
      pk.dims
        .map(
          (d) =>
            `<div class="dimcard"><div class="nm">${d.nm}</div><div class="ds">${d.ds}</div></div>`,
        )
        .join("") +
      `</div>`;
  }
  if (pk.grid) {
    a +=
      `<div class="dimrow grid3">` +
      pk.grid.harms
        .map(
          (d) =>
            `<div class="dimcard"><div class="nm">${d.nm}</div><div class="ds">${d.ds}</div></div>`,
        )
        .join("") +
      `</div>`;
    a += `<p class="axnote">${pk.grid.actors}</p>`;
  }
  if (pk.after) a += `<p class="after">${pk.after}</p>`;
  a += `</div>`;

  const clink = (ch: { href: string; label: string }) =>
    `<a href="${ch.href}" target="_blank" rel="noopener noreferrer" class="chartlink" data-chart="${ch.href}">▸ ${ch.label}</a>`;
  const c =
    pk.chart || pk.chart2
      ? `<div class="chartbar">${pk.chart ? `<div>${clink(pk.chart)}</div>` : ""}${
          pk.chart2 ? `<div style="margin-top:5px">${clink(pk.chart2)}</div>` : ""
        }</div>`
      : "";

  let t = `<table><thead><tr>
     <th style="width:25%">Policy</th>
     <th class="hidesm" style="width:10%">Support</th>
     <th style="width:9%">R / D</th>
     <th class="hidesm" style="width:14%">Data Source</th>
     <th class="c" style="width:9%">Tier</th>
     <th class="hidesm" style="width:13%">Policy Source</th>
     <th style="width:20%">Policy Status</th>
   </tr></thead><tbody>`;
  pk.subs.forEach((sub) => {
    if (sub.empty) {
      t += `<tr class="emptydim"><td colspan="7">— ${sub.empty}</td></tr>`;
      return;
    }
    t += `<tr class="subhead"><td colspan="7"><div class="sh"><b>${sub.dim}</b><span>· ${sub.actor}</span></div></td></tr>`;
    (sub.rows || []).forEach((x) => {
      t += rowHTML(x);
    });
  });
  t += `</tbody></table>`;

  const style = `--accent:var(--${pk.color});--tint:var(--${pk.color}-tint)`;
  return `<section class="plank" style="${style}">${h}${c}${a}${t}</section>`;
}

export function planksHTML(): string {
  return planks.map(plankHTML).join("");
}

export function footHTML(): string {
  return `<b>Three tiers.</b> <b style="color:var(--good-ink)">In Platform</b> = more than two-thirds in both parties (the floor the Platform sets). <b style="color:var(--maj-ink)">Bipartisan majority</b> = over half in both but under two-thirds — Congress could add on top of the floor, not on the Platform. <b>Excluded</b> = not on the Platform — either a partisan wedge (a party under 50% or opposed) or a supermajority item deliberately set aside on principle or workability. <b>Note.</b> Where a row reads "Not yet assessed," the row and its columns already exist — only the legislative-status cell is still empty, waiting to be filled in per policy. Bills marked <b>*</b> are from the Program for Public Consultation study-era Congress; verify the current-Congress vehicle before scoring. Program for Public Consultation data: campaign finance 2018, foreign funding 2021, lobbying 2022, healthcare/immigration 2024, National Common Ground 2026. <b>Currency check:</b> where an item predates 2026, confirm against the latest <b>National Common Ground</b> figures before publishing. Corroborated by Pew (2023) and OpenSecrets dark-money polling (2026). Supreme Court ethics figure uses Program for Public Consultation’s <b>same-rules-as-other-judges</b> wording (87% R · 86% D); a broader “ethics code” frame polls lower.`;
}

export function snapshotHTML(): string {
  let sh = `<div class="snaphead"><h1>The Common Ground Platform — Snapshot</h1><p>Every policy with more than two-thirds support in <b>both</b> parties. Overall · R · D.</p></div><div class="snapcols">`;
  let nplat = 0;
  planks.forEach((pk) => {
    const rows = pk.subs
      .flatMap((s) => s.rows || [])
      .filter((r) => tierOf(r) === "platform");
    if (!rows.length) return;
    nplat += rows.length;
    sh += `<div class="snapplank" style="--accent:var(--${pk.color})"><div class="snapname">${pk.name}${
      pk.sketch ? ' <span class="snapsketch">sketch</span>' : ""
    }<span class="snapcnt">${rows.length}</span></div>`;
    rows.forEach((x) => {
      const o = x.s != null ? x.s + "%" : "—";
      const rr = x.r != null ? x.r : "—";
      const dd = x.d != null ? x.d : "—";
      sh += `<div class="snaprow"><span class="snappol" title="${esc(
        x.pol || "",
      )}">${x.sn || x.pol}</span><span class="snapnums"><b>${o}</b> <span class="snaprd">R ${rr}·D ${dd}</span></span></div>`;
    });
    sh += `</div>`;
  });
  sh += `</div><p class="snapfoot">${nplat} policies · more than two-thirds support in both parties · Common Ground</p>`;
  return sh;
}
