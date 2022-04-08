import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/navbar" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
            
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/feature" className="nav-link">Feature</Link>
              </li>
              <li className="nav-item">
                <Link to="/testimony" className="nav-link">Testimony</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
