import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../../components/Cards/CardAgenda";
import "./Agenda.css";
import HeaderAgenda from '../../components/Header/HeaderAgenda';


function Agenda() {  
  const [ dados, setDados ] = useState([])



  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos"

  const getApi = async () => {
    try {
      let res = await fetch (url)
      let data = await res.json()
      console.log(data)
      setDados([...dados, ...data.Agendamentos])
    }catch(erro){
      console.log(erro)
    }

  }

  useEffect(() => {
    getApi();}, []);




    return (
      <div className='agenda'>
        <HeaderAgenda/>

        <br></br>
        <div className='pesquisa'>
            <input placeholder='  Pesquisar' className='pesquisar' type='text'></input>

        </div>
        <br></br>
        <br></br>
       
        <div>
        <div className="cardDiv">
        {dados?.map((item) => (
            (<Card 
              id={item.ID}
              descricao={item.DESCRICAO}
              data={item.DATA}
              horario={item.HORARIO}
              tatuador_id={item.TATUADOR_ID}
              cliente_id={item.CLIENTE_ID}
              preco={item.PRECO}
            />
            
            
          )
      ))}
        
          
      
        
      </div>
   


        </div>

<br></br><br></br><br></br>
        
  
      </div>
    
    )
  }
  
  export default Agenda;
  