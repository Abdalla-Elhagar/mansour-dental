import { Hero, ServicesSection, AboutPreview, ContactCta, ResultsPreview } from "@/features/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ResultsPreview />
      <AboutPreview />
      <ContactCta />
    </main>
  );
}
