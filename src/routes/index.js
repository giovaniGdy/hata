import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home/";
import Sobre from "../pages/sobre";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/sobre" component={Sobre} />
  </BrowserRouter>
);

export default Routes;
