import Section from "@/components/ui/Section.jsx";
import Reveal from "@/components/ui/Reveal.jsx";
import Button from "@/components/ui/Button.jsx";
import { ROUTES } from "@/config/site.js";

export default function AboutPreview() {
  return (
    <Section>
      <Reveal className="about-preview">
        <h2>من نحن</h2>
        <p>
          في مركز منصور لطب الأسنان بنقدملك فريق طبي متكامل في جميع فروع طب الأسنان، بأحدث التقنيات والأجهزة الطبية،
          علشان نقدم أفضل مستوى خدمة للمريض عندنا.
        </p>
        <Button to={ROUTES.about} variant="blue">المزيد</Button>
      </Reveal>
    </Section>
  );
}
