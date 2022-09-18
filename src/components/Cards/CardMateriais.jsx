import React from 'react';
import "./CardMateriais.css";

export default function Card (props){
    return (
        <div className='materiais'>
            <div className="materiais1">
                <h6>ID: {props.id}</h6>
                <h6>Fornecedor: {props.fornecedor}</h6>
                <h6>Produto: {props.produto}</h6>
                <h6>Quantidade: {props.quantidade}</h6>
                <h6>Valor: {props.valor}</h6>


        <button className='adicionar'>Adicionar</button>
        <button className='deletar'>Deletar</button>
        <button className='alterar'>Alterar</button>

        </div>

        </div>
        
    )
}