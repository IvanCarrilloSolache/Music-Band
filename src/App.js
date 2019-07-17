import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MiddleDrawer from './components/Drawer/MiddleDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component {
  //decides whether the middledrawer is visible or not
  state = {
    MiddleDrawerOpen: false
  };
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
    let middleDrawer;
    let backdrop;
    // check if middleDrawerOpen is open to display close
    if (this.state.middleDrawerOpen) {
      middleDrawer = <MiddleDrawer />
      backdrop = <Backdrop /> 
    }

    return (
      <div style={{height: '100%'}}>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        {middleDrawer}
        {backdrop}
        <main style={{marginTop: '5vw'}}>
          <p>Content goes here!</p>
        </main>
      </div>
    );
  }
};

export default App;
