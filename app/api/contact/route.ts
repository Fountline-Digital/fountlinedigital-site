import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendLeadToPortal } from "@/lib/portal-intake";

// Created on first use, not at import: `next build` loads this file without your
// environment variables, and Resend throws if the key is missing.
let resendClient: Resend | null = null;
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  resendClient ??= new Resend(key);
  return resendClient;
}

const CONTACT_EMAIL = "hello@fountlinedigital.com";
const FROM_EMAIL = "Fountline Digital <hello@fountlinedigital.com>";

const allowedServices = new Set(["web", "app", "design", "maintenance"]);

const allowedPackages = new Set([
  "web-essentials",
  "web-business",
  "web-enterprise",
  "web-custom",
  "app-essentials",
  "app-business",
  "app-enterprise",
  "app-custom",
  "design-essentials",
  "design-campaign",
  "design-brand",
  "design-custom",
  "maintenance-essentials",
  "maintenance-business",
  "maintenance-enterprise",
  "maintenance-custom",
]);

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character
  );
}

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function listHtml(items: string[]): string {
  if (items.length === 0) {
    return "<p>Not provided</p>";
  }

  return `<ul>${items.map((item) => `<li>${escapeHtml(formatLabel(item))}</li>`).join("")}</ul>`;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const formData = body as Record<string, unknown>;

    // Honeypot: a hidden field people never see. Bots fill it in, so pretend it worked and stop.
    if (cleanText(formData.companyWebsite, 500)) {
      return NextResponse.json({ success: true });
    }

    const fullName = cleanText(formData.fullName, 80);
    const companyName = cleanText(formData.companyName, 120);
    const email = cleanText(formData.email, 254);
    const phone = cleanText(formData.phone, 25);
    const contactMethod = cleanText(formData.contactMethod, 30);
    const timeline = cleanText(formData.timeline, 50);
    const rawLink = cleanText(formData.currentLink, 2048);
    // Only real web links (no javascript: or other schemes) make it into the email
    const currentLink = /^https?:\/\//i.test(rawLink) ? rawLink : "";
    const projectGoal = cleanText(formData.projectGoal, 180);
    const projectSummary = cleanText(formData.projectSummary, 2000);

    const services = Array.isArray(formData.services)
      ? formData.services.filter(isString).filter((service: string) => allowedServices.has(service))
      : [];

    const packages = Array.isArray(formData.packages)
      ? formData.packages.filter(isString).filter((pkg: string) => allowedPackages.has(pkg))
      : [];

    if (
      fullName.length < 2 ||
      companyName.length < 2 ||
      !email.includes("@") ||
      phone.length < 7 ||
      !contactMethod ||
      services.length === 0 ||
      packages.length === 0 ||
      !timeline ||
      projectGoal.length < 10 ||
      projectSummary.length < 30
    ) {
      return NextResponse.json({ error: "Please complete all required fields correctly." }, { status: 400 });
    }

    // Send the email and create the portal lead at the same time.
    // The visitor sees success if either one worked, so nothing is lost if one is down.
    const [emailResult, portalResult] = await Promise.all([
      // A missing key or a Resend outage counts as "email failed", so the portal lead still goes through
      (async () => {
        try {
          return await getResend().emails.send({
            from: FROM_EMAIL,
            to: [CONTACT_EMAIL],
            replyTo: email,
            subject: `New inquiry from ${fullName} — ${companyName}`,
            html: `
              <h1>New Fountline Digital inquiry</h1>
    
              <h2>Contact</h2>
              <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
              <p><strong>Company:</strong> ${escapeHtml(companyName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
              <p><strong>Preferred contact method:</strong> ${escapeHtml(formatLabel(contactMethod))}</p>
    
              <h2>Requested services</h2>
              ${listHtml(services)}
    
              <h2>Package interest</h2>
              ${listHtml(packages)}
    
              <h2>Project details</h2>
              <p><strong>Timeline:</strong> ${escapeHtml(formatLabel(timeline))}</p>
              <p><strong>Current link:</strong> ${
                currentLink ? `<a href="${escapeHtml(currentLink)}">${escapeHtml(currentLink)}</a>` : "Not provided"
              }</p>
              <p><strong>Goal:</strong> ${escapeHtml(projectGoal)}</p>
              <p><strong>Summary:</strong></p>
              <p>${escapeHtml(projectSummary).replace(/\n/g, "<br />")}</p>
            `,
          });
        } catch (err) {
          return { error: err };
        }
      })(),
      // Only the cleaned, validated values go to the portal
      sendLeadToPortal(
        {
          fullName,
          companyName,
          email,
          phone,
          contactMethod,
          timeline,
          currentLink,
          projectGoal,
          projectSummary,
          services,
          packages,
        },
        request
      ),
    ]);

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
    }

    if (emailResult.error && !portalResult.ok) {
      return NextResponse.json({ error: "Unable to send your inquiry right now." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json({ error: "Unable to process your inquiry right now." }, { status: 500 });
  }
}
