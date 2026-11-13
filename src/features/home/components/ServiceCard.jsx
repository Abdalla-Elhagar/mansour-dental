import TiltCard from "@/components/ui/TiltCard.jsx";

export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <TiltCard className="service">
      <span className="service__icon"><Icon size={26} strokeWidth={1.8} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </TiltCard>
  );
}
