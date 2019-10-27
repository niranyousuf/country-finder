import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h2 className="logo"><a href="/">Country Finder</a></h2>
                <ul className="menu">
                    <li>
                        <Link to="/">Regions</Link>
                    </li>
                    <li>
                        <Link to="/all-countries">All Countries</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
