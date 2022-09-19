import React from 'react'

import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from './Header.module.css';


export default function HeaderMateriais() {
    return (
<div className="container">

      <header className={styles.header}>
        <nav>

          <Link to="/">
            <img src={Logo} alt="Mellv - Logo" />
          </Link>

          <ul>
            <Link to="/login">
              <li>Sair</li>
            </Link>
          </ul>

        </nav>
      </header>

    </div>
    );
};
