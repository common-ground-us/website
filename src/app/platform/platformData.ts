// Auto-generated from the approved Common Ground Platform artifact (v61). Data verbatim.

export const GP="Government Performance",
  MIP="Money in Politics",
  HC="Healthcare",
  IM="Immigration & Border",
  FR="An Honest System",
  OSR="Opportunity & Self-Reliance",
  GUN="Gun Safety",
  ELEC="Secure & Fair Elections",
  ENV="Environment & Energy";

export interface SrcRef { l: string; h?: string }
export interface Row {
  pol?: string; act?: string;
  s?: number; r?: number | string; d?: number | string;
  bar?: string; tier?: string;
  src?: SrcRef; status?: string; pill?: string; statusText?: string;
  bill?: string; billHref?: string; note?: string;
  rdtext?: string; below?: boolean; sn?: string; empty?: string;
}
export interface Sub { dim?: string; actor?: string; rows?: Row[]; empty?: string }
export interface Dim { nm: string; ds: string }
export interface Grid { harms: Dim[]; actors: string }
export interface ChartRef { href: string; label: string }
export interface Plank {
  name: string; idx: string; color: string;
  tag?: string; sketch?: boolean;
  chart?: ChartRef; chart2?: ChartRef;
  lede?: string; dims?: Dim[]; dimcols?: string; grid?: Grid; after?: string;
  subs: Sub[];
}

export const planks: Plank[] = [
{
  name:GP, idx:"Plank 1", color:"gp", tag:"Is government serving the people — or itself?",
  chart:{href:"CommonGround_GilensPage_v1.html",label:"The problem, measured: whose preferences actually become policy"},
  lede:"Most Americans suspect government listens to the wealthy and well-connected more than to them. The evidence backs the hunch: across nearly <b>1,800 policy decisions</b>, once you account for what economic elites and organized interest groups want, the average citizen's own preferences have <b>almost no independent effect</b> on what government does. That's the performance problem, measured — and a big part of why trust runs so low. The question underneath is the plainest one: does government <b>work as promised</b> — for the people, or only for the well-connected?",
  dims:[
    {nm:"Trust", ds:"Does my representative actually care, and represent me well?"},
    {nm:"Effectiveness", ds:"Can government get things done, or is it stuck in gridlock?"},
    {nm:"Ethics", ds:"Does it act with integrity — or enrich itself?"},
  ],
  after:"Where people across the spectrum agree is on <b>integrity</b> — a government that lives by the rules it sets for everyone else. Holding Supreme Court justices to the same ethics code as other judges (<b>85%</b>) and term limits for Congress (<b>82%</b>) both draw supermajorities in <i>both</i> parties, because nobody, left or right, thinks the powerful should get a private set of rules.",
  subs:[
    {dim:"Ethics", actor:"the official", rows:[
      {pol:"Ban members of Congress from trading individual stocks",act:"Official",s:76,r:78,d:75,bar:"yes",src:{l:"Program for Public Consultation, 2026",h:"https://publicconsultation.org"},status:"win",pill:"✓ Passed House",statusText:"Passed House · Jul 22 2026 · awaiting Senate",bill:"stock-trading ban",billHref:"https://www.politico.com/live-updates/2026/07/22/congress/house-votes-to-restrict-congress-ability-to-purchase-and-sell-stocks-01008697"},
      {pol:"Require Supreme Court justices to follow the same ethics rules as other federal judges",act:"Official",s:85,r:87,d:86,bar:"yes",tier:"platform",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://publicconsultation.org/common-ground/the-national-common-ground/"},bill:"SCERT Act *",note:"Uses the “same rules as other judges” wording (<b>87% R · 86% D</b>); a broader “binding ethics code” framing polls lower. The stronger, more neutral wording is the one shown."},
      {pol:"Term limits for members of Congress (const. amendment)",act:"Official",s:82,r:85,d:83,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://publicconsultation.org/united-states/congressional-term-limits/"},bill:"H.J.Res (various)"},
    ]},
    {empty:"Trust & Effectiveness — framing dimensions here; no bipartisan-supermajority policy in the pool yet."},
  ],
},
{
  name:MIP, idx:"Plank 2", color:"mip", tag:"Political power should track votes, not wallets.",
  chart:{href:"CommonGround_GilensPage_v1.html",label:"The problem, measured: money vs. votes"},
  lede:"The worry here is simple: that political power follows money instead of votes. The evidence is stark — across nearly <b>1,800 policy decisions</b>, what the affluent want closely tracks what becomes law, while the average voter's independent influence is close to zero. <b>Money, not votes, moving outcomes.</b>",
  grid:{
    harms:[
      {nm:"Influence", ds:"Money buys outcomes out of proportion to votes."},
      {nm:"Access", ds:"Money decides who can even run and be heard."},
      {nm:"Transparency", ds:"You can't see who's paying — dark money."},
    ],
    actors:"Who a fix can target: the <b>donor</b> (individual or corporate), the <b>middleman</b> (PACs, lobbyists), and the <b>candidate or official</b>.",
  },
  after:"The strongest, least partisan ground is <b>transparency</b> — Republicans back disclosing political money at 74–85%. It's also the most durable, because disclosure laws are written to survive court challenges. A constitutional amendment to overturn <b>Citizens United</b> is popular (about two-thirds of those who take a side), but amending the Constitution is a steep hill — and history shows why the fix has to be built to last: Congress <i>did</i> pass campaign-finance reform in 2002 (McCain-Feingold), and the Supreme Court struck it down in 2010. Public financing, by contrast, doesn't yet clear the bar — a real frustration without an agreed fix.",
  subs:[
    {dim:"Transparency", actor:"donor & intermediary", rows:[
      {pol:"Increase disclosure requirements — corporate/union/group spending, TV & radio ad buyers, and federal contractors",act:"Intermediary / donor",s:83,r:85,d:85,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"DISCLOSE / Honest Ads Acts"},
      {pol:"Register large donors ($10k+) with the FEC",act:"Donor",s:82,r:77,d:88,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2018",h:"https://publicconsultation.org/wp-content/uploads/2020/04/Campaign_Finance_Report_0518.pdf"},bill:"—",note:"Not in the 2026 core set — carried from Program for Public Consultation 2018."},
      {pol:"Verify donor identity to block fraud / foreign donations",act:"Donor",s:79,r:85,d:77,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2018",h:"https://publicconsultation.org/wp-content/uploads/2020/04/Campaign_Finance_Report_0518.pdf"},bill:"—",note:"Not in the 2026 core set — carried from Program for Public Consultation 2018."},
    ]},
    {dim:"Influence", actor:"donor", rows:[
      {pol:"Ban foreign money in state / local ballot measures",act:"Donor",s:80,r:77,d:84,bar:"yes",status:"win",pill:"✓ Passed House",statusText:"Passed House unanimously · Jul 13 2026 · awaiting Senate",src:{l:"Program for Public Consultation, 2021",h:"https://publicconsultation.org/united-states/foreign-funding-of-ballot-initiatives/"},bill:"H.R. 3535 — Stop Foreign Funds in Elections Act"},
      {pol:"Amend Constitution to overturn Citizens United / regulate spending",act:"Donor / intermediary",s:82,r:82,d:85,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"Democracy For All Amdt *",note:"2026 National Common Ground: <b>82% overall, 82% R</b> — now clears the Platform (up from 66% R in 2018). The catch is feasibility: a constitutional amendment is a steep road, so the durable complement is court-proof disclosure legislation."},
    ]},
    {dim:"Lobbying & the revolving door", actor:"the intermediary channel of influence", rows:[
      {pol:"Lifetime ban on foreign-government lobbying (senior officials)",act:"Intermediary",s:71,r:71,d:74,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2022",h:"https://publicconsultation.org/united-states/large-bipartisan-majority-favors-increasing-lobbying-restrictions-on-former-members-of-congress-and-other-government-officials/"},bill:"PURE Executive Act *"},
      {pol:"Extend senior-staff lobbying waiting period 1→2 yrs",act:"Intermediary / official",s:74,r:75,d:75,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2022",h:"https://publicconsultation.org/united-states/large-bipartisan-majority-favors-increasing-lobbying-restrictions-on-former-members-of-congress-and-other-government-officials/"},bill:"H.R. 414 *"},
      {pol:"Extend executive-branch lobbying restriction to 5 yrs",act:"Official",s:71,r:72,d:72,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2022",h:"https://publicconsultation.org/united-states/large-bipartisan-majority-favors-increasing-lobbying-restrictions-on-former-members-of-congress-and-other-government-officials/"},bill:"S. 751 *"},
      {pol:"Extend congressional lobbying ban 2→5 yrs",act:"Official",s:65,r:65,d:67,bar:"bord",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2022",h:"https://publicconsultation.org/united-states/large-bipartisan-majority-favors-increasing-lobbying-restrictions-on-former-members-of-congress-and-other-government-officials/"},bill:"H.R. 414 / S. 751 *",note:"R 65% — just under ⅔"},
    ]},
    {dim:"Access", actor:"donor — bipartisan majority; Congress could add", rows:[
      {pol:"Small-donor tax credit (up to $50)",act:"Donor",s:67,r:63,d:72,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Small-donor 6:1 public matching (Durbin plan)",act:"Donor",s:60,r:58,d:73,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2018",h:"https://publicconsultation.org/wp-content/uploads/2020/04/Campaign_Finance_Report_0518.pdf"},bill:"S. 1538 *"},
      {pol:"Bar members from direct fundraising (Stop Act)",act:"Official",s:55,r:51,d:58,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2018",h:"https://publicconsultation.org/wp-content/uploads/2020/04/Campaign_Finance_Report_0518.pdf"},bill:"H.R. 528 *"},
    ]},
  ],
},
{
  name:HC, idx:"Plank 3", color:"hc", tag:"We pay the most and get the least — so aim at value.",
  chart:{href:"CommonGround_Healthcare_ValueGap_v1.html",label:"The problem, measured: the health value gap"},
  lede:"The problem here isn't only cost — it's that we pay more and get less. The U.S. spends <b>nearly twice as much</b> per person as comparable wealthy countries ($14,775 vs. $7,860) and yet lives <b>3.7 years less</b> (79.0 vs. 82.7). So ask it plainly: does the most expensive health system in the world <b>work as promised</b>? On these numbers, no. Every policy here aims at closing that gap.",
  dims:[
    {nm:"Cost / affordability", ds:"What you actually pay — drug prices, hospital prices, out-of-pocket caps."},
    {nm:"Innovation & patents", ds:"What taxpayers fund and who profits — patent reform, generics, pay-to-delay deals."},
    {nm:"Access / coverage", ds:"Who's covered and protected when they get sick."},
  ],
  after:"The common thread is <b>value</b> — you should get what you pay for. That's why agreement crosses party lines on the concrete fixes: capping drug prices, banning surprise medical bills, protecting people with pre-existing conditions. One genuine wedge sits outside this plank — abortion coverage — so the coverage items here are the ones both sides can actually back.",
  subs:[
    {dim:"Cost / affordability", actor:"pharma & providers", rows:[
      {pol:"Let Medicare negotiate prescription drug prices",act:"Government / pharma",s:90,r:87,d:92,bar:"yes",status:"win",pill:"✓ Enacted",statusText:"Inflation Reduction Act 2022 · first negotiated prices in effect 2026",src:{l:"Program for Public Consultation, 2026 / KFF",h:"https://www.kff.org/health-costs/allowing-medicare-to-negotiate-drug-prices-remains-broadly-popular-among-voters-though-most-are-unaware-of-the-law-and-its-projected-savings/"},bill:"IRA 2022 (P.L. 117-169)"},
      {pol:"Cap drug prices to what other developed countries pay",act:"Pharma",s:86,r:90,d:86,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"“most-favored-nation” (exec. proposals)"},
      {pol:"Cap insulin at $35 / month for everyone",act:"Pharma / insurers",s:77,r:70,d:84,bar:"yes",status:"Enacted for Medicare (IRA 2022); extension to all insurance pending",src:{l:"KFF Sept 2024",h:"https://www.kff.org/medicare/kff-health-tracking-poll-september-2024-support-for-reducing-prescription-drug-prices-remains-high/"},bill:"IRA 2022 (Medicare)",note:"R 70% — clears ⅔, just. Expanding the Medicare cap to all insurance."},
      {pol:"Cap annual out-of-pocket drug costs ($2,000)",act:"Insurers",s:69,r:58,d:83,bar:"bord",status:"Enacted for Medicare (in effect 2025); extension pending",src:{l:"KFF Sept 2024",h:"https://www.kff.org/medicare/kff-health-tracking-poll-september-2024-support-for-reducing-prescription-drug-prices-remains-high/"},bill:"IRA 2022 (Medicare)",note:"R 58% — over half but under ⅔, so Bipartisan majority, not Platform. (Already enacted for Medicare.)"},
    ]},
    {dim:"Innovation & patents", actor:"pharma / government", rows:[
      {pol:"Revoke patents on unaffordable drugs developed with federal funds",act:"Government / pharma",s:73,r:"70–75",d:"79–84",bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2024",h:"https://publicconsultation.org/swing-six/healthcare-drugpricing/"},bill:"march-in rights (Bayh-Dole)"},
      {pol:"Ban “pay-to-delay” deals that keep generics off the market",act:"Pharma",s:76,r:79,d:77,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://publicconsultation.org/swing-six/healthcare-drugpricing/"},bill:"FTC action / legislation"},
    ]},
    {dim:"Access / coverage", actor:"insurers", rows:[
      {pol:"Fund low-cost / free substance-abuse treatment ($13B)",act:"Government",s:75,r:69,d:83,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Renew enhanced ACA premium subsidies",act:"Government / insurers",s:81,r:73,d:90,bar:"yes",status:"Temporary — enhanced subsidies expired end 2025",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {empty:"Strong bipartisan candidates still to verify here: pre-existing-condition protection and surprise-billing bans (already law — the No Surprises Act)."},
  ],
},
{
  name:IM, idx:"Plank 4", color:"im", tag:"A system that works — secure and orderly, for everyone.",
  chart:{href:"CommonGround_Immigration_Backlog_v1.html",label:"The problem, measured: the court backlog"},
  lede:"Immigration is the country's loudest fight and the one with the least apparent agreement. But underneath the identity battles is a question both sides answer the same way: does the system <b>work as promised</b>? Right now it doesn't — the immigration courts are sitting on <b>3.8 million</b> pending cases, with waits around four years. Start from whether the system works, and the common ground appears.",
  dims:[
    {nm:"Border security & control", ds:"Agents, surveillance, and stopping fentanyl — broadly backed across the board."},
    {nm:"Processing & the courts", ds:"Fix the broken process, not just the headcount — decide cases quickly and fairly."},
    {nm:"Legal immigration & work", ds:"Enforcement paired with legal channels — verify employees, and enough work visas to meet real demand."},
  ],
  after:"The surprise is how much agreement appears once the question is simply whether it works. Even hiring more immigration judges and staff to clear the backlog draws <b>73% of Republicans</b> — because people experience the backlog as broken <b>order</b>, not partisan overreach. And even the status of the undocumented, long treated as untouchable, clears when it's concrete: a path to citizenship for Dreamers draws <b>76% of Republicans</b>. The one discipline this plank keeps is holding security <b>and</b> order together — drop either half and it reads as coded to one side.",
  subs:[
    {dim:"Border security & control", actor:"enforcement", rows:[
      {pol:"Add Border Patrol agents & surveillance technology",act:"Enforcement",s:70,r:74,d:71,bar:"yes",status:"In the 2024 bipartisan Senate bill — <span style='color:var(--warn)'>blocked Feb 2024</span>",src:{l:"Program for Public Consultation, 2024",h:"https://publicconsultation.org/immigration/swing-state-survey-majorities-favor-path-to-citizenship-over-mass-deportation-while-strengthening-the-border/"},bill:"2024 border deal",billHref:"https://forumtogether.org/article/border-security-and-asylum-reform-in-the-emergency-national-security-supplemental-appropriations-act-2024-bill-explainer/"},
      {pol:"Deport undocumented immigrants who have committed serious crimes",act:"Enforcement / courts",s:85,r:94,d:79,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {dim:"Processing & the courts", actor:"the system / courts", rows:[
      {pol:"Hire more immigration judges &amp; staff to speed up asylum decisions &amp; clear the backlog",act:"Courts / system",s:76,r:73,d:83,bar:"yes",status:"Funded in the 2024 bill (asylum-officer &amp; judge teams) — <span style='color:var(--warn)'>blocked Feb 2024</span>",src:{l:"Program for Public Consultation, 2026",h:"https://publicconsultation.org/immigration/swing-state-survey-majorities-favor-path-to-citizenship-over-mass-deportation-while-strengthening-the-border/"},bill:"2024 border deal",billHref:"https://forumtogether.org/article/border-security-and-asylum-reform-in-the-emergency-national-security-supplemental-appropriations-act-2024-bill-explainer/",note:"Even a government-headcount fix clears the bar: <b>73% R · 83% D</b>. The backlog reads as broken order, not partisan overreach."},
    ]},
    {dim:"Legal immigration & work", actor:"employers / workers", rows:[
      {pol:"Require E-Verify paired with more work visas",act:"Employers / workers",s:83,r:82,d:84,bar:"yes",status:"Legal-visa expansion was in the 2024 bill — blocked; E-Verify mandate pending",src:{l:"Program for Public Consultation, 2024",h:"https://publicconsultation.org/immigration/swing-state-survey-majorities-favor-path-to-citizenship-over-mass-deportation-while-strengthening-the-border/"},bill:"partly 2024 border deal",billHref:"https://forumtogether.org/article/border-security-and-asylum-reform-in-the-emergency-national-security-supplemental-appropriations-act-2024-bill-explainer/"},
      {pol:"Require E-Verify alone (without the visa expansion)",act:"Employers",s:68,r:64,d:74,bar:"bord",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2024",h:"https://publicconsultation.org/immigration/swing-state-survey-majorities-favor-path-to-citizenship-over-mass-deportation-while-strengthening-the-border/"},bill:"—",note:"R 64% — just under ⅔ on its own"},
    ]},
    {dim:"Status of the undocumented", actor:"once thought the wedge — it clears when framed concretely", rows:[
      {pol:"Path to citizenship for Dreamers (brought as children)",act:"—",s:83,r:76,d:90,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"Framed for Dreamers, the path draws <b>76% of Republicans</b> — not the wedge the generic “amnesty vs. deportation” framing implies."},
      {pol:"Path to legal status for long-term undocumented with no criminal record",act:"—",s:77,r:69,d:87,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {dim:"Excluded — the wedge", actor:"where the balance test fails", rows:[
      {pol:"Border wall (~$25 billion)",act:"—",s:55,rdtext:"Democrats opposed",bar:"no",status:"Wedge — fails the balance test",src:{l:"Program for Public Consultation, 2024",h:"https://publicconsultation.org/immigration/swing-state-survey-majorities-favor-path-to-citizenship-over-mass-deportation-while-strengthening-the-border/"},bill:"—",below:true},
    ]},
  ],
},
{
  name:FR, idx:"Plank 5", color:"fr", tag:"An honest system — the rules are what they claim to be, and apply to everyone.",
  chart:{href:"CommonGround_ProductivityPay_v1.html",label:"The problem, measured: the productivity–pay gap"},
  chart2:{href:"CommonGround_TaxFairness_v1.html",label:"A second look: the system taxes work harder than wealth"},
  lede:"This isn't about fairness or redistribution — that's not where the consensus is — it's about honesty. The problem isn't any one person using a loophole; it's a set of rules that quietly lets the connected out while telling everyone else to play it straight. A tax code full of special escape hatches, hidden fees, wages that go unpaid — the system isn't what it claims to be. The problem, measured: for decades pay rose with productivity, but since the late 1970s they've split — the value produced per hour of work has grown <b>59.7%</b> while a typical worker's pay grew just <b>15.8%</b>. Workers helped build those gains and once shared in them; then they stopped getting their share. And the tax code makes the same broken promise: rates are meant to rise with income, yet at the very top — where income is wealth, not wages — the effective rate bends back down, below what a top salaried worker pays.",
  dimcols:"two",
  dims:[
    {nm:"An honest tax code", ds:"The rules are what they claim to be — no special escape hatches; everyone pays what they actually owe."},
    {nm:"Honest pay for work", ds:"Workers get the wages they earned — wage theft is cheating, plain and simple."},
    {nm:"Honest markets", ds:"No hidden fees, no rigging, no lock-in — the price is the price."},
  ],
  after:"This is why it works across the aisle: closing a loophole isn't class war — it's making the tax code <b>mean what it says</b>. An honest system, <b>not equal outcomes.</b> The clearest proof is carried interest: the specific loophole draws <b>70% of Republicans</b>, while the abstract slogan “make the rich pay their fair share” splits the country <b>41 to 81</b>.",
  subs:[
    {dim:"An honest tax code", actor:"everyone pays what they actually owe", rows:[
      {pol:"Close the carried-interest loophole",act:"Tax code",s:73,r:70,d:78,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation",h:"https://publicconsultation.org"},bill:"—",note:"The concrete loophole polls bipartisan (70 R). The <i>general</i> “wealthy/corporations don't pay their fair share” frustration is lopsided — Pew Jan 2026: 61% overall but <b>41 R / 81 D</b> — so the abstract framing is <b>not</b> a Platform item; the specific fix is."},
      {pol:"Wealth tax: 2% over $50M, 3% over $1B",act:"High-wealth households",s:80,r:72,d:88,bar:"no",tier:"excluded",status:"Set aside due to workability concerns",src:{l:"Program for Public Consultation",h:"https://publicconsultation.org"},bill:"—",note:"Clears on popularity (<b>72 R · 88 D</b>), but dropped on policy-design grounds — capital flight and enforceability make it unlikely to work as intended."},
      {pol:"Raise the corporate tax rate",act:"Corporations",s:63,rdtext:"majority; R lower",bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Pew 2025"},bill:"—"},
      {pol:"Raise taxes on incomes over $400k",act:"High earners",s:58,rdtext:"majority; R lower",bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Pew 2025"},bill:"—"},
    ]},
    {dim:"Honest pay for work", actor:"you get the wages you earned", rows:[
      {empty:"<b>Wage theft — the harm, measured.</b> Workers lose an estimated <b>~$50 billion a year</b> to wage theft — more than all robberies, burglaries, and auto thefts combined (EPI). Shown here as a <b>diagnostic, not a scored row</b>: enforcement is broadly popular, but there's no gold-standard party-split poll to place it on the Platform."},
      {pol:"Raise the federal minimum wage to $15/hr over five years (from $7.25)",act:"Employers / workers",s:94,r:90,d:97,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"National Common Ground: 94% (90 R). Phased to $15 over five years."},
    ]},
    {dim:"Honest markets", actor:"no rigging through monopoly", rows:[
      {pol:"Ban junk / hidden fees",act:"Corporations",rdtext:"advocacy polls only",bar:"yes",tier:"candidate",status:"Split unconfirmed",src:{l:"no gold-standard poll"},bill:"—",note:"Strong bipartisan by reputation, but the only polling is advocacy/industry (Economic Liberties / Lake) — no Pew/Gallup/NORC party split. Candidate, not counted on the Platform."},
      {pol:"Guarantee the right to repair what you own",act:"Corporations",rdtext:"advocacy polls only",bar:"yes",tier:"candidate",status:"Split unconfirmed",src:{l:"no gold-standard poll"},bill:"—",note:"Only industry/advocacy polling (iFixit / PIRG / auto coalitions). Candidate, not counted on the Platform."},
      {pol:"Antitrust action against dominant firms",act:"Corporations",rdtext:"split unconfirmed",bar:"yes",tier:"candidate",status:"Split unconfirmed",src:{l:"no gold-standard poll"},bill:"—",note:"No cited Pew/Gallup/NORC party split. Candidate, not counted on the Platform."},
    ]},
    {empty:"Not on the Platform: the $50M/$1B wealth tax (above) clears on popularity but was dropped on workability grounds. The three candidate rows are bipartisan by reputation but lack a gold-standard party split — not counted until confirmed."},
  ],
},
{
  name:OSR, idx:"Plank 6", color:"col", tag:"A hand up: invest in people so they can stand on their own.",
  chart:{href:"CommonGround_MobilityDecline_v1.html",label:"The problem, measured: the fading American Dream"},
  lede:"Self-reliance is motivated by seeing a real chance to get ahead — and that chance is shrinking. About <b>90%</b> of children born in 1940 grew up to out-earn their parents; for those born in the 1980s, only about <b>half</b> did. The American Dream has become a coin flip. This plank invests in people so they can stand on their own — a hand up, not a handout.",
  dimcols:"two",
  dims:[
    {nm:"Opportunity & skills", ds:"A real chance to get ahead — apprenticeships, training, infrastructure, and affordable paths up."},
    {nm:"A security floor", ds:"A floor so one setback isn't ruin — protect the safety net people paid into, so taking a risk isn't a gamble with everything."},
  ],
  after:"The tone is <b>hope, not grievance.</b> Conservatives back these as <b>investments that build self-reliance and reduce dependency</b> — not handouts — which is what keeps them bipartisan. The proof is in the safety-net rows: the same “higher earners pay a bit more” idea draws <b>79% of Republicans</b> when it's “fund Social Security,” but far fewer when it's “tax the rich.” Same policy, honest framing. (A strong-families theme — the child tax credit, paid family leave — is a natural addition here.)",
  subs:[
    {dim:"Opportunity & skills", actor:"a real chance to get ahead", rows:[
      {pol:"Fund apprenticeships & job training",act:"Government / workers",rdtext:"split unconfirmed",bar:"yes",tier:"candidate",status:"Split unconfirmed",src:{l:"no gold-standard poll"},bill:"—",note:"Bipartisan by reputation (JFF and others), but no cited Pew/Gallup/NORC party split. Candidate, not counted on the Platform."},
      {pol:"Invest in infrastructure",act:"Government",rdtext:"broad bipartisan",bar:"yes",status:"win",pill:"✓ Enacted",statusText:"Bipartisan Infrastructure Law (2021) — passed with Republican votes",src:{l:"enacted 2021"},bill:"IIJA 2021"},
      {pol:"Subsidize childcare so it costs no more than 7% of family income",act:"Government",s:83,r:77,d:89,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {dim:"A security floor", actor:"a floor so a setback isn't ruin (Rawls)", rows:[
      {pol:"Protect Social Security & Medicare from benefit cuts",act:"Government",s:79,bar:"yes",status:"Not yet assessed",src:{l:"AP-NORC 2023",h:"https://apnorc.org/projects/most-oppose-social-security-medicare-cuts/"},bill:"—",note:"79% overall oppose SS benefit cuts (AP-NORC 2023); a clean party split wasn't published — the payroll-cap row below carries verified R/D. High-overall, split-inferred."},
      {pol:"Do NOT cut federal Medicaid funding",act:"Government",s:91,r:80,d:97,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Fund Social Security by raising the payroll cap (>$400k)",act:"High earners",s:79,r:77,d:83,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"77% R — the framing proof vs. “tax the rich.” (National figure; Program for Public Consultation swing-state ran higher.)"},
      {pol:"Means-test: trim benefits for the top 20%",act:"High earners",s:65,r:62,d:69,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"National 65% (62 R) — Bipartisan majority. (Program for Public Consultation swing-state ran far higher; the national number is the honest one.)"},
      {pol:"Gradually raise the retirement age (67→68)",act:"Government",s:56,r:58,d:55,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"National 56% — Bipartisan majority, not Platform."},
      {pol:"Raise the payroll tax rate (6.2%→6.5%)",act:"Workers / employers",s:62,r:61,d:66,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"National 62% — Bipartisan majority."},
      {pol:"Raise the Social Security minimum benefit (to 125% of poverty)",act:"Government",s:78,r:76,d:81,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {empty:"Set aside: student-debt cancellation and free-college-for-all lean Democratic — held out as wedges. Apprenticeships is a candidate — bipartisan by reputation, but no gold-standard party split yet."},
  ],
},
{
  name:GUN, idx:"Plank 7", color:"gun",
  tag:"Keep guns from dangerous people — the agreement the debate hides.",
  chart:{href:"CommonGround_GunDangerousAccess_v1.html",label:"The problem, measured: dangerous access — and the cliff where agreement ends"},
  lede:"The agreed-upon problem isn't guns, and it isn't law-abiding owners — it's guns reaching people who are a <b>danger to others or to themselves</b>. <b>58% of gun deaths are suicides</b> (people in crisis), and most of the rest is interpersonal violence. Every Platform policy aims at that dangerous access. Frame it <b>people, not products</b> — which is why “keep guns from dangerous people” commands supermajorities while “ban this gun” does all the arguing.",
  dimcols:"two",
  dims:[
    {nm:"Danger to others", ds:"Keep guns from people who'd harm others — prohibited buyers, domestic abusers. Background checks are the gate."},
    {nm:"Danger to self", ds:"Step in when someone is in crisis — most gun deaths are suicides. Red-flag orders and secure storage buy time."},
  ],
  after:"<b>People, not products.</b> Republican support holds for keeping guns from dangerous people — background checks 70%, red-flag laws 66% — and only falls off a cliff at banning a whole category of gun (27%). Broad agreement on the specific fixes; a narrow fight on the symbolic ones. The pattern runs through the plank: aim at the dangerous person and their circumstances, not at law-abiding owners or the gun itself — that's where the agreement is. An assault-weapons ban and a national gun registry are where Republican voters draw the line.",
  subs:[
    {dim:"Danger to others", actor:"keep guns from those who'd harm others", rows:[
      {pol:"Universal background checks on all gun sales",act:"the gate",s:81,r:70,d:92,bar:"yes",src:{l:"Pew 2021",h:"https://www.pewresearch.org/short-reads/2024/07/24/key-facts-about-americans-and-guns/"},status:"Not yet assessed",bill:"H.R. 18 (2025)",billHref:"https://www.congress.gov/bill/119th-congress/house-bill/18/text",note:"The flagship: closes the private-sale gap that lets prohibited buyers skip a check. Pew 2021 (70 R); Fox 2019 higher (87%, 89 R)."},
      {pol:"Bar firearms for those under a domestic-violence restraining order",act:"abusers",s:82,bar:"yes",status:"win",pill:"✓ Enacted",statusText:"Lautenberg Amendment 1996; extended to dating partners by the Bipartisan Safer Communities Act 2022; upheld in U.S. v. Rahimi 2024",src:{l:"Johns Hopkins 2025",h:"https://publichealth.jhu.edu/center-for-gun-violence-solutions/data/national-survey-of-gun-policy"},bill:"BSCA 2022 (P.L. 117-159)",billHref:"https://www.congress.gov/bill/117th-congress/senate-bill/2938",note:"82% overall. Verified: neither JHU nor Pew publishes a clean R/D split — but gun-owner support (79%, vs 84% of non-owners) implies a Republican supermajority, and it's shown as a win on the enacted law regardless. An abuser's gun access makes intimate-partner homicide ~5× more likely (Campbell 2003)."},
      {pol:"Keep guns from people with serious mental illness",act:"the adjudicated dangerous",s:88,r:88,d:89,bar:"yes",src:{l:"Pew 2023",h:"https://www.pewresearch.org/politics/2023/06/28/americans-views-of-specific-gun-policy-proposals/"},status:"Not yet assessed",bill:"—"},
    ]},
    {dim:"Danger to self", actor:"step in during a crisis", rows:[
      {pol:"Red-flag laws — remove guns from people in crisis",act:"temporary removal",s:77,r:66,d:90,bar:"yes",src:{l:"Johns Hopkins 2025",h:"https://publichealth.jhu.edu/center-for-gun-violence-solutions/data/national-survey-of-gun-policy"},status:"Not yet assessed",bill:"H.R. 7599 (2026)",billHref:"https://www.congress.gov/bill/119th-congress/house-bill/7599",note:"R 66% sits right at the ⅔ line — an editorial-call Platform. Aims squarely at the 58%: most red-flag petitions are self-harm cases."},
      {pol:"Require safe storage of firearms",act:"secure it",rdtext:"split unconfirmed",bar:"yes",tier:"candidate",src:{l:"Johns Hopkins 2025",h:"https://publichealth.jhu.edu/center-for-gun-violence-solutions/data/national-survey-of-gun-policy"},status:"Split unconfirmed",bill:"—",note:"74% overall (JHU 2025), but verification found no published R/D split — and gun-owner support sits at 62%, below the ⅔ bar (R support did rise ~4 pts since 2023). Without a confirmed Republican supermajority it can't sit on the Platform; held as a candidate, like the waiting period. A clean R/D “support safe-storage” figure would move it."},
      {pol:"Mandatory waiting period before purchase",act:"cool-off",rdtext:"split unconfirmed",bar:"yes",tier:"candidate",src:{l:"no clean R/D"},status:"Split unconfirmed",bill:"—",note:"Aims at impulsive suicide (the 58%). Popular overall, but no gold-standard R/D “support a waiting period” figure. Closest signal: Pew 2023 — only 45% of Republicans want to <i>shorten</i> waiting periods, so most aren't hostile — but that's not enough to place it on the Platform. Candidate."},
    ]},
    {dim:"Clears the bar — set aside on principle", actor:"supermajority support, but it cuts against a settled precedent", rows:[
      {pol:"Raise the minimum purchase age to 21",act:"—",s:79,r:69,d:90,bar:"no",tier:"excluded",src:{l:"Pew 2023",h:"https://www.pewresearch.org/politics/2023/06/28/americans-views-of-specific-gun-policy-proposals/"},status:"Set aside on principle",bill:"—",note:"Clears the Platform bar (<b>79%</b> — 69% R, 90% D), but set aside on principle: 18 is the age of adult responsibility everywhere else — voting, contracts, military service — so a categorical 21 cutoff is an age line, not a dangerousness screen. Congress could still adopt it, and nothing on this Platform stands in the way."},
    ]},
    {dim:"Excluded — the wedge", actor:"the product fight, not the person", rows:[
      {pol:"Assault-weapons ban",act:"ban a category of gun",s:52,rdtext:"R 27 · D 82 (2024)",bar:"no",src:{l:"Gallup 2024",h:"https://news.gallup.com/poll/653489/majorities-back-stricter-gun-laws-assault-weapons-ban.aspx"},status:"Not bipartisan — R 27%, and falling since 2019",bill:"H.R. 3115 (2025)",billHref:"https://www.congress.gov/bill/119th-congress/house-bill/3115",below:true},
      {pol:"National gun registry",act:"—",rdtext:"divided",bar:"no",src:{l:"(verify)"},status:"Wedge",bill:"—",below:true},
    ]},
  ],
},
{
  name:ELEC, idx:"Plank 8", color:"elec",
  tag:"Easy to vote, hard to cheat — elections everyone can trust.",
  chart:{href:"CommonGround_ElectionTrust_v1.html",label:"The problem, measured: trust in elections now depends on who won"},
  lede:"Americans have lost confidence in elections — fewer than <b>6 in 10</b> now trust that votes are counted accurately, down from about two-thirds a decade ago. Worse, that confidence swings with the <b>result</b>: after 2024, Republican faith in the count jumped once Trump won, while Democrats' slipped — the same election, judged by who came out ahead. When trust depends on winning, no outcome is broadly accepted. The way back is rules both sides trust <i>before</i> they know who wins.",
  dimcols:"two",
  dims:[
    {nm:"Run-the-election mechanics", ds:"The nuts and bolts both sides trust — photo ID, a paper trail to audit, and time to vote."},
    {nm:"The access-vs-security wedge", ds:"Where each side pulls apart — mail & auto-registration on one side; roll purges, ballot-collection bans, proof-of-citizenship on the other."},
  ],
  after:"The best way through is the <b>mechanics</b>, not the outcome fight — and that's where agreement already exists: photo ID (95% R / 71% D), paper-ballot backups (87 / 82), time to vote. Those are the rules people accept <i>in advance</i>, before they know who wins. The wedges, notably, aren't all one party's: Republicans balk at no-excuse mail voting and automatic registration; Democrats balk at roll purges, ballot-collection bans, and proof-of-citizenship. On the nuts and bolts, the fight is louder than the disagreement — and <b>honest elections</b> (rules that are what they claim to be, applied to everyone) are the way trust gets rebuilt. (Pew, 2025.)",
  subs:[
    {dim:"Run-the-election mechanics", actor:"the strong core", rows:[
      {pol:"Require photo ID to vote",act:"—",s:83,r:95,d:71,bar:"yes",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—"},
      {pol:"Paper-ballot backups &amp; post-election audits",act:"—",s:84,r:87,d:82,bar:"yes",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—"},
      {pol:"Early in-person voting (2+ weeks)",act:"—",s:80,r:71,d:89,bar:"yes",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—"},
      {pol:"Make Election Day a federal holiday",act:"—",s:74,r:74,d:76,bar:"yes",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—"},
      {pol:"Modernize the Electoral Count Act",act:"—",rdtext:"enacted — bipartisan",bar:"yes",status:"win",pill:"✓ Enacted",statusText:"Electoral Count Reform Act 2022 — bipartisan fix to the 1887 law (clarified the VP's ceremonial role, raised the objection threshold); enacted in the Dec 2022 year-end package",src:{l:"enacted 2022"},bill:"ECRA 2022"},
    ]},
    {dim:"Bipartisan majority — Congress could add", actor:"over half in both, under ⅔ on one side", rows:[
      {pol:"Restore voting rights after a felony sentence is served",act:"—",s:66,r:56,d:77,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—"},
      {pol:"Independent redistricting commissions (end gerrymandering)",act:"—",s:81,r:81,d:83,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
    ]},
    {dim:"The access-vs-security wedge", actor:"where each side pulls apart — both directions", rows:[
      {pol:"No-excuse mail / absentee voting",act:"—",s:58,rdtext:"R 32 · D 83",bar:"no",status:"Wedge — R 32% (was 49% in 2020)",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—",below:true},
      {pol:"Automatic &amp; same-day voter registration",act:"—",s:59,rdtext:"R 42 · D 77",bar:"no",status:"Wedge — R under 50%",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—",below:true},
      {pol:"Remove inactive voters from the rolls (“purge”)",act:"—",s:43,rdtext:"R 63 · D 24",bar:"no",status:"Wedge — D 24% (fear of wrongful purges)",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—",below:true},
      {pol:"Ban ballot collection (“harvesting”)",act:"—",s:45,rdtext:"R 55 · D 37",bar:"no",status:"Wedge — D under 50%",src:{l:"Pew 2025",h:"https://www.pewresearch.org/politics/2025/08/22/majority-of-americans-continue-to-back-expanded-early-voting-voting-by-mail-voter-id/"},bill:"—",below:true},
      {pol:"Documentary proof-of-citizenship to register (SAVE Act)",act:"—",rdtext:"slim majority; D-divided",bar:"no",status:"Wedge — contested; no gold-standard R/D split",src:{l:"(verify)"},bill:"SAVE Act",below:true},
    ]},
  ],
},
{
  name:ENV, idx:"Plank 9", color:"env",
  tag:"Clean air, protected land, disaster resilience, energy security — goals both parties share, even where causes and cures divide us.",
  chart:{href:"CommonGround_EnvStakes_v1.html",label:"The problem, measured: four goals we share — clean air, protected nature, disaster resilience, energy security"},
  lede:"This plank protects four things Americans depend on and broadly agree are worth having: <b>the air we breathe, the lands and waters we pass on, our resilience to increasingly costly disasters, and our energy security.</b> The stakes are concrete: the Clean Air Act already prevents <b>~230,000 early deaths a year</b> (at benefits over 30× its cost); the outdoor-recreation economy runs <b>$1.2 trillion</b> and ~5 million jobs; billion-dollar disasters now cost <b>~$149B a year</b>, about double the long-run average; and the US has been a <b>net energy exporter since 2019.</b> You don't have to agree on climate science to share these goals — and in the national polling, every concrete energy-and-environment policy clears two-thirds of <i>both</i> parties.",
  dimcols:"two",
  dims:[
    {nm:"Clean air, land &amp; water", ds:"The stewardship bedrock — reduce air pollution, protect parks and public lands. Bipartisan for decades, and already producing wins."},
    {nm:"Cleaner energy &amp; lower emissions", ds:"Every concrete version of these policies clears two-thirds of both parties: efficiency and clean-energy credits, higher MPG, transition aid, an emissions goal. Only the “climate policy” slogan loses Republicans."},
  ],
  after:"<b>Agree on the goals; the fight is over causes and cures.</b> The wedge isn't whether clean air or public lands matter — it's the man-made-climate debate and the <i>mandate</i> cluster (a carbon tax, fossil-fuel bans, EV mandates). But the goal doesn't require settling the cause. And even the remedies clear when they're specific rather than sloganeering: a concrete goal of cutting emissions about <b>2% a year</b> draws <b>72% of Republicans</b>, while “prioritize renewables over fossil fuels” — the same aim as a slogan — draws just <b>28%</b>. One more sign of the pattern: Republicans underestimate their <i>own</i> party's support for clean-energy action by about 40 points.",
  subs:[
    {dim:"Clean air, land &amp; water", actor:"the stewardship bedrock", rows:[
      {pol:"Make reducing air pollution &amp; greenhouse gases a high priority",act:"—",s:86,r:79,d:94,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Protect national parks &amp; public lands",act:"—",s:88,r:88,d:93,bar:"yes",status:"Not yet assessed",src:{l:"More In Common",h:"https://moreincommonus.com/publication/americans-environmental-blind-spot/"},bill:"—",note:"Not in the 2026 National Common Ground core set; corroborates the enacted GAOA win below."},
      {pol:"Fully fund parks &amp; conservation",act:"—",rdtext:"enacted — bipartisan",bar:"yes",status:"win",pill:"✓ Enacted",statusText:"Great American Outdoors Act 2020 — permanent $900M/yr Land &amp; Water Conservation Fund + $9.5B park maintenance; Senate 73–25, signed Aug 2020",src:{l:"enacted 2020"},bill:"GAOA 2020"},
    ]},
    {dim:"Climate action, described — not sloganized", actor:"every concrete policy clears both parties", rows:[
      {pol:"The US should lead in clean-energy development",act:"—",s:83,r:73,d:93,bar:"yes",status:"Not yet assessed",src:{l:"More In Common",h:"https://moreincommonus.com/publication/americans-environmental-blind-spot/"},bill:"—",note:"The framing that works: “lead in clean energy” = 73% R; “prioritize renewables” = 28% (same goal, opposite frame). This is the contrast in the chart above."},
      {pol:"Transition assistance for fossil-fuel workers",act:"—",s:85,r:82,d:89,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Tax credits for energy-efficiency of homes &amp; buildings",act:"—",s:84,r:79,d:91,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Commit, with other countries, to reduce greenhouse gases",act:"—",s:82,r:75,d:91,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"An international emissions commitment — often assumed to be a partisan flashpoint — clears three-quarters of Republicans when described as a policy."},
      {pol:"Require new cars &amp; trucks to get more miles per gallon",act:"—",s:80,r:75,d:86,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Adopt the goal of reducing US emissions by ~2% a year",act:"—",s:80,r:72,d:90,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—",note:"The headline of the deliberative gap: even an explicit emissions-reduction target clears two-thirds of Republicans (72%) once it's a concrete policy rather than the slogan “climate policy.”"},
      {pol:"Tax credits for carbon-free energy production",act:"—",s:77,r:71,d:86,bar:"yes",status:"Not yet assessed",src:{l:"Program for Public Consultation, 2026",h:"https://www.common-ground.us/"},bill:"—"},
      {pol:"Expand nuclear power",act:"—",s:59,r:69,d:52,bar:"no",tier:"majority",status:"Not yet assessed",src:{l:"Pew 2025",h:"https://www.pewresearch.org/short-reads/2025/10/16/support-for-expanding-nuclear-power-is-up-in-both-parties-since-2020/"},bill:"—",note:"The one energy item where Republicans lead Democrats — and the only sub-⅔ item in the plank. Not in the National Common Ground core set."},
    ]},
    {dim:"Excluded — the wedge", actor:"everything coded as compulsion", rows:[
      {pol:"“Prioritize renewables over fossil fuels” (the slogan)",act:"—",s:57,rdtext:"R 28",bar:"no",status:"Same goal as every item above — but this framing loses Republicans",src:{l:"Pew 2026",h:"https://www.pewresearch.org/science/2026/04/03/americans-shifting-views-on-energy-issues/"},bill:"—",below:true},
      {pol:"Carbon tax · fossil-fuel bans · gas-car phase-out mandates",act:"—",rdtext:"R opposed",bar:"no",status:"Wedge — the “mandate” cluster",src:{l:"(verify)"},bill:"—",below:true},
    ]},
  ],
},
];

export const tierOf = (x: Row): string =>
  x.tier || (x.bar === "yes" ? "platform" : x.bar === "bord" ? "majority" : "excluded");

export const tierLabel: Record<string, string> = {
  platform: "In Platform",
  majority: "Majority",
  excluded: "Excluded",
  candidate: "Candidate",
};
export const tierPillClass: Record<string, string> = {
  platform: "pill plat",
  majority: "pill maj",
  excluded: "pill excl",
  candidate: "pill cand",
};
export const supColor = (t: string): string =>
  t === "platform" ? "var(--good)" : t === "majority" ? "var(--maj)" : "var(--muted)";
