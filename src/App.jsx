import "./App.css";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/privacidad" element={<Privacidad />} />
    </Routes>
  );
}

export default App;
