import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/Cards/CardAgenda";
import "./Agenda.css";

import HeaderTatuador from "../../components/Header/HeaderTatuador";
import Footer from "../../components/Footer/Footer";

function Agenda(props) {
  const [dados, setDados] = React.useState([]);
  const [id, setId] = useState(1);
  const [agendamento, setAgendamento] = useState([]);

  const [hidden, setHidden] = useState(false);

  const url = "https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos";

  const getApi = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setDados([...dados, ...data.Agendamentos]);
    } catch (erro) {
      console.log(erro);
    }
  };

  const getId = () => {
    axios
      .get(`https://tattoo-api-squad7-resilia.herokuapp.com/agendamento/${id}`)
      .then((res) => {
        setAgendamento(res.data.Agendamentos);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  let array = [];

  dados.find((agendamento) => {
    if (agendamento?.TATUADOR_ID === 1 && props.nome === "Felipe Moraes") {
      array.push(agendamento);
    } else if (agendamento?.TATUADOR_ID === 3 && props.nome === "Zoe Smith") {
      array.push(agendamento);
    } else if (agendamento?.TATUADOR_ID === 2 && props.nome === "Lidia Souza") {
      array.push(agendamento);
    }
  });

  return (
    <div className="bg-0 agenda">
      <HeaderTatuador nome="Voltar" />
      <div className="container-agenda">
        <p id="menutatuador" style={{ color: "white" }}> {props.nome}</p>
        <h1 style={{ color: "white" }}>► Agendamentos</h1>
        <div className="pesquisa-container">
          <input
            type="search"
            placeholder="Pesquisar"
            onChange={(e) => setId(e.target.value)}
            className="pesquisar"
          >

          </input>
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
        <div>
          <div>
            {agendamento?.map((agendamento) => (
              <Card
                key={agendamento?.ID}
                id={agendamento?.ID}
                descricao={agendamento?.DESCRICAO}
                data={agendamento?.DATA}
                horario={agendamento?.HORARIO}
                tatuador_id={agendamento?.TATUADOR_ID}
                cliente_id={agendamento?.CLIENTE_ID}
                preco={agendamento?.PRECO}
              />
            ))}
          </div>
          {!hidden ? (
            <div className="card-agendamentos">
              {array?.map((item) => (
                <Card
                  key={item?.ID}
                  id={item?.ID}
                  descricao={item?.DESCRICAO}
                  data={item?.DATA}
                  horario={item?.HORARIO}
                  tatuador_id={item?.TATUADOR_ID}
                  cliente_id={item?.CLIENTE_ID}
                  preco={item?.PRECO}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Agenda;
