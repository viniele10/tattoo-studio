import React from 'react';
import "./Agendamento.css";


function Agendamento() {


    return (
      <div>
        <div className='form'>
        <form>
        <h1> Marque seu horário:</h1>

          <label>Nome:</label>
          <input type="text"></input>
          <label>Contato:</label>
          <input type="number"></input>
          <label>Idade:</label>
          <input type="number"></input>
          <label>Cidade:</label>
          <input type="text"></input>
          <label>Data da tattoo:</label>
          <input type="date"></input>
          <label>Horário da tattoo:</label>
          <input type="time"></input>
          <label>Tatuador:</label>
          <input type="text"></input>
          <br></br>

          <button type='submit'  className='botao'> Salvar</button>

        </form>

        </div>    
      </div>
      
    )
  }
  
  export default Agendamento;
  