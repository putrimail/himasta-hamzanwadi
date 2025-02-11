import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePages from "./pages/Home/HomePages";
import NavbarComp from "./components/NavbarComp";
import ErrorPages from "./pages/error/ErrorPages";
import EventPages from "./pages/Event/EventPages";
import FooterComp from "./components/FooterComp";
import MadingPages from "./pages/Mading/MadingPages";
import ProkerPages from "./pages/Proker/ProkerPages";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const allowPath = ["/", "/mading", "/proker", "/museum", "/event"];
  const location = useLocation();

  useEffect(() => {
    if (allowPath.includes(location.pathname)) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {showNavbar && <NavbarComp />}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/mading" element={<MadingPages />} />
        <Route path="/event" element={<EventPages />} />
        <Route path="/proker" element={<ProkerPages />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
      {showNavbar && <FooterComp />}
    </>
  );
}

export default App;
