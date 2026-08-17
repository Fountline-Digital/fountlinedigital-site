import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  summary: string;
  services: string[];
  image: string;
  imageAlt: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Your first project",
    category: "Web design",
    summary: "A concise overview of the project, problem, and outcome.",
    services: ["Strategy", "Design", "Development"],
    image: "/work/project-one.jpg",
    imageAlt: "Overview of the finished Your first project website",
    href: "#contact",
  },
  {
    title: "Operations dashboard",
    category: "Web app",
    summary: "A clearer way for internal teams to manage work and priorities.",
    services: ["UX/UI", "Development", "Systems"],
    image: "/work/operations-dashboard.jpg",
    imageAlt: "Operations dashboard showing workflow and status data",
    href: "#contact",
  },
  {
    title: "Brand refresh",
    category: "Brand identity",
    summary: "A visual system that makes a growing company easy to recognize.",
    services: ["Identity", "Website", "Guidelines"],
    image: "/work/brand-refresh.jpg",
    imageAlt: "Brand identity and website screens from a company refresh",
    href: "#contact",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group block w-52 shrink-0 overflow-hidden border border-white/15 bg-white/5 outline-none transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:w-56"
      aria-label={`View ${project.title} project`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="224px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
        />
      </div>

      <div className="p-3">
        <p className="text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/55">
          {project.category}
        </p>

        <div className="mt-1.5 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold tracking-[-0.03em] text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            className="mt-0.5 size-3.5 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:pt-2.5 group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:pt-2.5 group-focus-visible:opacity-100">
          <div className="overflow-hidden">
            <p className="text-xs leading-5 text-white/65">
              {project.summary}
            </p>

            <ul className="mt-2 flex flex-wrap gap-1">
              {project.services.map((service) => (
                <li
                  key={service}
                  className="border border-white/20 px-1.5 py-0.5 text-[0.5rem] font-medium uppercase tracking-[0.08em] text-white/65"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-3 pr-3"
      aria-hidden={ariaHidden || undefined}
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export function WorkSection() {
  return (
    <section
      id="work"
      className="snap-start overflow-hidden bg-black py-10 text-white sm:py-12"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.23em] text-white/60">
            Selected work
          </p>

          <h2
            id="work-heading"
            className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl"
          >
            Work that creates momentum.
          </h2>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="work-ticker flex w-max">
          <ProjectTrack />
          <ProjectTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}