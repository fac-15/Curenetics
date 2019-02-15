import React from "react";
import "./header.css";

// this causes problems if Router is removed, though it is technically unused
import { Link } from "react-router-dom";

const logo = require("./curenetics-small.svg");
const menuImg = require("./menu-ellipsis.svg");

class Header extends React.Component {
  state = {
    open: false,
  };

  menuToggle = () => {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  };
  render() {
    return (
      <header className="header">
        <section className="main-section">
          <Link className="lockup" to="/">
            <img src={logo} className="header-logo" />
            <h1 className="app-title">Curenetics</h1>
          </Link>

          <div className="menu-container">
            <button
              onClick={this.menuToggle}
              className={this.state.open ? "menu-button open" : "menu-button"}
            >
              <svg
                className="menu-img"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </button>
            <ul className="nav-menu">
              <li className="menu-title">Menu</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basic-info">Your Search</Link>
              </li>
              <li>
                <Link to="/results">All Trials</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
