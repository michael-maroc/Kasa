import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/HeaderLogo.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav__logo-container">
          <Link to="/">
            <img className="header__nav__logo" src={HeaderLogo} alt="logo Kasa" />
          </Link>
        </div>
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <Link className="header__nav__link" to="/">Accueil</Link>
          </li>
          <li className="header__nav__item">
            <Link className="header__nav__link" to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
