import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from "../pages/mainPage";

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={MainPage} />
    </BrowserRouter>
);

export default Routes;