import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MiddleDrawer from './Drawer/MiddleDrawer';
import Backdrop from './Backdrop/Backdrop';
import Home from "./containers/Home";
import Band from "./containers/Band";
import Music from "./containers/Music";
import Tour from "./containers/Tour";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";
import Error from "./containers/Error";
import NavBar from './Navbar';

class Routes extends Component {
    //decides whether the middledrawer is visible or not
  state = {
    MiddleDrawerOpen: false
  };
  //response to the backdrop when clicked
  backdropClickHandler = () => {
    this.setState({middleDrawerOpen: false});
  }
    //response to the middledrawer when clicked 
    drawerToggleClickHandler = () => {
        //pass a function into setState, in function pass prevState as argument 
        this.setState((prevState) => {
          //display middleDrawerOpen to be close in case is opem
          return {middleDrawerOpen: !prevState.middleDrawerOpen};
        });
    };
    
    render() {
        //make variables to decides whether middleDrawer/backdrop are shown
    let backdrop;
    // check if middleDrawerOpen is open to display close
    if (this.state.middleDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} /> 
    }

        return (
            <BrowserRouter>
                <div>
                    <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
                    <MiddleDrawer show={this.state.middleDrawerOpen} />
                        {backdrop}
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/Band" component={Band} />
                        <Route path="/Music" component={Music} />
                        <Route path="/Tour" component={Tour} />
                        <Route path="/Gallery" component={Gallery} />
                        <Route path="/Contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};
    
export default Routes;