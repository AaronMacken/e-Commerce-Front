import React from "react";
import "./Navbar.css";
import ResponsiveLi from "./ResponsiveLi";
import { NavLink } from "react-router-dom";

const activeStyle = { fontWeight: "700" };

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="myNavbar"
    >
      <p
        className="navbar-brand"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-brand-text">
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
              className="hover"
            >
              Cart
            </NavLink>
          </ResponsiveLi>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
