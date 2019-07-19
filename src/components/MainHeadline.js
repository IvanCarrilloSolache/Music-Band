import React from 'react';
import "./MainHeadline.css"

const mainHeadline = props => {
    
    return (
        <div  className="main-headline">
        <header>
            <p>nuestro álbum más reciente</p>
            <h1>FORTALEZA</h1>
        </header>
        <div>
            <button>Echale un vistazo</button>
            <button>Miranos en vivo</button>
        </div>
        </div>
    );
};

export default mainHeadline;