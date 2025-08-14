import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='header'>
            <img src="src/assets/image/LOGO.png" alt="logo de Kasa"/>
            <Navigation />
        </header>
    );
};

export default Header;