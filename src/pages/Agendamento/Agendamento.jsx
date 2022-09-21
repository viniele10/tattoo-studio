import React from "react";
import "./Agendamento.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/Header/HeaderHome";

import Input from "../../components/Form/Input";
import "../../components/Form/Input.css";

function Agendamento() {
  const [name, setNome] = useState("");
  const [contact, setContato] = useState("");
  const [city, setCidade] = useState("");
  const [age, setIdade] = useState("");
  const [tatuador, setTatuador] = useState("1");
  const [date, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [descricao, setDescricao] = useState("");
  let dataFormat = new Date(date);
  let data =
    dataFormat.getDate() +
    1 +
    "-" +
    (dataFormat.getMonth() + 1) +
    "-" +
    dataFormat.getFullYear();

  const [preco, setValor] = useState("grande");

  function onChangeValue(event) {
    setValor(event.target.value);
    console.log(event.target.value);
  }

  let [id, setId] = useState(0);

  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://tattoo-api-squad7-resilia.herokuapp.com/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clients]);

  id = clients.length + 1



  return (
    <div className="bg-01">
      <HeaderHome tatuador="/#tatuador" contato="/#contato" />
      <div id="agendamento" className="container-agendamento">
          <form>
            <h1 className="titulo-agendamento">MARQUE SEU HORÁRIO</h1>
            {/* <label>Nome</label> */}
            <div className="wrap-input">
              <Input
                className={name !== "" ? "has-val input" : "input"}
                onChange={(e) => setNome(e.target.value)}
                type="text"
              ></Input>
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            {/* <label>Contato</label> */}
            <div className="grid-form1">
              <div className="wrap-input">
                <Input
                  className={contact !== "" ? "has-val input" : "input"}
                  onChange={(e) => setContato(e.target.value)}
                  type="text"
                ></Input>
                <span
                  className="focus-input"
                  data-placeholder="Telefone"
                ></span>
              </div>

              {/* <label>Idade:</label> */}
              <div className="wrap-input">
                <Input
                  className={age !== "" ? "has-val input" : "input"}
                  onChange={(e) => setIdade(e.target.value)}
                  type="number"
                ></Input>
                <span className="focus-input" data-placeholder="Idade"></span>
              </div>
            </div>

            {/* <label>Cidade:</label> */}
            <div className="wrap-input">
              <input
                className={city !== "" ? "has-val input" : "input"}
                onChange={(e) => setCidade(e.target.value)}
                type="text"
              ></input>
              <span className="focus-input" data-placeholder="Cidade"></span>
            </div>

            <div className="grid-form1">
              <div className="wrap-input">
              <label htmlFor="data" className="label">
                Escolha a data:
              </label>
                <input
                  id="data"
                  className={date !== "" ? "has-val input" : "input"}
                  onChange={(e) => setData(e.target.value)}
                  type="date"
                ></input>
              </div>

              <div className="wrap-input">
              <label htmlFor="horario" className="label">
                Escolha o horário:
              </label>
                <input
                  id="horario"
                  className={horario !== "" ? "has-val input" : "input"}
                  onChange={(e) => setHorario(e.target.value)}
                  type="time"
                ></input>
              </div>
            </div>

            <label htmlFor="select-tatuadores" className="label fw-400">
              Escolha o tatuador:
            </label>
            <div className="wrap-input">
              <select
                className={tatuador !== "" ? "has-val input" : "input"}
                value={tatuador}
                onChange={(e) => setTatuador(e.target.value)}
                id="select-tatuadores"
              >
                <option value="1">Felipe Moraes</option>
                <option value="2">Lidia Souza</option>
                <option value="3">Zoe Smith</option>
              </select>
              <span className="custom-arrow"></span>
            </div>
            <div className="wrap-input">
              <input
                className={descricao !== "" ? "has-val input" : "input"}
                onChange={(e) => setDescricao(e.target.value)}
                type="text"
              ></input>
              <span
                className="focus-input"
                data-placeholder="Descrição da Tatuagem"
              ></span>
            </div>

            <div className="radio-container">
            <h3 className="label fw-400 title-preco">Escolha o tamanho: </h3>

            <div onChange={onChangeValue} className="radio">
                <input
                id="400"
                  type="radio"
                  value="400"
                  name="preco"
                  defaultChecked={preco === "400"}
                />
              <label htmlFor="400" className="label">
                Pequena (R$400)
              </label>
              <br></br>
                <input id="600"
                  type="radio"
                  value="600"
                  name="preco"
                  defaultChecked={preco == "600"}
                />
              <label htmlFor="600" className="label">
                Média (R$600)
              </label>
              <br></br>
                <input id="800"
                  type="radio"
                  value="800"
                  name="preco"
                  defaultChecked={preco === "800"}
                />
              <label htmlFor="800" className="label">
                Grande (R$800)
              </label>
            </div>
            </div>
          </form>
            <button type="submit" onClick={postData} className="btn btn-agendamento">
              {" "}
              Confirmar Agendamento
            </button>
      </div>
      <Footer link="/#home" />
    </div>
  );
}

export default Agendamento;
