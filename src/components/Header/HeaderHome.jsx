import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

function HeaderHome() {
  return (
    <div className="container">
      <header className="header-home">
        <nav>
          <Link to="/">
            <img src={Logo} alt="Mellv - Logo" />
          </Link>
          <ul role="list">
            <li>
              <a href="#">Tatuadores</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <Link to="/agendamento">
              <li>
                <button className="btn">Agendar</button>
              </li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderHome;
