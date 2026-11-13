import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Container from "../ui/Container.jsx";
import Logo from "../ui/Logo.jsx";
import { SITE, NAV_LINKS, ROUTES } from "@/config/site.js";
import "./layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__in">
        <div>
          <Logo light />
          <p>{SITE.tagline}</p>
        </div>
        <div className="footer__col">
          <h4>روابط سريعة</h4>
          {NAV_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <Link to={ROUTES.booking}>الحجز</Link>
        </div>
        <div className="footer__col">
          <h4>تواصل</h4>
          <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer">واتساب</a>
          <a href={`tel:${SITE.phone}`}><Phone size={14} /> <bdi>{SITE.phone}</bdi></a>
        </div>
      </Container>
      <div className="footer__copy">© {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
