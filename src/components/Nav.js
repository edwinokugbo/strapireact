// Navigation component. Contains top navigation links
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../img/quickstart.png'
import searchIcon from '../icons/loupe_white.svg'
import harmburger from '../icons/icons8-menu.svg'
import userImg from '../img/user.png'
import { Link } from 'react-router-dom'

function Nav() {
    const [navStyle, setNavStyle] = useState('')
    const location = useLocation();

    //   Apply Naviation background for all pages except home page so the home page 
    //   image background can show full page
    useEffect(() => {
        // If current path is root('/'), remove NAV background
        if (location.pathname !== "/") {
            setNavStyle("navbar bg-site")
        } else {
            setNavStyle("navbar")
        }

        // Check if menu is opened with Mobile harmburger click and close if yes
        const menuItems = document.getElementById("menuitems")
        if (menuItems.style.display === "block") {
            menuItems.style.display = "none"
        }
    }, [location])

    return (
        <div className={navStyle}>
            <div className="navbar__left">
                <Link to="/" className="navbar__left--homelink">
                    <img height="35" width="auto" src={logo} alt="" className="site-logo" />
                    <h3 className="site-title">Strapilicious</h3>
                </Link>
                <img id="harmburger" className="hide-on-desktop" height="50" width="auto" src={harmburger} alt="" />
            </div>
            <div className="navbar__right">
                <ul id="menuitems" className="menu-items hide-on-mobile">
                    <li>
                        <Link to="/about" className="menu-item">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="menu-item">Services</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="menu-item">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="menu-item">Contact</Link>
                    </li>
                    <input id="search-input" className="search-input" type="text" placeholder="Search..." />&nbsp;
                    <span id="toggle-search">
                        <img height="20" width="auto" src={searchIcon} alt="" className="icons" />
                    </span>                
                    <img className="user-img menu-item block" height="30" src={userImg} alt="" />
                    <img className="pointer" height="10" width="8" src="icons/caret-down.svg" alt="" />
                </ul>
            </div>
        </div>
    )
}

export default Nav
