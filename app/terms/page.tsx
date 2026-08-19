import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Fountline Digital"
      title="Terms of Use"
      updatedAt="August 16, 2026"
    >
      <LegalSection title="Acceptance of these terms">
        <p>
          By accessing or using the Fountline Digital website, you agree to
          these Terms of Use. If you do not agree, please do not use this
          website.
        </p>
      </LegalSection>

      <LegalSection title="Website purpose">
        <p>
          This website provides general information about Fountline Digital and
          its services. Submitting an inquiry does not create a client
          relationship, guarantee availability, or form a contract for services.
        </p>
      </LegalSection>

      <LegalSection title="Project engagements">
        <p>
          Any project work, pricing, timelines, deliverables, and payment terms
          will be governed by a separate written proposal, statement of work, or
          service agreement agreed upon by both parties.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Unless otherwise stated, the content, design, branding, graphics, and
          code on this website are owned by or licensed to Fountline Digital.
          You may not reproduce, distribute, modify, or commercially use them
          without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>
          You agree not to misuse this website, interfere with its operation,
          attempt unauthorized access, submit harmful material, or use the site
          in violation of applicable laws.
        </p>
      </LegalSection>

      <LegalSection title="Third-party links">
        <p>
          This website may include links to third-party websites. Fountline
          Digital does not control and is not responsible for their content,
          availability, or privacy practices.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          This website is provided on an “as is” and “as available” basis.
          Fountline Digital does not guarantee that the website will always be
          accurate, uninterrupted, secure, or free of errors.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent allowed by applicable law, Fountline Digital is
          not liable for indirect, incidental, special, consequential, or
          punitive damages arising from use of, or inability to use, this
          website.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may revise these terms from time to time. Continued use of the
          website after an update means you accept the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about these terms, use{" "}
          <Link
            href="/#contact"
            className="text-foreground underline underline-offset-4"
          >
            the contact form
          </Link>{" "}
          or email support@fountlinedigital.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}