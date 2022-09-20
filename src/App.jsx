import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Login from "./pages/Login/Login.jsx";
import Agenda from "./pages/Agenda/Agenda";
import Materiais from "./pages/Materiais/Materiais.jsx";
import "./styles/global.css";
import TatuadorMenu from "./pages/Tatuador/TatuadorMenu.jsx";

function App() {
  return (
    <div className="App">
      {
      /* <header className= 'nav' >
        <Link className = 'navbar' to='/'>Home</Link>
        <Link className = 'navbar' to='/agendamento'>Agendamento</Link>
        <Link className = 'navbar' to='/login'>Login</Link>
      </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/lidia" element={<TatuadorMenu nome="Lidia Souza" />} />
        <Route path="/felipe" element={<TatuadorMenu nome="Felipe Moraes" />} />
        <Route path="/zoe" element={<TatuadorMenu nome="Zoe Smith" />} />
        <Route path="/lidia/agendamentos" element={<Agenda nome="Lidia Souza" />} />
        <Route path="/felipe/agendamentos" element={<Agenda nome="Felipe Moraes" />} />
        <Route path="/zoe/agendamentos" element={<Agenda nome="Zoe Smith" />} />
      </Routes>

    </div>
  );
}

export default App;
