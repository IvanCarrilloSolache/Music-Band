import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MiddleDrawer from './components/Drawer/MiddleDrawer';

function App() {
  return (
    <div style={{height: '100%'}}>
      <NavBar />
      <MiddleDrawer />
      <main style={{marginTop: '5vw'}}>
        <p>Content goes here!</p>
      </main>
      
    </div>
  );
}

export default App;
