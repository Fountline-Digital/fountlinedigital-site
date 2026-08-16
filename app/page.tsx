import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-proximity overflow-y-auto scroll-smooth">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}