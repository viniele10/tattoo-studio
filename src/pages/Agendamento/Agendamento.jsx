import React from 'react';
import "./Agendamento.css";
import axios from 'axios';
import { useState } from 'react'




function Agendamento() {
  const [name, setNome] = useState('');
  const [contact, setContato] = useState('');
  const [city, setCidade] = useState('');
  const [age, setIdade] = useState('');
  const [tatuador, setTatuador] = useState('');
  const [date, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const tatuador_id = 4
  const cliente_id = 4
  const preco = 150
  const data = "15-02-1999"
  const id = 6
 

  const postData = (e) => {
    e.preventDefault()
    axios.post(`https://tattoo-api-squad7-resilia.herokuapp.com/clients`, {
      id,
      name,
      contact,
      age,
      city

    } )
    axios.post (`https://tattoo-api-squad7-resilia.herokuapp.com/agendamento`, {
      descricao,
      data, 
      horario, 
      tatuador_id,
      cliente_id, 
      preco

    })
    
  }



    return (
      <div>
        <div className='form'>
        <form>
        <h1> Marque seu horário:</h1>

          <label>Nome:</label>
          <input placeholder='Nome' onChange={(e) => setNome(e.target.value)} type="text"></input>
          <label>Contato:</label>
          <input placeholder='Contato' onChange={(e) => setContato(e.target.value)} type="text"></input>
          <label>Idade:</label>
          <input placeholder='Idade' onChange={(e) => setIdade(e.target.value)} type="number"></input>
          <label>Cidade:</label>
          <input placeholder='Cidade' onChange={(e) => setCidade(e.target.value)} type="text"></input>
          <label>Data da tattoo:</label>
          <input placeholder='Data' onChange={(e) => setData(e.target.value)} type="date"></input>
          <label>Horário da tattoo:</label>
          <input placeholder='Horario' onChange={(e) => setHorario(e.target.value)} type="time"></input>
          <label>Tatuador:</label>
          <input placeholder='Tatuador' onChange={(e) => setTatuador(e.target.value)} type="text"></input>
          <label>Descrição:</label>
          <input placeholder='Descricao' onChange={(e) => setDescricao(e.target.value)} type="text"></input>
          <br></br>

          <button type='submit'  onClick={postData} className='botao'> Salvar</button>

        </form>

        </div>    
      </div>
      
    )
  }
  
  export default Agendamento;
  