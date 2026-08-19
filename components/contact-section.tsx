"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type ServiceKey = "web" | "app" | "design" | "maintenance";

const services: Array<{
  id: ServiceKey;
  label: string;
  description: string;
}> = [
  {
    id: "web",
    label: "Web Development",
    description: "Websites, landing pages, and web applications.",
  },
  {
    id: "app",
    label: "Mobile Apps",
    description: "Native or cross-platform mobile products.",
  },
  {
    id: "design",
    label: "Graphic Design",
    description: "Brand identity, campaigns, and marketing design.",
  },
  {
    id: "maintenance",
    label: "Maintenance Support",
    description: "Ongoing website or app support.",
  },
];

const packagesByService: Record<
  ServiceKey,
  Array<{ id: string; label: string; description: string }>
> = {
  web: [
    {
      id: "web-essentials",
      label: "Web Essentials",
      description: "Focused template-based website build.",
    },
    {
      id: "web-business",
      label: "Web Business",
      description: "Expanded business website with more flexibility.",
    },
    {
      id: "web-enterprise",
      label: "Web Enterprise",
      description: "Negotiated enterprise web application engagement.",
    },
    {
      id: "web-custom",
      label: "Web Custom",
      description: "A tailored scope for a unique web need.",
    },
  ],
  app: [
    {
      id: "app-essentials",
      label: "App Essentials",
      description: "A focused mobile product for a defined need.",
    },
    {
      id: "app-business",
      label: "App Business",
      description: "A more complete mobile experience for a growing business.",
    },
    {
      id: "app-enterprise",
      label: "App Enterprise",
      description: "A larger mobile platform with custom requirements.",
    },
    {
      id: "app-custom",
      label: "App Custom",
      description: "A tailored mobile engagement.",
    },
  ],
  design: [
    {
      id: "design-essentials",
      label: "Design Essentials",
      description: "Focused design support for a clear deliverable.",
    },
    {
      id: "design-campaign",
      label: "Design Campaign",
      description: "Creative assets for a launch, event, or promotion.",
    },
    {
      id: "design-brand",
      label: "Design Brand",
      description: "A complete identity system for consistent growth.",
    },
    {
      id: "design-custom",
      label: "Design Custom",
      description: "A tailored design engagement.",
    },
  ],
  maintenance: [
    {
      id: "maintenance-essentials",
      label: "Maintenance Essentials",
      description: "Baseline ongoing maintenance coverage.",
    },
    {
      id: "maintenance-business",
      label: "Maintenance Business",
      description: "Broader support for active business systems.",
    },
    {
      id: "maintenance-enterprise",
      label: "Maintenance Enterprise",
      description: "Expanded queue-based coverage for complex systems.",
    },
    {
      id: "maintenance-custom",
      label: "Maintenance Custom",
      description: "Flexible ongoing support built around your needs.",
    },
  ],
};

const inputClassName =
  "mt-2 w-full border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30";

const labelClassName =
  "text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground";

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<ServiceKey[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [selectionError, setSelectionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const availablePackages = selectedServices.flatMap(
    (service) => packagesByService[service] ?? []
  );

  function toggleService(service: ServiceKey) {
    setSelectedServices((current) => {
      const nextServices = current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service];

      const allowedPackageIds = nextServices.flatMap((selectedService) =>
        packagesByService[selectedService].map((pkg) => pkg.id)
      );

      setSelectedPackages((currentPackages) =>
        currentPackages.filter((packageId) =>
          allowedPackageIds.includes(packageId)
        )
      );

      return nextServices;
    });

    setSelectionError("");
    setSubmitStatus({ type: "", message: "" });
  }

  function togglePackage(packageId: string) {
    setSelectedPackages((current) =>
      current.includes(packageId)
        ? current.filter((item) => item !== packageId)
        : [...current, packageId]
    );

    setSelectionError("");
    setSubmitStatus({ type: "", message: "" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (selectedServices.length === 0) {
      setSelectionError("Select at least one service before submitting.");
      return;
    }

    if (selectedPackages.length === 0) {
      setSelectionError("Select at least one matching package before submitting.");
      return;
    }

    setSelectionError("");
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      contactMethod: formData.get("contactMethod"),
      timeline: formData.get("timeline"),
      currentLink: formData.get("currentLink"),
      projectGoal: formData.get("projectGoal"),
      projectSummary: formData.get("projectSummary"),
      services: selectedServices,
      packages: selectedPackages,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

let result: { error?: string } = {};

if (responseText) {
  try {
    result = JSON.parse(responseText) as { error?: string };
  } catch {
    result = {};
  }
}

if (!response.ok) {
  throw new Error(
    result.error ||
      "Unable to send your inquiry. Please try again or email hello@fountlinedigital.com."
  );
}

      form.reset();
      setSelectedServices([]);
      setSelectedPackages([]);

      setSubmitStatus({
        type: "success",
        message:
          "Thanks — your inquiry has been sent. We will be in touch soon.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24"
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
            Select your services, choose the packages you are considering, and
            share enough context for a useful first conversation.
          </p>

          <div className="mt-8 border-l border-border pl-4">
            <p className="text-sm font-medium text-foreground">
              Prefer to reach out directly?
            </p>

            <a
              href="mailto:hello@fountlinedigital.com"
              className="mt-2 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@fountlinedigital.com
            </a>
          </div>
        </div>

        <form
          className="border border-border bg-card p-5 sm:p-7"
          onSubmit={handleSubmit}
        >
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
                minLength={2}
                maxLength={80}
                pattern=".*\S.*"
                title="Enter your name using at least 2 characters."
                placeholder="Your name"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="company-name" className={labelClassName}>
                Company name <span aria-hidden="true">*</span>
              </label>

              <input
                id="company-name"
                name="companyName"
                type="text"
                autoComplete="organization"
                required
                minLength={2}
                maxLength={120}
                pattern=".*\S.*"
                title="Enter your company name using at least 2 characters."
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
                minLength={5}
                maxLength={254}
                title="Enter a valid email address."
                placeholder="you@company.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone number <span aria-hidden="true">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={7}
                maxLength={25}
                pattern="[0-9+().\s-]{7,25}"
                title="Enter a valid phone number using 7 to 25 characters."
                placeholder="(000) 000-0000"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-method" className={labelClassName}>
              Preferred contact method <span aria-hidden="true">*</span>
            </label>

            <select
              id="contact-method"
              name="contactMethod"
              defaultValue=""
              required
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

          <fieldset className="mt-7">
            <legend className={labelClassName}>
              What do you need help with? <span aria-hidden="true">*</span>
              <span className="normal-case tracking-normal text-muted-foreground">
                {" "}
                Select all that apply.
              </span>
            </legend>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {services.map((service) => {
                const isSelected = selectedServices.includes(service.id);

                return (
                  <label
                    key={service.id}
                    className={`cursor-pointer border p-3 transition-colors ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service.id}
                      checked={isSelected}
                      onChange={() => toggleService(service.id)}
                      className="sr-only"
                    />

                    <span className="block text-sm font-medium">
                      {service.label}
                    </span>

                    <span
                      className={`mt-1 block text-xs leading-5 ${
                        isSelected
                          ? "text-primary-foreground/75"
                          : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {selectedServices.length > 0 && (
            <fieldset className="mt-7 border-t border-border pt-7">
              <legend className={labelClassName}>
                Package interest <span aria-hidden="true">*</span>
                <span className="normal-case tracking-normal text-muted-foreground">
                  {" "}
                  Select all that apply.
                </span>
              </legend>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {availablePackages.map((pkg) => {
                  const isSelected = selectedPackages.includes(pkg.id);

                  return (
                    <label
                      key={pkg.id}
                      className={`cursor-pointer border p-3 transition-colors ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-muted-foreground"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="packages"
                        value={pkg.id}
                        checked={isSelected}
                        onChange={() => togglePackage(pkg.id)}
                        className="sr-only"
                      />

                      <span className="block text-sm font-medium">
                        {pkg.label}
                      </span>

                      <span
                        className={`mt-1 block text-xs leading-5 ${
                          isSelected
                            ? "text-primary-foreground/75"
                            : "text-muted-foreground"
                        }`}
                      >
                        {pkg.description}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          )}

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="timeline" className={labelClassName}>
                Target timeline <span aria-hidden="true">*</span>
              </label>

              <select
                id="timeline"
                name="timeline"
                defaultValue=""
                required
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

            <div>
              <label htmlFor="current-link" className={labelClassName}>
                Current website, app, or reference link
              </label>

              <input
                id="current-link"
                name="currentLink"
                type="url"
                maxLength={2048}
                title="Enter a full URL, such as https://example.com."
                placeholder="https://"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="project-goal" className={labelClassName}>
              What are you hoping to accomplish?{" "}
              <span aria-hidden="true">*</span>
            </label>

            <input
              id="project-goal"
              name="projectGoal"
              type="text"
              required
              minLength={10}
              maxLength={180}
              title="Tell us your goal using at least 10 characters."
              placeholder="For example: launch a service, improve conversions, streamline a workflow"
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
              minLength={30}
              maxLength={2000}
              rows={5}
              title="Share at least 30 characters about the project."
              placeholder="Share the goals, key requirements, problems to solve, or ideas you have so far."
              className={`${inputClassName} resize-y`}
            />
          </div>

          {selectionError && (
            <p
              role="alert"
              className="mt-5 border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {selectionError}
            </p>
          )}

          {submitStatus.type && (
            <p
              role="status"
              className={`mt-5 border px-3 py-2 text-sm ${
                submitStatus.type === "success"
                  ? "border-primary/40 bg-primary/10 text-foreground"
                  : "border-destructive/40 bg-destructive/10 text-destructive"
              }`}
            >
              {submitStatus.message}
            </p>
          )}

          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            All fields are required except the current website, app, or reference
            link.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-muted-foreground hover:bg-muted-foreground disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending inquiry..." : "Send project details"}

            {!isSubmitting && (
              <ArrowUpRight className="size-4" aria-hidden="true" />
            )}
          </button>
        </form>
      </div>
    </section>
  );
}