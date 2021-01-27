import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default class NavBar extends React.Component {
  render() {
    return (
      <div class="topnav">
        <Link class="active" href="#home">
          Home
        </Link>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}
