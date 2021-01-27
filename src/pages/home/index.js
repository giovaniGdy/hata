import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/navbar/navbar";

import LoadingInfo from "../../assets/images/loading.gif";

export default class Home extends React.Component {
  render() {
    return (
      <body>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <div className="imgDiv">
          <img src={LoadingInfo} width="50%" />
        </div>
        <div>
          <a href="../sobre/teste.js">Testando React :D</a>
          <p>
            <Link to="/sobre">aqui</Link>
          </p>
        </div>
      </body>
    );
  }
}
