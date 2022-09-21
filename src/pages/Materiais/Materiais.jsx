import React from "react";

import { useState, useEffect } from "react";
import Card from "../../components/Cards/CardMateriais";
import axios from "axios";
import HeaderTatuador from "../../components/Header/HeaderTatuador";

import "../Agenda/Agenda.css";

function Materiais() {
  const [hidden, setHidden] = useState(true);
  const [materiais, setMateriais] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://tattoo-api-squad7-resilia.herokuapp.com/materials")
      .then((res) => {
        setMateriais(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("GET DEU ERRADO");
      });
  }, []);

  const getId = () => {
    axios
      .get(`https://tattoo-api-squad7-resilia.herokuapp.com/material/${id}`)
      .then((res) => {
        setMateriais(res.data);
      });
  };

  return (
    <div className="bg-0 agenda">
      <HeaderTatuador nome="Voltar" />
      <div className="container-agenda">
        <p id="menutatuador" style={{ color: "white" }}>
          {" "}
        </p>
        <h1 className="title-agendamento" style={{ color: "white" }}>
          ► Materiais
        </h1>
        <div className="pesquisa-container">
          <input
            type="search"
            placeholder="Pesquisar"
            onChange={(e) => setId(e.target.value)}
            className="pesquisar"
          ></input>
          <button
            className="ir"
            onClick={() => {
              setHidden(true);
              getId();
            }}
          >
            BUSCAR
          </button>
        </div>
        <div className="card-agendamentos">
          {materiais?.map((materiais) => (
            <Card
            key={materiais?.ID}
            id={materiais?.ID}
            fornecedor={materiais?.FORNECEDOR}
            produto={materiais?.PRODUTO}
            quantidade={materiais?.QUANTIDADE}
            valor={materiais?.VALOR}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Materiais;