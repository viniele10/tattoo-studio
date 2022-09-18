import React from "react";

import Logo from "../../assets/logo.svg";
import "./Footer.css"

function Footer() {
  return (
    <div className="bg">
      <footer className="container footer">
        <img src={Logo} alt="Mellv - Logo" />
        <p>2022 © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Footer;
