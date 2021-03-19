import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <a className="navbar-brand" >
                <h1>Nehreet-Kaur</h1>
      </a>
            <div className="links">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#Aboutme"
                            
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
            </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Work"
                            
                            className={window.location.pathname === "/my-work" ? "nav-link active" : "nav-link"}
                        >
                            My-Work
            </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills"
                            
                            className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
                        >
                            Skills
            </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact"
                            
                            className={window.location.pathname === "/contact-Me" ? "nav-link active" : "nav-link"}
                        >
                            Contact-Me
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
