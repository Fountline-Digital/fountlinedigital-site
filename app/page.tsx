import Image from "next/image";
import { HomeHero } from "../components/home-hero";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="space-y-16">
      <HomeHero />
      <ServicesSection />
    </div>
  );
}
