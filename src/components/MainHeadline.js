import React from 'react';
import "./MainHeadline.css"

const mainHeadline = props => {
    
    return (  
        <header className="headline-content">
            <p>nuestro álbum más reciente</p>
            <h1>FORTALEZA</h1>
            <div>
                <button>Echale un vistazo</button>
                <button>Miranos en vivo</button>
            </div>
        </header>
    );
};

export default mainHeadline;