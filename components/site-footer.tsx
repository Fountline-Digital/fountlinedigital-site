// components/site-footer.tsx
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      {/* CTA band */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            New projects
          </p>
          <h2 className="text-lg font-semibold tracking-tight">
            Ready to start something new?
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Fountline Digital helps businesses launch clean, modern web
            experiences that feel fast on every device.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-xs font-medium text-background shadow-sm transition hover:bg-foreground/90"
          >
            Start a project
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center text-xs font-medium text-muted-foreground hover:text-foreground transition"
          >
            View services
          </a>
        </div>
      </div>

      {/* Info strip */}
      <div className="border-t border-border bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Fountline Digital. All rights
            reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-4">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <a
              href="/services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a href="/about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-muted-foreground">
            Simpsonville, South Carolina, USA
          </p>
        </div>
      </div>
    </footer>
  );
}