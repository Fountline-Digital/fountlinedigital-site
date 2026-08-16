import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>

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