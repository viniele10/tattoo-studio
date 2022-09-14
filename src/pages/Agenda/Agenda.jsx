import React from 'react';
import { useState, useEffect } from 'react';
import {Route, Routes, Link} from "react-router-dom";
import  Materiais  from "../Materiais/Materiais";


function Agenda() {  
  const [ dados, setDados ] = useState([])



  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos"

  const getApi = async () => {
    try {
      let res = await fetch (url)
      let data = await res.json()
      console.log(data)
      setDados(data)
    }catch(erro){
      console.log(erro)
    }

  }

  useEffect(() => {
    getApi();}, []);




    return (
      <div>
         <Link className = 'navbar' to='/materiais'>Materiais</Link>

        <h1> Calendário de agendamentos:</h1>

        <Routes>
             <Route path='/Materiais'element ={<Materiais/>}/>

        </Routes>
       
  
      </div>
    
    )
  }
  
  export default Agenda;
  