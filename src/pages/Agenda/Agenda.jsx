import React from "react";

import axios from "axios";

import HeaderTatuador from "../../components/Header/HeaderTatuador";

function Agenda(props) {
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://tattoo-api-squad7-resilia.herokuapp.com/agendamentos")
      .then((response) => {
        setDados(response.data.Agendamentos);
      })

      .catch(() => {
        console.log("Deu errrado");
      });
  }, []);

  let array = [];

  dados.find((agendamento) => {
    if (agendamento?.TATUADOR_ID === 1 && props.nome === "Felipe Moraes") {
      array.push(agendamento)
    } else if (agendamento?.TATUADOR_ID === 3 && props.nome === "Zoe Smith") {
      array.push(agendamento);
    } else if (agendamento?.TATUADOR_ID === 2 && props.nome === "Lidia Souza") {
      array.push(agendamento);
    }
  });

  return (
    <div className="bg-0">
      <HeaderTatuador nome="Voltar" />
      <div className="container">
        <form>
          <h1 style={{ color: "white" }}>Agenda: {props.nome}</h1>
          <input type="search" />
        </form>
        {array?.map((item) => {
          return (
            <div key={item?.ID}>
              <div>
                <p style={{ color: "white" }}>{item?.DESCRICAO}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Agenda;
