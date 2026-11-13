import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout.jsx";
import { ROUTES } from "@/config/site.js";

const Home = lazy(() => import("@/pages/Home.jsx"));
const About = lazy(() => import("@/pages/About.jsx"));
const Booking = lazy(() => import("@/pages/Booking.jsx"));
const Results = lazy(() => import("@/pages/Results.jsx"));

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
