import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { HashLink } from 'react-router-hash-link';
import useMedia from "../../hooks/useMedia";
import styles from './Header.module.css'

function HeaderHome(props) {

  const [mobileMenu, setMobileMenu] = React.useState(false)
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false)
  },[pathname])

  const mobile = useMedia('(max-width: 700px)')
  // console.log(mobile)

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
          <ul className={ `${mobile ? styles.navMobile : styles.headerUl} ${mobileMenu && styles.navMobileActive}`} role="list">
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
              <li>
            <Link to="/agendamento">
                <button className={ `${mobile ? styles.navMobileAgenda : "btn"}`} >Agendar</button>
            </Link>
              </li>
              <li>
            <Link to="/login">
                Login
            </Link>
              </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderHome;
