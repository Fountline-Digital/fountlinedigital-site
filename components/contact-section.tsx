import { ArrowUpRight } from "lucide-react";

const inputClassName =
  "mt-2 w-full border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30";

const labelClassName =
  "text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen snap-start items-center bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <div className="max-w-xl lg:sticky lg:top-28">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-muted-foreground">
            Start a conversation
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Tell us what you are building.
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Share a little about your business and what you need. This form is
            the starting point for figuring out the right direction together.
          </p>

          <div className="mt-8 border-l border-border pl-4">
            <p className="text-sm font-medium text-foreground">
              Prefer to reach out directly?
            </p>

            <a
              href="mailto:hello@fountlinedigital.com"
              className="mt-2 inline-flex text-sm text-muted-foreground transition-opacity hover:text-foreground hover:opacity-100"
            >
              hello@fountlinedigital.com
            </a>
          </div>
        </div>

        <form className="border border-border bg-card p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="full-name" className={labelClassName}>
                Full name <span aria-hidden="true">*</span>
              </label>

              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="company-name" className={labelClassName}>
                Company name
              </label>

              <input
                id="company-name"
                name="companyName"
                type="text"
                autoComplete="organization"
                placeholder="Your company"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClassName}>
                Email <span aria-hidden="true">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(000) 000-0000"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-method" className={labelClassName}>
                Preferred contact method
              </label>

              <select
                id="contact-method"
                name="contactMethod"
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="either">Either is fine</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className={labelClassName}>
                Type of work <span aria-hidden="true">*</span>
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className={inputClassName}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="web-app">Web App</option>
                <option value="mobile-app">Mobile App</option>
                <option value="maintenance">Maintenance</option>
                <option value="quote">Quote</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="package" className={labelClassName}>
                Package interest
              </label>

              <select
                id="package"
                name="package"
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="starter">Starter</option>
                <option value="growth">Growth</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
                <option value="custom">Custom</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className={labelClassName}>
                Target timeline
              </label>

              <select
                id="timeline"
                name="timeline"
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="asap">As soon as possible</option>
                <option value="one-month">Within 1 month</option>
                <option value="one-to-three-months">1–3 months</option>
                <option value="three-plus-months">3+ months</option>
                <option value="flexible">Flexible / not sure yet</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="current-link" className={labelClassName}>
              Current website, app, or reference link
            </label>

            <input
              id="current-link"
              name="currentLink"
              type="url"
              placeholder="https://"
              className={inputClassName}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="project-goal" className={labelClassName}>
              What are you hoping to accomplish?
            </label>

            <input
              id="project-goal"
              name="projectGoal"
              type="text"
              placeholder="For example: launch a new service, improve conversions, streamline a workflow"
              className={inputClassName}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="project-summary" className={labelClassName}>
              Tell us about the project <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="project-summary"
              name="projectSummary"
              required
              rows={5}
              placeholder="Share any useful details, goals, problems to solve, or ideas you have so far."
              className={`${inputClassName} resize-y`}
            />
          </div>

          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            Fields marked with <span aria-hidden="true">*</span> are required.
            Form delivery will be connected in a future update.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-muted-foreground hover:bg-muted-foreground sm:w-auto"
          >
            Send project details
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}