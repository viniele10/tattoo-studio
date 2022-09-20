import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from './Header.module.css';

function HeaderTatuador(props) {

  const navigate = useNavigate();

  return (
    <div className="container">
      <header className={styles.header}>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Mellv - Logo" />
          </Link>
          <ul role="list">
            <Link>
              <li onClick={() => navigate(-1)}>{props.nome}</li>
              </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderTatuador