import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: 'white', color: 'black', position: 'fixed', top: '0', width: '100%', zIndex: '100' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                <div>
                    <h1>Portfolio</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <NavLink exact to="/" style={{ color: 'black', textDecoration: 'none', margin: '0 10px' }}>
                        About
                    </NavLink>
                    <NavLink to="/about" style={{ color: 'black', textDecoration: 'none', margin: '0 10px' }}>
                        Projects
                    </NavLink>
                    <NavLink to="/services" style={{ color: 'black', textDecoration: 'none', margin: '0 10px' }}>
                        Inspiration
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
