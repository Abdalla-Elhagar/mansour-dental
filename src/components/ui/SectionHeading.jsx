import "./ui.css";

export default function SectionHeading({ title, text, align = "start", light = false }) {
  return (
    <div className={`heading ${align === "center" ? "heading--center" : ""} ${light ? "heading--light" : ""}`}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
