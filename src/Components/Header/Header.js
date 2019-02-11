import React from "react";
import "./header.css";

// this causes problems if Router is removed, though it is technically unused
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section className="main-section">
        <h1>Logo | Header | Menu</h1>

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
