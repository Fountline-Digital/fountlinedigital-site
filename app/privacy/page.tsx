import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Fountline Digital"
      title="Privacy Policy"
      updatedAt="August 16, 2026"
    >
      <LegalSection title="Overview">
        <p>
          Fountline Digital respects your privacy. This policy explains how we
          collect, use, and protect information when you visit our website or
          contact us about a project.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          When you submit an inquiry, we may collect the information you provide,
          including your name, company name, email address, phone number,
          preferred contact method, project details, timeline, and any links you
          choose to share.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use submitted information to:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to inquiries and discuss potential projects.</li>
          <li>Prepare estimates, proposals, or project communications.</li>
          <li>Improve our services and website experience.</li>
          <li>Meet legal, security, and record-keeping obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>
          We do not sell personal information. We may share information with
          service providers that help operate our website, communications, or
          business systems, only when necessary to provide those services or
          comply with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Data retention and security">
        <p>
          We retain inquiry information only as long as reasonably necessary for
          the purposes described in this policy, including business, legal, and
          record-keeping needs. We use reasonable safeguards to protect
          information, but no internet transmission or storage system is
          completely secure.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          You may ask to access, correct, or delete personal information we hold
          about you, subject to applicable legal requirements. To make a request,
          contact us at{" "}
          <a
            href="mailto:support@fountlinedigital.com"
            className="text-foreground underline underline-offset-4"
          >
            support@fountlinedigital.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Updates to this policy">
        <p>
          We may update this policy as our services or data practices change.
          The date at the top of this page indicates when it was last revised.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy can be sent to{" "}
          <Link
            href="/#contact"
            className="text-foreground underline underline-offset-4"
          >
            our contact form
          </Link>{" "}
          or support@fountlinedigital.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}