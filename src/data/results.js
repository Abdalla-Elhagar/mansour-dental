const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const RESULTS = [
  {
    id: "smile-design",
    title: "تصميم الابتسامة",
    treatment: "تجميل الأسنان",
    before: image("photo-1606811971618-4486d14f3f99"),
    after: image("photo-1609840114035-3c981b782dfe"),
  },
  {
    id: "dental-care",
    title: "العناية بالأسنان",
    treatment: "تنظيف وتجميل",
    before: image("photo-1606811841689-23dfddce3e95"),
    after: image("photo-1606811971618-4486d14f3f99"),
  },
  {
    id: "healthy-smile",
    title: "ابتسامة صحية",
    treatment: "تجميل الأسنان",
    before: image("photo-1609840114035-3c981b782dfe"),
    after: image("photo-1606811841689-23dfddce3e95"),
  },
  {
    id: "smile-care",
    title: "تجميل الابتسامة",
    treatment: "عناية متكاملة",
    before: image("photo-1606811971618-4486d14f3f99"),
    after: image("photo-1606811841689-23dfddce3e95"),
  },
];
