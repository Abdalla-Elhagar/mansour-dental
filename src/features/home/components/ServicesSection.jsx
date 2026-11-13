import Section from "@/components/ui/Section.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import Reveal from "@/components/ui/Reveal.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { SERVICES } from "@/data/services.js";

export default function ServicesSection() {
  return (
    <Section id="services" tint>
      <Reveal>
        <SectionHeading title="خدماتنا" text="كل خدمات الأسنان في مكان واحد، بأجهزة حديثة ومستوى خدمة نفتخر بيه." />
      </Reveal>
      <div className="services-grid">
        {SERVICES.map(({ id, ...service }, i) => (
          <Reveal key={id} variant="flip" delay={(i % 5) * 70}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
