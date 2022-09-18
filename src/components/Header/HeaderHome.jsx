import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { HashLink } from 'react-router-hash-link';
import useMedia from "../../hooks/useMedia";
import styles from './Header.module.css'

function HeaderHome(props) {

  const [mobileMenu, setMobileMenu] = React.useState(false)

  const mobile = useMedia('(max-width: 700px)')
  console.log(mobile)

  return (
    <div className="container">
      <header className={styles.header}>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Mellv - Logo" />
          </Link>
          {mobile &&
          <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
          }
          <ul role="list">
            <li>
              <HashLink smooth to={props.tatuador}>
              Tatuadores
              </HashLink>
            </li>
            <li>
            <HashLink smooth to={props.contato}>
              Contato
              </HashLink>
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
