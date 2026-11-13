import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// يسكرول للـ #hash أو لأول الصفحة عند تغيير الراوت
export default function useScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);
}
