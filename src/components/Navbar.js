import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <Link className="navbar-brand" to="/">
                Nehreet-Kaur
      </Link>
            <div className="links">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/discover"
                            className={window.location.pathname === "/My-Work" ? "nav-link active" : "nav-link"}
                        >
                            My-Work
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/Skills" ? "nav-link active" : "nav-link"}
                        >
                            Skills
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact-Me"
                            className={window.location.pathname === "/Contact-Me" ? "nav-link active" : "nav-link"}
                        >
                            Contact-Me
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
