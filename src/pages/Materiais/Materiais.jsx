import React from "react";
import axios from "axios";

import "../Agenda/Agenda.css";
import { useState, useEffect } from "react";

import Card from "../../components/Cards/CardMateriais";
import HeaderTatuador from "../../components/Header/HeaderTatuador";


function Materiais() {

  const [materiais, setMateriais] = useState([]);

  // GET rota
  useEffect(() => {
    axios
      .get("https://tattoo-api-squad7-resilia.herokuapp.com/materials")
      .then((res) => {
        setMateriais(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(`GET error: ${error.message}`);
      });
  }, []);

  // DELETE
  // function deleteMateriais(id) {
  //   axios.delete(
  //     `https://tattoo-api-squad7-resilia.herokuapp.com/materials/${id}`
  //   );

  //   setClients(materiais.filter((materiais) => materiais.ID !== id));
  // }

  return (
    <div className="bg-0 agenda">
      <HeaderTatuador nome="Voltar" />
      <div className="container-agenda">
        <p id="menutatuador" style={{ color: "white" }}>
          {" "}
        </p>
        <h1 className="title-agendamento" style={{ color: "white" }}>
          Materiais
        </h1>
        <div className="pesquisa-container">
          <input
            type="text"
            placeholder="Crie um novo material:"
            onChange={(e) => setId(e.target.value)}
            className="pesquisar"
          ></input>
          <button
            className="ir"
            onClick={ console.log("create Data") }
          >
            CRIAR
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
