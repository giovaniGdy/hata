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
              width="70%"
              alt="Loading Word Banner"
            />
          </div>
          <div class="notes">
            <h1>UPDATE NOTES</h1>
            <div class="notes-info">
              <h2>DD/MM/YY</h2>
              <p>08/02/2021 - 12:50 | > Deploy</p>
              <p>08/02/2021 - 12:50 | + Adaptação CSS + Update Notes session </p>
              <p>08/02/2021 - 11:00 | + Hidden Navbar </p>
              <p>08/02/2021 - 10:00 | + Responsividade para aparelhos mobile</p>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
