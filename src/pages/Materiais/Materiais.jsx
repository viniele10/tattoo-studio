import React from "react";

import { Link } from "react-router-dom";
import HeaderMateriais from "../../components/Header/HeaderMateriais";
import Footer from "../../components/Footer/Footer";
import './Materiais.css'

function pesquisarMaterial() {
  console.log("Materiais");
}

function Materiais() {



    return (
      <div className="mainMateriais">
        <header>
          <HeaderMateriais tatuador="/#home" contato="/#home" />
        </header>
        <section className="inputPesquisar">
          <strong>MATERIAIS</strong>
          <input type="text"  name='pesquisar' id='pesquisar' onKeyUp={pesquisarMaterial()} placeholder="Pesquisar..."/>
        </section>

        <div className="parent">
            <div className="div1"> </div>
            <div className="div2"> </div>
            <div className="div3"> </div>
            <div className="div4"> </div>
            <div className="div5"> </div>
            <div className="div6"> </div>
            <div className="div7"> </div>
            <div className="div8"> </div>
            <div className="div9"> </div>
        </div>

        <Footer/>
  
      </div>
      
    )
  }
  
  export default Materiais;
  