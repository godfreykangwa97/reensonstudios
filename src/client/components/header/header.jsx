import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";
import Logo from "../../../_assets/site/logo.png"


const  HomeHeader = () => {

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.home-header');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('stickyHeader') : header.classList.remove('stickyHeader');
    };

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className="home-header">

           <div className="home-header-holder">
               <Link to="/home"><img src={Logo} className="logo" alt="Reenson studios"/></Link>

               <div className="navigation">
                   <button className="icon-btn menu-toggle" onClick={handleToggle}><i className="fas fa-bars"/></button>
                   <nav className={`home-navigation ${isActive ? "danger" : "SlideRight"}`}>
                       <Link to="/home" className="page-link">Home</Link>
                       <Link to="/works" className="page-link">Works</Link>
                       <Link to="/services" className="header-nav-button">Services</Link>
                       <Link to="/contact" className="page-link">Contact</Link>
                       <Link to="/about" className="page-link">About</Link>
                   </nav>
               </div>
           </div>
        </header>
    );
};
export default HomeHeader;