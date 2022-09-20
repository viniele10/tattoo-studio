import React from "react";
import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import HeaderMateriais from "../../components/Header/HeaderMateriais";
import Footer from "../../components/Footer/Footer";
import './Materiais.css'

let fornecedor = '';
let id = '';
let nome = '';
let quantidade = '';
let valor = '';


// const [materiais, setMateriais] = useState([]);

const urlMateriais = 'https://tattoo-api-squad7-resilia.herokuapp.com';


function Materiais() {

  // const [materiais, setMateriais] = useState([]);

  axios
  .get(`${urlMateriais}/materials`)
  .then((res) => {
    // setMateriais(res.data);

  })
  .catch((error) => {
    console.log(error);
  });;


    return (
      <div className="mainMateriais">
        <header>
          <HeaderMateriais tatuador="/#home" contato="/#home" />
        </header>
        <section className="inputPesquisar">
          <strong>MATERIAIS</strong>
          <input type="text"  name='pesquisar' id='pesquisar'  placeholder="Pesquisar..."/>
        </section>

        <div className="parent">
            <div >
              <p>nanana</p>
              <p>{fornecedor}</p>
              <p>nanana</p>
            </div>
            <div className="div2"> <p>nanana</p></div>
            <div className="div3"> <p>nanana</p></div>
            <div className="div4"> <p>nanana</p></div>
            <div className="div5"> <p>nanana</p></div>
            <div className="div6"> <p>nanana</p></div>
            <div className="div7"> </div>
            <div className="div8"> </div>
            <div className="div9"> </div>
        </div>

        <Footer/>
  
      </div>
      
    )
  }
  
  export default Materiais;
  