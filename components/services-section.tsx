"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceType = "web" | "mobile" | "design";

const SERVICE_OPTIONS: { id: ServiceType; label: string }[] = [
  { id: "web", label: "Web apps" },
  { id: "mobile", label: "Mobile apps" },
  { id: "design", label: "Design" },
];

/* WEB PACKAGES – condensed but detailed */
const webTiers = [
  {
    name: "Starter Web App",
    shortLabel: "Starter",
    summary: "1–5 page marketing site for a clean, professional presence.",
    bullets: [
      "1–5 pages, brand-adapted templates, fully responsive.",
      "Contact form and basic SEO setup.",
      "2 revision rounds, no ecommerce, logins, or custom systems.",
      "Soft turnaround: about 1 month.",
    ],
  },
  {
    name: "Growth Web App",
    shortLabel: "Growth",
    summary: "5–10 page custom site with CMS and light integrations.",
    bullets: [
      "5–10 pages, fully custom design.",
      "Blog/CMS, 1–2 integrations, advanced forms, email marketing.",
      "4 revision rounds, light animations.",
      "Excludes ecommerce, auth, booking, payments.",
    ],
  },
  {
    name: "Pro Web App",
    shortLabel: "Pro",
    summary: "10–20 page web app with ecommerce, logins, and portals.",
    bullets: [
      "10–20 pages, fully custom.",
      "Ecommerce, user accounts, payments, booking, membership if needed.",
      "Client portal, 3–5 integrations, advanced animations.",
      "Includes 6–12 months of maintenance by default.",
    ],
  },
  {
    name: "Enterprise Web App",
    shortLabel: "Enterprise",
    summary: "No page limit; complex systems and multi-site ecosystems.",
    bullets: [
      "Scoped by complexity and business goals, not page count.",
      "Multi-role portals, advanced automations, complex backend and integrations.",
      "Multi-site/multi-brand, internationalization, deeper analytics.",
      "Includes 6–12 months of maintenance with phased delivery.",
    ],
  },
];

/* MOBILE PACKAGES */
const mobileTiers = [
  {
    name: "Starter Mobile App",
    shortLabel: "Starter",
    summary: "3–5 screen native MVP for one platform (iOS or Android).",
    bullets: [
      "3–5 screens, focused single-purpose MVP.",
      "Basic UI, navigation, local storage, analytics.",
      "App Store / Play Store submission for one platform.",
      "No backend/database, 2 revision rounds.",
    ],
  },
  {
    name: "Growth Mobile App",
    shortLabel: "Growth",
    summary: "5–10 screen app with backend, auth, and core flows.",
    bullets: [
      "5–10 screens, native iOS or Android (or both as an add-on).",
      "Backend, auth, 1–2 API integrations, cloud sync.",
      "Forms, basic profiles, offline mode, media support.",
      "Excludes payments/ecommerce/subscriptions/real-time.",
    ],
  },
  {
    name: "Pro Mobile App",
    shortLabel: "Pro",
    summary: "10–20 screen app with payments, roles, and advanced features.",
    bullets: [
      "10–20 screens, native app with business-grade features.",
      "Payments, ecommerce, subscriptions, roles, real-time features.",
      "3–5 integrations, multi-language, social and in-app purchases.",
      "Includes maintenance window; custom APIs reserved for Enterprise.",
    ],
  },
  {
    name: "Enterprise Mobile App",
    shortLabel: "Enterprise",
    summary: "Complex multi-platform systems with deeper backend work.",
    bullets: [
      "No practical screen limit; scoped around systems, not screens.",
      "Custom APIs, complex backend, broader ecosystems (web + mobile).",
      "Advanced security and infrastructure considerations.",
      "Phased delivery with longer maintenance included.",
    ],
  },
];

/* DESIGN PACKAGES */
const designTiers = [
  {
    name: "Logo & Brand Starter",
    shortLabel: "Starter",
    summary: "Core identity for new brands and side projects.",
    bullets: [
      "Primary logo + simple lockup variants.",
      "Basic color palette and typography choices.",
      "One-page brand reference sheet (PDF).",
      "2 revision rounds, files for web and print.",
    ],
  },
  {
    name: "Brand + Collateral",
    shortLabel: "Brand + Collateral",
    summary: "Brand identity plus essential marketing pieces.",
    bullets: [
      "Everything in Logo & Brand Starter.",
      "Choice of several collateral items (e.g., business card, social templates, one-sheet).",
      "Layered source files where applicable.",
      "3 revision rounds across brand + collateral.",
    ],
  },
  {
    name: "Brand System",
    shortLabel: "Brand System",
    summary: "Deeper brand system to support long-term growth.",
    bullets: [
      "Extended logo system, color and type scales.",
      "Multi-page brand guidelines (usage, examples, do/don't).",
      "More collateral or UI starter kit aligned to your product.",
      "Designed to match your web/app visual language.",
    ],
  },
];

/* MAINTENANCE TIERS – shared */
const maintenanceTiers = [
  {
    name: "Essential Maintenance",
    summary:
      "Baseline protection and small tweaks for sites and apps.",
    bullets: [
      "Security and platform updates, bug fixes, basic monitoring.",
      "2–3 hours/month for minor content or image changes.",
      "Typical response time: 24–48 business hours.",
    ],
  },
  {
    name: "Professional Maintenance",
    summary:
      "Ongoing optimization and priority support for growing products.",
    bullets: [
      "5–8 hours/month, 12–24 hour response, priority queue.",
      "Performance monitoring and monthly reports.",
      "Limited feature tweaks (no major rebuilds or new systems).",
    ],
  },
  {
    name: "Enterprise Maintenance",
    summary:
      "Higher-touch support for mission-critical web and app systems.",
    bullets: [
      "10–15 hours/month, 4–12 hour response with same-day for emergencies.",
      "Deeper optimization and strategic recommendations.",
      "Still excludes full new-project builds (scoped separately).",
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceType>("web");

  const activeTiers =
    activeService === "web"
      ? webTiers
      : activeService === "mobile"
      ? mobileTiers
      : designTiers;

  return (
    <section
      id="services"
      className="relative border-t border-border bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Everything Fountline builds for you.
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Web apps, native mobile apps, and brand design packages—plus ongoing maintenance—so your
            product and visuals stay aligned over time.
          </p>
        </div>

        {/* Toggle */}
        <div className="inline-flex rounded-full border border-border bg-card/60 p-1 text-xs md:text-sm">
          {SERVICE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setActiveService(option.id)}
              className={cn(
                "px-4 py-1.5 rounded-full transition-colors",
                "text-muted-foreground",
                activeService === option.id &&
                  "bg-foreground text-background shadow-[0_0_20px_rgba(148,163,184,0.6)]"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Active service packages */}
        <div className="space-y-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {activeTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border border-slate-500/60",
                  "bg-card/60 backdrop-blur-2xl",
                  "before:pointer-events-none before:absolute before:inset-px before:rounded-2xl before:border before:border-white/10 before:content-['']",
                  "shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(148,163,184,0.55)] transition-shadow duration-300"
                )}
              >
                <CardHeader className="space-y-2 pb-3">
                  <CardTitle className="text-sm md:text-base tracking-tight">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-[11px] text-muted-foreground md:text-xs">
                    {tier.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-1.5 text-[11px] leading-relaxed text-muted-foreground md:text-xs">
                    {tier.bullets.map((item: string) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-slate-200/90 shadow-[0_0_8px_rgba(148,163,184,0.7)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-border/70 pt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-slate-200/80 bg-slate-200/10 px-4 text-[11px] md:text-xs text-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-100 transition-colors"
                    asChild
                  >
                    <a
                      href={`/contact?category=${activeService}&package=${encodeURIComponent(
                        tier.name
                      )}`}
                    >
                      Start {tier.shortLabel}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* “Across all packages” helper text, per service */}
          {activeService === "web" && (
            <p className="text-[11px] text-muted-foreground md:text-xs">
              All web app packages include responsive design, baseline accessibility, analytics
              hookup, and deployment to a production-ready environment.
            </p>
          )}
          {activeService === "mobile" && (
            <p className="text-[11px] text-muted-foreground md:text-xs">
              All mobile packages use native builds, include store submission for at least one
              platform, and follow your existing payment and revision policies.
            </p>
          )}
          {activeService === "design" && (
            <p className="text-[11px] text-muted-foreground md:text-xs">
              All design packages include agreed file formats, clear licensing, and revision
              structure aligned with Fountline’s policy framework.
            </p>
          )}
        </div>

        {/* Maintenance – always visible */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold md:text-base">
            Maintenance packages for web and apps.
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {maintenanceTiers.map((tier) => (
              <Card
                key={tier.name}
                className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl"
              >
                <h4 className="text-sm font-medium md:text-base">{tier.name}</h4>
                <p className="mt-2 text-[11px] text-muted-foreground md:text-xs">
                  {tier.summary}
                </p>
                <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground md:text-xs">
                  {tier.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-slate-200/90" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}