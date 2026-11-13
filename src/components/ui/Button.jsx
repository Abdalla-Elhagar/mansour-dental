import { Link } from "react-router-dom";
import "./ui.css";

/**
 * زر واحد لكل الاستخدامات:
 *  - to   => رابط داخلي (React Router)
 *  - href => رابط خارجي
 *  - غير كده => <button>
 * variant: gold | blue | white | ghost   size: md | sm
 */
export default function Button({ to, href, variant = "gold", size = "md", icon: Icon, className = "", children, ...rest }) {
  const cls = `btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${className}`;
  const content = (<>{Icon && <Icon size={18} aria-hidden="true" />}{children}</>);
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}
