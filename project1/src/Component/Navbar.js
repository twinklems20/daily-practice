import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            DDS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <Link to="/about"/> */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <button> */}
            <Link className="btn btn-info m-2" to="/form">Login</Link>
            <Link className="btn btn-warning m-2" to="/form">Sign Out</Link>
            {/* </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
