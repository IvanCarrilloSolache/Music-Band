import React from 'react';
import './App.css';
import NavBar from './components/Navbar';


function App() {
  return (
    <div>
      <NavBar />
      <main style={{marginTop: '5vw'}}>
        <p>Content goes here!</p>
      </main>
      
    </div>
  );
}

export default App;
