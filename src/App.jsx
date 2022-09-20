import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Login from "./pages/Login/Login.jsx";

import Materiais from "./pages/Materiais/Materiais.jsx";
import "./styles/global.css";

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
      </Routes>
    </div>
  );
}

export default App;
