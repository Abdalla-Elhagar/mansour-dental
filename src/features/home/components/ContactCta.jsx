import { CalendarCheck, MessageCircle } from "lucide-react";
import Section from "@/components/ui/Section.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import Reveal from "@/components/ui/Reveal.jsx";
import Button from "@/components/ui/Button.jsx";
import { SITE, ROUTES } from "@/config/site.js";

export default function ContactCta() {
  return (
    <Section id="contact" className="contact">
      <Reveal className="contact__box">
        <SectionHeading light title="جاهز تبدأ؟" text="احجز موعدك أونلاين، أو كلمنا على واتساب ونرد عليك في أسرع وقت." />
        <div className="contact__btns">
          <Button to={ROUTES.booking} icon={CalendarCheck}>احجز موعد</Button>
          <Button href={SITE.whatsappUrl} variant="white" icon={MessageCircle}>تواصل معنا</Button>
        </div>
      </Reveal>
    </Section>
  );
}
