import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Routes from "./routes";

import "./styles/home.css";
import "./styles/navbar.css";
import "./styles/sobre.css";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-188430142-1");
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
