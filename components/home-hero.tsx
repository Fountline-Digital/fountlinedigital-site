"use client";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] bg-background">
      {/* full-hero wave background using background-position animation */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-wave hero-wave-band absolute inset-0" />
      </div>

      {/* vignette on top */}
      <div className="pointer-events-none absolute inset-0 hero-vignette" />

      {/* content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center">
        {/* Text column */}
        <div className="hero-animate flex-1 space-y-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Fountline Digital
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
            Sleek, responsive experiences for ambitious brands.
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Design and development for sites that feel intentional, fast, and
            on‑brand on every screen—from first load to final interaction.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 text-xs font-medium text-background shadow-sm transition hover:bg-foreground/90 hover:shadow-[0_0_30px_rgba(148,163,184,0.7)]"
            >
              Start a project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-xs font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              View services
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Accepting new projects</span>
            </div>
            <div>Based in Simpsonville, South Carolina</div>
          </div>
        </div>

        {/* Laptop-shaped glass card */}
        <div className="hero-animate flex-1 md:[animation-delay:120ms]">
          <div className="relative h-64 md:h-80 [perspective:1400px]">
            <div className="hero-tilt-strong relative ml-auto mr-2 flex h-full w-[90%] max-w-md flex-col rounded-[1.5rem] border border-border bg-card/80 px-5 pb-4 pt-3 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-2 hover:rotate-x-[18deg] hover:rotate-y-[-18deg]">
              {/* top bar / bezel */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Live preview
                </span>
              </div>

              {/* “screen” */}
              <div className="flex-1 rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-3 flex items-center justify-between text-[11px] text-foreground/90">
                  <span className="font-medium">Project dashboard</span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                    Realtime
                  </span>
                </div>

                <div className="space-y-3 text-[10px] text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.16em]">
                      Layout grid
                    </span>
                    <span className="text-foreground">12‑col / fluid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-[0.16em]">
                      Performance
                    </span>
                    <span className="text-emerald-300">Optimized</span>
                  </div>
                  <div className="mt-3 h-[1px] w-full bg-gradient-to-r from-border/60 via-foreground/80 to-border/50" />
                  <p className="pt-2 text-[11px] leading-relaxed">
                    Interfaces that feel like product, not just pages — tuned
                    for speed, clarity, and consistency.
                  </p>
                </div>
              </div>

              {/* keyboard strip */}
              <div className="mt-3 h-4 rounded-[1.25rem] border border-border bg-gradient-to-b from-foreground/10 to-background/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}