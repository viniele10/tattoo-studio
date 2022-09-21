import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderMateriais from "../../components/Header/HeaderMateriais";
import Footer from "../../components/Footer/Footer";
import { Buttons } from "../../components/Buttons/Buttons.jsx";
import './Materiais.css'
import CardM from "../../components/Cards/CardMateriais.jsx";


const urlMateriais = 'https://tattoo-api-squad7-resilia.herokuapp.com/materiais';


function Materiais() {

  const [materiais, setMateriais] = useState();


  // async function getMateriais() {
  //   try {
  //     let resp = await fetch(`${urlMateriais}/materials`);
  //     resp = await resp.json();

  //     setMateriais(resp);
  //     return resp;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // getMateriais()


  // useEffect(() => {
  // axios
  // .get(`${urlMateriais}/materials`)
  // .then((res) => {
  //   setMateriais([...res.data]);


  // })
  // .catch((error) => {
  //   console.log(error);
  // });;
  // }, []);
  // const [clients, setClients] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://tattoo-api-squad7-resilia.herokuapp.com/materials")
  //     .then((res) => {
  //       setClients(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log(clients);


  const [dados, setDados] = React.useState([]);
  const urlM = "https://tattoo-api-squad7-resilia.herokuapp.com/materials"

  const getApi = async () => {
    try {
      let res = await fetch(urlM);
      let data = await res.json();
      // console.log(data[0].FORNECEDOR, data[0]);
      setDados([...dados, ...data]);
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => { getApi(); }, []);

console.log(dados)
  
  let idM = '';
  let fornecedorM = '';
  let produtoM = '';
  let quantidadeM = '';
  let valorM = '';

  {dados.map(data => { 
    idM = data.ID;
    fornecedorM = data.FORNECEDOR;
    produtoM = data.PRODUTO;
    quantidadeM =   data.QUANTIDADE;
    valorM = data.VALOR;
    })}

    // console.log(fornecedorM)

  return (
    <div>
      <h1>ok</h1>
      <h2>Id: {idM}</h2>
      <h2>Fornecedor: {fornecedorM}</h2>
      <h2>Produto: ({produtoM})</h2>
      <h2>Quantidade: {quantidadeM} Und</h2>
      <h2>Valor: R${valorM},00</h2>

      <div>
        {dados?.map((dados) => (
          <CardM key={dados?.ID}/>
        ))

        }
      </div>


    </div>
  );
}
  export default Materiais;
  