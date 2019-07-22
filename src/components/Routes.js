import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import Band from "./containers/Band";
import Music from "./containers/Music";
import Tour from "./containers/Tour";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Home} />
            <Route path="/Band" component={Band} />
            <Route path="/Music" component={Music} />
            <Route path="/Tour" component={Tour} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
        </div>
    </BrowserRouter>
);
    
    export default Routes;