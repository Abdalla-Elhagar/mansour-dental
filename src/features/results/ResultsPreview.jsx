import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import Reveal from "@/components/ui/Reveal.jsx";
import { ROUTES } from "@/config/site.js";
import { RESULTS } from "@/data/results.js";
import ComparisonCard from "./ComparisonCard.jsx";
import "./results.css";

export default function ResultsPreview() {
  return (
    <Section className="results-preview" tint>
      <SectionHeading
        align="center"
        title="شوف الفرق بنفسك"
        text="اسحب الخط بين قبل وبعد، وشوف تفاصيل كل مقارنة."
      />
      <div className="results-grid">
        {RESULTS.slice(0, 3).map((item) => (
          <Reveal key={item.id}>
            <ComparisonCard item={item} />
          </Reveal>
        ))}
      </div>
      <div className="results-preview__actions">
        <Link className="btn btn--blue" to={ROUTES.results}>
          عرض المزيد <ArrowLeft size={18} aria-hidden="true" />
        </Link>
      </div>
      <p className="results-preview__note">صور توضيحية للمعاينة وليست حالات فعلية للمركز.</p>
    </Section>
  );
}
