"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const leftLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

const rightLinks = [
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const desktopLinkClass =
  "text-xs font-medium uppercase tracking-[0.12em] text-foreground/65 transition-opacity hover:text-foreground hover:opacity-100 focus-visible:text-foreground focus-visible:opacity-100";

const mobileLinkClass =
  "border-b border-border py-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground/75 transition-opacity hover:text-foreground hover:opacity-100 focus-visible:text-foreground focus-visible:opacity-100";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center px-5 sm:px-8"
      >
        <div className="hidden flex-1 items-center gap-7 md:flex">
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          onClick={closeMenu}
          aria-label="Fountline home"
          className="absolute left-1/2 -translate-x-1/2 text-center text-sm font-semibold uppercase tracking-[0.24em] text-foreground/80 transition-opacity hover:text-foreground hover:opacity-100 focus-visible:text-foreground focus-visible:opacity-100"
        >
          Fountline
        </a>

        <div className="hidden flex-1 items-center justify-end gap-7 md:flex">
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="ml-auto inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:border-ring hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:bg-accent md:hidden"
        >
          {isOpen ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <Menu className="size-4" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}