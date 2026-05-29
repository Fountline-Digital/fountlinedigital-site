// app/web-app-packages/page.tsx

import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Web App Packages | Fountline Digital",
  description:
    "Tiered web app packages from starter sites to complex systems, with clear scope, timelines, and maintenance options.",
};

const webTiers = [
  {
    name: "Starter Web App",
    badge: "Best for simple sites",
    summary: "Clean, professional presence for small projects and local businesses.",
    bullets: [
      "1–5 pages, brand‑adapted templates, fully responsive.",
      "Contact form and basic SEO setup included.",
      "2 revision rounds, no ecommerce, logins, or custom systems.",
      "Soft turnaround: about 1 month, depending on content and approvals.",
    ],
  },
  {
    name: "Growth Web App",
    badge: "Growing teams",
    summary: "Custom website for small teams that need more pages and flexibility.",
    bullets: [
      "5–10 pages, fully custom design.",
      "Blog/CMS, 1–2 integrations, advanced forms, email marketing, light animations.",
      "4 revision rounds, excludes ecommerce, user accounts, booking, and payments.",
      "Soft turnaround: about 2 months, depending on scope and feedback.",
    ],
  },
  {
    name: "Pro Web App",
    badge: "Advanced builds",
    summary: "Full-featured web app with ecommerce, logins, and portal-level experiences.",
    bullets: [
      "10–20 pages, fully custom, with ecommerce, user accounts, payments, booking, and membership if needed.",
      "Client portal (full access), 3–5 integrations, advanced animations, standard database‑backed features included.",
      "Includes 6–12 months of maintenance by default; revision rounds defined per project.",
      "Soft turnaround: up to 6 months for full builds, with rush options negotiable.",
    ],
  },
  {
    name: "Enterprise Web App",
    badge: "Complex systems",
    summary:
      "Complex systems and multi-site ecosystems, scoped around business goals instead of page count.",
    bullets: [
      "No page limit; scoped by complexity and objectives rather than page count.",
      "Multi‑role portals, advanced automations, complex backend and integrations, multi‑site/multi‑brand, internationalization, deeper analytics.",
      "Includes 6–12 months of maintenance and negotiated revision structure.",
      "Soft turnaround: up to 18 months with phased delivery for larger systems.",
    ],
  },
];

export default function WebAppPackagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Intro / hero */}
      <section className="relative border-b border-border bg-background/80">
        {/* subtle background glow in neutral tones */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_60%)] opacity-70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 md:py-20">
          <div className="space-y-4 max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
              Web App Packages
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Packages for modern web apps.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Structured tiers for everything from lean marketing sites to complex,
              database‑backed systems—built with the same performance‑first, futuristic approach
              as your main Fountline experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground md:text-sm">
            <span className="rounded-full border border-border/60 px-3 py-1">
              Custom builds on modern frameworks.
            </span>
            <span className="rounded-full border border-border/60 px-3 py-1">
              Soft timelines with negotiated launch dates.
            </span>
          </div>
        </div>
      </section>

      {/* Tier grid – 4 across on lg+ */}
      <section className="relative border-b border-border bg-background">
        {/* faint tech grid overlay in greys */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:80px_80px] opacity-45" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {webTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border border-slate-500/60",
                  "bg-card/60 backdrop-blur-2xl",
                  "before:pointer-events-none before:absolute before:inset-px before:rounded-2xl before:border before:border-white/10 before:content-['']",
                  "shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:shadow-[0_0_40px_rgba(148,163,184,0.55)] transition-shadow duration-300"
                )}
              >
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base md:text-lg tracking-tight">
                      {tier.name}
                    </CardTitle>
                    <span className="rounded-full border border-border/70 bg-background/50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {tier.badge}
                    </span>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground md:text-sm">
                    {tier.summary}
                  </CardDescription>
                </CardHeader>

                {/* flex-1 ensures footer stays at bottom */}
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {tier.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-slate-200/90 shadow-[0_0_10px_rgba(148,163,184,0.7)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex items-center justify-center border-t border-border/70 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-slate-200/80 bg-slate-200/10 px-5 text-xs md:text-[13px] text-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-100 transition-colors"
                    asChild
                  >
                    <a
                      href={`/contact?category=web&package=${encodeURIComponent(
                        tier.name
                      )}`}
                    >
                      Start with {tier.name.replace(" Web App", "")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom project strip */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-base font-semibold md:text-lg">
              Custom web applications
            </h2>
            <p className="text-xs text-muted-foreground md:text-sm">
              When a project doesn’t fit cleanly into a package—complex systems, multi‑phase
              transformations, or unusual constraints—we shift into a discovery‑led custom scope
              with phased delivery.
            </p>
          </div>
          <Button
            size="sm"
            className="rounded-full px-5 text-xs md:text-sm"
            asChild
          >
            <a href="/contact?category=web&package=custom">
              Talk about a custom build
            </a>
          </Button>
        </div>
      </section>

      {/* Maintenance add‑on section */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 space-y-3">
            <h2 className="text-lg font-semibold tracking-tight md:text-xl">
              Maintenance options after launch.
            </h2>
            <p className="max-w-2xl text-xs text-muted-foreground md:text-sm">
              Pro and Enterprise projects include a maintenance window by default. When that ends,
              you can move into one of Fountline Digital’s ongoing maintenance tiers to keep your
              app updated, secure, and supported.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl">
              <h3 className="text-sm font-medium md:text-base">Essential</h3>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                Updates, security and platform patches, bug fixes, basic monitoring, and 2–3
                hours/month for minor content or image changes, with 24–48 hour response times.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl">
              <h3 className="text-sm font-medium md:text-base">Professional</h3>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                5–8 hours/month, 12–24 hour response, priority queue, performance monitoring,
                monthly reports, and limited feature tweaks (no major rebuilds or new systems).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-xl">
              <h3 className="text-sm font-medium md:text-base">Enterprise</h3>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">
                10–15 hours/month, 4–12 hour response with same‑day support for emergencies,
                higher‑touch optimization and support while still excluding full new‑project work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}