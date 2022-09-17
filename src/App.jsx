import React from 'react';
import './App.css';
import {Route, Routes, Link} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Login from "./pages/Login/Login.jsx";
import Agenda from "./pages/Agenda/Agenda.jsx";
import  Materiais  from "./pages/Materiais/Materiais";



function App() {
  
  return (
    <div className="App">

      <header className= 'nav' >
        <Link className = 'navbar' to='/'>Home</Link>
        <Link className = 'navbar' to='/agendamento'>Agendamento</Link>
        <Link className = 'navbar' to='/login'>Login</Link>
        <Link className = 'navbar' to='/agenda'>Agenda</Link>
        <Link className = 'navbar' to='/materiais'>Materiais</Link>






      </header>
      <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/agendamento'element ={<Agendamento/>}/>
      <Route path='/login/*'element ={<Login/>}/>
      <Route path='/agenda'element ={<Agenda/>}/>
      <Route path='/materiais'element ={<Materiais/>}/>

      </Routes>
      

      
    </div>
  )
}

export default App
