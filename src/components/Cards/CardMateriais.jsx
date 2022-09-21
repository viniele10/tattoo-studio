import React from "react";
import "./CardAgenda.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const [hidden, setHidden] = useState(true);
  const [confirm, setConfirm] = useState(true);
  const [id, setId] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  // PUT
  const updateData = (e) => {
    e.preventDefault();
    axios.put(
      `https://tattoo-api-squad7-resilia.herokuapp.com/material/${id}`,
      {
        id,
        fornecedor,
        produto,
        quantidade,
        valor,
      }
    );
    alert("Atualização concluída! Atualize a página.");
  };


  // const createData = (e) => {
  //   e.preventDefault();
  //   axios.post(
  //     `https://tattoo-api-squad7-resilia.herokuapp.com/material`,
  //     {
  //       id,
  //       fornecedor,
  //       produto,
  //       quantidade,
  //       valor,
  //     }
  //   );
  //   alert("Material Criado! Atualize a página.");
  // };

  // const postData = (e) => {
  //   setId(id);
  //   let cliente_id = id;
  //   e.preventDefault();

  //   axios.post(
  //     `https://tattoo-api-squad7-resilia.herokuapp.com/material`,
  //     {
  //       ID,
  //       FORNECEDOR,
  //       PRODUTO,
  //       QUANTIDADE,
  //       VALOR
  //     } 
  //   ).then((res) => {
  //     console.log(res.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // };




  const deleteMaterial = (id) => {
    axios.delete(
      `https://tattoo-api-squad7-resilia.herokuapp.com/material/${id}`
    );
    alert("Material deletado! Atualize a página.");
  };

  console.log(hidden);

  return (
    <div className="agendamentos">
      <div className="agenda1">
        {!confirm ? <h2>✅ </h2> : null}
        <h6>
          <strong>ID:</strong> {props.id}
        </h6>
        <h6>
          <strong>Fornecedor:</strong> {props.fornecedor}
        </h6>
        <h6>
          <strong>Produto:</strong> {props.produto}
        </h6>
        <h6>
          <strong>Quantidade:</strong> {props.quantidade}
        </h6>
        <h6>
          <strong>Valor:</strong> {props.valor}
        </h6>
        <button onClick={() => deleteMaterial(props.id)} className="x">
          X
        </button>
      </div>
      <div className="altConf">
        <button onClick={() => setConfirm((s) => !s)} className="conf">
          Confirmar{" "}
        </button>
        <button onClick={() => setHidden((s) => !s)} className="alt">
          Editar
        </button>
        {!hidden ? (
          <div className="alterar">
            <input
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
              type="number"
            ></input>
            <input
              placeholder="Fornecedor"
              onChange={(e) => setFornecedor(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Produto"
              onChange={(e) => setProduto(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Quantidade"
              onChange={(e) => setQuantidade(e.target.value)}
              type="number"
            ></input>
            <input
              placeholder="Valor"
              onChange={(e) => setValor(e.target.value)}
              type="number"
            ></input>

            <button type="submit" onClick={updateData} className="botao">
              Salvar
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
