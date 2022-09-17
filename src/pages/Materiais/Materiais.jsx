import React from 'react';
import { useState, useEffect } from 'react';

function Materiais() {
  const [ dados, setDados ] = useState([])



  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/materials"

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
        <h1> Lista de materiais do estúdio:</h1>

       
  
      </div>
      
    )
  }
  
  export default Materiais;
  