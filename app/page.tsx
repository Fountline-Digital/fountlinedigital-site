import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}