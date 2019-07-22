import React from 'react';
import { NavLink } from "react-router-dom";
import DrawerToggleButton from './Drawer/DrawerToggleButton';

import './Navbar.css';

const NavBar = props => (
    <header className="navbar">
        <nav className="navigationBar">
            <div className="navbarToggleButton">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="navbarLogo"><NavLink to="/">RADIO BLUES</NavLink></div>
            <div className="separator" />
            <div className="navbarItems">
                <ul>
                    <li><NavLink to="/Band">BAND</NavLink></li>
                    <li><NavLink to="/Music">MUSIC</NavLink></li>
                    <li><NavLink to="/Tour">TOUR</NavLink></li>
                    <li><NavLink to="/Gallery">GALLERY</NavLink></li>
                    <li><NavLink to="/Contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);
    
export default NavBar;
