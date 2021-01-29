import React from "react";

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
        <div className="sub-body">
          <div className="imgDiv">
            <img
              id="loading-banner"
              src={LoadingInfo}
              width="50%"
              alt="Loading Word Banner"
            />
          </div>
          <div>
            <p>Olá, bem vindo :)</p>
            <p>Hello and Welcome :)</p>
          </div>
        </div>
      </body>
    );
  }
}
