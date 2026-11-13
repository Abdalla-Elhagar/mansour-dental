import { Link } from "react-router-dom";
import { SITE } from "@/config/site.js";
import "./ui.css";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label={SITE.name}>
      <span className="logo__mark">
        <svg viewBox="0 0 200 240" width="20" height="24" aria-hidden="true">
          <path d="M100 34C82 14 38 10 34 58C30 104 56 122 63 172C67 208 80 228 88 202C92 182 96 152 100 152C104 152 108 182 112 202C120 228 133 208 137 172C144 122 170 104 166 58C162 10 118 14 100 34Z" fill="none" stroke="#fff" strokeWidth="16" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{SITE.name}</span>
    </Link>
  );
}
