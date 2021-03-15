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
    <div>
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
      </div>
      <div class="navbarMobile">
        <i
          class="fa fa-bars"
          id="openbtn"
          onClick={openNav}
          aria-hidden="true"
        ></i>
        <figure>
          <img src={HLogo} onClick={returnHome} alt="H letter" />
        </figure>
        <div id="mySidenav" class="sidenav">
          <button class="closebtn" onClick={closeNav}>
            &times;
          </button>
          <Link to="/"> Home</Link>
          <Link to="/dicas">Dicas</Link>
          <Link to="#">Listas</Link>
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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
