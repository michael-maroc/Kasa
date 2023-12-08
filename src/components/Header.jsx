import React from 'react';
import KasaLogo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo-container">
          <img className="nav__logo" src={KasaLogo} alt="Logo" />
        </div>
        <ul className="nav__list">
          <li className="nav__link">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="nav__link">
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
