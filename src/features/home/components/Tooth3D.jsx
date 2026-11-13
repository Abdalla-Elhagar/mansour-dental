// سن ثلاثي الأبعاد: طبقات SVG متراصة على محور Z + دوران مع حركة الماوس
import { useRef } from "react";

const PATH =
  "M100 34C82 14 38 10 34 58C30 104 56 122 63 172C67 208 80 228 88 202C92 182 96 152 100 152C104 152 108 182 112 202C120 228 133 208 137 172C144 122 170 104 166 58C162 10 118 14 100 34Z";
const LAYERS = 14, GAP = 7;

export default function Tooth3D() {
  const ref = useRef(null);
  const rotate = (ry, rx) => {
    ref.current.style.setProperty("--ry", `${ry}deg`);
    ref.current.style.setProperty("--rx", `${rx}deg`);
  };
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    rotate(((e.clientX - r.left) / r.width - 0.5) * 40, -((e.clientY - r.top) / r.height - 0.5) * 28);
  };

  return (
    <div className="tooth-stage" onMouseMove={onMove} onMouseLeave={() => rotate(0, 0)} aria-hidden="true">
      <div className="tooth-glow" />
      <div className="tooth" ref={ref}>
        {Array.from({ length: LAYERS }, (_, i) => {
          const front = i === LAYERS - 1;
          return (
            <svg key={i} viewBox="0 0 200 240" className="tooth-layer"
              style={{ transform: `translateZ(${(i - LAYERS / 2) * GAP}px)`, opacity: front ? 1 : 0.18 + i * 0.04 }}>
              <path d={PATH} fill={front ? "rgba(255,255,255,.14)" : "none"} stroke="#fff"
                strokeWidth={front ? 7 : 4} strokeLinejoin="round" />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
