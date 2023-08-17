// create a footer component saying "See you soon !"

import React from 'react';
import './Footer.scss'; // Import your global styles here

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-title'>See you soon!</div>
        </div>
    );
}

export default Footer;