import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../../components/Cards/CardAgenda";
import "./Agenda.css";
import axios from 'axios';
import HeaderAgenda from '../../components/Header/HeaderAgenda';


function Agenda() {  
  const [ dados, setDados ] = useState([])
  const [id, setId] = useState(0)
  const [agendamento, setAgendamento] = useState([])



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
    .get(`https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos/${id}`)
    .then((res) => {
      setAgendamento(res.data)

    })
  }

  useEffect(() => {
    getApi(), getId();}, []);



    return (
      <div className='agenda'>
        <HeaderAgenda/>

        <br></br>
        <div className='pesquisa'>
            <input placeholder='  Pesquisar'  onChange={(e) => setId(e.target.value)} className='pesquisar' type='text'></input>

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
  