import React from 'react';
import "./Contact.css"

const Contact = () => (
<div>
    <h1>GET IN TOUCH</h1>
    <div>
    <div className="Line"></div>
        <div style={{backgroundColor: 'red'}}>
            <h2>Management</h2>
            <p>John Jones<br />123.456.678</p>
            <p>info@domain.com</p>
        </div>
        <div style={{backgroundColor: 'red'}}>
            <h2>Booking</h2>
            <p>John Jones<br />123.456.678</p>
            <p>info@domain.com</p>
        </div>
        <div className="Line"></div>
    </div>

</div>
);

export default Contact;