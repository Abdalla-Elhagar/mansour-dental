import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Booking from "@/pages/Booking.jsx";
import Results from "@/pages/Results.jsx";
import { ROUTES } from "@/config/site.js";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.results} element={<Results />} />
        <Route path={ROUTES.booking} element={<Booking />} />
      </Route>
    </Routes>
  );
}
