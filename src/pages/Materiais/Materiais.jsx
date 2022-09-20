import React from "react";
import axios from "axios";
// import { useState } from "react";
import HeaderMateriais from "../../components/Header/HeaderMateriais";
import Footer from "../../components/Footer/Footer";
import { Buttons } from "../../components/Buttons/Buttons.jsx";
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
          < Buttons/>
        </section>

        <section className="parent">
          <div className="div1"> banana</div>
            {/* < Buttons/>  Resolver essa posição do button !!!! */}
          <div className="div2" id="div"> banana</div>
          <div className="div3" id="div"> banana</div>
          <div className="div4" id="div"> banana</div>
          <div className="div5" id="div"> banana</div>
          <div className="div6" id="div"> banana</div>

        </section>

        <Footer/>
  
      </div>
      
    )
  }
  
  export default Materiais;
  