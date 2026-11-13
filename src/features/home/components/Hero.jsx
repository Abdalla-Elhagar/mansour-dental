import { useEffect, useRef } from "react";
import { CalendarCheck } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Button from "@/components/ui/Button.jsx";
import Tooth3D from "./Tooth3D.jsx";
import { ROUTES } from "@/config/site.js";

export default function Hero() {
  const videoRef = useRef(null);
  // بعض المتصفحات بتحتاج play() يدوي
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section className="hero">
      <video ref={videoRef} className="hero__video" src="/videos/hero.mp4" poster="/videos/hero-poster.jpg"
        autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
      <div className="hero__shade" />
      <Container className="hero__in">
        <div className="hero__text">
          <h1>ابتسامتك في إيد فريق متكامل</h1>
          <p>أحدث التقنيات والأجهزة الطبية في كل فروع طب الأسنان. مهما كانت مشكلتك، علاجها عندنا.</p>
          <div className="hero__cta">
            <Button to={ROUTES.booking} icon={CalendarCheck}>احجز موعدك</Button>
            <Button to="/#services" variant="ghost">شوف الخدمات</Button>
          </div>
        </div>
        <Tooth3D />
      </Container>
    </section>
  );
}
