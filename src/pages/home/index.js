import React from "react";

import LoadingInfo from "../../assets/images/loading.gif";

import Navbar from "../../components/navbar/navbar";

export default class Home extends React.Component {
  render() {
    const playlistURL =
      "https://www.youtube.com/embed/videoseries?list=PLJkYa8ZsSFTpKHPCyKjCjWULL-OD2T-K7";
    return (
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <div class="sub-body">
          <div className="imgDiv">
            <img
              id="loading-banner"
              src={LoadingInfo}
              width="70%"
              alt="Loading Word Banner"
            />
          </div>
          <div id="playlistBox">
            <iframe
              title="Playlist"
              src={playlistURL}
              frameborder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="notes">
            <h1>UPDATE NOTES</h1>
            <h2>DD/MM/YY</h2>
            <div class="notes-info">
              <h3>22/03/2021 - 23:00</h3>
              <p>⟫ Deploy</p>
              <p>
                + Adição de Links em /CONNECTIONS <br /> + Flex-box
              </p>
              <h3>15/03/2021 - 23:05</h3>
              <p>
                + Início Connections <br /> + Playlist Home
              </p>
              <h3>15/03/2021 - 12:44</h3>
              <p>⟫ Deploy</p>
              <p>
                + Novo Layout em /SOBRE <br />+ Bug Fix Navbar
              </p>
              <h3>15/02/2021 - 21:20</h3>
              <p>⟫ Deploy</p>
              <p>+ Navbar Mobile</p>
              <h3>15/02/2021 - 15:15</h3>
              <p>
                + Scroll Bar em Update Notes <br />+ Melhora CSS
              </p>
              <h3>08/02/2021 - 12:50</h3>
              <p>⟫ Deploy</p>
              <p>
                + Adaptação CSS <br />+ Update Notes session
              </p>
              <h3>08/02/2021 - 11:00</h3>
              <p>+ Hidden Navbar </p>
              <h3>08/02/2021 - 10:00</h3>
              <p>+ Responsividade para aparelhos mobile</p>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
