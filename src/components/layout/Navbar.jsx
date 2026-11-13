import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Logo from "../ui/Logo.jsx";
import useScrolled from "@/hooks/useScrolled.js";
import { NAV_LINKS, ROUTES } from "@/config/site.js";
import "./layout.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  // الهيرو غامق: النافبار شفاف بنص أبيض فوق، وأبيض بعد السكرول أو في الصفحات الداخلية
  const solid = scrolled || pathname !== ROUTES.home;

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <Container className="nav__in">
        <Logo light={!solid} />
        <nav className="nav__links" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </nav>
        <Button to={ROUTES.booking} size="sm">احجز موعد</Button>
      </Container>
    </header>
  );
}
