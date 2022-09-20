import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../../components/Cards/CardAgenda";
import "./Agenda.css";
import axios from 'axios';
import HeaderAgenda from '../../components/Header/HeaderAgenda';


function Agenda() {  
  const [ dados, setDados ] = useState([])
  const [id, setId] = useState(1)
  const [agendamento, setAgendamento] = useState([])

  const [hidden, setHidden] = useState(true)



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


  const getId = () => {
    axios
    .get(`https://tattoo-api-squad7-resilia.herokuapp.com/agendamento/${id}`)
    .then((res) => {
      setAgendamento(res.data.Agendamentos)
    

    })
  }

  useEffect(() => {
    getApi();}, []);



    return (
      <div className='agenda'>
        <HeaderAgenda/>

        <br></br>
        <div className='pesquisa'>
            <input placeholder='  Pesquisar'  onChange={(e) => setId(e.target.value)} onClick={getId} className='pesquisar' ></input>
            <button  className ='ir' onClick={() => {setHidden(s => !s); getId()}}> IR </button>

        </div>
        <br></br>
        <br></br>
       
        <div>
        <div className="cardDiv">
        
          
      {!hidden ? <div> 
        {agendamento?.map((agendamento) => (
          (
            <Card 
              id={agendamento.ID}
              descricao={agendamento.DESCRICAO}
              data={agendamento.DATA}
              horario={agendamento.HORARIO}
              tatuador_id={agendamento.TATUADOR_ID}
              cliente_id={agendamento.CLIENTE_ID}
              preco={agendamento.PRECO}
            />

          )
        ))}  
        </div>: <div  className='cardDiv'>
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
          </div>}
        
      </div>
   


        </div>

<br></br><br></br><br></br>
        
  
      </div>
    
    )
  }
  
  export default Agenda;
  