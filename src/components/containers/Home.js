import React from 'react';
import "./Home.css"

const Home = props => {
    
    return (  
        <header className="headline-content">
            <p>NUESTRO ÁLBUM MÁS RECIENTE</p>
            <h1>FORTALEZA</h1>
            <div className="headline-buttons">
                <button className="button1">Echale un vistazo</button>
                <button className="button2">Miranos en vivo</button>
            </div>
        </header>
    );
};

export default Home;