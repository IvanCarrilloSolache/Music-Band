import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MiddleDrawer from './components/Drawer/MiddleDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  // decides whether the middledrawer is visible or not
  state = {
    MiddleDrawerOpen: false
  }
  // response to the middledrawer when clicked 
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {middleDrawerOpen: !prevState.middleDrawerOpen};
    });
  };

  render() {
    return (
      <div style={{height: '100%'}}>
        <NavBar />
        <MiddleDrawer />
        <Backdrop />
        <main style={{marginTop: '5vw'}}>
          <p>Content goes here!</p>
        </main>
      </div>
    );
  }
};

export default App;
