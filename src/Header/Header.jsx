// create a header component saying "You have been invited !"
import React from 'react';
import fancyline3 from '../assets/fancyline3.png';
import './Header.scss'; // Import your global styles here

const Header = () => {
    return (
        <div className="header-container">
            <div className='header-title'>You have been invited!</div>
            <div className='image-container'>
                <img src={fancyline3} alt="fancyline3" className='fancy-line-image' />
            </div>
        </div>
    );
};

export default Header;
