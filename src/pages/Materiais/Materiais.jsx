import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderMateriais from "../../components/Header/HeaderMateriais";
import Footer from "../../components/Footer/Footer";
import { Buttons } from "../../components/Buttons/Buttons.jsx";
import './Materiais.css'
import Card from "../../components/Cards/CardMateriais";


function Materiais() {

  const [materiais, setMateriais] = useState([]);


  useEffect(() => {
    const getApi = () => {
      axios
      .get(`https://tattoo-api-squad7-resilia.herokuapp.com/materials`)
      .then((res) => {
        setMateriais(res.data)      
  
      })
    }

    getApi()
    
  }, [setMateriais]);

  console.log(materiais)

    
    return (
      <div className="mainMateriais">
        <header>
          <HeaderMateriais tatuador="/#home" contato="/#home" />
        </header>
        <section className="inputPesquisar">
          <strong>MATERIAIS</strong>
          <input type="text"  name='pesquisar' id='pesquisar'  placeholder="Pesquisar..."/>
          < Buttons/>
        </section>

          <div className="div1"> 
          {materiais?.map((material) => (
            (<Card>
              id={material.ID}
              fornecedor={material.FORNECEDOR}
              produto={material.PRODUTO}
              quantidade={material.QUANTIDADE}
              valor={material.VALOR}
             
            </Card>)
          ))}
          </div>
   


        <Footer/>
  
      </div>
      
    )
  }
  
  export default Materiais;
  
