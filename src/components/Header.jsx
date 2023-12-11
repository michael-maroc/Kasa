import HeaderLogo from '../assets/HeaderLogo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-container">
          <img className="nav__logo" src={HeaderLogo} alt="logo Kasa" />
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/">Accueil</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
