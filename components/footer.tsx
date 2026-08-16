import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-5 py-12 text-foreground sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 border-b border-border pb-10 sm:pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-muted-foreground">
              Fountline Digital
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Ready to build something that moves your business forward?
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-muted-foreground hover:bg-muted-foreground sm:w-auto"
          >
            Start a project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-foreground">
              Fountline Digital
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Digital products, experiences, and brand systems for businesses
              ready to grow.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>

            <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-opacity hover:text-foreground hover:opacity-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </p>

            <a
              href="mailto:support@fountlinedigital.com"
              className="mt-4 inline-flex text-sm text-muted-foreground transition-opacity hover:text-foreground hover:opacity-100"
            >
              support@fountlinedigital.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Fountline Digital. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-opacity hover:text-foreground hover:opacity-100"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="transition-opacity hover:text-foreground hover:opacity-100"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}