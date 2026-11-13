import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import useScrollToHash from "@/hooks/useScrollToHash.js";

export default function Layout() {
  useScrollToHash();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
