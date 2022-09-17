import React from 'react';
import { useState, useEffect } from 'react';


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

        <h1> Calendário de agendamentos:</h1>
        <div>
   


        </div>

        
  
      </div>
    
    )
  }
  
  export default Agenda;
  