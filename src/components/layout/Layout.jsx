import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import useScrollToHash from "@/hooks/useScrollToHash.js";

export default function Layout() {
  useScrollToHash();
  return (
    <>
      <Navbar />
      <Suspense fallback={<main className="page-loading" role="status">جاري تحميل الصفحة...</main>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
