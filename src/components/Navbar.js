import React, { Component } from 'react';

import DrawerToggleButton from './Drawer/DrawerToggleButton';
import './Navbar.css';

class NavBar extends Component {
    render() {
        return (
            <header className="navbar">
                <nav className="navigationBar">
                    <div>
                        <DrawerToggleButton />
                    </div>
                    <div className="navbarLogo"><a href="/">LOGO</a></div>
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
    }
}

export default NavBar;
