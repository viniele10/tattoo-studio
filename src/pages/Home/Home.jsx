import React from "react";

import { Link } from "react-router-dom";
import useMedia from "../../hooks/useMedia";


import HeaderHome from "../../components/Header/HeaderHome";
import Footer from "../../components/Footer/Footer";
import Instagram from "../../images/instagram-rosa.svg";
import Email from "../../images/email.svg";
import Telefone from "../../images/phone.svg";
import Card from "./Card";

import "./Home.css";

function Home() {

  // const mobile = useMedia('(max-width: 860px)')

  return (
    <>
      <div id="home" className="bg-main-home">
        <HeaderHome tatuador="#tatuador" contato="#contato" />
        <main className="container main-home">
          <div className="titulo">
            <h1 className="tattoo-title">TATTOO</h1>
            <h1 className="studio-title">
              <em>STUDIO</em>
            </h1>
          </div>
          <Link to="/agendamento">
            <button className="btn">
              <em>Faça seu agendamento!</em>
            </button>
          </Link>
        </main>
      </div>

      <section id="tatuador" className="bg-01 padding-container">
        <div className="container tatuadores">
          <h2 className="title-session">TATUADORES</h2>
          <div className="cards">
            <Card nome="Felipe Moraes" contato="(16) 99923-46573" />
            <Card nome="Lidia Souza" contato="(16) 99923-46573" />
            <Card nome="Zoe Smith" contato="(16) 99923-46573" />
          </div>
        </div>
      </section>

      <section id="contato" className="bg-02 padding-container">
        <div className="container contato-container">
          <h2 className="title-session-contato">CONTATO</h2>
          <div className="contato-conteudo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3126348766555!2d-38.50168858517832!3d-12.951835690868887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716057afc715f9f%3A0x9e0f7d9a15f90c5a!2sNave%20Tattoo%20Studio%20-%20Tatuagem%20Salvador%20-%20Liberdade!5e0!3m2!1spt-PT!2sbr!4v1663457080612!5m2!1spt-PT!2sbr"
              width="600"
              height="300"
              style={{ border: "0",
            borderRadius:"1rem"}}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="contato-info">
              <ul className="endereco" role="list">
                <li>
                  <h4>Salvador - BA</h4>
                </li>
                <li>
                  <p>Estrada da Liberdade, 405</p>
                </li>
                <li>
                  <p>Shopping Liberdade - 1º Piso</p>
                </li>
              </ul>
              <ul className="contato-redesocial" role="list">
                <li>
                  <img src={Telefone} alt=""></img>
                  <p>
                    <strong>75</strong> 99999-9999
                  </p>
                </li>
                <li>
                  <img src={Email} alt=""></img>
                  <p>
                    mellv<strong>@email.com</strong>
                  </p>
                </li>
                <li>
                  <img src={Instagram} alt=""></img>
                  <p>
                    <strong>@</strong>mellv
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer link="#home"/>
    </>
  );
}

export default Home;
