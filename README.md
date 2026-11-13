# مركز منصور للأسنان

```
npm install
npm run dev
```

## هيكل المشروع
```
src/
├─ config/site.js          بيانات الموقع: الاسم، رقم الواتساب، روابط النافبار، الـ routes
├─ data/services.js        قائمة الخدمات (عدّل/أضف هنا بس)
├─ data/results.js         بيانات صور مقارنة قبل وبعد (استبدل الصور التوضيحية بصور المركز)
├─ hooks/                  useInView · useScrolled · useScrollToHash
├─ styles/                 variables.css (الألوان والخطوط) · base.css
├─ components/
│  ├─ ui/                  مكونات عامة قابلة لإعادة الاستخدام:
│  │                       Button · Container · Section · SectionHeading · Reveal · TiltCard · Logo
│  └─ layout/              Layout · Navbar · Footer
├─ features/home/          كل ما يخص الصفحة الرئيسية
│  └─ components/          Hero · Tooth3D · ServicesSection · ServiceCard · AboutPreview · ContactCta
└─ pages/                  Home · About (فاضية) · Booking (فاضية)
```
- الفيديو: `public/videos/hero.mp4` (MP4 H.264، بدون صوت، أقل من 8MB) + صورة احتياطية `hero-poster.jpg`.
- الاستيراد بـ `@/` معناه `src/` (مثال: `@/components/ui/Button.jsx`).
- صفحة المقارنات: `/results`. الصور الحالية توضيحية فقط؛ استخدم صور الحالات الفعلية بعد موافقة أصحابها.
