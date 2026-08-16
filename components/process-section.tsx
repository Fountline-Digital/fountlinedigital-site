const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn what you need, who it is for, and what success should look like.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the idea into a clear direction, scope, and practical path forward.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We shape the experience, develop the solution, and keep you involved at key points.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deliver a polished result and stay available as your business evolves.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="flex min-h-screen snap-start items-center bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-muted-foreground">
            The process
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Clear steps. No guesswork.
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Every project takes a different shape, but the work stays focused,
            collaborative, and easy to follow.
          </p>
        </div>

        <ol className="relative mx-auto mt-10 max-w-6xl border-l border-border sm:mt-14 md:grid md:grid-cols-4 md:border-l-0">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 hidden h-px bg-border md:block"
          />

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative border-b border-border py-6 pl-7 last:border-b-0 md:border-b-0 md:px-6 md:pb-0 md:pt-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-8 size-2.5 rounded-full border border-ring bg-background md:left-6 md:top-[-5px]"
              />

              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                {step.number}
              </p>

              <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-foreground">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}