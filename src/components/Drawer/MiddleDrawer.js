import React from 'react';
import { NavLink } from "react-router-dom";

import './MiddleDrawer.css';

const middleDrawer = props => {
    let drawerClasses = 'middle-drawer';
        if (props.show) {
            drawerClasses = 'middle-drawer open';
        }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><NavLink to="/Band">BAND</NavLink></li>
            <li><NavLink to="/Music">MUSIC</NavLink></li>
            <li><NavLink to="/Tour">TOUR</NavLink></li>
            <li><NavLink to="/Gallery">GALLERY</NavLink></li>
            <li><NavLink to="/Contact">CONTACT</NavLink></li>
        </ul>
    </nav>
    );
};

export default middleDrawer;