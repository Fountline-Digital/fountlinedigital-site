import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "projects",
    question: "What kinds of projects do you take on?",
    answer:
      "Fountline Digital builds websites, web applications, mobile applications, and brand or graphic design systems. Each engagement begins by identifying the work that will make the biggest difference for your business.",
  },
  {
    value: "cost",
    question: "How much does a project cost?",
    answer:
      "Project cost depends on the scope, complexity, timeline, and goals involved. After an initial conversation, you will receive a clear direction on what makes sense before work begins.",
  },
  {
    value: "timeline",
    question: "How long does a project take?",
    answer:
      "Timelines vary by project size and complexity. A focused project can move quickly, while a larger web or mobile application requires more discovery, design, development, and review time.",
  },
  {
    value: "existing",
    question: "Can you work with an existing website or brand?",
    answer:
      "Yes. The work can start from an existing website, visual identity, or product idea. The first step is understanding what should be preserved, improved, or rebuilt.",
  },
  {
    value: "changes",
    question: "What happens if the scope changes?",
    answer:
      "Changes are discussed before they are added to the work. That keeps the project clear, protects the timeline, and makes sure new requirements are properly planned.",
  },
  {
    value: "support",
    question: "Do you offer support after launch?",
    answer:
      "Yes. Ongoing maintenance and support options are available for businesses that want help keeping their digital presence current, reliable, and ready to evolve.",
  },
  {
    value: "start",
    question: "How do we get started?",
    answer:
      "Start by reaching out with a brief description of your business, your goals, and what you need help with. From there, the conversation can determine the right next step.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="flex min-h-screen snap-start items-center bg-background px-5 py-20 text-foreground sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.23em] text-muted-foreground">
            Questions, answered
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            A few things you may be wondering.
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            If your question is not here, reach out and we can talk through it.
          </p>
        </div>

        <Accordion
          multiple
          className="mx-auto mt-8 max-w-3xl overflow-hidden border border-border bg-card sm:mt-10"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="px-5 py-5 text-base font-medium tracking-[-0.015em] text-foreground no-underline hover:bg-accent hover:no-underline sm:px-6 sm:text-lg">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="px-5 text-sm leading-6 text-muted-foreground sm:px-6 sm:text-base sm:leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}