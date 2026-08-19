import { ArrowDownRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen snap-start items-center overflow-hidden bg-background px-5 pb-16 pt-28 text-foreground sm:px-8 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-30 [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.07)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.07)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:56px_56px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-[120px] sm:h-[35rem] sm:w-[35rem] sm:blur-[160px]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-[0.625rem] font-medium uppercase tracking-[0.24em] text-muted-foreground sm:mb-6 sm:text-xs sm:tracking-[0.3em]">
          Web Design · Web Apps · Mobile Apps · Brand Design
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
          Digital systems built to move your business forward.
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
          Fountline Digital creates high-performance websites, mobile
          experiences, and clear brand systems for businesses ready to grow.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full cursor-pointer border border-primary bg-primary text-primary-foreground transition-colors hover:border-muted-foreground hover:bg-muted-foreground hover:text-primary-foreground active:bg-foreground sm:w-auto"
            )}
          >
            Start a project
            <ArrowDownRight
              data-icon="inline-end"
              className="size-4"
              aria-hidden="true"
            />
          </a>

          <a
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full cursor-pointer border-border bg-transparent text-foreground transition-colors hover:border-ring hover:bg-accent hover:text-accent-foreground sm:w-auto"
            )}
          >
            Explore services
          </a>
        </div>

        <a
          href="#services"
          className="mt-14 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-opacity hover:text-foreground hover:opacity-100 focus-visible:text-foreground focus-visible:opacity-100 sm:mt-16 sm:text-xs"
        >
          Scroll to explore
          <ArrowDownRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}