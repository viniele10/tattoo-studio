import React from "react";

import { HashLink } from 'react-router-hash-link';

import Logo from "../../images/logo.svg";
import "./Footer.css"

function Footer(props) {
  return (
    <div className="bg-0">
      <footer className="container footer">
        <HashLink to={props.link}>
        <img src={Logo} alt="Mellv - Logo" />
        </HashLink>
        <p>2022 © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Footer;
