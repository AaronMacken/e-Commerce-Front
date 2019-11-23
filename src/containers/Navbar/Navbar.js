import React from "react";
import "./Navbar.css";
import ResponsiveLi from "./ResponsiveLi";
import { NavLink } from "react-router-dom";
import { NONAME } from "dns";

const activeStyle = { fontWeight: "700" };

// const defaultStyle = {
//   paddingRight: '.5rem',
//   paddingReft: '.5rem',
//   color: 'white',
//   fontSize: '1.75rem',
//   fontWeight: '400',
//   margin: '0 1rem -2px 1rem',
//   cursor: 'pointer',
//   transition: 'all .1s',
//   textDecoration: 'none'
// }

function Navbar() {
  return [
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="myNavbar"
    >
      <p
        className="navbar-brand"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="brand-text">
          Hippie<span className="brand-text-highlight">House</span>
        </span>
      </p>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* li component that conditionally renders the data-toggle and data-target attributes
            in order to allow for navbar collapse
          */}
          <ResponsiveLi>
            <NavLink
              exact
              to="/"
              activeStyle={activeStyle}
              // style={defaultStyle}
              className="hover"
            >
              About
            </NavLink>
          </ResponsiveLi>

          <ResponsiveLi>
            <NavLink
              exact
              to="/Products"
              activeStyle={activeStyle}
              // style={defaultStyle}
              className="hover"
            >
              Products
            </NavLink>
          </ResponsiveLi>

          <ResponsiveLi>
            <NavLink
              exact
              to="/Contact"
              activeStyle={activeStyle}
              // style={defaultStyle}
              className="hover"
            >
              Contact Us
            </NavLink>
          </ResponsiveLi>

          <ResponsiveLi>
            <NavLink
              exact
              to="/Cart"
              activeStyle={activeStyle}
              // style={defaultStyle}
              className="hover"
            >
              Cart
            </NavLink>
          </ResponsiveLi>
        </ul>
      </div>
    </nav>
  ];
}

export default Navbar;
