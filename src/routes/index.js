import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home";
import Dicas from "../pages/dicas";
import Lists from "../pages/lists";
import Links from "../pages/links";
import Sobre from "../pages/sobre";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/dicas" component={Dicas} />
    <Route exact path="/listas" component={Lists} />
    <Route exact path="/connections" component={Links} />
    <Route exact path="/sobre" component={Sobre} />
  </BrowserRouter>
);

export default Routes;
