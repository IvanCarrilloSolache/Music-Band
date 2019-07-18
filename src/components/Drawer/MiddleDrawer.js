import React from 'react';
import './MiddleDrawer.css';

const middleDrawer = props => {
    let drawerClasses = 'middle-drawer';
        if (props.show) {
            drawerClasses = 'middle-drawer open';
        }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">BAND</a></li>
            <li><a href="/">MUSIC</a></li>
            <li><a href="/">TOUR</a></li>
            <li><a href="/">GALLERY</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
    </nav>
    );
};

export default middleDrawer;