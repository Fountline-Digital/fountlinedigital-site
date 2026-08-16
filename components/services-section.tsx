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
    label: "Web & Web Apps",
    eyebrow: "Digital foundations",
    title: "Web experiences built to move your business forward.",
    description:
      "From polished business websites to custom web applications, choose the right digital foundation for your next move.",
    packages: [
      {
        name: "Starter",
        label: "Make a strong first impression.",
        description:
          "A sharp, credible online presence for businesses ready to establish themselves and turn attention into action.",
        highlights: [
          "Modern visual direction",
          "Clear conversion path",
          "Launch-ready foundation",
        ],
      },
      {
        name: "Growth",
        label: "Build for momentum.",
        description:
          "A more capable web experience for businesses that need stronger storytelling, flexibility, and room to grow.",
        highlights: [
          "Expanded site experience",
          "Strategic page structure",
          "Built for future growth",
        ],
      },
      {
        name: "Pro",
        label: "Create a better digital workflow.",
        description:
          "A custom web application designed around real business needs, customer journeys, and the work behind the scenes.",
        highlights: [
          "Custom user experience",
          "Purpose-built functionality",
          "Scalable architecture",
        ],
      },
      {
        name: "Enterprise",
        label: "Solve the complex version.",
        description:
          "A tailored digital platform for ambitious organizations with sophisticated workflows, integrations, and long-term goals.",
        highlights: [
          "Phased project strategy",
          "Complex solution planning",
          "Built to scale with you",
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
        name: "Concept",
        label: "Turn the idea into a direction.",
        description:
          "Shape the vision into a focused mobile concept with a clear audience, user journey, and purpose.",
        highlights: [
          "Product direction",
          "Core user journey",
          "Clear launch vision",
        ],
      },
      {
        name: "Launch",
        label: "Bring the first version to life.",
        description:
          "Build a professional mobile product around the essential features your users need on day one.",
        highlights: [
          "Focused feature set",
          "Polished app experience",
          "Launch-ready product",
        ],
      },
      {
        name: "Scale",
        label: "Make the experience more capable.",
        description:
          "Expand an app with deeper workflows, connected systems, and room for a growing user base.",
        highlights: [
          "Advanced user flows",
          "Integration-ready design",
          "Growth-minded structure",
        ],
      },
      {
        name: "Custom",
        label: "Build around the whole vision.",
        description:
          "Create a made-to-measure mobile platform for a larger concept, complex process, or distinctive market opportunity.",
        highlights: [
          "Custom product strategy",
          "Complex feature planning",
          "Long-term flexibility",
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
        name: "Foundation",
        label: "Start with a confident visual base.",
        description:
          "Establish the design direction that gives a newer business a polished, intentional first impression.",
        highlights: [
          "Visual direction",
          "Foundational assets",
          "Consistent first impression",
        ],
      },
      {
        name: "Identity",
        label: "Create a brand people recognize.",
        description:
          "Develop a complete identity system that brings clarity and consistency across your business.",
        highlights: [
          "Cohesive brand system",
          "Consistent design language",
          "Practical brand assets",
        ],
      },
      {
        name: "Campaign",
        label: "Bring the brand into motion.",
        description:
          "Create focused assets that give a promotion, launch, or campaign a more professional presence.",
        highlights: [
          "Campaign-ready visuals",
          "Focused creative direction",
          "Built for attention",
        ],
      },
      {
        name: "Custom",
        label: "Design for the bigger picture.",
        description:
          "Build a flexible creative partnership for organizations that need design support across many touchpoints.",
        highlights: [
          "Tailored creative support",
          "Multi-channel consistency",
          "Room to evolve",
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
        name: "Essential",
        label: "Keep the basics handled.",
        description:
          "A dependable support layer for businesses that want their digital presence maintained and looked after.",
        highlights: [
          "Routine upkeep",
          "Reliable support",
          "Healthier site foundation",
        ],
      },
      {
        name: "Growth",
        label: "Keep improving as you grow.",
        description:
          "Ongoing support for businesses that need regular updates, refinement, and a partner who stays involved.",
        highlights: [
          "Continual improvements",
          "Priority updates",
          "Growth-focused guidance",
        ],
      },
      {
        name: "Priority",
        label: "Stay responsive and proactive.",
        description:
          "Higher-touch support for businesses that rely on their digital presence and need faster attention as things change.",
        highlights: [
          "Priority support",
          "Proactive improvements",
          "Hands-on partnership",
        ],
      },
      {
        name: "Custom",
        label: "Support that fits the operation.",
        description:
          "A tailored maintenance relationship built around your platform, pace of change, and business priorities.",
        highlights: [
          "Custom coverage",
          "Flexible support model",
          "Long-term partnership",
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