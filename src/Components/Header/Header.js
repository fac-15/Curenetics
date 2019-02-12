import React from "react";
import "./header.css";

// this causes problems if Router is removed, though it is technically unused
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  // const logo = require("./curenetics-blue-01.svg");
  return (
    <header className="header">
      <section className="main-section">
        <p>Logo | Header | Menu</p>

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
        </>
      </section>
    </header>
  );
};

export default Header;
