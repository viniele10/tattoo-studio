import React from "react";

import HeaderTatuador from "../../components/Header/HeaderTatuador";

function Agenda() {
  return (
    <div className="bg-0">
      <HeaderTatuador nome="Voltar" />
      <div className="container">
        <form>
          <input type="search" />
        </form>
      </div>
    </div>
  );
}

export default Agenda;
