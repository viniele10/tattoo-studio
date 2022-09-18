import React from 'react';
import "./Card.css";

export default function Card (props){
    return (
        <div className='agendamentos'>
            <div className="agenda1">
                <h6>{props.id}</h6>
                <h6>{props.descricao}</h6>
                <h6>{props.data}</h6>
                <h6>{props.horario}</h6>
                <h6>{props.tatuador_id}</h6>
                <h6>{props.cliente_id}</h6>
                <h6>{props.preco_id}</h6>


       
        <button className='deletar'>Deletar</button>
        <button className='alterar'>Alterar</button>

        </div>

        </div>
        
    )
}