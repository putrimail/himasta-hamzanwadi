import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePages from "./pages/Home/HomePages";
import NavbarComp from "./components/NavbarComp";
import ErrorPages from "./pages/error/ErrorPages";
import EventPages from "./pages/Event/EventPages";
import FooterComp from "./components/FooterComp";
import MadingPages from "./pages/Mading/MadingPages";
import ProkerPages from "./pages/Proker/ProkerPages";
import Cookies from "js-cookie";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginPages from "./pages/Auth/LoginPages";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [login, setLogin] = useState(false); // Default false, nanti dicek dari cookie

  const allowPath = ["/", "/mading", "/proker", "/museum", "/event"];
  const location = useLocation();
  const navigate = useNavigate();

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

  // Mengecek status login dari cookie saat pertama kali aplikasi berjalan
  useEffect(() => {
    const getCookie = (key) => {
      return Cookies.get(key);
    };
    const status = getCookie("status");
    setLogin(status === "true"); // Konversi string ke boolean
  }, []);
  return (
    <>
      {showNavbar && <NavbarComp />}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/login" element={<LoginPages />} />
        {login ? (
          <>
            <Route path="/mading" element={<MadingPages />} />
            <Route path="/event" element={<EventPages />} />
            <Route path="/proker" element={<ProkerPages />} />
            <Route path="*" element={<ErrorPages />} />
          </>
        ) : (
          navigate("/login")
        )}
      </Routes>
      {showNavbar && <FooterComp />}
    </>
  );
}

export default App;
