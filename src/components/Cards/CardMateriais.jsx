import React from 'react';
import "./CardMateriais.css";
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Card (props){

    return (
        <div className='materiais'>
            <div className="material">
                <h6>ID: {props.id}</h6>
                <h6>Descrição: {props.fornecedor}</h6>
                <h6>Data: {props.produto}</h6>
                <h6>Horário: {props.valor}</h6>
                <h6>Preço: {props.quantidade}</h6>

                <br></br>

            </div>
        </div>
        
    )
}