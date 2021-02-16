import React from "react";

import LoadingInfo from "../../assets/images/loading.gif";

import NavbarSelector from "../../components/navbar/navbar-selector";

export default class Home extends React.Component {
  render() {
    return (
      <body>
        <header>
          <nav>
            <NavbarSelector />
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
            <h2>DD/MM/YY</h2>
            <div class="notes-info">
              <p>08/02/2021 - 21:25 | ⟫ Deploy</p>
              <p>15/02/2021 - 21:20 | + Navbar Mobile</p>
              <p>15/02/2021 - 15:15 | + Scroll Bar em Update Notes</p>
              <p>15/02/2021 - 15:15 | + Melhora CSS</p>
              <p>08/02/2021 - 12:50 | ⟫ Deploy</p>
              <p>
                08/02/2021 - 12:50 | + Adaptação CSS + Update Notes session{" "}
              </p>
              <p>08/02/2021 - 11:00 | + Hidden Navbar </p>
              <p>08/02/2021 - 10:00 | + Responsividade para aparelhos mobile</p>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
