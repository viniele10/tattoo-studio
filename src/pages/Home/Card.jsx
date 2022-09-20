import React from "react";

import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";
import Behance from "../../images/behance.svg";

function Card(props) {
  return (
    <div className="card">
      <div className={props.class}>
        </div> 
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
