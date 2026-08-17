import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
};

function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      Back to home
    </Link>
  );
}

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <BackToHomeButton />

        <header className="mt-16 border-b border-border pb-10">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-muted-foreground">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-sm text-muted-foreground">
            Last updated: {updatedAt}
          </p>
        </header>

        <article className="space-y-10 py-12 text-sm leading-7 text-muted-foreground sm:text-base">
          {children}

          <div className="border-t border-border pt-8">
            <BackToHomeButton />
          </div>
        </article>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
        {title}
      </h2>

      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}