import React from "react";

import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Behance from "../../assets/behance.svg";

function Card(props) {
  return (
    <div className="card">
      <div className="img-social" />
      <h3 className="card-name">
        <em>{props.nome}</em>
      </h3>
      <p className="card-contact">{props.contato}</p>
      <div className="icon-social card-social">
        <img src={Twitter} />
        <img src={Instagram} />
        <img src={Behance} />
      </div>
    </div>
  );
}

export default Card;
