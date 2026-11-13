import { Info } from "lucide-react";
import Section from "@/components/ui/Section.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import Reveal from "@/components/ui/Reveal.jsx";
import { RESULTS } from "@/data/results.js";
import ComparisonCard from "@/features/results/ComparisonCard.jsx";
import "@/features/results/results.css";

export default function Results() {
  return (
    <main className="results-page">
      <header className="results-intro">
        <div className="container">
          <span className="results-intro__eyebrow">نتائجنا</span>
          <h1>قبل وبعد</h1>
          <p>اسحب الخط لمقارنة الجانبين، أو اضغط على الصورة لعرضها بشكل أكبر.</p>
        </div>
      </header>
      <Section>
        <div className="results-disclaimer">
          <Info className="results-disclaimer__icon" size={20} aria-hidden="true" />
          <span>
            <strong>تنويه:</strong> الصور المعروضة للتوضيح فقط وليست صور حالات فعلية للمركز.
            تُستبدل بصور الحالات بعد الحصول على موافقة أصحابها.
          </span>
        </div>
        <SectionHeading
          align="center"
          title="استكشف المقارنات"
          text="حرك الخط الفاصل يمينًا أو يسارًا لمشاهدة كل جانب."
        />
        <div className="results-grid">
          {RESULTS.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <ComparisonCard item={item} />
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
