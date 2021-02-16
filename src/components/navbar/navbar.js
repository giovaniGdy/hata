import React from "react";
import { Link, useHistory } from "react-router-dom";

import HLogo from "../../assets/images/H logo.png";

import hiddenNavbar from "./hidden-navbar";

function Navbar() {
  const history = useHistory();

  const returnHome = () => {
    let path = "/";
    history.push(path);
  };

  hiddenNavbar();

  return (
    <div class="navbar">
      <figure>
        <img src={HLogo} onClick={returnHome} alt="H letter" />
      </figure>
      <div id="sub-body-navbar">
        <div class="container">
          <Link id="active" to="/">
            Hatakasy
          </Link>
          <Link to="/dicas">Dicas</Link>
          <div class="subnav">
            <button class="subnavbtn">Listas</button>
            <div class="subnav-content">
              <Link to="#">Error 404</Link>
              <Link to="#">Error 404</Link>
              <Link to="#">Error 404</Link>
            </div>
          </div>
          <Link to="/connections">Links</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
      </div>
      <div id="navbar-hidden">
        <figure>
          <img src={HLogo} onClick={returnHome} alt="H letter" />
        </figure>
        <a href="#top">↑</a>
      </div>
    </div>
  );
}

export default Navbar;
