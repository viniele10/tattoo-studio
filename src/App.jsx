import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ScaleLoader from "react-spinners/ScaleLoader";

import Home from "./pages/Home/Home.jsx";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Login from "./pages/Login/Login.jsx";
import Agenda from "./pages/Agenda/Agenda";
import Materiais from "./pages/Materiais/Materiais.jsx";
import "./styles/global.css";
import TatuadorMenu from "./pages/Tatuador/TatuadorMenu.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="container-loading">
          <ScaleLoader size={30} color={"#FF004C"} loading={loading} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/lidia" element={<TatuadorMenu nome="Lidia Souza" />} />
          <Route
            path="/felipe"
            element={<TatuadorMenu nome="Felipe Moraes" />}
          />
          <Route path="/zoe" element={<TatuadorMenu nome="Zoe Smith" />} />
          <Route
            path="/lidia/agendamentos"
            element={<Agenda nome="Lidia Souza" />}
          />
          <Route
            path="/felipe/agendamentos"
            element={<Agenda nome="Felipe Moraes" />}
          />
          <Route
            path="/zoe/agendamentos"
            element={<Agenda nome="Zoe Smith" />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
