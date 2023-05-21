import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";
import "./MainNavigation.css";
function MainNavigation(props) {
  const [tiroirOuvert, setTiroirOuvert] = useState(false);

  const ouvrirTiroir = () => {
    setTiroirOuvert(true);
  };

  const fermerTiroir = () => {
    setTiroirOuvert(false);
  };
  return (
    <React.Fragment>
      {tiroirOuvert && <Backdrop onClick={fermerTiroir} />}
      <SideDrawer show={tiroirOuvert} onClick={fermerTiroir}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={ouvrirTiroir}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">
            <img
              src="https://www.cmontmorency.qc.ca/wp-content/themes/axial/images/logo-footer.png"
              alt="logo Montmorency"
            />
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
      
    </React.Fragment>
  );
}

export default MainNavigation;
