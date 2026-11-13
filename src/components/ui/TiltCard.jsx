import { useRef } from "react";
import "./ui.css";

// كارت بيميل 3D مع المؤشر وفيه لمعة بتتبعه
export default function TiltCard({ as: Tag = "article", max = 14, className = "", children }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(800px) rotateY(${(x - 0.5) * max}deg) rotateX(${(0.5 - y) * max}deg) translateZ(8px)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => { ref.current.style.transform = ""; };
  return <Tag ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</Tag>;
}
