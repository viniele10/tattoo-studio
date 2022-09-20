import React from "react";
import "./HeaderAgenda.css";

import { Link } from "react-router-dom";

function HeaderAgenda() {
    return (
        <div className="header">
            <h2>Mellv</h2>
            <Link className='sair' to='/'>
              Sair
              </Link>
              <br></br>
              <br></br>
        </div>
    )
}

export default HeaderAgenda;

