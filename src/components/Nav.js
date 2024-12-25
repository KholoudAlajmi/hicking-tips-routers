import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand"
          // style={({ isActive }) => {
          //   return {
          //     textDecoration: isActive ? "underlined" : "none",
          //   };
          // }}
        >
          Hike
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink 
               to="/Home"
              className="nav-link py-3 px-0 px-lg-3 rounded"  style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underlined" : "none",
            };
          }}
        >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink to="/Trips" className="nav-link py-3 px-0 px-lg-3 rounded"  style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underlined" : "none",
            };
          }}
        >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
