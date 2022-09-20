import React from "react";
import { Link } from "react-router-dom";
import HeaderTatuador from "../../components/Header/HeaderTatuador";
import axios from "axios";

import "./TatuadorMenu.css";

function TatuadorMenu(props) {

  const [dados, setDados] = React.useState([0])

  React.useEffect(() => {
    axios.get("https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos")
    .then((response) => {
        setDados(response.data.Agendamentos)
    })

    .catch(() => {
        console.log("Deu errrado")
    })

}, [])

let count = 0
let tatuador = ''

  if (props.nome === 'Felipe Moraes') {
    tatuador = 'felipe'
  } else if (props.nome === 'Lidia Souza') {
    tatuador = 'lidia'
  } else if (props.nome === 'Zoe Smith') {
    tatuador = 'zoe'
  }

dados.map(item => {
  if (item?.TATUADOR_ID === 1 && props.nome === "Felipe Moraes") {
    count++
  } else if (item?.TATUADOR_ID === 2 && props.nome === "Lidia Souza") {
    count++
  } else if (item?.TATUADOR_ID === 3 && props.nome === "Zoe Smith") {
    count++
  }
})

  return (
    <div className="bg-01 bg-menu-tatuadores">
      <HeaderTatuador nome="Sair" />
      <div className="container menu-tatuadores">
        <h1 className="titulo-menu">Bem-Vindo(a)!</h1>
        <h2>{props.nome}</h2>
        <div className="btn-menu">
          <Link to={`/${tatuador}/agendamentos`}>
            <button className="btn btn-notify">Agendamentos
          <span className="notify">{count}</span>
            </button>
          </Link>
          <Link to="/materiais">
            <button className="btn">Materiais</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TatuadorMenu;
