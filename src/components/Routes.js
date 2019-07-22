import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Band from "./containers/Band";
import Music from "./containers/Music";
import Tour from "./containers/Tour";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import Error from "./containers/Error";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Band" component={Band} />
            <Route path="/Music" component={Music} />
            <Route path="/Tour" component={Tour} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);
    
export default Routes;