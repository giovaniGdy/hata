import React from "react";
import { Link } from "react-router-dom";

import HLogo from "../../assets/images/H logo.png"

export default class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <img src={HLogo} alt="H letter"/>
        <div id="sub-body-navbar">
          <div class="container">
            <Link id="active" to="/">
              Hatakasy
            </Link>
            <Link to="/dicas">Dicas</Link>
            <div className="subnav">
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
    );
  }
}
