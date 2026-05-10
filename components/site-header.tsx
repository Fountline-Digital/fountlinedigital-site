// components/site-header.tsx
"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { mainNavItems } from "@/app/config/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            Fountline <span className="text-muted-foreground">Digital</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.highlight
                  ? "rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background shadow-sm hover:bg-foreground/90 transition"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile nav (theme + hamburger + drawer) */}
        <MobileNav />
      </div>
    </header>
  );
}