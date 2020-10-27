import React from 'react';
import './Navbar.css';


const Navbar = (props)  => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_logo">
               <div className="logo">
               <i class="fa fa-film" aria-hidden="true"></i>
                </div>
                <a href="/">Catalog-Z</a>
                </div>
               
              <div className="navbar_navigation_items">
                <ul>
                    <li><a href="/">Photos</a></li>
                    <li><a href="/">Videos</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;