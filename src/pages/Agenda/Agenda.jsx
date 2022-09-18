import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../../components/Card";


function Agenda() {  
  const [ dados, setDados ] = useState([])



  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos"

  const getApi = async () => {
    try {
      let res = await fetch (url)
      let data = await res.json()
      console.log(data)
      setDados(...dados, ...data.agendamentos)
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
        <div className="cardDiv">
        {dados?.map((item) => (
            (<Card 
              id={item.id}
              descricao={item.descricao}
              data={item.data}
              horario={item.horario}
              tatuador_id={item.tatuador_id}
              cliente_id={item.cliente_id}
              preco={item.preco}
            />
            
            
          )
      ))}
        
        
      </div>
   


        </div>

        
  
      </div>
    
    )
  }
  
  export default Agenda;
  