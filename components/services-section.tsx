"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Package = {
  name: string;
  label: string;
  description: string;
  highlights: string[];
};

type Service = {
  value: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  packages: Package[];
};

const services: Service[] = [
  {
    value: "web",
    label: "Web",
    eyebrow: "Digital foundations",
    title: "Web experiences built to move your business forward.",
    description:
      "From polished business websites to custom web applications, choose the right digital foundation for your next move.",
    packages: [
      {
        name: "Essentials",
        label: "Make a strong first impression.",
        description:
          "Best for: businesses that need a professional online presence without custom development.",
        highlights: [
          "Up to 5 pages",
          "Up to 2 standard forms",
          "Basic SEO and analytics setup",
          "Hosting, domain, DNS, and email-record setup support",
          "Legal pages included",
          "1 revision round",
          "30-day post-launch bug support",
        ],
      },
      {
        name: "Business",
        label: "Build for momentum.",
        description:
          "Best for: established small businesses, growing service providers, professional firms, local companies with multiple services or locations, and organizations that need a stronger website to generate and manage leads.",
        highlights: [
          "Everything in Web Essentials",
          "Up to 15 pages",
          "Tailored layouts and content structure",
          "Up to 4 standard forms",
          "Booking, CRM, and lead-routing setup",
          "Enhanced basic SEO and conversion tracking",
          "Basic Store Add-On available",
          "2 revision rounds",
          "30-day post-launch bug support",
        ],
      },
      {
        name: "Enterprise",
        label: "Create a better digital workflow.",
        description:
          "Best for: organizations that need a custom portal, internal system, advanced ecommerce experience, connected workflows, or scalable web application.",
        highlights: [
          "Negotiated, project-specific scope",
          "Custom workflows, portals, dashboards, and user access",
          "Database-backed features and business-system integrations",
          "Advanced ecommerce, automation, reporting, or content management as needed",
          "Security, performance, testing, documentation, training, and launch support based on scope",
          "Optional ongoing maintenance and support",
        ],
      },
      {
        name: "Custom",
        label: "Solve the complex version.",
        description:
          "Best for: organizations with specialized requirements, evolving product ideas, or a need for an ongoing technical partner.",
        highlights: [
          "Product discovery, strategy, and phased roadmaps",
          "SaaS products, marketplaces, platforms, and custom applications",
          "Advanced backend systems, APIs, automation, and integrations",
          "Scalable architecture, security, deployment, and monitoring",
          "Optional long-term development and maintenance support",
        ],
      },
    ],
  },
  {
    value: "mobile",
    label: "Mobile Apps",
    eyebrow: "Experiences in hand",
    title: "Bring your idea to the devices people use every day.",
    description:
      "Create a polished mobile experience that makes your product, service, or internal workflow accessible anywhere.",
    packages: [
      {
        name: "Essentials",
        label: "Turn the idea into a direction.",
        description:
          "Best for: businesses, organizations, and events that want a straightforward branded app without accounts, backend systems, or custom functionality.",
        highlights: [
          "Native iOS or Android app",
          "One app store per package",
          "Up to 5 primary screens",
          "Template-based design customized to your brand",
          "Static, local app content",
          "App-store submission support",
          "1 revision round",
          "30-day post-launch bug support",
        ],
      },
      {
        name: "Business",
        label: "Bring the first version to life.",
        description:
          "Best for: businesses, organizations, and events that need a branded native app with customer accounts, live content, scheduling, service requests, event features, member resources, or a focused connection to an existing business system.",
        highlights: [
          "Everything in App Essentials",
          "Custom layouts and branded user experience",
          "Login, profiles, and live content",
          "One primary business feature",
          "Up to 2 standard integrations",
          "2 revision rounds",
        ],
      },
      {
        name: "Enterprise",
        label: "Make the experience more capable.",
        description:
          "Best for: organizations that need a connected, high-capability native mobile app built around their operations or customer experience.",
        highlights: [
          "Everything in App Business",
          "Native iOS, Android, or both platforms",
          "Custom backend, APIs, user roles, workflows, and admin tools",
          "Advanced integrations, payments, notifications, mapping, or automation as scoped",
          "Security, testing, documentation, training, and release support based on scope",
          "Optional ongoing maintenance and support",
        ],
      },
      {
        name: "Custom",
        label: "Build around the whole vision.",
        description:
          "Best for: teams with a unique product vision, advanced technical needs, or an evolving mobile roadmap.",
        highlights: [
          "Product strategy, discovery, prototypes, and phased roadmaps",
          "Native iOS and Android development",
          "Advanced backends, APIs, real-time features, automation, and integrations",
          "Scalable architecture, security, testing, store release, and monitoring",
          "Optional long-term development and maintenance support",
        ],
      },
    ],
  },
  {
    value: "branding",
    label: "Branding & Design",
    eyebrow: "A clearer identity",
    title: "Make every touchpoint look like it belongs together.",
    description:
      "Build a visual identity and creative system that helps people recognize, trust, and remember your business.",
    packages: [
      {
        name: "Essentials",
        label: "Start with a confident visual base.",
        description:
          "Best for: businesses that need a clean, professional visual starting point.",
        highlights: [
          "New logo design or logo refresh",
          "Primary logo with color, black, and white versions",
          "Core color palette and typography recommendations",
          "One social, favicon, or email-signature asset",
          "Final web and print-ready files",
          "2 revision rounds",
        ],
      },
      {
        name: "Campaign",
        label: "Create a brand people recognize.",
        description:
          "Best for: businesses promoting a specific offer, event, launch, or campaign.",
        highlights: [
          "Everything in Design Essentials",
          "One campaign creative direction",
          "Up to 6 campaign assets",
          "Channel and size variations",
          "Reusable campaign templates",
          "Web and print-ready files",
          "3 revision rounds",
        ],
      },
      {
        name: "Brand",
        label: "Bring the brand into motion.",
        description:
          "Best for: businesses that need a polished, scalable identity across every customer touchpoint.",
        highlights: [
          "Everything in Design Campaign",
          "Full logo suite, color system, and typography system",
          "Brand guidelines and visual-style direction",
          "Reusable social, sales, and communication templates",
          "Website visual-direction guidance",
          "Final web, print, and editable brand files",
          "4 revision rounds",
        ],
      },
      {
        name: "Custom",
        label: "Design for the bigger picture.",
        description:
          "Best for: businesses with specialized design needs, major creative initiatives, or ongoing marketing demands.",
        highlights: [
          "Custom creative direction and project planning",
          "Large campaigns, packaging, signage, events, and collateral",
          "Advanced visual systems, illustrations, templates, and motion work",
          "Website and app visual-design systems",
          "Optional retainer support and production coordination",
        ],
      },
    ],
  },
  {
    value: "maintenance",
    label: "Maintenance",
    eyebrow: "Support after launch",
    title: "Keep your digital presence working after launch.",
    description:
      "Stay current, supported, and ready to adapt without treating every update like a brand-new project.",
    packages: [
      {
        name: "Essentials",
        label: "Keep the basics handled.",
        description:
          "Best for: businesses that need baseline technical upkeep without ongoing content or feature work.",
        highlights: [
          "One website or one native app",
          "Monthly updates and maintenance review",
          "Backup, security, uptime, and core-function checks where applicable",
          "Monthly maintenance summary",
          "Queue-based support",
          "Existing sites and apps accepted after assessment",
        ],
      },
      {
        name: "Business",
        label: "Keep improving as you grow.",
        description:
          "Best for: businesses with an active website or app that needs regular attention beyond baseline upkeep.",
        highlights: [
          "Everything in Maintenance Essentials",
          "Integration and workflow monitoring",
          "Up to 1 hour of minor updates each month",
          "Performance review and quarterly improvement check-in",
          "Priority queue-based support",
        ],
      },
      {
        name: "Enterprise",
        label: "Stay responsive and proactive.",
        description:
          "Best for: organizations that rely on their website or app for sales, customer service, or daily operations.",
        highlights: [
          "Everything in Maintenance Business",
          "Advanced monitoring and integration checks",
          "Up to 3 hours of monthly support and approved updates",
          "Monthly reporting and planning check-in",
          "Priority queue and business-hours urgent-issue escalation",
        ],
      },
      {
        name: "Custom",
        label: "Support that fits the operation.",
        description:
          "Best for: organizations with complex technology, multiple systems, or specialized ongoing support requirements.",
        highlights: [
          "Support for multiple websites, apps, platforms, and environments",
          "Custom monitoring, maintenance hours, reporting, and escalation procedures",
          "Hosting, deployments, security, backups, integrations, and store-release management",
          "Optional reserved development capacity and on-call coverage",
          "Strategic technical planning and long-term support",
        ],
      },
    ],
  },
];

function PackagePanel({ service }: { service: Service }) {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const activePackage = service.packages[selectedPackage];

  return (
    <div className="mx-auto mt-5 w-full max-w-3xl sm:mt-6">
      <div className="flex gap-1.5 overflow-x-auto px-0.5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
        {service.packages.map((item, index) => {
          const isActive = selectedPackage === index;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedPackage(index)}
              aria-pressed={isActive}
              className={cn(
                "cursor-pointer shrink-0 rounded-md border px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white transition-all sm:px-3.5",
                isActive
                  ? "border-white bg-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.18)]"
                  : "border-white/25 bg-transparent text-white hover:border-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <article className="mt-3 border border-white/20 bg-white/[0.04] px-5 py-6 text-left sm:mt-4 sm:px-7 sm:py-7">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white">
            {activePackage.name} package
          </p>

          <span className="h-px w-10 bg-white/70" aria-hidden="true" />
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
          {activePackage.label}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white">
          {activePackage.description}
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          {activePackage.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-sm text-white"
            >
              <Check
                className="size-3.5 shrink-0 text-white"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "default" }),
            "mt-6 w-full cursor-pointer border border-white bg-white text-black hover:border-zinc-200 hover:bg-zinc-200 hover:text-black active:border-zinc-300 active:bg-zinc-300 sm:w-auto"
          )}
        >
          Discuss this package
          <ArrowUpRight
            data-icon="inline-end"
            className="size-4"
            aria-hidden="true"
          />
        </a>
      </article>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex min-h-screen snap-start items-center bg-black px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-white">
            What we build
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Find the right starting point.
          </h2>

          <p className="mt-3 text-sm leading-6 text-white sm:text-base">
            Select a service, explore the package direction, and start where
            your business is today.
          </p>
        </div>

        <Tabs defaultValue="web" className="mt-7 w-full sm:mt-8">
          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="mx-auto flex min-w-max gap-1 rounded-lg border border-white/20 bg-white/[0.04] p-1">
              {services.map((service) => (
                <TabsTrigger
                  key={service.value}
                  value={service.value}
                  className="h-9 rounded-md border border-transparent px-3 text-[0.65rem] uppercase tracking-[0.1em] !text-white transition-all hover:!border-white/60 hover:!bg-white/10 hover:!text-white data-active:!border-white/80 data-active:!bg-white/20 data-active:!text-white data-active:shadow-[0_0_20px_rgba(255,255,255,0.18)] sm:h-10 sm:px-5 sm:text-xs"
                >
                  {service.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.value} value={service.value}>
              <div className="mx-auto mt-5 max-w-2xl text-center sm:mt-6">
                <p className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white">
                  {service.eyebrow}
                </p>

                <h3 className="mt-2 text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white">
                  {service.description}
                </p>
              </div>

              <PackagePanel key={service.value} service={service} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}