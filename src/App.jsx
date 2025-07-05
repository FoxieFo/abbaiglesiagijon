import "./App.css";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Routes, Route } from "react-router-dom";
import Cookies from "./pages/Cookies";
import Privacidad from "./pages/Privacidad";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "ABBA Iglesia Evangélica";
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        enableDeclineButton
        cookieName="abbaCookieConsent"
        style={{ background: "#2D231D" }}
        buttonStyle={{ background: "#4CAF50", color: "#fff", fontSize: "13px" }}
        declineButtonStyle={{
          background: "#f44336",
          color: "#fff",
          fontSize: "13px",
        }}
        expires={150}
      >
        Usamos cookies para mejorar tu experiencia.{" "}
        <a href="/cookies" style={{ color: "#FFD700" }}>
          Política de Cookies
        </a>{" "}
        |{" "}
        <a href="/privacidad" style={{ color: "#FFD700" }}>
          Política de Privacidad
        </a>
      </CookieConsent>
    </>
  );
}

export default App;
