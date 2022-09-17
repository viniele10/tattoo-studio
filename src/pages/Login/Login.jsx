import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Agenda from "../Agenda/Agenda.jsx";



function Login() {


    return (
      <div>
        <h1> Área do Tatuador</h1>
        <form>
          <label>E-mail:</label>
          <input type='text'></input>
          <label>Senha:</label>
          <input type='text'></input>
          <br></br>
          <Link className = 'navbar' to='/Agenda'>Entrar</Link>
        </form>

        <Routes>

           <Route path='/Agenda'element ={<Agenda/>}/>
        </Routes>
      </div>
      
    )
  }
  
  export default Login;
  