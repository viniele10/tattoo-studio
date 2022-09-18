import React from 'react'

import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from './Header.module.css';

function HeaderTatuador() {
  return (
    <div className="container">
      <header className={styles.header}>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Mellv - Logo" />
          </Link>
          <ul role="list">
            <Link to="/login">
              <li>Sair</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderTatuador