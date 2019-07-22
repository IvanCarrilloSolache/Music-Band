import React, { Component } from 'react';
import Routes from "./components/Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <main style={{marginTop: '5vw'}}>
          <Routes />
        </main>
      </div>
    );
  }
};

export default App;
