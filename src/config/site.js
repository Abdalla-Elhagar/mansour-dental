// كل بيانات الموقع الثابتة في مكان واحد
const PHONE_LOCAL = "01129352754";
const PHONE_INTL = "201129352754"; // صيغة واتساب الدولية (مصر)

export const SITE = {
  name: "مركز منصور للأسنان",
  tagline: "فريق طبي متكامل في جميع فروع طب الأسنان، بأحدث التقنيات والأجهزة الطبية.",
  phone: PHONE_LOCAL,
  whatsappUrl:
    `https://wa.me/${PHONE_INTL}?text=` +
    encodeURIComponent("السلام عليكم، عايز أستفسر عن خدمات مركز منصور للأسنان."),
};

export const NAV_LINKS = [
  { label: "الخدمات", to: "/#services" },
  { label: "قبل وبعد", to: "/results" },
  { label: "من نحن", to: "/about" },
  { label: "تواصل معنا", to: "/#contact" },
];

export const ROUTES = { home: "/", about: "/about", results: "/results", booking: "/booking" };
