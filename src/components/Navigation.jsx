import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='Navigation'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p>Acceuil</p>
                </NavLink>
                <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p>A propos</p>
                </NavLink>
        </nav>
    );
};

export default Navigation;