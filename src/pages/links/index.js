import React from "react";

import Navbar from "../../components/navbar/navbar";

import steamLogo from "../../assets/images/connection img/steam-logo.png";
import youtubeLogo from "../../assets/images/connection img/youtube-logo.png";
import githubLogo from "../../assets/images/connection img/github-logo.png";
import twitchLogo from "../../assets/images/connection img/twitch-logo.png";

export default class Connections extends React.Component {
  render() {
    return (
      <body>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <div class="sub-body">
          <div className="connections-links">
            <div className="linkBox" onClick={goToSteam}>
              <img src={steamLogo} alt="Steam Logo" />
              <h1>Steam</h1>
            </div>
            <br />
            <div className="linkBox" onClick={goToYoutube}>
              <img src={youtubeLogo} alt="Youtube Logo" />
              <h1>Youtube</h1>
            </div>
            <br />
            <div className="linkBox" onClick={goToGithub}>
              <img src={githubLogo} alt="Github Logo" />
              <h1>Github</h1>
            </div>
            <br />
            <div className="linkBox" onClick={goToTwitch}>
              <img src={twitchLogo} alt="Twitch Logo" />
              <h1>Twitch</h1>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

function goToSteam() {
  window.open("https://steamcommunity.com/id/Hatakasy/");
}
function goToYoutube() {
  window.open("https://www.youtube.com/channel/UCEOHrzemEYKPQkod4w3pYqA");
}
function goToGithub() {
  window.open("https://github.com/giovaniGdy");
}
function goToTwitch() {
  window.open("https://www.twitch.tv/hatakasy_");
}
