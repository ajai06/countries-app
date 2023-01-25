import React from "react";

import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ setFilter, filter }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm  justify-content-between">
      <span className="navbar-brand pointer" onClick={() => setFilter("All")}>
        Countries
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse collapseStyles"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <span
            onClick={() => setFilter("All")}
            className={
              "nav-item nav-link pointer " +
              (filter === "All" ? " activeLink" : "")
            }
          >
            All
          </span>
          <span
            onClick={() => setFilter("Asia")}
            className={
              "nav-item nav-link pointer " +
              (filter === "Asia" ? " activeLink" : "")
            }
          >
            Asia
          </span>
          <span
            onClick={() => setFilter("Europe")}
            className={
              "nav-item nav-link mr-5 pointer " +
              (filter === "Europe" ? " activeLink" : "")
            }
          >
            Europe
          </span>
          <span
            className="nav-item nav-link pointer"
            onClick={() => navigate("/login")}
          >
            Logout
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
