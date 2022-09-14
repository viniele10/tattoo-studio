import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Agenda from "../Agenda/Agenda.jsx";



function Login() {


    return (
      <div>
        <h1> Área do Tatuador</h1>
        <form>
          <label>username:</label>
          <input type='text'></input>
          <label>senha:</label>
          <input type='text'></input>
          <br></br>
          <Link className = 'navbar' to='/agenda'>Entrar</Link>
        </form>

        <Routes>

           <Route path='/agenda'element ={<Agenda/>}/>
        </Routes>
      </div>
      
    )
  }
  
  export default Login;
  