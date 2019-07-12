import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div></div>
                    <div><a href="/">LOGO</a></div>
                    <div>
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
