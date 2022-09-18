import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../../components/Cards/CardMateriais";

function Materiais() {
  const [ dados, setDados ] = useState([])



  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/materials"

  const getApi = async () => {
    try {
      let res = await fetch (url)
      let data = await res.json()
      console.log(data)
      setDados(...dados, ...data)
    }catch(erro){
      console.log(erro)
    }

  }

  useEffect(() => {
    getApi();}, []);



    return (
      <div>
        <h1> Lista de materiais do estúdio:</h1>
        <div className="cardDiv">
        {dados?.map((item) => (
            (<Card 
              id={item.ID}
              fornecedor={item.FORNECEDOR}
              produto={item.PRODUTO}
              quantidade={item.QUANTIDADE}
              valor={item.VALOR}
            />
            
            
          )
      ))}
        
      
        
      </div>

       
  
      </div>
      
    )
  }
  
  export default Materiais;
  