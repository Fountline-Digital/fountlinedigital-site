"use client";

import { useState } from "react";
import { mainNavItems } from "@/app/config/nav";
import { ModeToggle } from "@/components/mode-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top row: theme + hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        <button
          type="button"
          className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-4 rounded bg-foreground" />
          <span className="block h-0.5 w-4 rounded bg-foreground" />
          <span className="block h-0.5 w-4 rounded bg-foreground" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-64 border-l border-border bg-background/95 shadow-xl transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-sm font-medium tracking-tight">
            Fountline Digital
          </span>
          <button
            type="button"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <span className="absolute h-0.5 w-3.5 rounded bg-foreground rotate-45" />
            <span className="absolute h-0.5 w-3.5 rounded bg-foreground -rotate-45" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-3 text-sm">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}