import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Routes from "./routes";

import "./styles/global-style.css";
import "./styles/home.css";
import "./styles/navbar.css";
import "./styles/sobre.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-188430142-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
