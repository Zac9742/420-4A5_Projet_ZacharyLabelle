import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/info">Informations</NavLink>
    </li>
    <li>
      <NavLink to="/stages">Stages</NavLink>
    </li>
    <li>
      <NavLink to="/etudiants">Etudiants</NavLink>
    </li>
  </ul>
};

export default NavLinks;