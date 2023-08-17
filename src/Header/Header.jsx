// create a header component saying "You have been invited !"
import React from 'react';
import './Header.scss'; // Import your global styles here

const Header = () => {
    return (
        <div className="header-container">
            <div className='header-title'>You have been invited!</div>
        </div>
    );
};

export default Header;
