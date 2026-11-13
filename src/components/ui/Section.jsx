import Container from "./Container.jsx";
import "./ui.css";

export default function Section({ id, tint = false, className = "", containerClass = "", children }) {
  return (
    <section id={id} className={`section ${tint ? "section--tint" : ""} ${className}`}>
      <Container className={containerClass}>{children}</Container>
    </section>
  );
}
