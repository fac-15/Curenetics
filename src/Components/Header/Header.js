import React from "react";
import "./header.css";

// this causes problems if Router is removed, though it is technically unused
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  const logo = require("./curenetics-small.svg");
  const menuImg = require("./menu-ellipsis.svg");
  return (
    <header className="header">
      <section className="main-section">
        <div>
          <img src={logo} className="header-logo" />
          <h1 className="curenetics">Curenetics</h1>
        </div>
        <button className="menu-button">
          <svg
            className="menu-img"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          </svg>

          <Link to="/basic-info" />
        </button>

        {/* <p>Logo | Header | Menu</p>

        <>
          <ul className="nav_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/single-result">Single Result</Link>
            </li>
            <li>
              <Link to="/basic-info">Basic Info</Link>
            </li>
          </ul>
        </> */}
      </section>
    </header>
  );
};

export default Header;
