// FOR YOUR WEBSITE PROJECT (fountlinedigital.com), not the portal.
// Turns a contact-form submission into a Lead ticket in the portal.
//
// .env (website, locally and in Netlify):
//   PORTAL_INTAKE_URL=https://portal.fountlinedigital.com/api/intake/contact
//   PORTAL_INTAKE_SECRET=<same value as INTAKE_SECRET in the portal>

/** The JSON your ContactSection posts to /api/contact. */
export type ContactPayload = {
  fullName?: unknown;
  companyName?: unknown;
  email?: unknown;
  phone?: unknown;
  contactMethod?: unknown;
  timeline?: unknown;
  currentLink?: unknown;
  projectGoal?: unknown;
  projectSummary?: unknown;
  services?: unknown;
  packages?: unknown;
  companyWebsite?: unknown; // honeypot: hidden, real people leave it empty
};

// Website ids -> the portal's service line names (what the contact form rules match on)
const SERVICE_NAMES: Record<string, string> = {
  web: "Web",
  app: "Mobile Apps",
  design: "Branding & Design",
  maintenance: "Maintenance",
};

// Website package ids -> portal package keys (FD-<line>-<tier>)
const LINE: Record<string, string> = { web: "WEB", app: "MOB", design: "BRD", maintenance: "MNT" };
const TIER: Record<string, string> = {
  essentials: "ESS",
  business: "BUS",
  enterprise: "ENT",
  custom: "CUS",
  // Graphic Design uses its own names; mapped to the matching tier
  campaign: "BUS",
  brand: "ENT",
};
const packageKey = (id: string) => {
  const [line, tier] = id.split("-");
  return LINE[line] && TIER[tier] ? `FD-${LINE[line]}-${TIER[tier]}` : id;
};

const TIMELINES: Record<string, string> = {
  asap: "As soon as possible",
  "one-month": "Within 1 month",
  "one-to-three-months": "1–3 months",
  "three-plus-months": "3+ months",
  flexible: "Flexible / not sure yet",
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const list = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []);

export function toPortalLead(p: ContactPayload) {
  const fields: Record<string, string | string[]> = {
    service: list(p.services).map((s) => SERVICE_NAMES[s] ?? s),
    package: list(p.packages).map(packageKey),
    timeline: TIMELINES[str(p.timeline)] ?? str(p.timeline),
    goal: str(p.projectGoal),
    "contact method": str(p.contactMethod),
  };
  if (str(p.currentLink)) fields.link = str(p.currentLink);
  return {
    name: str(p.fullName),
    email: str(p.email),
    phone: str(p.phone),
    company: str(p.companyName),
    message: str(p.projectSummary),
    fields,
    honeypot: str(p.companyWebsite),
  };
}

/** Never throws: the visitor's submission (and your email) shouldn't fail if the portal is down. */
export async function sendLeadToPortal(payload: ContactPayload, request: Request) {
  const url = process.env.PORTAL_INTAKE_URL;
  const secret = process.env.PORTAL_INTAKE_SECRET;
  if (!url || !secret) {
    console.warn("[portal-intake] PORTAL_INTAKE_URL / PORTAL_INTAKE_SECRET not set; skipping");
    return { ok: false };
  }
  // Netlify passes the visitor's IP in x-nf-client-connection-ip (used for rate limiting)
  const ip = request.headers.get("x-nf-client-connection-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
      body: JSON.stringify({ ...toPortalLead(payload), ip }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("[portal-intake] portal answered", res.status, await res.text());
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error("[portal-intake] couldn't reach the portal", err);
    return { ok: false };
  }
}
