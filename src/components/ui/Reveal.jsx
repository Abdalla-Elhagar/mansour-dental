import useInView from "@/hooks/useInView.js";
import "./ui.css";

// يلف أي عنصر ويظهّره بأنيميشن لما يدخل الشاشة
export default function Reveal({ as: Tag = "div", variant, delay = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} style={{ "--delay": `${delay}ms` }} {...rest}
      className={`reveal ${variant === "flip" ? "reveal--flip" : ""} ${inView ? "is-in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
