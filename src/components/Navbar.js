import React from 'react';

import DrawerToggleButton from './Drawer/DrawerToggleButton';

import './Navbar.css';

const NavBar = props => (
    <header className="navbar">
        <nav className="navigationBar">
            <div className="navbarToggleButton">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="navbarLogo"><a href="/">RADIO BLUES</a></div>
            <div className="separator" />
            <div className="navbarItems">
                <ul>
                    <li><a href="/">BAND</a></li>
                    <li><a href="/">MUSIC</a></li>
                    <li><a href="/">TOUR</a></li>
                    <li><a href="/">GALLERY</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
)
    

export default NavBar;
